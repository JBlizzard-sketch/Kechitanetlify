import { getRedis } from '@/lib/redis'
import { query } from '@/lib/db'

export async function estimateTokensAndRecord(userId, prompt, provider, tokens){
  // naive cost estimation: tokens * 0.002 cents
  const cents = Math.max(1, Math.floor(tokens * 0.002))
  // record in ai_usage table if DB present
  try{ await query('INSERT INTO ai_usage (user_id, prompt, provider, cost_cents) VALUES ($1,$2,$3,$4)', [userId, prompt, provider, cents]) }catch(e){
    // fallback to redis
    const r = getRedis(); if(r){ const key = `cost:${userId}:${new Date().toISOString().slice(0,10)}`; await r.incrby(key, cents) }
  }
  return cents
}
