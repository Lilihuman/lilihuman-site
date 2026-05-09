'use client';

import { useState } from 'react';
import LeafDot from '@/components/LeafDot';

const freeWorkouts = [
  {
    id: 7,
    title: 'Car Ride Mobility Plan',
    duration: '2–4 min per stop',
    equipment: 'None',
    level: 'All levels',
    gated: false,
    downloadUrl: '/car-ride-mobility-plan.pdf',
    description: 'Move more on long drives. Seated exercises every 30–45 min + standing stretches at stops. Reduce stiffness, improve circulation, arrive stronger.',
  },
  {
    id: 1,
    title: '15-Minute Full Body Burn',
    duration: '15 min',
    equipment: 'None',
    level: 'All levels',
    gated: false,
    description: 'A quick full-body circuit you can do anywhere. 5 moves, 3 rounds, done.',
  },
  {
    id: 2,
    title: 'Core Restore — Postpartum Safe',
    duration: '20 min',
    equipment: 'Mat',
    level: 'Beginner',
    gated: false,
    description: 'Gentle core work that respects your postpartum body. Pelvic floor aware, zero crunches.',
  },
  {
    id: 3,
    title: '30-Day Arms & Shoulders Plan',
    duration: '20 min/day',
    equipment: 'Light dumbbells',
    level: 'Intermediate',
    gated: true,
    description: 'Thirty days to stronger arms. Requires email signup — free forever after.',
  },
  {
    id: 4,
    title: 'Naptime Express — 10 Minutes',
    duration: '10 min',
    equipment: 'None',
    level: 'All levels',
    gated: false,
    description: "Got a napping baby and 10 minutes? This one's for you.",
  },
  {
    id: 5,
    title: 'Lower Body Love',
    duration: '25 min',
    equipment: 'Resistance band',
    level: 'Intermediate',
    gated: false,
    description: 'Glutes, hamstrings, and quads. A resistance band and your living room floor.',
  },
  {
    id: 6,
    title: 'Morning Mobility Routine',
    duration: '12 min',
    equipment: 'None',
    level: 'All levels',
    gated: true,
    description: 'Start your day with movement that actually feels good. Free with email.',
  },
];

function GateForm({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brown/60 backdrop-blur-sm">
      <div className="bg-cream rounded-3xl p-8 max-w-sm w-full shadow-2xl">
        {submitted ? (
          <div className="text-center">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="font-heading text-2xl text-brown mb-2">You're in!</h3>
            <p className="font-body text-sm text-mocha/70 mb-5">Check your inbox for the download link.</p>
            <button onClick={onClose} className="btn-primary w-full justify-center">Close</button>
          </div>
        ) : (
          <>
            <h3 className="font-heading text-2xl text-brown mb-2">Grab your free workout</h3>
            <p className="font-body text-sm text-mocha/70 mb-5 leading-relaxed">
              Drop your email and I'll send it straight to your inbox. No spam — I promise.
            </p>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-pill border border-peach-light/50 bg-cream font-body text-sm text-brown placeholder:text-mocha/40 focus:outline-none focus:border-peach focus:ring-1 focus:ring-peach mb-3"
            />
            <button onClick={() => setSubmitted(true)} className="btn-primary w-full justify-center">
              Send me the workout →
            </button>
            <button onClick={onClose} className="btn-secondary w-full justify-center mt-3 text-sm">
              Maybe later
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default function FreeWorkouts() {
  const [gateOpen, setGateOpen] = useState(false);

  return (
    <>
      {gateOpen && <GateForm onClose={() => setGateOpen(false)} />}

      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-12">
        <span className="section-eyebrow">
          <LeafDot /> Free workouts
        </span>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mt-2 leading-tight max-w-2xl">
          Move for free. <em className="italic text-sage">No strings.</em>
        </h1>
        <p className="font-body text-lg text-mocha/80 mt-5 max-w-xl leading-relaxed">
          A growing library of free workouts. Some require your email; most don't. All are worth your time.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freeWorkouts.map((w) => (
            <div key={w.id} className="card flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <div className="flex gap-2 flex-wrap">
                  <span className="inline-block font-body text-xs font-medium text-mocha/60 bg-mocha/10 rounded-full px-2.5 py-1">
                    {w.duration}
                  </span>
                  <span className="inline-block font-body text-xs font-medium text-mocha/60 bg-mocha/10 rounded-full px-2.5 py-1">
                    {w.level}
                  </span>
                </div>
                {w.gated && (
                  <span className="font-body text-xs text-peach">📧 Email required</span>
                )}
              </div>
              <h3 className="font-heading text-xl font-semibold text-brown mb-2">{w.title}</h3>
              <p className="font-body text-sm text-mocha/70 leading-relaxed flex-1">{w.description}</p>
              <p className="font-body text-xs text-mocha/50 mt-3">Equipment: {w.equipment}</p>
              {'downloadUrl' in w && w.downloadUrl ? (
                <a
                  href={w.downloadUrl}
                  download
                  className="mt-5 btn-sage text-sm inline-flex items-center gap-1.5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Download free PDF
                </a>
              ) : (
                <button
                  onClick={() => { if (w.gated) setGateOpen(true); }}
                  className={`mt-5 ${w.gated ? 'btn-secondary' : 'btn-sage'} text-sm`}
                >
                  {w.gated ? 'Get free access →' : 'Start workout →'}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
