'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="font-body text-sm text-peach-light">
        You're in! Talk soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 min-w-0 px-4 py-2 rounded-pill bg-cream/10 border border-cream/20 font-body text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:border-peach"
      />
      <button type="submit" className="btn-primary text-sm whitespace-nowrap">
        Join
      </button>
    </form>
  );
}
