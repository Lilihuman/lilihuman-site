import MovementGuidePage, { movementGuideMetadata } from '@/components/MovementGuidePage';

/** "Movement Built Into Your Day" guide — layout in components/MovementGuidePage.tsx, content in data/movementGuides.ts. */
const SLUG = 'cleaning-day-circuit';

export const metadata = movementGuideMetadata(SLUG);

export default function CleaningDayCircuitPage() {
  return <MovementGuidePage slug={SLUG} />;
}
