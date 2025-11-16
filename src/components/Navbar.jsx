import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row gap-6 md:items-center">
      <li>
        <a href="#home" className="text-gray-900/90 hover:text-indigo-600 transition-colors">Home</a>
      </li>
      <li>
        <a href="#work" className="text-gray-900/90 hover:text-indigo-600 transition-colors">Work</a>
      </li>
      <li>
        <a href="#services" className="text-gray-900/90 hover:text-indigo-600 transition-colors">Services</a>
      </li>
      <li>
        <a href="#stack" className="text-gray-900/90 hover:text-indigo-600 transition-colors">Tech</a>
      </li>
      <li>
        <a href="#contact" className="text-gray-900/90 hover:text-indigo-600 transition-colors">Get in Touch</a>
      </li>
    </ul>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 md:mt-8 rounded-2xl backdrop-blur bg-white/70 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
          <div className="flex items-center justify-between px-5 py-4">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-amber-400" />
              <span className="font-semibold tracking-tight">Digital Boop.</span>
            </a>

            <nav className="hidden md:block">
              <NavLinks />
            </nav>

            <div className="md:hidden">
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen(!open)}
                className="p-2 rounded-lg hover:bg-gray-900/5"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {open && (
            <div className="md:hidden px-5 pb-5">
              <NavLinks />
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
