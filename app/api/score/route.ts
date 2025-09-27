import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const { userId, amount } = body
  // Simple rule-based scoring
  const recommendation = amount <= 100000 ? 'approve' : 'review'
  const score = { recommendation, reason: recommendation === 'approve' ? 'amount within microloan band' : 'requires review' }
  return NextResponse.json(score)
}
