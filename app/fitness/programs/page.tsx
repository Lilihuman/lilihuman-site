'use client';
import { useState } from 'react';
import Image from 'next/image';
import LeafDot from '@/components/LeafDot';

const programs = [
  // ── 20-Minute Hustle ($15–$25) ──────────────────────────────────────
  {
    id: 7,
    title: '20-Minute Hustle — 30-Day Plan',
    description: 'Thirty days of 20-minute workouts built for real life. No equipment, no gym, no excuses. Lower body, upper body, cardio, and recovery — all mapped out for you.',
    price: '$15.00',
    badge: null,
    tags: ['No equipment', 'All levels'],
    pairsWell: null,
    image: '/images/programs/20min-hustle-fitness.png',
    files: ['/downloads/20-min-hustle-fitness.pdf'],
  },
  {
    id: 8,
    title: '20-Minute Hustle — Meal Plan Bundle',
    description: 'Two weeks of fat-loss meal plans designed to pair with your 20-Minute Hustle workouts. Simple, repeatable meals with a grocery list included. Week 2 upgrades the plan to keep your progress going.',
    price: '$15.00',
    badge: null,
    tags: ['All levels'],
    pairsWell: { label: '20-Minute Hustle — 30-Day Plan', href: '#hustle-30-day' },
    image: '/images/programs/20min-hustle-nutrition.png',
    files: ['/downloads/20-min-hustle-meal-plan-w1.pdf', '/downloads/20-min-hustle-meal-plan-w2.pdf'],
  },
  {
    id: 9,
    title: '20-Minute Hustle — Complete Bundle',
    description: 'The full package — 30 days of workouts plus two weeks of fat-loss meal plans. Everything you need to move, eat well, and build habits that stick.',
    price: '$25.00',
    badge: 'Best value',
    tags: ['No equipment', 'All levels'],
    pairsWell: null,
    image: '/images/programs/20min-hustle-complete.png',
    files: ['/downloads/20-min-hustle-fitness.pdf', '/downloads/20-min-hustle-meal-plan-w1.pdf', '/downloads/20-min-hustle-meal-plan-w2.pdf'],
  },
  // ── Postpartum Reset ($15–$35) ───────────────────────────────────────
  {
    id: 5,
    title: 'Postpartum Reset — Meal Plan Bundle',
    description: 'Two weeks of nourishing meal plans designed to pair with your Postpartum Reset program. Batch-cook friendly, high protein, real-life ready.',
    price: '$15.00',
    badge: null,
    tags: ['All levels'],
    pairsWell: { label: 'Postpartum Reset — 4-Week Program', href: '#postpartum-reset' },
    image: '/images/programs/postpartum-nutrition.png',
    files: ['/downloads/postpartum-reset-meal-plan-a.pdf', '/downloads/postpartum-reset-meal-plan-b.pdf'],
  },
  {
    id: 4,
    title: 'Postpartum Reset — 4-Week Program',
    description: 'Rebuild your core and pelvic floor, restore mobility, and gradually reintroduce strength — all in 20–30 minutes a day. Four progressive weeks designed specifically for postpartum moms at every stage of their journey.',
    price: '$25.00',
    badge: null,
    tags: ['No equipment', 'All levels'],
    pairsWell: null,
    image: '/images/programs/postpartum-fitness.png',
    files: ['/downloads/postpartum-reset-4-week-program.pdf'],
  },
  {
    id: 6,
    title: 'Postpartum Reset — Complete Bundle',
    description: 'Everything you need in one place — the full 4-week postpartum fitness program plus both meal plan weeks. Move well, eat well, and rebuild your strength and confidence from the inside out.',
    price: '$35.00',
    badge: 'Best value',
    tags: ['No equipment', 'All levels'],
    pairsWell: null,
    image: '/images/programs/postpartum-complete.png',
    files: ['/downloads/postpartum-reset-4-week-program.pdf', '/downloads/postpartum-reset-meal-plan-a.pdf', '/downloads/postpartum-reset-meal-plan-b.pdf'],
  },
  // ── Strong Mama ($19–$57) ────────────────────────────────────────────
  {
    id: 2,
    title: 'Strong Mama — 8-Week Nutrition Program',
    description: 'Eight weeks of protein-first meal planning designed to fuel your workouts and support fat loss — without extreme dieting or cutting food groups. Simple meals, affordable ingredients, and a framework you can actually stick to.',
    price: '$19.00',
    badge: null,
    tags: ['All levels'],
    pairsWell: { label: 'Strong Mama — 8-Week Program', href: '#strong-mama' },
    image: '/images/programs/strong-mama-nutrition.png',
    files: ['/downloads/strong-mama-nutrition-program.pdf'],
  },
  {
    id: 1,
    title: 'Strong Mama — 8-Week Program',
    description: 'Eight weeks of progressive strength training designed for busy moms. Four workouts a week, dumbbells and a resistance band, and a full exercise instruction guide included so you always know exactly what to do and how to do it right.',
    price: '$47.00',
    badge: 'Most popular',
    tags: ['Dumbbells', 'Intermediate'],
    pairsWell: null,
    image: '/images/programs/strong-mama-fitness.png',
    files: ['/downloads/strong-mama-8-week-program.pdf', '/downloads/strong-mama-exercise-guide.pdf'],
  },
  {
    id: 3,
    title: 'Strong Mama — Complete Bundle',
    description: 'The full Strong Mama experience — 8 weeks of progressive workouts, the exercise instruction guide, and the complete nutrition program. Everything you need to get stronger, eat better, and show up for yourself every day.',
    price: '$57.00',
    badge: 'Best value',
    tags: ['Dumbbells', 'All levels'],
    pairsWell: null,
    image: '/images/programs/strong-mama-complete.png',
    files: ['/downloads/strong-mama-8-week-program.pdf', '/downloads/strong-mama-exercise-guide.pdf', '/downloads/strong-mama-nutrition-program.pdf'],
  },
];

