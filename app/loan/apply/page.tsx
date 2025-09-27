'use client'
import { useState } from 'react'

export default function ApplyLoan() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ amount: 50000, term: 12, name: '', phone: '' })
  const next = () => setStep(s => s+1)
  const prev = () => setStep(s => Math.max(1,s-1))
  const submit = async () => {
    // call create loan API (mock requires userId)
    const res = await fetch('/api/loans/create', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ userId: '0000-0000', amount: form.amount, term: form.term })})
    const json = await res.json()
    alert('Loan created (mock): ' + JSON.stringify(json.loan?.id))
  }
  return (
    <div className="mx-auto max-w-2xl p-6">
      <h2 className="text-2xl font-semibold text-kechita">Apply for a Loan</h2>
      <div className="mt-4">
        {step === 1 && (
          <div>
            <label className="block">Full name<input value={form.name} onChange={e=>setForm({...form, name: e.target.value})} className="border p-2 rounded w-full" /></label>
            <label className="block mt-2">Phone<input value={form.phone} onChange={e=>setForm({...form, phone: e.target.value})} className="border p-2 rounded w-full" /></label>
          </div>
        )}
        {step === 2 && (
          <div>
            <label className="block">Amount (KES)<input type="number" value={form.amount} onChange={e=>setForm({...form, amount: Number(e.target.value)})} className="border p-2 rounded w-full" /></label>
            <label className="block mt-2">Term (months)<input type="number" value={form.term} onChange={e=>setForm({...form, term: Number(e.target.value)})} className="border p-2 rounded w-full" /></label>
          </div>
        )}
        {step === 3 && (
          <div>
            <p className="text-sm">Review your application</p>
            <pre className="bg-slate-50 p-3 rounded">{JSON.stringify(form, null, 2)}</pre>
          </div>
        )}
        <div className="mt-4 flex gap-2">
          {step > 1 && <button onClick={prev} className="px-3 py-2 border rounded">Back</button>}
          {step < 3 && <button onClick={next} className="px-3 py-2 bg-kechita text-white rounded">Next</button>}
          {step === 3 && <button onClick={submit} className="px-3 py-2 bg-kechita text-white rounded">Submit Application</button>}
        </div>
      </div>
    </div>
  )
}
