import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import LeafDot from '@/components/LeafDot';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  params: { slug: string };
}

function getRecipe(slug: string) {
  const dir = path.join(process.cwd(), 'content/recipes');
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

export default function RecipePage({ params }: Props) {
  const recipe = getRecipe(params.slug);

  if (!recipe) notFound();

  return (
    <article className="max-w-2xl mx-auto px-5 md:px-8 py-20">
      <Link href="/recipes" className="font-body text-sm text-peach hover:underline mb-8 inline-flex items-center gap-1">
        ← Back to recipes
      </Link>
      <span className="section-eyebrow mt-6">
        <LeafDot /> {recipe.data.tag}
      </span>
      <h1 className="font-heading text-4xl md:text-5xl font-light text-brown mt-2 leading-tight">
        {recipe.data.title}
      </h1>
      <div className="flex gap-4 mt-3 mb-10">
        {recipe.data.time && (
          <span className="font-body text-xs text-mocha/50">⏱ {recipe.data.time}</span>
        )}
        {recipe.data.servings && (
          <span className="font-body text-xs text-mocha/50">🍽 Serves {recipe.data.servings}</span>
        )}
      </div>
      {recipe.data.image && (
        <div className="relative w-full rounded-2xl overflow-hidden mb-10">
          <Image
            src={recipe.data.image}
            alt={recipe.data.title}
            width={900}
            height={600}
            className="w-full h-auto"
          />
        </div>
      )}
      <div className="prose-lili" dangerouslySetInnerHTML={{ __html: recipe.content }} />
    </article>
  );
}
