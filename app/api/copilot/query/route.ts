import { NextResponse } from 'next/server'
import { copilotQuery } from '@/services/copilotService'\nimport { estimateTokensAndRecord } from '@/services/tokenAccounting'
import { verifySessionFromRequest } from '@/lib/auth'
import { checkRate } from '@/utils/rateLimiter'
import { checkAndIncrementUserQuota, recordEstimatedCost } from '@/services/quotaService'

export async function POST(req: Request){
  const session = await verifySessionFromRequest(req)
  if(!session.ok) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  const user = session.user
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown'
  const allowed = await checkRate('copilot:'+ (user?.id || user?.sub || ip), 30, 60)
  if(!allowed) return NextResponse.json({ error: 'rate_limit' }, { status: 429 })
  const { prompt } = await req.json()
  if(!prompt) return NextResponse.json({ error:'prompt required' }, { status:400 })
  // quota check
  const okQuota = await checkAndIncrementUserQuota(user?.id || user?.sub || 'anon', 20)
  if(!okQuota) return NextResponse.json({ error: 'quota_exceeded' }, { status: 429 })
  const out = await copilotQuery(prompt)
  try{ await estimateTokensAndRecord(user?.id || user?.sub || null, prompt, out.provider||'unknown', (out.out?.usage?.total_tokens)||100) }catch(e){}
  // estimate cost (placeholder cents) and record
  try{ await recordEstimatedCost(user?.id || user?.sub || 'anon', 10) }catch(e){}
  return NextResponse.json(out)
}
