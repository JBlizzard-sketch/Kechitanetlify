export const metadata = {
  title: "Home - Kechita Capital",
  description: "Home — Kechita Capital: Igniting Kenyan Hustles, Shaping Tomorrow.",
  openGraph: { title: "Home - Kechita Capital", description: "Home — Kechita Capital: Igniting Kenyan Hustles, Shaping Tomorrow." }
};

'use client'
import { useEffect, useState } from 'react'
export default function Partners(){
  const [partners,setPartners]=useState([])
  useEffect(()=>{ fetch('/api/partners/list').then(r=>r.json()).then(j=>setPartners(j.partners||[])) },[])
  return (<section className="mx-auto max-w-4xl p-6"><h1 className="text-2xl font-bold text-kechita">Partners</h1><div className="mt-4">{partners.map(p=>(<div key={p.id}>{p.name} — {p.website}</div>))}</div></section>)
}
