import { NextResponse } from 'next/server'
import { listEntries } from '@/services/accountingService'
export async function GET(req: Request) {
  const url = new URL(req.url)
  const userId = url.searchParams.get('userId')
  if(!userId) return NextResponse.json({ error: 'userId required' }, { status:400 })
  const entries = await listEntries(userId)
  return NextResponse.json({ entries })
}
