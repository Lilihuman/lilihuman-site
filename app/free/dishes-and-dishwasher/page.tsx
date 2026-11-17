import MovementGuidePage, { movementGuideMetadata } from '@/components/MovementGuidePage';

/** "Movement Built Into Your Day" guide — layout in components/MovementGuidePage.tsx, content in data/movementGuides.ts. */
const SLUG = 'dishes-and-dishwasher';

export const metadata = movementGuideMetadata(SLUG);

export default function DishesAndDishwasherPage() {
  return <MovementGuidePage slug={SLUG} />;
}
