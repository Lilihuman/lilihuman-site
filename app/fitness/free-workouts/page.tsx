'use client';

import { useState } from 'react';
import LeafDot from '@/components/LeafDot';

const workouts = [
  {
    id: 'full-body-burn',
    title: '15-Min Full Body Burn',
    description: 'No equipment needed. 40 seconds work, 20 seconds rest. Beginner and advanced modifications included. This is the workout you do when you have 15 minutes and zero excuses.',
    tags: ['Full body', '15 min', 'No equipment', 'All levels'],
    file: '/downloads/15-min-full-body-burn.pdf',
  },
  {
    id: 'arms-shoulders',
    title: '30-Day Arms & Shoulders Plan',
    description: 'Stronger arms and defined shoulders in 30 days. Push, pull, and sculpt with light dumbbells — no gym needed.',
    tags: ['Arms & shoulders', '20 min/day', 'Light dumbbells', 'Intermediate'],
    file: '/downloads/30-day-arms-and-shoulders.pdf',
  },
  {
    id: 'car-ride-mobility',
    title: 'Car Ride Mobility Plan',
    description: 'Perfect for long drives, road trips, or any time you\'ve been sitting too long. Simple stretches and mobility moves you can do at a rest stop or in a parking lot.',
    tags: ['Mobility', '10 min', 'No equipment', 'All levels'],
    file: '/car-ride-mobility-plan.pdf',
    freeDownload: true,
  },
];

function WorkoutCard({ workout }: { workout: (typeof workouts)[number] }) {
  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) { setError('Please enter your email.'); return; }
    setUnlocked(true);
  }

  return (
    <div className="card flex flex-col">
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
          <a
            href={workout.file}
            download
            className="btn-primary w-full justify-center text-sm text-center block"
          >
            Download for free
          </a>
        ) : unlocked ? (
          <a
            href={workout.file}
            download
            className="btn-primary w-full justify-center text-sm text-center block"
          >
            Download your workout
          </a>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(''); }}
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-pill border border-peach-light/50 bg-cream font-body text-sm text-brown placeholder:text-mocha/40 focus:outline-none focus:border-peach focus:ring-1 focus:ring-peach"
            />
            {error && <p className="font-body text-xs text-red-400 px-1">{error}</p>}
            <button type="submit" className="btn-secondary text-sm">
              Get the free download
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
          Drop your email and the PDF downloads instantly. No spam — just good workouts.
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
