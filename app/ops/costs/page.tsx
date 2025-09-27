'use client'
import { useEffect, useState } from 'react'
export default function Costs(){
  const [cents,setCents]=useState(0)
  useEffect(()=>{ fetch('/api/ops/costs').then(r=>r.json()).then(j=>setCents(j.total_cents||0)) },[])
  return (<section className="mx-auto max-w-3xl p-6"><h1 className="text-2xl font-bold text-kechita">AI Cost Dashboard</h1><p className="mt-2">Today's AI spend (KES): {(cents/100).toFixed(2)}</p></section>)
}
