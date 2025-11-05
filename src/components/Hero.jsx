import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft gradient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
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
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-gray-200 shadow-sm backdrop-blur">
                New • AI-powered building blocks
              </span>
              <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Build beautiful apps faster with an AI-powered workflow
              </h1>
              <p className="mt-6 text-lg text-gray-400">
                Design, code, and iterate in one place. Ship polished experiences without the busywork.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#get-started"
                  className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow hover:bg-gray-200"
                >
                  Get started free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-md border border-white/10 bg-transparent px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
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
              <div className="relative mx-auto w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur">
                <div className="rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 p-6 text-white">
                  <div className="flex items-center justify-between text-xs opacity-90">
                    <span>Preview</span>
                    <span className="inline-flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Live
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">Instant UI Blocks</h3>
                  <p className="mt-1 text-indigo-50 text-sm">
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
              <div className="pointer-events-none absolute -right-6 -bottom-6 h-44 w-44 rounded-full bg-indigo-500/20 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
