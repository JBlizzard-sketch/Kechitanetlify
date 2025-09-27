'use client'
import { useState } from 'react'
export const metadata = { title: 'Get Started — Kechita', description: 'Onboarding for new Kechita users' }
export default function Onboarding(){
  const [step,setStep]=useState(1)
  return (
    <section className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold text-kechita">Welcome to Kechita</h1>
      <p className="mt-2 text-sm">Onboarding helps us tailor loans to your hustle.</p>
      <div className="mt-4">
        {step===1 && <div><label>Full name<input className="border p-2 w-full"/></label><label className="mt-2">Phone<input className="border p-2 w-full"/></label></div>}
        {step===2 && <div><p className="text-sm">Tell us what you do: <select className="border p-2"><option>Retail</option><option>Agriculture</option><option>Transport</option></select></p></div>}
        <div className="mt-4"><button className="px-3 py-2 bg-kechita text-white rounded" onClick={()=>setStep(s=>s+1)}>Next</button></div>
      </div>
    </section>
  )
}
