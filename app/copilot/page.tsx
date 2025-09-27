'use client'
import { useState } from 'react'

export default function CopilotPage(){
  const [prompt, setPrompt] = useState('')
  const [messages, setMessages] = useState([])
  const [loanAmount, setLoanAmount] = useState(50000)
  const send = async () => {
    const res = await fetch('/api/copilot/query', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ prompt }) })
    const j = await res.json()
    setMessages(m=>[...m, {role:'user', text: prompt}, {role:'assistant', text: JSON.stringify(j).slice(0,500)}])
    setPrompt('')
  }
  const score = async () => {
    const res = await fetch('/api/score/ai', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ loanAmount }) })
    const j = await res.json()
    setMessages(m=>[...m, {role:'assistant', text: 'Score: '+ JSON.stringify(j)}])
  }
  return (
    <section className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold text-kechita">Kechita Copilot</h1>
      <div className="mt-4 border rounded p-4 h-96 overflow-auto">
        {messages.map((m,i)=>(<div key={i} className={m.role==='assistant'?'text-slate-700':'text-kechita'}><strong>{m.role}:</strong> {m.text}</div>))}
      </div>
      <div className="mt-2 flex gap-2">
        <input value={prompt} onChange={e=>setPrompt(e.target.value)} className="border p-2 flex-1" placeholder="Ask the Copilot..." />
        <button onClick={send} className="px-3 py-2 bg-kechita text-white rounded">Ask</button>
      </div>
      <div className="mt-4 flex gap-2 items-center">
        <input type="number" value={loanAmount} onChange={e=>setLoanAmount(Number(e.target.value))} className="border p-2" />
        <button onClick={score} className="px-3 py-2 bg-kechita text-white rounded">Run Scoring</button>
      </div>
    </section>
  )
}
