import { query } from '@/lib/db'
export async function createPartner(name, website){
  const res = await query('INSERT INTO partners (name, website) VALUES ($1,$2) RETURNING *', [name, website])
  return res.rows[0]
}
export async function listPartners(){ const res = await query('SELECT * FROM partners ORDER BY created_at DESC'); return res.rows }
