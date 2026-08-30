export interface FlowerShowHorticultureClass {
  label: string
  subitems?: string[]
}

export interface FlowerShowDesignClass {
  title: string
  description: string
}

export interface FlowerShowDetails {
  /** Matches an UpcomingEvent's flowerShowSlug */
  slug: string
  date: string
  closingTime: string
  horticulture: FlowerShowHorticultureClass[]
  design: FlowerShowDesignClass[]
  horticultureTip?: string
  designTips?: string[]
}

/**
 * Monthly Standard Flower Show schedules for the 2026-2027 program year,
 * transcribed from the club's official Yearbook.
 */
export const flowerShows: Record<string, FlowerShowDetails> = {
  'sep-2026': {
    slug: 'sep-2026',
    date: 'Sep 10, 2026',
    closingTime: '11:00 a.m.',
    horticulture: [
      { label: 'Zinnia, 1 bloom', subitems: ['Small, under 3"', 'Large, over 3"'] },
      { label: 'Dahlia, 1 bloom', subitems: ['Large, 4" or more', 'Small, under 4"'] },
      { label: 'Coleus, 1 stem, no flower' },
      { label: 'Rose, 1 stem' },
      { label: 'Celosia (cockscomb), 1 stem' },
      { label: 'Tagetes (marigold)' },
      {
        label: 'Tomato, on small plate, supplied by club',
        subitems: ['Small (cherry, grape)', 'Large (slicing)'],
      },
      { label: 'Herbs, cut specimens, 3 or more kinds, 1 container, named on separate card' },
      { label: 'Any cut specimen not listed above' },
    ],
    design: [
      {
        title: 'End of Summer',
        description: 'Traditional Line Mass Design using common garden flowers.',
      },
      {
        title: 'Back to School',
        description: 'Include a possible lunchbox item with your flowers.',
      },
    ],
    horticultureTip:
      'For 3 or more kinds, each must be a different genus, e.g., sage, basil, parsley.',
    designTips: [
      'Flowers for any NGC design may be purchased.',
      'Class 1, Traditional Line Mass: create the line with stem(s) or placement of flowers, then add a few for the mass, keeping balance in mind.',
      'Class 2, Back to School: the lunchbox item could be a raw vegetable or a wrapped treat, such as a pretzel or crackers. Consider scale and total design.',
    ],
  },

  'oct-2026': {
    slug: 'oct-2026',
    date: 'Oct 8, 2026',
    closingTime: '11:00 a.m.',
    horticulture: [
      { label: 'Dahlia, 1 bloom' },
      {
        label: 'Chrysanthemum, 1 stem or spray',
        subitems: ['Hardy garden mum', 'Montauk Daisy ("shore daisy")'],
      },
      {
        label: 'Herbaceous perennial, other than mum, 1 stem (e.g., helianthus, solidago, rudbeckia)',
      },
      { label: 'Coleus, 1 stem, no flower' },
      { label: 'Heuchera, 1 stem, no flower' },
      { label: 'Tagetes (marigold), 1 stem' },
      { label: 'Rose, 1 stem or spray' },
      {
        label: 'Fruited or berried branch',
        subitems: ['Large (e.g., crabapple, apple, pear)', 'Small (e.g., beautyberry, nandina)'],
      },
      { label: 'Orchid' },
      { label: 'Houseplant, flowering, other than orchid' },
      { label: 'Houseplant, foliage' },
      { label: 'Any cut specimen not listed above' },
    ],
    design: [
      {
        title: 'Branching Out',
        description: 'Creative Design incorporating a branch no longer than 18".',
      },
      {
        title: "Spooky Spider's Dance",
        description: "Multi-Rhythmic Design, designer's choice of plant material.",
      },
    ],
    horticultureTip:
      'The Montauk Daisy, so popular at the Jersey shore, belongs in the chrysanthemum class despite its common name — its botanical name is nipponanthemum. Hardy garden mum is a perennial; not all mums sold in this area are hardy in our climate.',
    designTips: [
      'Class 1: in a Creative Design, plant material may be used in a non-realistic way, such as an upside-down leaf, and the container may dominate — more freedom than with Traditional Design.',
      'Class 2: a multi-rhythmic design has emphasis on 2 or more separate and distinct rhythms, created by repetition of color, form, or texture.',
    ],
  },

  'nov-2026': {
    slug: 'nov-2026',
    date: 'Nov 12, 2026',
    closingTime: '11:00 a.m.',
    horticulture: [
      { label: 'Chrysanthemum, any variety, 1 stem' },
      {
        label: 'Fruited or berried branch, other than ilex',
        subitems: ['Large (e.g., crabapple, apple, pear)', 'Small (e.g., beautyberry, nandina)'],
      },
      {
        label: 'Broad-leaved evergreen, 1 branch, under 30"',
        subitems: ['Aucuba', 'Pieris', 'Other (azalea, buxus, etc.)'],
      },
      {
        label: 'Needled evergreen, 1 branch',
        subitems: ['Arborvitae', 'Juniper', 'Other'],
      },
      { label: 'Ilex (holly), 1 branch, with berries' },
      { label: 'Orchid' },
      { label: 'Houseplant, flowering, other than orchid' },
      { label: 'Houseplant, foliage, other than succulent' },
      { label: 'Potted cactus, 1 kind' },
      { label: 'Potted succulent, other than cactus, 1 kind' },
      { label: 'Any cut specimen not listed above' },
    ],
    design: [
      {
        title: 'Thankful for a Clear Day',
        description: 'Petite design, no more than 10" in each direction, suitable for a Thanksgiving table.',
      },
      {
        title: 'Catch as Catch Can',
        description: 'Arrangement using a container other than a typical vase.',
      },
    ],
    horticultureTip:
      'How to tell if your plant is a cactus: a cactus has areoles from which spines, branches, and/or flowers grow.',
    designTips: [
      'Class 1: a petite design must measure no more than 10 inches in any direction (vertical, height, or diagonal). Components should be in scale with the small size — avoid large blooms.',
      'Class 2: the idea of the title is to use whatever you can find — examples include a mug, a basket, a plastic zip-lock bag to hold your water source, or an odd plastic container.',
    ],
  },

  'feb-2027': {
    slug: 'feb-2027',
    date: 'Feb 11, 2027',
    closingTime: '11:00 a.m.',
    horticulture: [
      { label: 'Salix caprea (pussy willow), 1 branch' },
      { label: 'Any small bulbs, 3 stems, same variety, one container' },
      { label: 'Forced flowering branch, under 30"' },
      {
        label: 'Potted succulent (includes cacti)',
        subitems: ['Container with 1 plant', 'Container with 2 or more plants'],
      },
      { label: 'Orchid' },
      { label: 'Houseplant, flowering, other than orchid' },
      { label: 'Houseplant, foliage, other than succulent' },
      { label: 'Helleborus, 1 stem, 1 or more flowers, attached leaf/leaves acceptable' },
      {
        label: 'Needled evergreen, 1 branch',
        subitems: ['With cones (juniper berries = cones)', 'Without cones'],
      },
      { label: 'Any cut specimen not listed above' },
    ],
    design: [
      {
        title: 'Snow Drift',
        description: 'Traditional line design using all white flowers and green foliage; sparkly material may be used.',
      },
      {
        title: 'Valentine',
        description: 'A variety of red and pink flowers in a container that does not compete with the flowers.',
      },
      {
        title: 'Trash to Treasure',
        description:
          "Title and topic announced by GCFP — look for information in the Tattler. Winning entry will be entered at the District XI meeting in March.",
      },
    ],
    horticultureTip:
      'The small bulbs must be the same genus — that is, all snowdrops, all crocuses (may be different colors or striped), or any other single small bulb.',
    designTips: [
      'Class 1: the traditional line design asks for a fairly simple arrangement — horizontal, vertical, or diagonal. Because the flowers will be white, a white container — usually not a good idea because it tends to dominate — would be fine for this class.',
      'Class 2: let the flowers star in your design rather than an overly decorative vessel.',
      'Class 3: the Trash to Treasure feature was begun by NGC with the idea of taking items we might recycle or throw away and turning them into something beautiful.',
    ],
  },

  'mar-2027': {
    slug: 'mar-2027',
    date: 'Mar 11, 2027',
    closingTime: '11:00 a.m.',
    horticulture: [
      { label: 'Narcissus (daffodil), any variety, 1 stem' },
      { label: 'Helleborus, 1 stem' },
      { label: 'Orchid' },
      { label: 'Flowering houseplant, other than Orchid or Gesneriad classes' },
      {
        label: 'Foliage houseplant',
        subitems: ['Container 6" or under', 'Container over 6", plant must fit on table'],
      },
      {
        label: 'Gesneriad',
        subitems: ['Saintpaulia (African violet), in flower', 'Any other (e.g., gloxinia, achimenes)'],
      },
      {
        label: 'Small bulbs, 3 stems, same variety, one container',
        subitems: ['Galanthus (snowdrops)', 'Crocus', 'Any other'],
      },
      { label: 'Heuchera (coral bells), 1 stem, no flower' },
      { label: 'Any bulb, rhizome, or perennial not named above, 1 stem' },
      {
        label: 'Flowering branch in bloom (not forced)',
        subitems: ['Forsythia', 'Any other'],
      },
      { label: 'Salix caprea (pussy willow), 1 branch' },
      { label: 'Any cut specimen not listed above' },
    ],
    design: [
      {
        title: 'Spring Has Sprung',
        description: 'Novice Class (for those who have never won a blue ribbon in Design) — Traditional Mass Design.',
      },
      {
        title: 'At the End of the Rainbow',
        description: 'Monochromatic design.',
      },
    ],
    horticultureTip: 'African Violet must have a single crown.',
    designTips: [
      'Class 1: a Traditional Mass Design may have many flowers, but they must be an ensemble, not separate groupings. Consider point of dominance and rhythm of line and/or color.',
      'Class 2: for a monochromatic design, make your color choice and use varied shades and hues. Use a minimum of greenery if needed, and provide contrast with varied textures and shapes.',
    ],
  },

  'apr-2027': {
    slug: 'apr-2027',
    date: 'Apr 8, 2027',
    closingTime: '11:00 a.m.',
    horticulture: [
      { label: 'Narcissus, trumpet (trumpet as long as or longer than petal), 1 bloom' },
      { label: 'Narcissus, large cup (cup more than 1/3 but less than the length of petal), 1 bloom' },
      { label: 'Narcissus, 1 bloom, any other variety' },
      { label: 'Hyacinth, 1 spike' },
      { label: 'Tulipa, 1 bloom, with or without foliage, depending on variety' },
      {
        label: 'Flowering tree or shrub from your property, 1 branch in bloom',
        subitems: ['Azalea', 'Pieris', 'Any other'],
      },
      { label: 'Any bulb, rhizome, or perennial not named above, 1 bloom' },
      { label: 'Orchid' },
      { label: 'Houseplant, flowering, other than orchid' },
      { label: 'Houseplant, foliage' },
      { label: 'Any bloom not listed above' },
    ],
    design: [
      {
        title: "Here's Looking at You",
        description: 'A Reflective Design — no mirrors allowed.',
      },
      {
        title: 'Side Dish',
        description: 'Creative Mass Design using vegetables.',
      },
    ],
    horticultureTip:
      'Class 3 could include tete-a-tete, jonquils, small cup, bi-color, or reflexed varieties.',
    designTips: [
      'Class 1: for a reflective design you may use reflective fabric, foil, and/or shiny plant material, including smooth-skinned fruit such as grapes.',
      'Class 2: creative means just that — you have more freedom than with Traditional. Surprise us with your choice of (uncut) vegetables.',
    ],
  },

  'jun-2027': {
    slug: 'jun-2027',
    date: 'Jun 10, 2027',
    closingTime: '11:00 a.m.',
    horticulture: [
      { label: 'Rose, 1 stem or spray' },
      {
        label: 'Hydrangea, flower stem with 2 leaves',
        subitems: ['Macrophylla (includes mophead and lacecap)', 'Paniculata', 'Oakleaf'],
      },
      { label: 'Aquilegia (columbine), 1 stem' },
      { label: 'Helleborus, 1 or more flowers, attached leaf/leaves not required' },
      { label: 'Astilbe, 1 stem' },
      {
        label: 'Flowering shrub or tree, 1 branch, 12"-30"',
        subitems: ['Rhododendron', 'Azalea', 'Any other'],
      },
      { label: 'Lily (lilium), 1 stem' },
      { label: 'Iris, 1 stalk', subitems: ['German bearded', 'Other'] },
      { label: 'Peony, 1 bloom' },
      { label: 'Hosta, 1 leaf' },
      { label: 'Orchid' },
      { label: 'Houseplant, flowering, other than orchid' },
      { label: 'Houseplant, foliage' },
      {
        label: 'Best of my flower garden, 3 or more kinds, in bloom, one container, named on separate card',
      },
      { label: 'Any cut specimen not listed above' },
    ],
    design: [
      {
        title: 'On the Way to Cape May',
        description: 'Parallel Design featuring yellow and gold flowers.',
      },
      {
        title: 'Raise the Flagpole',
        description: 'Traditional Vertical Line design.',
      },
    ],
    horticultureTip:
      "Again, the word 'kind' means each must be a different genus, e.g., rose, lily, peony.",
    designTips: [
      'Class 1: a parallel design is one in which three or more groupings of plant material and other components are placed in a strong parallel manner in a single base or container (such as a long, slender serving dish), with open space between groupings. Search NGC Parallel Designs online — the images are quite helpful.',
      'Class 2: the line may be actual, or implied by the arrangement of plant material. The container should seem part of the design.',
    ],
  },
}
