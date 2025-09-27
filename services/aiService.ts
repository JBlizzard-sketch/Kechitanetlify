import fetch from 'node-fetch'
import { getRedis } from '@/lib/redis'
import { config } from '@/lib/config'
import { log } from '@/lib/logger'

async function callOpenAI(prompt: string) {
  if (!config.openaiKey) throw new Error('no-openai-key')
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${config.openaiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: process.env.OPENAI_MODEL || 'gpt-4o-mini', messages: [{ role: 'user', content: prompt }] })
  })
  if (!res.ok) throw new Error('openai-failed')
  return res.json()
}

async function callHF(prompt: string) {
  if (!config.hfKey) throw new Error('no-hf-key')
  const res = await fetch(`https://api-inference.huggingface.co/models/${process.env.HF_MODEL}`, {
    method: 'POST', headers: { Authorization: `Bearer ${config.hfKey}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ inputs: prompt })
  })
  if (!res.ok) throw new Error('hf-failed')
  return res.json()
}

export async function aiChat(prompt: string) {
  const redis = getRedis()
  const cacheKey = 'ai:' + Buffer.from(prompt).toString('base64').slice(0,32)
  try {
    if (redis) {
      const cached = await redis.get(cacheKey)
      if (cached) {
        log('ai:cache hit')
        return JSON.parse(cached)
      }
    }
  } catch (e) { log('redis error', e) }

  // try providers
  try { const r = await callOpenAI(prompt); if (redis) await redis.set(cacheKey, JSON.stringify({ provider: 'openai', r }), 'EX', 60*60); return { provider: 'openai', data: r } } catch (e) { log('openai failed', e.message) }
  try { const r = await callHF(prompt); if (redis) await redis.set(cacheKey, JSON.stringify({ provider: 'hf', r }), 'EX', 60*60); return { provider: 'hf', data: r } } catch (e) { log('hf failed', e.message) }
  // local LLM
  if (config.localLlmUrl) {
    try {
      const r = await fetch(`${config.localLlmUrl}/generate`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt }) })
      if (r.ok) {
        const json = await r.json()
        if (redis) await redis.set(cacheKey, JSON.stringify({ provider: 'local', json }), 'EX', 60*60)
        return { provider: 'local', data: json }
      }
    } catch (e) { log('local llm failed', e.message) }
  }
  // final fallback mock
  return { provider: 'mock', data: { text: 'AI unavailable - fallback response' } }
}
