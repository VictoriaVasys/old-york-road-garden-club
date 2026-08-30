export interface UpcomingEvent {
  date: string
  title: string
  type: 'Workshop' | 'Speaker' | 'Program' | 'Social'
  presenter?: string
  description?: string
  location?: string
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

export function parseEventDate(dateStr: string): Date {
  return new Date(dateStr)
}

/** Returns the soonest event that hasn't happened yet, or undefined if none remain. */
export function getNextUpcomingEvent(
  events: UpcomingEvent[],
  referenceDate: Date = new Date(),
): UpcomingEvent | undefined {
  const today = new Date(
    referenceDate.getFullYear(),
    referenceDate.getMonth(),
    referenceDate.getDate(),
  )
  return events
    .filter((e) => parseEventDate(e.date) >= today)
    .sort((a, b) => parseEventDate(a.date).getTime() - parseEventDate(b.date).getTime())[0]
}
