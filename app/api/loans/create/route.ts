import { verifySessionFromRequest } from '@/lib/auth'
import { checkRate } from '@/utils/rateLimiter'
import { NextResponse } from 'next/server'
import { query, createOrGetUserByPhone } from '@/lib/db'

function calcMonthly(amount:number, rate:number, term:number){
  const r = rate/100/12
  return Math.round((amount * r) / (1 - Math.pow(1+r, -term)))
}

export async function POST(req: Request) {
  const session = await verifySessionFromRequest(req)
  if(!session.ok) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  const user = session.user

  const body = await req.json()
  const { userPhone, userId, amount, term } = body
  if(!amount || !term) return NextResponse.json({ error: 'missing' }, { status: 400 })
  let uid = userId
  if(!uid && userPhone){
    const user = await createOrGetUserByPhone(userPhone)
    uid = user.id
  }
  const rate = 18.0
  const monthly = calcMonthly(amount, rate, term)
  const score = { recommendation: 'pending', reasons: [] }
  const res = await query(
    `INSERT INTO loans (user_id, amount, interest_rate, term_months, monthly_payment, status, score)
     VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
     [uid, amount, rate, term, monthly, 'pending', JSON.stringify(score)]
  )
  return NextResponse.json({ loan: res.rows[0] })
}
