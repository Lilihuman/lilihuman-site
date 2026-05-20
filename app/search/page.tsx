import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import LeafDot from '@/components/LeafDot';
import { products } from '@/data/products';

interface Result {
  title: string;
  href: string;
  excerpt: string;
  category: string;
}

function getBlogPosts(q: string): Result[] {
  const dir = path.join(process.cwd(), 'content/blog');
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((file) => {
      const { data } = matter(fs.readFileSync(path.join(dir, file), 'utf-8'));
      return {
        title: data.title || 'Untitled',
        href: `/blog/${file.replace(/\.mdx?$/, '')}`,
        excerpt: data.excerpt || '',
        category: 'Blog',
        _search: `${data.title} ${data.excerpt} ${data.tag}`.toLowerCase(),
      };
    })
    .filter((r) => r._search.includes(q));
}

function getRecipes(q: string): Result[] {
  const dir = path.join(process.cwd(), 'content/recipes');
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((file) => {
      const { data } = matter(fs.readFileSync(path.join(dir, file), 'utf-8'));
      return {
        title: data.title || 'Untitled',
        href: `/recipes/${file.replace(/\.mdx?$/, '')}`,
        excerpt: data.excerpt || '',
        category: 'Recipe',
        _search: `${data.title} ${data.excerpt} ${data.tag}`.toLowerCase(),
      };
    })
    .filter((r) => r._search.includes(q));
}

function getProducts(q: string): Result[] {
  return products
    .filter((p) => `${p.name} ${p.description} ${p.category}`.toLowerCase().includes(q))
    .map((p) => ({
      title: p.name,
      href: '/shop',
      excerpt: p.description,
      category: 'Shop',
    }));
}

const staticPages: Result[] = [
  { title: 'About', href: '/about', excerpt: 'Learn more about Lili Human.', category: 'Page' },
  { title: 'Fitness', href: '/fitness', excerpt: 'Workouts, programs, and personal training.', category: 'Page' },
  { title: 'Free Workouts', href: '/fitness/free-workouts', excerpt: 'Free workout plans and videos.', category: 'Page' },
  { title: 'Personal Training', href: '/fitness/personal-training', excerpt: 'Work one-on-one with Lili.', category: 'Page' },
  { title: 'Programs', href: '/fitness/programs', excerpt: 'Structured fitness programs.', category: 'Page' },
  { title: 'Shop', href: '/shop', excerpt: 'Digital and physical products.', category: 'Page' },
  { title: 'Blog', href: '/blog', excerpt: 'Stories, fitness tips, recipes, and more.', category: 'Page' },
  { title: 'Recipes', href: '/recipes', excerpt: 'Healthy and delicious recipe ideas.', category: 'Page' },
  { title: 'Events', href: '/events', excerpt: 'Upcoming events and classes.', category: 'Page' },
  { title: 'Calendar', href: '/calendar', excerpt: 'Schedule and availability.', category: 'Page' },
  { title: 'Gallery', href: '/gallery', excerpt: 'Photos and moments.', category: 'Page' },
  { title: 'Contact', href: '/contact', excerpt: 'Get in touch with Lili.', category: 'Page' },
];

function getPages(q: string): Result[] {
  return staticPages.filter((p) =>
    `${p.title} ${p.excerpt}`.toLowerCase().includes(q)
  );
}

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const raw = searchParams.q?.trim() ?? '';
  const q = raw.toLowerCase();

  const results: Result[] = q
    ? [...getBlogPosts(q), ...getRecipes(q), ...getProducts(q), ...getPages(q)]
    : [];

  return (
    <section className="max-w-3xl mx-auto px-5 md:px-8 pt-20 pb-24">
      <span className="section-eyebrow">
        <LeafDot /> Search
      </span>
      <h1 className="font-heading text-4xl md:text-5xl font-light text-brown mt-2 leading-tight">
        {raw ? (
          <>
            Results for <em className="italic text-peach">&#34;{raw}&#34;</em>
          </>
        ) : (
          'Search'
        )}
      </h1>

      {raw && (
        <p className="font-body text-sm text-mocha/50 mt-3">
          {results.length} result{results.length !== 1 ? 's' : ''} found
        </p>
      )}

      {!raw && (
        <p className="font-body text-lg text-mocha/70 mt-5">
          Use the search bar above to find posts, recipes, products, and pages.
        </p>
      )}

      {raw && results.length === 0 && (
        <p className="font-body text-lg text-mocha/70 mt-8">
          No results found for &#34;{raw}&#34;. Try a different search term.
        </p>
      )}

      {results.length > 0 && (
        <ul className="mt-10 flex flex-col gap-4">
          {results.map((r, i) => (
            <li key={i}>
              <Link href={r.href} className="card group flex flex-col gap-1">
                <span className="font-body text-xs font-medium text-peach bg-peach/10 rounded-full px-3 py-0.5 self-start mb-1">
                  {r.category}
                </span>
                <h2 className="font-heading text-xl font-semibold text-brown group-hover:text-peach transition-colors">
                  {r.title}
                </h2>
                {r.excerpt && (
                  <p className="font-body text-sm text-mocha/70 leading-relaxed">{r.excerpt}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
