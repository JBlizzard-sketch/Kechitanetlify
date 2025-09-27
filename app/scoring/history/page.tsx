'use client'
import { useEffect, useState } from 'react'
export default function ScoringHistory(){
  const [history, setHistory] = useState([])
  useEffect(()=>{ fetch('/api/score/history').then(r=>r.json()).then(j=>setHistory(j.history||[])) },[])
  return (
    <section className="mx-auto max-w-4xl p-6">
      <h1 className="text-2xl font-bold text-kechita">Scoring History</h1>
      <div className="mt-4">
        {history.map(h=>(
          <div key={h.id} className="border p-3 rounded mb-2">
            <div><strong>{h.action}</strong> — {new Date(h.created_at).toLocaleString()}</div>
            <pre className="mt-2">{JSON.stringify(h.details,null,2)}</pre>
          </div>
        ))}
      </div>
    </section>
  )
}
