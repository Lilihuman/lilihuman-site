import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import LeafDot from '@/components/LeafDot';

/**
 * UNLISTED subscriber-only freebie — "Carry It Together" (Human Note #17).
 *
 * Deliberately a standalone route rather than a `data/freebies.ts` entry:
 *  - it must NOT appear in /shop, /fitness/free-workouts or any freebie index
 *  - it must NOT be email-gated (Human Note readers already gave their email).
 *    The /free/[slug] machinery renders FreeDownloadButton + FreebiePeek, which
 *    gate the download — hence the standalone route, same as the-not-yet-list,
 *    be-your-own-friend and say-it-out-loud.
 *  - do NOT use the `hidden` product flag — that 404s publicly, not unlisted
 *
 * Separate from the public essay at /blog/carry-it-together, which shares the
 * name on purpose. Do not merge or redirect one to the other.
 */

const PDF = '/downloads/carry-it-together.pdf';

export const metadata: Metadata = {
  title: 'Carry It Together — for Human Note readers | Lili Human',
  description:
    'A permission note and six ways to ask for help, for anyone who learned to carry everything alone.',
  robots: { index: false, follow: false },
};

const inside = [
  'A permission note to sign, built around what Ma Estelle told me',
  'Six sentences you can borrow when asking feels hard',
  'Four quiet questions for working out what to put down',
];

export default function CarryItTogetherPage() {
  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-24">
      <span className="section-eyebrow">
        <LeafDot /> A gift for Human Note readers
      </span>

      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mt-4">
        {/* Left: copy + direct, un-gated download */}
        <div>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-brown leading-tight">
            Carry It <em className="italic text-sage">Together</em>
          </h1>
          <p className="font-body text-lg text-mocha/80 mt-5 leading-relaxed">
            A permission note and six ways to ask for help, for anyone who
            learned to carry everything alone.
          </p>

          <ul className="mt-7 space-y-4">
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
              Download the PDF &rarr;
            </a>
            <p className="font-body text-xs text-mocha/50 mt-3 leading-relaxed">
              Just for Human Note readers. No sign-up needed, you&rsquo;re
              already in.
            </p>
          </div>

          <p className="font-body text-sm text-mocha/60 mt-8">
            Read the story behind it:{' '}
            <Link
              href="/blog/carry-it-together"
              className="text-sage underline underline-offset-4"
            >
              Carry It Together
            </Link>
          </p>
        </div>

        {/* Right: cover preview (page 1 of the PDF) */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-peach-light/40">
            <Image
              src="/images/freebies/carry-it-together-cover.png"
              alt="Carry It Together — a permission note and six ways to ask for help"
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
