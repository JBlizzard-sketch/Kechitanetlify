import { verifySessionFromRequest } from '@/lib/auth'
import { checkRate } from '@/utils/rateLimiter'
import { NextResponse } from 'next/server'
import { addInventory } from '@/services/inventoryService'
export async function POST(req: Request) {
  const session = await verifySessionFromRequest(req)
  if(!session.ok) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  const user = session.user

  const { userId, name, sku, qty } = await req.json()
  if(!userId || !name) return NextResponse.json({ error: 'missing' }, { status: 400 })
  const item = await addInventory(userId, name, sku, qty || 0)
  return NextResponse.json({ item })
}
