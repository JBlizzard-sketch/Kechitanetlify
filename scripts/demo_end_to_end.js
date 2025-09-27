const fetch = require('node-fetch')

const BASE = process.env.BASE_URL || 'http://localhost:3000'

async function run() {
  console.log('Starting demo flow...')
  // 1. create or verify user (mock verify)
  const phone = '+254700000000'
  const verify = await fetch(`${BASE}/api/auth/verify`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ phone, token: '0000', name: 'Demo User' }) })
  const vj = await verify.json()
  console.log('verify', vj.user?.id)
  const userId = vj.user?.id
  // 2. create loan
  const loanRes = await fetch(`${BASE}/api/loans/create`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ userId, amount: 50000, term: 12 }) })
  const loanJson = await loanRes.json()
  console.log('loan created', loanJson.loan?.id)
  const loanId = loanJson.loan?.id
  // 3. initiate STK push (mock)
  const stk = await fetch(`${BASE}/api/payments/mpesa/stk`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ phone, amount: 5000, loanId }) })
  const stkJson = await stk.json()
  console.log('stk initiated', stkJson.payment?.checkout_request_id)
  const checkout = stkJson.payment?.checkout_request_id
  // 4. simulate callback
  const callbackBody = {
    Body: {
      stkCallback: {
        CheckoutRequestID: checkout,
        CallbackMetadata: {
          Item: [
            { Name: 'Amount', Value: 5000 },
            { Name: 'MpesaReceiptNumber', Value: 'ABC123' },
            { Name: 'PhoneNumber', Value: phone }
          ]
        }
      }
    }
  }
  const cb = await fetch(`${BASE}/api/payments/mpesa/callback`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(callbackBody) })
  const cbj = await cb.json()
  console.log('callback response', cbj)
  // 5. fetch loans
  const loans = await fetch(`${BASE}/api/loans/list`).then(r=>r.json())
  console.log('loans', loans.loans)
  console.log('Demo flow complete.')
}

run().catch(e=>{ console.error(e); process.exit(1) })
