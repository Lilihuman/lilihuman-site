import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import LeafDot from '@/components/LeafDot';

/**
 * UNLISTED subscriber-only freebie — "Three Things, A Year Apart"
 * (Canadian Thanksgiving issue).
 *
 * Standalone route, not a `data/freebies.ts` entry: that machinery renders
 * FreeDownloadButton + FreebiePeek, which email-gate the download. Same
 * pattern as carry-it-together, the-not-yet-list, be-your-own-friend and
 * say-it-out-loud. Do NOT use the `hidden` product flag — that 404s publicly.
 * Reachable only by direct URL from the newsletter; keep it out of nav.
 */

const PDF = '/downloads/three-things-a-year-apart.pdf';

export const metadata: Metadata = {
  title: 'Three Things, A Year Apart — for Human Note readers | Lili Human',
  description:
    'Grateful for what you have, not what you’re still chasing. A one-page card for three gratitudes, one thing to finish today, and one thing that went right.',
  robots: { index: false, follow: false },
};

const inside = [
  'A year ago, I didn’t have… — the things that are new since last Thanksgiving',
  'Today, I’m grateful for… — the people, places and moments already here',
  'One thing I’m finishing today, and one thing that went right',
];

export default function ThreeThingsAYearApartPage() {
  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-24">
      <span className="section-eyebrow">
        <LeafDot /> A Human Note freebie
      </span>

      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mt-4">
        {/* Left: copy + direct, un-gated download */}
        <div>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-brown leading-tight">
            Three Things, <em className="italic text-sage">A Year Apart</em>
          </h1>
          <p className="font-body text-lg text-mocha/80 mt-5 leading-relaxed">
            Grateful for what you have, not what you&rsquo;re still chasing.
          </p>

          <p className="font-body text-base text-mocha/75 mt-5 leading-relaxed">
            A one-page card to fill in this weekend. Three prompts, and two
            short lines to close the day:
          </p>

          <ul className="mt-5 space-y-4">
            {inside.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-peach text-xl leading-none mt-0.5">&#9825;</span>
                <span className="font-body text-sm text-mocha/70 leading-relaxed">
                  {item}
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
              Download the card &rarr;
            </a>
            <p className="font-body text-xs text-mocha/50 mt-3 leading-relaxed">
              This one&rsquo;s just for Human Note readers. No sign-up, no catch.
            </p>
          </div>

          <p className="font-body text-sm text-mocha/60 mt-8">
            Read the story behind it:{' '}
            <Link
              href="/blog/grateful-for-what-you-have"
              className="text-sage underline underline-offset-4"
            >
              Grateful for What You Have
            </Link>
          </p>
        </div>

        {/* Right: the card */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-peach-light/40">
            <Image
              src="/images/freebies/three-things-a-year-apart-cover.png"
              alt="Three Things, A Year Apart — a one-page gratitude card"
              width={1275}
              height={1650}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
