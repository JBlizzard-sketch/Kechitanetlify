import { getRedis } from '@/lib/redis'

export async function cacheGet(key){ const r = getRedis(); if(!r) return null; return await r.get(key) }
export async function cacheSet(key, value, ttl=1800){ const r = getRedis(); if(!r) return; await r.set(key, JSON.stringify(value), 'EX', ttl) }
export async function cacheDel(key){ const r = getRedis(); if(!r) return; await r.del(key) }
