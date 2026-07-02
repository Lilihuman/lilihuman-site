'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface RecipeMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  time: string;
  servings: string;
  tag: string;
  image?: string;
}

const tags = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Sides', 'Dessert'];

export default function RecipeList({ recipes }: { recipes: RecipeMeta[] }) {
  const [activeTag, setActiveTag] = useState('All');

  const filtered =
    activeTag === 'All' ? recipes : recipes.filter((recipe) => recipe.tag === activeTag);

  return (
    <>
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => {
            const isActive = tag === activeTag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                aria-pressed={isActive}
                className={`font-body text-sm font-medium px-4 py-1.5 rounded-pill border transition-colors ${
                  isActive
                    ? 'border-peach bg-peach text-white'
                    : 'border-peach-light/40 text-mocha/70 hover:border-peach hover:text-peach'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 py-10 pb-24">
        {filtered.length === 0 ? (
          <p className="font-body text-mocha/60">No recipes here yet — check back soon.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((recipe) => (
              <Link
                href={`/recipes/${recipe.slug}`}
                key={recipe.slug}
                className="card group cursor-pointer flex flex-col"
              >
                <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-peach-light/30 to-sage-light/20">
                  {recipe.image ? (
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      width={600}
                      height={338}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="font-body text-xs text-mocha/30">Recipe photo</p>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block font-body text-xs font-medium text-peach bg-peach/10 rounded-full px-2.5 py-1">
                    {recipe.tag}
                  </span>
                  <span className="font-body text-xs text-mocha/50">⏱ {recipe.time}</span>
                  <span className="font-body text-xs text-mocha/50">· {recipe.servings} servings</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-brown leading-snug group-hover:text-peach transition-colors flex-1">
                  {recipe.title}
                </h3>
                <p className="font-body text-sm text-mocha/70 mt-2 leading-relaxed">{recipe.excerpt}</p>
                <p className="font-body text-xs text-mocha/40 mt-4">
                  {new Date(recipe.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
