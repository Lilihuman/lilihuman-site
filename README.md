# Lili Human — lilihuman.com

Personal brand website for Lili Human. Built with **Next.js 14 App Router**, **Tailwind CSS**, and **Stripe** for payments.

---

## Tech stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Fonts | Cormorant Garamond, Dancing Script, Inter (Google Fonts) |
| Payments | Stripe Checkout |
| Content | MDX files (`/content/blog`, `/content/recipes`) |
| Icons | Lucide React |

---

## Getting started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/lilihuman.git
cd lilihuman
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example env file and fill in your values:

```bash
cp .env.local.example .env.local
```

Open `.env.local` and add:

- **Stripe keys** (from [dashboard.stripe.com](https://dashboard.stripe.com))
- **Base URL** (use `http://localhost:3000` for local dev)
- **Google Calendar embed URL** (optional)

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Stripe setup

### Creating products

1. Go to [Stripe Dashboard → Products](https://dashboard.stripe.com/products)
2. Create a product for each item in `/data/products.ts`
3. Copy the **Price ID** (starts with `price_`) into your `.env.local`

### Testing payments

Use Stripe's test card: `4242 4242 4242 4242` with any future expiry and any CVC.

### Webhooks (local testing)

Install the [Stripe CLI](https://stripe.com/docs/stripe-cli) and run:

```bash
stripe listen --forward-to localhost:3000/api/webhook
```

Copy the webhook signing secret into `STRIPE_WEBHOOK_SECRET` in `.env.local`.

### Webhooks (production)

1. Go to Stripe Dashboard → Webhooks → Add endpoint
2. Set the URL to `https://lilihuman.com/api/webhook`
3. Select event: `checkout.session.completed`
4. Copy the signing secret to your Vercel environment variables

---

## Adding content

### Blog posts

Create `.mdx` files in `/content/blog/`:

```mdx
---
title: Your post title
date: 2025-06-01
tag: Fitness
author: Lili Human
excerpt: A short description shown on the listing page.
---

Your post content here...
```

### Recipes

Create `.mdx` files in `/content/recipes/`:

```mdx
---
title: Recipe name
date: 2025-06-01
tag: Dinner
time: 30 min
servings: 4
excerpt: A short description.
---

Recipe content...
```

---

## Deployment on Vercel

### One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual deployment

1. Push your repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Add all environment variables from `.env.local.example` in the Vercel dashboard
4. Deploy

### Important Vercel settings

- **Framework preset:** Next.js (auto-detected)
- **Build command:** `npm run build`
- **Output directory:** `.next`

---

## Adding digital product files

Place downloadable files in `/public/downloads/`:

```
public/
  downloads/
    strong-mama-8wk.pdf
    postpartum-reset.pdf
    20min-hustle.pdf
    morning-planner.pdf
    family-command-centre.pdf
    botanical-prints.zip
```

File paths in `data/products.ts` reference these as `/downloads/filename`.

---

## Google Calendar

1. Open Google Calendar
2. Settings (gear icon) → Settings → Click the calendar → Integrate calendar
3. Copy the **Embed URL**
4. Paste into `NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL` in `.env.local`

---

## Customisation

| File | What to change |
|---|---|
| `data/products.ts` | All shop products and pricing |
| `app/globals.css` | Colours, fonts, global styles |
| `tailwind.config.js` | Colour tokens |
| `components/Nav.tsx` | Navigation links |
| `components/Footer.tsx` | Footer links and social handles |
| `app/about/page.tsx` | Bio and photo |
| `app/page.tsx` | Homepage content |
| `public/images/` | Your photos and images |

---

## Replacing placeholder images

All image placeholders use gradient divs with placeholder text. To replace them:

1. Add your images to `public/images/`
2. Replace the gradient `<div>` placeholders with `<Image>` from `next/image`

Example:
```tsx
// Before
<div className="aspect-[3/4] bg-gradient-to-br...">
  <p>Photo placeholder</p>
</div>

// After
<Image
  src="/images/your-photo.jpg"
  alt="Lili Human"
  fill
  className="object-cover"
/>
```

---

## Scripts

```bash
npm run dev      # Start dev server on localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

© 2025 Lili Human
