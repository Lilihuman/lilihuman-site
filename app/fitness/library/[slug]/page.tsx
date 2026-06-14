import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Check, X, Dumbbell, Lightbulb, ArrowLeft, Clock, CalendarCheck } from 'lucide-react';
import LeafDot from '@/components/LeafDot';
import { exercises, getExercise } from '../exercises';

export function generateStaticParams() {
  return exercises.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const exercise = getExercise(params.slug);
  if (!exercise) return {};
  return {
    title: `${exercise.name} — Fitness Library | Lili Human`,
    description: exercise.summary,
  };
}

export default function ExercisePage({ params }: { params: { slug: string } }) {
  const exercise = getExercise(params.slug);
  if (!exercise) notFound();

  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-5 md:px-8 pt-12 pb-10">
        <Link
          href="/fitness/library"
          className="font-body text-sm text-peach hover:underline inline-flex items-center gap-1.5 mb-8"
        >
          <ArrowLeft size={15} /> Back to library
        </Link>

        <span className="section-eyebrow">
          <LeafDot /> {exercise.category} · {exercise.level}
        </span>
        <h1 className="font-heading text-5xl md:text-7xl font-light text-brown mt-2 leading-tight">
          {exercise.name}
        </h1>
        <p className="font-script text-2xl md:text-3xl text-peach mt-2">{exercise.tagline}</p>
        <p className="font-body text-lg text-mocha/80 mt-5 max-w-2xl leading-relaxed">{exercise.summary}</p>
      </section>

      {/* ── OPTIONAL INFOGRAPHIC ─────────────────────────────────────── */}
      {exercise.infographic && (
        <section className="max-w-5xl mx-auto px-5 md:px-8 pb-12">
          <div className="rounded-3xl overflow-hidden border border-peach-light/40 shadow-sm">
            <Image
              src={exercise.infographic}
              alt={`${exercise.name} guide`}
              width={1600}
              height={1200}
              className="w-full h-auto"
            />
          </div>
        </section>
      )}

      {/* ── BENEFITS + MUSCLES ───────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-5 md:px-8 pb-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h2 className="font-heading text-2xl font-semibold text-brown mb-5">Benefits</h2>
            <ul className="space-y-3">
              {exercise.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-peach/15 flex items-center justify-center">
                    <Check size={13} className="text-peach" />
                  </span>
                  <span className="font-body text-mocha/80">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h2 className="font-heading text-2xl font-semibold text-brown mb-5">Muscles worked</h2>
            <div className="flex flex-wrap gap-2">
              {exercise.muscles.map((m) => (
                <span
                  key={m}
                  className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-brown bg-sage/15 rounded-full px-4 py-2"
                >
                  <Dumbbell size={14} className="text-sage" /> {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW TO DO IT (STEPS) ─────────────────────────────────────── */}
      {exercise.steps && exercise.steps.length > 0 && (
        <section className="max-w-5xl mx-auto px-5 md:px-8 py-6">
          <span className="section-eyebrow">
            <LeafDot /> How to do it
          </span>
          <h2 className="section-heading mt-2 mb-7">
            Step <em className="italic text-peach">by step</em>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {exercise.steps.map((step, i) => (
              <div key={step.title} className="card">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-brown text-cream font-body text-sm font-semibold mb-3">
                  {i + 1}
                </span>
                <h3 className="font-heading text-lg font-semibold text-brown mb-1.5">{step.title}</h3>
                <p className="font-body text-sm text-mocha/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── PERFECT FORM ─────────────────────────────────────────────── */}
      {exercise.form && exercise.form.length > 0 && (
        <section className="max-w-5xl mx-auto px-5 md:px-8 py-6">
          <div className="bg-brown rounded-3xl p-8 md:p-12">
            <span className="section-eyebrow text-peach/80">
              <LeafDot /> Tips for best form
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-cream mt-2 mb-7">
              Do it <em className="italic text-peach">right.</em>
            </h2>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {exercise.form.map((cue) => (
                <li key={cue} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-peach/90 flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </span>
                  <span className="font-body text-cream/85 leading-relaxed pt-0.5">{cue}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── VARIATIONS ───────────────────────────────────────────────── */}
      {exercise.variations && exercise.variations.length > 0 && (
        <section className="max-w-5xl mx-auto px-5 md:px-8 py-6">
          <span className="section-eyebrow">
            <LeafDot /> Variations
          </span>
          <h2 className="section-heading mt-2 mb-7">
            Find <em className="italic text-peach">your version</em>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {exercise.variations.map((v, i) => (
              <div key={v.name} className="card">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-heading text-lg font-semibold text-brown">
                    {exercise.variations!.length > 1 ? `${i + 1}. ` : ''}
                    {v.name}
                  </span>
                  {v.level && (
                    <span className="font-body text-xs font-medium text-mocha/60 bg-mocha/10 rounded-full px-2.5 py-1">
                      {v.level}
                    </span>
                  )}
                </div>
                <ul className="space-y-2">
                  {v.notes.map((n) => (
                    <li key={n} className="flex items-start gap-2 font-body text-sm text-mocha/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-peach mt-1.5 flex-shrink-0" />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── COMMON MISTAKES ──────────────────────────────────────────── */}
      {exercise.commonMistakes && exercise.commonMistakes.length > 0 && (
        <section className="max-w-5xl mx-auto px-5 md:px-8 py-6">
          <div className="card">
            <h2 className="font-heading text-2xl font-semibold text-brown mb-5">Common mistakes to avoid</h2>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {exercise.commonMistakes.map((m) => (
                <li key={m} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                    <X size={13} className="text-red-500" />
                  </span>
                  <span className="font-body text-mocha/80">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── WHEN TO DO IT + ADD TO ROUTINE ───────────────────────────── */}
      {((exercise.whenToDo && exercise.whenToDo.length > 0) ||
        (exercise.addToRoutine && exercise.addToRoutine.length > 0)) && (
        <section className="max-w-5xl mx-auto px-5 md:px-8 py-6">
          <div className="grid md:grid-cols-2 gap-6">
            {exercise.whenToDo && exercise.whenToDo.length > 0 && (
              <div className="card">
                <div className="flex items-center gap-2 mb-5">
                  <Clock size={18} className="text-peach" />
                  <h2 className="font-heading text-2xl font-semibold text-brown">When to do it</h2>
                </div>
                <ul className="space-y-2.5">
                  {exercise.whenToDo.map((w) => (
                    <li key={w} className="flex items-start gap-3 font-body text-mocha/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-peach mt-2 flex-shrink-0" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {exercise.addToRoutine && exercise.addToRoutine.length > 0 && (
              <div className="card">
                <div className="flex items-center gap-2 mb-5">
                  <CalendarCheck size={18} className="text-sage" />
                  <h2 className="font-heading text-2xl font-semibold text-brown">Add to your routine</h2>
                </div>
                <ul className="space-y-2.5">
                  {exercise.addToRoutine.map((r) => (
                    <li key={r} className="flex items-start gap-3 font-body text-mocha/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── GUIDE TABLE ──────────────────────────────────────────────── */}
      {exercise.guide && exercise.guide.rows.length > 0 && (
        <section className="max-w-5xl mx-auto px-5 md:px-8 py-6">
          <span className="section-eyebrow">
            <LeafDot /> {exercise.guide.title ?? 'Reps & sets guide'}
          </span>
          <h2 className="section-heading mt-2 mb-7">
            How much, <em className="italic text-peach">how often</em>
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-peach-light/40">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-peach/10">
                  {exercise.guide.headers.map((h) => (
                    <th
                      key={h}
                      className="font-body text-xs font-semibold uppercase tracking-wide text-brown px-5 py-3 whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {exercise.guide.rows.map((row, i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-cream-dark/40' : ''}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`font-body text-sm px-5 py-3.5 ${
                          j === 0 ? 'font-medium text-brown' : 'text-mocha/80'
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {exercise.guide.note && (
            <p className="font-body text-sm text-mocha/55 mt-3">{exercise.guide.note}</p>
          )}
        </section>
      )}

      {/* ── TIPS FOR BEST RESULTS ────────────────────────────────────── */}
      {exercise.tips && exercise.tips.length > 0 && (
        <section className="max-w-5xl mx-auto px-5 md:px-8 py-6">
          <div className="bg-sage/10 border border-sage/20 rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb size={20} className="text-sage" />
              <h2 className="font-heading text-3xl font-light text-brown">Tips for best results</h2>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {exercise.tips.map((tip) => (
                <li key={tip} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center">
                    <Check size={13} className="text-sage" />
                  </span>
                  <span className="font-body text-mocha/80">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── CLOSING CTA ──────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-5 md:px-8 py-12">
        <div className="bg-peach/10 border border-peach/20 rounded-3xl p-10 md:p-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-brown leading-tight">
            Keep showing up <em className="italic text-peach">for yourself.</em>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-7">
            <Link href="/fitness/library" className="btn-secondary">
              Back to library
            </Link>
            <Link href="/fitness/programs" className="btn-primary">
              Explore programs →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
