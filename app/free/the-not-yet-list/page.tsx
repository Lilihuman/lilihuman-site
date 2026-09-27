import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import LeafDot from '@/components/LeafDot';

/**
 * UNLISTED subscriber-only freebie — "The Not-Yet List" (Human Note #16).
 *
 * Deliberately a standalone route rather than a `data/freebies.ts` entry:
 *  - it must NOT appear in /shop, /fitness/free-workouts or any freebie index
 *  - it must NOT be email-gated (Human Note readers already gave their email;
 *    re-gating them is against the newsletter build spec)
 *  - do NOT use the `hidden` product flag — that 404s publicly, not unlisted
 * Reachable only by direct URL, from the newsletter. Keep it out of nav.
 * Template: app/free/say-it-out-loud/page.tsx
 */

const PDF = '/downloads/the-not-yet-list.pdf';

export const metadata: Metadata = {
  title: 'The Not-Yet List — for Human Note readers | Lili Human',
  description:
    'One page for the one thing you’ll finish this week — and permission for everything else to stay exactly where it is.',
  robots: { index: false, follow: false },
};

export default function TheNotYetListPage() {
  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-24">
      <span className="section-eyebrow">
        <LeafDot /> A Human Note freebie
      </span>

      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mt-4">
        {/* Left: copy + direct download */}
        <div>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-brown leading-tight">
            The <em className="italic text-sage">Not-Yet List</em>
          </h1>
          <p className="font-body text-lg text-mocha/80 mt-5 leading-relaxed">
            One page for the one thing you&rsquo;ll finish this week — and
            permission for everything else to stay exactly where it is.
          </p>

          <p className="font-body text-base text-mocha/75 mt-5 leading-relaxed">
            I keep a garage full of half-finished things: plants waiting for
            bigger pots, curtains still rolled in their package, a memoir
            waiting for its next chapter. For years I told myself I&rsquo;d
            feel better when it was all done. It never is — finishing one thing
            only ever reveals another. So this is the page I made instead. One
            thing to finish this week, and everything else written down on
            purpose, so it stops renting space in your head.
          </p>

          <div className="mt-8 max-w-sm">
            <a
              href={PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block text-sm"
            >
              Download the page &rarr;
            </a>
            <p className="font-body text-xs text-mocha/50 mt-3 leading-relaxed">
              This one&rsquo;s just for Human Note readers. No sign-up, no catch.
            </p>
          </div>

          <p className="font-body text-sm text-mocha/60 mt-8">
            Read the story behind it:{' '}
            <Link
              href="/blog/ill-feel-better-when-everything-is-done"
              className="text-sage underline underline-offset-4"
            >
              I&rsquo;ll Feel Better When Everything Is Done
            </Link>
          </p>
        </div>

        {/* Right: cover preview (page 1 of the PDF) */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-peach-light/40">
            <Image
              src="/images/freebies/the-not-yet-list-page-1.png"
              alt="The Not-Yet List — one page for the one thing you'll finish this week"
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
