'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Play, FileText, Clock, Dumbbell, BarChart3 } from 'lucide-react';
import LeafDot from '@/components/LeafDot';
import { exercises } from './exercises';

type LibraryItem = {
  id: string;
  type: 'video' | 'article' | 'exercise';
  title: string;
  description: string;
  category: string;
  duration?: string; // videos & articles
  level?: string; // exercises
  image?: string; // optional thumbnail
  href: string;
};

// Edit this list to add your own videos and articles.
// `type` controls the badge/icon ('video' or 'article').
// `href` can be a YouTube/Vimeo link, an internal blog post, or any URL.
// Exercises are added separately in ./exercises.ts and merged in below.
const media: LibraryItem[] = [
  {
    id: 'full-body-follow-along',
    type: 'video',
    title: '15-Minute Full Body Follow-Along',
    description: 'Press play and move with me. A no-equipment, full-body session you can do anywhere, any morning.',
    category: 'Strength',
    duration: '15 min',
    href: '#',
  },
  {
    id: 'postpartum-core',
    type: 'video',
    title: 'Gentle Postpartum Core Reconnect',
    description: 'Rebuild your deep core safely with breath-led movements designed for the early postpartum weeks.',
    category: 'Postpartum',
    duration: '12 min',
    href: '#',
  },
  {
    id: 'morning-mobility',
    type: 'video',
    title: 'Morning Mobility Flow',
    description: 'Wake your body up with this gentle mobility routine — perfect before a workout or to start the day.',
    category: 'Mobility',
    duration: '10 min',
    href: '#',
  },
  {
    id: 'why-strength-training',
    type: 'article',
    title: 'Why Strength Training Matters for Moms',
    description: 'The honest case for lifting weights postpartum — for your bones, your energy, and the life you carry.',
    category: 'Strength',
    duration: '6 min read',
    href: '#',
  },
  {
    id: 'protein-basics',
    type: 'article',
    title: 'Protein Basics: How Much Do You Actually Need?',
    description: 'A no-nonsense guide to hitting your protein goals without obsessing over every meal.',
    category: 'Nutrition',
    duration: '5 min read',
    href: '#',
  },
  {
    id: 'workout-with-toddler',
    type: 'video',
    title: 'Move With Me: Toddler Edition',
    description: 'Sneak in strength and cardio while your little one plays along. Movement that works for two.',
    category: 'Family',
    duration: '20 min',
    href: '#',
  },
  {
    id: 'rest-days',
    type: 'article',
    title: 'Why Rest Days Aren’t Cheating',
    description: 'Recovery is part of the program, not a break from it. Here’s how to rest without guilt.',
    category: 'Mobility',
    duration: '4 min read',
    href: '#',
  },
  {
    id: 'cardio-no-running',
    type: 'video',
    title: 'Cardio Without Running',
    description: 'Get your heart rate up with low-impact cardio that’s kind to your joints and pelvic floor.',
    category: 'Cardio',
    duration: '18 min',
    href: '#',
  },
];

// Pull exercises (from exercises.ts) into the same grid.
const exerciseItems: LibraryItem[] = exercises.map((e) => ({
  id: e.slug,
  type: 'exercise',
  title: e.name,
  description: e.summary,
  category: e.category,
  level: e.level,
  image: e.thumbnail,
  href: `/fitness/library/${e.slug}`,
}));

// The videos & articles above are placeholders — no real content exists yet
// (their `href` is '#'). Keep them defined so they're easy to bring back:
// once real videos/articles exist, give each a real `href` and flip this flag
// to `true` to show them in the Library again.
const SHOW_MEDIA = false;

const library: LibraryItem[] = SHOW_MEDIA ? [...exerciseItems, ...media] : [...exerciseItems];

const typeFilters = ['All', 'Exercises', 'Videos', 'Articles'] as const;
type TypeFilter = (typeof typeFilters)[number];

const categories = ['All', ...Array.from(new Set(library.map((i) => i.category)))];

function isExternal(href: string) {
  return href.startsWith('http');
}

const typeMeta = {
  video: { label: 'Video', cta: 'Watch now', banner: 'bg-gradient-to-br from-peach/25 to-sage/15' },
  article: { label: 'Article', cta: 'Read now', banner: 'bg-gradient-to-br from-sage/20 to-peach/10' },
  exercise: { label: 'Exercise', cta: 'View exercise', banner: 'bg-gradient-to-br from-brown/15 to-peach/15' },
} as const;

