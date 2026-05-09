import LeafDot from '@/components/LeafDot';
import Link from 'next/link';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tag: string;
  author?: string;
  image?: string;
}

function getPosts(): PostMeta[] {
  const dir = path.join(process.cwd(), 'content/blog');
  if (!fs.existsSync(dir)) return samplePosts;
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));
  if (files.length === 0) return samplePosts;
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
    const { data } = matter(raw);
    return {
      slug: file.replace(/\.mdx?$/, ''),
      title: data.title || 'Untitled',
      date: data.date || '',
      excerpt: data.excerpt || '',
      tag: data.tag || 'General',
      author: data.author,
      image: data.image || null,
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

const samplePosts: PostMeta[] = [
  {
    slug: 'weekly-slow-morning',
    title: 'Why we do a weekly "slow morning"',
    date: '2025-05-12',
    excerpt: 'No screens, no schedules. Just pancakes and whatever the kids feel like doing.',
    tag: 'Family life',
  },
];

const tags = ['All', 'Family life', 'Fitness', 'Home', 'Recipes'];

export default function Blog() {
  const posts = getPosts();

  return (
    <>
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-12">
        <span className="section-eyebrow">
          <LeafDot /> The blog
        </span>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mt-2 leading-tight max-w-2xl">
          Stories, <em className="italic text-peach">honestly told</em>
        </h1>
        <p className="font-body text-lg text-mocha/80 mt-5 max-w-xl leading-relaxed">
          Fitness, family, food, and the small rituals that make life feel like yours.
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
        {/* Featured post */}
        {posts[0] && (
          <Link
            href={`/blog/${posts[0].slug}`}
            className="card flex flex-col md:flex-row gap-6 mb-8 group cursor-pointer"
          >
            <div className="md:w-1/2 aspect-video rounded-xl overflow-hidden relative bg-gradient-to-br from-peach-light/50 to-sage-light/30">
              {posts[0].image ? (
                <Image
                  src={posts[0].image}
                  alt={posts[0].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <p className="font-body text-xs text-mocha/30">Featured image</p>
                </div>
              )}
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <span className="inline-block font-body text-xs font-medium text-peach bg-peach/10 rounded-full px-3 py-1 mb-3 self-start">
                {posts[0].tag}
              </span>
              <h2 className="font-heading text-3xl font-semibold text-brown leading-snug group-hover:text-peach transition-colors">
                {posts[0].title}
              </h2>
              <p className="font-body text-sm text-mocha/70 mt-3 leading-relaxed">{posts[0].excerpt}</p>
              <p className="font-body text-xs text-mocha/40 mt-4">
                {new Date(posts[0].date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </Link>
        )}

        {/* Post grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="card group cursor-pointer flex flex-col">
              <div className="aspect-video rounded-xl overflow-hidden relative bg-gradient-to-br from-peach-light/30 to-sage-light/20 mb-4">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="font-body text-xs text-mocha/30">Post thumbnail</p>
                  </div>
                )}
              </div>
              <span className="inline-block font-body text-xs font-medium text-peach bg-peach/10 rounded-full px-3 py-1 mb-3 self-start">
                {post.tag}
              </span>
              <h3 className="font-heading text-xl font-semibold text-brown leading-snug group-hover:text-peach transition-colors flex-1">
                {post.title}
              </h3>
              <p className="font-body text-sm text-mocha/70 mt-2 leading-relaxed">{post.excerpt}</p>
              <p className="font-body text-xs text-mocha/40 mt-4">
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
