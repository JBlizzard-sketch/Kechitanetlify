export const metadata = {
  title: "Home - Kechita Capital",
  description: "Home — Kechita Capital: Igniting Kenyan Hustles, Shaping Tomorrow.",
  openGraph: { title: "Home - Kechita Capital", description: "Home — Kechita Capital: Igniting Kenyan Hustles, Shaping Tomorrow." }
};

'use client'
import { useState } from 'react'

const services = [
  { name: 'Micro-Loans', desc: 'Fast loans for hustlers needing a quick boost.' },
  { name: 'SME Financing', desc: 'Structured support for small & medium enterprises.' },
  { name: 'Merchant Credit', desc: 'Empowering shops and kiosks with trade credit.' },
]

export default function Services() {
  const [active, setActive] = useState<number | null>(null)
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-kechita">Our Services</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="border rounded-lg p-4 hover:shadow cursor-pointer" onClick={() => setActive(i)}>
            <h3 className="font-semibold">{s.name}</h3>
            <p className="text-sm mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
      {active !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md">
            <h3 className="text-lg font-bold">{services[active].name}</h3>
            <p className="mt-2">{services[active].desc}</p>
            <button className="mt-4 px-4 py-2 bg-kechita text-white rounded" onClick={() => setActive(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  )
}
