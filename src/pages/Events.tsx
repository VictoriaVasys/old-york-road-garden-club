import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { imgs } from '../images'
import { upcomingEvents2026_2027, parseEventDate, type UpcomingEvent } from '../data/upcomingEvents'

const typeBadgeStyles: Record<UpcomingEvent['type'], string> = {
  Workshop: 'bg-mint/30 text-forest',
  Speaker: 'bg-sage/15 text-sage',
  Program: 'bg-gold/15 text-gold',
  Social: 'bg-parchment text-bark',
}

interface PastProgramEvent {
  date: string
  title: string
  presenter?: string
  flowerShowSlug?: string
}

const programYears: { year: string; events: PastProgramEvent[] }[] = [
  {
    year: '2025–2026',
    events: [
      { date: 'Oct 9, 2025',  title: '"All About Dahlias"', presenter: 'Michelle Miller, Master Gardener' },
      { date: 'Nov 13, 2025', title: '"Recycling for the Birds"', presenter: 'Jack Jones, JJ\'s Woodcrafts' },
      { date: 'Dec 11, 2025', title: 'Annual Holiday Luncheon/Tea' },
      { date: 'Feb 12, 2026', title: '"Raised Bed Gardening"', presenter: 'John Marcarelli, Master Gardener' },
      { date: 'Mar 12, 2026', title: '"Sustainable Types of Gardening"', presenter: 'Mikhail Arslanian, Mikhail\'s Garden Service' },
      { date: 'Apr 9, 2026',  title: '"My Garden Using Native Plants"', presenter: 'Marie Carota, Horticulturist' },
      { date: 'May 14, 2026', title: 'Spring Fling' },
      { date: 'Jun 11, 2026', title: '"Japanese Garden of Buenos Aires"', presenter: 'Jane Irvin Klotz, Master Gardener' },
      { date: 'Jun 27, 2026', title: 'Statewide Garden Tour — Wall House Gardens (GCFP)' },
    ],
  },
  {
    year: '2024–2025',
    events: [
      { date: 'Sep 12, 2024', title: '"Ikebana, the Japanese Art of Flower Arranging"', presenter: 'Dorothy C. Liu' },
      { date: 'Oct 10, 2024', title: 'Fall Walking Tour Through Arboretum', presenter: 'Kathy Salisbury, Ambler Arboretum at Temple University' },
      { date: 'Nov 14, 2024', title: '"Going Green"', presenter: 'Sharon Gross, Master Gardener' },
      { date: 'Dec 12, 2024', title: '"Decorating for the Holidays"', presenter: 'Nancy Straka, Carol Koch, Bonnie Zieger, Irene Clemens' },
      { date: 'Feb 13, 2025', title: '"Planning and Maintaining Fish Ponds"', presenter: 'Christian Senseman, Fitz\'s Fish Ponds' },
      { date: 'Mar 13, 2025', title: '"Edible Landscapes — Hiding Your Fruits and Veggies"', presenter: 'Leigh Kieser, Master Gardener' },
      { date: 'Apr 10, 2025', title: '"Houseplants — Indoor Landscaping with Colorful House Plants"', presenter: 'Mary McKnight Seltzer, Master Gardener' },
      { date: 'May 8, 2025',  title: 'Spring Fling', presenter: 'Cedarbrook Country Club' },
      { date: 'Jun 12, 2025', title: '"A Brief History of the Wall House Herb Garden" & "Benefits of Herbs"', presenter: 'Ronny Kosempel, Jane Irwin Klotz' },
    ],
  },
  {
    year: '2023–2024',
    events: [
      { date: 'Sep 14, 2023', title: '"Photography Basics and Flowers of Holland"', presenter: 'Kay Morrissey, NGC Flower Show Judge' },
      { date: 'Oct 12, 2023', title: '"The Color of Autumn"', presenter: 'Ehren Gross, Senior Naturalist, Briar Bush Nature Center' },
      { date: 'Nov 9, 2023',  title: '"Creative Design vs Traditional Design"', presenter: 'Audrey Williams, NGC Flower Show Judge' },
      { date: 'Dec 13, 2023', title: 'Annual Holiday Luncheon — "Decorating for the Holidays"', presenter: 'Marda Craig, Linda Freedman, Ronny Kosempel, Marie Schneider' },
      { date: 'Feb 8, 2024',  title: '"Parsley, a Powerhouse of an Herb"', presenter: 'Jane Klotz, Master Gardener' },
      { date: 'Mar 14, 2024', title: '"Flowering Trees"', presenter: 'Ehren Gross, Briar Bush Nature Center' },
      { date: 'Mar 23, 2024', title: 'Abington Library Plant Sale', presenter: 'Abington Library, 1:00–3:00 PM' },
      { date: 'Apr 11, 2024', title: '"Attracting and Cultivating Bees"', presenter: 'Sandra Sweeney, Master Gardener' },
      { date: 'Apr 28, 2024', title: 'Annual Plant Sale', presenter: 'Historic Richard Wall House, 1:00–3:00 PM' },
      { date: 'May 9, 2024',  title: 'Spring Fling' },
      { date: 'Jun 13, 2024', title: '"Native Plants for Cut Flowers"', presenter: 'Kathy Salisbury, Ambler Arboretum at Temple University' },
    ],
  },
  {
    year: '2021–2022',
    events: [
      { date: 'Sep 9, 2021',  title: '"The Many Techniques Used in Parallel Design"', presenter: 'Brenda Sullivan, Horticulturist and Horticultural Therapist' },
      { date: 'Oct 14, 2021', title: 'Fall Arrangement Demonstration', presenter: 'Marie Schneider' },
      { date: 'Nov 11, 2021', title: '"Designing and Cultivating a Gold Medal Garden"', presenter: 'Nichole Juday Rhoads, PHS' },
      { date: 'Dec 9, 2021',  title: 'Holiday Luncheon — "Decorating for the Holidays"', presenter: 'Carol Koch, Nancy Straka, Marda Craig, Bonnie Zieger' },
      { date: 'Feb 10, 2022', title: '"Discovering Flowering Shrubs with Multiple Ornamental Interests"', presenter: 'Thom Mrazik, Master Gardener' },
      { date: 'Mar 10, 2022', title: '"Welcoming Bluebirds to Our Backyards"', presenter: 'Pamela Dimeler, Wildlife Photographer' },
      { date: 'Apr 14, 2022', title: '"Native Blooms and Their Pollinators"', presenter: 'Larry Moyer, Naturalist and Photographer' },
      { date: 'May 12, 2022', title: 'Spring Fling' },
      { date: 'Jun 9, 2022',  title: 'Lunch, House Tour, and Plant Sale', presenter: 'Historic Richard Wall House' },
    ],
  },
  {
    year: '2019–2020',
    events: [
      { date: 'Sep 12, 2019', title: '"Planting Bulbs in the Fall for Spring Bloom"', presenter: 'Betty Nutt, Master Gardener' },
      { date: 'Oct 10, 2019', title: '"How Not to Fail Orchid Growing"', presenter: 'Roslyn Greenberg, Past President Central Jersey Orchid Society' },
      { date: 'Nov 14, 2019', title: '"Irises Arranged and Un-Arranged"', presenter: 'Svetlana McCoy-Rusanova, President Garden State Iris Society' },
      { date: 'Dec 12, 2019', title: 'Holiday Luncheon — "Decorating for the Holidays"', presenter: 'Ronny Kosempel, Carol Koch, Marda Craig, Thembeka Mason, Mary Findlay' },
      { date: 'Feb 13, 2020', title: '"Regrowing Produce"', presenter: 'Marda Craig' },
      { date: 'Mar 12, 2020', title: '"Three Floral Designs: Parallel, Natural, Cluster"', presenter: 'Brenda Sullivan, Horticulturist and Horticultural Therapist' },
      { date: 'Apr 9, 2020',  title: '"New Perennials for 2020"', presenter: 'Sharee Solow, Certified Horticulturist' },
      { date: 'May 14, 2020', title: 'Spring Fling', presenter: 'Old York Road Country Club' },
      { date: 'Jun 11, 2020', title: '"Native Blooms and Their Pollinators"', presenter: 'Larry Moyr, Naturalist and Photographer' },
    ],
  },
  {
    year: '2018–2019',
    events: [
      { date: 'Sep 13, 2018', title: '"Simply Roses"', presenter: 'Mary McKnight Seltzer, Philadelphia Rose Society' },
      { date: 'Oct 11, 2018', title: '"Best Trees for the Home Landscape"', presenter: 'Barley Van Clief, Tree Tenders Project Manager PHS' },
      { date: 'Nov 15, 2018', title: '"Winning Combinations, Greening Throughout the Year"', presenter: 'Lorie M Hayes, Philadelphia Parks and Recreation' },
      { date: 'Dec 13, 2018', title: 'Holiday Luncheon — "Decorating Our Home With Greens and Berries"', presenter: 'Marie Schneider, Marda Craig' },
      { date: 'Feb 14, 2019', title: '"Gardening for Window Boxes, Containers and Roof Gardens"', presenter: 'Andrea Hallmark, Landscape Design' },
      { date: 'Mar 14, 2019', title: '"Attract Bluebirds to Your Yard"', presenter: 'Betsy Nutt, Master Gardener' },
      { date: 'Apr 11, 2019', title: '"Peonies" — Selection, Care and Maintenance', presenter: 'Thomas Mrazik, Master Gardener' },
      { date: 'May 9, 2019',  title: 'Spring Fling Luncheon' },
      { date: 'Jun 13, 2019', title: '"Using Flowers to Decorate Book Marks and Note Paper"', presenter: 'Marda Craig' },
    ],
  },
]

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
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const upcoming = upcomingEvents2026_2027.filter((e) => parseEventDate(e.date) >= today)
  const past2026_2027 = upcomingEvents2026_2027.filter((e) => parseEventDate(e.date) < today)

  const programYearsWithCurrent =
    past2026_2027.length > 0
      ? [
          {
            year: '2026–2027',
            events: past2026_2027.map((e) => ({
              date: e.date,
              title: e.title,
              presenter: [e.presenter, e.description].filter(Boolean).join(' — ') || undefined,
              flowerShowSlug: e.flowerShowSlug,
            })),
          },
          ...programYears,
        ]
      : programYears

  return (
    <>
      {/* Page hero */}
      <section className="relative h-72 sm:h-80 flex items-end pb-12 overflow-hidden">
        <img
          src={imgs.img11}
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
            <h2 className="font-serif text-3xl font-bold text-forest mb-2">
              2026–2027 Program Year
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mb-10">
              Monthly meetings are held on the second Thursday of each month at 12:30 PM
              at Grace Presbyterian Church, 444 Old York Road, Jenkintown. Meetings are
              free and open to the public.
            </p>
          </FadeIn>

          {upcoming.length === 0 && (
            <p className="text-gray-500 text-sm mb-6">
              No upcoming events are scheduled right now — check back soon.
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcoming.map((e, i) => {
              const eventDate = parseEventDate(e.date)
              return (
                <FadeIn key={e.date} delay={i * 60}>
                  <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-parchment h-full flex">
                    <div className="bg-forest text-white px-6 py-6 flex flex-col items-center justify-center min-w-[110px] text-center">
                      <span className="font-serif text-4xl font-bold leading-none text-mint">
                        {eventDate.getDate()}
                      </span>
                      <span className="text-sm font-medium mt-1">
                        {eventDate.toLocaleDateString('en-US', { month: 'long' })}
                      </span>
                      <span className="text-white/60 text-xs">{eventDate.getFullYear()}</span>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <span
                        className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${typeBadgeStyles[e.type]}`}
                      >
                        {e.type}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-forest mb-2">
                        {e.title}
                      </h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 mb-2">
                        <span className="flex items-center gap-1.5">
                          <ClockIcon /> 12:30 PM
                        </span>
                        <span className="flex items-center gap-1.5">
                          <LocationIcon />
                          {e.location ?? 'Grace Presbyterian Church, Jenkintown'}
                        </span>
                      </div>
                      {(e.presenter || e.description) && (
                        <p className="text-sm text-gray-600 mb-1">
                          {[e.presenter, e.description].filter(Boolean).join(' — ')}
                        </p>
                      )}
                      {e.flowerShowSlug && (
                        <Link
                          to={`/events/${e.flowerShowSlug}`}
                          className="mt-auto pt-3 text-sage hover:text-forest text-sm font-semibold inline-flex items-center gap-1"
                        >
                          Standard Flower Show Details
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Past programs */}
      <section className="bg-parchment py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-serif text-3xl font-bold text-forest mb-10">
              Past Programs
            </h2>
          </FadeIn>
          <div className="space-y-10">
            {programYearsWithCurrent.map((group, gi) => (
              <FadeIn key={group.year} delay={gi * 60}>
                <div>
                  <h3 className="font-serif text-lg font-bold text-forest mb-3 pb-2 border-b border-parchment">
                    {group.year}
                  </h3>
                  <ul className="divide-y divide-parchment/60 bg-white rounded-xl border border-parchment overflow-hidden">
                    {group.events.map((e) => (
                      <li key={e.date + e.title} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 px-6 py-3.5 text-sm">
                        <span className="text-gray-400 flex-shrink-0 w-28">{e.date}</span>
                        <div>
                          <span className="text-gray-800 font-medium">{e.title}</span>
                          {e.presenter && (
                            <span className="text-gray-500 ml-1">— {e.presenter}</span>
                          )}
                          {e.flowerShowSlug && (
                            <Link
                              to={`/events/${e.flowerShowSlug}`}
                              className="text-sage hover:text-forest ml-2 font-semibold"
                            >
                              Details
                            </Link>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
