import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import LeafDot from '@/components/LeafDot';
import {
  MOVEMENT_DISCLAIMER,
  getMovementGuide,
  movementGuides,
} from '@/data/movementGuides';

/**
 * Shared layout for the eight "Movement Built Into Your Day" one-sheet guides.
 * Each route in app/free/<slug>/page.tsx is a two-line wrapper around this.
 * Content lives in data/movementGuides.ts.
 */

const THUMB_W = 1672;
const THUMB_H = 941;

const pdfFor = (slug: string) => `/downloads/${slug}.pdf`;
const thumbFor = (slug: string) => `/images/freebies/${slug}-thumb.png`;

export function movementGuideMetadata(slug: string): Metadata {
  const g = getMovementGuide(slug);
  const title = `${g.name} — Free 1-Sheet Guide | Lili Human`;
  const description = `${g.tagline} ${g.intro}`;
  const url = `/free/${g.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: g.tagline,
      url,
      siteName: 'Lili Human',
      type: 'article',
      images: [{ url: thumbFor(g.slug), width: THUMB_W, height: THUMB_H, alt: g.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: g.tagline,
      images: [thumbFor(g.slug)],
    },
  };
}

export default function MovementGuidePage({ slug }: { slug: string }) {
  const g = getMovementGuide(slug);
  const others = movementGuides.filter((x) => x.slug !== g.slug);

  return (
    <>
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-16">
        <span className="section-eyebrow">
          <LeafDot /> Free 1-sheet guide &middot; Movement built into your day
        </span>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mt-4">
          {/* Left: copy + direct download */}
          <div>
            <h1 className="font-heading text-5xl md:text-6xl font-light text-brown leading-tight">
              {g.titleLead} <em className="italic text-sage">{g.titleAccent}</em>
            </h1>
            <p className="font-body text-lg text-mocha/80 mt-5 leading-relaxed">{g.tagline}</p>
            <p className="font-body text-base text-mocha/75 mt-4 leading-relaxed">{g.intro}</p>

            <div className="mt-8">
              <a href={pdfFor(g.slug)} download className="btn-primary inline-block text-sm">
                Download the guide &rarr;
              </a>
              <p className="font-body text-xs text-mocha/50 mt-3 leading-relaxed max-w-sm">
                Free, no sign-up &mdash; one printable page. Stick it on the fridge, the
                mirror or the laundry room wall.
              </p>
            </div>

            <p className="font-body text-sm text-mocha/60 mt-8">
              The story behind it:{' '}
              <Link href="/blog/move-while-you-wait" className="text-sage underline underline-offset-4">
                Move while you wait
              </Link>
            </p>
          </div>

          {/* Right: Lili's promo thumbnail */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-peach-light/40">
            <Image
              src={thumbFor(g.slug)}
              alt={`${g.name} — ${g.tagline} A free one-sheet guide from Lili Human.`}
              width={THUMB_W}
              height={THUMB_H}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16">
        <h2 className="section-heading">
          What&rsquo;s <em className="italic text-sage">inside</em>
        </h2>
        <p className="font-body text-base text-mocha/75 mt-3 leading-relaxed max-w-2xl">
          {g.steps.length} everyday moments, each with one small move and an easier option.
        </p>

        <ol className="grid sm:grid-cols-2 gap-4 mt-8">
          {g.steps.map((s, i) => (
            <li key={`${s.task}-${i}`} className="card flex gap-4 hover:translate-y-0">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-peach text-white font-body text-sm font-semibold flex items-center justify-center">
                {i + 1}
              </span>
              <div>
                <p className="font-heading text-xl text-brown leading-snug">{s.task}</p>
                <p className="font-body text-xs font-semibold tracking-widest uppercase text-peach mt-1">
                  {s.move}
                </p>
                <p className="font-body text-sm text-mocha/80 mt-2 leading-relaxed">{s.how}</p>
                <p className="font-body text-xs text-sage mt-2 leading-relaxed">
                  <span className="font-semibold">Easier:</span> {s.easier}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 rounded-2xl bg-sage/10 border border-sage-light/60 p-6">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-sage">
            Move-safely reminder
          </p>
          <p className="font-body text-base text-brown mt-2 leading-relaxed">{g.safety}</p>
          <p className="font-body text-xs text-mocha/60 mt-3 leading-relaxed">{MOVEMENT_DISCLAIMER}</p>
        </div>

        <div className="mt-8 text-center">
          <a href={pdfFor(g.slug)} download className="btn-primary inline-block text-sm">
            Download {g.name} &rarr;
          </a>
        </div>
      </section>

      {/* The rest of the series */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-24">
        <h2 className="section-heading">
          More from the <em className="italic text-sage">series</em>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">
          {others.map((o) => (
            <Link key={o.slug} href={`/free/${o.slug}`} className="group block">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-peach-light/40">
                <Image
                  src={thumbFor(o.slug)}
                  alt={o.name}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="font-heading text-lg text-brown mt-2 leading-snug group-hover:text-peach">
                {o.name}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
