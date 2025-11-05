import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <Features />

        {/* Simple CTA */}
        <section id="pricing" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-12 shadow-sm text-center">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Start building today</h3>
              <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
                Create your next idea with a beautiful UI and a productive workflow. No setup, just ship.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <a href="#" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow hover:bg-gray-200">
                  Get started free
                </a>
                <a href="#about" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-transparent px-6 py-3 text-sm font-medium text-white hover:bg-white/10">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
              <div className="lg:col-span-2">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Designed for teams that love velocity</h3>
                <p className="mt-4 text-gray-400 max-w-3xl">
                  We combine tasteful defaults with flexible building blocks so you can focus on what matters: your product.
                  Ship multi-page flows, dashboards, and landing pages without wrestling with setup, design tokens, or accessibility.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm">
                <dl className="grid grid-cols-2 gap-6">
                  <div>
                    <dt className="text-sm text-gray-400">Components</dt>
                    <dd className="mt-1 text-2xl font-semibold text-white">50+</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-400">Performance</dt>
                    <dd className="mt-1 text-2xl font-semibold text-white">A+</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-400">Accessibility</dt>
                    <dd className="mt-1 text-2xl font-semibold text-white">WCAG</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-400">Uptime</dt>
                    <dd className="mt-1 text-2xl font-semibold text-white">99.9%</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
