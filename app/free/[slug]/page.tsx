import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import LeafDot from '@/components/LeafDot';
import FreeDownloadButton from '@/components/FreeDownloadButton';
import { freebieLandings, getFreebieBySlug } from '@/data/freebies';
import { getProductById } from '@/data/products';
import { getImageSize } from '@/lib/imageSize';

export function generateStaticParams() {
  return freebieLandings.map((f) => ({ slug: f.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const freebie = getFreebieBySlug(params.slug);
  if (!freebie) return {};

  const product = getProductById(freebie.productId);
  const title = `${product?.name || freebie.headline} — Free Download | Lili Human`;
  const url = `/free/${freebie.slug}`;

  // Per-page Open Graph so these read properly when pinned or shared. The
  // site-wide default carries no image, which makes for a dead-looking pin.
  return {
    title,
    description: freebie.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: freebie.metaDescription,
      url,
      siteName: 'Lili Human',
      type: 'article',
      images: product?.image
        ? [{ url: product.image, ...getImageSize(product.image), alt: product.name }]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: freebie.metaDescription,
      images: product?.image ? [product.image] : [],
    },
  };
}

export default function FreebieLandingPage({ params }: { params: { slug: string } }) {
  const freebie = getFreebieBySlug(params.slug);
  if (!freebie) notFound();

  const product = getProductById(freebie.productId);
  if (!product || !product.filePath) notFound();

  return (
    <>
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-12">
        <span className="section-eyebrow">
          <LeafDot /> {freebie.eyebrow}
        </span>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mt-4">
          {/* Left: copy + opt-in */}
          <div>
            <h1 className="font-heading text-5xl md:text-6xl font-light text-brown leading-tight">
              {freebie.headline}{' '}
              <em className="italic text-sage">{freebie.emphasis}</em>
            </h1>
            <p className="font-body text-lg text-mocha/80 mt-5 leading-relaxed">
              {freebie.subhead}
            </p>

            <ul className="mt-7 space-y-4">
              {freebie.benefits.map((b) => (
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
              <FreeDownloadButton filePath={product.filePath} productName={product.name} />
              <p className="font-body text-xs text-mocha/50 mt-3">
                No spam &mdash; just the download and the occasional note. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Right: preview */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-peach-light/40">
              {product.image && (
                <Image
                  src={product.image}
                  alt={`${product.name} — free download preview`}
                  {...getImageSize(product.image)}
                  className="w-full h-auto"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Soft upsell, only where one genuinely fits */}
      {freebie.upsell && (
        <section className="max-w-3xl mx-auto px-5 md:px-8 pb-24">
          <div className="card text-center">
            <h2 className="font-heading text-2xl font-semibold text-brown">
              {freebie.upsell.heading}
            </h2>
            <p className="font-body text-sm text-mocha/70 mt-3 leading-relaxed max-w-xl mx-auto">
              {freebie.upsell.body}
            </p>
            <Link href={freebie.upsell.href} className="btn-primary inline-block mt-6 text-sm">
              {freebie.upsell.label} &rarr;
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
