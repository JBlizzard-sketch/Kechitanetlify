'use client'
import { useState, useEffect } from 'react'
export const metadata = { title: 'Inventory — Kechita', description: 'Track your stock and goods' }
export default function Inventory(){
  const [items,setItems]=useState([])
  useEffect(()=>{},[])
  return (
    <section className="mx-auto max-w-4xl p-6">
      <h1 className="text-2xl font-bold text-kechita">Inventory</h1>
      <p className="mt-2">Add and track items you sell.</p>
      <div className="mt-4">(Inventory UI placeholder)</div>
    </section>
  )
}
