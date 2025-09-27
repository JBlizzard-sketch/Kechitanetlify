const { Worker } = require('bullmq')
const { Pool } = require('pg')
const connection = { host: process.env.REDIS_HOST || '127.0.0.1', port: process.env.REDIS_PORT || 6379 }
const pool = new Pool({ connectionString: process.env.DATABASE_URL })

const worker = new Worker('scoring', async job => {
  console.log('Processing scoring job', job.data)
  const { userId, loanAmount, context } = job.data
  // In production, call AI copilot endpoint; here we simulate a simple score
  const score = loanAmount <= 100000 ? 80 : 50
  const rec = score >= 70 ? 'approve' : 'review'
  const client = await pool.connect()
  try {
    await client.query('BEGIN')
    await client.query('INSERT INTO audits (entity_type, entity_id, action, details) VALUES ($1,$2,$3,$4)', ['scoring', userId, 'scored', JSON.stringify({ score, rec, loanAmount })])
    await client.query('COMMIT')
  } catch (e) {
    await client.query('ROLLBACK')
    console.error('scoring worker error', e)
  } finally {
    client.release()
  }
}, { connection })

worker.on('completed', job => console.log('Job completed', job.id))
worker.on('failed', (job, err) => console.error('Job failed', err))
