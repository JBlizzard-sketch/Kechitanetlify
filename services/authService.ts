import { supabase } from '@/lib/supabaseClient'
import { log } from '@/lib/logger'

export async function sendOtp(phone: string) {
  if (!supabase) {
    log('Supabase not configured; returning mock OTP.')
    return { ok: true, mock: true }
  }
  const { data, error } = await supabase.auth.signInWithOtp({ phone })
  if (error) throw error
  return data
}

export async function getUserByPhone(phone: string) {
  if (!supabase) return null
  const { data, error } = await supabase.from('users').select('*').eq('phone', phone).limit(1)
  if (error) throw error
  return data?.[0] ?? null
}
