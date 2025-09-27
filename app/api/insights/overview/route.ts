import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
export async function GET(){
  const loans = await query('SELECT count(*)::int as total, sum(amount)::bigint as total_amount FROM loans')
  const res = loans.rows[0]
  return NextResponse.json({ totalLoans: res.total || 0, totalAmount: res.total_amount || 0, projectionNextMonth: (res.total || 0) * 1.05 })
}
