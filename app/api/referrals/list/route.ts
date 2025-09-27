import { NextResponse } from 'next/server'
import { listReferrals } from '@/services/referralService'
export async function GET(req: Request) {
  const url = new URL(req.url)
  const referrerId = url.searchParams.get('referrerId')
  if(!referrerId) return NextResponse.json({ error: 'referrerId required' }, { status:400 })
  const list = await listReferrals(referrerId)
  return NextResponse.json({ list })
}
