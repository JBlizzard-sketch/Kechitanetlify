import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { getRedis } from '@/lib/redis'

export async function GET(){
  const status = { ok: true, db: false, redis: false }
  try{ await query('SELECT 1'); status.db = true }catch(e){ status.ok=false }
  try{ const r = getRedis(); if(r){ await r.ping(); status.redis = true } }catch(e){ status.ok=false }
  return NextResponse.json(status)
}
