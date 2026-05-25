'use client';

import { useState } from 'react';
import Image from 'next/image';
import LeafDot from '@/components/LeafDot';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  { src: '/images/gallery/paragliding 013.jpg', caption: 'Paragliding' },
  { src: '/images/gallery/paragliding 008.jpg', caption: 'Paragliding' },
  { src: '/images/gallery/whistler bungee jump.JPG', caption: 'Whistler bungee jump' },
  { src: '/images/gallery/highest bungee jump in the world south africa.JPG', caption: 'Highest bungee jump in the world — South Africa' },
  { src: '/images/gallery/hiking an active volcano in guatemala.JPG', caption: 'Hiking an active volcano in Guatemala' },
  { src: '/images/gallery/takal guatemala.JPG', caption: 'Tikal, Guatemala' },
  { src: '/images/gallery/caye caulker belize.JPG', caption: 'Caye Caulker, Belize' },
  { src: '/images/gallery/Las vegas.JPG', caption: 'Las Vegas' },
  { src: '/images/gallery/pocna isla mujeres.JPG', caption: 'Pocna, Isla Mujeres' },
  { src: '/images/gallery/havana cuba.JPG', caption: 'Havana, Cuba' },
  { src: '/images/gallery/sandles bahamas.jpg', caption: 'Bahamas' },
  { src: '/images/gallery/gastown vancouver.jpg', caption: 'Gastown, Vancouver' },
  { src: '/images/gallery/stanley park vancouver.jpg', caption: 'Stanley Park, Vancouver' },
  { src: '/images/gallery/surfing tofino bc.jpg', caption: 'Surfing in Tofino, BC' },
  { src: '/images/gallery/westcoast trails.JPG', caption: 'West Coast trails' },
  { src: '/images/gallery/rockies.JPG', caption: 'The Rockies' },
  { src: '/images/gallery/south africa.JPG', caption: 'South Africa' },
  { src: '/images/gallery/south africa (1).JPG', caption: 'South Africa' },
  { src: '/images/gallery/south africa (2).JPG', caption: 'South Africa' },
  { src: '/images/gallery/south africa (3).JPG', caption: 'South Africa' },
  { src: '/images/gallery/colosseum rome.JPG', caption: 'Colosseum, Rome' },
  { src: '/images/gallery/florence italy.JPG', caption: 'Florence, Italy' },
  { src: '/images/gallery/pisa italy.JPG', caption: 'Pisa, Italy' },
  { src: '/images/gallery/venice italy.JPG', caption: 'Venice, Italy' },
  { src: '/images/gallery/vence italy.JPG', caption: 'Vence, Italy' },
  { src: '/images/gallery/verona italy juliet.JPG', caption: "Verona, Italy — Juliet's balcony" },
  { src: '/images/gallery/london.JPG', caption: 'London' },
  { src: '/images/gallery/nothingham.JPG', caption: 'Nottingham' },
  { src: '/images/gallery/louvre.JPG', caption: 'The Louvre, Paris' },
  { src: '/images/gallery/notre-dame cathedral of paris.JPG', caption: 'Notre-Dame Cathedral, Paris' },
  { src: '/images/gallery/catacomb.JPG', caption: 'The Catacombs, Paris' },
  { src: '/images/gallery/kicked a bunny in paris.JPG', caption: 'Kicked a bunny in Paris' },
  { src: '/images/gallery/escargo in paris.JPG', caption: 'Escargot in Paris' },
  { src: '/images/gallery/nice france.JPG', caption: 'Nice, France' },
  { src: '/images/gallery/greece (1).jpg', caption: 'Greece' },
  { src: '/images/gallery/greece (2).jpg', caption: 'Greece' },
  { src: '/images/gallery/greece (3).jpg', caption: 'Greece' },
  { src: '/images/gallery/greece (4).jpg', caption: 'Greece' },
  { src: '/images/gallery/greece (5).jpg', caption: 'Greece' },
  { src: '/images/gallery/greece (6).jpg', caption: 'Greece' },
  { src: '/images/gallery/greece (7).jpg', caption: 'Greece' },
  { src: '/images/gallery/greece (8).jpg', caption: 'Greece' },
  { src: '/images/gallery/greece (9).jpg', caption: 'Greece' },
  { src: '/images/gallery/greece (10).jpg', caption: 'Greece' },
  { src: '/images/gallery/greece (11).jpg', caption: 'Greece' },
  { src: '/images/gallery/elephant mud bath thailand.jpg', caption: 'Elephant mud bath, Thailand' },
  { src: '/images/gallery/swimming with elephants thailand.jpg', caption: 'Swimming with elephants, Thailand' },
  { src: '/images/gallery/thailand.jpg', caption: 'Thailand' },
  { src: '/images/gallery/cambodia.jpg', caption: 'Cambodia' },
  { src: '/images/gallery/halong bay vientnam.jpg', caption: 'Ha Long Bay, Vietnam' },
  { src: '/images/gallery/mud fishing vietnam.jpg', caption: 'Mud fishing, Vietnam' },
  { src: '/images/gallery/bathman.jpg', caption: 'Batman' },
  { src: '/images/gallery/engagement photos.jpg', caption: 'Engagement' },
  { src: '/images/gallery/engagement photos 2.jpg', caption: 'Engagement' },
  { src: '/images/gallery/wedding.jpg', caption: 'Wedding day' },
  { src: '/images/gallery/wedding dance.jpg', caption: 'Wedding dance' },
  { src: '/images/gallery/pregnancy  (1).JPG', caption: 'Pregnancy' },
  { src: '/images/gallery/pregnancy  (2).JPG', caption: 'Pregnancy' },
  { src: '/images/gallery/pregnancy  (3).JPG', caption: 'Pregnancy' },
  { src: '/images/gallery/baby olive.jpg', caption: 'Baby Olive' },
  { src: '/images/gallery/nico infant photos (1).JPG', caption: 'Baby Nico' },
  { src: '/images/gallery/nico infant photos (2).JPG', caption: 'Baby Nico' },
  { src: '/images/gallery/nico infant photos (3).JPG', caption: 'Baby Nico' },
  { src: '/images/gallery/nico infant photos (4).JPG', caption: 'Baby Nico' },
  { src: '/images/gallery/olive paddleboarding.jpg', caption: 'Olive paddleboarding' },
].map((p, i) => ({ ...p, id: i + 1, alt: p.caption }));

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

      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-12">
        <span className="section-eyebrow">
          <LeafDot /> Photo gallery
        </span>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mt-2 leading-tight max-w-2xl">
          A life lived <em className="italic text-peach">out loud</em>
        </h1>
        <p className="font-body text-lg text-mocha/80 mt-5 max-w-xl leading-relaxed">
          Adventures, ordinary days, and everything in between.
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
        <p className="font-body text-xs text-mocha/40 text-center mt-6">
          Click any photo to open the full-size view
        </p>
      </section>
    </>
  );
}
