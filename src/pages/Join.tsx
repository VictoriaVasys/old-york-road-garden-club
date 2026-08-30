import { useInView } from '../hooks/useInView'
import { imgs } from '../images'

const benefits = [
  'Monthly copy of "The Tattler," the club newsletter',
  'Monthly programs featuring floral design demonstrations and speakers on gardening subjects',
  'Use of our library of more than 100 books on gardening and flower arranging (cataloged on LibraryThing)',
  'Participation in civic beautification projects throughout Jenkintown and Abington',
  'Invitation to the annual Spring Luncheon (ticketed, catered, with raffle)',
  'Invitation to the December Holiday Party (ticketed, catered, with raffle)',
  'Community with fellow gardeners and floral design enthusiasts',
]

const officers = [
  { title: 'President', name: 'Jane Klotz' },
  { title: 'Vice President', name: 'Linda Freedman' },
  { title: 'Recording Secretary', name: 'Donna Steck' },
  { title: 'Corresponding Secretary', name: 'Jane Klotz' },
  { title: 'Treasurer', name: 'Lina Morales' },
  { title: 'Financial Secretary', name: 'Carol Koch' },
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
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 sm:h-80 flex items-end pb-12 overflow-hidden">
        <img
          src={imgs.img5}
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

      {/* Dues + how to join */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <div>
                <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-4">
                  Membership Dues
                </p>
                <h2 className="font-serif text-4xl font-bold text-forest mb-4">
                  $45 per year
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  There is only one prerequisite for joining the Old York Road Garden Club:
                  enthusiasm for plants. Whether you're a seasoned horticulturalist or just
                  getting started, you are welcome here.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Annual dues are $45 and cover a full year of membership, including all
                  programs, the newsletter, library access, and civic project participation.
                  Meetings are free and open to the public — attending a meeting is a great
                  way to get a feel for the club before joining.
                </p>
                <div className="bg-forest/5 border border-forest/15 rounded-xl p-6">
                  <h3 className="font-serif text-base font-bold text-forest mb-2">
                    How to Join
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Interested in becoming a member? Send us an email and we'll get back
                    to you with everything you need to know.
                  </p>
                  <a
                    href="mailto:oldyorkroadgc@gmail.com"
                    className="inline-block mt-4 px-6 py-2.5 bg-gold hover:bg-gold/90 text-white font-semibold rounded-md transition-colors text-sm"
                  >
                    Email Us to Join
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div>
                <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-4">
                  What's Included
                </p>
                <h2 className="font-serif text-2xl font-bold text-forest mb-6">
                  Member Benefits
                </h2>
                <ul className="space-y-4">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Meeting info */}
      <section className="bg-parchment py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-2xl">
              <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-4">
                Monthly Meetings
              </p>
              <h2 className="font-serif text-3xl font-bold text-forest mb-4">
                Come to a Meeting First
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Meetings are held on the <strong>second Thursday</strong> of each month,
                September through June (except January), beginning at{' '}
                <strong>11:30 AM ET</strong>. Meetings are free and open to the public.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Grace Presbyterian Church</strong><br />
                444 Old York Road, Jenkintown, PA 19046
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Officers */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-4">
              Leadership
            </p>
            <h2 className="font-serif text-3xl font-bold text-forest mb-8">
              Board of Officers
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {officers.map((o, i) => (
              <FadeIn key={o.title} delay={i * 60}>
                <div className="bg-white rounded-xl border border-parchment p-4 text-center">
                  <p className="text-xs font-semibold text-sage uppercase tracking-wide mb-1">
                    {o.title}
                  </p>
                  <p className="font-serif text-sm font-bold text-forest">{o.name}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20">
        <FadeIn>
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-5">
              Ready to Grow With Us?
            </h2>
            <p className="text-white/75 leading-relaxed mb-8">
              Send us an email to inquire about membership — we'd love to have you.
            </p>
            <a
              href="mailto:oldyorkroadgc@gmail.com"
              className="inline-block px-10 py-4 bg-gold hover:bg-gold/90 text-white font-bold rounded-md text-lg transition-colors shadow-lg"
            >
              oldyorkroadgc@gmail.com
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
