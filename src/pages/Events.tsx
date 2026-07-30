import { useInView } from '../hooks/useInView'

interface Event {
  id: number
  date: string
  day: string
  month: string
  year: string
  title: string
  time: string
  location: string
  description: string
  tags: string[]
  upcoming: boolean
}

const events: Event[] = [
  {
    id: 1,
    date: '2026-08-16',
    day: '16',
    month: 'Aug',
    year: '2026',
    title: 'Late Summer Garden Tour',
    time: '10:00 AM – 3:00 PM',
    location: 'Six private gardens, Jenkintown & Abington',
    description:
      'A beloved annual tradition — explore six exquisite private gardens at the height of late-summer splendor. Self-guided maps and tickets available at the Jenkintown Library beginning August 10th. Admission $20 / members free.',
    tags: ['Garden Tour', 'All Welcome'],
    upcoming: true,
  },
  {
    id: 2,
    date: '2026-08-18',
    day: '18',
    month: 'Aug',
    year: '2026',
    title: 'August Monthly Meeting',
    time: '7:00 PM – 9:00 PM',
    location: 'Jenkintown Public Library, 460 Old York Rd',
    description:
      'Our August meeting features a guest presentation by noted horticulturalist Dr. Nora Whitfield on "Designing with Native Grasses." Members share summer garden updates and the Civic Projects Committee presents pollinator garden progress.',
    tags: ['Monthly Meeting', 'Members'],
    upcoming: true,
  },
  {
    id: 3,
    date: '2026-09-08',
    day: '8',
    month: 'Sep',
    year: '2026',
    title: 'Fall Plant Sale',
    time: '9:00 AM – 1:00 PM',
    location: 'Abington Township Municipal Building parking lot',
    description:
      'Our largest plant sale of the year! Members donate divisions of their best perennials, shrubs, and fall-blooming bulbs. All proceeds support our civic beautification projects. Come early for the best selection — fall asters, ornamental kale, heuchera, and more.',
    tags: ['Plant Sale', 'Fundraiser', 'All Welcome'],
    upcoming: true,
  },
  {
    id: 4,
    date: '2026-09-15',
    day: '15',
    month: 'Sep',
    year: '2026',
    title: 'September Monthly Meeting',
    time: '7:00 PM – 9:00 PM',
    location: 'Jenkintown Public Library, 460 Old York Rd',
    description:
      'Fall planning meeting with the annual garden design competition judging. Members submit photos of summer garden projects for peer recognition awards in categories including Best Container Planting, Best New Bed, and Outstanding Pollinator Garden.',
    tags: ['Monthly Meeting', 'Members'],
    upcoming: true,
  },
  {
    id: 5,
    date: '2026-10-10',
    day: '10',
    month: 'Oct',
    year: '2026',
    title: 'Autumn Foliage Walk & Picnic',
    time: '11:00 AM – 2:00 PM',
    location: 'Alverthorpe Manor Park, Jenkintown',
    description:
      'A casual outdoor gathering to celebrate peak fall color. Bring a dish to share for our potluck picnic. The club will lead a guided walk through the arboretum section identifying specimen trees and discussing autumn planting strategies.',
    tags: ['Social', 'Outdoor', 'All Welcome'],
    upcoming: true,
  },
  {
    id: 6,
    date: '2026-11-07',
    day: '7',
    month: 'Nov',
    year: '2026',
    title: 'Holiday Wreath Workshop',
    time: '10:00 AM – 12:30 PM',
    location: 'First Presbyterian Church of Jenkintown, Fellowship Hall',
    description:
      'Create a stunning holiday wreath using fresh evergreens, dried botanicals, and natural embellishments. All materials provided. Instructor: Margaret Chen, floral designer and longtime club member. Registration required; space is limited to 30 participants.',
    tags: ['Workshop', 'Holiday', 'Members & Guests'],
    upcoming: true,
  },
  {
    id: 7,
    date: '2026-11-17',
    day: '17',
    month: 'Nov',
    year: '2026',
    title: 'November Monthly Meeting',
    time: '7:00 PM – 9:00 PM',
    location: 'Jenkintown Public Library, 460 Old York Rd',
    description:
      'Year-end member recognition and election of officers for 2027. Outgoing President Patricia Lawson will deliver the annual state of the club address. Light refreshments served. Holiday wreath raffle benefiting the School Garden Partnership.',
    tags: ['Monthly Meeting', 'Annual Election', 'Members'],
    upcoming: true,
  },
  {
    id: 8,
    date: '2026-12-05',
    day: '5',
    month: 'Dec',
    year: '2026',
    title: 'Annual Holiday Dinner & Celebration',
    time: '6:30 PM – 10:00 PM',
    location: 'The Hiway Theater Ballroom, Jenkintown',
    description:
      'Our most festive event of the year — a sit-down dinner celebrating another year of growth and community. Awards ceremony, silent auction of member artwork and garden products, and musical entertainment. Tickets $65/person, $50/members.',
    tags: ['Annual Gala', 'Ticketed'],
    upcoming: true,
  },
]

