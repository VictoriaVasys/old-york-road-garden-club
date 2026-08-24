import { useInView } from '../hooks/useInView'
import { imgs } from '../images'

/* ── Photo archive posts ─────────────────────────────────────── */

interface Post {
  date: string
  title: string
  description?: string
  photos: { url: string; alt: string }[]
}

interface YearGroup {
  year: string
  posts: Post[]
}

const photoArchive: YearGroup[] = [
  {
    year: '2026',
    posts: [
      {
        date: 'Jun 27, 2026',
        title: 'Statewide Garden Tour — Wall House Gardens',
        description:
          'The club and the Historical Commission hosted a regional garden tour at the Richard Wall Herb Garden. The Pennsylvania Garden Club Federation organized viewings of over 90 beautiful gardens across twelve counties, with ticket sales benefiting the club.',
        photos: [],
      },
    ],
  },
  {
    year: '2025',
    posts: [
      {
        date: 'Aug 31, 2025',
        title: 'The Herb Garden at Wall House is maintained by OYRGC',
        photos: [
          { url: imgs.img1, alt: 'Herb garden at the historic Richard Wall House' },
        ],
      },
      {
        date: 'Aug 31, 2025',
        title: 'Our members water the train station displays several times a week',
        photos: [
          { url: imgs.img2, alt: 'Jenkintown/Wyncote train station fall 2025' },
          { url: imgs.img3, alt: 'Jenkintown/Wyncote train station fall 2025' },
        ],
      },
    ],
  },
  {
    year: '2024',
    posts: [
      {
        date: 'Apr 28, 2024',
        title: 'Annual Plant Sale — Historic Richard Wall House',
        photos: [
          { url: imgs.img11, alt: 'Wall House plant sale — moss purses' },
          { url: imgs.img10, alt: 'Plant sale raffle basket' },
        ],
      },
      {
        date: 'Mar 23, 2024',
        title: 'Abington Library Plant Sale',
        photos: [
          { url: imgs.abingtonLibrary, alt: 'Abington Library plant sale' },
        ],
      },
      {
        date: 'Mar 30, 2024',
        title: 'The flower boxes at the Jenkintown/Wyncote train station are "springing" to life',
        description: 'Thanks to Marie Schneider and Marda Craig for updating them.',
        photos: [
          { url: imgs.img4, alt: 'Jenkintown/Wyncote train station fall 2024' },
          { url: imgs.img5, alt: 'Jenkintown/Wyncote train station fall 2024' },
        ],
      },
    ],
  },
  {
    year: '2023',
    posts: [
      {
        date: 'Aug 28, 2023',
        title: "Children's Garden — Christ's Lutheran Church, Oreland",
        description: "Planted by the club alongside preschool four-year-old students — future gardeners in the making.",
        photos: [
          { url: imgs.img7, alt: "Children's garden at Christ's Lutheran Church" },
        ],
      },
      {
        date: 'Jun 27, 2023',
        title: 'Floral Design — "Calm Waters" and "Roses Are Red, But Violets Are Blue"',
        description: 'Arrangements from our June program, created despite a cancelled meeting due to Canadian wildfire smoke.',
        photos: [
          { url: imgs.phsWindowsill, alt: 'Club floral design arrangements' },
        ],
      },
      {
        date: 'Jan 16, 2023',
        title: 'Grace Presbyterian Church is decked out for winter!',
        photos: [
          { url: imgs.img8, alt: 'Grace Presbyterian Church winter display' },
        ],
      },
      {
        date: 'Jan 16, 2023',
        title: 'From our December 2022 Annual Holiday Luncheon',
        description: 'Ideas for holiday table arrangements from our annual seasonal celebration.',
        photos: [
          { url: imgs.holidayGnomes, alt: 'Holiday decorations from the annual luncheon' },
        ],
      },
    ],
  },
  {
    year: '2022',
    posts: [
      {
        date: 'May 19, 2022',
        title: '85th Anniversary Spring Fling — Cedarbrook Country Club',
        description: 'Old York Road Garden Club celebrated their 85th anniversary Spring Fling at Cedarbrook Country Club in Blue Bell, Pennsylvania.',
        photos: [],
      },
      {
        date: 'Jul 13, 2022',
        title: 'Jenkintown/Wyncote Train Station in Full Bloom',
        description: 'Thanks to all the caretakers and their helpers for keeping the station beautiful.',
        photos: [
          { url: imgs.img9, alt: 'Jenkintown/Wyncote train station summer 2022' },
        ],
      },
    ],
  },
  {
    year: '2021',
    posts: [
      {
        date: 'Dec 9, 2021',
        title: 'Holiday Decorating',
        photos: [
          { url: imgs.holidayGnomes, alt: 'Holiday gnome decorations' },
        ],
      },
    ],
  },
  {
    year: '2019',
    posts: [
      {
        date: 'May 9, 2019',
        title: 'Spring Fling Luncheon',
        photos: [
          { url: imgs.springFling19a, alt: 'Spring Fling 2019' },
          { url: imgs.springFling19b, alt: 'Spring Fling 2019' },
          { url: imgs.springFling19c, alt: 'Spring Fling 2019' },
          { url: imgs.springFling19d, alt: 'Spring Fling 2019' },
          { url: imgs.springFling19e, alt: 'Spring Fling 2019' },
          { url: imgs.springFling19f, alt: 'Spring Fling 2019' },
          { url: imgs.springFling19g, alt: 'Spring Fling 2019' },
        ],
      },
      {
        date: 'Jun 13, 2019',
        title: 'Wall House Open House',
        photos: [
          { url: imgs.wallhouseOpenhouse, alt: 'Wall House 2019 open house' },
        ],
      },
    ],
  },
  {
    year: '2018',
    posts: [
      {
        date: 'Dec 2018',
        title: 'Wall House Holiday Tour',
        photos: [
          { url: imgs.wallhouse2018, alt: 'Wall House 2018 holiday tour' },
        ],
      },
    ],
  },
]

