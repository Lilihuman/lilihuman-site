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
          <LeafDot /> Work with me
        </span>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mt-2 leading-tight max-w-2xl">
          Personal Training <em className="italic text-peach">Intake Form</em>
        </h1>
        <p className="font-body text-lg text-mocha/80 mt-5 max-w-xl leading-relaxed">
          Ready to work together? Fill out this form and I'll be in touch within 48 hours to chat about your goals and how I can help.
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          {[
            { icon: '💪', text: 'Personalised to your goals' },
            { icon: '⏱', text: 'Flexible scheduling' },
            { icon: '🌿', text: 'Real life friendly' },
            { icon: '💃', text: 'Zumba + fitness hybrid' },
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
