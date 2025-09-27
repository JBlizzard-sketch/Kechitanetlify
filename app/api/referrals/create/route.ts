import { verifySessionFromRequest } from '@/lib/auth'
import { checkRate } from '@/utils/rateLimiter'
import { NextResponse } from 'next/server'
import { createReferral } from '@/services/referralService'
export async function POST(req: Request) {
  const session = await verifySessionFromRequest(req)
  if(!session.ok) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  const user = session.user

  const { referrerId, refereePhone } = await req.json()
  if(!referrerId || !refereePhone) return NextResponse.json({ error: 'missing' }, { status:400 })
  const r = await createReferral(referrerId, refereePhone)
  return NextResponse.json({ referral: r })
}
