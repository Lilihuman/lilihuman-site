'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { label: 'Hub', href: '/fitness' },
  { label: 'Free Workouts', href: '/fitness/free-workouts' },
  { label: 'Programs', href: '/fitness/programs' },
  { label: 'Library', href: '/fitness/library' },
  { label: 'Personal Training', href: '/fitness/personal-training' },
];

export default function FitnessTabs() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-16 z-40 bg-cream/95 backdrop-blur-md border-b border-peach-light/30">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <ul className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-3">
          {tabs.map((tab) => {
            const active =
              tab.href === '/fitness'
                ? pathname === '/fitness'
                : pathname.startsWith(tab.href);
            return (
              <li key={tab.href} className="flex-shrink-0">
                <Link
                  href={tab.href}
                  className={`font-body text-sm font-medium whitespace-nowrap rounded-pill px-4 py-2 transition-colors duration-150 ${
                    active
                      ? 'bg-peach text-white'
                      : 'text-mocha hover:text-peach hover:bg-peach/10'
                  }`}
                >
                  {tab.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
