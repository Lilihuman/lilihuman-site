import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Users, CookingPot, ChefHat, Heart, Lightbulb, UtensilsCrossed } from 'lucide-react';

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

/* ---------- lightweight markdown parsing ---------- */

type Block =
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'subhead'; text: string }
  | { type: 'p'; text: string };

interface Section {
  heading: string;
  blocks: Block[];
}

function renderInline(text: string) {
  // splits on **bold** and renders the bold parts as <strong>
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    const m = part.match(/^\*\*([^*]+)\*\*$/);
    return m ? (
      <strong key={i} className="font-semibold text-brown">
        {m[1]}
      </strong>
    ) : (
      part
    );
  });
}

function parseBlocks(lines: string[]): Block[] {
  const blocks: Block[] = [];
  let list: { type: 'ul' | 'ol'; items: string[] } | null = null;
  let para: string[] = [];

  const flushPara = () => {
    if (para.length) {
      blocks.push({ type: 'p', text: para.join(' ').trim() });
      para = [];
    }
  };
  const flushList = () => {
    if (list) {
      blocks.push(list);
      list = null;
    }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    const bullet = line.match(/^\s*[-*]\s+(.*)$/);
    const num = line.match(/^\s*\d+\.\s+(.*)$/);
    const sub = line.match(/^\*\*(.+?)\*\*:?\s*$/);

    if (bullet) {
      flushPara();
      if (!list || list.type !== 'ul') {
        flushList();
        list = { type: 'ul', items: [] };
      }
      list.items.push(bullet[1].trim());
    } else if (num) {
      flushPara();
      if (!list || list.type !== 'ol') {
        flushList();
        list = { type: 'ol', items: [] };
      }
      list.items.push(num[1].trim());
    } else if (sub) {
      flushPara();
      flushList();
      blocks.push({ type: 'subhead', text: sub[1].trim() });
    } else if (line.trim() === '') {
      flushPara();
      flushList();
    } else {
      flushList();
      para.push(line.trim());
    }
  }
  flushPara();
  flushList();
  return blocks;
}

