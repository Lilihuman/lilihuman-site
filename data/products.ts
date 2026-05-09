export type ProductType = 'digital' | 'physical';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  type: ProductType;
  filePath?: string;
  category: 'program' | 'printable' | 'physical';
  image?: string;
  featured?: boolean;
  stripePriceId?: string;
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
