import { aiChat } from '@/services/aiService'
import { log } from '@/lib/logger'

export async function scoreLoan({ user, amount }){
  // simple rule-based
  if(amount <= 100000) return { recommendation: 'approve', score: 80, reasons: ['microloan amount'] }
  // else consult AI for suggestion
  try{
    const prompt = `Score a loan application: user=${JSON.stringify(user)}, amount=${amount}. Return recommendation and reasons.`
    const out = await aiChat(prompt)
    return { recommendation: out.provider === 'mock' ? 'review' : 'review', details: out }
  }catch(e){ log('scoring ai failed', e.message); return { recommendation: 'review', reason: 'ai-failed' } }
}
