'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { label: 'Hub', href: '/fitness', hidden: true },
  { label: 'Free Workouts', href: '/fitness/free-workouts' },
  { label: 'Programs', href: '/fitness/programs', hidden: true },
  { label: 'Library', href: '/fitness/library', hidden: true },
  { label: 'Personal Training', href: '/fitness/personal-training', hidden: true },
];

export default function FitnessTabs({ preview = false }: { preview?: boolean }) {
  const pathname = usePathname();

  // Public sees only the visible tabs; in Preview Mode the owner sees all,
  // with the hidden ones marked. If there's nothing to navigate between, hide
  // the bar entirely for the public.
  const shown = preview ? tabs : tabs.filter((t) => !t.hidden);
  if (!preview && shown.length <= 1) return null;

  return (
    <nav className="sticky top-16 z-40 bg-cream/95 backdrop-blur-md border-b border-peach-light/30">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <ul className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-3">
          {shown.map((tab) => {
            const active =
              tab.href === '/fitness'
                ? pathname === '/fitness'
                : pathname.startsWith(tab.href);
            return (
              <li key={tab.href} className="flex-shrink-0">
                <Link
                  href={tab.href}
                  className={`font-body text-sm font-medium whitespace-nowrap rounded-pill px-4 py-2 transition-colors duration-150 inline-flex items-center gap-1.5 ${
                    active
                      ? 'bg-peach text-white'
                      : 'text-mocha hover:text-peach hover:bg-peach/10'
                  }`}
                >
                  {tab.label}
                  {preview && tab.hidden && (
                    <span className="text-[10px] leading-none" title="Hidden from the public">🔒</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
