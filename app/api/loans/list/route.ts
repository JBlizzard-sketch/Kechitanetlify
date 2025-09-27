import { NextResponse } from 'next/server'
import { query } from '@/lib/db'

export async function GET() {
  const res = await query('SELECT * FROM loans ORDER BY created_at DESC LIMIT 50')
  return NextResponse.json({ loans: res.rows })
}
