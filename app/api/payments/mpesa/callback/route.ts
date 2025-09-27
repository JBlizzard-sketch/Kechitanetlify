import Sentry from '@/lib/sentry.init'
import { initSentry } from '@/lib/sentry'
import Sentry from '@/lib/sentry.init'
import { NextResponse } from 'next/server'
import { insertRepayment, query, updateLoanStatus } from '@/lib/db'

export async function POST(req: Request) {
  Sentry.initSentry()

  Sentry.initSentry ? Sentry.initSentry() : null

  const body = await req.json()
  console.log('MPESA CALLBACK', JSON.stringify(body).slice(0,1000))
  try {
    // Daraja sends nested body; try common paths
    const result = body.Body?.stkCallback || body // fallback
    // Extract checkoutRequestID and result code/details
    const checkoutId = result.CheckoutRequestID || result.checkoutRequestID || result.CheckoutRequestID
    const callbackMetadata = result.CallbackMetadata || result.callbackMetadata || {}
    // try to parse amount and phone from metadata items
    let amount = null, phone = null, mpesaReceipt = null
    const items = callbackMetadata.Item || callbackMetadata.items || []
    for(const it of items){
      if(it.Name && it.Name.toLowerCase().includes('amount')) amount = it.Value
      if(it.Name && it.Name.toLowerCase().includes('phonenumber')) phone = it.Value
      if(it.Name && it.Name.toLowerCase().includes('mpesanumber')) mpesaReceipt = it.Value
    }
    // find payment record by checkout id
    const payRes = await query('SELECT * FROM payments WHERE checkout_request_id=$1 LIMIT 1', [checkoutId])
    const payment = payRes.rows[0]
    if(payment && payment.loan_id && amount){
      // idempotency: check if repayment already exists matching payment and amount
      const repCheck = await query('SELECT * FROM repayments WHERE loan_id=$1 AND amount=$2 ORDER BY paid_at DESC LIMIT 1', [payment.loan_id, amount])
      if(repCheck.rows && repCheck.rows.length>0){
        console.log('Repayment already recorded for', payment.id)
      } else {
      // insert repayment and mark payment as completed
      await insertRepayment({ loan_id: payment.loan_id, amount, method: 'mpesa' })
      await query('UPDATE payments SET status=$1, raw=$2 WHERE id=$3', ['completed', body, payment.id])
      // Optionally update loan status if fully repaid - simplistic: mark as repaid
      await updateLoanStatus(payment.loan_id, 'repayment_received')
      }

    } else {
      console.log('Payment or loan not found for callback', checkoutId)
    }
    // respond to M-Pesa
    return NextResponse.json({ ResultCode: 0, ResultDesc: 'Accepted' })
  } catch (err) {
    console.error('Callback processing error', err)
    return NextResponse.json({ ResultCode: 1, ResultDesc: 'Failed' }, { status: 500 })
  }
}
