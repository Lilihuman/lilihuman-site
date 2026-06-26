'use client';

import { useState } from 'react';
import Image from 'next/image';
import LeafDot from '@/components/LeafDot';

const workouts = [
  {
    id: 'desk-reset',
    title: 'Daily 10-Minute Desk Reset',
    description: 'Eight simple desk-friendly moves to release tension, improve mobility, and reset your body — in just 10 minutes. Neck turns, thoracic rotations, chair squats, desk incline planks, and more. No equipment, do it right at your desk.',
    tags: ['Desk-friendly', '10 min', 'No equipment', 'Beginner-friendly'],
    file: '/downloads/daily-10-min-desk-reset.pdf',
    image: '/images/free-workouts/daily-10-min-desk-reset.png',
  },
  {
    id: 'full-body-burn',
    title: '15-Min Full Body Burn',
    description: 'No equipment needed. 40 seconds work, 20 seconds rest. Beginner and advanced modifications included. This is the workout you do when you have 15 minutes and zero excuses.',
    tags: ['Full body', '15 min', 'No equipment', 'All levels'],
    file: '/downloads/15-min-full-body-burn.pdf',
    image: '/images/free-workouts/15-min-full-body-burn.png',
  },
  {
    id: 'arms-shoulders',
    title: '30-Day Arms & Shoulders Plan',
    description: 'Stronger arms and defined shoulders in 30 days. Push, pull, and sculpt with light dumbbells — no gym needed.',
    tags: ['Arms & shoulders', '20 min/day', 'Light dumbbells', 'Intermediate'],
    file: '/downloads/30-day-arms-and-shoulders.pdf',
    image: '/images/free-workouts/30-day-arms-&-shoulders-plan.png',
    freeDownload: true,
  },
  {
    id: 'car-ride-mobility',
    title: 'Car Ride Mobility Plan',
    description: 'Perfect for long drives, road trips, or any time you\'ve been sitting too long. Simple stretches and mobility moves you can do at a rest stop or in a parking lot.',
    tags: ['Mobility', '10 min', 'No equipment', 'All levels'],
    file: '/downloads/car-ride-mobility-plan.pdf',
    image: '/images/free-workouts/Car-ride-mobility.png',
    freeDownload: true,
  },
];

function WorkoutCard({ workout }: { workout: (typeof workouts)[number] }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email) { setError('Please enter your name and email.'); return; }
    setLoading(true);
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, source: `free-workout: ${workout.title}` }),
      });
    } catch {
      // Don't block the download if the API call fails
    }
    setUnlocked(true);
    setLoading(false);
  }

  return (
    <div className="card flex flex-col">
      <div className="relative rounded-2xl overflow-hidden h-48 mb-4">
        <Image
          src={workout.image}
          alt={workout.title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="flex gap-2 flex-wrap mb-4">
        {workout.tags.map((tag) => (
          <span key={tag} className="inline-block font-body text-xs font-medium text-mocha/60 bg-mocha/10 rounded-full px-2.5 py-1">
            {tag}
          </span>
        ))}
      </div>

      <h3 className="font-heading text-2xl font-semibold text-brown mb-2">{workout.title}</h3>
      <p className="font-body text-sm text-mocha/70 leading-relaxed flex-1">{workout.description}</p>

      <div className="mt-6">
        {'freeDownload' in workout && workout.freeDownload ? (
          <a href={workout.file} download className="btn-primary w-full justify-center text-sm text-center block">
            Download for free
          </a>
        ) : unlocked ? (
          <a href={workout.file} download className="btn-primary w-full justify-center text-sm text-center block">
            Download your workout
          </a>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => { setName(e.target.value); setError(''); }}
              placeholder="Your first name"
              className="w-full px-4 py-3 rounded-pill border border-peach-light/50 bg-cream font-body text-sm text-brown placeholder:text-mocha/40 focus:outline-none focus:border-peach focus:ring-1 focus:ring-peach"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(''); }}
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-pill border border-peach-light/50 bg-cream font-body text-sm text-brown placeholder:text-mocha/40 focus:outline-none focus:border-peach focus:ring-1 focus:ring-peach"
            />
            {error && <p className="font-body text-xs text-red-400 px-1">{error}</p>}
            <button type="submit" disabled={loading} className="btn-secondary text-sm disabled:opacity-60">
              {loading ? '...' : 'Get the free download'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function FreeWorkouts() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-12">
        <span className="section-eyebrow">
          <LeafDot /> Free workouts
        </span>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mt-2 leading-tight max-w-2xl">
          Move for free. <em className="italic text-sage">No strings.</em>
        </h1>
        <p className="font-body text-lg text-mocha/80 mt-5 max-w-xl leading-relaxed">
          Drop your name and email and the PDF downloads instantly. No spam — just good workouts.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-5 md:px-8 pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {workouts.map((w) => (
            <WorkoutCard key={w.id} workout={w} />
          ))}
        </div>
      </section>
    </>
  );
}
