import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />

        {/* Simple CTA */}
        <section id="pricing" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-12 shadow-sm text-center">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Start building today</h3>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                Create your next idea with a beautiful UI and a productive workflow. No setup, just ship.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <a href="#" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow hover:bg-black/90">
                  Get started free
                </a>
                <a href="#about" className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50">
                  Learn more
                </a>
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
