import { verifySessionFromRequest } from '@/lib/auth'
import { checkRate } from '@/utils/rateLimiter'
import { checkRate } from '@/utils/rateLimiter'
import { NextResponse } from 'next/server'
import { getDarajaToken, buildPassword, timestampYYYYMMDDHHMMSS } from '@/lib/mpesa'
import { insertPayment } from '@/lib/db'

export async function POST(req: Request) {
  const session = await verifySessionFromRequest(req)
  if(!session.ok) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  const user = session.user

  const ip = (req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown')
  const allowed = await checkRate('stk:'+ip, 10, 60)
  if(!allowed) return new Response(JSON.stringify({ error: 'rate_limit' }), { status: 429 })

  const { phone, amount, accountRef, loanId } = await req.json()
  if(!phone || !amount) return NextResponse.json({ error: 'missing' }, { status: 400 })
  try {
    // For sandbox/demo: generate a mock CheckoutRequestID and insert payment record
    const checkoutId = 'mock-checkout-' + Date.now()
    const payment = await insertPayment({ checkout_request_id: checkoutId, loan_id: loanId || null, phone, amount, raw: {} })
    // In production, call Daraja and replace checkoutId with response.CheckoutRequestID
    return NextResponse.json({ ok: true, payment })
  } catch (err) {
    console.error('STK error', err)
    return NextResponse.json({ error: err.message || 'mpesa error' }, { status: 500 })
  }
}
