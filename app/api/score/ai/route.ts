import { NextResponse } from 'next/server'
import { scoringPromptTemplate, copilotQuery } from '@/services/copilotService'\nimport { parseAiScoringResponse } from '@/services/copilotParser'
import { recordAiUsage } from '@/services/usageService'
import { verifySessionFromRequest } from '@/lib/auth'

export async function POST(req: Request){
  const session = await verifySessionFromRequest(req)
  if(!session.ok) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  const user = session.user
  const { loanAmount, context } = await req.json()
  if(!loanAmount) return NextResponse.json({ error: 'loanAmount required' }, { status:400 })
  const prompt = scoringPromptTemplate(user, loanAmount, context || {})
  // quota check
  const okQuota = await checkAndIncrementUserQuota(user?.id || user?.sub || 'anon', 10)
  if(!okQuota) return NextResponse.json({ error: 'quota_exceeded' }, { status: 429 })
  const out = await copilotQuery(prompt)
  try{ await estimateTokensAndRecord(user?.id || user?.sub || null, prompt, out.provider||'unknown', (out.out?.usage?.total_tokens)||100) }catch(e){}
  try{ await recordAiUsage(user?.id || user?.sub || null, prompt, out.provider || 'unknown', 0) }catch(e){}
  // record estimated cost (placeholder 20 cents)
  try{ await recordEstimatedCost(user?.id || user?.sub || 'anon', 20) }catch(e){}
  const parsed = parseAiScoringResponse(out.out || out, loanAmount)
  return NextResponse.json({ provider: out.provider, result: parsed })
}
