import { useInView } from '../hooks/useInView'
import { imgs } from '../images'

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
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 sm:h-80 flex items-end pb-12 overflow-hidden">
        <img
          src={imgs.img4}
          alt="Train station fall planting 2024"
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

      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Info column */}
            <FadeIn className="lg:col-span-1">
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-forest mb-6">
                    Club Information
                  </h2>
                  <div className="space-y-5 text-sm text-gray-600">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Email</p>
                      <a
                        href="mailto:oldyorkroadgardenclub@gmail.com"
                        className="text-sage hover:text-forest transition-colors"
                      >
                        oldyorkroadgardenclub@gmail.com
                      </a>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Mailing Address</p>
                      <p>Old York Road Garden Club<br />P.O. Box 214<br />Jenkintown, PA 19046</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Monthly Meetings</p>
                      <p>2nd Thursday of each month<br />11:30 AM ET</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Meeting Location</p>
                      <p>Grace Presbyterian Church<br />444 Old York Road<br />Jenkintown, PA 19046</p>
                      <a
                        href="https://maps.google.com/?q=Grace+Presbyterian+Church+444+Old+York+Road+Jenkintown+PA+19046"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-sage hover:text-forest mt-1.5 inline-block transition-colors"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-parchment">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Interested in joining? Visit our{' '}
                    <a href="/join" className="text-gold hover:underline font-medium">
                      membership page
                    </a>{' '}
                    or email us directly — we'd love to hear from you.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Map column */}
            <FadeIn delay={100} className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-md border border-parchment h-96 lg:h-full min-h-72">
                <iframe
                  title="Grace Presbyterian Church location"
                  src="https://maps.google.com/maps?q=Grace+Presbyterian+Church,+444+Old+York+Road,+Jenkintown,+PA+19046&output=embed&z=15"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}

