import { useInView } from '../hooks/useInView'
import { imgs } from '../images'

interface Photo {
  url: string
  alt: string
  /** Set to true to display this photo in a taller, portrait-shaped frame. */
  portrait?: boolean
}

interface Subsection {
  label?: string
  photos: Photo[]
}

interface CivicSection {
  title: string
  description: string
  subsections: Subsection[]
}

const civicSections: CivicSection[] = [
  {
    title: 'Jenkintown/Wyncote Train Station',
    description:
      'Club members water flower boxes and seasonal displays at the Jenkintown/Wyncote train station multiple times each week. Rain barrels are maintained on-site for sustainable irrigation. Plantings are refreshed each season — spring flowers replace winter decorations, fall arrangements follow summer blooms — keeping the station welcoming for the thousands of commuters who pass through daily.',
    subsections: [
      {
        label: 'Fall 2025',
        photos: [
          { url: imgs.img2, alt: 'Train station fall planting 2025', portrait: true },
          { url: imgs.img3, alt: 'Train station fall display 2025', portrait: true },
        ],
      },
      {
        label: 'Fall 2024',
        photos: [
          { url: imgs.img4, alt: 'Train station fall planting 2024', portrait: true },
          { url: imgs.img5, alt: 'Train station fall display 2024', portrait: true },
        ],
      },
      {
        label: 'Summer 2022',
        photos: [
          { url: imgs.img9, alt: 'Train station summer 2022' },
        ],
      },
    ],
  },
  {
    title: 'Richard Wall House Herb Garden',
    description:
      'Members actively cultivate and maintain the herb garden at the historic Richard Wall House in Elkins Park. The garden is replanted and refreshed each season — herbs are added, beds are mulched, and the space is continually developed. It serves as both a working garden and a living educational resource, and is a key venue for the club\'s annual herb and plant sale.',
    subsections: [
      {
        label: '2026 — Annual Plant Sale',
        photos: [
          { url: imgs.img10, alt: 'Plant sale raffle basket', portrait: true },
          { url: imgs.img11, alt: 'Wall House plant sale — moss purses', portrait: true },
        ],
      },
      {
        label: '2021',
        photos: [
          { url: imgs.img1, alt: 'Wall House herb garden' },
        ],
      },
      {
        label: '2019 — Open House',
        photos: [
          { url: imgs.wallhouseOpenhouse, alt: 'Wall House 2019 open house' },
        ],
      },
      {
        label: '2018',
        photos: [
          { url: imgs.wallhouse2018, alt: 'Wall House holiday tour 2018', portrait: true },
        ],
      },
    ],
  },
  {
    title: 'Nursery School at Christ Lutheran Church',
    description:
      'Club members work alongside preschool students at Christ Lutheran Church in Oreland to plant and tend a children\'s garden. The program introduces young learners to the joy of gardening, teaching them where food comes from and how to care for living plants.',
    subsections: [
      {
        photos: [
          { url: imgs.img7, alt: "Children's nursery garden at Christ Lutheran Church" },
        ],
      },
    ],
  },
 {
    title: 'Grace Presbyterian Urns',
    description:
      'The club brightens public and partner locations throughout Jenkintown and Abington.',
    subsections: [
      {
        photos: [
          { url: imgs.img8, alt: 'Grace Presbyterian winter display', portrait: true },
        ],
      },
    ],
  },
 {
    title: 'Abington Public Library',
    description:
      'The club a fresh flower arrangement or live plant every week at the Abington Township Public Library',
    subsections: [
      {
        label: 'Abington Library Flower Arrangement',
        photos: [
          { url: imgs.abingtonLibrary, alt: 'Abington Library plant sale', portrait: true },
        ],
      },
    ],
  },
  {
    title: 'Community Floral Design',
    description:
      'The club participates in community floral design programs and competitions, contributing arrangements and displays that bring beauty to shared spaces throughout the region. Members have earned recognition for their designs at Pennsylvania Horticultural Society shows and other local events.',
    subsections: [
      {
        photos: [
          { url: imgs.phsWindowsill, alt: 'PHS windowsill floral display', portrait: true },
        ],
      },
    ],
  },
  {
    title: 'Blue Star Marker',
    description:
      'The Old York Road Garden Club maintains a Blue Star Memorial Marker, honoring the men and women of the United States armed forces who have served and sacrificed for our country. The marker is planted and tended by club members as an ongoing act of remembrance.',
    subsections: [],
  },
  {
    title: 'Memorial Planting',
    description:
      'The club honors members and community figures through memorial plantings — living tributes that enrich local green spaces while preserving the memory of those who have shaped our community.',
    subsections: [],
  },
  {
    title: 'Plant-A-Tree',
    description:
      'Through the national Penny Pines program, the club raises funds to purchase seedlings for reforestation of America\'s national forests — a small but lasting investment that helps restore natural habitats, one tree at a time.',
    subsections: [],
  },
  {
    title: 'Education',
    description:
      'The club supports horticultural education in the broader community through plant sales at local libraries, educational programs, and partnerships with institutions that bring gardening knowledge to the public.',
    subsections: [
      {
        label: 'Abington Library Plant Sale',
        photos: [
          { url: imgs.abingtonLibrary, alt: 'Abington Library plant sale', portrait: true },
        ],
      },
    ],
  },
]

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
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 sm:h-80 flex items-end pb-12 overflow-hidden">
        <img
          src={imgs.img1}
          alt="Wall House herb garden"
          className="absolute inset-0 w-full h-full object-cover object-[50%_calc(50%+40px)]"
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
      <section className="bg-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gray-600 leading-relaxed text-lg max-w-3xl">
              The Old York Road Garden Club has been beautifying Jenkintown and Abington
              since 1935. Beyond our members' private gardens, we invest hundreds of volunteer
              hours each year in civic projects that serve and inspire the whole community.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Project sections */}
      {civicSections.map((section, si) => (
        <section
          key={section.title}
          className={`py-14 ${si % 2 === 0 ? 'bg-parchment' : 'bg-cream'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest mb-3">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
                {section.description}
              </p>
            </FadeIn>

            {section.subsections.length === 0 && (
              <FadeIn delay={80}>
                <p className="text-gray-400 text-sm italic">Photos coming soon.</p>
              </FadeIn>
            )}

            <div className="space-y-8">
              {section.subsections.map((sub, subi) => (
                <FadeIn key={subi} delay={subi * 80}>
                  <div>
                    {sub.label && (
                      <h3 className="font-serif text-base font-semibold text-sage mb-3 pb-1.5 border-b border-forest/15">
                        {sub.label}
                      </h3>
                    )}
                    <div className="flex flex-wrap gap-4">
                      {sub.photos.map((photo) => (
                        <div key={photo.url} className="overflow-hidden rounded-xl shadow-sm">
                          <img
                            src={photo.url}
                            alt={photo.alt}
                            className={`object-cover hover:scale-105 transition-transform duration-500 ${
                              photo.portrait ? 'w-64 aspect-[3/4]' : 'w-72 h-56'
                            }`}
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
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
