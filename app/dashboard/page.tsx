'use client'
import { useEffect, useState } from 'react'
export const metadata = { title: 'Dashboard', description: 'Your Kechita loan dashboard' }

export default function Dashboard(){
  const [loans, setLoans] = useState([])
  useEffect(()=>{
    fetch('/api/loans/list').then(r=>r.json()).then(j=>setLoans(j.loans||[]))
  },[])
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-kechita">Hustler Dashboard</h2>
      <p className="mt-2 text-sm text-slate-600">A snapshot of your active loans and repayments.</p>
      <div className="mt-6 space-y-4">
        {loans.length===0 && <div className="text-sm text-slate-500">No loans yet — apply to get started.</div>}
        {loans.map((loan:any)=>(
          <div key={loan.id} className="border rounded p-4">
            <div className="flex justify-between">
              <div>
                <div className="text-sm text-slate-600">Loan amount</div>
                <div className="text-lg font-bold">KES {loan.amount.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-sm text-slate-600">Status</div>
                <div className="text-lg font-bold">{loan.status}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
