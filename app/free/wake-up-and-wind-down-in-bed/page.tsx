import Image from 'next/image';
import type { Metadata } from 'next';
import LeafDot from '@/components/LeafDot';

/**
 * Standalone landing page — "Wake Up & Wind Down in Bed".
 *
 * Bundles the two in-bed routines (5-Minute Wake-Up + 5-Minute Nighttime)
 * into one direct download — no email gate (Lili's call, 2026-09-18). Deliberately NOT a
 * `data/freebies.ts` entry: both underlying products are in
 * HIDDEN_PRODUCT_IDS (hidden = 404s via /free/[slug]), and Lili wants them
 * kept off /shop and /fitness/free-workouts. Reachable by direct link only
 * (pins, socials); indexable, with its own OG image.
 */

const PDF = '/downloads/wake-up-and-wind-down-in-bed.pdf';
const NAME = 'Wake Up & Wind Down in Bed';
const DESCRIPTION =
  'Two free 5-minute routines you can do without leaving bed — a gentle morning wake-up and a calming nighttime wind-down. One download, both routines.';

export const metadata: Metadata = {
  title: `${NAME} — Free Download | Lili Human`,
  description: DESCRIPTION,
  alternates: { canonical: '/free/wake-up-and-wind-down-in-bed' },
  openGraph: {
    title: `${NAME} — Free Download | Lili Human`,
    description: DESCRIPTION,
    url: '/free/wake-up-and-wind-down-in-bed',
    siteName: 'Lili Human',
    type: 'article',
    images: [
      {
        url: '/images/free-workouts/5-min-wake-up-in-bed.png',
        width: 1448,
        height: 1086,
        alt: NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${NAME} — Free Download | Lili Human`,
    description: DESCRIPTION,
    images: ['/images/free-workouts/5-min-wake-up-in-bed.png'],
  },
};

const benefits = [
  {
    title: 'Wake Your Body Before Your Feet Touch the Floor',
    body: 'A full-body reach, ankle circles, bent-knee windshield wipers, knee hugs, heel slides, a glute bridge, and a seated bedside reach — so you stand up steady, not stiff.',
  },
  {
    title: 'Unwind Right Where You’ll Sleep',
    body: 'Slow belly breathing, easy sways and hugs, a reclined figure-four, and a final legs-up rest to help your whole body go heavy before you drift off.',
  },
  {
    title: 'Never Leave the Mattress',
    body: 'No cold floor, no equipment, no getting changed. Five minutes each, in the clothes you’re already wearing.',
  },
];

export default function WakeUpAndWindDownInBedPage() {
  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-24">
      <span className="section-eyebrow">
        <LeafDot /> Two free in-bed routines
      </span>

      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mt-4">
        {/* Left: copy + opt-in */}
        <div>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-brown leading-tight">
            Start and End Your Day{' '}
            <em className="italic text-sage">Without Leaving Bed</em>
          </h1>
          <p className="font-body text-lg text-mocha/80 mt-5 leading-relaxed">
            A 5-minute wake-up and a 5-minute wind-down — sixteen gentle moves
            you can do lying right where you sleep. One download, both
            routines.
          </p>

          <ul className="mt-7 space-y-4">
            {benefits.map((b) => (
              <li key={b.title} className="flex gap-3">
                <span className="text-peach text-xl leading-none mt-0.5">&#9825;</span>
                <span>
                  <span className="font-heading text-lg text-brown block">{b.title}</span>
                  <span className="font-body text-sm text-mocha/70 leading-relaxed">{b.body}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 max-w-sm">
            <a
              href={PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block text-sm"
            >
              Download both routines &rarr;
            </a>
            <p className="font-body text-xs text-mocha/50 mt-3 leading-relaxed">
              Free, no sign-up &mdash; one PDF with both routines.
            </p>
          </div>
        </div>

        {/* Right: both covers */}
        <div className="flex flex-col gap-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-peach-light/40">
            <Image
              src="/images/free-workouts/5-min-wake-up-in-bed.png"
              alt="5-Minute Wake-Up Routine You Can Do in Bed — free download preview"
              width={1448}
              height={1086}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-peach-light/40">
            <Image
              src="/images/free-workouts/5-min-nighttime-in-bed.png"
              alt="5-Minute Nighttime Routine You Can Do in Bed — free download preview"
              width={1448}
              height={1086}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
