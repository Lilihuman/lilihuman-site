'use client';

import { useState } from 'react';
import LeafDot from '@/components/LeafDot';
import { products, formatPrice, Product } from '@/data/products';

const categories = [
  { key: 'all', label: 'All products' },
  { key: 'program', label: 'Fitness programs' },
  { key: 'printable', label: 'Printables & art' },
  { key: 'physical', label: 'Physical goods' },
];

function ProductCard({ product }: { product: Product }) {
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
      if (data.url) window.location.href = data.url;
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const categoryLabel = {
    program: 'Fitness program',
    printable: 'Printable',
    physical: 'Physical',
  }[product.category];

  return (
    <div className="card flex flex-col group">
      <div className="aspect-square rounded-xl bg-gradient-to-br from-peach-light/30 via-cream to-sage-light/20 mb-4 flex items-center justify-center overflow-hidden">
        <span className="font-script text-2xl text-peach/40">{categoryLabel}</span>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <span className="inline-block font-body text-xs font-medium text-mocha/60 bg-mocha/10 rounded-full px-2.5 py-1">
          {categoryLabel}
        </span>
        {product.type === 'digital' && (
          <span className="inline-block font-body text-xs font-medium text-sage bg-sage/10 rounded-full px-2.5 py-1">
            ⚡ Digital
          </span>
        )}
        {product.featured && (
          <span className="inline-block font-body text-xs font-medium text-peach bg-peach/10 rounded-full px-2.5 py-1">
            ✨ Popular
          </span>
        )}
      </div>

      <h3 className="font-heading text-xl font-semibold text-brown mb-2 group-hover:text-peach transition-colors">
        {product.name}
      </h3>
      <p className="font-body text-sm text-mocha/70 leading-relaxed flex-1">{product.description}</p>

      <div className="flex items-center justify-between mt-5 pt-4 border-t border-peach-light/30">
        <span className="font-heading text-2xl font-semibold text-peach">
          {formatPrice(product.price)}
        </span>
        <button
          onClick={handleBuy}
          disabled={loading}
          className="btn-primary text-sm disabled:opacity-60"
        >
          {loading ? 'Loading…' : 'Add to cart →'}
        </button>
      </div>
    </div>
  );
}

export default function Shop() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? products : products.filter((p) => p.category === filter);

  return (
    <>
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-12">
        <span className="section-eyebrow">
          <LeafDot /> The shop
        </span>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mt-2 leading-tight max-w-2xl">
          Made for your <em className="italic text-peach">real home</em>
        </h1>
        <p className="font-body text-lg text-mocha/80 mt-5 max-w-xl leading-relaxed">
          Fitness programs, printables, and a little physical merch. All designed with warmth and intention.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-24">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              className={`font-body text-sm font-medium px-5 py-2 rounded-pill border transition-all ${
                filter === c.key
                  ? 'bg-peach text-white border-peach'
                  : 'border-peach-light/50 text-mocha hover:border-peach hover:text-peach bg-transparent'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Stripe trust badge */}
        <div className="mt-12 text-center">
          <p className="font-body text-xs text-mocha/40">
            Secure payments via Stripe · Digital downloads delivered instantly · Questions?{' '}
            <a href="/contact" className="text-peach hover:underline">Contact me</a>
          </p>
        </div>
      </section>
    </>
  );
}
