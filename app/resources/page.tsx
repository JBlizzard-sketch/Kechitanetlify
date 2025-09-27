export const metadata = {
  title: "Home - Kechita Capital",
  description: "Home — Kechita Capital: Igniting Kenyan Hustles, Shaping Tomorrow.",
  openGraph: { title: "Home - Kechita Capital", description: "Home — Kechita Capital: Igniting Kenyan Hustles, Shaping Tomorrow." }
};

import PageTransition from '@/components/PageTransition'
export default function Resources(){
  const guides = [{title:'Borrowing 101', href:'#'},{title:'Growing your duka', href:'#'}]
  return (
    <PageTransition>
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-kechita">Resources</h2>
        <ul className="mt-4">
          {guides.map((g,i)=>(<li key={i} className="border rounded p-3 mb-2"><a href={g.href}>{g.title}</a></li>))}
        </ul>
      </section>
    </PageTransition>
  )
}
