export const metadata = {
  title: "Home - Kechita Capital",
  description: "Home — Kechita Capital: Igniting Kenyan Hustles, Shaping Tomorrow.",
  openGraph: { title: "Home - Kechita Capital", description: "Home — Kechita Capital: Igniting Kenyan Hustles, Shaping Tomorrow." }
};

'use client'
import { useState } from 'react'

const faqs = [
  { q: 'Who can apply for a Kechita loan?', a: 'Any Kenyan hustler with a business idea, trade, or enterprise — from boda riders to SMEs.' },
  { q: 'How fast is approval?', a: 'Most loans are approved within 24 hours if documents are in order.' },
  { q: 'Do I need collateral?', a: 'We believe in trust and hustle — small loans often require no collateral.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-kechita">Frequently Asked Questions</h2>
      <div className="mt-6 space-y-4">
        {faqs.map((f, i) => (
          <div key={i} role="region" aria-labelledby={`faq-${i}`} className="border rounded-lg">
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left px-4 py-3 font-medium flex justify-between">
              {f.q} <span>{open === i ? '-' : '+'}</span>
            </button>
            {open === i && <div className="px-4 pb-4 text-sm text-slate-600">{f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}
