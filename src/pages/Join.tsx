import { useState } from 'react'
import { useInView } from '../hooks/useInView'

type MembershipType = 'individual' | 'household'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  membershipType: MembershipType
  referral: string
  interests: string
}

const initialForm: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: 'PA',
  zip: '',
  membershipType: 'individual',
  referral: '',
  interests: '',
}

const benefits = [
  'Monthly programs with expert speakers and horticultural demonstrations',
  'Access to club plant library and seed-saving collection',
  'Member-only garden tours of private properties',
  'Quarterly newsletter "The Garden Path"',
  'Discounts at local nurseries and garden centers',
  'Participation in civic beautification volunteer events',
  'Entry into annual garden design competition',
  'Networking with passionate gardeners and horticultural professionals',
]

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

export default function Join() {
  const [form, setForm] = useState<FormData>(initialForm)
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
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-72 sm:h-80 flex items-end pb-12 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1600&auto=format&fit=crop"
          alt="Beautiful garden in bloom"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/55 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-mint text-sm font-semibold tracking-widest uppercase mb-2">
            Membership
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Join Us
          </h1>
        </div>
      </section>

      {/* Success message */}
      {submitted && (
        <div className="bg-sage/10 border-l-4 border-sage py-8 px-4">
          <div className="max-w-3xl mx-auto flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-sage rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-forest mb-1">
                Welcome to the Garden Club!
              </h2>
              <p className="text-gray-600">
                Thank you for your membership application. We'll be in touch within 5 business days
                with payment instructions and your official welcome packet. We look forward to
                growing with you!
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left: benefits + tiers */}
            <div className="lg:col-span-2 space-y-10">
              <FadeIn>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-forest mb-6">
                    Member Benefits
                  </h2>
                  <ul className="space-y-3">
                    {benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-gray-600">
                        <svg className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-forest mb-5">
                    Membership Tiers
                  </h2>
                  <div className="space-y-4">
                    {/* Individual */}
                    <div className={`rounded-xl border-2 p-5 cursor-pointer transition-all ${form.membershipType === 'individual' ? 'border-forest bg-forest/5' : 'border-parchment bg-white'}`}
                      onClick={() => setForm((f) => ({ ...f, membershipType: 'individual' }))}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif text-lg font-bold text-forest">Individual</h3>
                        <span className="text-2xl font-bold text-gold">$35<span className="text-sm text-gray-400 font-normal">/yr</span></span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Full membership for one person. All standard benefits included.
                        Perfect for solo gardeners who want to learn, connect, and contribute.
                      </p>
                    </div>

                    {/* Household */}
                    <div className={`rounded-xl border-2 p-5 cursor-pointer transition-all ${form.membershipType === 'household' ? 'border-forest bg-forest/5' : 'border-parchment bg-white'}`}
                      onClick={() => setForm((f) => ({ ...f, membershipType: 'household' }))}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif text-lg font-bold text-forest">Household</h3>
                          <span className="text-xs bg-gold/15 text-gold font-semibold px-2 py-0.5 rounded-full">Best Value</span>
                        </div>
                        <span className="text-2xl font-bold text-gold">$50<span className="text-sm text-gray-400 font-normal">/yr</span></span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Membership for two people sharing a household. Both members receive full
                        benefits, attend programs, and can participate in all club activities.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: application form */}
            <FadeIn delay={120} className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-parchment p-8">
                <h2 className="font-serif text-2xl font-bold text-forest mb-7">
                  Membership Application
                </h2>

                {submitted ? (
                  <p className="text-gray-500 text-sm">
                    Your application has been submitted. Thank you!
                  </p>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 border border-parchment rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors bg-cream/50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 border border-parchment rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors bg-cream/50"
                        />
                      </div>
                    </div>

                    {/* Email */}
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

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-parchment rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors bg-cream/50"
                      />
                    </div>

                    {/* Address */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-parchment rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors bg-cream/50"
                      />
                    </div>

                    {/* City / State / Zip */}
                    <div className="grid grid-cols-5 gap-3">
                      <div className="col-span-2">
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={form.city}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 border border-parchment rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors bg-cream/50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                          State
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={form.state}
                          onChange={handleChange}
                          maxLength={2}
                          className="w-full px-4 py-2.5 border border-parchment rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors bg-cream/50"
                        />
                      </div>
                      <div className="col-span-2">
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          name="zip"
                          value={form.zip}
                          onChange={handleChange}
                          required
                          maxLength={10}
                          className="w-full px-4 py-2.5 border border-parchment rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors bg-cream/50"
                        />
                      </div>
                    </div>

                    {/* Membership type */}
                    <div>
                      <fieldset>
                        <legend className="block text-xs font-semibold text-gray-700 mb-2.5 uppercase tracking-wide">
                          Membership Type *
                        </legend>
                        <div className="flex gap-6">
                          {(['individual', 'household'] as MembershipType[]).map((type) => (
                            <label key={type} className="flex items-center gap-2.5 cursor-pointer">
                              <input
                                type="radio"
                                name="membershipType"
                                value={type}
                                checked={form.membershipType === type}
                                onChange={handleChange}
                                className="w-4 h-4 accent-forest"
                              />
                              <span className="text-sm text-gray-700 capitalize">
                                {type} {type === 'individual' ? '($35/yr)' : '($50/yr)'}
                              </span>
                            </label>
                          ))}
                        </div>
                      </fieldset>
                    </div>

                    {/* Referral */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                        How Did You Hear About Us?
                      </label>
                      <select
                        name="referral"
                        value={form.referral}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-parchment rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors bg-cream/50"
                      >
                        <option value="">Select one…</option>
                        <option>Current member referral</option>
                        <option>Garden tour / event</option>
                        <option>Newspaper or local magazine</option>
                        <option>Social media</option>
                        <option>Borough website or newsletter</option>
                        <option>Library bulletin board</option>
                        <option>Online search</option>
                        <option>Other</option>
                      </select>
                    </div>

                    {/* Interests */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                        Gardening Interests / Areas of Focus
                      </label>
                      <textarea
                        name="interests"
                        value={form.interests}
                        onChange={handleChange}
                        rows={3}
                        placeholder="e.g., native plants, vegetable gardening, floral arranging…"
                        className="w-full px-4 py-2.5 border border-parchment rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors bg-cream/50 resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-forest hover:bg-forest/90 text-white font-bold rounded-lg transition-colors text-base mt-2"
                    >
                      Submit Application
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      After submitting, we'll contact you with payment instructions. Membership
                      becomes active upon receipt of dues.
                    </p>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </>
  )
}
