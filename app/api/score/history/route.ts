import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { verifySessionFromRequest } from '@/lib/auth'

export async function GET(req: Request){
  const session = await verifySessionFromRequest(req)
  if(!session.ok) return NextResponse.json({ error:'unauthorized' }, { status:401 })
  const user = session.user
  const res = await query('SELECT * FROM audits WHERE entity_type=$1 AND entity_id=$2 ORDER BY created_at DESC LIMIT 100', ['scoring', user.id])
  return NextResponse.json({ history: res.rows })
}
