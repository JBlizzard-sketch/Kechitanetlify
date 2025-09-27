import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { verifySessionFromRequest } from '@/lib/auth'

export async function POST(req: Request){
  const session = await verifySessionFromRequest(req)
  if(!session.ok) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  const user = session.user
  const { referralCode, loanId } = await req.json()
  if(!referralCode || !loanId) return NextResponse.json({ error: 'missing' }, { status:400 })
  // verify loan belongs to referee and is disbursed/repayment_received
  const loanRes = await query('SELECT * FROM loans WHERE id=$1 LIMIT 1', [loanId])
  const loan = loanRes.rows[0]
  if(!loan) return NextResponse.json({ error: 'loan not found' }, { status:404 })
  if(loan.user_id !== user.id) return NextResponse.json({ error: 'not your loan' }, { status:403 })
  if(loan.status !== 'repayment_received' && loan.status !== 'disbursed') return NextResponse.json({ error: 'loan not eligible' }, { status:400 })
  // find referral by code
  const refRes = await query('SELECT * FROM referrals WHERE code=$1 LIMIT 1', [referralCode])
  const ref = refRes.rows[0]
  if(!ref) return NextResponse.json({ error: 'referral not found' }, { status:404 })
  if(ref.status === 'completed') return NextResponse.json({ ok:true, message: 'already redeemed' })
  // issue reward: update referral and credit referrer accounting entry
  await query('BEGIN')
  try{
    await query('UPDATE referrals SET status=$1, reward_amount=$2 WHERE id=$3', ['completed', 500, ref.id])
    await query('INSERT INTO accounting_entries (user_id, type, amount, description) VALUES ($1,$2,$3,$4)', [ref.referrer_id, 'income', 500, 'Referral reward'])
    await query('COMMIT')
    return NextResponse.json({ ok:true, reward:500 })
  }catch(e){ await query('ROLLBACK'); return NextResponse.json({ error: e.message }, { status:500 }) }
}
