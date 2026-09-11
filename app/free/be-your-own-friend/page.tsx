import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import LeafDot from '@/components/LeafDot';

/**
 * UNLISTED subscriber-only freebie — "Be Your Own Friend" (Human Note #14).
 *
 * Deliberately a standalone route rather than a `data/freebies.ts` entry:
 *  - it must NOT appear in /shop, /fitness/free-workouts or any freebie index
 *  - it must NOT be email-gated (Human Note readers already gave their email;
 *    re-gating them is against the newsletter build spec)
 *  - do NOT use the `hidden` product flag — that 404s publicly, not unlisted
 * Reachable only by direct URL, from the newsletter. Keep it out of nav.
 * Template: app/free/say-it-out-loud/page.tsx
 */

const PDF = '/downloads/be-your-own-friend.pdf';

export const metadata: Metadata = {
  title: 'Be Your Own Friend — for Human Note readers | Lili Human',
  description:
    'A 10-minute reset for the days you’re hardest on yourself. Five gentle movements, one breath, and three questions that change the voice in your head.',
  robots: { index: false, follow: false },
};

export default function BeYourOwnFriendPage() {
  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-24">
      <span className="section-eyebrow">
        <LeafDot /> A Human Note freebie
      </span>

      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mt-4">
        {/* Left: copy + direct download */}
        <div>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-brown leading-tight">
            Be Your <em className="italic text-sage">Own Friend</em>
          </h1>
          <p className="font-body text-lg text-mocha/80 mt-5 leading-relaxed">
            A 10-minute reset for the days you&rsquo;re hardest on yourself.
          </p>

          <p className="font-body text-base text-mocha/75 mt-5 leading-relaxed">
            I&rsquo;m the friend people call. I can find the good in almost
            anyone — and then I turn around and give myself nothing but the
            bill. Someone once asked me what I&rsquo;d say if I listened to
            myself the way I listen to a friend, and it stopped me cold. This
            is that question, turned into ten minutes you can actually do: five
            gentle movements, one breath, and three questions that change the
            voice in your head.
          </p>

          <div className="mt-8 max-w-sm">
            <a
              href={PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block text-sm"
            >
              Download the reset &rarr;
            </a>
            <p className="font-body text-xs text-mocha/50 mt-3 leading-relaxed">
              This one&rsquo;s just for Human Note readers — you won&rsquo;t
              find it anywhere else on the site. No sign-up, no catch.
            </p>
          </div>

          <p className="font-body text-sm text-mocha/60 mt-8">
            Read the story behind it:{' '}
            <Link
              href="/blog/i-see-the-best-in-everyone-except-me"
              className="text-sage underline underline-offset-4"
            >
              I See the Best in Everyone — Except Me
            </Link>
          </p>
        </div>

        {/* Right: cover preview (page 1 of the PDF) */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-peach-light/40">
            <Image
              src="/images/freebies/be-your-own-friend-page-1.png"
              alt="Be Your Own Friend — a 10-minute reset for the days you're hardest on yourself"
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
