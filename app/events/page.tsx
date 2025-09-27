export const metadata = {
  title: "Home - Kechita Capital",
  description: "Home — Kechita Capital: Igniting Kenyan Hustles, Shaping Tomorrow.",
  openGraph: { title: "Home - Kechita Capital", description: "Home — Kechita Capital: Igniting Kenyan Hustles, Shaping Tomorrow." }
};

import PageTransition from '@/components/PageTransition'
export default function Events(){
  const events = [{title:'Loan Clinic Nairobi', date:'2025-10-10'},{title:'Market Finance Workshop', date:'2025-11-05'}]
  return (
    <PageTransition>
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-kechita">Events</h2>
        <div className="mt-6 space-y-4">
          {events.map((e,i)=>(<div key={i} className="border rounded p-4"><div className="font-semibold">{e.title}</div><div className="text-sm text-slate-600">{e.date}</div></div>))}
        </div>
      </section>
    </PageTransition>
  )
}
