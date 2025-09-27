import LocaleSwitcher from '@/components/LocaleSwitcher'\nimport './globals.css'
import { Inter } from '@fontsource/inter'

export const metadata = {
  title: 'Kechita Capital — Igniting Kenyan Hustles',
  description: 'Kechita Capital — empowering Kenyan entrepreneurs with fair, fast micro-loans.',
  openGraph: {
    title: 'Kechita Capital',
    description: 'Igniting Kenyan Hustles, Shaping Tomorrow',
    siteName: 'Kechita Capital'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-inter bg-white text-slate-800">\n    <a id="skip-to-content" href="#main" className="sr-only focus:not-sr-only p-2">Skip to content</a>\n        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': process.env.NEXT_PUBLIC_SITE_NAME || 'Kechita Capital',
  'url': typeof window !== 'undefined' ? window.location.origin : '',
  'logo': 'https://source.unsplash.com/1600x900/?nairobi,skyline'
})}} />

        <header className="border-b">
          <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Kechita Capital" width="42" height="42" />
              <div>
                <div className="text-lg font-semibold text-kechita">{process.env.NEXT_PUBLIC_SITE_NAME || 'Kechita Capital'}</div>
                <div className="text-xs text-slate-500">Igniting Kenyan Hustles</div>
              </div>
            </div>
            <nav aria-label="Primary" className="hidden md:flex gap-6 text-sm">
              <a href="/" className="hover:underline">Home</a>
              <a href="/services" className="hover:underline">Services</a>
              <a href="/loans" className="hover:underline">Loans</a>
              <a href="/about" className="hover:underline">About</a>\n              <a href="/blog" className="hover:underline">Blog</a>\n              <a href="/partners" className="hover:underline">Partners</a>\n              <a href="/events" className="hover:underline">Events</a>
              <a href="/contact" className="bg-kechita text-white px-3 py-2 rounded-md">Apply for a Loan</a>
                          <a href="/assistant" className="hover:underline">Assistant</a>\n              <a href="/onboarding" className="hover:underline">Get Started</a>\n            </nav>\n            <div className="md:hidden flex items-center"><LocaleSwitcher /></div>
          </div>
        </header>
        <main><main id="main" role="main">{children}</main></main>
        <footer className="border-t mt-12">
          <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-slate-600">
            <div>Kechita Capital — Proudly Kenyan · Built for hustlers.</div>
            <div className="mt-2">© {new Date().getFullYear()} Kechita Capital</div>
          </div>
        </footer>
      </body>
    </html>
  )
}
