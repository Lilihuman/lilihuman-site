import { notFound } from 'next/navigation';
import { isPreview } from '@/lib/preview';
import PreviewBadge from '@/components/PreviewBadge';

/**
 * Server gate for a whole route (used from a layout.tsx). Public visitors get a
 * 404; in Preview Mode the page renders with a "Hidden page" badge on top.
 */
export default function HiddenGate({ children }: { children: React.ReactNode }) {
  if (!isPreview()) notFound();
  return (
    <>
      <div className="max-w-6xl mx-auto px-5 md:px-8 pt-4">
        <PreviewBadge label="Hidden page — only you can see this" />
      </div>
      {children}
    </>
  );
}
