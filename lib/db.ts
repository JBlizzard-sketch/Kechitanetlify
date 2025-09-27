import { Pool } from 'pg'
const pool = new Pool({ connectionString: process.env.DATABASE_URL })

export async function query(text: string, params?: any[]) {
  const res = await pool.query(text, params)
  return res
}

export async function createOrGetUserByPhone(phone: string, name?: string) {
  const res = await pool.query('SELECT * FROM users WHERE phone=$1 LIMIT 1', [phone])
  if(res.rows.length) return res.rows[0]
  const ins = await pool.query('INSERT INTO users (phone, name) VALUES ($1,$2) RETURNING *', [phone, name || null])
  return ins.rows[0]
}

export async function insertPayment({ checkout_request_id, loan_id, phone, amount, raw }) {
  const res = await pool.query('INSERT INTO payments (checkout_request_id, loan_id, phone, amount, raw) VALUES ($1,$2,$3,$4,$5) RETURNING *', [checkout_request_id, loan_id, phone, amount, raw])
  return res.rows[0]
}

export async function insertRepayment({ loan_id, amount, method }) {
  const res = await pool.query('INSERT INTO repayments (loan_id, amount, paid_at, method) VALUES ($1,$2,now(),$3) RETURNING *', [loan_id, amount, method])
  return res.rows[0]
}

export async function getLoanById(id) {
  const res = await pool.query('SELECT * FROM loans WHERE id=$1', [id])
  return res.rows[0]
}

export async function updateLoanStatus(id, status) {
  await pool.query('UPDATE loans SET status=$1 WHERE id=$2', [status, id])
}
