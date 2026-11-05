import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import LeafDot from '@/components/LeafDot';

/**
 * UNLISTED subscriber-only freebie — "Know It, Do It".
 *
 * Deliberately a standalone route rather than a `data/freebies.ts` entry:
 *  - it must NOT appear in /shop, /fitness/free-workouts or any freebie index
 *  - it must NOT be email-gated (Human Note readers already gave their email)
 *  - do NOT use the `hidden` product flag — that 404s publicly, not unlisted
 * Reachable only by direct URL, from the newsletter. Keep it out of nav.
 * Template: app/free/my-bedtime-routine/page.tsx
 */

const PDF = '/downloads/know-it-do-it.pdf';
const THUMB = '/images/freebies/know-it-do-it-thumb.png';
const THUMB_ALT =
  'Know It, Do It — My 7-Day Starter, a free one-page tracker from Lili Human';

export const metadata: Metadata = {
  title: 'Know It, Do It — for Human Note readers | Lili Human',
  description:
    'A fillable one-page 7-day starter for doing something you already know — a small thank-you for readers of The Human Note.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Know It, Do It — for Human Note readers | Lili Human',
    description:
      'Pick one thing you already know. Do the smallest version of it. Then tick the box.',
    type: 'article',
    siteName: 'Lili Human',
    images: [{ url: THUMB, width: 2400, height: 1350, alt: THUMB_ALT }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [THUMB],
  },
};

export default function KnowItDoItPage() {
  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-24">
      <span className="section-eyebrow">
        <LeafDot /> A Human Note freebie
      </span>

      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mt-4">
        {/* Left: copy + direct download */}
        <div>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-brown leading-tight">
            Know It, <em className="italic text-sage">Do It</em>
          </h1>
          <p className="font-body text-lg text-mocha/80 mt-5 leading-relaxed">
            My 7-Day Starter. Pick one thing you already know. Do the smallest
            version of it. Then tick the box.
          </p>

          <p className="font-body text-base text-mocha/75 mt-5 leading-relaxed">
            It&rsquo;s one page, and you can fill it in right on your screen.
            Type in the one thing, then tick a box each day for seven days. The
            courses, certificates and projects you want next go in the parking
            lot, to revisit after day 7. Small and boring is the point.
          </p>

          <div className="mt-8">
            <a
              href={PDF}
              download
              className="btn-primary inline-block text-sm"
            >
              Download the PDF &rarr;
            </a>
            <p className="font-body text-xs text-mocha/50 mt-3 leading-relaxed max-w-sm">
              This one&rsquo;s just for Human Note readers. No sign-up, no catch.
            </p>
            <p className="font-body text-xs text-mocha/50 mt-2 leading-relaxed max-w-sm">
              Save the PDF first, then open it in a PDF app so your answers and
              ticks are kept. Prefer paper? It prints too.
            </p>
          </div>

          <p className="font-body text-sm text-mocha/60 mt-8">
            The story behind it:{' '}
            <Link
              href="/blog/i-have-the-certificates"
              className="text-sage underline underline-offset-4"
            >
              I have the certificates. I still don&rsquo;t do the thing.
            </Link>
          </p>
        </div>

        {/* Right: Lili's promo thumbnail */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-peach-light/40">
            <Image
              src={THUMB}
              alt={THUMB_ALT}
              width={2400}
              height={1350}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
