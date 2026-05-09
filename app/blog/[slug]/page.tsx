import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import LeafDot from '@/components/LeafDot';
import Link from 'next/link';

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

export default function BlogPost({ params }: Props) {
  const post = getPost(params.slug);

  if (!post) {
    // Show a sample post for demo purposes
    return (
      <article className="max-w-2xl mx-auto px-5 md:px-8 py-20">
        <Link href="/blog" className="font-body text-sm text-peach hover:underline mb-8 inline-flex items-center gap-1">
          ← Back to blog
        </Link>
        <span className="section-eyebrow mt-6">
          <LeafDot /> Family life
        </span>
        <h1 className="font-heading text-4xl md:text-5xl font-light text-brown mt-2 leading-tight">
          Why we do a weekly <em className="italic text-peach">"slow morning"</em>
        </h1>
        <p className="font-body text-xs text-mocha/40 mt-4 mb-10">May 12, 2025 · Lili Human</p>
        <div className="aspect-video rounded-2xl bg-gradient-to-br from-peach-light/40 to-sage-light/30 mb-10 flex items-center justify-center">
          <p className="font-body text-xs text-mocha/30">Post image</p>
        </div>
        <div className="prose-lili">
          <p>
            It started as an accident. One Saturday we just... didn't rush. No plans, no screens until 10am,
            no agenda beyond pancakes and whatever the kids wanted to do. By noon I noticed something: everyone
            was calmer. Including me.
          </p>
          <p>
            We've done it nearly every week since. Here's what it actually looks like in our house — and why I
            think every family with small kids should try it at least once.
          </p>
          <h2>What "slow morning" means for us</h2>
          <p>
            No phones until breakfast is done. No rushing to get anywhere. The first hour is phone-free for
            the adults too — which is the hardest part, honestly. We make something together (pancakes, eggs,
            whatever's easy), eat at the table, and then just see where the morning goes.
          </p>
          <p>
            Some mornings it's building blocks. Some mornings it's reading. Sometimes Nico just wants to help
            me water the plants and that becomes a whole thing. The key is: no agenda.
          </p>
          <h2>Why it matters</h2>
          <p>
            I think we underestimate how much our kids pick up on our energy. When I'm rushing, everyone rushes.
            When I slow down and signal that there's nowhere to be, something shifts. They play longer. They
            fight less. They ask more questions.
          </p>
          <p>
            It's not magic. Some slow mornings are still chaotic. But the intention matters. We're choosing
            to start the week gently, and that choice alone feels like an act of love.
          </p>
        </div>
      </article>
    );
  }

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
      <p className="font-body text-xs text-mocha/40 mt-4 mb-10">
        {post.data.date} · {post.data.author || 'Lili Human'}
      </p>
      <div className="prose-lili" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
