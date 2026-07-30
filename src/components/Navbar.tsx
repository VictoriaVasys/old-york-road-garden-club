import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/events', label: 'Events' },
  { to: '/civic-projects', label: 'Civic Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm'
          : 'bg-cream/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            onClick={() => setMenuOpen(false)}
          >
            <LeafIcon className="w-7 h-7 text-sage group-hover:text-forest transition-colors flex-shrink-0" />
            <span className="font-serif text-forest font-semibold text-lg leading-tight">
              Old York Road<br className="hidden sm:block" />
              <span className="sm:block hidden text-sm font-normal tracking-wide">Garden Club</span>
            </span>
            <span className="sm:hidden font-serif text-forest font-semibold text-lg">
              Garden Club
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-forest border-b-2 border-forest rounded-none pb-1'
                      : 'text-gray-700 hover:text-forest hover:bg-mint/30'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/join"
              className="ml-4 px-5 py-2 bg-gold text-white text-sm font-semibold rounded-md hover:bg-gold/90 transition-colors shadow-sm"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-forest hover:bg-mint/30 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="block w-5 h-0.5 bg-current mb-1.5 transition-transform" style={{ transform: menuOpen ? 'rotate(45deg) translate(2px, 6px)' : 'none' }} />
            <span className="block w-5 h-0.5 bg-current mb-1.5 transition-opacity" style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-5 h-0.5 bg-current transition-transform" style={{ transform: menuOpen ? 'rotate(-45deg) translate(2px, -6px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 border-t border-parchment' : 'max-h-0'
        }`}
      >
        <div className="bg-cream px-4 py-4 space-y-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'text-forest bg-mint/40 font-semibold'
                    : 'text-gray-700 hover:text-forest hover:bg-mint/20'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/join"
            onClick={() => setMenuOpen(false)}
            className="block mt-2 px-4 py-2.5 bg-gold text-white text-sm font-semibold rounded-md text-center hover:bg-gold/90 transition-colors"
          >
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  )
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12c0 2.76 1.12 5.26 2.93 7.07C6.74 20.88 9.24 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
        fill="none"
      />
      <path
        d="M17 8C13 8 9 11 9 15c0 1.5.5 2.5 1 3.5C11.5 20 12 20 13 20c4-1 6-4 6-8 0-1.5-.4-2.8-1.2-3.8-.5-.7-1.3-1.2-2.2-1.4C16.4 7.1 17 7.5 17 8z"
        fill="currentColor"
        opacity="0.3"
      />
      <path
        d="M5 20c0 0 2-8 9-12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 6c0 0 4 2 4 8s-4 7-7 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5 20c3-2 6-4 9-8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
