import { Suspense } from 'react';
import OrderConfirmationClient from './OrderConfirmationClient';

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="max-w-2xl mx-auto px-5 md:px-8 py-24 text-center">
        <p className="font-body text-mocha/60">Loading your order…</p>
      </div>
    }>
      <OrderConfirmationClient />
    </Suspense>
  );
}
