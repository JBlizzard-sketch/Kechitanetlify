import Link from 'next/link'
import PageTransition from '@/components/PageTransition'
import posts from '@/data/posts.json'

export default function Blog(){
  return (
    <PageTransition>
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-kechita">Kechita Blog</h2>
        <div className="mt-6 space-y-4">
          {posts.map(p=>(
            <article key={p.slug} className="border rounded p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{p.date}</p>
              <p className="mt-2 text-sm">{p.content.slice(0,140)}...</p>
              <Link href={'/blog/'+p.slug} className="text-kechita mt-2 inline-block">Read</Link>
            </article>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
