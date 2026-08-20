import type { Metadata } from 'next';
import Link from 'next/link';
import LeafDot from '@/components/LeafDot';
import { isPreview } from '@/lib/preview';

export const metadata: Metadata = {
  title: 'Preview Mode',
  robots: { index: false, follow: false },
};

export default function PreviewPage({
  searchParams,
}: {
  searchParams: { error?: string; ok?: string; exited?: string };
}) {
  const on = isPreview();

  return (
    <section className="max-w-md mx-auto px-5 md:px-8 pt-24 pb-32">
      <span className="section-eyebrow">
        <LeafDot /> Owner only
      </span>
      <h1 className="font-heading text-4xl font-light text-brown mt-3 leading-tight">
        Preview Mode
      </h1>

      {on ? (
        <div className="card mt-8 text-center">
          <div className="text-3xl" aria-hidden>
            🔓
          </div>
          <h2 className="font-heading text-2xl text-brown mt-2">Preview is ON</h2>
          <p className="font-body text-sm text-mocha/70 mt-3 leading-relaxed">
            You&rsquo;re now seeing hidden and not-yet-published items across the whole
            site, each marked with a{' '}
            <span className="inline-block font-body text-[11px] font-semibold text-white bg-peach rounded-full px-2 py-0.5 align-middle">
              🔒 Hidden
            </span>{' '}
            badge. Everyone else still sees the normal public site.
          </p>
          <div className="flex flex-col gap-2 mt-6">
            <Link href="/shop" className="btn-primary text-sm">
              Browse the shop &rarr;
            </Link>
            <a href="/preview/exit" className="font-body text-sm text-mocha/60 hover:text-peach mt-1">
              Exit preview mode
            </a>
          </div>
        </div>
      ) : (
        <div className="card mt-8">
          {searchParams.exited && (
            <p className="font-body text-sm text-sage font-medium mb-4">
              Preview mode is off — you&rsquo;re seeing the public site again.
            </p>
          )}
          {searchParams.error && (
            <p className="font-body text-sm text-red-500 mb-4">
              That password didn&rsquo;t match. Try again.
            </p>
          )}
          <p className="font-body text-sm text-mocha/70 leading-relaxed mb-5">
            Enter your password to privately preview hidden products, services, and
            scheduled posts on the live site.
          </p>
          <form method="POST" action="/api/preview" className="flex flex-col gap-3">
            <input
              type="password"
              name="password"
              required
              autoFocus
              placeholder="Password"
              className="px-4 py-2.5 rounded-pill border border-peach-light/50 font-body text-sm text-mocha focus:outline-none focus:border-peach"
            />
            <button type="submit" className="btn-primary text-sm">
              Unlock preview &rarr;
            </button>
          </form>
        </div>
      )}
    </section>
  );
}
