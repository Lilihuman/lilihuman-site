import LeafDot from '@/components/LeafDot';

export default function Calendar() {
  // Replace GOOGLE_CALENDAR_EMBED_URL in .env.local with your actual embed URL
  const calendarUrl = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL ||
    'https://calendar.google.com/calendar/embed?src=your_calendar_id%40group.calendar.google.com&ctz=Australia%2FSydney';

  return (
    <>
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-12">
        <span className="section-eyebrow">
          <LeafDot /> My calendar
        </span>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mt-2 leading-tight max-w-2xl">
          What's coming <em className="italic text-peach">up</em>
        </h1>
        <p className="font-body text-lg text-mocha/80 mt-5 max-w-xl leading-relaxed">
          Events, workshops, and class schedules. All in one place.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-24">
        <div className="card p-0 overflow-hidden">
          <iframe
            src={calendarUrl}
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            title="Lili Human Calendar"
            className="w-full"
          />
        </div>
        <p className="font-body text-xs text-mocha/40 text-center mt-4">
          To embed your own calendar, update{' '}
          <code className="font-mono bg-cream-dark px-1.5 py-0.5 rounded text-mocha/60">
            NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL
          </code>{' '}
          in your <code className="font-mono bg-cream-dark px-1.5 py-0.5 rounded text-mocha/60">.env.local</code> file.
        </p>
      </section>
    </>
  );
}
