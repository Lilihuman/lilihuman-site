import LeafDot from '@/components/LeafDot';
import Link from 'next/link';
import Image from 'next/image';

const movementStyles = [
  {
    icon: '💃',
    title: 'Dance & Zumba',
    description: 'Movement that feels like a party, not a punishment. Cardio that actually makes you want to show up.',
  },
  {
    icon: '🏋️‍♀️',
    title: 'Strength Training',
    description: 'Progressive, purposeful lifting designed to build real strength — not just for aesthetics, but for the life you\'re carrying.',
  },
  {
    icon: '🤸‍♀️',
    title: 'Mobility & Recovery',
    description: 'The work nobody talks about. Stretching, releasing, and moving well so your body can keep up with everything you ask of it.',
  },
  {
    icon: '👶',
    title: 'Mama & Toddler',
    description: 'Movement designed for two. Sneak in strength and cardio while your little one thinks you\'re just playing.',
  },
];

const featuredPrograms = [
  {
    title: 'Strong Mama — 8-Week Program',
    description: 'Eight weeks of progressive strength training designed for busy moms. Built around your schedule, not an ideal one.',
    tag: 'Most popular',
    href: '/shop',
    color: 'bg-brown text-cream',
    tagColor: 'text-peach',
  },
  {
    title: 'Postpartum Reset — 4-Week Program',
    description: 'Rebuild your core, restore your pelvic floor, and come back to movement at your own pace — safely and sustainably.',
    tag: 'Postpartum',
    href: '/shop',
    color: 'bg-sage/10 text-brown',
    tagColor: 'text-sage',
  },
  {
    title: '20-Minute "Move With Me" Program',
    description: 'A playful parent-and-toddler routine. Strength, mobility, and developmental play — all done together in 20 minutes.',
    tag: 'Family',
    href: '/shop',
    color: 'bg-peach/10 text-brown',
    tagColor: 'text-peach',
  },
];

const testimonials = [
  {
    quote: 'I did the Strong Mama program postpartum and felt stronger than I did before having kids. Lili\'s approach just works for real life.',
    name: 'Sarah M.',
    detail: 'Strong Mama graduate',
  },
  {
    quote: 'Finally a program that doesn\'t make me feel guilty for missing a day. The 20-minute workouts are no joke — I\'m actually seeing results.',
    name: 'Jade T.',
    detail: '20-Minute Hustle',
  },
  {
    quote: 'The Move With Me program was the only way I could work out with a toddler at home. We both loved it.',
    name: 'Priya K.',
    detail: 'Mama & Toddler program',
  },
];

