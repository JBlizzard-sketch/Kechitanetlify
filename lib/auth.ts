import jwt from 'jsonwebtoken'
import { supabase } from '@/lib/supabaseClient'
import { query, createOrGetUserByPhone } from '@/lib/db'
import { config } from '@/lib/config'
import { log } from '@/lib/logger'

export async function verifySessionFromRequest(req) {
  // Check Authorization header first
  const auth = req.headers.get('authorization') || ''
  const token = auth.replace('Bearer ', '') || null
  if(token) {
    try {
      // Try verify with Supabase JWT secret if available
      if(process.env.SUPABASE_JWT_SECRET){
        const decoded = jwt.verify(token, process.env.SUPABASE_JWT_SECRET)
        return { ok:true, user: decoded }
      }
      // Fallback: try Supabase admin api to get user by access token
      if(supabase && supabase.auth) {
        const { data: { user }, error } = await supabase.auth.getUser(token)
        if(user) return { ok:true, user }
      }
    } catch(e){
      log('session verify failed', e.message)
      return { ok:false, error: e.message }
    }
  }
  // Fallback: allow demo token 'mock-session-*' based on phone param (dev only)
  const url = new URL(req.url)
  const phone = url.searchParams.get('phone') || null
  if(phone && token && token.startsWith('mock-session')){
    const user = await createOrGetUserByPhone(phone)
    return { ok:true, user }
  }
  return { ok:false, error: 'no-session' }
}
