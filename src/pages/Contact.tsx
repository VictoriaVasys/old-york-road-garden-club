import { useState } from 'react'
import { useInView } from '../hooks/useInView'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const initialForm: ContactForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-72 sm:h-80 flex items-end pb-12 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1600&auto=format&fit=crop"
          alt="Garden path in Jenkintown"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/55 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-mint text-sm font-semibold tracking-widest uppercase mb-2">
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact info column */}
            <div className="lg:col-span-2 space-y-8">
              <FadeIn>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-forest mb-6">
                    Club Information
                  </h2>
                  <div className="space-y-5">
                    <ContactDetail icon={<MailIcon />} label="Email">
                      <a
                        href="mailto:info@oldyorkroadgardenclub.org"
                        className="text-sage hover:text-forest transition-colors text-sm"
                      >
                        info@oldyorkroadgardenclub.org
                      </a>
                    </ContactDetail>

                    <ContactDetail icon={<MapIcon />} label="Mailing Address">
                      <p className="text-sm text-gray-600">
                        Old York Road Garden Club<br />
                        P.O. Box 214<br />
                        Jenkintown, PA 19046
                      </p>
                    </ContactDetail>

                    <ContactDetail icon={<CalendarIcon />} label="Monthly Meetings">
                      <p className="text-sm text-gray-600">
                        3rd Tuesday of each month<br />
                        7:00 PM – 9:00 PM
                      </p>
                    </ContactDetail>

                    <ContactDetail icon={<LocationPinIcon />} label="Meeting Location">
                      <p className="text-sm text-gray-600">
                        Jenkintown Public Library<br />
                        460 Old York Road<br />
                        Jenkintown, PA 19046
                      </p>
                      <a
                        href="https://maps.google.com/?q=Jenkintown+Public+Library"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-sage hover:text-forest mt-1 inline-block transition-colors"
                      >
                        Get Directions →
                      </a>
                    </ContactDetail>
                  </div>
                </div>
              </FadeIn>

              {/* Membership note */}
              <FadeIn delay={100}>
                <div className="bg-forest/5 border border-forest/15 rounded-xl p-6">
                  <h3 className="font-serif text-base font-bold text-forest mb-2">
                    New Member Inquiries
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Interested in joining? Visit our{' '}
                    <a href="/join" className="text-gold hover:underline font-medium">
                      Join Us
                    </a>{' '}
                    page or send us a message below and we'll reach out with everything you need
                    to know about becoming a member.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Contact form */}
            <FadeIn delay={120} className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-parchment p-8">
                <h2 className="font-serif text-2xl font-bold text-forest mb-6">
                  Send a Message
                </h2>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-14 h-14 bg-sage/20 rounded-full flex items-center justify-center mb-5">
                      <svg className="w-7 h-7 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-forest mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 text-sm max-w-xs">
                      Thank you for reaching out. A member of our club will respond within 2–3
                      business days.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-sm text-sage hover:text-forest transition-colors underline-offset-2 hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-parchment rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors bg-cream/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-parchment rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors bg-cream/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-parchment rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors bg-cream/50"
                      >
                        <option value="">Select a subject…</option>
                        <option>Membership Inquiry</option>
                        <option>Event Information</option>
                        <option>Civic Projects / Volunteering</option>
                        <option>Newsletter / Press</option>
                        <option>Garden Tour Information</option>
                        <option>General Question</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-2.5 border border-parchment rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors bg-cream/50 resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-forest hover:bg-forest/90 text-white font-bold rounded-lg transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-parchment py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-serif text-2xl font-bold text-forest mb-6">
              Find Us
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-md border border-parchment h-80 sm:h-96">
              <iframe
                title="Jenkintown Public Library location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.4872893395!2d-75.1348!3d40.0956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b84e0f9e1234%3A0x1234567890!2sJenkintown%20Public%20Library%2C%20460%20Old%20York%20Rd%2C%20Jenkintown%2C%20PA%2019046!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-gray-500 text-xs mt-3 text-center">
              Meetings held at Jenkintown Public Library — 460 Old York Road, Jenkintown, PA 19046
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

function ContactDetail({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-9 h-9 bg-sage/15 rounded-lg flex items-center justify-center text-sage">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">
          {label}
        </p>
        {children}
      </div>
    </div>
  )
}

function MailIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function MapIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l4-4 5 3 5-3 4 4v12l-4-3-5 3-5-3-4 3V8z" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
}

function LocationPinIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}
