'use client';

import { useState } from 'react';
import Image from 'next/image';
import LeafDot from '@/components/LeafDot';

const workouts = [
  {
    id: 'desk-reset',
    title: 'Daily 10-Minute Desk Reset',
    description: 'Eight simple desk-friendly moves to release tension, improve mobility, and reset your body — in just 10 minutes. Neck turns, thoracic rotations, chair squats, desk incline planks, and more. No equipment, do it right at your desk.',
    tags: ['Desk-friendly', '10 min', 'No equipment', 'Beginner-friendly'],
    file: '/downloads/daily-10-min-desk-reset.pdf',
    image: '/images/free-workouts/daily-10-min-desk-reset.png',
  },
  {
    id: 'full-body-burn',
    title: '15-Min Full Body Burn',
    description: 'No equipment needed. 40 seconds work, 20 seconds rest. Beginner and advanced modifications included. This is the workout you do when you have 15 minutes and zero excuses.',
    tags: ['Full body', '15 min', 'No equipment', 'All levels'],
    file: '/downloads/15-min-full-body-burn.pdf',
    image: '/images/free-workouts/15-min-full-body-burn.png',
  },
  {
    id: 'wake-up-routine',
    title: '5-Minute Wake-Up Routine',
    description: 'A gentle, no-equipment routine to loosen your spine, hips, shoulders, and ankles before the day gets busy. Eight easy moves you can start before you\'re even out of bed.',
    tags: ['Morning', '5 min', 'No equipment', 'All levels'],
    file: '/downloads/5-min-wake-up-routine.pdf',
    image: '/images/free-workouts/5-min-wake-up-routine.png',
  },
  {
    id: 'nighttime-wind-down',
    title: '5-Minute Nighttime Wind-Down Routine',
    description: 'A gentle, no-equipment routine to release tension, slow your breathing, and help your body settle before bed. Eight calming moves, from slow breathing to a final legs-up rest.',
    tags: ['Wind-down', '5 min', 'No equipment', 'Beginner-friendly'],
    file: '/downloads/5-min-nighttime-wind-down.pdf',
    image: '/images/free-workouts/5-min-nighttime-wind-down.png',
  },
  {
    id: 'nighttime-in-bed',
    title: '5-Minute Nighttime Routine You Can Do in Bed',
    description: 'A gentle bedtime routine you can do without ever leaving the mattress. Eight calming moves, from slow belly breathing to legs-elevated rest, to help your body unwind for sleep.',
    tags: ['Bedtime', 'In bed', '5 min', 'No equipment'],
    file: '/downloads/5-min-nighttime-in-bed.pdf',
    image: '/images/free-workouts/5-min-nighttime-in-bed.png',
  },
  {
    id: 'commercial-break-core',
    title: '2-Minute Commercial Break Core',
    description: 'Quick core work you can do during any commercial break. Four moves, 30 seconds each — standing cross-body crunch, knee plank, controlled crunches, and glute bridge march. Two minutes that count.',
    tags: ['Core', '2 min', 'No equipment', 'All levels'],
    file: '/downloads/2-min-commercial-break-core.pdf',
    image: '/images/free-workouts/2-min-commercial-break-core.png',
  },
  {
    id: 'nap-time-quiet-workout',
    title: 'The Nap-Time Quiet Workout',
    description: 'A quiet, no-equipment strength workout for when the baby is finally asleep. Five controlled moves — slow squats, push-ups, glute bridges, bird dogs, and side planks — with no jumping, stomping, or noise.',
    tags: ['Quiet strength', 'No equipment', 'Mom life', 'All levels'],
    file: '/downloads/nap-time-quiet-workout.pdf',
    image: '/images/free-workouts/nap-time-quiet-workout.png',
  },
  {
    id: 'wake-up-in-bed',
    title: '5-Minute Wake-Up Routine You Can Do in Bed',
    description: 'A gentle morning routine you can do before you even get out of bed. Eight easy moves, from a full-body reach to a seated bedside stretch, to wake your body up slowly.',
    tags: ['Morning', 'In bed', '5 min', 'No equipment'],
    file: '/downloads/5-min-wake-up-in-bed.pdf',
    image: '/images/free-workouts/5-min-wake-up-in-bed.png',
  },
  {
    id: 'partner-workout',
    title: 'The Partner You-Go-I-Go Workout',
    description: 'A 10-minute partner workout you do together — one moves while the other rests, counts, or watches the kids. Four moves, three rounds, and a high-five to finish every one.',
    tags: ['Partner', '10 min', 'No equipment', 'All levels'],
    file: '/downloads/partner-you-go-i-go-workout.pdf',
    image: '/images/free-workouts/partner-you-go-i-go-workout.png',
  },
  {
    id: 'lunch-break-reset',
    title: 'The 10-Minute Lunch-Break Reset',
    description: 'A full-body reset for the middle of a busy day — no changing clothes, no equipment. Five moves, 40 seconds on and 20 off, twice through. Clear a little space beside your desk.',
    tags: ['Lunch break', '10 min', 'No equipment', 'All levels'],
    file: '/downloads/10-min-lunch-break-reset.pdf',
    image: '/images/free-workouts/10-min-lunch-break-reset.png',
  },
  {
    id: 'arms-shoulders',
    title: '30-Day Arms & Shoulders Plan',
    description: 'Stronger arms and defined shoulders in 30 days. Push, pull, and sculpt with light dumbbells — no gym needed.',
    tags: ['Arms & shoulders', '20 min/day', 'Light dumbbells', 'Intermediate'],
    file: '/downloads/30-day-arms-and-shoulders.pdf',
    image: '/images/free-workouts/30-day-arms-&-shoulders-plan.png',
    freeDownload: true,
  },
  {
    id: 'car-ride-mobility',
    title: 'Car Ride Mobility Plan',
    description: 'Perfect for long drives, road trips, or any time you\'ve been sitting too long. Simple stretches and mobility moves you can do at a rest stop or in a parking lot.',
    tags: ['Mobility', '10 min', 'No equipment', 'All levels'],
    file: '/downloads/car-ride-mobility-plan.pdf',
    image: '/images/free-workouts/Car-ride-mobility.png',
    freeDownload: true,
  },
  {
    id: 'core-spinal-stability',
    title: 'Core & Spinal Stability Guide',
    description: '16 core exercises across four stability styles — anti-extension, anti-rotation, anti-lateral flexion, and spinal control — plus optional finishers and a sample weekly plan. Improve posture, protect your spine, ease back pain, and build a strong, stable midsection.',
    tags: ['Core & spine', '15–25 min', 'Minimal equipment', 'All levels'],
    file: '/downloads/core-spinal-stability-exercises.pdf',
    image: '/images/free-workouts/core-spinal-stability.png',
  },
  {
    id: 'back-strength',
    title: 'Back Strength & Posture Guide',
    description: 'Build a strong, healthy back and better posture. Width, thickness, lower-back protection, and posture-fixing moves — organised so you can target exactly what you need. Reduce back pain and stand taller.',
    tags: ['Back & posture', '20 min', 'Dumbbells / bands', 'All levels'],
    file: '/downloads/back-strength.pdf',
    image: '/images/free-workouts/back-strength.png',
  },
  {
    id: 'glute-lower-body',
    title: 'Glute & Lower Body Guide',
    description: 'Target your glutes, legs, and calves to build strength, shape, and definition from every angle. Glute-focused moves, lower-body strength, calves, tips for best results, and a sample weekly plan.',
    tags: ['Glutes & legs', '20–30 min', 'Dumbbells', 'All levels'],
    file: '/downloads/glute-lower-body.pdf',
    image: '/images/free-workouts/glute-lower-body.png',
  },
  {
    id: 'upper-body',
    title: 'Upper Body Strength Guide',
    description: 'Push and pull your way to a strong, capable upper body — chest, shoulders, arms, and back. Build strength, improve posture, and feel powerful in every rep, with a sample upper-body workout included.',
    tags: ['Upper body', '20–30 min', 'Dumbbells / bands', 'All levels'],
    file: '/downloads/upper-body.pdf',
    image: '/images/free-workouts/upper-body.png',
  },
  {
    id: 'daily-mobility',
    title: 'Daily Mobility Guide',
    description: 'A short daily mobility routine to improve flexibility, reduce stiffness and soreness, and prevent injury — neck, shoulders, spine, hips, and a full-body flow. Move better, feel better, every day.',
    tags: ['Mobility', '15–20 min', 'No equipment', 'All levels'],
    file: '/downloads/daily-mobility.pdf',
    image: '/images/free-workouts/daily-mobility.png',
  },
  {
    id: 'desk-mobility',
    title: 'Desk Mobility Guide',
    description: 'Short mobility breaks you can do right at your desk to reduce stiffness, improve posture, and boost focus. Neck, shoulders, spine, and lower-body moves — no equipment, no changing clothes.',
    tags: ['Desk-friendly', '1–2 min each', 'No equipment', 'All levels'],
    file: '/downloads/desk-mobility.pdf',
    image: '/images/free-workouts/desk-mobility.png',
  },
  {
    id: 'postpartum-safe',
    title: 'Postpartum Safe Exercises Guide',
    description: 'Gentle, effective movements to help your body heal and rebuild strength after birth. Core and pelvic-floor activation, mobility and recovery, plus when-to-start and when-to-stop guidance. Strong every day — for you and your baby.',
    tags: ['Postpartum', 'Gentle', 'Core & pelvic floor', 'Beginner-friendly'],
    file: '/downloads/postpartum-safe.pdf',
    image: '/images/free-workouts/postpartum-safe.png',
  },
  {
    id: 'bikram-yoga',
    title: 'Bikram Yoga Guide',
    description: 'The original hot yoga — 26 postures and 2 breathing exercises, laid out in order with cues and benefits. Improve flexibility, strength, and focus, and follow the full sequence at your own pace.',
    tags: ['Yoga', '26 postures', 'No equipment', 'All levels'],
    file: '/downloads/bikram-yoga.pdf',
    image: '/images/free-workouts/bikram-yoga.png',
  },
];