const pastEvents = [
  { title: 'Spring Garden Tour', date: 'May 18, 2026' },
  { title: 'Seed Swap & Potluck', date: 'March 24, 2026' },
  { title: 'Winter Pruning Workshop', date: 'February 10, 2026' },
  { title: '2025 Annual Holiday Gala', date: 'December 6, 2025' },
  { title: 'Bulb Planting Day — Old York Road Corridor', date: 'October 19, 2025' },
]

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [ref, inView] = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function Events() {
  return (
    <>
      {/* Page hero */}
      <section className="relative h-72 sm:h-80 flex items-end pb-12 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&auto=format&fit=crop"
          alt="Garden club outdoor gathering"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-mint text-sm font-semibold tracking-widest uppercase mb-2">
            Calendar
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Events &amp; Meetings
          </h1>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-serif text-3xl font-bold text-forest mb-10">
              Upcoming Events — 2026
            </h2>
          </FadeIn>

          <div className="space-y-5">
            {events.map((event, i) => (
              <FadeIn key={event.id} delay={i * 60}>
                <article className="bg-white rounded-xl border border-parchment shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="flex flex-col sm:flex-row">
                    {/* Date badge */}
                    <div className="sm:w-32 bg-forest text-white flex flex-row sm:flex-col items-center justify-center gap-3 sm:gap-0 py-4 sm:py-8 px-6 sm:px-0 flex-shrink-0">
                      <span className="font-serif text-4xl sm:text-5xl font-bold leading-none text-mint">
                        {event.day}
                      </span>
                      <div className="sm:text-center">
                        <span className="block text-base sm:text-lg font-medium mt-0 sm:mt-1">
                          {event.month}
                        </span>
                        <span className="block text-white/50 text-xs">{event.year}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {event.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-semibold bg-parchment text-bark px-2.5 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-serif text-xl font-bold text-forest mb-2">
                        {event.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1.5">
                          <ClockIcon />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <LocationIcon />
                          {event.location}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {event.description}
                      </p>
                      <button
                        type="button"
                        className="text-sm font-semibold text-gold hover:text-gold/80 border border-gold hover:bg-gold/5 px-4 py-1.5 rounded-md transition-colors"
                      >
                        Add to Calendar
                      </button>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Past events */}
      <section className="bg-parchment py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-serif text-2xl font-bold text-forest mb-6">
              Past Events
            </h2>
            <ul className="divide-y divide-parchment border border-parchment rounded-xl bg-white overflow-hidden">
              {pastEvents.map((e) => (
                <li key={e.title} className="flex justify-between items-center px-6 py-4 text-sm">
                  <span className="text-gray-700 font-medium">{e.title}</span>
                  <span className="text-gray-400">{e.date}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
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
