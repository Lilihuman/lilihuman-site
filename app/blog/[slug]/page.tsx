import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
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

function inline(text: string) {
  return text
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
      return <p key={i} className="article-closer">{trimmed.slice(1, -1)}</p>;
    }
    return <p key={i} dangerouslySetInnerHTML={{ __html: inline(trimmed) }} />;
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
    <article className="max-w-[40rem] mx-auto px-5 md:px-8 py-16 md:py-20 fade-up">
      <Link href="/blog" className="font-body text-sm text-peach hover:underline mb-10 inline-flex items-center gap-1">
        ← Back to blog
      </Link>
      <p className="article-kicker">{post.data.tag}</p>
      <h1 className="article-title">{post.data.title}</h1>
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
            alt={post.data.title}
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