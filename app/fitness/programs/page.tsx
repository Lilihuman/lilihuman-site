'use client';

import { useState } from 'react';
import LeafDot from '@/components/LeafDot';
import { getProductsByCategory, formatPrice, Product } from '@/data/products';

const programs = getProductsByCategory('program');

function ProgramCard({ product }: { product: Product }) {
  const [loading, setLoading] = useState(false);

  async function handleBuy() {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: product.id }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card flex flex-col">
      <div className="aspect-video rounded-xl bg-gradient-to-br from-peach-light/40 to-mocha/10 mb-5 flex items-center justify-center">
        <span className="font-script text-3xl text-peach/50">Program</span>
      </div>
      {product.featured && (
        <span className="inline-block font-body text-xs font-semibold text-peach bg-peach/10 rounded-full px-3 py-1 mb-3 self-start">
          ✨ Most popular
        </span>
      )}
      <h3 className="font-heading text-2xl font-semibold text-brown mb-2">{product.name}</h3>
      <p className="font-body text-sm text-mocha/80 leading-relaxed flex-1">{product.description}</p>
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-peach-light/30">
        <span className="font-heading text-2xl font-semibold text-peach">
          {formatPrice(product.price)}
        </span>
        <button
          onClick={handleBuy}
          disabled={loading}
          className="btn-primary text-sm disabled:opacity-60"
        >
          {loading ? 'Loading…' : 'Buy now →'}
        </button>
      </div>
    </div>
  );
}

export default function WorkoutPrograms() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-12">
        <span className="section-eyebrow">
          <LeafDot /> Paid programs
        </span>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mt-2 leading-tight max-w-2xl">
          Programs built for <em className="italic text-peach">your real life</em>
        </h1>
        <p className="font-body text-lg text-mocha/80 mt-5 max-w-xl leading-relaxed">
          Every program is a digital download — buy once, access forever. No subscription, no upsells.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p) => (
            <ProgramCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-12 bg-cream-dark rounded-2xl border border-peach-light/30 p-6 md:p-8 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div>
            <h3 className="font-heading text-xl font-semibold text-brown">Secure checkout via Stripe</h3>
            <p className="font-body text-sm text-mocha/70 mt-1">
              All payments are processed securely. Digital downloads delivered instantly after purchase.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-body text-xs text-mocha/50">Powered by</span>
            <span className="font-body text-sm font-semibold text-brown">Stripe</span>
          </div>
        </div>
      </section>
    </>
  );
}
