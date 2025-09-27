import fetch from 'node-fetch'

export async function getDarajaToken() {
  const key = process.env.MPESA_KEY
  const secret = process.env.MPESA_SECRET
  const url = process.env.MPESA_ENV === 'production' ? 'https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials' : 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials'
  if(!key || !secret) throw new Error('MPESA credentials not set')
  const res = await fetch(url, {
    headers: { Authorization: 'Basic ' + Buffer.from(`${key}:${secret}`).toString('base64') }
  })
  if(!res.ok) throw new Error('mpesa token fetch failed')
  const json = await res.json()
  return json.access_token
}

export function buildPassword(shortcode, passkey, timestamp){
  return Buffer.from(`${shortcode}${passkey}${timestamp}`).toString('base64')
}

export function timestampYYYYMMDDHHMMSS(date = new Date()){
  const pad = (n) => n.toString().padStart(2,'0')
  return date.getFullYear().toString()+pad(date.getMonth()+1)+pad(date.getDate())+pad(date.getHours())+pad(date.getMinutes())+pad(date.getSeconds())
}
