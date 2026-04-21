'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import LeafDot from '@/components/LeafDot';

interface OrderDetails {
  customerEmail: string;
  productName: string;
  productType: string;
  filePath: string;
  amountTotal: number;
  sessionId: string;
}

export default function OrderConfirmationClient() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [order, setOrder] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!sessionId) {
      setError('No session ID found.');
      setLoading(false);
      return;
    }

    fetch(`/api/order?session_id=${sessionId}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.error) setError(data.error);
        else setOrder(data);
      })
      .catch(() => setError('Could not load order details.'))
      .finally(() => setLoading(false));
  }, [sessionId]);

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto px-5 md:px-8 py-24 text-center">
        <div className="inline-block w-8 h-8 border-2 border-peach border-t-transparent rounded-full animate-spin mb-4" />
        <p className="font-body text-mocha/60">Verifying your order…</p>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="max-w-2xl mx-auto px-5 md:px-8 py-24 text-center">
        <p className="font-body text-mocha/60 mb-6">{error || 'Something went wrong.'}</p>
        <Link href="/shop" className="btn-secondary">Back to shop</Link>
      </div>
    );
  }

  return (
    <section className="max-w-2xl mx-auto px-5 md:px-8 py-20 text-center">
      <div className="text-5xl mb-6">🎉</div>
      <span className="section-eyebrow justify-center">
        <LeafDot /> Order confirmed
      </span>
      <h1 className="font-heading text-4xl md:text-5xl font-light text-brown mt-2 leading-tight">
        Thank you, <em className="italic text-peach">you're all set!</em>
      </h1>
      <p className="font-body text-mocha/70 mt-4 leading-relaxed">
        A confirmation has been sent to <strong className="text-brown">{order.customerEmail}</strong>.
      </p>

      {/* Order summary */}
      <div className="mt-10 bg-cream-dark rounded-2xl border border-peach-light/30 p-6 text-left">
        <h2 className="font-heading text-xl text-brown mb-4">Order summary</h2>
        <div className="flex justify-between items-start pb-4 border-b border-peach-light/20">
          <div>
            <p className="font-body text-sm font-medium text-brown">{order.productName}</p>
            <p className="font-body text-xs text-mocha/50 mt-1 capitalize">{order.productType} product</p>
          </div>
          <span className="font-heading text-lg text-peach">
            ${(order.amountTotal / 100).toFixed(2)}
          </span>
        </div>
        <p className="font-body text-xs text-mocha/40 mt-3">
          Order ref: {order.sessionId.slice(-12).toUpperCase()}
        </p>
      </div>

      {/* Download section */}
      {order.productType === 'digital' && order.filePath && (
        <div className="mt-6 bg-sage/10 rounded-2xl border border-sage/20 p-6">
          <p className="font-body text-sm font-medium text-brown mb-1">Your download is ready</p>
          <p className="font-body text-xs text-mocha/60 mb-4 leading-relaxed">
            Click the button below to download your file. The link is also in your confirmation email.
          </p>
          <a
            href={order.filePath}
            download
            className="btn-sage inline-flex"
          >
            ⬇ Download your file
          </a>
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-3 mt-10">
        <Link href="/shop" className="btn-secondary">Back to shop</Link>
        <Link href="/fitness" className="btn-primary">Explore fitness</Link>
      </div>
    </section>
  );
}
