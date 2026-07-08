import LeafDot from '@/components/LeafDot';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata = {
  title: 'Newsletter — Lili Human',
  description: "Join Lili's newsletter for weekly-ish notes on fitness, family, food, and the small rituals that make life feel like yours.",
};

const perks = [
  {
    icon: '💌',
    title: 'Weekly-ish notes',
    body: 'Honest stories on family, fitness, and the little rituals that hold a life together — straight to your inbox.',
  },
  {
    icon: '🎁',
    title: 'Free printables & extras',
    body: 'Subscriber-only downloads, early looks at new workouts, and the occasional thing I only share on the list.',
  },
  {
    icon: '🤍',
    title: 'No spam, ever',
    body: "Just me, writing like a friend. Unsubscribe anytime with one click — no hard feelings.",
  },
];

export default function NewsletterPage() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-10">
        <span className="section-eyebrow">
          <LeafDot /> The newsletter
        </span>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mt-2 leading-tight max-w-2xl">
          Let's stay <em className="italic text-peach">in touch</em>
        </h1>
        <p className="font-body text-lg text-mocha/80 mt-5 max-w-xl leading-relaxed">
          The best of Lili Human, without the scroll. Drop your name and email below and I'll send
          you my weekly-ish notes on fitness, family, food, and everything in between.
        </p>
      </section>

      {/* Signup — front and center */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16">
        <div className="card bg-cream-dark max-w-xl md:p-8">
          <h2 className="font-heading text-2xl text-brown">Join the list</h2>
          <p className="font-body text-sm text-mocha/70 mt-1 leading-relaxed">
            Free, warm, and worth opening. Enter your details and you're in.
          </p>
          <NewsletterForm variant="light" source="newsletter-page" />
        </div>
      </section>

      {/* Why subscribe */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {perks.map((p) => (
            <div key={p.title} className="card">
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="font-heading text-xl text-brown">{p.title}</h3>
              <p className="font-body text-sm text-mocha/70 mt-2 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
