import { verifySessionFromRequest } from '@/lib/auth'
import { checkRate } from '@/utils/rateLimiter'
import { NextResponse } from 'next/server'
import { addEntry } from '@/services/accountingService'
export async function POST(req: Request) {
  const session = await verifySessionFromRequest(req)
  if(!session.ok) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  const user = session.user

  const { userId, type, amount, description } = await req.json()
  if(!userId || !type || !amount) return NextResponse.json({ error: 'missing' }, { status:400 })
  const e = await addEntry(userId, type, amount, description)
  return NextResponse.json({ entry: e })
}
