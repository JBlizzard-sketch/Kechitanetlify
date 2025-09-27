import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ status: 'ok', service: 'kechita-capital', timestamp: new Date().toISOString() })
}
