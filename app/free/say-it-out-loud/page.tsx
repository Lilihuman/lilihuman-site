import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import LeafDot from '@/components/LeafDot';

/**
 * UNLISTED subscriber-only freebie — "Say It Out Loud".
 *
 * Deliberately a standalone route rather than a `data/freebies.ts` entry:
 *  - it must NOT appear in /shop, /fitness/free-workouts or any freebie index
 *  - it must NOT be email-gated (Human Note readers already gave their email;
 *    re-gating them is against the newsletter build spec)
 * Reachable only by direct URL, from the newsletter. Keep it out of nav.
 */

const PDF = '/downloads/say-it-out-loud.pdf';

export const metadata: Metadata = {
  title: 'Say It Out Loud — for Human Note readers | Lili Human',
  description:
    'Ten questions to ask instead of assuming — a small thank-you for readers of The Human Note.',
  robots: { index: false, follow: false },
};

export default function SayItOutLoudPage() {
  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-24">
      <span className="section-eyebrow">
        <LeafDot /> A Human Note freebie
      </span>

      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mt-4">
        {/* Left: copy + direct download */}
        <div>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-brown leading-tight">
            Say It <em className="italic text-sage">Out Loud</em>
          </h1>
          <p className="font-body text-lg text-mocha/80 mt-5 leading-relaxed">
            Ten questions to ask instead of assuming — for the small
            misunderstandings that quietly pile up.
          </p>

          <p className="font-body text-base text-mocha/75 mt-5 leading-relaxed">
            For months I was quietly annoyed that my partner kept moving to my
            side of the couch. It turned out he was doing it{' '}
            <em className="italic">because</em> he thought I wanted that side.
            I had spent months resenting an act of kindness. These are the ten
            questions I wish I&rsquo;d asked sooner.
          </p>

          <div className="mt-8 max-w-sm">
            <a
              href={PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block text-sm"
            >
              Download the questions &rarr;
            </a>
            <p className="font-body text-xs text-mocha/50 mt-3 leading-relaxed">
              This one&rsquo;s just for Human Note readers — you won&rsquo;t
              find it anywhere else on the site. No sign-up, no catch.
            </p>
          </div>

          <p className="font-body text-sm text-mocha/60 mt-8">
            Read the story behind it:{' '}
            <Link
              href="/blog/the-couch-that-taught-us-how-to-communicate"
              className="text-sage underline underline-offset-4"
            >
              The Couch That Taught Us How to Communicate
            </Link>
          </p>
        </div>

        {/* Right: cover preview */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-peach-light/40">
            <Image
              src="/images/free-workouts/say-it-out-loud-cover.png"
              alt="Say It Out Loud — ten questions to ask instead of assuming"
              width={1163}
              height={1505}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
