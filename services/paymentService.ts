import { getDarajaToken, buildPassword, timestampYYYYMMDDHHMMSS } from '@/lib/mpesa'
import { insertPayment } from '@/lib/db'
import { config } from '@/lib/config'
import { log } from '@/lib/logger'

export async function initiateStkPush({ phone, amount, loanId }: { phone:string, amount:number, loanId?:string }) {
  // Try real Daraja if configured
  if (config.mpesa.key && config.mpesa.secret && config.mpesa.shortcode && config.mpesa.passkey) {
    try {
      const token = await getDarajaToken()
      const timestamp = timestampYYYYMMDDHHMMSS()
      const password = buildPassword(config.mpesa.shortcode, config.mpesa.passkey, timestamp)
      const body = {
        BusinessShortCode: config.mpesa.shortcode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: amount,
        PartyA: phone,
        PartyB: config.mpesa.shortcode,
        PhoneNumber: phone,
        CallBackURL: `${config.baseUrl}/api/payments/mpesa/callback`,
        AccountReference: loanId || 'KECHITA',
        TransactionDesc: 'Loan repayment'
      }
      const envUrl = config.mpesa.env === 'production' ? 'https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest' : 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest'
      const res = await fetch(envUrl, { method:'POST', headers: { Authorization: `Bearer ${token}`, 'Content-Type':'application/json' }, body: JSON.stringify(body) })
      const json = await res.json()
      // insert payment record
      const checkout = json?.CheckoutRequestID || 'checkout-' + Date.now()
      const payment = await insertPayment({ checkout_request_id: checkout, loan_id: loanId || null, phone, amount, raw: json })
      return { provider:'mpesa', json, payment }
    } catch (e) {
      log('daraja error', e)
    }
  }
  // fallback: mock
  const checkout = 'mock-checkout-' + Date.now()
  const payment = await insertPayment({ checkout_request_id: checkout, loan_id: loanId || null, phone, amount, raw: { mock: true } })
  return { provider: 'mock', payment }
}
