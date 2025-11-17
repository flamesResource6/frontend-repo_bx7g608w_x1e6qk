import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: 'Work', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-gray-900 text-xl">
            VICKHY <span className="text-blue-600">•</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-gray-800 transition">
              Let’s build
            </a>
          </nav>

          <button aria-label="Toggle menu" className="md:hidden p-2 rounded-md hover:bg-black/5" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/20 bg-white/90 backdrop-blur">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-black/5" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="mt-2 inline-flex w-full justify-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-gray-800" onClick={() => setOpen(false)}>
              Let’s build
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
