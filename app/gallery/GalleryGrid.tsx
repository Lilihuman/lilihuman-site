'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { PhotoWithMeta } from './photos';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryGrid({ photos }: { photos: PhotoWithMeta[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  function prev() {
    setLightbox((l) => (l !== null ? (l - 1 + photos.length) % photos.length : null));
  }
  function next() {
    setLightbox((l) => (l !== null ? (l + 1) % photos.length : null));
  }

  if (photos.length === 0) {
    return (
      <div className="border border-dashed border-peach-light/60 rounded-3xl py-20 px-6 text-center">
        <p className="font-heading text-2xl font-light text-brown">No photos here yet</p>
        <p className="font-body text-sm text-mocha/50 mt-2">
          Check back soon — this collection is still being filled.
        </p>
      </div>
    );
  }

  return (
    <>
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
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {photos.map((photo, i) => (
          <button
            key={photo.id}
            className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
            onClick={() => setLightbox(i)}
          >
            <Image
              src={photo.src}
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
    </>
  );
}
