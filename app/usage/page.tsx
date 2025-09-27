'use client'
import { useEffect, useState } from 'react'
export default function Usage(){
  const [cents,setCents]=useState(0)
  useEffect(()=>{ fetch('/api/usage/quota').then(r=>r.json()).then(j=>setCents(j.cents||0)) },[])
  return (<section className="mx-auto max-w-3xl p-6"><h1 className="text-2xl font-bold text-kechita">Usage & Billing</h1><p className="mt-2">Today's estimated AI cost: KES {(cents/100).toFixed(2)}</p></section>)
