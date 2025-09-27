import { getRedis } from '@/lib/redis'

const windows: Map<string, {count:number, ts:number}> = new Map()

export async function checkRate(key: string, limit = 10, windowSeconds = 60) {
  const redis = getRedis()
  if (redis) {
    const now = Math.floor(Date.now()/1000)
    const res = await redis.incr(key)
    if (res === 1) {
      await redis.expire(key, windowSeconds)
    }
    return res <= limit
  } else {
    const cur = windows.get(key) || {count:0, ts: Math.floor(Date.now()/1000)}
    const now = Math.floor(Date.now()/1000)
    if (now - cur.ts > windowSeconds) { cur.count = 0; cur.ts = now }
    cur.count += 1
    windows.set(key, cur)
    return cur.count <= limit
  }
}
