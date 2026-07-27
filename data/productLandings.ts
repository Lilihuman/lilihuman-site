/**
 * Rich landing-page copy for each PAID product.
 *
 * Mirrors data/freebies.ts, but for the shop. Every entry powers the detail
 * page at /shop/<slug> — a shareable URL built for social, Pinterest, and the
 * newsletter, with its own Open Graph preview. The price, file, image and name
 * still come from data/products.ts via `productId`; this file carries the
 * selling words + the "peek inside" preview.
 *
 * SCHEMA (unified with freebies — the free pages get the same treatment):
 *   whatsInside  → the concrete list of what the buyer actually gets.
 *   benefits     → 3 reasons it's worth it, in Lili's voice.
 *   peekInside   → a caption + 2–3 teaser page images (a glimpse, never the
 *                  whole product). Images live in /public/images/previews/ and
 *                  are generated from the PDFs (partial / watermarked pages).
 *
 * To add a product: add it to products.ts, then add an entry here. Route and
 * metadata generate automatically.
 */

export interface PeekPage {
  /** /images/previews/<id>-p1.png etc. A partial-page teaser, not the full page. */
  src: string;
  width: number;
  height: number;
  /** Short label under the thumbnail, e.g. "Week 1" or "Sample session". */
  label?: string;
}

export interface ProductLanding {
  /** URL segment: /shop/<slug>. Matches the product id. Keep stable — gets shared. */
  slug: string;
  /** Product id in data/products.ts. Supplies price, file, image and name. */
  productId: string;
  eyebrow: string;
  /** Page <h1>. The words in `emphasis` render in italic sage. */
  headline: string;
  emphasis: string;
  subhead: string;
  /** The concrete "here's exactly what you get" list. */
  whatsInside: string[];
  /** Three reasons it's worth it. */
  benefits: { title: string; body: string }[];
  /** A glimpse of a few pages — enough to entice, not the whole thing. */
  peekInside?: { caption: string; pages: PeekPage[] };
  /** One warm, honest line that de-risks the click. Optional. */
  reassurance?: string;
  /** Search + social description. Keep under ~155 chars. */
  metaDescription: string;
  /** Optional onward link to a related product, only where it genuinely fits. */
  crossSell?: { heading: string; body: string; href: string; label: string };
}

// NOTE: peekInside.pages point at images not yet generated — see the
// "Generate teaser page previews from PDFs" task. Dimensions are placeholders
// (1200×1553 ≈ US-Letter portrait) until the real teasers are rendered.
const P = (id: string, n: number, label: string): PeekPage => ({
  src: `/images/previews/${id}-p${n}.png`,
  width: 1200,
  height: 1553,
  label,
});

