import { NextResponse } from 'next/server'
import { listPartners } from '@/services/partnerService'
export async function GET(){ const partners = await listPartners(); return NextResponse.json({ partners }) }
