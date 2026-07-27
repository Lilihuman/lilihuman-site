import Image from 'next/image';

/**
 * "Peek Inside" section for PAID product pages.
 *
 * Shows a couple of real sample pages from the product — watermarked and on an
 * angle — inside a branded card, so a buyer can see the format and quality
 * without getting the whole thing for free. The preview images are derived from
 * the slug (/images/previews/<slug>-p1.png and -p2.png), so no per-product
 * wiring is needed beyond dropping the images in.
 *
 * Only rendered when those images exist (the shop page passes a slug that has a
 * ProductLanding). Products without sample pages — e.g. the custom program —
 * simply don't render this.
 */
interface Props {
  slug: string;
  caption?: string;
}

export default function ProductPeek({ slug, caption }: Props) {
  const p1 = `/images/previews/${slug}-p1.png`;
  const p2 = `/images/previews/${slug}-p2.png`;

  return (
    <section className="max-w-5xl mx-auto px-5 md:px-8">
      <div className="relative overflow-hidden rounded-[28px] border border-peach-light/50 bg-gradient-to-b from-[#FBF3EA] to-[#F6ECDF] px-6 py-10 md:px-12 md:py-12">
        <span className="font-script text-3xl text-peach">Lili Human</span>
        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-brown mt-1 leading-none">
          Peek Inside
        </h2>
        <p className="font-body text-sm md:text-base text-mocha/70 mt-2">
          {caption ?? 'A few sample pages — the rest is yours after you buy.'}
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
          {/* Left blurb */}
          <div>
            <h3 className="font-heading text-2xl md:text-3xl text-brown leading-tight">
              See the format,
              <br />
              not the whole thing
            </h3>
            <p className="font-body text-sm text-mocha/70 mt-3 leading-relaxed">
              Real pages from inside — the layout, the quality, the way it&rsquo;s built. The
              full product stays yours to keep after you buy.
            </p>
          </div>

          {/* Tilted sample pages */}
          <div className="relative flex justify-center items-start">
            <span className="absolute left-1/2 -translate-x-1/2 top-[42%] z-10 bg-peach text-white font-body text-xs font-semibold rounded-full px-4 py-1.5 shadow-lg whitespace-nowrap">
              Sample pages
            </span>
            <div className="w-[48%] max-w-[280px] -rotate-6 rounded-xl shadow-2xl overflow-hidden border border-peach-light/40 bg-white">
              <Image src={p1} alt="Sample page" width={760} height={1140} className="w-full h-auto" />
            </div>
            <div className="w-[48%] max-w-[280px] rotate-[5deg] -ml-5 mt-6 rounded-xl shadow-2xl overflow-hidden border border-peach-light/40 bg-white">
              <Image src={p2} alt="Sample page" width={760} height={1140} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
