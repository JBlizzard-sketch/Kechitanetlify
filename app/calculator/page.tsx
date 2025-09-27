'use client'
import { useState } from 'react'
import PageTransition from '@/components/PageTransition'

function monthlyPayment(amount:number, annualRate:number, months:number){
  if(!amount || !annualRate || !months) return 0
  const r = annualRate/100/12
  return (amount * r) / (1 - Math.pow(1+r, -months))
}

export default function Calculator(){
  const [amount,setAmount] = useState(50000)
  const [rate,setRate] = useState(18)
  const [term,setTerm] = useState(12)
  const monthly = Math.round(monthlyPayment(amount, rate, term))
  return (
    <PageTransition>
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-kechita">Loan Calculator</h2>
        <p className="mt-2 text-sm text-slate-600">Estimate monthly repayments for Kechita loans.</p>
        <div className="mt-6 grid gap-4">
          <label className="flex flex-col">
            <span>Amount (KES)</span>
            <input type="number" value={amount} onChange={e=>setAmount(Number(e.target.value))} className="border p-2 rounded" aria-label="amount" />
          </label>
          <label className="flex flex-col">
            <span>Annual Interest Rate (%)</span>
            <input type="number" value={rate} onChange={e=>setRate(Number(e.target.value))} className="border p-2 rounded" aria-label="rate" />
          </label>
          <label className="flex flex-col">
            <span>Term (months)</span>
            <input type="number" value={term} onChange={e=>setTerm(Number(e.target.value))} className="border p-2 rounded" aria-label="term" />
          </label>
          <div className="mt-4 p-4 border rounded">
            <div className="text-sm text-slate-600">Estimated monthly repayment</div>
            <div className="text-2xl font-bold text-kechita">KES {monthly.toLocaleString()}</div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
