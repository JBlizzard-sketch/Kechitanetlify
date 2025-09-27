'use client'
import { useState } from 'react'
export const metadata = { title: 'Accounting — Kechita', description: 'Simple bookkeeping for hustles' }
export default function Accounting(){
  const [entries,setEntries]=useState([])
  return (
    <section className="mx-auto max-w-4xl p-6">
      <h1 className="text-2xl font-bold text-kechita">Accounting</h1>
      <p className="mt-2">Record income and expenses, get a quick P&L.</p>
      <div className="mt-4">(Accounting UI placeholder)</div>
    </section>
  )
}
