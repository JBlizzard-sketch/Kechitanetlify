import { query } from '@/lib/db'
import crypto from 'crypto'
export async function createReferral(referrerId:string, refereePhone:string){
  const code = crypto.randomBytes(3).toString('hex')
  const res = await query('INSERT INTO referrals (referrer_id, referee_phone, code) VALUES ($1,$2,$3) RETURNING *', [referrerId, refereePhone, code])
  return res.rows[0]
}
export async function listReferrals(referrerId:string){
  const res = await query('SELECT * FROM referrals WHERE referrer_id=$1', [referrerId])
  return res.rows
}
