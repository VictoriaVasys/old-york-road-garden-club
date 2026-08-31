import { Link } from 'react-router-dom'
import flowerShowBanner from '../assets/flower-show-banner.jpg'

const horticultureRules = [
  'All exhibits must be grown and prepared by the exhibitor.',
  'All house plants must have been in the possession of the exhibitor at least three months, and may be exhibited only once a club year per class.',
  'Exhibitor may make more than one entry per class if each entry is a different variety, cultivar, type, or color.',
  'Only foliage that is growing on the stem of the flower exhibited is permitted.',
  'All collections must contain at least 3 kinds or more.',
  'All Horticulture exhibits should be labeled with the correct botanical name, if at all possible.',
  'Specimen African Violet plants should have a single crown.',
  'Pots containing house plants should be clean and free of insects.',
  'All specimens should be properly hardened for maximum freshness during the show.',
  'All cut branches should be 12" to 30" in length unless otherwise specified.',
  'Containers for exhibiting Horticulture specimens must be translucent. No foliage is permitted below the water line.',
  'The Horticulture Committee reserves the right to sub-divide classes where warranted.',
  'Members are urged to take home entry cards to be filled in before arriving at the meeting.',
  'The Educational Class is "Any cut specimen not listed above," so entries can earn more points.',
]

const horticulturalTerms = [
  { term: 'Bloom', def: 'A solitary or composite flower terminating a stem.' },
  { term: 'Branch', def: 'A subdivision of the stem or axis of a tree, shrub, or other plant.' },
  {
    term: 'Kind',
    def: 'Used in place of genus, as in different kinds of flowers such as gladiolus, rose, snapdragon, or tulip.',
  },
  {
    term: 'Spike',
    def: 'A flower structure with flowers stemless or nearly so on an elongated stalk, such as gladiolus.',
  },
  { term: 'Stem', def: 'Any main or lateral axis of a plant which develops from a bud.' },
  {
    term: 'Stalk',
    def: 'A stiff stem which may or may not branch, with one or more flowers and buds, such as a gladiolus.',
  },
  {
    term: 'Truss',
    def: 'General term for a compact cluster of flowers at the top of a stem, e.g., rhododendron.',
  },
  { term: 'Variety', def: 'Flowers of the same genus which are of a different color, size, or cultivar.' },
]

const designRules = [
  'All arrangements must be placed by 11:00 AM, and only one entry is allowed in each class.',
  'The words arrangement, composition, and design are synonymous. Interpretation of the title is a requirement — landscapes or scenes are not permitted in the Design Division.',
  'Some plant material must be used in every exhibit; no artificial flowers, foliage, fruit, or vegetables are permitted, except at Christmas.',
  'Coloring of fresh plant material is not permitted. It may be clipped, stripped, bent, or otherwise manipulated.',
]

const designPermitted = [
  'Accessories, featured objects, stand, and mat.',
  'Objects which add interest when tastefully used — religious symbols, flags, feathers, nests, coral, sponges, shells, bones, antlers, horns, and starfish.',
  'Container-grown plants growing in soil, as part of pot-et-fleurs and vignette classes, etc., where appropriate.',
  'Living plants with roots attached — leek, bromeliad, moss.',
  'Treated dried plant material.',
  'Plants on the state conservation list, grown by the exhibitor or obtained in a legal manner and so marked.',
]

const endangeredSpecies = [
  'All Lycopodium (Lycopodium genus)',
  'All native Orchids (Orchidaceae family)',
  'All Trillium (Trillium genus)',
  'Trailing Arbutus (Epigaea repens)',
  'Pitcher Plant (Sarracenia purpurea)',
]

const designPrinciples = [
  {
    name: 'Balance',
    desc: 'Actual and visual, symmetrical, asymmetrical, dynamic — weight of color and components.',
  },
  {
    name: 'Contrast',
    desc: 'Placement of unlike characteristics of a single element to emphasize their differences, such as texture, shape, or color.',
  },
  {
    name: 'Dominance',
    desc: 'More of one element than another — what is the subject, or main point, of your design?',
  },
  {
    name: 'Proportion',
    desc: 'Consider the amounts of this or that color, texture, and shape.',
  },
  {
    name: 'Rhythm',
    desc: 'A suggestion of movement through gradation, radiation, or repetition — a dominant visual path through the design.',
  },
  {
    name: 'Scale',
    desc: 'Consider the size of one object to another, and the size of components compared to the container.',
  },
]

