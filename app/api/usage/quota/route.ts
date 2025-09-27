import { NextResponse } from 'next/server'
import { getRedis } from '@/lib/redis'
import { verifySessionFromRequest } from '@/lib/auth'

export async function GET(req){
  const session = await verifySessionFromRequest(req)
  if(!session.ok) return NextResponse.json({ error:'unauthorized' }, { status:401 })
  const user = session.user
  const redis = getRedis()
  if(!redis) return NextResponse.json({ ok:false, message:'redis not configured' })
  const todayKey = `cost:${user.id}:${new Date().toISOString().slice(0,10)}`
  const cents = await redis.get(todayKey) || '0'
  return NextResponse.json({ cents: Number(cents) })
}
