import { checkRate } from '@/utils/rateLimiter'
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

export async function POST(req: Request) {
  const ip = (req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown')
  const allowed = await checkRate('otp:'+ip, 5, 60)
  if(!allowed) return new Response(JSON.stringify({ error: 'rate_limit' }), { status: 429 })

  const { phone } = await req.json()
  if (!phone) return NextResponse.json({ error: 'phone required' }, { status: 400 })
  // Supabase supports SMS magic link / OTP via its Auth API
  const { data, error } = await supabase.auth.signInWithOtp({ phone })
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ ok: true, data })
}
