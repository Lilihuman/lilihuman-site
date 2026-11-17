import MovementGuidePage, { movementGuideMetadata } from '@/components/MovementGuidePage';

/** "Movement Built Into Your Day" guide — layout in components/MovementGuidePage.tsx, content in data/movementGuides.ts. */
const SLUG = 'kitchen-movement-snacks';

export const metadata = movementGuideMetadata(SLUG);

export default function KitchenMovementSnacksPage() {
  return <MovementGuidePage slug={SLUG} />;
}
