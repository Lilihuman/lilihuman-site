import LeafDot from '@/components/LeafDot';
import Link from 'next/link';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface RecipeMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  time: string;
  servings: string;
  tag: string;
  image?: string;
}

const sampleRecipes: RecipeMeta[] = [
  {
    slug: 'avocado-toast',
    title: 'Avocado Toast',
    date: '2026-05-08',
    excerpt: 'Simple, fresh, and filling. Toast the bread, mash the avocado, done. Ready in minutes.',
    time: '5 min',
    servings: '1',
    tag: 'Breakfast',
    image: '/recipes/avocado-toast.png',
  },
  {
    slug: 'one-pan-lemon-chicken',
    title: 'One-Pan Lemon Herb Chicken',
    date: '2025-05-08',
    excerpt: 'Thirty minutes, one pan, zero fuss. The kind of dinner that makes a Tuesday feel like a win.',
    time: '30 min',
    servings: '4',
    tag: 'Dinner',
  },
  {
    slug: 'banana-oat-muffins',
    title: 'Banana Oat Muffins (Kid-Approved)',
    date: '2025-04-22',
    excerpt: 'No refined sugar, no flour, no complaints. Even Nico asks for these.',
    time: '25 min',
    servings: '12 muffins',
    tag: 'Snacks',
  },
  {
    slug: 'big-batch-bolognese',
    title: 'Big Batch Sunday Bolognese',
    date: '2025-04-10',
    excerpt: 'Make it on Sunday, eat it all week. The recipe that saved my meal prep sanity.',
    time: '2 hrs',
    servings: '8',
    tag: 'Dinner',
  },
  {
    slug: 'green-smoothie-formula',
    title: 'The Green Smoothie Formula I Actually Use',
    date: '2025-03-30',
    excerpt: "It's not fancy. It's just the one that tastes good enough to make every morning.",
    time: '5 min',
    servings: '1',
    tag: 'Breakfast',
  },
  {
    slug: 'sheet-pan-veggies',
    title: 'Sheet Pan Roasted Everything',
    date: '2025-03-18',
    excerpt: 'The lazy-but-delicious side dish. Whatever vegetables you have, this method works.',
    time: '40 min',
    servings: '4',
    tag: 'Sides',
  },
  {
    slug: 'overnight-oats',
    title: 'Overnight Oats (5 Ways)',
    date: '2025-03-05',
    excerpt: "Five flavours, one method. The breakfast I make when I'm trying to be organised.",
    time: '5 min',
    servings: '1',
    tag: 'Breakfast',
    image: '/recipes/overnight-oats.png',
  },
];

function getRecipes(): RecipeMeta[] {
  const dir = path.join(process.cwd(), 'content/recipes');
  if (!fs.existsSync(dir)) return sampleRecipes;
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));
  if (files.length === 0) return sampleRecipes;
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
    const { data } = matter(raw);
    return {
      slug: file.replace(/\.mdx?$/, ''),
      title: data.title || 'Untitled',
      date: data.date || '',
      excerpt: data.excerpt || '',
      time: data.time || '',
      servings: data.servings || '',
      tag: data.tag || 'Recipe',
      image: data.image || undefined,
    };
  });
}

const tags = ['All', 'Breakfast', 'Dinner', 'Snacks', 'Sides'];

export default function Recipes() {
  const recipes = getRecipes();

  return (
    <>
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-12">
        <span className="section-eyebrow">
          <LeafDot /> In the kitchen
        </span>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mt-2 leading-tight max-w-2xl">
          Recipes for <em className="italic text-peach">real families</em>
        </h1>
        <p className="font-body text-lg text-mocha/80 mt-5 max-w-xl leading-relaxed">
          Simple, nourishing food that tastes good and actually gets made. No complicated techniques, no
          ingredients you can't pronounce.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-body text-sm font-medium px-4 py-1.5 rounded-pill border border-peach-light/40 text-mocha/70 cursor-pointer hover:border-peach hover:text-peach transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 py-10 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <Link href={`/recipes/${recipe.slug}`} key={recipe.slug} className="card group cursor-pointer flex flex-col">
              <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-peach-light/30 to-sage-light/20">
                {recipe.image ? (
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    width={600}
                    height={338}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="font-body text-xs text-mocha/30">Recipe photo</p>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block font-body text-xs font-medium text-peach bg-peach/10 rounded-full px-2.5 py-1">
                  {recipe.tag}
                </span>
                <span className="font-body text-xs text-mocha/50">⏱ {recipe.time}</span>
                <span className="font-body text-xs text-mocha/50">· {recipe.servings} servings</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-brown leading-snug group-hover:text-peach transition-colors flex-1">
                {recipe.title}
              </h3>
              <p className="font-body text-sm text-mocha/70 mt-2 leading-relaxed">{recipe.excerpt}</p>
              <p className="font-body text-xs text-mocha/40 mt-4">
                {new Date(recipe.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
