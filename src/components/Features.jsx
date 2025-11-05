import { Sparkles, Layers, Shield, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'AI-assisted workflow',
    description:
      'Smart suggestions and boilerplates that adapt to your project to keep you in flow.',
    icon: Sparkles,
  },
  {
    title: 'Composable UI',
    description:
      'Pre-built, accessible components with modern styles so you can ship faster.',
    icon: Layers,
  },
  {
    title: 'Enterprise-grade security',
    description:
      'Best practices baked in to help protect your data and your users.',
    icon: Shield,
  },
  {
    title: 'Blazing performance',
    description:
      'Optimized by default with a lightweight footprint and fast builds.',
    icon: Zap,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Everything you need to move faster</h2>
          <p className="mt-4 text-gray-600">
            A thoughtfully curated set of tools to help you design, build, and iterate without friction.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-blue-600 text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
