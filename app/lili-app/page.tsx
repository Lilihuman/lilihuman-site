import LeafDot from '@/components/LeafDot';
import AppEarlyAccessForm from '@/components/AppEarlyAccessForm';

// The destination people reach once they join early access. Edit here if it changes.
const APP_URL = 'https://app.lilihuman.com';

export const metadata = {
  title: 'The Lili App — Free Early Access',
  description:
    'Meet the new Lili App: fitness, family routines, and the little rituals that make life feel like yours, all in one place. Get free early access.',
};

const features = [
  {
    icon: '🏋️‍♀️',
    title: 'Fitness that fits real life',
    body: 'Workouts and programs you can actually stick to, built for busy people and real schedules.',
  },
  {
    icon: '🗓️',
    title: 'Routines & reminders',
    body: 'Gentle structure for your days — the habits, resets, and rituals that keep life feeling like yours.',
  },
  {
    icon: '📖',
    title: 'Everything in one place',
    body: 'Stories, recipes, and printables from Lili Human, together in a single calm little app.',
  },
];

export default function LiliAppPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-12 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="section-eyebrow">
            <LeafDot /> New · Free early access
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mt-2 leading-tight">
            The new <em className="italic text-peach">Lili App</em>
          </h1>
          <p className="font-body text-lg text-mocha/80 mt-5 leading-relaxed">
            Fitness, family routines, and the small rituals that make life feel like yours —
            all in one place. It's brand new, and right now you can get in completely free.
          </p>
          <ul className="mt-6 space-y-2">
            {['Free during early access', 'No credit card required', 'Be first to shape what comes next'].map((point) => (
              <li key={point} className="flex items-center gap-2 font-body text-sm text-mocha/80">
                <span className="text-sage">✓</span> {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Signup card */}
        <div className="card bg-cream-dark md:p-8">
          <h2 className="font-heading text-2xl text-brown">Get free early access</h2>
          <p className="font-body text-sm text-mocha/70 mt-1 mb-5 leading-relaxed">
            Enter your details and you'll be in — the app opens right after you sign up.
          </p>
          <AppEarlyAccessForm appUrl={APP_URL} />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-heading text-xl text-brown">{f.title}</h3>
              <p className="font-body text-sm text-mocha/70 mt-2 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
