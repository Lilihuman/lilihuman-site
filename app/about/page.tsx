import LeafDot from '@/components/LeafDot';
import Link from 'next/link';
import Image from 'next/image';

const values = [
  {
    icon: '🌿',
    title: 'Real over perfect',
    body: "I share the real: the messy mornings, the skipped workouts, the recipes that flopped. Because that's where connection lives.",
  },
  {
    icon: '💪',
    title: 'Fitness for the hard days',
    body: "Not the days when everything lines up. The days when it doesn't. That's when movement matters most.",
  },
  {
    icon: '🏡',
    title: 'Home as a feeling',
    body: "A home that feels like you isn't about aesthetics — it's about intention. Every printable I design is made with that in mind.",
  },
  {
    icon: '❤️',
    title: 'Family at the centre',
    body: "Everything I do circles back to the people I love. They're in my work, my priorities, and the stories I tell.",
  },
];

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-16">
        <span className="section-eyebrow">
          <LeafDot /> The story behind the site
        </span>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mt-2 leading-tight max-w-2xl">
          Hi, I&apos;m Lili &mdash; <em className="italic text-peach">nice to meet you</em>
        </h1>
      </section>

      {/* Bio section */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-20 grid md:grid-cols-2 gap-12 items-start">
        {/* Profile photo */}
        <div className="relative">
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
            <Image src="/images/profile.jpg" alt="Lili Human" fill className="object-cover object-top" />
          </div>
          <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-lg px-5 py-4 border border-peach-light/30 hidden md:block">
            <p className="font-script text-peach text-2xl">Wife. Mom. Creator.</p>
          </div>
        </div>

        {/* Bio text */}
        <div>
          <div className="prose-lili">
            <h2>My story</h2>
            <p>
              I started this little corner of the internet because I was tired of wellness content that assumed
              you had two hours, a perfectly stocked kitchen, and a nanny. Life doesn&apos;t look like that &mdash; at least
              mine doesn&apos;t.
            </p>
            <p>
              So I did what I always do when something isn&apos;t working: I figured out a better system.
            </p>
            <p>
              I&apos;m a mom, a partner to Jurie, a dog mom to our little Havanese-Maltese Olive, and someone who
              genuinely loves moving her body &mdash; on the good days and the brutal ones. I&apos;m a fitness coach who
              builds programs for real schedules. I&apos;m obsessed with organization &mdash; the kind that actually holds
              up when your toddler has other plans. And I&apos;ve fallen hard for AI, not because it&apos;s trendy, but
              because it gave me back time I didn&apos;t know I could reclaim.
            </p>
            <p>
              When you&apos;re running a household, raising a family, trying to stay strong, and building something of
              your own &mdash; you need tools that work as hard as you do. That&apos;s what I spend my days building and
              sharing here.
            </p>
            <h2>What you&apos;ll actually find here</h2>
            <p>
              Fitness programs built for real life &mdash; short, effective, and designed for the days when everything
              is already a lot. A shop full of digital tools, printables, and AI guides that make your home and
              your days feel more like you. Blog posts that tell the truth. And a community of women who are
              figuring it all out without pretending it&apos;s easy.
            </p>
            <p>
              Pull up a chair. You&apos;re going to fit right in here.
            </p>
          </div>

          <div className="flex gap-3 mt-8">
            <Link href="/fitness" className="btn-primary">Explore fitness &rarr;</Link>
            <Link href="/contact" className="btn-secondary">Say hello</Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-dark border-y border-peach-light/30 py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow">
              <LeafDot /> What I believe
            </span>
            <h2 className="section-heading mt-2">
              The values that <em className="italic text-peach">guide everything</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-heading text-xl font-semibold text-brown mb-2">{v.title}</h3>
                <p className="font-body text-sm text-mocha/80 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto px-5 md:px-8 py-20 text-center">
        <span className="section-eyebrow">
          <LeafDot /> Let&apos;s connect
        </span>
        <h2 className="section-heading mt-2 mb-5">
          Ready to start?
        </h2>
        <p className="font-body text-mocha/70 leading-relaxed mb-8">
          Whether you&apos;re here for the workouts, the printables, or just to feel a little less alone in the
          beautiful chaos &mdash; welcome. You&apos;re in the right place.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/shop" className="btn-primary">Shop the collection</Link>
          <Link href="/blog" className="btn-secondary">Start reading</Link>
        </div>
      </section>
    </>
  );
}
