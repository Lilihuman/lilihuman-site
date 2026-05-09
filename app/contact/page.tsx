'use client';

import { useState } from 'react';
import LeafDot from '@/components/LeafDot';

const socials = [
  { label: 'Instagram', handle: '@lilihuman', href: 'https://instagram.com/lilihuman', icon: '📸' },
  { label: 'Pinterest', handle: 'lilihuman', href: 'https://pinterest.com/lilihuman', icon: '📌' },
  { label: 'YouTube', handle: 'Lili Human', href: 'https://youtube.com/@lilihuman', icon: '▶️' },
  { label: 'Email', handle: 'lili@lilihuman.com', href: 'mailto:lili@lilihuman.com', icon: '✉️' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-peach-light/50 bg-cream font-body text-sm text-brown placeholder:text-mocha/40 focus:outline-none focus:border-peach focus:ring-1 focus:ring-peach transition-colors';

  return (
    <>
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-12">
        <span className="section-eyebrow">
          <LeafDot /> Say hello
        </span>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mt-2 leading-tight max-w-2xl">
          I'd love to <em className="italic text-peach">hear from you</em>
        </h1>
        <p className="font-body text-lg text-mocha/80 mt-5 max-w-xl leading-relaxed">
          Questions about programs, collaboration enquiries, or just want to share something? Send me a note.
          I read every single one.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-24 grid md:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          {status === 'success' ? (
            <div className="card text-center py-12">
              <div className="text-4xl mb-4">💌</div>
              <h2 className="font-heading text-2xl text-brown mb-2">Message sent!</h2>
              <p className="font-body text-sm text-mocha/70 leading-relaxed">
                Thanks for reaching out. I'll get back to you within a couple of days.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="btn-secondary mt-6 text-sm"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-xs font-medium text-mocha/70 mb-1.5 block">
                    Your name
                  </label>
                  <input
                    type="text"
                    placeholder="Lili"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="font-body text-xs font-medium text-mocha/70 mb-1.5 block">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="font-body text-xs font-medium text-mocha/70 mb-1.5 block">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="font-body text-xs font-medium text-mocha/70 mb-1.5 block">
                  Message
                </label>
                <textarea
                  rows={6}
                  required
                  placeholder="Tell me what's on your mind…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>
              {status === 'error' && (
                <p className="font-body text-sm text-red-500">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full justify-center disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending…' : 'Send message →'}
              </button>
            </form>
          )}
        </div>

        {/* Socials + info */}
        <div>
          <h2 className="font-heading text-2xl text-brown mb-6">Find me online</h2>
          <div className="space-y-4">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-center gap-4 hover:border-peach/40 group"
              >
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <p className="font-body text-sm font-medium text-brown group-hover:text-peach transition-colors">
                    {s.label}
                  </p>
                  <p className="font-body text-xs text-mocha/50">{s.handle}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 p-5 bg-cream-dark rounded-2xl border border-peach-light/30">
            <p className="font-body text-sm font-medium text-brown mb-1">For collaboration & press</p>
            <p className="font-body text-sm text-mocha/70 leading-relaxed">
              Brand partnerships, podcast invites, and media enquiries — please use the contact form
              and mark your subject "Collaboration" so I can get back to you quickly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
