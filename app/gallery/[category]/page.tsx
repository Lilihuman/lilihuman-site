import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import LeafDot from '@/components/LeafDot';
import GalleryGrid from '../GalleryGrid';
import { categories, photos, photosInCategory, categoryBySlug } from '../photos';

export function generateStaticParams() {
  return [...categories.map((c) => ({ category: c.slug })), { category: 'all' }];
}

export function generateMetadata({ params }: { params: { category: string } }) {
  if (params.category === 'all') {
    return { title: 'All Photos — Lili Human' };
  }
  const cat = categoryBySlug(params.category);
  return { title: cat ? `${cat.title} — Lili Human` : 'Gallery — Lili Human' };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const isAll = params.category === 'all';
  const cat = categoryBySlug(params.category);

  if (!isAll && !cat) notFound();

  const list = isAll ? photos : photosInCategory(cat!.slug);
  const eyebrow = isAll ? 'All photos' : cat!.eyebrow;
  const title = isAll ? 'All photos' : cat!.title;
  const description = isAll
    ? 'Every shot in one place — adventures, ordinary days, and everything in between.'
    : cat!.description;

  return (
    <>
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-12">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-1.5 font-body text-sm text-mocha/60 hover:text-peach transition-colors mb-6"
        >
          <ArrowLeft size={16} /> All collections
        </Link>
        <span className="section-eyebrow">
          <LeafDot /> {eyebrow}
        </span>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mt-2 leading-tight max-w-2xl">
          {title}
        </h1>
        <p className="font-body text-lg text-mocha/80 mt-5 max-w-xl leading-relaxed">
          {description}
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-24">
        <GalleryGrid photos={list} />
        {list.length > 0 && (
          <p className="font-body text-xs text-mocha/40 text-center mt-6">
            Click any photo to open the full-size view
          </p>
        )}
      </section>
    </>
  );
}
