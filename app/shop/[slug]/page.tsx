import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import LeafDot from '@/components/LeafDot';
import FreeDownloadButton from '@/components/FreeDownloadButton';
import BuyButton from '@/components/BuyButton';
import ProductPeek from '@/components/ProductPeek';
import { products, getProductById, formatPrice } from '@/data/products';
import { getProductLandingBySlug } from '@/data/productLandings';

// One shareable detail page per product at /shop/<id> — built so a single
// product can be advertised with its own link instead of the whole shop. The
// id doubles as the slug (all product ids are already URL-safe).
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

const CATEGORY_LABEL: Record<string, string> = {
  program: 'Fitness program',
  printable: 'Printable',
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductById(params.slug);
  if (!product) return {};

  const landing = getProductLandingBySlug(params.slug);
  const priceLabel = product.price === 0 ? 'Free Download' : formatPrice(product.price);
  const title = `${product.name} — ${priceLabel} | Lili Human`;
  const url = `/shop/${product.id}`;
  const description = (landing?.metaDescription ?? product.description).slice(0, 160);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Lili Human',
      type: 'website',
      images: product.image ? [{ url: product.image, alt: product.name }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: product.image ? [product.image] : [],
    },
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductById(params.slug);
  if (!product) notFound();

  const landing = getProductLandingBySlug(params.slug);
  const isFree = product.price === 0;
  const categoryLabel = CATEGORY_LABEL[product.category] ?? 'Product';

  return (
    <>
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-16">
        <Link href="/shop" className="font-body text-sm text-mocha/60 hover:text-peach transition-colors">
          &larr; Back to the shop
        </Link>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start mt-6">
          {/* Image */}
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-peach-light/40 bg-cream">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-peach-light/30 via-cream to-sage-light/20 flex items-center justify-center">
                <span className="font-script text-3xl text-peach/40">{categoryLabel}</span>
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <span className="section-eyebrow">
              <LeafDot /> {landing?.eyebrow ?? categoryLabel}
            </span>

            <div className="flex items-center gap-2 mt-3 mb-1">
              {product.type === 'digital' && (
                <span className="inline-block font-body text-xs font-medium text-sage bg-sage/10 rounded-full px-2.5 py-1">
                  &#9889; Digital download
                </span>
              )}
              {product.featured && (
                <span className="inline-block font-body text-xs font-medium text-peach bg-peach/10 rounded-full px-2.5 py-1">
                  &#10024; Popular
                </span>
              )}
            </div>

            <h1 className="font-heading text-4xl md:text-5xl font-light text-brown leading-tight mt-2">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-3 mt-4">
              <span className="font-heading text-3xl font-semibold text-peach">
                {isFree ? 'Free' : formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="font-body text-base text-mocha/40 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <p className="font-body text-lg text-mocha/80 mt-5 leading-relaxed whitespace-pre-line">
              {landing?.subhead ?? product.description}
            </p>

            {product.note && (
              <p className="font-body text-sm text-mocha/60 italic mt-4 leading-relaxed">
                {product.note}
              </p>
            )}

            {product.tags && product.tags.length > 0 && (
              <div className="flex gap-2 flex-wrap mt-6">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block font-body text-xs font-medium text-mocha/60 bg-mocha/10 rounded-full px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-8 max-w-sm">
              {isFree && product.filePath ? (
                <>
                  <FreeDownloadButton filePath={product.filePath} productName={product.name} />
                  <p className="font-body text-xs text-mocha/50 mt-3">
                    No spam &mdash; just the download and the occasional note. Unsubscribe anytime.
                  </p>
                </>
              ) : (
                <>
                  <BuyButton productId={product.id} label="Add to cart →" />
                  <p className="font-body text-xs text-mocha/50 mt-3">
                    Secure checkout via Stripe &middot; your download is delivered instantly after payment.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Rich sales content — only for products with a ProductLanding entry */}
      {landing && (
        <div className="pb-24">
          {/* What's inside */}
          <section className="max-w-3xl mx-auto px-5 md:px-8">
            <h2 className="font-heading text-3xl md:text-4xl font-light text-brown text-center">
              What&rsquo;s inside
            </h2>
            <ul className="mt-8 space-y-4">
              {landing.whatsInside.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 bg-white border border-peach-light/40 rounded-2xl px-5 py-4"
                >
                  <span className="text-sage font-semibold text-lg leading-6">&#10003;</span>
                  <span className="font-body text-[15px] text-mocha/85 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Why it's worth it */}
          <section className="max-w-5xl mx-auto px-5 md:px-8 pt-16">
            <h2 className="font-heading text-3xl md:text-4xl font-light text-brown text-center">
              Why it&rsquo;s worth it
            </h2>
            <div className="grid md:grid-cols-3 gap-5 mt-8">
              {landing.benefits.map((b) => (
                <div key={b.title} className="bg-white border border-peach-light/40 rounded-2xl p-6">
                  <h3 className="font-heading text-xl text-brown">{b.title}</h3>
                  <p className="font-body text-sm text-mocha/75 mt-2 leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Peek inside */}
          {landing.peekInside && (
            <div className="pt-16">
              <ProductPeek slug={product.id} caption={landing.peekInside.caption} />
            </div>
          )}

          {/* Reassurance */}
          {landing.reassurance && (
            <p className="max-w-2xl mx-auto px-5 text-center font-body text-[15px] text-mocha italic pt-8">
              {landing.reassurance}
            </p>
          )}

          {/* Cross-sell */}
          {landing.crossSell && (
            <section className="max-w-2xl mx-auto px-5 md:px-8 pt-10">
              <div className="bg-white border border-peach-light/50 rounded-3xl p-8 text-center">
                <h2 className="font-heading text-2xl font-semibold text-brown">
                  {landing.crossSell.heading}
                </h2>
                <p className="font-body text-sm text-mocha/70 mt-3 leading-relaxed max-w-xl mx-auto">
                  {landing.crossSell.body}
                </p>
                <Link
                  href={landing.crossSell.href}
                  className="btn-primary inline-block mt-6 text-sm"
                >
                  {landing.crossSell.label} &rarr;
                </Link>
              </div>
            </section>
          )}
        </div>
      )}
    </>
  );
}
