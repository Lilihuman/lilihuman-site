import Link from 'next/link';
import LeafDot from './LeafDot';
import NewsletterForm from './NewsletterForm';

const columns = [
  {
    label: 'Explore',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Recipes', href: '/recipes' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
  {
    label: 'Fitness',
    links: [
      { label: 'Fitness Hub', href: '/fitness' },
      { label: 'Workout Programs', href: '/fitness/programs' },
      { label: 'Free Workouts', href: '/fitness/free-workouts' },
    ],
  },
  {
    label: 'Shop & Connect',
    links: [
      { label: 'Shop', href: '/shop' },
      { label: 'Events', href: '/events' },
      { label: 'Calendar', href: '/calendar' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    label: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms' },
    ],
  },
];

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/lilimotaghedi/' },
  { label: 'Pinterest', href: 'https://pin.it/1gppwVqWJ' },
  { label: 'YouTube', href: 'https://www.youtube.com/@lilihuman' },
];

export default function Footer() {
  return (
    <footer className="bg-brown text-cream/80 mt-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        {/* Top */}
        <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:w-56 flex-shrink-0">
            <span className="font-heading text-3xl font-semibold text-peach">LH</span>
            <p className="font-script text-lg text-peach-light mt-1">Lili Human</p>
            <p className="font-body text-sm text-cream/60 mt-3 leading-relaxed">
              Family stories, fitness for real life, and printables to make your home feel like you.
            </p>
            <div className="flex gap-4 mt-5">
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs text-cream/50 hover:text-peach transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
            {columns.map((col) => (
              <div key={col.label}>
                <p className="section-eyebrow leaf-dot text-cream/50 mb-4 text-xs">
                  <LeafDot />
                  {col.label}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="font-body text-sm text-cream/60 hover:text-peach transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-10 border-t border-cream/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="md:max-w-xs">
            <p className="font-heading text-xl text-cream">Join the list</p>
            <p className="font-body text-sm text-cream/50 mt-1">Weekly-ish notes on fitness, family, and whatever I'm loving.</p>
          </div>
          <div className="md:w-96">
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-cream/40">© 2025 Lili Human. All rights reserved.</p>
          <p className="font-body text-xs text-cream/30">Built with love in Next.js</p>
        </div>
      </div>
    </footer>
  );
}
