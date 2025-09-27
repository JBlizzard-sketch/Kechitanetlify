import { verifySessionFromRequest } from '@/lib/auth'
import { checkRate } from '@/utils/rateLimiter'
import { NextResponse } from 'next/server'
import { aiChat } from '@/services/aiService'
import { recordAiUsage } from '@/services/usageService'
import { verifySessionFromRequest } from '@/lib/auth'
import { checkRate } from '@/utils/rateLimiter'

export async function POST(req: Request) {
  const session = await verifySessionFromRequest(req)
  if(!session.ok) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  const user = session.user
  const allowed = await checkRate('ai:'+ (user?.id || user?.sub || 'anon'), 20, 60)
  if(!allowed) return NextResponse.json({ error: 'rate_limit' }, { status: 429 })

  const session = await verifySessionFromRequest(req)
  if(!session.ok) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  const user = session.user

  const { prompt } = await req.json()
  if(!prompt) return NextResponse.json({ error: 'prompt required' }, { status: 400 })
  const out = await aiChat(prompt)
  // record usage (cost estimation placeholder)
  try{ await recordAiUsage(user?.id || user?.sub || null, prompt, out.provider || 'unknown', 0) }catch(e){}
  return NextResponse.json(out)
}
