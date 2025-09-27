import { getRedis } from '@/lib/redis'

export async function checkAndIncrementUserQuota(userId, limitPerMinute=60){
  const redis = getRedis()
  if(!redis) return true
  const key = `quota:${userId}:${Math.floor(Date.now()/60000)}`
  const val = await redis.incr(key)
  if(val === 1) await redis.expire(key, 60)
  return val <= limitPerMinute
}

export async function recordEstimatedCost(userId, cents){
  const redis = getRedis()
  if(!redis) return
  const key = `cost:${userId}:${new Date().toISOString().slice(0,10)}`
  await redis.incrby(key, cents)
}
