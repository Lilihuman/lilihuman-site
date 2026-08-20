'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FreeDownloadButton from '@/components/FreeDownloadButton';
import PreviewBadge from '@/components/PreviewBadge';
import { formatPrice, Product } from '@/data/products';

export default function PrintableCard({ product, preview }: { product: Product; preview: boolean }) {
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
      <Link href={`/shop/${product.id}`} className="relative rounded-2xl overflow-hidden h-48 mb-4 block">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-top transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-peach-light/30 via-cream to-sage-light/20 flex items-center justify-center">
            <span className="font-script text-2xl text-peach/40">Coming soon</span>
          </div>
        )}
        {preview && product.hidden && (
          <span className="absolute top-2 left-2">
            <PreviewBadge />
          </span>
        )}
      </Link>

      {product.featured && (
        <span className="inline-flex items-center font-body text-xs font-medium text-amber-700 bg-amber-50 rounded-full px-3 py-1 mb-3 self-start">
          Popular
        </span>
      )}

      <Link href={`/shop/${product.id}`}>
        <h3 className="font-heading text-xl font-semibold text-brown mb-2 hover:text-peach transition-colors">{product.name}</h3>
      </Link>

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
        <span className="font-heading text-2xl text-brown">{product.price === 0 ? 'Free' : formatPrice(product.price)}</span>
        {product.price === 0 ? (
          <FreeDownloadButton filePath={product.filePath!} productName={product.name} />
        ) : (
          <button
            onClick={handleBuy}
            disabled={loading}
            className="btn-primary text-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Redirecting...' : 'Buy now'}
          </button>
        )}
      </div>
    </div>
  );
}
