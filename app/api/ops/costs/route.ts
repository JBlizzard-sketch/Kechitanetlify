import { NextResponse } from 'next/server'
import { getRedis } from '@/lib/redis'
import { query } from '@/lib/db'
export async function GET(){
  const r = getRedis();
  const today = new Date().toISOString().slice(0,10)
  let total = 0
  if(r){
    const keys = await r.keys('cost:*:'+today)
    for(const k of keys){ total += Number(await r.get(k)) }
  }
  // fallback to DB
  try{ const res = await query('SELECT sum(cost_cents)::int as total FROM ai_usage WHERE created_at::date = $1', [today]); if(res.rows[0] && res.rows[0].total) total = Number(res.rows[0].total) }catch(e){}
  return NextResponse.json({ total_cents: total })
}