export default function FlowerShowGuide() {
  return (
    <>
      {/* Page hero */}
      <section className="relative h-72 sm:h-80 flex items-end pb-12 overflow-hidden">
        <img
          src={flowerShowBanner}
          alt="Vase of tulips"
          className="absolute inset-0 w-full h-full object-cover object-[center_10%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-mint text-sm font-semibold tracking-widest uppercase mb-2">
            Reference
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Flower Show Guide
          </h1>
        </div>
      </section>

      <section className="bg-cream py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/events"
          className="inline-flex items-center gap-1.5 text-sage hover:text-forest text-sm font-semibold mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Events
        </Link>

        <p className="text-gray-600 leading-relaxed mb-10">
          These are the rules, terms, and judging criteria that apply at every monthly Flower
          Show, from the club's official Yearbook. Each month's meeting page lists that month's
          specific Horticulture and Design classes — this page covers the rules and scoring that
          stay the same all year.
        </p>


          <div className="bg-white border border-parchment rounded-xl p-6 sm:p-8 mb-8">
            <h2 className="font-serif text-lg font-bold text-forest mb-3">General Rules</h2>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <p>
                <span className="font-semibold text-bark">Time — </span>
                Entries in both the Horticulture and Design Division classes must be staged by
                11:00 AM ET. Judging takes place from 11:00 to 11:30 AM. All exhibits should be
                left in place until the meeting has adjourned.
              </p>
              <p>
                <span className="font-semibold text-bark">Responsibility — </span>
                While the committee will exercise due caution in safeguarding exhibits, it cannot
                assume responsibility for damage or loss.
              </p>
            </div>
          </div>
        

        
          <div className="bg-white border border-parchment rounded-xl p-6 sm:p-8 mb-8">
            <h2 className="font-serif text-lg font-bold text-forest mb-4">
              Awards &amp; Point Scoring
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Applies to both Horticulture and Design Division classes at every monthly Flower
              Show.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { place: 'First', pts: '5' },
                { place: 'Second', pts: '4' },
                { place: 'Third', pts: '3' },
                { place: 'Honorable Mention', pts: '2' },
              ].map((a) => (
                <div
                  key={a.place}
                  className="bg-parchment/40 rounded-lg px-3 py-4 text-center"
                >
                  <div className="font-serif text-2xl font-bold text-forest">{a.pts}</div>
                  <div className="text-xs text-bark font-semibold mt-1">{a.place}</div>
                </div>
              ))}
            </div>
          </div>
        

        
          <div className="bg-white border border-parchment rounded-xl p-6 sm:p-8 mb-8">
            <h2 className="font-serif text-lg font-bold text-forest mb-4">
              Horticulture Division Rules
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 leading-relaxed">
              {horticultureRules.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ol>
          </div>
        

        
          <div className="bg-white border border-parchment rounded-xl p-6 sm:p-8 mb-8">
            <h2 className="font-serif text-lg font-bold text-forest mb-4">
              Horticultural Terms
            </h2>
            <dl className="space-y-3 text-sm">
              {horticulturalTerms.map((t) => (
                <div key={t.term} className="flex flex-col sm:flex-row sm:gap-3">
                  <dt className="font-semibold text-forest sm:w-20 flex-shrink-0">{t.term}</dt>
                  <dd className="text-gray-600 leading-relaxed">{t.def}</dd>
                </div>
              ))}
            </dl>
          </div>
        

        
          <div className="bg-white border border-parchment rounded-xl p-6 sm:p-8 mb-8">
            <h2 className="font-serif text-lg font-bold text-forest mb-4">
              Design Division Rules
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 leading-relaxed mb-5">
              {designRules.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ol>
            <p className="text-sm text-gray-700 font-semibold mb-2">
              The following are permitted in all classes unless prohibited by that month's
              schedule:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 leading-relaxed mb-5">
              {designPermitted.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-700 font-semibold mb-2">
              Endangered species of native plants may not be used in Design classes:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-600 leading-relaxed">
              {endangeredSpecies.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        

        
          <div className="bg-white border border-parchment rounded-xl p-6 sm:p-8">
            <h2 className="font-serif text-lg font-bold text-forest mb-2">Basics of Design</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              All design types conform to the Elements and Principles of Design, as defined in
              the National Garden Clubs Handbook for Flower Shows. Here's what judges look for:
            </p>
            <ul className="space-y-4 text-sm text-gray-700 leading-relaxed mb-6">
              {designPrinciples.map((p) => (
                <li key={p.name}>
                  <span className="font-semibold text-forest">{p.name}: </span>
                  {p.desc}
                </li>
              ))}
            </ul>
            <div className="bg-parchment/40 rounded-lg px-4 py-3 text-sm text-gray-600 leading-relaxed">
              <span className="font-semibold text-bark">Traditional vs. Creative — </span>
              Traditional uses familiar and naturalistic shapes and components. Creative is
              unique and un-naturalistic — use your imagination. Look for short design
              demonstrations at our regular meetings.
            </div>
          </div>
      </div>
      </section>
    </>
  )
}
