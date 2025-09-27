'use client'
import { useState } from 'react'
export const metadata = { title: 'Kechita Assistant', description: 'Ask Kechita Assistant for help — loans, tips, repayments' }
export default function Assistant(){
  const [messages, setMessages] = useState([{role:'assistant', text:'Karibu! How can I help your hustle today?'}])
  const [input, setInput] = useState('')
  const send = async ()=>{
    const prompt = input
    setMessages(m=>[...m, {role:'user', text:prompt}])
    setInput('')
    const res = await fetch('/api/ai/wrapper', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ prompt }) })
    const j = await res.json()
    const text = j?.data?.choices?.[0]?.message?.content || (j?.data?.text || JSON.stringify(j))
    setMessages(m=>[...m, {role:'assistant', text: text}])
  }
  return (
    <section className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold text-kechita">Kechita Assistant</h1>
      <div className="mt-4 border rounded p-4 h-80 overflow-auto">
        {messages.map((m,i)=>(<div key={i} className={m.role==='assistant'?'text-slate-700':'text-kechita'}><strong>{m.role}:</strong> {m.text}</div>))}
      </div>
      <div className="mt-2 flex gap-2"><input value={input} onChange={e=>setInput(e.target.value)} className="border p-2 flex-1" /><button onClick={send} className="px-3 py-2 bg-kechita text-white rounded">Send</button></div>
    </section>
  )
}
