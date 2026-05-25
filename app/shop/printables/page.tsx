'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LeafDot from '@/components/LeafDot';
import { getProductsByCategory, formatPrice, Product } from '@/data/products';

const sections = [
  {
    key: 'ai-tools',
    title: 'AI Tools & Resources',
    description: 'Practical guides for using AI in your everyday life — no tech background needed.',
    productIds: ['everyday-ai-busy-women'],
  },
  {
    key: 'planners',
    title: 'Planners & Trackers',
    description: 'Print-at-home planning pages to keep your days, habits, and goals on track.',
    productIds: ['weekly-wellness-planner', 'habit-tracker-bundle'],
  },
  {
    key: 'family',
    title: 'Family Printables',
    description: 'Organizing tools designed for the whole family, not just the person holding it together.',
    productIds: ['brain-activation-age2', 'brain-activation-age4', 'family-weekly-planner', 'kids-chore-chart'],
  },
];

function PrintableCard({ product }: { product: Product }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleBuy() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: product.id }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || 'Something went wrong.');
        setLoading(false);
      }
    } catch {
      setError('Something went wrong.');
      setLoading(false);
    }
  }

  return (
    <div className="card flex flex-col">
      <div className="relative rounded-2xl overflow-hidden h-48 mb-4">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-peach-light/30 via-cream to-sage-light/20 flex items-center justify-center">
            <span className="font-script text-2xl text-peach/40">Coming soon</span>
          </div>
        )}
      </div>

      {product.featured && (
        <span className="inline-flex items-center font-body text-xs font-medium text-amber-700 bg-amber-50 rounded-full px-3 py-1 mb-3 self-start">
          Popular
        </span>
      )}

      <h3 className="font-heading text-xl font-semibold text-brown mb-2">{product.name}</h3>

      {product.tags && (
        <div className="flex gap-2 flex-wrap mb-2">
          {product.tags.map((tag) => (
            <span key={tag} className="inline-block font-body text-xs font-medium text-mocha/60 bg-mocha/10 rounded-full px-2.5 py-1">
              {tag}
            </span>
          ))}
        </div>
      )}

      <p className="font-body text-sm text-mocha/70 leading-relaxed flex-1">{product.description}</p>

      {error && <p className="font-body text-xs text-red-500 mt-2">{error}</p>}

      <div className="flex items-center justify-between mt-5 pt-4 border-t border-peach-light/40">
        <span className="font-heading text-2xl text-brown">{formatPrice(product.price)}</span>
        <button
          onClick={handleBuy}
          disabled={loading}
          className="btn-primary text-sm disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'Redirecting...' : 'Buy now'}
        </button>
      </div>
    </div>
  );
}

export default function Printables() {
  const allPrintables = getProductsByCategory('printable');

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
                <PrintableCard key={p.id} product={p} />
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
