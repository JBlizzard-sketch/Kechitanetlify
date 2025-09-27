export const metadata = {
  title: "Home - Kechita Capital",
  description: "Home — Kechita Capital: Igniting Kenyan Hustles, Shaping Tomorrow.",
  openGraph: { title: "Home - Kechita Capital", description: "Home — Kechita Capital: Igniting Kenyan Hustles, Shaping Tomorrow." }
};

import PageTransition from '@/components/PageTransition'
export default function Careers(){
  const jobs = [{title:'Product Manager', location:'Nairobi'},{title:'Customer Ops', location:'Remote'}]
  return (
    <PageTransition>
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-kechita">Careers</h2>
        <div className="mt-6 space-y-3">
          {jobs.map((j,i)=>(<details key={i} className="border rounded p-3"><summary className="font-semibold">{j.title} · {j.location}</summary><div className="mt-2 text-sm">Apply by sending CV to hello@kechita.example</div></details>))}
        </div>
      </section>
    </PageTransition>
  )
}