export default function Programs() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-12">
        <span className="section-eyebrow">
          <LeafDot /> Paid programs
        </span>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mt-2 leading-tight max-w-2xl">
          Programs built for <em className="italic text-sage">your real life</em>
        </h1>
        <p className="font-body text-lg text-mocha/80 mt-5 max-w-xl leading-relaxed">
          Every program is a digital download — buy once, access forever. No subscription, no upsells.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div
              key={p.id}
              id={p.id === 7 ? 'hustle-30-day' : p.id === 4 ? 'postpartum-reset' : p.id === 1 ? 'strong-mama' : undefined}
              className="card flex flex-col"
            >
              <div className="relative rounded-2xl overflow-hidden h-48 mb-4">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              {p.badge && (
                <span className="inline-flex items-center gap-1 font-body text-xs font-medium text-amber-700 bg-amber-50 rounded-full px-3 py-1 mb-3 self-start">
                  ✨ {p.badge}
                </span>
              )}
              <h3 className="font-heading text-xl font-semibold text-brown mb-2">{p.title}</h3>
              {p.tags && p.tags.length > 0 && (
                <div className="flex gap-2 flex-wrap mb-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="inline-block font-body text-xs font-medium text-mocha/60 bg-mocha/10 rounded-full px-2.5 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <p className="font-body text-sm text-mocha/70 leading-relaxed flex-1">{p.description}</p>
              {p.pairsWell && (
                <p className="font-body text-xs text-mocha/50 mt-2">
                  Pairs well with{' '}
                  <a href={p.pairsWell.href} className="text-sage underline underline-offset-2 hover:text-sage/80">
                    {p.pairsWell.label}
                  </a>
                </p>
              )}
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-peach-light/40">
                <span className="font-heading text-2xl text-brown">{p.price}</span>
                <button className="btn-primary text-sm">Buy now →</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-body text-sm text-mocha/50 mb-2">Secure checkout via Stripe</p>
          <p className="font-body text-xs text-mocha/40">
            All payments are processed securely. Digital downloads delivered instantly after purchase.
          </p>
          <p className="font-body text-xs text-mocha/30 mt-1">Powered by Stripe</p>
        </div>
      </section>
    </>
  );
}
