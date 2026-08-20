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
        <Link href="/fitness/free-workouts" className="font-body text-sm text-peach hover:underline mb-8 inline-flex items-center gap-1">
          ← Back to fitness
        </Link>
        <span className="section-eyebrow mt-6">
          <LeafDot /> Custom Program
        </span>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mt-2 leading-tight max-w-2xl">
          A program built around <em className="italic text-peach">your life.</em>
        </h1>
        <p className="font-body text-lg text-mocha/80 mt-5 max-w-xl leading-relaxed">
          A fully personalised fitness and nutrition plan — your goals, your schedule, your body.
          You buy it, I build it, and it lands in your inbox within 48–72 hours.
        </p>

        {/* How it works — purchase first, then the intake form */}
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          <div className="p-5 bg-peach/10 border border-peach/20 rounded-2xl">
            <p className="font-heading text-sm font-semibold text-brown mb-1">Step 1 — Purchase</p>
            <p className="font-body text-xs text-mocha/60 leading-relaxed">
              Grab your custom program from the{' '}
              <Link href="/shop/custom-program" className="text-peach hover:underline font-semibold">shop ($60 CAD)</Link>.
            </p>
          </div>
          <div className="p-5 bg-peach/10 border border-peach/20 rounded-2xl">
            <p className="font-heading text-sm font-semibold text-brown mb-1">Step 2 — Intake form</p>
            <p className="font-body text-xs text-mocha/60 leading-relaxed">
              I email you a short intake form — your goals, schedule, and where you&rsquo;re starting from.
            </p>
          </div>
          <div className="p-5 bg-peach/10 border border-peach/20 rounded-2xl">
            <p className="font-heading text-sm font-semibold text-brown mb-1">Step 3 — Your plan</p>
            <p className="font-body text-xs text-mocha/60 leading-relaxed">
              I build your personalised fitness + nutrition program and send it within 48–72 hours.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/shop/custom-program" className="btn-primary inline-block">
            Get your custom program — $60 CAD &rarr;
          </Link>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
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
        <h2 className="font-heading text-2xl font-semibold text-brown">Already purchased? Start your intake</h2>
        <p className="font-body text-sm text-mocha/60 mt-1 mb-5 max-w-xl leading-relaxed">
          Fill this out and I&rsquo;ll get to work — it&rsquo;s the same form I email you after checkout,
          so you can do it here or from your inbox.
        </p>
        <div className="card p-0 overflow-hidden">
          <iframe
            data-tally-src="https://tally.so/embed/gDNLBP?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="500"
            title="Custom Program Intake Form"
            className="w-full"
          />
        </div>
      </section>
    </>
  );
}
