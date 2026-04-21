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
          Hi, I'm Lili — <em className="italic text-peach">nice to meet you</em>
        </h1>
      </section>

      {/* Bio section */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-20 grid md:grid-cols-2 gap-12 items-start">
        {/* Profile photo */}
        <div className="relative w-full aspect-[3/4]">
          <Image src="/images/profile.jpg" alt="Lili Human" fill className="object-cover rounded-2xl" />
        </div>

        {/* Bio text */}
        <div>
          <div className="prose-lili">
            <h2>My story</h2>
            <p>
              I started this little corner of the internet because I was tired of wellness content that assumed
              you had two hours, a perfectly stocked kitchen, and a nanny. Life doesn't look like that — at least
              mine doesn't. So I made something that actually fits.
            </p>
            <p>
              I'm a mom (hi, Nico 👋), a partner to Jurie, a dog mum to our little Havanese-Maltese Olive, and
              someone who genuinely loves moving her body — on the good days and the brutal ones. I'm also a
              creator who believes that beautiful, functional design should be accessible to everyone.
            </p>
            <p>
              This site is where all of that lives. Fitness programs I actually use. Printables I designed for
              myself first. Blog posts that tell the truth about what it looks like to build a life you love
              when you're also just trying to keep everyone fed and relatively sane.
            </p>
            <h2>What you'll find here</h2>
            <p>
              Fitness programs built for busy schedules. Free workouts when you just need to move. A shop full
              of digital printables and art. Recipes that real people make for real families. And a blog where
              I write honestly about all of it.
            </p>
            <p>
              Pull up a chair. You're going to fit right in here.
            </p>
          </div>

          <div className="flex gap-3 mt-8">
            <Link href="/fitness" className="btn-primary">Explore fitness →</Link>
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
          <LeafDot /> Let's connect
        </span>
        <h2 className="section-heading mt-2 mb-5">
          Ready to start?
        </h2>
        <p className="font-body text-mocha/70 leading-relaxed mb-8">
          Whether you're here for the workouts, the printables, or just to feel a little less alone in the
          beautiful chaos — welcome. You're in the right place.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/shop" className="btn-primary">Shop the collection</Link>
          <Link href="/blog" className="btn-secondary">Start reading</Link>
        </div>
      </section>
    </>
  );
}
