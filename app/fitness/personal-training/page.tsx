'use client';

import LeafDot from '@/components/LeafDot';
import Link from 'next/link';
import { useEffect } from 'react';

export default function PersonalTraining() {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <section className="max-w-4xl mx-auto px-5 md:px-8 pt-20 pb-12">
        <Link href="/fitness" className="font-body text-sm text-peach hover:underline mb-8 inline-flex items-center gap-1">
          ← Back to fitness
        </Link>
        <span className="section-eyebrow mt-6">
          <LeafDot /> Custom Program — Step 1 of 2
        </span>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mt-2 leading-tight max-w-2xl">
          Tell me about <em className="italic text-peach">you.</em>
        </h1>
        <p className="font-body text-lg text-mocha/80 mt-5 max-w-xl leading-relaxed">
          This form is Step 1 of getting your custom program. Fill it out so I know exactly what you need —
          then head to the shop to complete your purchase and I'll build your plan within 48–72 hours.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 p-5 bg-peach/10 border border-peach/20 rounded-2xl max-w-lg">
          <div className="flex-1">
            <p className="font-heading text-sm font-semibold text-brown mb-1">Step 1 — This form</p>
            <p className="font-body text-xs text-mocha/60">Tell me your goals, schedule, and where you're starting from.</p>
          </div>
          <div className="hidden sm:block w-px bg-peach/20" />
          <div className="flex-1">
            <p className="font-heading text-sm font-semibold text-brown mb-1">Step 2 — Purchase</p>
            <p className="font-body text-xs text-mocha/60">
              <Link href="/shop" className="text-peach hover:underline font-semibold">Buy your custom program ($30 CAD)</Link>{' '}
              from the shop. I'll email your plan within 48–72 hours.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-6">
          {[
            { icon: '🎯', text: 'Personalised to your goals' },
            { icon: '📅', text: 'Fits your real schedule' },
            { icon: '🥗', text: 'Fitness + nutrition' },
            { icon: '📩', text: 'Delivered in 48–72 hrs' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 font-body text-sm text-mocha/70 bg-cream-dark rounded-full px-4 py-2 border border-peach-light/30">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-5 md:px-8 pb-24">
        <div className="card p-0 overflow-hidden">
          <iframe
            data-tally-src="https://tally.so/embed/gDNLBP?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="500"
            title="Personal Training Intake Form"
            className="w-full"
          />
        </div>
      </section>
    </>
  );
}
