import { query } from '@/lib/db'
export async function addInventory(userId:string, name:string, sku?:string, qty=0){
  const res = await query('INSERT INTO inventories (user_id, name, sku, quantity) VALUES ($1,$2,$3,$4) RETURNING *', [userId, name, sku || null, qty])
  return res.rows[0]
}
export async function listInventory(userId:string){
  const res = await query('SELECT * FROM inventories WHERE user_id=$1', [userId])
  return res.rows
}
