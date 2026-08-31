import { useState } from 'react'
import { Link } from 'react-router-dom'
import oyrgcTreeWhite from '../assets/oyrgc-tree-white.png'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={oyrgcTreeWhite}
                alt=""
                className="h-10 sm:h-14 w-auto flex-shrink-0"
              />
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-white leading-tight">
                  Old York Road Garden Club
                </h3>
                <p className="text-mint/80 text-sm leading-relaxed">
                  Cultivating Community Since 1935
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Dedicated to horticultural excellence, civic beautification, and
              fostering a love of gardening throughout the Jenkintown and
              Abington community.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white/60 hover:text-mint transition-colors"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white/60 hover:text-mint transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://oldyorkroadgardenclub.com/rss"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RSS Feed"
                className="text-white/60 hover:text-mint transition-colors"
              >
                <RssIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-lg font-medium text-mint mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/events', label: 'Events & Meetings' },
                { to: '/civic-projects', label: 'Civic Projects' },
                { to: '/about', label: 'About Us' },
                { to: '/join', label: 'Become a Member' },
                { to: '/contact', label: 'Contact' },
                { to: '/archive', label: 'Program Archive' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/70 hover:text-mint text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-medium text-mint mb-5">
              Contact & Updates
            </h4>
            <address className="not-italic text-white/70 text-sm space-y-2 mb-6">
              <p>Old York Road Garden Club</p>
              <p>P.O. Box 214</p>
              <p>Jenkintown, PA 19046</p>
              <p className="mt-3">
                <a
                  href="mailto:oldyorkroadgardenclub@gmail.com"
                  className="hover:text-mint transition-colors"
                >
                  oldyorkroadgardenclub@gmail.com
                </a>
              </p>
              <p>Meetings: 2nd Thursday, 11:30 AM ET</p>
              <p className="text-white/50 text-xs">
                Grace Presbyterian Church, 444 Old York Rd, Jenkintown
              </p>
            </address>

            <div>
              <p className="text-white/80 text-sm font-medium mb-3">
                Newsletter Sign-Up
              </p>
              {subscribed ? (
                <p className="text-mint text-sm">
                  Thank you for subscribing! You'll receive our next newsletter.
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/40 text-sm focus:outline-none focus:border-mint focus:bg-white/15 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gold hover:bg-gold/90 text-white text-sm font-semibold rounded-md transition-colors whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs text-center">
            &copy; {new Date().getFullYear()} Old York Road Garden Club. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            A member of the Pennsylvania Horticultural Society
          </p>
        </div>
      </div>
    </footer>
  )
}

function RssIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        clipRule="evenodd"
      />
    </svg>
  )
}
