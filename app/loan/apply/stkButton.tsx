'use client'
import React, { useState } from 'react'

export default function STKButton({ phone, amount }) {
  const [loading, setLoading] = useState(false)
  const start = async () => {
    setLoading(true)
    const res = await fetch('/api/payments/mpesa/stk', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ phone, amount }) })
    const json = await res.json()
    alert('STK initiated: ' + JSON.stringify(json))
    setLoading(false)
  }
  return <button onClick={start} disabled={loading} className="px-3 py-2 bg-kechita text-white rounded">{loading ? 'Processing...' : 'Pay with M-Pesa'}</button>
}
