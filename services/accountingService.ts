import { query } from '@/lib/db'
export async function addEntry(userId:string, type:string, amount:number, description?:string){
  const res = await query('INSERT INTO accounting_entries (user_id, type, amount, description) VALUES ($1,$2,$3,$4) RETURNING *', [userId, type, amount, description || null])
  return res.rows[0]
}
export async function listEntries(userId:string){
  const res = await query('SELECT * FROM accounting_entries WHERE user_id=$1 ORDER BY created_at DESC', [userId])
  return res.rows
}
