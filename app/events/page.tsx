import LeafDot from '@/components/LeafDot';

const events = [
  {
    id: 1,
    title: 'Live Q&A: Postpartum Fitness',
    date: '2025-06-10',
    time: '7:00 PM AEST',
    type: 'Online',
    description:
      "An open hour where you ask me anything about returning to fitness after having a baby. No question is too basic. I'll answer honestly.",
    bookingUrl: '#',
    spots: 50,
    spotsLeft: 23,
  },
  {
    id: 2,
    title: 'Strong Mama Workshop — Melbourne',
    date: '2025-07-05',
    time: '9:00 AM – 12:00 PM',
    type: 'In person',
    description:
      "A three-hour morning workshop for moms who want to move, connect, and feel strong. Includes a guided workout, nutrition talk, and brunch.",
    bookingUrl: '#',
    spots: 20,
    spotsLeft: 7,
  },
  {
    id: 3,
    title: 'Printable Art Masterclass',
    date: '2025-07-20',
    time: '2:00 PM AEST',
    type: 'Online',
    description:
      "I'll walk you through how I design my printable art and planners — from concept to Canva to your printer. Great for creative moms who want to DIY.",
    bookingUrl: '#',
    spots: 100,
    spotsLeft: 58,
  },
  {
    id: 4,
    title: '5K Fun Run — Lake Morning',
    date: '2025-08-16',
    time: '7:30 AM',
    type: 'In person',
    description:
      "A relaxed community 5K around the lake. Bring the kids, bring the dog, bring your coffee. There are no prizes — just fresh air and good people.",
    bookingUrl: '#',
    spots: 40,
    spotsLeft: 31,
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function Events() {
  const now = new Date();
  const upcoming = events.filter((e) => new Date(e.date) >= now);
  const past = events.filter((e) => new Date(e.date) < now);

  return (
    <>
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-12">
        <span className="section-eyebrow">
          <LeafDot /> Events & classes
        </span>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mt-2 leading-tight max-w-2xl">
          Come and <em className="italic text-peach">meet me</em>
        </h1>
        <p className="font-body text-lg text-mocha/80 mt-5 max-w-xl leading-relaxed">
          Online workshops, in-person events, and community runs. All of them small, intentional, and worth showing up for.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-24 space-y-6">
        {upcoming.map((event) => {
          const soldOut = event.spotsLeft === 0;
          const almostFull = event.spotsLeft <= 5 && !soldOut;

          return (
            <div key={event.id} className="card flex flex-col md:flex-row gap-6 md:items-start">
              {/* Date block */}
              <div className="md:w-36 flex-shrink-0">
                <div className="bg-peach/10 rounded-2xl p-4 text-center border border-peach/20">
                  <p className="font-body text-xs text-peach font-medium uppercase tracking-widest">
                    {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                  </p>
                  <p className="font-heading text-4xl font-semibold text-brown leading-none mt-1">
                    {new Date(event.date).getDate()}
                  </p>
                  <p className="font-body text-xs text-mocha/50 mt-1">
                    {new Date(event.date).getFullYear()}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`inline-block font-body text-xs font-medium rounded-full px-2.5 py-1 ${
                        event.type === 'Online'
                          ? 'bg-sage/10 text-sage'
                          : 'bg-peach/10 text-peach'
                      }`}>
                        {event.type}
                      </span>
                      {almostFull && (
                        <span className="inline-block font-body text-xs font-medium bg-amber-100 text-amber-700 rounded-full px-2.5 py-1">
                          Almost full
                        </span>
                      )}
                      {soldOut && (
                        <span className="inline-block font-body text-xs font-medium bg-red-100 text-red-600 rounded-full px-2.5 py-1">
                          Sold out
                        </span>
                      )}
                    </div>
                    <h2 className="font-heading text-2xl font-semibold text-brown">{event.title}</h2>
                  </div>
                </div>

                <p className="font-body text-sm text-mocha/60 mt-1">
                  {formatDate(event.date)} · {event.time}
                </p>
                <p className="font-body text-sm text-mocha/80 mt-3 leading-relaxed">{event.description}</p>
                <p className="font-body text-xs text-mocha/40 mt-3">
                  {event.spotsLeft} / {event.spots} spots remaining
                </p>

                {!soldOut && (
                  <a href={event.bookingUrl} className="btn-primary mt-4 inline-flex text-sm">
                    Book my spot →
                  </a>
                )}
              </div>
            </div>
          );
        })}

        {upcoming.length === 0 && (
          <div className="text-center py-16">
            <p className="font-body text-mocha/50">No upcoming events right now — check back soon!</p>
          </div>
        )}
      </section>
    </>
  );
}
