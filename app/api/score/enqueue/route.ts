import { NextResponse } from 'next/server'
import { Queue } from 'bullmq'
import { verifySessionFromRequest } from '@/lib/auth'

export async function POST(req: Request){
  const session = await verifySessionFromRequest(req)
  if(!session.ok) return NextResponse.json({ error: 'unauthorized' }, { status:401 })
  const user = session.user
  const { loanAmount, context } = await req.json()
  const queue = new Queue('scoring', { connection: { host: process.env.REDIS_HOST || '127.0.0.1', port: Number(process.env.REDIS_PORT || 6379) } })
  const job = await queue.add('score', { userId: user.id || user.sub || null, loanAmount, context })
  return NextResponse.json({ ok:true, jobId: job.id })
}
