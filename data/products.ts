export type ProductType = 'digital' | 'physical';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  type: ProductType;
  filePath?: string;
  category: 'program' | 'printable';
  image?: string;
  featured?: boolean;
  stripePriceId?: string;
  tags?: string[];
  filters?: string[];
}

export const products: Product[] = [
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
    filePath: '/downloads/20-min-hustle-meal-plan-w1.pdf',
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
    filePath: '/downloads/20-min-hustle-fitness.pdf',
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
    filePath: '/downloads/postpartum-reset-meal-plan-a.pdf',
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
    filePath: '/downloads/postpartum-reset-4-week-program.pdf',
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
    filePath: '/downloads/strong-mama-8-week-program.pdf',
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
    filePath: '/downloads/strong-mama-8-week-program.pdf',
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
  return `$${(cents / 100).toFixed(2)}`;
}
