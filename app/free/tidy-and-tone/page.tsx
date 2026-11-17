import MovementGuidePage, { movementGuideMetadata } from '@/components/MovementGuidePage';

/** "Movement Built Into Your Day" guide — layout in components/MovementGuidePage.tsx, content in data/movementGuides.ts. */
const SLUG = 'tidy-and-tone';

export const metadata = movementGuideMetadata(SLUG);

export default function TidyAndTonePage() {
  return <MovementGuidePage slug={SLUG} />;
}
