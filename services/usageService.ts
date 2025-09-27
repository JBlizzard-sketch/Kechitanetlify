import { query } from '@/lib/db'
export async function recordAiUsage(userId, prompt, provider, costCents=0){
  await query('INSERT INTO ai_usage (user_id, prompt, provider, cost_cents) VALUES ($1,$2,$3,$4)', [userId, prompt, provider, costCents])
}
export async function getUsageForUser(userId){
  const res = await query('SELECT * FROM ai_usage WHERE user_id=$1 ORDER BY created_at DESC LIMIT 100', [userId])
  return res.rows
}
