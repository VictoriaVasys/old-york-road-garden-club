import { Link, useParams } from 'react-router-dom'
import { upcomingEvents2026_2027 } from '../data/upcomingEvents'
import { flowerShows } from '../data/flowerShows'

export default function FlowerShowDetail() {
  const { slug } = useParams()
  const meeting = upcomingEvents2026_2027.find((e) => e.flowerShowSlug === slug)
  const show = slug ? flowerShows[slug] : undefined

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

        {show ? (
          <div className="bg-white border border-parchment rounded-xl overflow-hidden">
            <div className="px-6 sm:px-8 py-5 border-b border-parchment bg-parchment/40">
              <p className="text-sm text-bark">
                Closing time for entries is {show.closingTime} ET. All exhibits must be staged and
                in place before judging begins.
              </p>
            </div>

            <div className="px-6 sm:px-8 py-6 border-b border-parchment">
              <h2 className="font-serif text-lg font-bold text-forest mb-4">
                Horticulture Division
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 leading-relaxed">
                {show.horticulture.map((c) => (
                  <li key={c.label}>
                    {c.label}
                    {c.subitems && (
                      <ul className="list-[lower-alpha] list-inside ml-5 mt-1 space-y-1 text-gray-600">
                        {c.subitems.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
              {show.horticultureTip && (
                <p className="mt-5 text-sm text-gray-500 leading-relaxed bg-parchment/40 rounded-lg px-4 py-3">
                  <span className="font-semibold text-bark">Tip: </span>
                  {show.horticultureTip}
                </p>
              )}
            </div>

            <div className="px-6 sm:px-8 py-6">
              <h2 className="font-serif text-lg font-bold text-forest mb-4">
                Design Division
              </h2>
              <ul className="space-y-4 text-sm text-gray-700 leading-relaxed">
                {show.design.map((c) => (
                  <li key={c.title}>
                    <span className="font-semibold text-forest uppercase">{c.title}</span> —{' '}
                    {c.description}
                  </li>
                ))}
              </ul>
              {show.designTips && show.designTips.length > 0 && (
                <div className="mt-5 text-sm text-gray-500 leading-relaxed bg-parchment/40 rounded-lg px-4 py-3 space-y-2">
                  <p className="font-semibold text-bark">Tips</p>
                  {show.designTips.map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white border border-parchment rounded-xl p-6 sm:p-8">
            <p className="text-gray-600 text-sm leading-relaxed">
              This month's entry classes haven't been published yet — check back closer to the
              meeting date, or see the current Yearbook for details.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
