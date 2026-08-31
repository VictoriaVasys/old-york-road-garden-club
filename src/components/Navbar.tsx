import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import oyrgcTree from '../assets/oyrgc-tree.png'

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
            className="flex items-center gap-1.5 group"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src={oyrgcTree}
              alt=""
              className="h-10 w-auto flex-shrink-0"
            />
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
            <span className="relative block w-5 h-5">
              <span
                className="absolute left-0 top-1 block w-5 h-0.5 bg-current transition-all duration-200"
                style={
                  menuOpen
                    ? { top: '50%', transform: 'translateY(-50%) rotate(45deg)' }
                    : { top: '0.125rem', transform: 'none' }
                }
              />
              <span
                className="absolute left-0 top-1/2 -translate-y-1/2 block w-5 h-0.5 bg-current transition-opacity duration-200"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="absolute left-0 bottom-1 block w-5 h-0.5 bg-current transition-all duration-200"
                style={
                  menuOpen
                    ? { bottom: '50%', transform: 'translateY(50%) rotate(-45deg)' }
                    : { bottom: '0.125rem', transform: 'none' }
                }
              />
            </span>
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
