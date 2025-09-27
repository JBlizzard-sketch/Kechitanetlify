import { NextResponse } from 'next/server'
import { query } from '@/lib/db'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const loanId = url.searchParams.get('loanId')
  if(!loanId) return NextResponse.json({ error: 'loanId required' }, { status: 400 })
  const res = await query('SELECT * FROM repayments WHERE loan_id=$1 ORDER BY paid_at DESC', [loanId])
  return NextResponse.json({ repayments: res.rows })
}
