import Redis from 'ioredis'
import { config } from './config'

let client: Redis.Redis | null = null
export function getRedis() {
  if (client) return client
  if (!config.redisUrl) return null as any
  client = new Redis(config.redisUrl)
  return client
}
