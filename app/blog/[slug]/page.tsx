import PageTransition from '@/components/PageTransition'
import posts from '@/data/posts.json'

export default function Post({ params }: { params: { slug: string } }) {
  const post = (posts as any).find((p:any)=>p.slug === params.slug)
  if(!post) return <div className="p-6">Post not found</div>
  return (
    <PageTransition>
      <article className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-2xl font-bold text-kechita">{post.title}</h1>
        <p className="text-sm text-slate-500">{post.date}</p>
        <div className="mt-4 text-slate-700">{post.content}</div>
      </article>
    </PageTransition>
  )
}
