'use client';

import { useState } from 'react';

interface Props {
  filePath: string;
  productName: string;
}

export default function FreeDownloadButton({ filePath, productName }: Props) {
  const [stage, setStage] = useState<'idle' | 'form' | 'loading' | 'done'>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !name) return;
    setStage('loading');
    setError('');

    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, source: `free-download: ${productName}` }),
      });
    } catch {
      // Don't block the download if the API call fails
    }

    // Trigger the download
    const a = document.createElement('a');
    a.href = filePath;
    a.download = '';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setStage('done');
  }

  if (stage === 'done') {
    return <p className="font-body text-sm text-sage font-medium">Downloading — enjoy! 🎉</p>;
  }

  if (stage === 'idle') {
    return (
      <button
        onClick={() => setStage('form')}
        className="btn-primary text-sm whitespace-nowrap"
      >
        Download Free →
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
      <p className="font-body text-xs text-mocha/60">Enter your details to get the free download:</p>
      <input
        type="text"
        required
        autoFocus
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your first name"
        className="px-3 py-1.5 rounded-pill border border-peach-light/50 font-body text-sm text-mocha focus:outline-none focus:border-peach"
      />
      <div className="flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 min-w-0 px-3 py-1.5 rounded-pill border border-peach-light/50 font-body text-sm text-mocha focus:outline-none focus:border-peach"
        />
        <button
          type="submit"
          disabled={stage === 'loading'}
          className="btn-primary text-sm whitespace-nowrap disabled:opacity-60"
        >
          {stage === 'loading' ? '...' : 'Get it →'}
        </button>
      </div>
      {error && <p className="font-body text-xs text-red-500">{error}</p>}
    </form>
  );
}
