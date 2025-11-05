import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft gradient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-200 to-blue-200 blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 blur-3xl opacity-60" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="py-24 sm:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
                New • AI-powered building blocks
              </span>
              <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Build beautiful apps faster with an AI-powered workflow
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Design, code, and iterate in one place. Ship polished experiences without the busywork.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#get-started"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow hover:bg-black/90"
                >
                  Get started free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Explore features
                </a>
              </div>
            </motion.div>

            {/* Decorative preview card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="relative mx-auto w-full max-w-xl rounded-2xl border border-black/10 bg-white/70 p-4 shadow-xl backdrop-blur">
                <div className="rounded-lg bg-gradient-to-br from-indigo-600 to-blue-600 p-6 text-white">
                  <div className="flex items-center justify-between text-xs opacity-90">
                    <span>Preview</span>
                    <span className="inline-flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Live
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">Instant UI Blocks</h3>
                  <p className="mt-1 text-indigo-100 text-sm">
                    Drop-in components with accessible defaults and delightful motion.
                  </p>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[1,2,3].map((i) => (
                      <div key={i} className="rounded-md bg-white/10 p-4">
                        <div className="h-20 rounded-md bg-white/20" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-6 -bottom-6 h-44 w-44 rounded-full bg-indigo-200 blur-2xl opacity-70" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