function TypeIcon({ type, size = 22 }: { type: LibraryItem['type']; size?: number }) {
  if (type === 'video') return <Play size={size} className="fill-peach text-peach ml-0.5" />;
  if (type === 'article') return <FileText size={size} className="text-sage" />;
  return <Dumbbell size={size} className="text-brown" />;
}

function LibraryCard({ item }: { item: LibraryItem }) {
  const meta = typeMeta[item.type];
  const linkProps = isExternal(item.href)
    ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
    : { href: item.href };

  return (
    <Link {...linkProps} className="card flex flex-col group">
      {/* Thumbnail / banner */}
      <div className={`relative rounded-2xl overflow-hidden h-44 mb-4 flex items-center justify-center ${meta.banner}`}>
        {item.image && (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-wide bg-white/80 backdrop-blur-sm text-brown rounded-full px-2.5 py-1">
          <TypeIcon type={item.type} size={12} />
          {meta.label}
        </span>
        {!item.image && (
          <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/85 shadow-sm transition-transform duration-200 group-hover:scale-110">
            <TypeIcon type={item.type} />
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 flex-wrap mb-2">
        <span className="inline-block font-body text-xs font-medium text-mocha/60 bg-mocha/10 rounded-full px-2.5 py-1">
          {item.category}
        </span>
        {item.duration && (
          <span className="inline-flex items-center gap-1 font-body text-xs text-mocha/50">
            <Clock size={12} /> {item.duration}
          </span>
        )}
        {item.level && (
          <span className="inline-flex items-center gap-1 font-body text-xs text-mocha/50">
            <BarChart3 size={12} /> {item.level}
          </span>
        )}
      </div>

      <h3 className="font-heading text-xl font-semibold text-brown mb-2 group-hover:text-peach transition-colors">
        {item.title}
      </h3>
      <p className="font-body text-sm text-mocha/70 leading-relaxed flex-1">{item.description}</p>

      <span className="mt-5 font-body text-sm font-semibold text-peach inline-flex items-center gap-1">
        {meta.cta} →
      </span>
    </Link>
  );
}

export default function FitnessLibrary() {
  const [type, setType] = useState<TypeFilter>('All');
  const [category, setCategory] = useState('All');

  const filtered = library.filter((item) => {
    const matchesType =
      type === 'All' ||
      (type === 'Videos' && item.type === 'video') ||
      (type === 'Articles' && item.type === 'article') ||
      (type === 'Exercises' && item.type === 'exercise');
    const matchesCategory = category === 'All' || item.category === category;
    return matchesType && matchesCategory;
  });

  // Group the filtered items by category so the section is organized by
  // category. Categories keep their original order (from `categories` above).
  const grouped = categories
    .filter((c) => c !== 'All')
    .map((c) => ({ category: c, items: filtered.filter((i) => i.category === c) }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-10">
        <span className="section-eyebrow">
          <LeafDot /> Fitness Library
        </span>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mt-2 leading-tight max-w-2xl">
          Watch, read, <em className="italic text-sage">and move.</em>
        </h1>
        <p className="font-body text-lg text-mocha/80 mt-5 max-w-xl leading-relaxed">
          Follow-along videos, honest articles, and a growing library of individual exercises with
          perfect-form guides — strength, mobility, postpartum, and more. Browse, learn, and move at your own pace.
        </p>
      </section>

      {/* Filters */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-10">
        <div className="flex flex-col gap-4">
          {/* Type filters (Exercises / Videos / Articles) only matter once media
              is enabled — with exercises only, hide the row. Re-enabled by SHOW_MEDIA. */}
          {SHOW_MEDIA && (
          <div className="flex items-center gap-2 flex-wrap">
            {typeFilters.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`font-body text-sm font-medium rounded-pill px-4 py-2 transition-colors ${
                  type === t ? 'bg-brown text-cream' : 'text-mocha hover:bg-mocha/10'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          )}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`font-body text-xs font-medium rounded-pill px-3 py-1.5 border transition-colors ${
                  category === c
                    ? 'bg-peach text-white border-peach'
                    : 'text-mocha/70 border-peach-light/50 hover:border-peach hover:text-peach'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-24">
        {grouped.length > 0 ? (
          <div className="flex flex-col gap-14">
            {grouped.map((group) => (
              <div key={group.category}>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="font-heading text-2xl font-semibold text-brown">{group.category}</h2>
                  <span className="font-body text-xs font-medium text-mocha/60 bg-mocha/10 rounded-full px-2.5 py-1">
                    {group.items.length}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.items.map((item) => (
                    <LibraryCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="font-body text-mocha/60 text-center py-16">
            Nothing here yet for this filter — try another category.
          </p>
        )}
      </section>
    </>
  );
}
