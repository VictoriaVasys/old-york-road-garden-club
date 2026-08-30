import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { imgs } from '../images'
import oyrgcSealWhite from '../assets/oyrgc-seal-white.png'
import {
  upcomingEvents2026_2027,
  getNextUpcomingEvent,
  parseEventDate,
  type UpcomingEvent,
} from '../data/upcomingEvents'

const typeBadgeStyles: Record<UpcomingEvent['type'], string> = {
  Workshop: 'bg-mint/30 text-forest',
  Speaker: 'bg-sage/15 text-sage',
  Program: 'bg-gold/15 text-gold',
  Social: 'bg-parchment text-bark',
}

function FadeIn({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const [ref, inView] = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const galleryImages = [
  { url: imgs.img2, alt: 'Garden club planting' },
  { url: imgs.img3, alt: 'Seasonal floral arrangement' },
  { url: imgs.img4, alt: 'Garden border in bloom' },
  { url: imgs.img5, alt: 'Club garden showcase' },
  { url: imgs.img7, alt: 'Member garden highlight' },
]

export default function Home() {
  const nextEvent = getNextUpcomingEvent(upcomingEvents2026_2027)
  const nextEventDate = nextEvent ? parseEventDate(nextEvent.date) : null

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative -mt-16 lg:-mt-20 h-screen min-h-[600px] flex flex-col overflow-hidden">
        <img
          src={imgs.img1}
          alt="Lush garden in full bloom"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/65" />

        {/* Guaranteed clearance below the fixed navbar */}
        <div className="h-16 lg:h-20 flex-shrink-0" aria-hidden="true" />

        <div className="relative z-10 flex-1 flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <img
              src={oyrgcSealWhite}
              alt="Seal of the Old York Road Garden Club, established 1935"
              className="w-40 sm:w-52 lg:w-60 h-auto mx-auto mb-8"
            />
            <p className="text-mint text-sm font-medium tracking-[0.25em] uppercase mb-6">
              Jenkintown &amp; Abington, Pennsylvania
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Cultivating Beauty,
              <br />
              <em className="not-italic text-mint">Building Community</em>
            </h1>
            <p className="text-white/85 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              For over seven decades, we've united passionate gardeners to enrich
              our neighborhoods through horticultural excellence, civic
              beautification, and lifelong friendship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/events"
                className="px-8 py-3.5 bg-gold hover:bg-gold/90 text-white font-semibold rounded-md transition-colors shadow-lg"
              >
                Upcoming Events
              </Link>
              <Link
                to="/about"
                className="px-8 py-3.5 bg-white/15 hover:bg-white/25 border border-white/40 text-white font-semibold rounded-md transition-colors backdrop-blur-sm"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Next Event Highlight ── */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-3">
                Coming Up
              </p>
              <h2 className="font-serif text-4xl font-bold text-forest">
                Featured Event
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            {nextEvent && nextEventDate ? (
              <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-parchment max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-forest text-white px-10 py-10 md:py-0 flex flex-col items-center justify-center md:min-w-[180px] text-center">
                    <span className="font-serif text-6xl font-bold leading-none text-mint">
                      {nextEventDate.getDate()}
                    </span>
                    <span className="text-lg font-medium mt-1">
                      {nextEventDate.toLocaleDateString('en-US', { month: 'long' })}
                    </span>
                    <span className="text-white/60 text-sm">{nextEventDate.getFullYear()}</span>
                  </div>
                  <div className="p-8 flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${typeBadgeStyles[nextEvent.type]}`}
                      >
                        {nextEvent.type}
                      </span>
                      <span className="text-xs font-semibold bg-parchment text-bark px-3 py-1 rounded-full">
                        Members &amp; Guests Welcome
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-forest mb-3">
                      {nextEvent.title}
                    </h3>
                    <div className="flex flex-wrap gap-5 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1.5">
                        <ClockIcon /> {nextEvent.time ?? '11:30 AM ET'}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <LocationIcon />
                        {nextEvent.location ?? 'Grace Presbyterian Church, 444 Old York Road, Jenkintown'}
                      </span>
                    </div>
                    {(nextEvent.presenter || nextEvent.description) && (
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {[nextEvent.presenter, nextEvent.description].filter(Boolean).join(' — ')}
                      </p>
                    )}
                    <Link
                      to={nextEvent.flowerShowSlug ? `/events/${nextEvent.flowerShowSlug}` : '/events'}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold hover:bg-gold/90 text-white font-semibold rounded-md transition-colors text-sm"
                    >
                      {nextEvent.flowerShowSlug ? 'Flower Show Details' : 'View All Events'}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-parchment max-w-4xl mx-auto p-10 text-center">
                <p className="text-gray-600 mb-6">
                  We're finalizing our next program year — check back soon for upcoming events.
                </p>
                <Link
                  to="/events"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold hover:bg-gold/90 text-white font-semibold rounded-md transition-colors text-sm"
                >
                  View All Events
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            )}
          </FadeIn>
        </div>
      </section>

      {/* ── Civic Projects Spotlight ── */}
      <section className="bg-parchment py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-3">
                In Our Community
              </p>
              <h2 className="font-serif text-4xl font-bold text-forest mb-4">
                Civic Projects
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                From streetscape plantings to pollinator gardens, we bring lasting
                beauty to our shared public spaces.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                imageUrl: imgs.img1,
                title: 'Richard Wall House Herb Garden',
                desc: 'Members cultivate and maintain the historic herb garden at Richard Wall House in Elkins Park — a working garden and the site of our annual plant sale.',
                status: 'Active',
              },
              {
                imageUrl: imgs.img2,
                title: 'Jenkintown/Wyncote Train Station',
                desc: 'Members water flower boxes and seasonal displays at the train station multiple times a week, keeping it welcoming for commuters year-round.',
                status: 'Active',
              },
              {
                imageUrl: imgs.img7,
                title: "Children's Garden",
                desc: "Club members work alongside preschool students at Christ's Lutheran Church in Oreland to plant and tend a children's garden.",
                status: 'Active',
              },
            ].map((project, i) => (
              <FadeIn key={project.title} delay={i * 100}>
                <article className="bg-white rounded-xl overflow-hidden shadow-sm border border-parchment hover:shadow-md transition-shadow group">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block text-xs font-semibold bg-sage/15 text-sage px-2.5 py-1 rounded-full mb-3">
                      {project.status}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-forest mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.desc}
                    </p>
                    <Link
                      to="/civic-projects"
                      className="text-sage hover:text-forest text-sm font-semibold inline-flex items-center gap-1 transition-colors"
                    >
                      Learn More
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <div className="text-center mt-10">
              <Link
                to="/civic-projects"
                className="inline-flex items-center gap-2 px-7 py-3 border-2 border-forest text-forest font-semibold rounded-md hover:bg-forest hover:text-white transition-colors text-sm"
              >
                View All Projects
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Gallery Teaser ── */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-3">
                Photography
              </p>
              <h2 className="font-serif text-4xl font-bold text-forest mb-4">
                From Our Gardens
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                A glimpse into the beauty our members cultivate each season.
              </p>
            </div>
          </FadeIn>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <FadeIn key={img.url} delay={i * 80}>
                <div className="break-inside-avoid overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join CTA ── */}
      <section className="bg-forest py-24">
        <FadeIn>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-mint text-sm font-semibold tracking-widest uppercase mb-4">
              Become a Member
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Grow With Us
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Whether you're an expert horticulturalist or a curious beginner,
              there's a place for you in our garden club. Join a warm community
              of plant lovers who share your passion.
            </p>
            <Link
              to="/join"
              className="inline-block px-10 py-4 bg-gold hover:bg-gold/90 text-white font-bold rounded-md text-lg transition-colors shadow-lg"
            >
              Join Us Today
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  )
}

function ClockIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}
