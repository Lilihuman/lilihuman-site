'use client';

import { useState } from 'react';
import Image from 'next/image';
import PreviewBadge from '@/components/PreviewBadge';

export interface Workout {
  id: string;
  title: string;
  description: string;
  tags: string[];
  file: string;
  image: string;
  freeDownload?: boolean;
  hidden?: boolean;
}

export default function WorkoutCard({ workout, preview }: { workout: Workout; preview: boolean }) {
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
        {preview && workout.hidden && (
          <span className="absolute top-2 left-2">
            <PreviewBadge />
          </span>
        )}
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
        {workout.freeDownload ? (
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
