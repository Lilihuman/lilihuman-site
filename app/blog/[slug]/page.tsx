import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import { isPreview } from '@/lib/preview';
import PreviewBadge from '@/components/PreviewBadge';

// Re-render at least hourly so scheduled (future-dated) posts become
// reachable once their date arrives, even without a new deploy.
import type { Metadata } from 'next';

export const revalidate = 60;

interface Props {
  params: { slug: string };
}

// A post is published once its publish moment has passed, so posts can be
// scheduled ahead. A plain `date: 2026-10-16` means midnight UTC that day
// (unchanged behaviour); a full timestamp such as
// `date: 2026-10-16T07:00:00-07:00` publishes at exactly that moment.
function isPublished(date: string | Date): boolean {
  if (!date) return true;
  const d = new Date(date);
  if (isNaN(d.getTime())) return true;
  return d.getTime() <= Date.now();
}

function getPost(slug: string) {
  const dir = path.join(process.cwd(), 'content/blog');
  const exts = ['.mdx', '.md'];
  for (const ext of exts) {
    const filePath = path.join(dir, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(raw);
      return { data, content };
    }
  }
  return null;
}

function inline(text: string) {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label, url) => {
      const external = /^https?:\/\//.test(url);
      const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<a href="${url}"${attrs}>${label}</a>`;
    })
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}

function renderContent(content: string) {
  const blocks = content.split(/\n---\n|\n\n+/);
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;
    if (trimmed.startsWith('## ')) {
      return <h2 key={i}>{trimmed.slice(3)}</h2>;
    }
    if (trimmed.startsWith('### ')) {
      return <h3 key={i}>{trimmed.slice(4)}</h3>;
    }
    // Pull-quote: lines beginning with "> "
    if (trimmed.startsWith('> ')) {
      const quote = trimmed.replace(/^>\s?/gm, ' ').trim();
      return <blockquote key={i} dangerouslySetInnerHTML={{ __html: inline(quote) }} />;
    }
    // Standalone italic line — used as a closing/emphasis paragraph
    if (trimmed.startsWith('*') && trimmed.endsWith('*') && !trimmed.startsWith('**')) {
      return <p key={i} className="article-closer" dangerouslySetInnerHTML={{ __html: inline(trimmed.slice(1, -1)) }} />;
    }
    return <p key={i} dangerouslySetInnerHTML={{ __html: inline(trimmed) }} />;
  });
}

// Per-post title/description/OG. Without this every post served the generic
// site-wide tag, which hurts search results and link previews. Scheduled or
// hidden posts are marked noindex so they can't be indexed before they're out.
export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  const { data } = post;
  const title = `${data.title} | Lili Human`;
  const description = data.description || data.excerpt || undefined;
  const url = `/blog/${params.slug}`;
  const live = isPublished(data.date) && !data.hidden;
  const images = data.image
    ? [{ url: data.image, alt: data.imageAlt || data.title }]
    : [];

  return {
    title,
    description,
    alternates: { canonical: url },
    ...(live ? {} : { robots: { index: false, follow: false } }),
    openGraph: { title, description, url, siteName: 'Lili Human', type: 'article', images },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: data.image ? [data.image] : [],
    },
  };
}

export default function BlogPost({ params }: Props) {
  const post = getPost(params.slug);
  const preview = isPreview();
  const isPrivate = !!post && (post.data.hidden === true || !isPublished(post.data.date));

  // Public: a hidden or not-yet-published post 404s. Preview Mode sees it.
  if (!post || (!preview && isPrivate)) {
    return (
      <article className="max-w-2xl mx-auto px-5 md:px-8 py-20">
        <Link href="/blog" className="font-body text-sm text-peach hover:underline mb-8 inline-flex items-center gap-1">
          ← Back to blog
        </Link>
        <p className="font-body text-mocha/50 mt-10">Post not found.</p>
      </article>
    );
  }

  const imagePath = post.data.image ? post.data.image : null;

  return (
    <article className="max-w-[40rem] mx-auto px-5 md:px-8 py-16 md:py-20 fade-up">
      <Link href="/blog" className="font-body text-sm text-peach hover:underline mb-10 inline-flex items-center gap-1">
        ← Back to blog
      </Link>
      {preview && isPrivate && (
        <p className="mb-6">
          <PreviewBadge label={post.data.hidden ? 'Hidden — only you can see this' : 'Scheduled — not public yet'} />
        </p>
      )}
      <p className="article-kicker">{post.data.tag}</p>
      <h1 className="article-title">{post.data.title}</h1>
      {post.data.subtitle && (
        <p className="article-subtitle">{post.data.subtitle}</p>
      )}
      <p className="article-byline">
        {new Date(post.data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} · {post.data.author || 'Lili Human'}
      </p>
      <div className="article-ornament">
        <span className="text-base">&#10086;</span>
      </div>
      {imagePath && (
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12">
          <Image
            src={imagePath}
            alt={post.data.imageAlt || post.data.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 640px"
          />
        </div>
      )}
      <div className="article-read">
        {renderContent(post.content)}
      </div>
    </article>
  );
}