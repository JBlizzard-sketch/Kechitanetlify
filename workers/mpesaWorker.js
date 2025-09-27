require('../lib/sentry.init').initSentry()
const { initSentry } = require('../lib/sentry')
const Sentry = require('../lib/sentry.init').default
const { Worker } = require('bullmq')
const { Pool } = require('pg')
const connection = { host: process.env.REDIS_HOST || '127.0.0.1', port: process.env.REDIS_PORT || 6379 }
const pool = new Pool({ connectionString: process.env.DATABASE_URL })

initSentry()
const worker = new Worker('jobs', async job => {
  console.log('Worker processing', job.name)
  if(job.name === 'mpesa-reconcile') {
    const { body } = job.data
    const result = body.Body?.stkCallback || body
    const checkoutId = result.CheckoutRequestID || result.checkoutRequestID
    const items = result.CallbackMetadata?.Item || []
    let amount = null, phone = null
    for(const it of items){ if(it.Name && it.Name.toLowerCase().includes('amount')) amount = it.Value; if(it.Name && it.Name.toLowerCase().includes('phonenumber')) phone = it.Value }
    if(!checkoutId) return console.log('no checkoutId in job')
    const client = await pool.connect()
    try {
      await client.query('BEGIN')
      const payRes = await client.query('SELECT * FROM payments WHERE checkout_request_id=$1 LIMIT 1', [checkoutId])
      const payment = payRes.rows[0]
      if(payment) {
        try {

        await client.query('UPDATE payments SET status=$1, raw=$2 WHERE id=$3', ['completed', body, payment.id])
        if(payment.loan_id && amount) {
          const rcheck = await client.query('SELECT * FROM repayments WHERE loan_id=$1 AND amount=$2 ORDER BY paid_at DESC LIMIT 1', [payment.loan_id, amount])
          if(rcheck.rows.length===0){
            await client.query('INSERT INTO repayments (loan_id, amount, paid_at, method) VALUES ($1,$2,now(),$3)', [payment.loan_id, amount, 'mpesa'])
            await client.query('UPDATE loans SET status=$1 WHERE id=$2', ['repayment_received', payment.loan_id])
          } else {
            console.log('Worker: repayment already exists, skipping insert')
          }
        }
      } else {
        console.log('payment not found for', checkoutId)
      }
      await client.query('COMMIT')
    } catch (err) {
      // handle duplicate key errors gracefully
      if(err && err.code === '23505'){
        console.log('Unique constraint violation (likely duplicate payment), continuing')
      } else {
        console.error('worker error', err)
        throw err
      }
    } finally {
      await client.query('ROLLBACK')
      console.error('worker error', err)
    } finally {
      client.release()
    }
  }
}, { connection })

worker.on('completed', job => console.log('Job completed', job.id))
worker.on('failed', (job, err) => console.error('Job failed', err))
