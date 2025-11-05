import { Menu, X, Rocket } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 bg-gray-900/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-blue-500 text-white">
              <Rocket size={18} />
            </span>
            <span>Vibe</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-white">Sign in</a>
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow hover:bg-gray-200">
              Get started
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-gray-900/95">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-2">
            <a href="#features" className="block px-2 py-2 rounded hover:bg-white/5 text-gray-200">Features</a>
            <a href="#pricing" className="block px-2 py-2 rounded hover:bg-white/5 text-gray-200">Pricing</a>
            <a href="#about" className="block px-2 py-2 rounded hover:bg-white/5 text-gray-200">About</a>
            <div className="pt-2 flex items-center gap-3">
              <a href="#" className="text-sm font-medium text-gray-300">Sign in</a>
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow hover:bg-gray-200">
                Get started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
