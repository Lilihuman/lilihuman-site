'use client';
import { useState } from 'react';
import Image from 'next/image';
import LeafDot from '@/components/LeafDot';

const programs = [
  { id: '20min-hustle', title: '20-Minute Hustle - 30-Day Plan', description: 'Thirty days of 20-minute workouts built for real life. No equipment, no gym, no excuses. Lower body, upper body, cardio, and recovery - all mapped out for you.', price: '$15.00', badge: null, tags: ['No equipment', 'All levels'], image: '/images/programs/20min-hustle-fitness.png' },
  { id: '20min-hustle-nutrition', title: '20-Minute Hustle - Meal Plan Bundle', description: 'Two weeks of fat-loss meal plans to pair with your 20-Minute Hustle workouts. Simple, repeatable meals with a grocery list included.', price: '$15.00', badge: null, tags: ['All levels'], image: '/images/programs/20min-hustle-nutrition.png' },
  { id: '20min-hustle-complete', title: '20-Minute Hustle - Complete Bundle', description: 'The full package - 30 days of workouts plus two weeks of fat-loss meal plans. Everything you need to move, eat well, and build habits that stick.', price: '$25.00', badge: 'Best value', tags: ['No equipment', 'All levels'], image: '/images/programs/20min-hustle-complete.png' },
  { id: 'postpartum-meal-plan', title: 'Postpartum Reset - Meal Plan Bundle', description: 'Two weeks of nourishing meal plans for your Postpartum Reset program. Batch-cook friendly, high protein, real-life ready.', price: '$15.00', badge: null, tags: ['All levels'], image: '/images/programs/postpartum-nutrition.png' },
  { id: 'postpartum-reset', title: 'Postpartum Reset - 4-Week Program', description: 'Rebuild your core and pelvic floor, restore mobility, and gradually reintroduce strength - all in 20-30 minutes a day. Four progressive weeks designed specifically for postpartum moms.', price: '$25.00', badge: null, tags: ['No equipment', 'All levels'], image: '/images/programs/postpartum-fitness.png' },
  { id: 'postpartum-complete', title: 'Postpartum Reset - Complete Bundle', description: 'Everything you need - the full 4-week postpartum fitness program plus both meal plan weeks. Move well, eat well, and rebuild your strength and confidence from the inside out.', price: '$35.00', badge: 'Best value', tags: ['No equipment', 'All levels'], image: '/images/programs/postpartum-complete.png' },
  { id: 'strong-mama-nutrition', title: 'Strong Mama - 8-Week Nutrition Program', description: 'Eight weeks of protein-first meal planning to fuel your workouts and support fat loss - without extreme dieting or cutting food groups. Simple meals, affordable ingredients, and a framework you can actually stick to.', price: '$19.00', badge: null, tags: ['All levels'], image: '/images/programs/strong-mama-nutrition.png' },
  { id: 'strong-mama-8wk', title: 'Strong Mama - 8-Week Program', description: 'Eight weeks of progressive strength training for busy moms. Four workouts a week, dumbbells and a resistance band, and a full exercise instruction guide included so you always know exactly what to do.', price: '$47.00', badge: 'Most popular', tags: ['Dumbbells', 'Intermediate'], image: '/images/programs/strong-mama-fitness.png' },
  { id: 'strong-mama-complete', title: 'Strong Mama - Complete Bundle', description: 'The full Strong Mama experience - 8 weeks of progressive workouts, the exercise instruction guide, and the complete nutrition program. Everything you need to get stronger, eat better, and show up for yourself every day.', price: '$57.00', badge: 'Best value', tags: ['Dumbbells', 'All levels'], image: '/images/programs/strong-mama-complete.png' },
];

function ProgramCard({ program }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  async function handleBuy() {
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ productId: program.id }) });
      const data = await res.json();
      if (data.url) { window.location.href = data.url; }
      else { setError(data.error || 'Something went wrong.'); setLoading(false); }
    } catch { setError('Something went wrong.'); setLoading(false); }
  }
  return (
    <div className="card flex flex-col">
      <div className="relative rounded-2xl overflow-hidden h-48 mb-4">
        <Image src={program.image} alt={program.title} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      {program.badge && <span className="inline-flex items-center font-body text-xs font-medium text-amber-700 bg-amber-50 rounded-full px-3 py-1 mb-3 self-start">{program.badge}</span>}
      <h3 className="font-heading text-xl font-semibold text-brown mb-2">{program.title}</h3>
      <div className="flex gap-2 flex-wrap mb-2">{program.tags.map(tag => <span key={tag} className="inline-block font-body text-xs font-medium text-mocha/60 bg-mocha/10 rounded-full px-2.5 py-1">{tag}</span>)}</div>
      <p className="font-body text-sm text-mocha/70 leading-relaxed flex-1">{program.description}</p>
      {error && <p className="font-body text-xs text-red-500 mt-2">{error}</p>}
      <div className="flex items-center justify-between mt-5 pt-4 border-t border-peach-light/40">
        <span className="font-heading text-2xl text-brown">{program.price}</span>
        <button onClick={handleBuy} disabled={loading} className="btn-primary text-sm disabled:opacity-60 disabled:cursor-not-allowed">{loading ? 'Redirecting...' : 'Buy now'}</button>
      </div>
    </div>
  );
}

export default function Programs() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-12">
        <span className="section-eyebrow"><LeafDot /> Paid programs</span>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mt-2 leading-tight max-w-2xl">Programs built for <em className="italic text-sage">your real life</em></h1>
        <p className="font-body text-lg text-mocha/80 mt-5 max-w-xl leading-relaxed">Every program is a digital download - buy once, access forever. No subscription, no upsells.</p>
      </section>
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{programs.map(p => <ProgramCard key={p.id} program={p} />)}</div>
        <div className="mt-16 text-center"><p className="font-body text-sm text-mocha/50 mb-2">Secure checkout via Stripe</p></div>
      </section>
    </>
  );
}