import { useInView } from '../hooks/useInView'

type Status = 'Active' | 'Completed' | 'Planning'

interface Project {
  id: number
  title: string
  status: Status
  location: string
  description: string
  impact: string[]
  imageSeed: string
  year: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Old York Road Corridor Beautification',
    status: 'Active',
    location: 'Old York Road, Jenkintown Borough',
    description:
      'Our flagship civic project, ongoing since 2008. We maintain twelve planted beds along the Old York Road commercial corridor, providing four-season interest through careful plant selection and dedicated member volunteer hours. Spring bulbs give way to summer perennials, fall asters, and ornamental cabbage, with evergreen structure providing winter interest. This project serves as the visible face of our club in the community.',
    impact: [
      '12 planted beds maintained year-round',
      '400+ volunteer hours per year',
      '3,000+ plants installed since 2008',
      'Partnership with Jenkintown Borough Council',
    ],
    imageSeed: 'streetscape',
    year: '2008–Present',
    featured: true,
  },
  {
    id: 2,
    title: 'Community Pollinator Garden',
    status: 'Active',
    location: 'Abington Township Community Park',
    description:
      'Established in 2021, this half-acre native plant sanctuary was designed in consultation with the Pennsylvania Native Plant Society. The garden features over 85 species of native grasses, wildflowers, and shrubs selected specifically to support local pollinators including monarch butterflies, native bees, and hummingbirds. Interpretive signage educates park visitors about the importance of native plantings.',
    impact: [
      '85+ native plant species',
      '0.5 acres of restored habitat',
      '30% increase in observed pollinator species (year 2)',
      'Educational signage serving 5,000+ annual park visitors',
    ],
    imageSeed: 'pollinator',
    year: '2021–Present',
  },
  {
    id: 3,
    title: 'Jenkintown Elementary School Garden',
    status: 'Active',
    location: 'Jenkintown Elementary School',
    description:
      "In partnership with Jenkintown School District, we designed and built four raised vegetable beds and an outdoor learning area adjacent to the school's science wing. Club members visit monthly throughout the school year to work alongside students, teaching basic horticulture, seed-starting, composting, and the lifecycle of plants. The harvest is shared with the school cafeteria and local food pantry.",
    impact: [
      '4 raised beds producing vegetables and herbs',
      '200+ students engaged per year',
      'Harvest donated to Jenkintown Food Pantry annually',
      'Curriculum integration with 3rd–5th grade science standards',
    ],
    imageSeed: 'schoolgarden',
    year: '2019–Present',
  },
  {
    id: 4,
    title: 'Alverthorpe Manor Memorial Garden',
    status: 'Completed',
    location: 'Alverthorpe Manor Park, Jenkintown',
    description:
      "A commemorative memorial garden installed at the entrance to Alverthorpe Manor Park honoring the park's centennial in 2022. The garden features a curated collection of heirloom roses, boxwood hedging, and antique-style cast-iron signage. Design was led by past president Eleanor Hartwell, who donated significant plant material from her own collection.",
    impact: [
      'Centennial completion on time and on budget',
      'Featured in Pennsylvania Horticulturalist magazine (Fall 2022)',
      '100+ heirloom rose varieties sourced',
      'Maintained by club volunteer team',
    ],
    imageSeed: 'memorial',
    year: '2021–2022',
  },
  {
    id: 5,
    title: 'Township Road Median Planting Initiative',
    status: 'Planning',
    location: 'Susquehanna Road, Abington Township',
    description:
      'A proposed beautification project in partnership with Abington Township to introduce drought-tolerant perennial plantings in the medians along Susquehanna Road. Grant applications have been submitted to the Pennsylvania Department of Conservation and Natural Resources (DCNR) and the William Penn Foundation. A community design charrette is scheduled for Fall 2026.',
    impact: [
      '$45,000 in grant funding under application',
      '1.2 miles of median to be planted',
      'Focus on drought-tolerant native species',
      'Community design process planned for Fall 2026',
    ],
    imageSeed: 'median',
    year: '2026 (Planned)',
  },
]

const statusColors: Record<Status, string> = {
  Active: 'bg-sage/15 text-sage',
  Completed: 'bg-bark/10 text-bark',
  Planning: 'bg-gold/15 text-gold',
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [ref, inView] = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function CivicProjects() {
  const featured = projects.find((p) => p.featured)!
  const others = projects.filter((p) => !p.featured)

  return (
    <>
      {/* Hero */}
      <section className="relative h-72 sm:h-80 flex items-end pb-12 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1600&auto=format&fit=crop"
          alt="Community garden volunteers"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/55 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-mint text-sm font-semibold tracking-widest uppercase mb-2">
            Our Impact
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Civic Projects
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl font-bold text-forest mb-4">
                Rooted in Our Community
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                The Old York Road Garden Club has been improving the landscapes of
                Jenkintown and Abington since 1952. Beyond our members' private gardens,
                we invest hundreds of volunteer hours each year in civic beautification
                projects that serve and inspire the entire community.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured project */}
      <section className="bg-parchment py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-6">
              Flagship Project
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <article className="bg-white rounded-2xl overflow-hidden shadow-md border border-parchment">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-72 lg:h-auto overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${featured.imageSeed}/900/700`}
                    alt={featured.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${statusColors[featured.status]}`}>
                      {featured.status}
                    </span>
                    <span className="text-xs text-gray-400">{featured.year}</span>
                  </div>
                  <h2 className="font-serif text-2xl lg:text-3xl font-bold text-forest mb-2">
                    {featured.title}
                  </h2>
                  <p className="text-sage text-sm font-medium mb-4 flex items-center gap-1.5">
                    <LocationIcon /> {featured.location}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {featured.description}
                  </p>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-forest mb-3">
                      Our Impact
                    </h4>
                    <ul className="space-y-1.5">
                      {featured.impact.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckIcon className="flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </FadeIn>
        </div>
      </section>

      {/* Other projects grid */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-serif text-2xl font-bold text-forest mb-10">
              More Projects
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {others.map((project, i) => (
              <FadeIn key={project.id} delay={i * 100}>
                <article className="bg-white rounded-xl overflow-hidden shadow-sm border border-parchment hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="h-52 overflow-hidden">
                    <img
                      src={`https://picsum.photos/seed/${project.imageSeed}/800/500`}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${statusColors[project.status]}`}>
                        {project.status}
                      </span>
                      <span className="text-xs text-gray-400">{project.year}</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-forest mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-sage text-xs font-medium mb-3 flex items-center gap-1">
                      <LocationIcon /> {project.location}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                      {project.description}
                    </p>
                    <div className="border-t border-parchment pt-4">
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                        Impact Highlights
                      </h4>
                      <ul className="space-y-1">
                        {project.impact.slice(0, 2).map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-gray-500">
                            <CheckIcon className="flex-shrink-0 mt-0.5 w-3 h-3" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="bg-forest py-16">
        <FadeIn>
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              Help Us Grow Our Community
            </h2>
            <p className="text-white/75 leading-relaxed mb-8">
              Our civic projects depend on dedicated volunteer gardeners. Members
              and community volunteers are always welcome to join a workday.
            </p>
            <a
              href="/join"
              className="inline-block px-8 py-3.5 bg-gold hover:bg-gold/90 text-white font-bold rounded-md transition-colors"
            >
              Get Involved
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  )
}

function CheckIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={`${className} text-sage`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg className="w-3.5 h-3.5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}
