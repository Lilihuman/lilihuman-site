import MovementGuidePage, { movementGuideMetadata } from '@/components/MovementGuidePage';

/** "Movement Built Into Your Day" guide — layout in components/MovementGuidePage.tsx, content in data/movementGuides.ts. */
const SLUG = 'floor-care-fitness';

export const metadata = movementGuideMetadata(SLUG);

export default function FloorCareFitnessPage() {
  return <MovementGuidePage slug={SLUG} />;
}
