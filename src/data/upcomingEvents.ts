export interface UpcomingEvent {
  date: string
  title: string
  type: 'Workshop' | 'Speaker' | 'Program' | 'Social'
  presenter?: string
  description?: string
  location?: string
  /** Overrides the default 11:30 AM ET club meeting time, for events on their own schedule. */
  time?: string
  /** Slug for a linked Standard Flower Show detail page, when this meeting includes one. */
  flowerShowSlug?: string
}

export const upcomingEvents2026_2027: UpcomingEvent[] = [
  {
    date: 'Sep 10, 2026',
    title: 'Flower Pounding',
    type: 'Workshop',
    presenter: 'Marda Craig, Presenter',
    flowerShowSlug: 'sep-2026',
  },
  {
    date: 'Sep 27, 2026',
    title: 'Jenkintown Festival of the Arts',
    type: 'Social',
    time: '1:00 – 6:00 PM',
    location: 'Town Square, Jenkintown',
  },
  {
    date: 'Oct 8, 2026',
    title: '"Milkweeds of PA"',
    type: 'Speaker',
    presenter: "Santino Lauricella, Education Manager, Bowman's Hill Preserve",
    description: 'PowerPoint presentation',
    flowerShowSlug: 'oct-2026',
  },
  {
    date: 'Nov 12, 2026',
    title: 'Lighted Holiday Craft',
    type: 'Workshop',
    presenter: 'Donna Steck, Presenter',
    flowerShowSlug: 'nov-2026',
  },
  {
    date: 'Dec 10, 2026',
    title: 'Holiday Luncheon & Tea',
    type: 'Program',
    presenter: 'Brenda Sullivan, Horticulturist',
    description: 'Live demonstration of several floral arrangements',
  },
  {
    date: 'Feb 11, 2027',
    title: '"How to Enter All of the Competitive Classes in the Phila. Flower Show"',
    type: 'Program',
    presenter:
      'Sarah Makin, Chair, Competitive Classes Committee, with the Phila. Flower Show Ambassador Program',
    description: 'PowerPoint program',
    flowerShowSlug: 'feb-2027',
  },
  {
    date: 'Mar 11, 2027',
    title: '"How to Make Your Home Safe for Birds"',
    type: 'Program',
    presenter: 'Leigh Altadonna, President, PA Audubon Council',
    description: 'PowerPoint presentation',
    flowerShowSlug: 'mar-2027',
  },
  {
    date: 'Apr 8, 2027',
    title: '"The World of Medicinal Herbs"',
    type: 'Program',
    presenter: 'Cheryl Wilks, member, Pennypack Farms Medicinal Study Group',
    description: 'PowerPoint program',
    flowerShowSlug: 'apr-2027',
  },
  {
    date: 'May 13, 2027',
    title: 'Spring Fling',
    type: 'Social',
    location: 'Sandy Run Country Club',
  },
  {
    date: 'Jun 10, 2027',
    title: 'Celebrating Our 90th Anniversary',
    type: 'Program',
    presenter: 'Barbara Leiby, Floral Designer and Workshop Instructor',
    description:
      'Live demonstration of several floral arrangements, adhering to the strict rules of GCFP',
    flowerShowSlug: 'jun-2027',
  },
]

export const DEFAULT_EVENT_TIME = '11:30 AM ET'

/** How long after an event's start time it stays featured before rolling over to the next one. */
const FEATURED_EVENT_GRACE_HOURS = 2

export function parseEventDate(dateStr: string): Date {
  return new Date(dateStr)
}

/**
 * Extracts the first time of day mentioned in a string like "11:30 AM ET" or
 * "1:00 – 6:00 PM" (borrowing the AM/PM from a later match when the first
 * number in a range doesn't carry its own, e.g. the "1:00" above).
 */
function parseTimeOfDay(timeStr: string): { hours: number; minutes: number } | null {
  const matches = [...timeStr.matchAll(/(\d{1,2}):(\d{2})\s*(AM|PM)?/gi)]
  if (matches.length === 0) return null

  const meridiem = matches.find((m) => m[3])?.[3]?.toUpperCase()
  const [, hourStr, minuteStr] = matches[0]
  let hours = parseInt(hourStr, 10)
  const minutes = parseInt(minuteStr, 10)
  if (meridiem === 'PM' && hours !== 12) hours += 12
  if (meridiem === 'AM' && hours === 12) hours = 0

  return { hours, minutes }
}

/** The moment an event stops being "featured" — its start time plus a grace period. */
function getFeaturedCutoff(event: UpcomingEvent): Date {
  const cutoff = parseEventDate(event.date)
  const startTime = parseTimeOfDay(event.time ?? DEFAULT_EVENT_TIME)
  if (startTime) {
    cutoff.setHours(startTime.hours, startTime.minutes, 0, 0)
  }
  cutoff.setHours(cutoff.getHours() + FEATURED_EVENT_GRACE_HOURS)
  return cutoff
}

/** Returns the soonest event that hasn't ended (plus a grace period) yet, or undefined if none remain. */
export function getNextUpcomingEvent(
  events: UpcomingEvent[],
  referenceDate: Date = new Date(),
): UpcomingEvent | undefined {
  return events
    .filter((e) => getFeaturedCutoff(e) > referenceDate)
    .sort((a, b) => parseEventDate(a.date).getTime() - parseEventDate(b.date).getTime())[0]
}
