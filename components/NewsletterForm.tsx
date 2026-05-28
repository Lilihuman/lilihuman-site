'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'newsletter-footer' }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return <p className="font-body text-sm text-peach-light">You're in! Talk soon.</p>;
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 min-w-0 px-4 py-2 rounded-pill bg-cream/10 border border-cream/20 font-body text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:border-peach"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary text-sm whitespace-nowrap disabled:opacity-60"
        >
          {status === 'loading' ? '...' : 'Join'}
        </button>
      </form>
      {status === 'error' && (
        <p className="font-body text-xs text-red-400 mt-2">Something went wrong — please try again.</p>
      )}
    </>
  );
}
