import { Link, useParams } from 'react-router-dom'
import { upcomingEvents2026_2027 } from '../data/upcomingEvents'

const sampleHorticulturalClasses = [
  'Dahlia, 1 bloom, large, 4" and over',
  'Dahlia, small, under 4"',
  'Chrysanthemum, 1 stem',
  'Herbaceous perennial, other than chrysanthemum (e.g., helianthus, solidago, rudbeckia)',
  'Heuchera, 1 stem, no flower',
  'Tagetes (marigold), 3 stems, same variety, 1 container',
  'Rose, 1 stem or spray, floribunda, polyanthus or shrub',
  'Coleus, 1 stem, no flower',
  'Fruited or berried branch — a. large (e.g., crabapple, apple, pear); b. small (e.g., callicarpa (beautyberry), nandina)',
  'Orchid',
  'Houseplant, flowering, other than orchid',
  'Houseplant, foliage',
  'Any bloom not listed above (for judging credit)',
]

const sampleDesignClasses = [
  {
    name: "MUM'S THE WORD",
    desc: 'Traditional mass design using chrysanthemums.',
  },
  {
    name: 'CLOSE ENCOUNTERS OF THE THIRD KIND',
    desc: 'Parallel design, using 3 groupings of plant material in a strong parallel manner in one container. Examples online.',
  },
]

export default function FlowerShowDetail() {
  const { slug } = useParams()
  const meeting = upcomingEvents2026_2027.find((e) => e.flowerShowSlug === slug)

  return (
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

        <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-2">
          Standard Flower Show
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-1">
          {meeting ? meeting.title : 'Standard Flower Show'}
        </h1>
        {meeting && <p className="text-gray-500 mb-8">{meeting.date}</p>}

        <div className="bg-white border border-parchment rounded-xl p-6 sm:p-8 mb-8">
          <p className="text-gray-600 text-sm leading-relaxed">
            This month's entry classes haven't been finalized yet — we're waiting on the current
            yearbook to be published. In the meantime, here's a sample from a past Standard Flower
            Show so you can see the kind of classes to expect. Check back closer to the meeting
            date for this month's exact classes.
          </p>
        </div>

        <div className="bg-white border border-parchment rounded-xl overflow-hidden">
          <div className="px-6 sm:px-8 py-5 border-b border-parchment bg-parchment/40">
            <p className="text-sm text-bark">
              Sample show — closing time for entries is 11:00am.
            </p>
          </div>

          <div className="px-6 sm:px-8 py-6 border-b border-parchment">
            <h2 className="font-serif text-lg font-bold text-forest mb-4">
              Horticultural Division
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 leading-relaxed">
              {sampleHorticulturalClasses.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ol>
          </div>

          <div className="px-6 sm:px-8 py-6">
            <h2 className="font-serif text-lg font-bold text-forest mb-4">
              Design Division
            </h2>
            <ul className="space-y-4 text-sm text-gray-700 leading-relaxed">
              {sampleDesignClasses.map((c) => (
                <li key={c.name}>
                  <span className="font-semibold text-forest">{c.name}</span> — {c.desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
