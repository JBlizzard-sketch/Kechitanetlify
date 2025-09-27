'use client'
import { useState, useEffect } from 'react'
export const metadata = { title: 'Referrals — Kechita', description: 'Invite a friend and earn rewards' }
export default function Referrals(){
  const [list,setList]=useState([])
  const [phone,setPhone]=useState('')
  useEffect(()=>{},[])
  const create=async()=>{ const res=await fetch('/api/referrals/create',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({referrerId:'demo-ref-id', refereePhone:phone})}); alert('Referral sent') }
  return (
    <section className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold text-kechita">Invite & Earn</h1>
      <p className="mt-2">Send your friend a referral code. When they take a loan, you get rewards.</p>
      <div className="mt-4"><input value={phone} onChange={e=>setPhone(e.target.value)} className="border p-2 w-full" placeholder="Friend's phone" /><button onClick={create} className="mt-2 px-3 py-2 bg-kechita text-white rounded">Send</button></div>
    </section>
  )
}
