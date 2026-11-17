import MovementGuidePage, { movementGuideMetadata } from '@/components/MovementGuidePage';

/** "Movement Built Into Your Day" guide — layout in components/MovementGuidePage.tsx, content in data/movementGuides.ts. */
const SLUG = 'get-ready-movement';

export const metadata = movementGuideMetadata(SLUG);

export default function GetReadyMovementPage() {
  return <MovementGuidePage slug={SLUG} />;
}
