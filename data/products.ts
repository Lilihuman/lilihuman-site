export type ProductType = 'digital' | 'physical';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // in cents
  type: ProductType;
  filePath?: string; // for digital products
  category: 'program' | 'printable' | 'physical';
  image?: string;
  featured?: boolean;
  stripePriceId?: string; // set after creating in Stripe dashboard
}

export const products: Product[] = [
  // Fitness programs
  {
    id: 'strong-mama-8wk',
    name: 'Strong Mama — 8-Week Program',
    description:
      'Eight weeks of progressive strength training designed for busy mothers. Includes PDF workout guides, a nutrition framework, and lifetime access to all updates.',
    price: 4700,
    type: 'digital',
    filePath: '/downloads/strong-mama-8wk.pdf',
    category: 'program',
    featured: true,
    stripePriceId: process.env.STRIPE_PRICE_STRONG_MAMA,
  },
  {
    id: 'postpartum-reset',
    name: 'Postpartum Reset — 4-Week Program',
    description:
      'A gentle but effective 4-week return-to-movement program for new moms. Low impact, pelvic floor aware, and fully bodyweight.',
    price: 2900,
    type: 'digital',
    filePath: '/downloads/postpartum-reset.pdf',
    category: 'program',
    stripePriceId: process.env.STRIPE_PRICE_POSTPARTUM,
  },
  {
    id: '20min-hustle',
    name: '20-Minute Hustle — Monthly Plan',
    description:
      '30 days of 20-minute workouts for the time-starved mama. New plan drops monthly, no equipment needed.',
    price: 1500,
    type: 'digital',
    filePath: '/downloads/20min-hustle.pdf',
    category: 'program',
    stripePriceId: process.env.STRIPE_PRICE_20MIN,
  },

  // Printables
  {
    id: 'morning-planner-pad',
    name: 'Morning Ritual Planner — Printable',
    description:
      'A beautifully designed daily planner page with space for intentions, movement, gratitude, and the three things that actually matter today.',
    price: 900,
    type: 'digital',
    filePath: '/downloads/morning-planner.pdf',
    category: 'printable',
    featured: true,
    stripePriceId: process.env.STRIPE_PRICE_PLANNER,
  },
  {
    id: 'family-command-centre',
    name: 'Family Command Centre — 5-Page Set',
    description:
      'Five printable pages: weekly meal plan, grocery list, chore chart, family calendar, and an emergency contacts sheet. Warm neutral aesthetic.',
    price: 1400,
    type: 'digital',
    filePath: '/downloads/family-command-centre.pdf',
    category: 'printable',
    stripePriceId: process.env.STRIPE_PRICE_COMMAND_CENTRE,
  },
  {
    id: 'wall-art-botanicals',
    name: 'Botanical Wall Art — 3-Print Set',
    description:
      'Printable A4/Letter botanical art prints in warm, earthy tones. Instant download, print at home or at your local print shop.',
    price: 1200,
    type: 'digital',
    filePath: '/downloads/botanical-prints.zip',
    category: 'printable',
    stripePriceId: process.env.STRIPE_PRICE_WALL_ART,
  },

  // Physical
  {
    id: 'linen-tote',
    name: 'LH Linen Tote Bag',
    description:
      'Natural linen tote with the LH monogram embroidered in warm peach thread. Market bag sized, strong handles.',
    price: 3400,
    type: 'physical',
    category: 'physical',
    stripePriceId: process.env.STRIPE_PRICE_TOTE,
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
