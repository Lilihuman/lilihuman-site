import Link from 'next/link';
import Image from 'next/image';
import LeafDot from '@/components/LeafDot';
import { categories, photos, photosInCategory } from './photos';

export const metadata = {
  title: 'Photo Gallery — Lili Human',
  description: 'Adventures, ordinary days, and everything in between.',
};

export default function GalleryLanding() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-12">
        <span className="section-eyebrow">
          <LeafDot /> Photo gallery
        </span>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mt-2 leading-tight max-w-2xl">
          A life lived <em className="italic text-peach">out loud</em>
        </h1>
        <p className="font-body text-lg text-mocha/80 mt-5 max-w-xl leading-relaxed">
          Adventures, ordinary days, and everything in between. Pick a collection to explore.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const inCat = photosInCategory(cat.slug);
            const cover = inCat[0];
            return (
              <Link
                key={cat.slug}
                href={`/gallery/${cat.slug}`}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-cream-dark border border-peach-light/30"
              >
                {cover ? (
                  <Image
                    src={cover.src}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-peach/15 to-sage/10" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brown/80 via-brown/20 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h2 className="font-heading text-3xl font-light text-cream leading-tight">
                    {cat.title}
                  </h2>
                  <p className="font-body text-sm text-cream/70 mt-1 leading-snug">
                    {cat.description}
                  </p>
                  <span className="font-body text-xs text-cream/50 mt-3">
                    {inCat.length} {inCat.length === 1 ? 'photo' : 'photos'} →
                  </span>
                </div>
              </Link>
            );
          })}

          {/* All photos */}
          <Link
            href="/gallery/all"
            className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-brown flex flex-col justify-end p-6"
          >
            <h2 className="font-heading text-3xl font-light text-cream leading-tight">
              All photos
            </h2>
            <p className="font-body text-sm text-cream/70 mt-1 leading-snug">
              Every shot in one place.
            </p>
            <span className="font-body text-xs text-peach mt-3">
              {photos.length} photos →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
