import { useInView } from '../hooks/useInView'
import { imgs } from '../images'
import oyrgcSeal from '../assets/oyrgc-seal.png'

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
    icon: '🌿',
    title: 'Conservation',
    desc: 'We champion the protection of native trees, plants, and birds, and encourage thoughtful civic planning to preserve our region\'s natural heritage.',
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
          src={imgs.img10}
          alt="Garden club members at a plant sale"
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
                  Est. 1935
                </p>
                <h2 className="font-serif text-4xl font-bold text-forest mb-6">
                  Nine Decades of Growing Together
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  The Old York Road Garden Club was founded in 1935 and federated with
                  District XI of the Garden Club Federation of Pennsylvania in 1937. For
                  over ninety years, our club has united passionate gardeners from
                  Jenkintown, Abington, and the surrounding communities.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Our mission is to promote interest in the art of gardening, to aid in
                  the protection of native trees, plants, and birds, and to encourage
                  civic planting. This mission shapes everything we do — from our monthly
                  educational programs to our hands-on civic beautification projects.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Monthly meetings are held on the second Thursday of each month at
                  11:30 AM ET at Grace Presbyterian Church, 444 Old York
                  Road, Jenkintown, PA 19046. Meetings are free and open to the public.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="relative">
                <img
                  src={imgs.img3}
                  alt="Seasonal garden display"
                  className="rounded-2xl shadow-lg w-full object-cover h-[480px]"
                />
                <div className="absolute -bottom-8 -left-8 bg-cream p-2.5 rounded-full shadow-lg">
                  <img
                    src={oyrgcSeal}
                    alt="Seal of the Old York Road Garden Club, 1935"
                    className="w-24 h-24 sm:w-28 sm:h-28"
                  />
                </div>
                <div className="absolute -top-5 -right-5 bg-gold text-white p-5 rounded-xl shadow-lg">
                  <p className="font-serif text-3xl font-bold">90+</p>
                  <p className="text-sm text-white/90 mt-0.5">Years Strong</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission pillars */}
      <section className="bg-parchment py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-3">
                What We Stand For
              </p>
              <h2 className="font-serif text-4xl font-bold text-forest">
                Our Mission
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

      {/* Membership */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <div>
                <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-4">
                  Join Us
                </p>
                <h2 className="font-serif text-3xl font-bold text-forest mb-6">
                  Membership
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  There is only one prerequisite for joining the Old York Road Garden
                  Club: enthusiasm for plants. Whether you are an expert horticulturalist
                  or a curious beginner, you are welcome here.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Monthly meetings bring together gardeners of all experience levels for
                  educational presentations, demonstrations, and lively conversation. We
                  also host garden tours, the annual Spring Fling, and civic projects
                  throughout the year.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Meetings are free and open to the public — attending is the best way
                  to get a feel for the club before joining.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div>
                <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-4">
                  Our Library
                </p>
                <h2 className="font-serif text-3xl font-bold text-forest mb-6">
                  Horticultural Library
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  The club maintains a lending library of books on gardening and floral
                  arrangement, available to members. The full catalog is listed on
                  LibraryThing for easy browsing.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Members are encouraged to contribute recommendations and to take
                  advantage of this curated collection built up over decades of
                  horticultural enthusiasm.
                </p>
              </div>
            </FadeIn>
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                {
                  name: 'Garden Club Federation of Pennsylvania',
                  desc: 'Federated with District XI since 1937, connecting us to garden clubs throughout Pennsylvania.',
                },
                {
                  name: 'National Garden Clubs, Inc.',
                  desc: 'Member of the national organization, linking us to a community of over 160,000 gardeners across the country.',
                },
                {
                  name: 'Pennsylvania Horticultural Society',
                  desc: 'Affiliated with PHS, supporting their mission to use horticulture to improve lives and communities.',
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
