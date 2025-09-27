
<section className="max-w-6xl mx-auto px-6 py-20">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-sky-900">Igniting Kenyan Hustles, Shaping Tomorrow</h1>
      <p className="mt-6 text-lg text-gray-700">Kechita powers small businesses across Kenya with fast, fair, and flexible loans — built for hustlers, by hustlers.</p>
      <div className="mt-8 flex gap-4">
        <a href="/loans" className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold shadow-lg hover:bg-emerald-500">Apply for a Loan</a>
        <a href="/about" className="px-6 py-3 rounded-lg border border-slate-200 text-slate-700 bg-white hover:shadow">Learn how we work</a>
      </div>
      <div className="mt-6 text-sm text-gray-500">Fast decisions · Low fees · Kenyan focus</div>
    </div>
    <div className="flex justify-center">
      <img src="https://source.unsplash.com/1600x900/?nairobi,skyline" alt="Kechita - Kenyan entrepreneurs" className="w-full max-w-md rounded-xl shadow-xl" />
    </div>
  </div>
</section>

export const metadata = {
  title: "Home - Kechita Capital",
  description: "Home — Kechita Capital: Igniting Kenyan Hustles, Shaping Tomorrow.",
  openGraph: { title: "Home - Kechita Capital", description: "Home — Kechita Capital: Igniting Kenyan Hustles, Shaping Tomorrow." }
};

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-kechita"
          >
            Igniting Kenyan Hustles, Shaping Tomorrow
          </motion.h1>
          <p className="mt-4 text-slate-700">
            Kechita Capital brings fast, fair micro-loans to Kenyan entrepreneurs — from boda boda riders to market traders and small shop owners.
            We blend technology with empathy to fund your next step.
          </p>
          <div className="mt-6 flex gap-4">
            <Link href="/loans" className="bg-kechita text-white px-5 py-3 rounded-md">Apply for a Loan</Link>
            <a href="/about" className="border px-5 py-3 rounded-md">Learn more</a>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow">
          <img alt="Kenyan entrepreneurs" src="https://picsum.photos/seed/kechita-hero/800/600" />
        </div>
      </div>
    </section>
  )
}
