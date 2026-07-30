import { useInView } from '../hooks/useInView'

interface Officer {
  name: string
  title: string
  bio: string
  seed: string
}

const officers: Officer[] = [
  {
    name: 'Patricia Lawson',
    title: 'President',
    bio: 'A master gardener and landscape designer with 30 years of experience. Patricia has led our club for three consecutive terms and spearheaded the Old York Road Corridor Beautification project.',
    seed: 'woman1',
  },
  {
    name: 'Robert Whitmore',
    title: 'Vice President',
    bio: 'A retired Penn State extension agent specializing in integrated pest management and organic horticulture. Robert chairs the Civic Projects Committee and coordinates our volunteer workdays.',
    seed: 'man1',
  },
  {
    name: 'Susan Chen',
    title: 'Recording Secretary',
    bio: 'Susan joined the club in 2015 and has served as Recording Secretary since 2020. She also leads the School Garden Partnership and teaches seed-starting workshops each spring.',
    seed: 'woman2',
  },
  {
    name: 'Margaret Ellison',
    title: 'Corresponding Secretary',
    bio: 'Margaret manages all club communications and our newsletter, "The Garden Path," published six times per year. Her specialty is ornamental shrubs and woody plants.',
    seed: 'woman3',
  },
  {
    name: 'Harold Reeves',
    title: 'Treasurer',
    bio: 'A retired CPA and passionate vegetable gardener, Harold has managed club finances since 2018. He coordinates our grant applications and annual fundraising plant sale.',
    seed: 'man2',
  },
]

const pillars = [
  {
    icon: '🌱',
    title: 'Horticulture Education',
    desc: 'Monthly programs, workshops, and study groups connect our members with expert knowledge in all areas of gardening — from soil science to floral design.',
  },
  {
    icon: '🏛️',
    title: 'Civic Beautification',
    desc: 'We invest in our shared public spaces, transforming streetscapes, parks, and school grounds into places of beauty and ecological value.',
  },
  {
    icon: '🤝',
    title: 'Community Building',
    desc: 'Garden club membership means friendship. Our social events, garden tours, and shared projects forge lasting bonds between neighbors.',
  },
  {
    icon: '🦋',
    title: 'Conservation',
    desc: 'We champion native plantings, pollinator habitats, and sustainable practices — protecting the natural heritage of our region for future generations.',
  },
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

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 sm:h-80 flex items-end pb-12 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=1600&auto=format&fit=crop"
          alt="Garden club members at a meeting"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/55 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-mint text-sm font-semibold tracking-widest uppercase mb-2">
            Our Story
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            About the Club
          </h1>
        </div>
      </section>

      {/* History & Mission */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-4">
                  Est. 1952
                </p>
                <h2 className="font-serif text-4xl font-bold text-forest mb-6">
                  Seventy-Plus Years of Growing Together
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  The Old York Road Garden Club was founded in the spring of 1952 by a small
                  group of twelve neighbors who gathered in Eleanor Hartwell's Jenkintown
                  garden. United by their love of plants and concern for their community, they
                  established a club dedicated to horticultural education and civic
                  beautification along the Old York Road corridor.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Over seven decades, our membership has grown to over 90 active members
                  from Jenkintown, Abington, Glenside, and surrounding communities. What
                  began as informal garden visits has expanded into a full calendar of
                  educational programs, garden tours, workshops, and civic projects that
                  touch every corner of our borough.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We are proud members of the Pennsylvania Horticultural Society and maintain
                  close ties with the Federated Garden Clubs of Pennsylvania. Our members have
                  earned numerous awards for horticultural achievement and civic beautification,
                  reflecting the talent and dedication that have always defined our club.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="relative">
                <img
                  src="https://picsum.photos/seed/clubhistory/700/800"
                  alt="Historic photo of garden club members"
                  className="rounded-2xl shadow-lg w-full object-cover h-[480px]"
                />
                <div className="absolute -bottom-5 -left-5 bg-forest text-white p-5 rounded-xl shadow-lg">
                  <p className="font-serif text-3xl font-bold text-mint">90+</p>
                  <p className="text-sm text-white/80 mt-0.5">Active Members</p>
                </div>
                <div className="absolute -top-5 -right-5 bg-gold text-white p-5 rounded-xl shadow-lg">
                  <p className="font-serif text-3xl font-bold">73</p>
                  <p className="text-sm text-white/90 mt-0.5">Years Strong</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values / pillars */}
      <section className="bg-parchment py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-3">
                What We Stand For
              </p>
              <h2 className="font-serif text-4xl font-bold text-forest">
                Our Pillars
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 100}>
                <div className="bg-white rounded-xl p-7 shadow-sm border border-parchment h-full">
                  <div className="text-3xl mb-4">{p.icon}</div>
                  <h3 className="font-serif text-lg font-bold text-forest mb-3">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-3">
                2026 Board of Officers
              </p>
              <h2 className="font-serif text-4xl font-bold text-forest">
                Our Leadership
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {officers.map((officer, i) => (
              <FadeIn key={officer.name} delay={i * 80}>
                <div className="text-center group">
                  <div className="relative mx-auto w-32 h-32 mb-5">
                    <img
                      src={`https://picsum.photos/seed/${officer.seed}/200/200`}
                      alt={`Portrait of ${officer.name}`}
                      className="w-full h-full rounded-full object-cover shadow-md border-4 border-white ring-2 ring-parchment group-hover:ring-mint transition-all"
                    />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-forest">
                    {officer.name}
                  </h3>
                  <p className="text-sage text-sm font-semibold mb-3">{officer.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                    {officer.bio}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="bg-forest py-16">
        <FadeIn>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl font-bold text-white mb-8">
              Our Affiliations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {[
                {
                  name: 'Pennsylvania Horticultural Society',
                  desc: "Proud institutional member since 1956, supporting PHS's mission to use horticulture to improve lives and communities.",
                },
                {
                  name: 'Federated Garden Clubs of Pennsylvania',
                  desc: 'Active member of the statewide federation, connecting us to hundreds of garden clubs across Pennsylvania.',
                },
              ].map((aff) => (
                <div key={aff.name} className="bg-white/10 rounded-xl p-6 text-left border border-white/10">
                  <h3 className="font-serif text-base font-bold text-mint mb-2">
                    {aff.name}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">{aff.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