export const productLandings: ProductLanding[] = [
  // ─────────────────────────────  FITNESS PROGRAMS  ─────────────────────────────
  {
    slug: 'strong-mama-8wk',
    productId: 'strong-mama-8wk',
    eyebrow: 'An 8-week strength program',
    headline: 'Eight Weeks to',
    emphasis: 'Genuinely Strong',
    subhead:
      'Progressive strength training that meets you where you are and takes you somewhere you can feel — built for a real week, not a spare two hours at the gym.',
    whatsInside: [
      'A full 8-week progressive plan — every session mapped out, so you never open it wondering what to do today.',
      'A complete exercise guide with form cues and easy swaps, so every move is clear and safe.',
      'Balanced training across your whole body — the strength that shows up in lifting, carrying, and keeping up.',
      'Beginner and advanced options on every movement — start exactly where your body is right now.',
    ],
    benefits: [
      {
        title: 'Progressive by Design',
        body: 'Each week builds on the last, so you’re always moving forward — not repeating the same workout and hoping something changes.',
      },
      {
        title: 'Built Around a Real Week',
        body: 'Sessions that fit around work, kids, and everything else. No marathon gym blocks, no all-or-nothing.',
      },
      {
        title: 'Strength You Can Feel',
        body: 'The kind of strong that shows up off the mat — the groceries, the toddler on your hip, the long days that used to flatten you.',
      },
    ],
    peekInside: {
      caption: 'A peek at Week 1 and a sample session — enough to see exactly how it’s laid out.',
      pages: [P('strong-mama-8wk', 1, 'Program overview'), P('strong-mama-8wk', 2, 'Week 1'), P('strong-mama-8wk', 3, 'Sample session')],
    },
    reassurance: 'Instant download after checkout — yours to keep and repeat as many times as you like.',
    metaDescription:
      'Strong Mama — an 8-week progressive strength program built for real schedules. A full plan plus an exercise guide, with beginner and advanced options on every move.',
    crossSell: {
      heading: 'Want the food side handled too?',
      body: 'The Complete Bundle adds the 8-Week Nutrition Program — protein-first meal planning built to fuel exactly this training.',
      href: '/shop/strong-mama-complete',
      label: 'See the Complete Bundle',
    },
  },
  {
    slug: 'postpartum-reset',
    productId: 'postpartum-reset',
    eyebrow: 'A 4-week postpartum program',
    headline: 'Rebuild,',
    emphasis: 'From the Inside Out',
    subhead:
      'A gentle, structured return to strength after birth — reconnect your core and pelvic floor, restore mobility, and add strength back at a pace that respects what your body just did.',
    whatsInside: [
      'A 4-week progression that starts with the deep core and pelvic floor — the foundation before anything harder.',
      'Mobility and recovery work to undo the aches of feeding, carrying, and not sleeping.',
      'A gradual strength rebuild, so week four feels genuinely different from week one.',
      'Clear when-to-start and when-to-stop guidance, so you always know you’re moving at the right pace.',
    ],
    benefits: [
      {
        title: 'Foundation First',
        body: 'Core and pelvic-floor reconnection before load — the part most programs skip, and the part that changes everything.',
      },
      {
        title: 'Gentle, Not Fragile',
        body: 'Respectful of recovery without treating you like you’re made of glass. You’re rebuilding, and this treats you like it.',
      },
      {
        title: 'A Real Plan for a Tender Season',
        body: 'No guessing what’s safe. Four weeks laid out, so you can just follow it on the days you have nothing left to decide.',
      },
    ],
    peekInside: {
      caption: 'A look at the first week and the core-reconnection work it opens with.',
      pages: [P('postpartum-reset', 1, 'How it works'), P('postpartum-reset', 2, 'Week 1'), P('postpartum-reset', 3, 'Core & pelvic floor')],
    },
    reassurance: 'Cleared to exercise by your provider? This is a gentle, well-guided place to begin. Instant download after checkout.',
    metaDescription:
      'Postpartum Reset — a gentle 4-week program to rebuild your core and pelvic floor, restore mobility, and add strength back at a pace that respects recovery.',
    crossSell: {
      heading: 'Want meals that support recovery too?',
      body: 'The Complete Bundle adds two weeks of nourishing postpartum meal plans built to pair with the program.',
      href: '/shop/postpartum-complete',
      label: 'See the Complete Bundle',
    },
  },
  {
    slug: '20min-hustle',
    productId: '20min-hustle',
    eyebrow: 'A 30-day workout plan',
    headline: 'Thirty Days,',
    emphasis: 'Twenty Minutes Each',
    subhead:
      'A full month of 20-minute workouts built for real life — no equipment, no gym, no excuses. Short enough to actually do, structured enough to actually work.',
    whatsInside: [
      '30 days of 20-minute workouts, laid out day by day — open it and go.',
      'Zero equipment and zero gym — every session works with your body and a patch of floor.',
      'A mix that keeps it interesting, so day 22 doesn’t feel like day 2.',
      'Modifications throughout, so it scales up or down to your day.',
    ],
    benefits: [
      {
        title: 'Twenty Minutes You’ll Actually Find',
        body: 'Short enough to fit before the shower or after bedtime — the length that turns “someday” into “done.”',
      },
      {
        title: 'A Plan, Not a Pile of Workouts',
        body: 'Thirty days decided for you. No standing in the living room wondering what counts as a workout today.',
      },
      {
        title: 'Nothing to Buy, Nowhere to Go',
        body: 'No equipment, no membership, no commute. The only thing between you and starting is pressing play.',
      },
    ],
    peekInside: {
      caption: 'A glimpse at the calendar and a sample day — see how a single 20 minutes is built.',
      pages: [P('20min-hustle', 1, 'How it works'), P('20min-hustle', 2, '30-day calendar'), P('20min-hustle', 3, 'Sample day')],
    },
    reassurance: 'Instant download after checkout — keep it forever and run the 30 days whenever life allows.',
    metaDescription:
      '20-Minute Hustle — a 30-day plan of 20-minute, no-equipment workouts built for real life. Short enough to do, structured enough to work.',
    crossSell: {
      heading: 'Want the food dialed in too?',
      body: 'The Complete Bundle adds two weeks of fat-loss meal plans designed to pair with these 30 days.',
      href: '/shop/20min-hustle-complete',
      label: 'See the Complete Bundle',
    },
  },
  {
    slug: 'custom-program',
    productId: 'custom-program',
    eyebrow: 'A personalised program, built for you',
    headline: 'Not a Template.',
    emphasis: 'Yours',
    subhead:
      'A fully personalised fitness and nutrition program built around your goals, your schedule, your equipment, and your life — written for you, not pulled off a shelf.',
    whatsInside: [
      'A custom training plan matched to your goal, your available days, and the equipment you actually have.',
      'A nutrition approach built for how you really eat — no wild restrictions, no foods you hate.',
      'Consideration for your starting point, injuries, and the constraints of your real week.',
      'Delivered to your inbox within 48–72 hours of your intake form and purchase.',
    ],
    benefits: [
      {
        title: 'Built Around Your Life',
        body: 'Three days a week and a couple of dumbbells? A full gym and five? It’s written for the life you actually have.',
      },
      {
        title: 'One Goal, One Plan',
        body: 'No generic “everyone do this.” Your program points at your goal, so every session is doing a job.',
      },
      {
        title: 'A Real Person Reading Your Answers',
        body: 'You fill out the intake, I read it, and I write the plan. That’s the whole point of “custom.”',
      },
    ],
    reassurance: 'Two simple steps: fill out the intake at /fitness/personal-training, then purchase here. Your program lands in your inbox within 48–72 hours.',
    metaDescription:
      'A fully personalised fitness and nutrition program built around your goals, schedule, and equipment — written for you and emailed within 48–72 hours.',
  },
  {
    slug: 'move-with-me-toddler',
    productId: 'move-with-me-toddler',
    eyebrow: 'A 20-minute parent + toddler program',
    headline: 'Twenty Minutes,',
    emphasis: 'Just the Two of You',
    subhead:
      'A playful daily routine you do together — your strength and mobility woven through games that build your toddler’s coordination, all in one twenty-minute flow.',
    whatsInside: [
      'A warm-up, a strength block, toddler development games, and a calm cooldown — one 20-minute flow.',
      'Real movement for you (not just supervising) alongside play that’s genuinely good for them.',
      'Developmental games disguised as fun — coordination, balance, and gross-motor skills.',
      'A structure you can repeat daily without it ever feeling like a chore.',
    ],
    benefits: [
      {
        title: 'You Move Too',
        body: 'Not a kids’ class you watch from the side. Your strength and mobility are built right into the twenty minutes.',
      },
      {
        title: 'Connection, Not Screens',
        body: 'Twenty minutes of the good kind of tired — together, laughing, on the living-room floor.',
      },
      {
        title: 'Play That’s Secretly Working',
        body: 'They think it’s a game. It’s also balance, coordination, and impulse control, quietly getting stronger.',
      },
    ],
    peekInside: {
      caption: 'A peek at the flow and one of the toddler development games.',
      pages: [P('move-with-me-toddler', 1, 'The 20-min flow'), P('move-with-me-toddler', 2, 'Strength block'), P('move-with-me-toddler', 3, 'Development game')],
    },
    reassurance: 'Instant download after checkout — one routine you’ll come back to again and again.',
    metaDescription:
      'A 20-minute daily parent-and-toddler program — your strength and mobility woven through games that build your child’s coordination. Move together, every day.',
  },

  // ─────────────────────────────  KIDS & FAMILY  ─────────────────────────────
  {
    slug: 'brain-activation-age2',
    productId: 'brain-activation-age2',
    eyebrow: 'A daily program for age ~2.5',
    headline: 'Ten Minutes of',
    emphasis: 'Big Little Growth',
    subhead:
      'A week of short, playful daily routines for toddlers around age two and a half — movement, language, sensory play, and connection, without pressure or a pile of expensive toys.',
    whatsInside: [
      'Seven days of 10-minute sessions, each one planned so you’re never inventing it on the spot.',
      'A blend of movement, language, sensory play, and one-on-one connection.',
      'Everyday-object activities — no special toys, no screens, no prep pile.',
      'A gentle rhythm that fits nap schedules and short attention spans.',
    ],
    benefits: [
      {
        title: 'Ten Minutes Is the Whole Point',
        body: 'Matched to a two-year-old’s attention span, not an adult’s idea of a lesson. Short, sweet, done.',
      },
      {
        title: 'No Pressure, No Pinterest',
        body: 'Not another impossible standard. Just simple, warm activities that happen to build real brain development.',
      },
      {
        title: 'Connection Is the Curriculum',
        body: 'The learning rides in on your attention. Ten unhurried minutes together is the active ingredient.',
      },
    ],
    peekInside: {
      caption: 'A look at how a day is laid out — one 10-minute session, start to finish.',
      pages: [P('brain-activation-age2', 1, 'How it works'), P('brain-activation-age2', 2, 'A sample day')],
    },
    reassurance: 'Instant download after checkout — print it or keep it on your phone.',
    metaDescription:
      'A week of 10-minute daily brain-activation routines for toddlers around age 2.5 — movement, language, sensory play and connection, no pressure or expensive toys.',
    crossSell: {
      heading: 'Have a four-year-old too?',
      body: 'There’s a full Age 4 version — themed daily play plans built for exactly that stage.',
      href: '/shop/brain-activation-age4',
      label: 'See the Age 4 program',
    },
  },

  // ─────────────────────────────  AI TOOLS  ─────────────────────────────
  {
    slug: 'everyday-ai-busy-moms',
    productId: 'everyday-ai-busy-moms',
    eyebrow: 'A no-jargon AI guide',
    headline: 'AI That Actually',
    emphasis: 'Helps at Home',
    subhead:
      'Simple ways to put AI to work on meal planning, schedules, and the mental load of family life — a practical guide for anyone who wants the help without spending hours figuring it out.',
    whatsInside: [
      'Copy-paste prompts for the real stuff — meals, schedules, packing lists, tricky emails, kid questions.',
      'Plain-language walkthroughs, no tech background assumed.',
      'Real-life examples you can adapt in about a minute.',
      'The mindset for offloading the invisible planning that eats your evenings.',
    ],
    benefits: [
      {
        title: 'Prompts You’ll Actually Use',
        body: 'Not clever demos — the weeknight-dinner, who-has-what-appointment, help-me-word-this kind of help.',
      },
      {
        title: 'No Jargon, No Degree',
        body: 'Written for someone with ten minutes and zero interest in “prompt engineering.” Just do this, get that.',
      },
      {
        title: 'Give the Mental Load Somewhere to Go',
        body: 'Hand the planning, drafting, and remembering to a tool that never gets tired. Keep the parts only you can do.',
      },
    ],
    peekInside: {
      caption: 'A peek at a couple of the ready-to-use prompts and one worked example.',
      pages: [P('everyday-ai-busy-moms', 1, 'Inside the guide'), P('everyday-ai-busy-moms', 2, 'Sample prompts')],
    },
    reassurance: 'Instant PDF download after checkout — works with the free AI tools you already have.',
    metaDescription:
      'Everyday AI for Busy Moms — simple, no-jargon prompts for meal planning, schedules and family life. Put AI to work without spending hours figuring it out.',
    crossSell: {
      heading: 'Newer to AI than that?',
      body: 'The free Top 10 AI Tips and the free Claude Mastery Course are a gentle place to start — no cost, no jargon.',
      href: '/free/claude-mastery-course',
      label: 'Start free',
    },
  },

  // ─────────────────────────────  WORKBOOKS  ─────────────────────────────
  {
    slug: 'ai-comic-creation-workbook',
    productId: 'ai-comic-creation-workbook',
    eyebrow: 'A step-by-step creative workbook',
    headline: 'Make a Comic,',
    emphasis: 'No Drawing Required',
    subhead:
      'Plan, write, and illustrate your own children’s comic from a rough idea to a finished book — with fillable worksheets and copy-paste AI prompts doing the drawing for you.',
    whatsInside: [
      'A complete step-by-step system, from first idea to print-ready comic.',
      'Fillable worksheets: character bibles, story-arc planning, and panel briefs.',
      'Copy-paste AI image prompts, so “I can’t draw” stops being the reason it never happens.',
      'A publishing checklist for printing, sharing, or actually selling it.',
    ],
    benefits: [
      {
        title: 'From Idea to Finished Book',
        body: 'Not inspiration — a process. Every step laid out, so the comic in your head becomes one in your hands.',
      },
      {
        title: 'The AI Does the Drawing',
        body: 'Copy, paste, adjust. You bring the story and the heart; the prompts handle the part you were stuck on.',
      },
      {
        title: 'A Real Keepsake — or a Real Product',
        body: 'Make your kid the hero of their own book, or build something you can print and sell. Same workbook, your call.',
      },
    ],
    peekInside: {
      caption: 'A glimpse at one worksheet and a sample image prompt in action.',
      pages: [P('ai-comic-creation-workbook', 1, 'The process'), P('ai-comic-creation-workbook', 2, 'A worksheet'), P('ai-comic-creation-workbook', 3, 'Prompt example')],
    },
    reassurance: 'Instant download after checkout — works with free and paid AI image tools.',
    metaDescription:
      'AI Comic Creation Workbook — plan, write, and illustrate your own children’s comic with fillable worksheets and copy-paste AI prompts. No drawing required.',
  },

  // ─────────────────────────────  BUNDLES (best value)  ─────────────────────────────
  {
    slug: 'strong-mama-complete',
    productId: 'strong-mama-complete',
    eyebrow: 'The complete Strong Mama experience',
    headline: 'Train and Eat,',
    emphasis: 'Handled',
    subhead:
      'Everything in one place — the full 8-week strength program plus the complete nutrition program built to fuel it. The training and the food, finally pointing the same direction.',
    whatsInside: [
      'The complete 8-Week Strong Mama strength program and exercise guide.',
      'The full 8-week protein-first nutrition program, matched to the training.',
      'One coherent plan — no stitching a workout from one place to meals from another.',
      'The best value: everything bundled below the price of buying each piece on its own.',
    ],
    benefits: [
      {
        title: 'The Whole Picture',
        body: 'Strength and nutrition are two halves of the same result. This is both, built to work together from day one.',
      },
      {
        title: 'Nothing Left to Figure Out',
        body: 'What to train, what to eat, and when — decided. You just show up and follow it.',
      },
      {
        title: 'The Better Deal',
        body: 'Bundled for less than the two programs separately. The complete experience, priced like you meant it.',
      },
    ],
    peekInside: {
      caption: 'A peek at how the training and nutrition halves line up across the eight weeks.',
      pages: [P('strong-mama-complete', 1, 'What’s included'), P('strong-mama-complete', 2, 'Training week'), P('strong-mama-complete', 3, 'Nutrition sample')],
    },
    reassurance: 'Instant download after checkout — every file, yours to keep.',
    metaDescription:
      'Strong Mama Complete Bundle — the full 8-week strength program plus the complete nutrition program, built to work together. The whole picture, best value.',
  },
  {
    slug: 'postpartum-complete',
    productId: 'postpartum-complete',
    eyebrow: 'The complete postpartum bundle',
    headline: 'Heal, Rebuild,',
    emphasis: 'Nourish',
    subhead:
      'Everything your body needs to come back gently after birth — the full 4-week program plus two weeks of nourishing meal plans, so recovery and food are both taken care of.',
    whatsInside: [
      'The complete 4-week Postpartum Reset program.',
      'Two weeks of nourishing postpartum meal plans built to support recovery.',
      'One gentle system for a tender season — movement and food, side by side.',
      'The best value — everything together, below the à-la-carte price.',
    ],
    benefits: [
      {
        title: 'Recovery Is Also What You Eat',
        body: 'Rebuilding takes fuel. This pairs the gentle program with meals designed to support healing, not fight it.',
      },
      {
        title: 'Fewer Decisions on Hard Days',
        body: 'Newborn fog is real. Move and eat straight off the plan, on the days deciding anything feels impossible.',
      },
      {
        title: 'Everything, One Purchase',
        body: 'No hunting for “what should I eat postpartum.” It’s here, bundled, and priced kindly.',
      },
    ],
    peekInside: {
      caption: 'A glimpse of week one and how the meal plans slot alongside it.',
      pages: [P('postpartum-complete', 1, 'What’s included'), P('postpartum-complete', 2, 'Week 1'), P('postpartum-complete', 3, 'Meal plan sample')],
    },
    reassurance: 'Gentle, well-guided, and yours to keep. Instant download after checkout.',
    metaDescription:
      'Postpartum Reset Complete Bundle — the full 4-week rebuild program plus two weeks of nourishing meal plans. Recovery and food, both handled, best value.',
  },
  {
    slug: '20min-hustle-complete',
    productId: '20min-hustle-complete',
    eyebrow: 'The complete 20-Minute Hustle',
    headline: 'The Whole Month,',
    emphasis: 'Food and All',
    subhead:
      '30 days of 20-minute workouts plus two weeks of fat-loss meal plans — the movement and the meals, bundled so the whole thing pulls in one direction.',
    whatsInside: [
      'The full 30-day, 20-minute workout plan — no equipment, no gym.',
      'Two weeks of fat-loss meal plans designed to pair with the workouts.',
      'A simple, repeatable rhythm for both training and eating.',
      'Best value — everything in one, below the separate prices.',
    ],
    benefits: [
      {
        title: 'Workouts and Meals, Aligned',
        body: 'The training does its job faster when the food is on the same page. This is both, built to match.',
      },
      {
        title: 'Short, Simple, Sustainable',
        body: 'Twenty-minute sessions and no-fuss meals — the kind of plan a real month can actually hold.',
      },
      {
        title: 'One Click, Everything',
        body: 'No piecing it together. The full month of movement and two weeks of meals, bundled and priced to match.',
      },
    ],
    peekInside: {
      caption: 'A look at the 30-day calendar and how the meal plans line up beside it.',
      pages: [P('20min-hustle-complete', 1, 'What’s included'), P('20min-hustle-complete', 2, '30-day calendar'), P('20min-hustle-complete', 3, 'Meal plan sample')],
    },
    reassurance: 'Instant download after checkout — all files, yours to keep.',
    metaDescription:
      '20-Minute Hustle Complete Bundle — 30 days of 20-minute, no-equipment workouts plus two weeks of fat-loss meal plans. The whole month, food and all.',
  },

  // ─────────────────────────────  NUTRITION / MEAL PLANS  ─────────────────────────────
  {
    slug: 'strong-mama-nutrition',
    productId: 'strong-mama-nutrition',
    eyebrow: 'An 8-week nutrition program',
    headline: 'Eat to',
    emphasis: 'Fuel the Work',
    subhead:
      'Eight weeks of protein-first meal planning designed to power your training and support fat loss — real food, real structure, no spreadsheets or misery.',
    whatsInside: [
      'Eight weeks of protein-first meal planning, laid out for you.',
      'A structure that fuels training and supports fat loss at the same time.',
      'Real, everyday food — no exotic ingredients, no all-or-nothing rules.',
      'A repeatable framework you can keep using long after week eight.',
    ],
    benefits: [
      {
        title: 'Protein First, Guesswork Last',
        body: 'The one lever that changes the most, made simple — so your food is finally working with your training.',
      },
      {
        title: 'Structure Without a Straitjacket',
        body: 'Enough of a plan to stop the daily “what do I even eat,” without banning everything you love.',
      },
      {
        title: 'Built to Outlast Eight Weeks',
        body: 'Not a crash. A way of eating you understand well enough to keep going on your own.',
      },
    ],
    peekInside: {
      caption: 'A peek at the framework and a sample day of eating.',
      pages: [P('strong-mama-nutrition', 1, 'How it works'), P('strong-mama-nutrition', 2, 'Sample day')],
    },
    reassurance: 'Instant download after checkout — yours to keep and reuse.',
    metaDescription:
      'Strong Mama 8-Week Nutrition Program — protein-first meal planning built to fuel your training and support fat loss. Real food, real structure, no misery.',
  },
  {
    slug: 'postpartum-meal-plan',
    productId: 'postpartum-meal-plan',
    eyebrow: 'A postpartum meal-plan bundle',
    headline: 'Nourish the',
    emphasis: 'Rebuild',
    subhead:
      'Two weeks of nourishing meal plans designed to pair with the Postpartum Reset — food that supports healing and energy, without one more impossible thing on your plate.',
    whatsInside: [
      'Two full weeks of nourishing, recovery-minded meal plans.',
      'Built to pair with the Postpartum Reset program.',
      'Simple, real food for a season when cooking has to be easy.',
      'One less decision on the days you have none left to make.',
    ],
    benefits: [
      {
        title: 'Food That Supports Healing',
        body: 'Meals chosen to nourish a recovering body and steady your energy — not another diet, just support.',
      },
      {
        title: 'Easy Is the Whole Point',
        body: 'Newborn life is not the time for elaborate cooking. This keeps it simple on purpose.',
      },
      {
        title: 'Decided For You',
        body: 'Two weeks planned so you can just eat, when planning anything feels like too much.',
      },
    ],
    peekInside: {
      caption: 'A glimpse of one week and a sample day.',
      pages: [P('postpartum-meal-plan', 1, 'Week 1'), P('postpartum-meal-plan', 2, 'Sample day')],
    },
    reassurance: 'Instant download after checkout — pairs with the Postpartum Reset program.',
    metaDescription:
      'Postpartum Reset Meal Plan Bundle — two weeks of nourishing meal plans built to pair with the program and support recovery. Simple, real food for a tender season.',
  },
  {
    slug: '20min-hustle-nutrition',
    productId: '20min-hustle-nutrition',
    eyebrow: 'A meal-plan bundle',
    headline: 'Two Weeks of',
    emphasis: 'Meals, Decided',
    subhead:
      'Fat-loss meal plans built to pair with your 20-Minute Hustle workouts — so the food stops undoing the work, without turning eating into a second job.',
    whatsInside: [
      'Two full weeks of fat-loss meal plans.',
      'Designed to pair with the 20-Minute Hustle workouts.',
      'Everyday food and simple structure — no obscure ingredients.',
      'A pattern you can keep repeating past the two weeks.',
    ],
    benefits: [
      {
        title: 'The Food Finally Matches the Effort',
        body: 'Short workouts work better when the plate isn’t working against them. This lines the two up.',
      },
      {
        title: 'Simple by Design',
        body: 'Real meals, clear structure, nothing you need a specialty store for. Easy enough to actually follow.',
      },
      {
        title: 'Two Weeks You Can Repeat',
        body: 'Learn the pattern once, run it as long as you like. Not a two-week stunt.',
      },
    ],
    peekInside: {
      caption: 'A peek at one week and a sample day of eating.',
      pages: [P('20min-hustle-nutrition', 1, 'Week 1'), P('20min-hustle-nutrition', 2, 'Sample day')],
    },
    reassurance: 'Instant download after checkout — pairs with the 20-Minute Hustle plan.',
    metaDescription:
      '20-Minute Hustle Meal Plan Bundle — two weeks of fat-loss meal plans built to pair with the workouts. Everyday food, simple structure, yours to repeat.',
  },

  // ─────────────────────────────  KIDS & FAMILY  ─────────────────────────────
  {
    slug: 'brain-activation-age4',
    productId: 'brain-activation-age4',
    eyebrow: 'A daily program for age 4',
    headline: 'A Week of',
    emphasis: 'Ten-Minute Magic',
    subhead:
      'A full week of 10-minute daily play plans made for four-year-olds — each day a different theme, each one built to grow their brain through connection and play, not flashcards.',
    whatsInside: [
      'Seven themed days of 10-minute play plans — movement, storytelling, science, and more.',
      'A different focus each day, so it stays fresh and they stay curious.',
      'Everyday materials — no special kits, no screens, no elaborate setup.',
      'A gentle daily rhythm that fits a four-year-old’s energy and attention.',
    ],
    benefits: [
      {
        title: 'A Theme a Day',
        body: 'Movement one day, storytelling the next — variety that keeps a four-year-old leaning in instead of wandering off.',
      },
      {
        title: 'Learning That Feels Like Play',
        body: 'No worksheets, no drilling. Real development, delivered as the best ten minutes of their day.',
      },
      {
        title: 'Planned So You Don’t Have To',
        body: 'Open the day, do the day. All the thinking is done — you just get to be present for it.',
      },
    ],
    peekInside: {
      caption: 'A look at how one themed day is laid out.',
      pages: [P('brain-activation-age4', 1, 'How it works'), P('brain-activation-age4', 2, 'A themed day')],
    },
    reassurance: 'Instant download after checkout — print it or keep it on your phone.',
    metaDescription:
      'A week of themed 10-minute daily play plans for four-year-olds — movement, storytelling, science and more, built to grow their brain through connection and play.',
    crossSell: {
      heading: 'Younger sibling at home?',
      body: 'There’s an Age 2.5 version too, built for that stage’s shorter attention and simpler play.',
      href: '/shop/brain-activation-age2',
      label: 'See the Age 2.5 program',
    },
  },

  // ─────────────────────────────  AI TOOLS (series)  ─────────────────────────────
  {
    slug: 'everyday-ai-busy-women',
    productId: 'everyday-ai-busy-women',
    eyebrow: 'A no-fluff AI guide',
    headline: 'AI, Minus the',
    emphasis: 'Learning Curve',
    subhead:
      'A practical guide to using AI in your actual daily life — from meal planning to inbox to the endless mental list — built for people too busy to sit through a course to figure it out.',
    whatsInside: [
      'Ready-to-use prompts for everyday life — planning, writing, organising, deciding.',
      'Real-life examples you can adapt in about a minute.',
      'Plain language throughout — no tech background required.',
      'A simple way to start offloading the small stuff that adds up.',
    ],
    benefits: [
      {
        title: 'Practical, Not Impressive',
        body: 'Skip the party tricks. This is the meal-plan, draft-this-email, help-me-decide kind of useful.',
      },
      {
        title: 'No Time Tax',
        body: 'Built for ten spare minutes, not a weekend. Copy, paste, tweak, done.',
      },
      {
        title: 'Room in Your Head, Back',
        body: 'Hand the remembering and the wording to a tool that never tires — and keep the parts only you can do.',
      },
    ],
    peekInside: {
      caption: 'A peek at a few of the prompts and one worked example.',
      pages: [P('everyday-ai-busy-women', 1, 'Inside the guide'), P('everyday-ai-busy-women', 2, 'Sample prompts')],
    },
    reassurance: 'Instant PDF download after checkout — works with the free AI tools you already have.',
    metaDescription:
      'Everyday AI for Busy Women — a no-fluff guide to using AI in daily life, from meal planning to inbox. Practical prompts and real examples, no jargon.',
  },
  {
    slug: 'everyday-ai-car-troubles',
    productId: 'everyday-ai-car-troubles',
    eyebrow: 'A no-fluff AI guide',
    headline: 'Calmer at the',
    emphasis: 'Repair Shop',
    subhead:
      'A simple guide to using AI when your car makes a weird noise, a warning light comes on, or a repair quote feels like a foreign language — smarter questions, calmer decisions.',
    whatsInside: [
      'Prompts for describing symptoms, decoding warning lights, and sizing up quotes.',
      'How to walk into a mechanic conversation actually knowing what to ask.',
      'Plain-language examples, no car or tech knowledge assumed.',
      'A way to feel less cornered when something under the hood goes wrong.',
    ],
    benefits: [
      {
        title: 'Ask the Right Questions',
        body: 'Turn “it’s making a noise” into a clear description and a short list of smart things to ask.',
      },
      {
        title: 'Decode the Quote',
        body: 'Understand what’s urgent, what can wait, and what a fair price looks like — before you say yes.',
      },
      {
        title: 'Walk In Steadier',
        body: 'Not an expert overnight — just informed enough to make a calm decision instead of a cornered one.',
      },
    ],
    peekInside: {
      caption: 'A glimpse of a couple of the prompts in action.',
      pages: [P('everyday-ai-car-troubles', 1, 'Inside the guide'), P('everyday-ai-car-troubles', 2, 'Sample prompts')],
    },
    reassurance: 'Instant PDF download after checkout — works with the free AI tools you already have.',
    metaDescription:
      'Everyday AI for Car Troubles — a simple guide to using AI for weird noises, warning lights, and confusing repair quotes. Smarter questions, calmer decisions.',
  },
  {
    slug: 'everyday-ai-small-business',
    productId: 'everyday-ai-small-business',
    eyebrow: 'A no-fluff AI guide',
    headline: 'Your Part-Time',
    emphasis: 'Assistant',
    subhead:
      'A practical guide to using AI for content, customer replies, planning, and the hundred small jobs of running a small business — the help of an assistant, without the payroll.',
    whatsInside: [
      'Prompts for content, captions, customer replies, and planning.',
      'Real examples you can adapt to your own business in minutes.',
      'Plain language — built for owners, not engineers.',
      'A way to reclaim hours from the small, repeatable work.',
    ],
    benefits: [
      {
        title: 'Cover the Small Jobs',
        body: 'The captions, the replies, the “can you just write this” — handled, so you get back to the work only you can do.',
      },
      {
        title: 'Sound Like You, Faster',
        body: 'Draft in your voice in a fraction of the time — then edit, don’t start from a blank page.',
      },
      {
        title: 'Help Without Hiring',
        body: 'The leverage of an assistant on the days you can’t justify one. Start today, no onboarding.',
      },
    ],
    peekInside: {
      caption: 'A peek at a few business prompts and one worked example.',
      pages: [P('everyday-ai-small-business', 1, 'Inside the guide'), P('everyday-ai-small-business', 2, 'Sample prompts')],
    },
    reassurance: 'Instant PDF download after checkout — works with the free AI tools you already have.',
    metaDescription:
      'Everyday AI for Small Business Owners — practical prompts for content, customer replies, and planning. The help of an assistant, without hiring anyone.',
  },
];

export function getProductLandingBySlug(slug: string): ProductLanding | undefined {
  return productLandings.find((p) => p.slug === slug);
}
