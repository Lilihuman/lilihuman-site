'use client';

import { useState } from 'react';
import Image from 'next/image';
import LeafDot from '@/components/LeafDot';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/lili${i + 1}/800/600`,
  thumb: `https://picsum.photos/seed/lili${i + 1}/400/300`,
  alt: `Gallery photo ${i + 1}`,
  caption: [
    'Morning light at the lake house',
    'Nico and Olive in the garden',
    'Sunday pancake ritual',
    'Post-workout sunrise',
    'The reading corner we built last winter',
    'Farmers market haul',
    'Workout by the lake',
    "Nico's first 'help' with baking",
    'The workshop project',
    'Golden hour walk',
    'Herb garden progress',
    'Family movie night setup',
  ][i],
}));

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  function prev() {
    setLightbox((l) => (l !== null ? (l - 1 + photos.length) % photos.length : null));
  }
  function next() {
    setLightbox((l) => (l !== null ? (l + 1) % photos.length : null));
  }

  return (
    <>
      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-brown/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-cream/60 hover:text-cream transition-colors p-2"
            onClick={() => setLightbox(null)}
          >
            <X size={24} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/60 hover:text-cream transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={32} />
          </button>
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
            <p className="font-body text-sm text-cream/60 text-center mt-3">
              {photos[lightbox].caption}
            </p>
            <p className="font-body text-xs text-cream/30 text-center mt-1">
              {lightbox + 1} / {photos.length}
            </p>
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/60 hover:text-cream transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}

      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-12">
        <span className="section-eyebrow">
          <LeafDot /> Photo gallery
        </span>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mt-2 leading-tight max-w-2xl">
          Moments from <em className="italic text-peach">our life</em>
        </h1>
        <p className="font-body text-lg text-mocha/80 mt-5 max-w-xl leading-relaxed">
          The ordinary days, the golden light moments, and everything in between.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {photos.map((photo, i) => (
            <button
              key={photo.id}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setLightbox(i)}
            >
              <Image
                src={photo.thumb}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/30 transition-colors duration-300 flex items-end">
                <p className="font-body text-xs text-white/0 group-hover:text-white/90 transition-colors duration-300 p-3 leading-snug">
                  {photo.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
        <p className="font-body text-xs text-mocha/40 text-center mt-6">
          Click any photo to open the full-size view
        </p>
      </section>
    </>
  );
}
