import { NextResponse } from 'next/server'
import { listInventory } from '@/services/inventoryService'
export async function GET(req: Request) {
  const url = new URL(req.url)
  const userId = url.searchParams.get('userId')
  if(!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 })
  const items = await listInventory(userId)
  return NextResponse.json({ items })
}
