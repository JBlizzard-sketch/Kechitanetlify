'use client'
import { useEffect, useState } from 'react'
export const metadata = { title: 'Insights — Kechita', description: 'Predictive insights and dashboards' }
export default function Predictive(){
  const [data,setData]=useState(null)
  useEffect(()=>{ fetch('/api/insights/overview').then(r=>r.json()).then(j=>setData(j)) },[])
  return (
    <section className="mx-auto max-w-5xl p-6">
      <h1 className="text-2xl font-bold text-kechita">Insights</h1>
      <div className="mt-4">{data ? JSON.stringify(data) : 'Loading...'}</div>
    </section>
  )
}
