import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import LeafDot from '@/components/LeafDot';

/**
 * UNLISTED subscriber-only freebie — "My Bedtime Routine".
 *
 * Deliberately a standalone route rather than a `data/freebies.ts` entry:
 *  - it must NOT appear in /shop, /fitness/free-workouts or any freebie index
 *  - it must NOT be email-gated (Human Note readers already gave their email;
 *    re-gating them is against the newsletter build spec)
 *  - do NOT use the `hidden` product flag — that 404s publicly, not unlisted
 * Reachable only by direct URL, from the newsletter. Keep it out of nav.
 * Two PDFs: the girl and boy versions differ only in the "Wash your face" art.
 * Template: app/free/say-it-out-loud/page.tsx
 */

const GIRL_PDF = '/downloads/my-bedtime-routine-girl.pdf';
const BOY_PDF = '/downloads/my-bedtime-routine-boy.pdf';

export const metadata: Metadata = {
  title: 'My Bedtime Routine — for Human Note readers | Lili Human',
  description:
    'A printable bedtime chart with magnet tokens your little one moves from “To do” to “Done” — a small thank-you for readers of The Human Note.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'My Bedtime Routine — for Human Note readers | Lili Human',
    description:
      'A picture checklist for little ones: six steps to goodnight, with magnet tokens they move themselves.',
    type: 'article',
    siteName: 'Lili Human',
    images: [
      {
        url: '/images/freebies/my-bedtime-routine-thumb.png',
        width: 1672,
        height: 941,
        alt: 'My Bedtime Routine — a free printable picture checklist for little ones',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/freebies/my-bedtime-routine-thumb.png'],
  },
};

export default function MyBedtimeRoutinePage() {
  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-24">
      <span className="section-eyebrow">
        <LeafDot /> A Human Note freebie
      </span>

      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mt-4">
        {/* Left: copy + direct downloads */}
        <div>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-brown leading-tight">
            My Bedtime <em className="italic text-sage">Routine</em>
          </h1>
          <p className="font-body text-lg text-mocha/80 mt-5 leading-relaxed">
            Six little steps to goodnight — and your child gets to move each
            one from &lsquo;To do&rsquo; to &lsquo;Done&rsquo; all by
            themselves.
          </p>

          <p className="font-body text-base text-mocha/75 mt-5 leading-relaxed">
            Bedtime goes so much better in our house when it feels like a game
            instead of a list of orders. Page one is the chart: toilet, face,
            teeth, pyjamas, a story, and cuddles. Page two is six picture
            tokens to cut out. Print them on cardstock with a small magnet on
            the back, or straight onto an inkjet magnet sheet, and pop the
            chart on the fridge. Then let your little one do the moving — you
            just get to cheer.
          </p>

          <div className="mt-8">
            <p className="font-body text-sm text-mocha/70 mb-3">
              Two versions — the only difference is who&rsquo;s washing their
              face. Pick the one that looks most like yours.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={GIRL_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block text-sm"
              >
                Girl version &rarr;
              </a>
              <a
                href={BOY_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block text-sm"
              >
                Boy version &rarr;
              </a>
            </div>
            <p className="font-body text-xs text-mocha/50 mt-3 leading-relaxed max-w-sm">
              This one&rsquo;s just for Human Note readers. No sign-up, no catch.
            </p>
          </div>

          <p className="font-body text-sm text-mocha/60 mt-8">
            For the teeth-brushing step:{' '}
            <Link
              href="/blog/the-toothbrush-race"
              className="text-sage underline underline-offset-4"
            >
              The Toothbrush Race
            </Link>
          </p>
        </div>

        {/* Right: Lili's promo thumbnail */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-peach-light/40">
            <Image
              src="/images/freebies/my-bedtime-routine-thumb.png"
              alt="My Bedtime Routine — a free printable picture checklist for little ones"
              width={1672}
              height={941}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
