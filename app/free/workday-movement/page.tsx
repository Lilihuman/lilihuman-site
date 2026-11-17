import MovementGuidePage, { movementGuideMetadata } from '@/components/MovementGuidePage';

/** "Movement Built Into Your Day" guide — layout in components/MovementGuidePage.tsx, content in data/movementGuides.ts. */
const SLUG = 'workday-movement';

export const metadata = movementGuideMetadata(SLUG);

export default function WorkdayMovementPage() {
  return <MovementGuidePage slug={SLUG} />;
}
