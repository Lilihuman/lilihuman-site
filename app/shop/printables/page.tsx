import Link from 'next/link';
import LeafDot from '@/components/LeafDot';
import { getProductsByCategory } from '@/data/products';
import { isPreview } from '@/lib/preview';
import PrintableCard from './PrintableCard';

const sections = [
  {
    key: 'ai-tools',
    title: 'AI Tools & Resources',
    description: 'Practical guides for using AI in your everyday life — no tech background needed.',
    productIds: ['ai-comic-creation-workbook', 'free-memory-keeping', 'everyday-ai-busy-women', 'everyday-ai-car-troubles', 'everyday-ai-busy-moms', 'everyday-ai-small-business'],
  },
  {
    key: 'organization',
    title: 'Organization',
    description: 'Simple systems for the home that actually hold up in real life.',
    productIds: ['20-min-reset'],
  },
  {
    key: 'family',
    title: 'Family Printables',
    description: 'Organizing tools designed for the whole family, not just the person holding it together.',
    productIds: ['brain-activation-age2', 'brain-activation-age4', 'kids-chore-chart'],
  },
];

// Server component: hidden printables are filtered out before render, so
// they're never sent to public visitors. Preview Mode gets them all.
export default function Printables() {
  const preview = isPreview();
  const allPrintables = getProductsByCategory('printable').filter((p) => preview || !p.hidden);

  return (
    <>
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-12">
        <span className="section-eyebrow">
          <LeafDot /> Printables & art
        </span>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mt-2 leading-tight max-w-2xl">
          Tools and art for your <em className="italic text-sage">everyday life</em>
        </h1>
        <p className="font-body text-lg text-mocha/80 mt-5 max-w-xl leading-relaxed">
          Every item is a digital download — buy once, print forever. No subscription, no shipping.
        </p>
        <Link href="/shop" className="inline-block font-body text-sm text-peach hover:underline mt-4">
          ← Back to shop
        </Link>
      </section>

      {sections.map((section) => {
        const sectionProducts = allPrintables.filter((p) => section.productIds.includes(p.id));
        if (!sectionProducts.length) return null;
        return (
          <section key={section.key} className="max-w-6xl mx-auto px-5 md:px-8 pb-16">
            <div className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-brown">{section.title}</h2>
              <p className="font-body text-sm text-mocha/60 mt-1">{section.description}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectionProducts.map((p) => (
                <PrintableCard key={p.id} product={p} preview={preview} />
              ))}
            </div>
          </section>
        );
      })}

      <div className="max-w-6xl mx-auto px-5 md:px-8 pb-24 text-center">
        <p className="font-body text-sm text-mocha/50">Secure checkout via Stripe · Digital downloads delivered instantly · Questions?{' '}
          <a href="/contact" className="text-peach hover:underline">Contact me</a>
        </p>
      </div>
    </>
  );
}
