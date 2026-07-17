import Image from 'next/image';
import Link from 'next/link';
import LeafDot from '@/components/LeafDot';
import FreeDownloadButton from '@/components/FreeDownloadButton';

export const metadata = {
  title: 'Free Memory-Keeping Guide for Busy Moms | Lili Human',
  description:
    'A free, no-pressure memory-keeping starter — turn ordinary days into stories your kids will treasure. The mindset, 10 milestone prompts, a 5-minute weekly ritual, and a printable keepsake page.',
};

const benefits = [
  {
    title: 'The Memory-Keeper’s Mindset',
    body: 'Three simple shifts that make memory-keeping feel doable — create moments, keep it real, and start today.',
  },
  {
    title: '10 Everyday Milestones Worth a Story',
    body: 'A printable checklist of little victories your child will love seeing themselves in.',
  },
  {
    title: 'Your 5-Minute Weekly Ritual',
    body: 'One small moment a week. Over a year, that’s 52 tiny stories — plus a fill-in keepsake page to start tonight.',
  },
];

export default function MemoryKeepingFreebie() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-12">
        <span className="section-eyebrow">
          <LeafDot /> A free gift for busy moms
        </span>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mt-4">
          {/* Left: copy + opt-in */}
          <div>
            <h1 className="font-heading text-5xl md:text-6xl font-light text-brown leading-tight">
              Everyday Moments,{' '}
              <em className="italic text-sage">Everlasting</em> Memories
            </h1>
            <p className="font-body text-lg text-mocha/80 mt-5 leading-relaxed">
              Turn ordinary days into stories your kids will treasure &mdash; a
              simple, no-pressure memory-keeping guide. No perfect scrapbooks
              required.
            </p>

            <ul className="mt-7 space-y-4">
              {benefits.map((b) => (
                <li key={b.title} className="flex gap-3">
                  <span className="text-peach text-xl leading-none mt-0.5">
                    &#9825;
                  </span>
                  <span>
                    <span className="font-heading text-lg text-brown block">
                      {b.title}
                    </span>
                    <span className="font-body text-sm text-mocha/70 leading-relaxed">
                      {b.body}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 max-w-sm">
              <FreeDownloadButton
                filePath="/downloads/memory-keeping-starter.pdf"
                productName="Memory-Keeping Starter"
              />
              <p className="font-body text-xs text-mocha/50 mt-3">
                No spam &mdash; just the guide and the occasional note.
                Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Right: preview */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-peach-light/40">
              <Image
                src="/images/free-workouts/memory-keeping-starter.png"
                alt="Everyday Moments, Everlasting Memories — free memory-keeping guide preview"
                width={1536}
                height={1024}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Soft workbook upsell */}
      <section className="max-w-3xl mx-auto px-5 md:px-8 pb-24">
        <div className="card text-center">
          <h2 className="font-heading text-2xl font-semibold text-brown">
            Want to turn these moments into a storybook your child stars in?
          </h2>
          <p className="font-body text-sm text-mocha/70 mt-3 leading-relaxed max-w-xl mx-auto">
            The <strong>AI Comic Book Creation Workbook</strong> walks you
            through making a personalized storybook &mdash; your child as the
            hero, their world, their little victories &mdash; even if you&rsquo;re
            not an illustrator.
          </p>
          <Link
            href="/shop"
            className="btn-primary inline-block mt-6 text-sm"
          >
            See the Workbook &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