/* ── Program schedule ────────────────────────────────────────── */

const programYears: { year: string; events: { date: string; title: string; presenter?: string }[] }[] = [
  {
    year: '2025–2026',
    events: [
      { date: 'Oct 9, 2025',  title: '"All About Dahlias"', presenter: 'Michelle Miller, Master Gardener' },
      { date: 'Nov 13, 2025', title: '"Recycling for the Birds"', presenter: "Jack Jones, JJ's Woodcrafts" },
      { date: 'Dec 11, 2025', title: 'Annual Holiday Luncheon/Tea' },
      { date: 'Feb 12, 2026', title: '"Raised Bed Gardening"', presenter: 'John Marcarelli, Master Gardener' },
      { date: 'Mar 12, 2026', title: '"Sustainable Types of Gardening"', presenter: "Mikhail Arslanian, Mikhail's Garden Service" },
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
      { date: 'Feb 13, 2025', title: '"Planning and Maintaining Fish Ponds"', presenter: "Christian Senseman, Fitz's Fish Ponds" },
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

/* ── Components ──────────────────────────────────────────────── */

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

export default function Archive() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-56 sm:h-64 flex items-end pb-10 overflow-hidden">
        <img
          src={imgs.img3}
          alt="Club program archive"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/55 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-mint text-sm font-semibold tracking-widest uppercase mb-2">
            History
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Archive
          </h1>
        </div>
      </section>

      {/* Meeting info strip */}
      <section className="bg-cream py-6 border-b border-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-sm">
            Monthly meetings are held on the <strong>second Thursday</strong> of each month at <strong>12:30 PM</strong> (lunch at 11:30 AM) at <strong>Grace Presbyterian Church, 444 Old York Road, Jenkintown</strong>. Meetings are free and open to the public.
          </p>
        </div>
      </section>

      {/* Photo archive */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-12">
              <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-3">
                Updates &amp; Events
              </p>
              <h2 className="font-serif text-3xl font-bold text-forest">
                Photo Archive
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-16">
            {photoArchive.map((group, gi) => (
              <FadeIn key={group.year} delay={gi * 40}>
                <div>
                  <h3 className="font-serif text-xl font-bold text-forest mb-6 pb-2 border-b-2 border-forest/20">
                    {group.year}
                  </h3>
                  <div className="space-y-10">
                    {group.posts.map((post) => (
                      <div key={post.date + post.title} className="sm:flex gap-8">
                        <div className="flex-shrink-0 w-28 text-xs font-mono text-gray-400 mt-0.5 mb-2 sm:mb-0">
                          {post.date}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-serif text-base font-semibold text-gray-800 mb-1.5">
                            {post.title}
                          </h4>
                          {post.description && (
                            <p className="text-sm text-gray-500 leading-relaxed mb-4">
                              {post.description}
                            </p>
                          )}
                          {post.photos.length > 0 && (
                            <div
                              className={`grid gap-3 mt-3 ${
                                post.photos.length === 1
                                  ? 'grid-cols-1 max-w-xs'
                                  : post.photos.length <= 3
                                  ? 'grid-cols-2 sm:grid-cols-3 max-w-xl'
                                  : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'
                              }`}
                            >
                              {post.photos.map((photo) => (
                                <div key={photo.url} className="overflow-hidden rounded-lg shadow-sm">
                                  <img
                                    src={photo.url}
                                    alt={photo.alt}
                                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Program schedule */}
      <section className="bg-parchment py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-12">
              <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-3">
                Programs
              </p>
              <h2 className="font-serif text-3xl font-bold text-forest">
                Program Schedule
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-10">
            {programYears.map((group, gi) => (
              <FadeIn key={group.year} delay={gi * 50}>
                <div>
                  <h3 className="font-serif text-xl font-bold text-forest mb-3 pb-2 border-b-2 border-forest/20">
                    {group.year}
                  </h3>
                  <ul className="divide-y divide-parchment/60 bg-white rounded-xl border border-parchment overflow-hidden">
                    {group.events.map((e) => (
                      <li
                        key={e.date + e.title}
                        className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-4 px-6 py-3.5 text-sm hover:bg-cream/50 transition-colors"
                      >
                        <span className="text-gray-400 flex-shrink-0 w-28 font-mono text-xs">{e.date}</span>
                        <div>
                          <span className="text-gray-800 font-medium">{e.title}</span>
                          {e.presenter && (
                            <span className="text-gray-500 ml-1">— {e.presenter}</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <p className="mt-10 text-center text-sm text-gray-500">
              For earlier programs, visit the{' '}
              <a
                href="https://oldyorkroadgardenclub.com/archive"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage hover:text-forest underline transition-colors"
              >
                original site archive
              </a>
              .
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
