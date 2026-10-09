import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import LeafDot from '@/components/LeafDot';

/**
 * UNLISTED subscriber-only freebie — "The Canadian Thanksgiving Gratitude
 * Workout" (Canadian Thanksgiving issue).
 *
 * Standalone route, not a `data/freebies.ts` entry: that machinery renders
 * FreeDownloadButton + FreebiePeek, which email-gate the download. Same
 * pattern as the other Human Note gifts. Do NOT use the `hidden` product
 * flag — that 404s publicly. Reachable only by direct URL; keep it out of nav.
 */

const PDF = '/downloads/canadian-thanksgiving-gratitude-workout.pdf';

export const metadata: Metadata = {
  title:
    'The Canadian Thanksgiving Gratitude Workout — for Human Note readers | Lili Human',
  description:
    'A 15-minute reset to celebrate your health, honour your body, and move with gratitude. Five moves, three rounds, with an easier option for every move.',
  robots: { index: false, follow: false },
};

const moves = [
  'Squat to Reach',
  'Counter Push-Ups',
  'Reverse Lunges',
  'March with Gratitude Reach',
  'Standing Twist',
];

export default function GratitudeWorkoutPage() {
  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-24">
      <span className="section-eyebrow">
        <LeafDot /> A Human Note freebie
      </span>

      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mt-4">
        {/* Left: copy + direct, un-gated download */}
        <div>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-brown leading-tight">
            The Canadian Thanksgiving{' '}
            <em className="italic text-sage">Gratitude Workout</em>
          </h1>
          <p className="font-body text-lg text-mocha/80 mt-5 leading-relaxed">
            A 15-minute reset to celebrate your health, honour your body, and
            move with gratitude.
          </p>

          <p className="font-body text-base text-mocha/75 mt-5 leading-relaxed">
            45 seconds of movement, 15 seconds of rest or transition, five
            moves, three rounds — about 15 minutes in total. Every move has an
            easier option.
          </p>

          <ul className="mt-5 space-y-2">
            {moves.map((m) => (
              <li key={m} className="flex gap-3">
                <span className="text-peach text-xl leading-none mt-0.5">&#9825;</span>
                <span className="font-body text-sm text-mocha/70 leading-relaxed">
                  {m}
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
              Download the workout &rarr;
            </a>
            <p className="font-body text-xs text-mocha/50 mt-3 leading-relaxed">
              This one&rsquo;s just for Human Note readers. No sign-up, no catch.
            </p>
          </div>

          {/* Required safety line */}
          <p className="font-body text-xs text-mocha/60 mt-6 leading-relaxed border-l-2 border-peach-light/60 pl-4">
            If you have a health condition, are recovering from an injury, or
            are postpartum, check with your doctor or a qualified professional
            before starting. Stop if anything hurts, and use the easier option
            for any move.
          </p>

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

        {/* Right: the infographic */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-peach-light/40">
            <Image
              src="/images/freebies/canadian-thanksgiving-gratitude-workout-cover.png"
              alt="The Canadian Thanksgiving Gratitude Workout — five moves, three rounds, 15 minutes"
              width={1055}
              height={1491}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
