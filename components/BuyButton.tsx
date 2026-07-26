'use client';

import { useState } from 'react';

interface Props {
  productId: string;
  label?: string;
  className?: string;
}

/**
 * Stripe checkout button, shared by the shop grid and the product detail page.
 * Posts the product id to /api/checkout and redirects to the returned session.
 */
export default function BuyButton({ productId, label = 'Add to cart →', className = 'btn-primary' }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleBuy() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
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
    <div className="flex flex-col gap-2">
      <button
        onClick={handleBuy}
        disabled={loading}
        className={`${className} disabled:opacity-60 disabled:cursor-not-allowed`}
      >
        {loading ? 'Redirecting…' : label}
      </button>
      {error && <p className="font-body text-xs text-red-500">{error}</p>}
    </div>
  );
}
