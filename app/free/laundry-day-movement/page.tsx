import MovementGuidePage, { movementGuideMetadata } from '@/components/MovementGuidePage';

/** "Movement Built Into Your Day" guide — layout in components/MovementGuidePage.tsx, content in data/movementGuides.ts. */
const SLUG = 'laundry-day-movement';

export const metadata = movementGuideMetadata(SLUG);

export default function LaundryDayMovementPage() {
  return <MovementGuidePage slug={SLUG} />;
}
