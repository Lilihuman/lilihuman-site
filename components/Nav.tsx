'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, Search } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Fitness', href: '/fitness' },
  { label: 'Shop', href: '/shop' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  function openSearch() {
    setOpen(false);
    setSearchOpen(true);
  }

  function closeSearch() {
    setSearchOpen(false);
    setQuery('');
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    closeSearch();
    setOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-peach-light/30' : 'bg-cream'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" onClick={closeSearch}>
          <span
            className="font-heading text-2xl font-semibold text-peach leading-none select-none"
            style={{ letterSpacing: '0.02em' }}
          >
            LH
          </span>
          <span className="font-body text-sm font-medium text-brown tracking-wide group-hover:text-peach transition-colors">
            Lili Human
          </span>
        </Link>

        {/* Desktop: nav links (hidden when search is open) */}
        {!searchOpen && (
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="nav-link">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Desktop: expanded search input */}
        {searchOpen && (
          <form onSubmit={handleSubmit} className="hidden md:flex flex-1 mx-8 items-center gap-2">
            <Search size={16} className="text-mocha/40 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search posts, recipes, products…"
              className="flex-1 font-body text-sm text-brown placeholder-mocha/40 bg-transparent border-b border-peach focus:outline-none py-1"
            />
            <button type="button" onClick={closeSearch} className="text-mocha/50 hover:text-peach transition-colors">
              <X size={18} />
            </button>
          </form>
        )}

        {/* Desktop: right actions */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => (searchOpen ? closeSearch() : openSearch())}
            className="p-2 text-mocha hover:text-peach transition-colors"
            aria-label="Search"
          >
            {searchOpen ? <X size={18} /> : <Search size={18} />}
          </button>
          {!searchOpen && (
            <Link href="/shop" className="btn-primary text-sm py-2.5 px-5">
              Shop
            </Link>
          )}
        </div>

        {/* Mobile: search + hamburger */}
        <div className="md:hidden flex items-center gap-1">
          <button
            className="p-2 text-mocha hover:text-peach transition-colors"
            onClick={() => (searchOpen ? closeSearch() : openSearch())}
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <button
            className="p-2 text-mocha hover:text-peach transition-colors"
            onClick={() => { closeSearch(); setOpen(!open); }}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile: search bar */}
      {searchOpen && (
        <div className="md:hidden bg-cream border-t border-peach-light/30 px-5 py-4">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <Search size={16} className="text-mocha/40 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search posts, recipes, products…"
              className="flex-1 font-body text-sm text-brown placeholder-mocha/40 bg-transparent border-b border-peach focus:outline-none py-1"
            />
            <button type="button" onClick={closeSearch} className="text-mocha/50 hover:text-peach transition-colors">
              <X size={16} />
            </button>
          </form>
        </div>
      )}

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-cream border-t border-peach-light/30 px-5 py-6 flex flex-col gap-5">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-base text-mocha hover:text-peach transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/shop" className="btn-primary text-sm mt-2" onClick={() => setOpen(false)}>
            Shop now
          </Link>
        </div>
      )}
    </header>
  );
}
