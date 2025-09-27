import { NextResponse } from 'next/server'
import { createOrGetUserByPhone } from '@/lib/db'

export async function POST(req: Request) {
  const { phone, token, name } = await req.json()
  if (!phone || !token) return NextResponse.json({ error: 'missing' }, { status: 400 })
  // In production validate token. For demo, create or get user
  const user = await createOrGetUserByPhone(phone, name)
  // Return mock session and user id
  return NextResponse.json({ ok: true, token: 'mock-session-'+Date.now(), user })
}
