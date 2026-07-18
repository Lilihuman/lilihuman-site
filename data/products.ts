export type ProductType = 'digital' | 'physical';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  type: ProductType;
  /**
   * Single-file products. For products that deliver more than one file
   * (bundles), use `filePaths` instead — see `getProductFiles`.
   */
  filePath?: string;
  /** Multi-file products. Takes precedence over `filePath` when present. */
  filePaths?: string[];
  category: 'program' | 'printable';
  image?: string;
  featured?: boolean;
  stripePriceId?: string;
  tags?: string[];
  filters?: string[];
  note?: string;
}

export const products: Product[] = [
  {
    id: 'custom-program',
    name: 'Custom Fitness & Nutrition Program',
    description: 'A fully personalised fitness and nutrition program built around your goals, your schedule, and your life. Complete the intake form first, then purchase here — I\'ll email your custom program within 48–72 hours.',
    price: 3000,
    originalPrice: 6000,
    type: 'digital',
    category: 'program',
    image: '/images/programs/custom-fitness-&-nutrition-program.png',
    featured: true,
    tags: ['Custom', 'Personalised'],
    filters: ['fitness', 'mom-life'],
    note: 'Step 1: Fill out the intake form at lilihuman.com/fitness/personal-training — Step 2: Purchase here. I\'ll email your program within 48–72 hours.',
  },
  {
    id: '20min-hustle',
    name: '20-Minute Hustle — 30-Day Plan',
    description: 'Thirty days of 20-minute workouts built for real life. No equipment, no gym, no excuses.',
    price: 1500,
    type: 'digital',
    filePath: '/downloads/20-min-hustle-fitness.pdf',
    category: 'program',
    image: '/images/programs/20min-hustle-fitness.png',
    filters: ['fitness', 'mom-life'],
  },
  {
    id: '20min-hustle-nutrition',
    name: '20-Minute Hustle — Meal Plan Bundle',
    description: 'Two weeks of fat-loss meal plans designed to pair with your 20-Minute Hustle workouts.',
    price: 1500,
    type: 'digital',
    filePaths: [
      '/downloads/20-min-hustle-meal-plan-w1.pdf',
      '/downloads/20-min-hustle-meal-plan-w2.pdf',
    ],
    category: 'program',
    image: '/images/programs/20min-hustle-nutrition.png',
    filters: ['fitness', 'mom-life'],
  },
  {
    id: '20min-hustle-complete',
    name: '20-Minute Hustle — Complete Bundle',
    description: 'The full package — 30 days of workouts plus two weeks of fat-loss meal plans.',
    price: 2500,
    type: 'digital',
    filePaths: [
      '/downloads/20-min-hustle-fitness.pdf',
      '/downloads/20-min-hustle-meal-plan-w1.pdf',
      '/downloads/20-min-hustle-meal-plan-w2.pdf',
    ],
    category: 'program',
    image: '/images/programs/20min-hustle-complete.png',
    featured: true,
    filters: ['fitness', 'mom-life'],
  },
  {
    id: 'postpartum-meal-plan',
    name: 'Postpartum Reset — Meal Plan Bundle',
    description: 'Two weeks of nourishing meal plans designed to pair with your Postpartum Reset program.',
    price: 1500,
    type: 'digital',
    filePaths: [
      '/downloads/postpartum-reset-meal-plan-a.pdf',
      '/downloads/postpartum-reset-meal-plan-b.pdf',
    ],
    category: 'program',
    image: '/images/programs/postpartum-nutrition.png',
    filters: ['fitness', 'mom-life'],
  },
  {
    id: 'postpartum-reset',
    name: 'Postpartum Reset — 4-Week Program',
    description: 'Rebuild your core and pelvic floor, restore mobility, and gradually reintroduce strength.',
    price: 2500,
    type: 'digital',
    filePath: '/downloads/postpartum-reset-4-week-program.pdf',
    category: 'program',
    image: '/images/programs/postpartum-fitness.png',
    filters: ['fitness', 'mom-life'],
  },
  {
    id: 'postpartum-complete',
    name: 'Postpartum Reset — Complete Bundle',
    description: 'Everything you need — the full 4-week postpartum fitness program plus both meal plan weeks.',
    price: 3500,
    type: 'digital',
    filePaths: [
      '/downloads/postpartum-reset-4-week-program.pdf',
      '/downloads/postpartum-reset-meal-plan-a.pdf',
      '/downloads/postpartum-reset-meal-plan-b.pdf',
    ],
    category: 'program',
    image: '/images/programs/postpartum-complete.png',
    featured: true,
    filters: ['fitness', 'mom-life'],
  },
  {
    id: 'strong-mama-nutrition',
    name: 'Strong Mama — 8-Week Nutrition Program',
    description: 'Eight weeks of protein-first meal planning designed to fuel your workouts and support fat loss.',
    price: 1900,
    type: 'digital',
    filePath: '/downloads/strong-mama-nutrition-program.pdf',
    category: 'program',
    image: '/images/programs/strong-mama-nutrition.png',
    filters: ['fitness', 'mom-life'],
  },
  {
    id: 'strong-mama-8wk',
    name: 'Strong Mama — 8-Week Program',
    description: 'Eight weeks of progressive strength training designed for busy moms.',
    price: 4700,
    type: 'digital',
    filePaths: [
      '/downloads/strong-mama-8-week-program.pdf',
      '/downloads/strong-mama-exercise-guide.pdf',
    ],
    category: 'program',
    image: '/images/programs/strong-mama-fitness.png',
    featured: true,
    filters: ['fitness', 'mom-life'],
  },
  {
    id: 'strong-mama-complete',
    name: 'Strong Mama — Complete Bundle',
    description: 'The full Strong Mama experience — 8 weeks of workouts plus the complete nutrition program.',
    price: 5700,
    type: 'digital',
    filePaths: [
      '/downloads/strong-mama-8-week-program.pdf',
      '/downloads/strong-mama-exercise-guide.pdf',
      '/downloads/strong-mama-nutrition-program.pdf',
    ],
    category: 'program',
    image: '/images/programs/strong-mama-complete.png',
    featured: true,
    filters: ['fitness', 'mom-life'],
  },
  {
    id: 'move-with-me-toddler',
    name: '20-Minute "Move With Me" Daily Program',
    description: 'A playful strength, mobility, and developmental movement routine for you and your toddler. Warm-up, strength, toddler development games, and a calm cooldown — all in 20 minutes.',
    price: 1000,
    type: 'digital',
    filePath: '/downloads/20-min-move-with-me-daily program-parent-&-toddler.pdf',
    category: 'program',
    image: '/images/programs/move-with-me-cover.png',
    featured: true,
    tags: ['Family', 'Kids', 'Toddler'],
    filters: ['fitness', 'kids-family', 'mom-life'],
  },

  // Free Workouts
  {
    id: 'free-desk-reset',
    name: 'Daily 10-Minute Desk Reset',
    description: 'Eight simple desk-friendly moves to release tension, improve mobility, and reset your body — in just 10 minutes. Neck turns, thoracic rotations, chair squats, desk incline planks, and more. No equipment, do it right at your desk.',
    price: 0,
    type: 'digital',
    filePath: '/downloads/daily-10-min-desk-reset.pdf',
    category: 'program',
    image: '/images/free-workouts/daily-10-min-desk-reset.png',
    tags: ['Desk-friendly', '10 min', 'No equipment'],
    filters: ['fitness', 'freebies'],
  },
  {
    id: 'free-full-body-burn',
    name: '15-Min Full Body Burn',
    description: 'No equipment needed. 40 seconds work, 20 seconds rest. Beginner and advanced modifications included. This is the workout you do when you have 15 minutes and zero excuses.',
    price: 0,
    type: 'digital',
    filePath: '/downloads/15-min-full-body-burn.pdf',
    category: 'program',
    image: '/images/free-workouts/15-min-full-body-burn.png',
    tags: ['Full body', '15 min', 'No equipment'],
    filters: ['fitness', 'freebies'],
  },
  {
    id: 'free-arms-shoulders',
    name: '30-Day Arms & Shoulders Plan',
    description: 'Stronger arms and defined shoulders in 30 days. Push, pull, and sculpt with light dumbbells — no gym needed.',
    price: 0,
    type: 'digital',
    filePath: '/downloads/30-day-arms-and-shoulders.pdf',
    category: 'program',
    image: '/images/free-workouts/30-day-arms-&-shoulders-plan.png',
    tags: ['Arms & shoulders', '20 min/day', 'Light dumbbells'],
    filters: ['fitness', 'freebies'],
  },
  {
    id: 'free-car-ride-mobility',
    name: 'Car Ride Mobility Plan',
    description: 'Perfect for long drives, road trips, or any time you\'ve been sitting too long. Simple stretches and mobility moves you can do at a rest stop or in a parking lot.',
    price: 0,
    type: 'digital',
    filePath: '/downloads/car-ride-mobility-plan.pdf',
    category: 'program',
    image: '/images/free-workouts/Car-ride-mobility.png',
    tags: ['Mobility', '10 min', 'No equipment'],
    filters: ['fitness', 'freebies'],
  },
  {
    id: 'free-core-spinal-stability',
    name: 'Core & Spinal Stability Guide',
    description: '16 core exercises across four stability styles — anti-extension, anti-rotation, anti-lateral flexion, and spinal control — plus optional finishers and a sample weekly plan. Improve posture, protect your spine, ease back pain, and build a strong, stable midsection.',
    price: 0,
    type: 'digital',
    filePath: '/downloads/core-spinal-stability-exercises.pdf',
    category: 'program',
    image: '/images/free-workouts/core-spinal-stability.png',
    tags: ['Core & spine', '15–25 min', 'Minimal equipment'],
    filters: ['fitness', 'freebies'],
  },

  {
    id: 'free-move-play-grow',
    name: '10-Minute Move, Play, Grow!',
    description: 'A fun 10-minute flow to build skills and connection — anywhere. Six quick activities (wiggle wake-up, animal walks, red light/green light, roll-throw-catch, a pillow obstacle course, and calm + connect) that build gross motor strength, impulse control, coordination, and bonding. Simple activities, big impact.',
    price: 0,
    type: 'digital',
    filePath: '/downloads/10-min-move-play-grow.pdf',
    category: 'program',
    image: '/images/free-workouts/10-min-move-play-grow.png',
    tags: ['Family', 'Kids', 'Toddler', '10 min'],
    filters: ['fitness', 'freebies', 'kids-family', 'mom-life'],
  },

  // Printables & Art
  {
    id: '20-min-reset',
    name: 'The 20-Minute Reset',
    description: 'A simple 4-step system for decluttering your brain and your home when everything feels like too much. Free to download and keep forever.',
    price: 0,
    type: 'digital',
    filePath: '/downloads/the-20-min-reset.pdf',
    category: 'printable',
    image: '/images/printables/the-20-min-reset.png',
    tags: ['Organization', 'Free'],
    filters: ['freebies', 'planning'],
  },
  {
    id: 'brain-activation-age2',
    name: '10-Minute Daily Brain Activation Program — Age 2.5',
    description: 'A week of short, playful daily routines designed for toddlers around age 2.5. Each 10-minute session blends movement, language, sensory play, and connection — building brain power without pressure or expensive toys.',
    price: 500,
    type: 'digital',
    filePath: '/downloads/10_min_Brain_Activation_Program_Age2_compressed.pdf',
    category: 'printable',
    image: '/images/printables/brain-activation-age2-cover.png',
    featured: true,
    tags: ['Family', 'Kids', 'Ages 2+'],
    filters: ['kids-family'],
  },
  {
    id: 'brain-activation-age4',
    name: '10-Minute Brain Activation Program — Age 4',
    description: 'A full week of 10-minute daily play plans designed for 4-year-olds. Each day has a theme — movement, storytelling, science, and more — built to boost brain development through connection and play.',
    price: 500,
    type: 'digital',
    filePath: '/downloads/10_min_Brain_Activation_Program_Age4_compressed.pdf',
    category: 'printable',
    image: '/images/printables/brain-activation-age4-cover.png',
    featured: true,
    tags: ['Family', 'Kids', 'Ages 4+'],
    filters: ['kids-family'],
  },
  {
    id: 'free-top-10-ai-tips',
    name: 'Top 10 Tips & Tricks for Getting Better Results with AI',
    description: 'A free one-page guide to working smarter with AI. Ten practical tips — be specific, give context and a role, verify what matters, protect sensitive info, refine instead of restarting, show examples, ask it to explain its reasoning, know its limits, keep your judgment in the loop, and use AI to go faster. Better prompts, better answers, better results.',
    price: 0,
    type: 'digital',
    filePath: '/downloads/top-10-ai-tips.pdf',
    category: 'printable',
    image: '/images/printables/top-10-ai-tips.png',
    tags: ['AI Tools', 'PDF Guide', 'Free'],
    filters: ['ai-tools', 'freebies', 'mom-life'],
  },
  {
    id: 'free-claude-mastery-course',
    name: 'Claude Mastery Course',
    description: 'A complete, hands-on course for getting genuinely good at Claude — 14 modules covering conversations, projects, artifacts, memory, connectors, code, automation, and more, plus 6 worked example projects, a cheat sheet, and a capstone. Learn gently, build boldly, and put AI to work in your real life and business. Yours free.',
    price: 0,
    type: 'digital',
    filePath: '/downloads/claude-mastery-course.pdf',
    category: 'printable',
    image: '/images/printables/claude-mastery-course.png',
    featured: true,
    tags: ['AI Tools', 'Course', 'Free'],
    filters: ['ai-tools', 'freebies'],
  },
  {
    id: 'everyday-ai-busy-women',
    name: 'Everyday AI for Busy Women',
    description: 'A no-fluff guide to using AI tools in your daily life — from meal planning to inbox management. Practical prompts and real-life examples built for women who are too busy to waste time figuring it out alone.',
    price: 500,
    type: 'digital',
    filePath: '/downloads/Everyday_AI_for_Busy_Women_v2_compressed.pdf',
    category: 'printable',
    image: '/images/printables/everyday-ai-v2-preview.jpg',
    featured: true,
    tags: ['AI Tools', 'PDF Guide'],
    filters: ['ai-tools', 'mom-life'],
  },
  {
    id: 'everyday-ai-car-troubles',
    name: 'Everyday AI for Car Troubles',
    description: 'A simple guide to using AI when your car makes a weird noise, warning lights come on, repair costs feel confusing, or you don\'t know what to say to a mechanic. Smarter questions. Calmer decisions.',
    price: 500,
    type: 'digital',
    filePath: '/downloads/everyday-ai-for-car-trouble-compressed.pdf',
    category: 'printable',
    image: '/images/printables/everyday-ai-for-car-troubles.png',
    featured: true,
    tags: ['AI Tools', 'PDF Guide'],
    filters: ['ai-tools'],
  },
  {
    id: 'everyday-ai-busy-moms',
    name: 'Everyday AI for Busy Moms',
    description: 'Simple AI tools for meal planning, schedules, and everyday family life. A practical, no-jargon guide for moms who want to use AI without spending hours figuring it out.',
    price: 500,
    type: 'digital',
    filePath: '/downloads/everyday-ai-for-busy-moms.pdf',
    category: 'printable',
    image: '/images/printables/everyday-ai-for-busy-moms.png',
    featured: true,
    tags: ['AI Tools', 'PDF Guide'],
    filters: ['ai-tools', 'mom-life'],
  },
  {
    id: 'everyday-ai-small-business',
    name: 'Everyday AI for Small Business Owners',
    description: 'Use AI as your part-time assistant. A practical guide to using AI tools for content creation, customer replies, planning, and growing your small business — without hiring anyone.',
    price: 500,
    type: 'digital',
    filePath: '/downloads/everyday-ai-for-small-business-owners-compressed.pdf',
    category: 'printable',
    image: '/images/printables/everyday-ai-for-business-owners.png',
    featured: true,
    tags: ['AI Tools', 'PDF Guide'],
    filters: ['ai-tools'],
  },
  {
    id: 'free-memory-keeping',
    name: 'Everyday Moments, Everlasting Memories',
    description: 'A free, no-pressure memory-keeping starter for busy moms. Turn ordinary days into stories your kids will treasure — the memory-keeper\'s mindset, 10 milestone prompts, a 5-minute weekly ritual, and a printable keepsake page. No perfect scrapbooks required.',
    price: 0,
    type: 'digital',
    filePath: '/downloads/memory-keeping-starter.pdf',
    category: 'printable',
    image: '/images/free-workouts/memory-keeping-starter.png',
    tags: ['Memory-keeping', 'Printable', 'For moms'],
    filters: ['freebies', 'kids-family', 'mom-life'],
  },
  {
    id: 'ai-comic-creation-workbook',
    name: 'AI Comic Creation Workbook',
    description: 'Plan, write, and illustrate your own children\'s comic — no drawing required. A complete step-by-step system with fillable worksheets and copy-paste AI prompts, taking you from a rough idea to a finished comic you can print, share, or sell. Includes character bibles, story arc planning, panel briefs, image prompts, and a publishing checklist.',
    price: 1500,
    type: 'digital',
    filePath: '/downloads/ai-comic-creation-workbook.pdf',
    category: 'printable',
    image: '/images/printables/ai-comic-creation-workbook.png',
    tags: ['AI Tools', 'PDF Workbook'],
    filters: ['ai-tools', 'kids-family'],
  },
  {
    id: 'kids-chore-chart',
    name: 'Kids Chore Chart',
    description: 'A clean, simple chore chart for kids. Add your child\'s name and chores, print it out, laminate it, and check off tasks with a dry-erase marker. Works for one kid or a whole crew.',
    price: 0,
    type: 'digital',
    filePath: '/downloads/kids-chore-chart.png',
    category: 'printable',
    image: '/images/printables/kids-chore-chart.png',
    tags: ['Family', 'Kids'],
    filters: ['freebies', 'kids-family', 'planning'],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter((p) => p.category === category);
}

export function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2)} CAD`;
}

/**
 * Every downloadable file for a product. Bundles list each file in
 * `filePaths`; single-file products use `filePath`. Services with neither
 * (e.g. the custom program) return an empty array.
 */
export function getProductFiles(product: Product): string[] {
  if (product.filePaths?.length) return product.filePaths;
  return product.filePath ? [product.filePath] : [];
}
