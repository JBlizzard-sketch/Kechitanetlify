import { query } from '@/lib/db'
import { calcMonthly } from '@/utils/finance'

export async function createLoanForUser(userId: string, amount: number, term: number) {
  const rate = 18.0
  const monthly = calcMonthly(amount, rate, term)
  const score = { recommendation: 'pending', reasons: [] }
  const res = await query(
    `INSERT INTO loans (user_id, amount, interest_rate, term_months, monthly_payment, status, score)
     VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
    [userId, amount, rate, term, monthly, 'pending', JSON.stringify(score)]
  )
  return res.rows[0]
}

export async function listLoansForUser(userId: string) {
  const res = await query('SELECT * FROM loans WHERE user_id=$1 ORDER BY created_at DESC', [userId])
  return res.rows
}
