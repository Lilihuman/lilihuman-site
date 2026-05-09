import LeafDot from '@/components/LeafDot';
import Link from 'next/link';

export default function FitnessHub() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-sage/10 blur-3xl translate-x-1/3 -translate-y-1/4" />
        </div>
        <div className="max-w-4xl mx-auto px-5 md:px-8 pt-20 pb-20 text-center relative">
          <span className="section-eyebrow">
            <LeafDot /> Move your body
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mt-2 leading-tight">
            Fitness for <em className="italic text-peach">real life</em>
          </h1>
          <p className="font-body text-lg text-mocha/80 mt-5 leading-relaxed max-w-xl mx-auto">
            Not the ideal version. The actual version — where you have 20 minutes, a kid underfoot,
            and nowhere near enough sleep. These programs were built for that day.
          </p>
        </div>
      </section>

      {/* Path split */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Paid programs */}
          <div className="bg-brown rounded-3xl p-8 md:p-10 text-cream relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-peach/10 blur-2xl translate-x-1/4 -translate-y-1/4" />
            <span className="inline-flex items-center gap-2 text-xs font-medium text-peach tracking-widest uppercase mb-5">
              <LeafDot /> Paid programs
            </span>
            <h2 className="font-heading text-4xl font-light text-cream leading-tight mb-4">
              Deep dive <em className="italic text-peach">programs</em>
            </h2>
            <p className="font-body text-sm text-cream/70 leading-relaxed mb-6">
              Multi-week structured programs with progressive workouts, nutrition guides, and
              community access. Everything you need in one place.
            </p>
            <ul className="space-y-2 mb-8">
              {['Progressive week-by-week structure', 'PDF workout guides', 'Nutrition framework', 'Lifetime access'].map((f) => (
                <li key={f} className="flex items-center gap-2 font-body text-sm text-cream/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-peach flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/fitness/programs" className="btn-primary w-full justify-center">
              View programs →
            </Link>
          </div>

          {/* Free workouts */}
          <div className="card border-sage/30 bg-sage/5 p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-sage/10 blur-2xl translate-x-1/4 -translate-y-1/4" />
            <span className="inline-flex items-center gap-2 text-xs font-medium text-sage tracking-widest uppercase mb-5">
              <LeafDot /> Always free
            </span>
            <h2 className="font-heading text-4xl font-light text-brown leading-tight mb-4">
              Free <em className="italic text-sage">workouts</em>
            </h2>
            <p className="font-body text-sm text-mocha/80 leading-relaxed mb-6">
              A growing library of free workouts — no strings attached. Grab what you need and
              get moving. Some require your email; most don't.
            </p>
            <ul className="space-y-2 mb-8">
              {['No purchase required', 'Bodyweight & minimal equipment', 'Short & long format', 'New content added regularly'].map((f) => (
                <li key={f} className="flex items-center gap-2 font-body text-sm text-mocha/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/fitness/free-workouts" className="btn-sage w-full justify-center">
              Browse free workouts →
            </Link>
          </div>
        </div>
      </section>

      {/* Personal Training */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <div className="bg-brown rounded-3xl p-8 md:p-12 text-cream relative overflow-hidden flex flex-col md:flex-row md:items-center gap-8">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-peach/10 blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="flex-1 relative">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-peach tracking-widest uppercase mb-4">
              <LeafDot /> Work with me 1:1
            </span>
            <h2 className="font-heading text-4xl font-light text-cream leading-tight mb-4">
              Personal Training <em className="italic text-peach">with Lili</em>
            </h2>
            <p className="font-body text-sm text-cream/70 leading-relaxed max-w-lg">
              Zumba + fitness hybrid sessions tailored to your goals, your schedule and your real life. Fill out my intake form and I will be in touch within 48 hours.
            </p>
          </div>
          <div className="flex-shrink-0 relative">
            <Link href="/fitness/personal-training" className="btn-primary whitespace-nowrap">
              Apply to work with me →
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-cream-dark border-y border-peach-light/30 py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <span className="section-eyebrow">
            <LeafDot /> My philosophy
          </span>
          <h2 className="section-heading mt-2 mb-6">
            Movement is medicine. <em className="italic text-peach">Even on the hard days.</em>
          </h2>
          <p className="font-body text-mocha/80 leading-relaxed">
            I built these programs because I needed them. Postpartum. Tired. Busy. I needed fitness that
            met me where I was — not where I thought I should be. Every program I've created comes from
            that place of understanding. You don't need perfect conditions. You need something that works
            in the conditions you actually have.
          </p>
        </div>
      </section>
    </>
  );
}
