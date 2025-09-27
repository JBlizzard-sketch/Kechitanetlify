import { pickModelForTask } from '@/services/modelRouter'\nimport { cacheGet, cacheSet } from '@/services/cacheService'\nimport fetch from 'node-fetch'
import { getRedis } from '@/lib/redis'
import { config } from '@/lib/config'
import { log } from '@/lib/logger'

const DEFAULT_MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini'\nconst CHEAP_MODEL = process.env.CHEAP_OPENAI_MODEL || 'gpt-4o-mini'

function selectModel(priority){ return priority === 'cheap' ? CHEAP_MODEL : DEFAULT_MODEL }
import { callOpenAIFunction } from '@/lib/openaiClient'

async function callOpenAI(prompt){
  // Use OpenAI function-calling if available to request structured JSON
  const functions = [{ name: 'return_scoring', description: 'Return a JSON object with recommendation, score, reasons', parameters: { type: 'object', properties: { recommendation: { type: 'string' }, score: { type: 'number' }, reasons: { type: 'array', items: { type: 'string' } } }, required: ['recommendation','score'] } }]

  if(!config.openaiKey) throw new Error('no-openai')
  // Prefer OpenAI SDK function-calling
  try {
    const functions = [{ name: 'return_scoring', description: 'Return a JSON object with recommendation, score, reasons', parameters: { type: 'object', properties: { recommendation: { type: 'string' }, score: { type: 'number' }, reasons: { type: 'array', items: { type: 'string' } } }, required: ['recommendation','score'] } }]
    const r = await callOpenAIFunction({ prompt, functions })
    return r
  } catch(e) {
    // fallback to HTTP approach below
  }
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method:'POST',
    headers: { Authorization: `Bearer ${config.openaiKey}`, 'Content-Type':'application/json' },
    body: JSON.stringify({ model: DEFAULT_MODEL, messages:[{role:'user', content:prompt}], max_tokens: 800 })
  })
  if(!res.ok) throw new Error('openai-failed')
  return res.json()
}

async function callHF(prompt){
  if(!config.hfKey) throw new Error('no-hf')
  const res = await fetch(`https://api-inference.huggingface.co/models/${process.env.HF_MODEL}`, {
    method:'POST', headers:{ Authorization: `Bearer ${config.hfKey}`, 'Content-Type':'application/json' }, body: JSON.stringify({ inputs: prompt })
  })
  if(!res.ok) throw new Error('hf-failed')
  return res.json()
}

async function callGroq(prompt){
  // Groq example via HTTP if GROQ_API_KEY and GROQ_MODEL set
  if(!process.env.GROQ_API_KEY || !process.env.GROQ_MODEL) throw new Error('no-groq')
  const res = await fetch(`https://api.groq.ai/v1/engines/${process.env.GROQ_MODEL}/completions`, {
    method:'POST', headers: { 'Authorization': `Bearer ${process.env.GROQ_API_KEY}`, 'Content-Type':'application/json' },
    body: JSON.stringify({ prompt, max_tokens: 800 })
  })
  if(!res.ok) throw new Error('groq-failed')
  return res.json()
}

export async function copilotQuery(prompt){
  const redis = getRedis()
  const cacheKey = 'copilot:' + Buffer.from(prompt).toString('base64').slice(0,50)
  const cached = await cacheGet(cacheKey)
  if(cached) return cached
  if(redis){
    const cachedr = await redis.get(cacheKey)
    if(cachedr) return JSON.parse(cachedr)
  }
  // Provider priority: OpenAI -> Groq -> HF -> local -> mock
  try { const model = pickModelForTask('chat'); const o = await callOpenAI(prompt, model); await cacheSet(cacheKey, {provider:'openai', out:o}, 60*30); return { provider:'openai', out:o } } catch(e){ log('openai fail', e.message) }
  try { const g = await callGroq(prompt); if(redis) await redis.set(cacheKey, JSON.stringify({provider:'groq', out:g}), 'EX', 60*30); return { provider:'groq', out:g } } catch(e){ log('groq fail', e.message) }
  try { const h = await callHF(prompt); if(redis) await redis.set(cacheKey, JSON.stringify({provider:'hf', out:h}), 'EX', 60*30); return { provider:'hf', out:h } } catch(e){ log('hf fail', e.message) }
  if(config.localLlmUrl){
    try {
      const r = await fetch(`${config.localLlmUrl}/generate`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ prompt }) })
      if(r.ok){ const j = await r.json(); if(redis) await redis.set(cacheKey, JSON.stringify({provider:'local', out:j}), 'EX', 60*30); return { provider:'local', out:j } }
    } catch(e){ log('local llm fail', e.message) }
  }
  return { provider:'mock', out: { text: 'Copilot currently unavailable. Try again later.' } }
}

// Copilot templates for credit scoring assistant
export function scoringPromptTemplate(user, loanAmount, ctx={}){
  return `You are Kechita Credit Copilot. Evaluate a loan application.
User: ${JSON.stringify(user)}
Loan Amount: KES ${loanAmount}
Context: ${JSON.stringify(ctx)}
Return a JSON object with keys: recommendation (approve/review/decline), score (0-100), reasons (array).`
}

  // Note: Actual OpenAI function-calling requires using official SDK; this is a best-effort HTTP approximation.
