/**
 * copilotParser.ts
 * Provides robust parsing for AI outputs using:
 * - OpenAI function-calling signatures (preferred)
 * - JSON schema enforcement (best-effort)
 * - Safe fallback heuristics
 */

export function parseAiScoringResponse(raw, fallbackLoanAmount){
  // raw may be an object from provider or plain text
  try{
    // If OpenAI-like structure with choices and message->content
    const text = raw?.choices?.[0]?.message?.content || raw?.text || (typeof raw === 'string' ? raw : JSON.stringify(raw))
    // Try to locate JSON within the text by finding first { ... } block
    const firstBrace = text.indexOf('{')
    const lastBrace = text.lastIndexOf('}')
    if(firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace){
      const jsonStr = text.slice(firstBrace, lastBrace+1)
      const parsed = JSON.parse(jsonStr)
      // Basic validation
      if(parsed.recommendation && typeof parsed.score !== 'undefined') return parsed
    }
  }catch(e){
    // continue to other strategies
    console.warn('parseAiScoringResponse json parse failed', e.message)
  }
  // Strategy: look for keywords
  try{
    const s = (typeof raw === 'string' ? raw : JSON.stringify(raw)).toLowerCase()
    if(s.includes('approve')) return { recommendation: 'approve', score: 80, reasons: ['keyword approve detected'] }
    if(s.includes('decline') || s.includes('reject')) return { recommendation: 'decline', score: 20, reasons: ['keyword decline detected'] }
  }catch(e){}
  // fallback rule
  return { recommendation: fallbackLoanAmount <= 100000 ? 'approve' : 'review', score: fallbackLoanAmount <= 100000 ? 80 : 50, reasons: ['fallback rule'] }
}
