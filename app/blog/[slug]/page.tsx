import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import LeafDot from '@/components/LeafDot';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  params: { slug: string };
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

function renderContent(content: string) {
  const blocks = content.split(/\n---\n|\n\n+/);
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;
    if (trimmed.startsWith('## ')) {
      return <h2 key={i} className="font-heading text-3xl text-brown mt-10 mb-4">{trimmed.slice(3)}</h2>;
    }
    if (trimmed.startsWith('### ')) {
      return <h3 key={i} className="font-heading text-2xl text-brown mt-8 mb-3">{trimmed.slice(4)}</h3>;
    }
    if (trimmed.startsWith('*') && trimmed.endsWith('*') && !trimmed.startsWith('**')) {
      return (
        <p key={i} className="font-body text-mocha/70 italic leading-relaxed mb-4 pl-4 border-l-2 border-peach/30">
          {trimmed.slice(1, -1)}
        </p>
      );
    }
    const formatted = trimmed
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');
    return (
      <p key={i} className="font-body text-mocha/80 leading-relaxed mb-5"
        dangerouslySetInnerHTML={{ __html: formatted }} />
    );
  });
}

export default function BlogPost({ params }: Props) {
  const post = getPost(params.slug);

  if (!post) {
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
    <article className="max-w-2xl mx-auto px-5 md:px-8 py-20">
      <Link href="/blog" className="font-body text-sm text-peach hover:underline mb-8 inline-flex items-center gap-1">
        ← Back to blog
      </Link>
      <span className="section-eyebrow mt-6">
        <LeafDot /> {post.data.tag}
      </span>
      <h1 className="font-heading text-4xl md:text-5xl font-light text-brown mt-2 leading-tight">
        {post.data.title}
      </h1>
      <p className="font-body text-xs text-mocha/40 mt-4 mb-8">
        {new Date(post.data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} · {post.data.author || 'Lili Human'}
      </p>
      {imagePath && (
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10">
          <Image
            src={imagePath}
            alt={post.data.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>
      )}
      <div className="prose-lili">
        {renderContent(post.content)}
      </div>
    </article>
  );
}