function WorkoutCard({ workout }: { workout: (typeof workouts)[number] }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email) { setError('Please enter your name and email.'); return; }
    setLoading(true);
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, source: `free-workout: ${workout.title}` }),
      });
    } catch {
      // Don't block the download if the API call fails
    }
    setUnlocked(true);
    setLoading(false);
  }

  return (
    <div className="card flex flex-col">
      <div className="relative rounded-2xl overflow-hidden h-48 mb-4">
        <Image
          src={workout.image}
          alt={workout.title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="flex gap-2 flex-wrap mb-4">
        {workout.tags.map((tag) => (
          <span key={tag} className="inline-block font-body text-xs font-medium text-mocha/60 bg-mocha/10 rounded-full px-2.5 py-1">
            {tag}
          </span>
        ))}
      </div>

      <h3 className="font-heading text-2xl font-semibold text-brown mb-2">{workout.title}</h3>
      <p className="font-body text-sm text-mocha/70 leading-relaxed flex-1">{workout.description}</p>

      <div className="mt-6">
        {'freeDownload' in workout && workout.freeDownload ? (
          <a href={workout.file} download className="btn-primary w-full justify-center text-sm text-center block">
            Download for free
          </a>
        ) : unlocked ? (
          <a href={workout.file} download className="btn-primary w-full justify-center text-sm text-center block">
            Download your workout
          </a>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => { setName(e.target.value); setError(''); }}
              placeholder="Your first name"
              className="w-full px-4 py-3 rounded-pill border border-peach-light/50 bg-cream font-body text-sm text-brown placeholder:text-mocha/40 focus:outline-none focus:border-peach focus:ring-1 focus:ring-peach"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(''); }}
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-pill border border-peach-light/50 bg-cream font-body text-sm text-brown placeholder:text-mocha/40 focus:outline-none focus:border-peach focus:ring-1 focus:ring-peach"
            />
            {error && <p className="font-body text-xs text-red-400 px-1">{error}</p>}
            <button type="submit" disabled={loading} className="btn-secondary text-sm disabled:opacity-60">
              {loading ? '...' : 'Get the free download'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function FreeWorkouts() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-12">
        <span className="section-eyebrow">
          <LeafDot /> Free workouts
        </span>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mt-2 leading-tight max-w-2xl">
          Move for free. <em className="italic text-sage">No strings.</em>
        </h1>
        <p className="font-body text-lg text-mocha/80 mt-5 max-w-xl leading-relaxed">
          Drop your name and email and the PDF downloads instantly. No spam — just good workouts.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-5 md:px-8 pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {workouts.map((w) => (
            <WorkoutCard key={w.id} workout={w} />
          ))}
        </div>
      </section>
    </>
  );
}
