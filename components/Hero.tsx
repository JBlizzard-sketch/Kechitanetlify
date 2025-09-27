
'use client'
export default function Hero(){ 
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-sky-900">Igniting Kenyan Hustles, Shaping Tomorrow</h2>
          <p className="mt-4 text-gray-700">Fast decisions, flexible terms, and support built for Kenyan entrepreneurs.</p>
        </div>
        <div className="flex justify-center"><img src="https://source.unsplash.com/1600x900/?nairobi,skyline" alt="Illustration" className="max-w-md rounded-lg shadow-lg" /></div>
      </div>
    </section>
  )
}
