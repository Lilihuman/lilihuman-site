/**
 * Landing-page copy for each free download.
 *
 * Every entry gets its own page at /free/<slug> — a shareable URL built for
 * social and Pinterest, with its own Open Graph preview. The download itself,
 * the image and the file all come from `data/products.ts` via `productId`;
 * this file only carries the landing-page words.
 *
 * To add a freebie: add the free product to products.ts, then add an entry
 * here. The route and its metadata are generated automatically.
 */

export interface FreebieLanding {
  /** URL segment: /free/<slug>. Keep stable — these get pinned and shared. */
  slug: string;
  /** Product id in data/products.ts. Supplies the file, image and name. */
  productId: string;
  eyebrow: string;
  /** Page <h1>. The words in `emphasis` render in italic sage. */
  headline: string;
  emphasis: string;
  subhead: string;
  benefits: { title: string; body: string }[];
  /** Search + social description. Keep under ~155 chars. */
  metaDescription: string;
  /** Optional onward link to a paid product, only where it genuinely fits. */
  upsell?: { heading: string; body: string; href: string; label: string };
}

export const freebieLandings: FreebieLanding[] = [
  {
    slug: 'memory-keeping',
    productId: 'free-memory-keeping',
    eyebrow: 'A free gift for busy moms',
    headline: 'Everyday Moments,',
    emphasis: 'Everlasting Memories',
    subhead:
      'Turn ordinary days into stories your kids will treasure — a simple, no-pressure memory-keeping guide. No perfect scrapbooks required.',
    benefits: [
      {
        title: 'The Memory-Keeper’s Mindset',
        body: 'Three simple shifts that make memory-keeping feel doable — create moments, keep it real, and start today.',
      },
      {
        title: '10 Everyday Milestones Worth a Story',
        body: 'A printable checklist of little victories your child will love seeing themselves in.',
      },
      {
        title: 'Your 5-Minute Weekly Ritual',
        body: 'One small moment a week. Over a year, that’s 52 tiny stories — plus a fill-in keepsake page to start tonight.',
      },
    ],
    metaDescription:
      'A free, no-pressure memory-keeping starter — turn ordinary days into stories your kids will treasure. Prompts, a weekly ritual, and a printable keepsake page.',
    upsell: {
      heading: 'Want to turn these moments into a storybook your child stars in?',
      body: 'The AI Comic Creation Workbook walks you through making a personalized storybook — your child as the hero, their world, their little victories — even if you’re not an illustrator.',
      href: '/shop/printables',
      label: 'See the Workbook',
    },
  },
  {
    slug: 'desk-reset',
    productId: 'free-desk-reset',
    eyebrow: 'A free 10-minute reset',
    headline: 'Your Body Wasn’t Built',
    emphasis: 'for a Chair',
    subhead:
      'Eight desk-friendly moves to undo the damage of a long day sitting — no equipment, no changing, no leaving your desk.',
    benefits: [
      {
        title: 'Ten Minutes, Eight Moves',
        body: 'Neck turns, thoracic rotations, chair squats, desk incline planks and more — all doable in what you’re already wearing.',
      },
      {
        title: 'Release What Sitting Tightens',
        body: 'Targets the shoulders, hips and upper back that quietly seize up between the first coffee and the last email.',
      },
      {
        title: 'No Gym, No Kit, No Excuse',
        body: 'If you can stand next to your chair, you can do this. Print it and keep it where you’ll actually see it.',
      },
    ],
    metaDescription:
      'A free 10-minute desk reset — eight simple moves to release tension and undo a day of sitting. No equipment, do it right at your desk.',
    upsell: {
      heading: 'Got twenty minutes instead of ten?',
      body: 'The 20-Minute Hustle is thirty days of short, no-equipment workouts built for real schedules — the same idea, scaled up to a whole month.',
      href: '/shop',
      label: 'See the programs',
    },
  },
  {
    slug: 'full-body-burn',
    productId: 'free-full-body-burn',
    eyebrow: 'A free 15-minute workout',
    headline: 'Fifteen Minutes,',
    emphasis: 'Zero Excuses',
    subhead:
      'No equipment. Forty seconds on, twenty seconds off. The workout you do on the days you swear you don’t have time.',
    benefits: [
      {
        title: 'Nothing but the Floor',
        body: 'No dumbbells, no bands, no gym. If you’ve got a patch of carpet and fifteen minutes, you’ve got everything you need.',
      },
      {
        title: 'Scales to Wherever You Are',
        body: 'Beginner and advanced modifications for every move — start where you actually are, not where you think you should be.',
      },
      {
        title: 'Built for Real Days',
        body: 'Short enough to do before the shower, hard enough that you’ll know you did it.',
      },
    ],
    metaDescription:
      'A free 15-minute full body workout. No equipment, 40 seconds on, 20 off, with beginner and advanced modifications. For when you have 15 minutes and zero excuses.',
    upsell: {
      heading: 'Ready to make it a habit?',
      body: 'The 20-Minute Hustle turns this into thirty days of structure — same no-equipment approach, with a plan behind it.',
      href: '/shop',
      label: 'See the programs',
    },
  },
  {
    slug: 'arms-and-shoulders',
    productId: 'free-arms-shoulders',
    eyebrow: 'A free 30-day plan',
    headline: 'Stronger Arms in',
    emphasis: 'Thirty Days',
    subhead:
      'Push, pull and sculpt with nothing but light dumbbells. A full month of structure — free, and yours to keep.',
    benefits: [
      {
        title: 'A Real Plan, Not a Random Workout',
        body: 'Thirty days laid out for you. No deciding what to do today — just open it and go.',
      },
      {
        title: 'Light Dumbbells Are Plenty',
        body: 'No gym membership, no heavy rack. The weight you already have in the cupboard will do.',
      },
      {
        title: 'Push, Pull, Sculpt',
        body: 'Balanced across the muscles that actually build defined shoulders — not just the ones you can see in the mirror.',
      },
    ],
    metaDescription:
      'A free 30-day arms and shoulders plan. Push, pull and sculpt with light dumbbells — no gym needed. A full month of structure, yours to keep.',
    upsell: {
      heading: 'Want the full eight weeks?',
      body: 'Strong Mama is a complete progressive strength program built for busy moms — where this thirty days leads next.',
      href: '/shop',
      label: 'See Strong Mama',
    },
  },
  {
    slug: 'car-ride-mobility',
    productId: 'free-car-ride-mobility',
    eyebrow: 'A free travel-day rescue',
    headline: 'For When You’ve Been',
    emphasis: 'Sitting Too Long',
    subhead:
      'Simple stretches you can do at a rest stop, in a parking lot, or beside the car door. Road trips are hard on a body.',
    benefits: [
      {
        title: 'Built for a Parking Lot',
        body: 'No mat, no floor, no dignity required. Everything works standing next to your car.',
      },
      {
        title: 'Undo the Drive',
        body: 'Targets the hips, back and shoulders that stiffen up somewhere around hour three.',
      },
      {
        title: 'Print It for the Glovebox',
        body: 'One page. Keep it in the car so it’s there on the day you actually need it.',
      },
    ],
    metaDescription:
      'A free car ride mobility plan — simple stretches for long drives, road trips, or any time you have been sitting too long. Do them at a rest stop.',
  },
  {
    slug: 'move-play-grow',
    productId: 'free-move-play-grow',
    eyebrow: 'A free ten minutes together',
    headline: 'Move, Play,',
    emphasis: 'Grow',
    subhead:
      'Six quick activities that build strength, coordination and connection — and genuinely tire out a small person. Anywhere, ten minutes.',
    benefits: [
      {
        title: 'Six Activities, One Flow',
        body: 'Wiggle wake-up, animal walks, red light/green light, roll-throw-catch, a pillow obstacle course, and calm + connect.',
      },
      {
        title: 'Play That’s Quietly Doing Work',
        body: 'Gross motor strength, impulse control and coordination — disguised as the best ten minutes of their day.',
      },
      {
        title: 'No Space, No Gear, No Prep',
        body: 'A hallway and a couple of pillows. That’s the whole equipment list.',
      },
    ],
    metaDescription:
      'A free 10-minute movement flow for parent and toddler. Six activities that build gross motor strength, coordination and connection — anywhere, no equipment.',
    upsell: {
      heading: 'Want twenty minutes of this, every day?',
      body: 'The 20-Minute Move With Me daily program is a full parent-and-toddler routine built on exactly this idea.',
      href: '/shop',
      label: 'See the program',
    },
  },
  {
    slug: '20-minute-reset',
    productId: '20-min-reset',
    eyebrow: 'A free one-page system',
    headline: 'When Everything Feels Like',
    emphasis: 'Too Much',
    subhead:
      'A simple 4-step system for decluttering your brain and your home — for the days when you don’t know where to start.',
    benefits: [
      {
        title: 'Four Steps, Twenty Minutes',
        body: 'Not a whole-house overhaul. Just enough to get back to good enough — which is more than enough.',
      },
      {
        title: 'Your Brain First, Then the House',
        body: 'The mess in your head is usually the one making the mess in the room feel unmanageable.',
      },
      {
        title: 'Stick It on the Fridge',
        body: 'One page. No overwhelm required. Print it for the days you can’t think straight.',
      },
    ],
    metaDescription:
      'A free 4-step system for decluttering your brain and your home in 20 minutes, for when everything feels like too much. One page, free to keep forever.',
  },
  {
    slug: 'top-10-ai-tips',
    productId: 'free-top-10-ai-tips',
    eyebrow: 'A free one-page guide',
    headline: 'Better Prompts,',
    emphasis: 'Better Answers',
    subhead:
      'Ten practical tips for getting genuinely useful results out of AI — no tech background, no jargon, no prompt-engineering degree.',
    benefits: [
      {
        title: 'Ten Tips That Actually Move the Needle',
        body: 'Be specific, give context and a role, show examples, refine instead of restarting — the things that change the output immediately.',
      },
      {
        title: 'Know What to Trust',
        body: 'Verify what matters, protect sensitive info, and keep your own judgment in the loop. AI is a tool, not an oracle.',
      },
      {
        title: 'One Page, Keep It Beside You',
        body: 'Print it, pin it, glance at it while you type. That’s the whole idea.',
      },
    ],
    metaDescription:
      'A free one-page guide to getting better results from AI. Ten practical tips — be specific, give context, verify what matters. Better prompts, better answers.',
    upsell: {
      heading: 'Want to go deeper?',
      body: 'The Everyday AI guides show you how to actually use AI in real life — for busy moms, small business owners, and everything in between. No jargon.',
      href: '/shop/printables',
      label: 'See the guides',
    },
  },
  {
    slug: 'claude-mastery-course',
    productId: 'free-claude-mastery-course',
    eyebrow: 'A free 14-module course',
    headline: 'Learn Gently,',
    emphasis: 'Build Boldly',
    subhead:
      'A complete, hands-on course for getting genuinely good at Claude — 14 modules, 6 worked projects, a cheat sheet and a capstone. Yours free.',
    benefits: [
      {
        title: '14 Modules, Start to Finish',
        body: 'Conversations, projects, artifacts, memory, connectors, code and automation — in an order that actually builds on itself.',
      },
      {
        title: 'Six Worked Example Projects',
        body: 'Not theory. Real things you build as you go, so you finish with something instead of just notes.',
      },
      {
        title: 'A Cheat Sheet and a Capstone',
        body: 'Something to keep beside you afterwards, and one proper project to prove to yourself it stuck.',
      },
    ],
    metaDescription:
      'A free, hands-on course for getting genuinely good at Claude — 14 modules, 6 worked projects, a cheat sheet and a capstone. Learn gently, build boldly.',
    upsell: {
      heading: 'Ready to put it to work?',
      body: 'The Everyday AI guides take this into the practical corners of real life — your home, your inbox, your small business.',
      href: '/shop/printables',
      label: 'See the guides',
    },
  },
  {
    slug: 'kids-chore-chart',
    productId: 'kids-chore-chart',
    eyebrow: 'A free printable',
    headline: 'A Chore Chart That',
    emphasis: 'Actually Gets Used',
    subhead:
      'Clean, simple, and dry-erase friendly. Add their name, add their chores, laminate it, and let them tick things off themselves.',
    benefits: [
      {
        title: 'Add Their Name and Their Chores',
        body: 'Not a rigid list of someone else’s idea of what a five-year-old should do. Yours to fill in.',
      },
      {
        title: 'Laminate It, Use It Forever',
        body: 'Print once, dry-erase marker, done. No reprinting every single week.',
      },
      {
        title: 'One Kid or a Whole Crew',
        body: 'Works the same whether you’ve got one small helper or a full production line.',
      },
    ],
    metaDescription:
      'A free printable kids chore chart. Add your child’s name and chores, laminate it, and check off tasks with a dry-erase marker. One kid or a whole crew.',
    upsell: {
      heading: 'Looking for more for the little ones?',
      body: 'The 10-Minute Brain Activation programs are daily prompts built for ages 2 and 4 — small, structured, and made for exactly this stage.',
      href: '/shop/printables',
      label: 'See the programs',
    },
  },
];

export function getFreebieBySlug(slug: string): FreebieLanding | undefined {
  return freebieLandings.find((f) => f.slug === slug);
}
