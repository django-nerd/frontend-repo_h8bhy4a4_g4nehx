import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Start' },
  { to: '/leistungen', label: 'Leistungen' },
  { to: '/web', label: 'Web & Landingpages' },
  { to: '/lab', label: 'Innovation Lab' },
  { to: '/ueber', label: 'Über uns' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#1abcb5] to-[#0ea5a3] ring-1 ring-[#1abcb5]/50 shadow-[0_0_30px_#1abcb5aa]"></div>
            <span className="text-white font-semibold tracking-wide">digITall</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm transition-colors ${isActive ? 'text-[#1abcb5]' : 'text-white/80 hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://wa.me/4915750000000?text=Hallo%20digITall!%20Ich%20habe%20eine%20Anfrage."
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center gap-2 rounded-md bg-[#1abcb5] hover:bg-[#15a8a1] text-black font-semibold px-4 py-2 transition-colors"
            >
              WhatsApp
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/10 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Menü öffnen"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black/80 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-2 py-2 rounded text-sm ${isActive ? 'text-[#1abcb5] bg-white/5' : 'text-white/80 hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://wa.me/4915750000000?text=Hallo%20digITall!%20Ich%20habe%20eine%20Anfrage."
              target="_blank"
              rel="noreferrer"
              className="px-2 py-2 rounded text-sm text-black font-semibold bg-[#1abcb5]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
