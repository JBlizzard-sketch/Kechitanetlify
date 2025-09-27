export const metadata = {
  title: "Home - Kechita Capital",
  description: "Home — Kechita Capital: Igniting Kenyan Hustles, Shaping Tomorrow.",
  openGraph: { title: "Home - Kechita Capital", description: "Home — Kechita Capital: Igniting Kenyan Hustles, Shaping Tomorrow." }
};

'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-kechita">Contact Us</h2>
      <form className="mt-6 grid gap-4 max-w-md">
        <input className="border p-2 rounded" placeholder="Name" aria-label="name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input className="border p-2 rounded" placeholder="Email" aria-label="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <textarea className="border p-2 rounded" rows={4} placeholder="Message" aria-label="message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}></textarea>
        <button type="button" className="bg-kechita text-white px-4 py-2 rounded">Send (placeholder)</button>
      </form>
    </section>
  )
}
