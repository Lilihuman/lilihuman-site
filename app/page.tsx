import Link from 'next/link';
import Image from 'next/image';
import LeafDot from '@/components/LeafDot';
import NewsletterForm from '@/components/NewsletterForm';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tag: string;
  image?: string;
}

function getRecentPosts(count = 3): PostMeta[] {
  const dir = path.join(process.cwd(), 'content/blog');
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
      const { data } = matter(raw);
      return {
        slug: file.replace(/\.mdx?$/, ''),
        title: data.title || 'Untitled',
        date: data.date ? String(data.date) : '',
        excerpt: data.excerpt || '',
        tag: data.tag || 'General',
        image: data.image || null,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

const featureCards = [
  {
    icon: '🏃‍♀️',
    eyebrow: 'Move',
    title: 'Fitness Programs',
    body: 'Programs designed for real life — not the ideal version of it. Short, effective, and built for the days when you have 20 minutes and a toddler on your hip.',
    href: '/fitness',
    cta: 'Explore fitness',
    accent: 'peach',
  },
  {
    icon: '🎨',
    eyebrow: 'Create',
    title: 'Printables & Art',
    body: 'Planners, wall prints, and home organizers that feel like you made them. Download instantly and bring some beauty into your everyday.',
    href: '/shop',
    cta: 'Browse the shop',
    accent: 'sage',
  },
  {
    icon: '🌿',
    eyebrow: 'Live',
    title: 'Family Life',
    body: 'Recipes, honest motherhood stories, and little rituals that make the mundane feel meaningful. Pull up a chair — this is a no-perfect-life zone.',
    href: '/blog',
    cta: 'Read the blog',
    accent: 'mocha',
  },
];

export default function Home() {
  const recentPosts = getRecentPosts();
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden grain-overlay">
        {/* Soft radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-peach/10 blur-3xl translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-sage/10 blur-3xl -translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-2 gap-12 items-center relative">
          {/* Text */}
          <div>
            <span className="section-eyebrow fade-up-delay-1 fade-up">
              <LeafDot /> Welcome
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-brown leading-[1.1] mt-2 fade-up fade-up-delay-2">
              Welcome to my{' '}
              <em className="italic text-peach">little corner</em>{' '}
              of the world
            </h1>
            <p className="font-body text-lg text-mocha/80 mt-6 leading-relaxed max-w-md fade-up fade-up-delay-3">
              Workouts for real schedules. Printables for real homes. Stories from a real life — no filter needed.
            </p>
            <div className="flex flex-wrap gap-3 mt-8 fade-up fade-up-delay-4">
              <Link href="/shop" className="btn-primary">
                Browse the shop
              </Link>
              <Link href="/blog" className="btn-secondary">
                Read the blog
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative fade-up fade-up-delay-3">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/images/hero.jpg"
                alt="Lili Human by the sea"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-peach-light/30">
              <p className="font-script text-peach text-lg leading-none">Real life.</p>
              <p className="font-body text-xs text-mocha/60 mt-0.5">No filters needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature Cards ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-20">
        <div className="text-center mb-12">
          <span className="section-eyebrow">
            <LeafDot /> What you'll find here
          </span>
          <h2 className="section-heading mt-2">
            A little bit of{' '}
            <em className="italic text-peach">everything</em> that matters
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featureCards.map((card) => (
            <div key={card.title} className="card group flex flex-col">
              <div className="text-4xl mb-4">{card.icon}</div>
              <span className="section-eyebrow mb-1">
                <LeafDot /> {card.eyebrow}
              </span>
              <h3 className="font-heading text-2xl font-semibold text-brown mb-3">
                {card.title}
              </h3>
              <p className="font-body text-sm text-mocha/80 leading-relaxed flex-1">
                {card.body}
              </p>
              <Link href={card.href} className="btn-secondary mt-6 text-sm">
                {card.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="bg-cream-dark border-y border-peach-light/30 py-20">
        <div className="max-w-xl mx-auto px-5 md:px-8 text-center">
          <span className="section-eyebrow">
            <LeafDot /> Stay close
          </span>
          <h2 className="section-heading mt-2 mb-4">
            Letters to your inbox, <em className="text-peach italic">not noise</em>
          </h2>
          <p className="font-body text-mocha/70 leading-relaxed">
            Weekly-ish notes on fitness, home life, and whatever I'm currently obsessed with. No spam — I promise.
          </p>
          <NewsletterForm variant="light" source="newsletter-homepage" />
        </div>
      </section>

      {/* ── Quote / pull quote ── */}
      <section className="bg-brown py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-peach/5 blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center relative">
          <p className="font-script text-5xl md:text-6xl text-peach leading-tight">
            "Fitness isn't about the ideal day.
          </p>
          <p className="font-script text-5xl md:text-6xl text-peach-light leading-tight mt-2">
            It's about the hard one."
          </p>
          <p className="font-body text-sm text-cream/50 mt-6">— Lili Human</p>
        </div>
      </section>

      {/* ── Latest from the blog ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="section-eyebrow">
              <LeafDot /> Latest posts
            </span>
            <h2 className="section-heading mt-1">From the blog</h2>
          </div>
          <Link href="/blog" className="btn-secondary text-sm hidden md:inline-flex">
            View all →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card group flex flex-col cursor-pointer no-underline">
              <div className="aspect-video rounded-xl overflow-hidden mb-4 relative bg-gradient-to-br from-peach-light/40 to-sage-light/30">
                {post.image ? (
                  <Image src={post.image} alt={post.title} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
                ) : null}
              </div>
              <span className="inline-block font-body text-xs font-medium text-peach bg-peach/10 rounded-full px-3 py-1 mb-3 self-start">
                {post.tag}
              </span>
              <h3 className="font-heading text-xl text-brown font-semibold leading-snug group-hover:text-peach transition-colors flex-1">
                {post.title}
              </h3>
              <p className="font-body text-sm text-mocha/70 mt-2 leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
              <p className="font-body text-xs text-mocha/40 mt-4">
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link href="/blog" className="btn-secondary">
            View all posts →
          </Link>
        </div>
      </section>

    </>
  );
}