function parseContent(content: string): { intro: Block[]; sections: Section[] } {
  const lines = content.split('\n');
  const introLines: string[] = [];
  const sections: { heading: string; lines: string[] }[] = [];
  let current: { heading: string; lines: string[] } | null = null;

  for (const line of lines) {
    const h = line.match(/^##\s+(.*)$/);
    if (h) {
      current = { heading: h[1].trim(), lines: [] };
      sections.push(current);
    } else if (current) {
      current.lines.push(line);
    } else {
      introLines.push(line);
    }
  }

  return {
    intro: parseBlocks(introLines),
    sections: sections.map((s) => ({ heading: s.heading, blocks: parseBlocks(s.lines) })),
  };
}

/* ---------- section theming ---------- */

type Kind = 'ingredients' | 'steps' | 'notes' | 'generic';

function sectionKind(heading: string): Kind {
  const h = heading.toLowerCase();
  if (h.includes('ingredient')) return 'ingredients';
  if (h.includes('method') || h.includes('direction') || h.includes('instruction') || h.includes('step'))
    return 'steps';
  if (h.includes('note') || h.includes('tip')) return 'notes';
  return 'generic';
}

function SectionIcon({ kind }: { kind: Kind }) {
  const Icon =
    kind === 'ingredients' ? CookingPot : kind === 'steps' ? ChefHat : kind === 'notes' ? Heart : UtensilsCrossed;
  const bg = kind === 'steps' ? 'bg-peach' : 'bg-sage';
  return (
    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${bg} text-cream`}>
      <Icon size={20} strokeWidth={1.75} />
    </span>
  );
}

function SectionHeading({ kind, children }: { kind: Kind; children: React.ReactNode }) {
  const color = kind === 'steps' ? 'text-peach' : 'text-sage';
  return (
    <div className="flex items-center gap-3.5 mt-12 mb-5">
      <SectionIcon kind={kind} />
      <h2 className={`font-heading text-2xl md:text-3xl font-semibold uppercase tracking-wide ${color}`}>
        {children}
      </h2>
    </div>
  );
}

function StepNumber({ n }: { n: number }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-peach/15 font-heading text-lg font-semibold text-peach">
      {n}
    </span>
  );
}

/* ---------- page ---------- */

export default function RecipePage({ params }: Props) {
  const recipe = getRecipe(params.slug);
  if (!recipe) notFound();

  const { data, content } = recipe;
  const { intro, sections } = parseContent(content);

  return (
    <article className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20">
      <Link
        href="/recipes"
        className="font-body text-sm text-peach hover:underline mb-8 inline-flex items-center gap-1"
      >
        ← Back to recipes
      </Link>

      {/* Thumbnail on top */}
      <div className="aspect-[16/10] w-full rounded-3xl overflow-hidden mb-8 bg-gradient-to-br from-peach-light/40 to-sage-light/25">
        {data.image ? (
          <Image
            src={data.image}
            alt={data.title}
            width={1000}
            height={625}
            className="w-full h-full object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <UtensilsCrossed size={30} strokeWidth={1.5} className="text-mocha/25" />
            <p className="font-body text-xs text-mocha/30">Recipe photo</p>
          </div>
        )}
      </div>

      {/* Title + meta */}
      {data.tag && (
        <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-cream bg-sage rounded-full px-3.5 py-1.5">
          {data.tag}
        </span>
      )}
      <h1 className="font-heading text-4xl md:text-5xl font-light text-brown mt-4 leading-tight">
        {data.title}
      </h1>
      <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 mb-2">
        {data.time && (
          <span className="inline-flex items-center gap-1.5 font-body text-sm text-mocha/70">
            <Clock size={15} strokeWidth={1.75} /> {data.time}
          </span>
        )}
        {data.servings && (
          <span className="inline-flex items-center gap-1.5 font-body text-sm text-mocha/70">
            <Users size={15} strokeWidth={1.75} /> Serves {data.servings}
          </span>
        )}
      </div>

      {/* Intro */}
      {intro.map((b, i) =>
        b.type === 'p' ? (
          <p key={i} className="font-body text-lg text-mocha/80 leading-relaxed mt-5 first:mt-6">
            {renderInline(b.text)}
          </p>
        ) : null,
      )}

      {/* Sections */}
      {sections.map((section, si) => {
        const kind = sectionKind(section.heading);

        if (kind === 'ingredients') {
          return (
            <section key={si}>
              <SectionHeading kind={kind}>{section.heading}</SectionHeading>
              <div className="rounded-2xl bg-cream-dark border border-peach-light/40 p-6 md:p-7">
                {section.blocks.map((b, i) => {
                  if (b.type === 'subhead')
                    return (
                      <h3
                        key={i}
                        className="font-body text-xs font-semibold uppercase tracking-wider text-peach mt-5 first:mt-0 mb-3"
                      >
                        {renderInline(b.text)}
                      </h3>
                    );
                  if (b.type === 'ul' || b.type === 'ol')
                    return (
                      <ul key={i} className="space-y-2.5">
                        {b.items.map((it, j) => (
                          <li key={j} className="flex gap-3 font-body text-mocha leading-relaxed">
                            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-peach" />
                            <span>{renderInline(it)}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  if (b.type === 'p')
                    return (
                      <p key={i} className="font-body text-mocha leading-relaxed">
                        {renderInline(b.text)}
                      </p>
                    );
                  return null;
                })}
              </div>
            </section>
          );
        }

        if (kind === 'steps') {
          return (
            <section key={si}>
              <SectionHeading kind={kind}>{section.heading}</SectionHeading>
              <div className="space-y-6">
                {section.blocks.map((b, i) => {
                  if (b.type === 'subhead')
                    return (
                      <h3
                        key={i}
                        className="font-body text-sm font-semibold uppercase tracking-wider text-peach pt-2"
                      >
                        {renderInline(b.text)}
                      </h3>
                    );
                  if (b.type === 'ol' || b.type === 'ul')
                    return (
                      <ol key={i} className="space-y-5">
                        {b.items.map((step, j) => (
                          <li key={j} className="flex gap-4">
                            <StepNumber n={j + 1} />
                            <p className="font-body text-mocha leading-relaxed pt-0.5">
                              {renderInline(step)}
                            </p>
                          </li>
                        ))}
                      </ol>
                    );
                  if (b.type === 'p')
                    return (
                      <p key={i} className="font-body text-mocha leading-relaxed">
                        {renderInline(b.text)}
                      </p>
                    );
                  return null;
                })}
              </div>
            </section>
          );
        }

        if (kind === 'notes') {
          return (
            <section key={si}>
              <SectionHeading kind={kind}>{section.heading}</SectionHeading>
              <div className="rounded-2xl bg-sage-light/15 border-l-4 border-sage p-6">
                {section.blocks.map((b, i) => {
                  if (b.type === 'p')
                    return (
                      <p key={i} className="font-body text-mocha leading-relaxed mb-3 last:mb-0">
                        {renderInline(b.text)}
                      </p>
                    );
                  if (b.type === 'ul' || b.type === 'ol')
                    return (
                      <ul key={i} className="list-disc list-inside space-y-1.5 font-body text-mocha mb-3 last:mb-0">
                        {b.items.map((it, j) => (
                          <li key={j}>{renderInline(it)}</li>
                        ))}
                      </ul>
                    );
                  return null;
                })}
              </div>
            </section>
          );
        }

        // generic section
        return (
          <section key={si}>
            <SectionHeading kind={kind}>{section.heading}</SectionHeading>
            {section.blocks.map((b, i) => {
              if (b.type === 'p')
                return (
                  <p key={i} className="font-body text-mocha leading-relaxed mb-4">
                    {renderInline(b.text)}
                  </p>
                );
              if (b.type === 'ul')
                return (
                  <ul key={i} className="list-disc list-inside space-y-2 mb-4 font-body text-mocha">
                    {b.items.map((it, j) => (
                      <li key={j}>{renderInline(it)}</li>
                    ))}
                  </ul>
                );
              if (b.type === 'ol')
                return (
                  <ol key={i} className="list-decimal list-inside space-y-2 mb-4 font-body text-mocha">
                    {b.items.map((it, j) => (
                      <li key={j}>{renderInline(it)}</li>
                    ))}
                  </ol>
                );
              if (b.type === 'subhead')
                return (
                  <h3 key={i} className="font-heading text-xl text-brown mt-4 mb-2">
                    {renderInline(b.text)}
                  </h3>
                );
              return null;
            })}
          </section>
        );
      })}
    </article>
  );
}
