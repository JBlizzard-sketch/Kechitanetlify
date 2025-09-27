export const metadata = {
  title: "Home - Kechita Capital",
  description: "Home — Kechita Capital: Igniting Kenyan Hustles, Shaping Tomorrow.",
  openGraph: { title: "Home - Kechita Capital", description: "Home — Kechita Capital: Igniting Kenyan Hustles, Shaping Tomorrow." }
};

export default function Industries() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-kechita">Industries We Empower</h2>
      <p className="mt-4">From boda boda riders to tech startups, Kechita Capital funds the real hustles driving Kenya forward.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">Agriculture</h3>
          <p className="text-sm mt-2">Loans for farmers, traders, and agri-supply chains.</p>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">Transport</h3>
          <p className="text-sm mt-2">Boda boda, matatu, and delivery operators fuel Kenya’s hustle.</p>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">Retail</h3>
          <p className="text-sm mt-2">Support for dukas, kiosks, and SMEs across Kenya.</p>
        </div>
      </div>
    </section>
  )
}