export default function FitnessHub() {
  return (
    <>
      {/* ── CUSTOM PROGRAM PROMO ─────────────────────────────────────── */}
      <section className="bg-peach/10 border-b border-peach/20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-peach text-white font-body text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
                <span>50% off until September</span>
              </div>
              <h2 className="font-heading text-5xl md:text-6xl font-light text-brown leading-tight">
                A program built<br />
                <em className="italic text-peach">just for you.</em>
              </h2>
              <p className="font-body text-lg text-mocha/70 mt-5 leading-relaxed max-w-lg">
                No cookie-cutter plans. I'll build you a fully custom fitness <em>and</em> nutrition program
                tailored to your goals, your schedule, and exactly where you're starting from.
              </p>
              <div className="flex items-baseline gap-3 mt-6">
                <span className="font-heading text-4xl font-semibold text-peach">$30 CAD</span>
                <span className="font-body text-xl text-mocha/40 line-through">$60</span>
                <span className="font-body text-sm text-mocha/50">· limited time</span>
              </div>
              <div className="mt-3 bg-brown/5 border border-brown/10 rounded-2xl px-5 py-4 max-w-md">
                <p className="font-body text-sm text-mocha/70 leading-relaxed">
                  <span className="font-semibold text-brown">How it works:</span>{' '}
                  Fill out the intake form so I know exactly what you need →
                  then purchase your custom program → I'll email you your complete plan within 48–72 hours.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:pl-8">
              <div className="space-y-3">
                {[
                  { icon: '🎯', text: 'Goals-first — built around what you actually want to achieve' },
                  { icon: '📅', text: 'Schedule-first — fits your real week, not an imaginary one' },
                  { icon: '🥗', text: 'Fitness + nutrition in one — no separate plan needed' },
                  { icon: '📩', text: 'Delivered to your inbox within 48–72 hours' },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">{item.icon}</span>
                    <p className="font-body text-sm text-mocha/70 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <Link href="/fitness/personal-training" className="btn-secondary text-sm text-center flex-1">
                  Step 1 — Fill the intake form →
                </Link>
                <Link href="/shop" className="btn-primary text-sm text-center flex-1">
                  Step 2 — Purchase ($30 CAD) →
                </Link>
              </div>
              <p className="font-body text-xs text-mocha/40 text-center">
                50% off offer ends September 2026 · Regular price $60 CAD
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-sage/10 blur-3xl translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-peach/5 blur-3xl -translate-x-1/4 translate-y-1/4" />
        </div>
        <div className="max-w-5xl mx-auto px-5 md:px-8 pt-24 pb-20 relative">
          <span className="section-eyebrow">
            <LeafDot /> Fitness Hub
          </span>
          <h1 className="font-heading text-6xl md:text-7xl font-light text-brown mt-3 leading-tight max-w-3xl">
            Move your body.<br />
            <em className="italic text-peach">On your terms.</em>
          </h1>
          <p className="font-body text-xl text-mocha/70 mt-6 leading-relaxed max-w-2xl">
            No gym required. No perfect schedule. No guilt when life happens.
            Just real movement, built for the actual life you're living — not the one you think you should have.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href="#start-here" className="btn-primary text-base px-7 py-3">
              Start here →
            </Link>
            <Link href="/fitness/free-workouts" className="btn-secondary text-base px-7 py-3">
              Try a free workout
            </Link>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────────────────────── */}
      <section className="bg-brown py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <span className="section-eyebrow text-peach/70">
            <LeafDot /> My philosophy
          </span>
          <h2 className="font-heading text-5xl font-light text-cream mt-4 leading-tight max-w-2xl">
            Movement is medicine.<br />
            <em className="italic text-peach">Even on the hard days.</em>
          </h2>
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <p className="font-body text-cream/70 leading-relaxed text-lg">
              I built these programs because I needed them. Postpartum. Exhausted. Running on broken sleep
              and the last of my motivation. I needed fitness that met me where I was — not where I thought
              I should be.
            </p>
            <p className="font-body text-cream/70 leading-relaxed text-lg">
              Every program I've created comes from that place. You don't need perfect conditions.
              You don't need an hour. You don't need to earn your rest. You just need something that
              actually works in the life you're already living.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-14 pt-10 border-t border-cream/10">
            {[
              { number: '8+', label: 'Years coaching' },
              { number: '20 min', label: 'Is enough' },
              { number: '100%', label: 'Real life tested' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-4xl text-peach">{stat.number}</p>
                <p className="font-body text-sm text-cream/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── START HERE ───────────────────────────────────────────────── */}
      <section id="start-here" className="max-w-6xl mx-auto px-5 md:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-eyebrow">
              <LeafDot /> New here?
            </span>
            <h2 className="font-heading text-5xl font-light text-brown mt-3 leading-tight">
              Not sure where<br />
              <em className="italic text-sage">to begin?</em>
            </h2>
            <p className="font-body text-mocha/70 leading-relaxed mt-5 text-lg">
              Here's the honest answer: start wherever feels manageable. A 15-minute workout
              done consistently will always beat a 60-minute program you abandon by week two.
            </p>
            <div className="space-y-4 mt-8">
              {[
                { label: 'Just had a baby', desc: 'Start with the Postpartum Reset — gentle, progressive, and built around recovery.', href: '/shop' },
                { label: 'Short on time', desc: 'The 20-Minute Hustle or any of the free workouts. No excuses needed.', href: '/fitness/free-workouts' },
                { label: 'Ready to build strength', desc: 'Strong Mama is where you want to be. 8 weeks, progressive, and actually hard.', href: '/shop' },
                { label: 'Just want to move and have fun', desc: 'Come to a Zumba class or try the Move With Me program with your kids.', href: '/fitness/personal-training' },
              ].map((item) => (
                <Link key={item.label} href={item.href} className="flex gap-4 p-4 rounded-2xl hover:bg-peach/5 transition-colors group">
                  <span className="w-2 h-2 rounded-full bg-peach mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-heading text-base font-semibold text-brown group-hover:text-peach transition-colors">{item.label}</p>
                    <p className="font-body text-sm text-mocha/60 mt-0.5">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-peach/20 to-sage/10 relative">
              <Image src="/images/hero.jpg" alt="Lili Human" fill className="object-cover object-top" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-5 py-4 border border-peach-light/30">
              <p className="font-script text-peach text-xl">Start where you are.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOVEMENT STYLES ──────────────────────────────────────────── */}
      <section className="bg-cream-dark border-y border-peach-light/30 py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="text-center mb-14">
            <span className="section-eyebrow">
              <LeafDot /> How we move
            </span>
            <h2 className="section-heading mt-3">
              Find your <em className="italic text-peach">style</em>
            </h2>
            <p className="font-body text-mocha/60 mt-3 max-w-xl mx-auto">
              There's no one right way to move. These are the styles I coach and build programs around.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {movementStyles.map((style) => (
              <div key={style.title} className="card text-center">
                <div className="text-5xl mb-4">{style.icon}</div>
                <h3 className="font-heading text-xl font-semibold text-brown mb-2">{style.title}</h3>
                <p className="font-body text-sm text-mocha/70 leading-relaxed">{style.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROGRAMS ────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-24">
        <div className="text-center mb-14">
          <span className="section-eyebrow">
            <LeafDot /> Programs
          </span>
          <h2 className="section-heading mt-3">
            Built for <em className="italic text-peach">your season</em>
          </h2>
          <p className="font-body text-mocha/60 mt-3 max-w-xl mx-auto">
            Each program was designed for a specific chapter of life. Find yours.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredPrograms.map((program) => (
            <div key={program.title} className={`rounded-3xl p-8 flex flex-col ${program.color}`}>
              <span className={`font-body text-xs font-semibold tracking-widest uppercase mb-4 ${program.tagColor}`}>
                {program.tag}
              </span>
              <h3 className="font-heading text-2xl font-semibold leading-snug mb-3">{program.title}</h3>
              <p className="font-body text-sm leading-relaxed opacity-70 flex-1">{program.description}</p>
              <Link href={program.href} className="mt-6 inline-block font-body text-sm font-semibold underline underline-offset-4 opacity-80 hover:opacity-100 transition-opacity">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/fitness/programs" className="btn-secondary">
            View all programs →
          </Link>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section className="bg-brown py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="text-center mb-14">
            <span className="section-eyebrow text-peach/70">
              <LeafDot /> Real results
            </span>
            <h2 className="font-heading text-5xl font-light text-cream mt-3">
              Women who <em className="italic text-peach">showed up</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-cream/5 border border-cream/10 rounded-3xl p-8">
                <p className="font-body text-cream/80 leading-relaxed text-lg italic mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-heading text-base font-semibold text-cream">{t.name}</p>
                  <p className="font-body text-xs text-cream/40 mt-0.5">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREE STARTER WORKOUT ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-24">
        <div className="bg-sage/10 border border-sage/20 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <span className="section-eyebrow">
              <LeafDot /> Try it first
            </span>
            <h2 className="font-heading text-4xl font-light text-brown mt-3 leading-tight">
              Start with a <em className="italic text-sage">free workout</em>
            </h2>
            <p className="font-body text-mocha/70 leading-relaxed mt-4 max-w-lg">
              Not ready to commit to a full program? Grab one of the free workouts — no credit card,
              no catch. Just drop your email and start moving today.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col gap-3">
            <Link href="/fitness/free-workouts" className="btn-primary text-center whitespace-nowrap">
              Get a free workout →
            </Link>
            <Link href="/fitness/programs" className="btn-secondary text-center whitespace-nowrap">
              Browse all programs
            </Link>
          </div>
        </div>
      </section>

      {/* ── PERSONAL TRAINING ────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-24">
        <div className="bg-peach/10 border border-peach/20 rounded-3xl p-10 md:p-14 text-center">
          <span className="section-eyebrow">
            <LeafDot /> Work with me
          </span>
          <h2 className="font-heading text-5xl font-light text-brown mt-3 leading-tight">
            Want something <em className="italic text-peach">built just for you?</em>
          </h2>
          <p className="font-body text-mocha/70 leading-relaxed mt-5 max-w-2xl mx-auto text-lg">
            I offer personal training and Zumba + fitness hybrid sessions tailored to your goals,
            your schedule, and your real life. Fill out the intake form and I'll be in touch within 48 hours.
          </p>
          <Link href="/fitness/personal-training" className="btn-primary mt-8 inline-block text-base px-8 py-3">
            Apply to work with me →
          </Link>
        </div>
      </section>
    </>
  );
}
