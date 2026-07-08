'use client';

import { useState } from 'react';

interface Props {
  /** Where to send people once they're on the early-access list. */
  appUrl: string;
}

export default function AppEarlyAccessForm({ appUrl }: Props) {
  const [stage, setStage] = useState<'form' | 'loading' | 'done'>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email) return;
    setStage('loading');

    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, source: 'lili-app-early-access' }),
      });
    } catch {
      // Don't block access if the signup call fails.
    }

    // Try to open the app immediately; the visible button below is the reliable fallback
    // if the browser blocks the pop-up.
    try {
      window.open(appUrl, '_blank', 'noopener,noreferrer');
    } catch {
      /* no-op */
    }

    setStage('done');
  }

  if (stage === 'done') {
    return (
      <div className="text-center">
        <div className="text-4xl mb-3">🎉</div>
        <p className="font-heading text-2xl text-brown">You're in!</p>
        <p className="font-body text-sm text-mocha/70 mt-2 leading-relaxed">
          You've got free early access. If the app didn't open automatically, tap below — and
          keep an eye on your inbox for updates.
        </p>
        <a
          href={appUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm mt-5"
        >
          Open the Lili App →
        </a>
      </div>
    );
  }

  const inputClass =
    'w-full px-4 py-3 rounded-pill border border-peach-light/50 bg-cream font-body text-sm text-brown placeholder:text-mocha/40 focus:outline-none focus:border-peach focus:ring-1 focus:ring-peach transition-colors';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your first name"
        className={inputClass}
      />
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className={inputClass}
      />
      <button
        type="submit"
        disabled={stage === 'loading'}
        className="btn-primary justify-center disabled:opacity-60"
      >
        {stage === 'loading' ? 'One sec…' : 'Get early free access →'}
      </button>
      <p className="font-body text-xs text-mocha/50 text-center">
        Free during early access. No card required. Unsubscribe anytime.
      </p>
    </form>
  );
}
