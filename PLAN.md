# Zappli Landing Page — Build Plan

**One job:** collect waitlist emails from job seekers before the Zappli app launches.
**Secondary:** explain Zappli clearly and build excitement so people *want* to join.
**Quality bar:** a fast, striking, single-scroll page with cluely-level polish — but
Zappli's own optimistic, empowering identity (not a cluely clone).

This plan is derived from `LANDING_PAGE_BRIEF.md`. Build the page section by section;
after each section, pause for a browser review.

---

## 1. Tech stack

- **Next.js (App Router) + TypeScript** — a fast, SEO-friendly single page.
- **Tailwind CSS v4** — brand tokens declared via `@theme` in `globals.css`.
- **lucide-react** — the same icon family the app uses.
- **motion (Framer Motion)** — scroll reveals, the swipe-card hero, micro-interactions.
- **@supabase/supabase-js** — waitlist email storage.
- **Resend** (via a Supabase Edge Function) — waitlist confirmation emails.
- **Vercel** — hosting, CI deploys, and custom domain.

## 2. Brand tokens (must match the app exactly)

### Colors

| Token        | Hex       | Use                              |
| ------------ | --------- | -------------------------------- |
| brand.purple | `#7C3AED` | gradient start, accents          |
| brand.indigo | `#6366F1` | gradient middle                  |
| brand.blue   | `#3B82F6` | gradient end                     |
| accent.blue  | `#0066FF` | buttons, links, CTAs             |
| accent.cyan  | `#00D4FF` | gradient highlights, glow        |
| ink          | `#111827` | primary text on light            |
| dark.base    | `#0D1117` | dark section backgrounds         |
| dark.card    | `#1F2937` | cards on dark sections           |
| light.bg     | `#F3F4F6` | light section background         |
| white        | `#FFFFFF` | light cards, text on dark        |
| gray.500     | `#6B7280` | secondary text                   |
| gray.400     | `#9CA3AF` | muted text                       |
| gray.200     | `#E5E7EB` | borders                          |
| green        | `#10B981` | success / positive stats         |

### Gradients

- **Primary:** `#7C3AED → #6366F1 → #3B82F6` (purple → indigo → blue)
- **Accent:** `#0066FF → #00D4FF` (blue → cyan)

### Shape & feel

- Radius: cards `16px`, buttons `12px`, pills/inputs `100px` / `10px`.
- Soft, subtle shadows — never harsh.
- **Inter** via `next/font` — headlines 700–800, comfortable body line height.
- Dark, premium base (`#0D1117`); gradients glow against it.

## 3. Design direction — "unique and beautiful, like cluely"

Borrow cluely's *quality bar and structure* — not its look, and not its tone.

- A bold, confident hero — one headline, one subheadline, an immediate CTA.
- A dark, premium base so the purple→cyan gradient glows.
- Vertical, modular sections.
- Real product visuals — the Zappli app inside iPhone frames, not stock art.
- Metric-driven proof (hard numbers).
- The email form repeats: once in the hero, once near the bottom.

**Make it distinctly Zappli (the "unique" mandate):**

- A signature radial gradient glow behind the hero.
- An interactive or looping swipe-card in the hero — the swipe metaphor *is* the brand.
- A subtle grain/noise overlay for depth.
- A scroll-reveal animation on every section.
- An animated gradient wordmark, and gradient text on key phrases.
- A count-up animation on the metric tiles.
- A bento-style features grid; a smooth height-animating FAQ accordion.
- Micro-interactions: gradient-shift / glow on button hover.
- Tone: optimistic and empowering — bold, but never cynical.

## 4. Page structure (9 sections — build in order)

1. **Hero** — gradient "Zappli" wordmark; headline *"Your next job is one swipe away."*
   (last 3–4 words in the gradient); subheadline; email waitlist form (input +
   gradient button); microcopy "Be first in line when Zappli launches. No spam.";
   an iPhone mockup with an animated swipe deck.
2. **The Problem** — stat header *"The average job seeker spends 11 hours a week
   applying."*; one short supporting paragraph.
3. **How It Works** — 3 step cards: **Swipe** / **Zappli does the work** /
   **Get warm intros**.
4. **Features grid** — 4 cards: AI resume tailoring / Application auto-fill /
   Warm introductions / One dashboard.
5. **The Numbers** — 4 metric tiles: `45 min → 1 min` · `11 hrs/week` ·
   `3` intros · `10 sec`.
6. **Trust line** — a short "you're always in control" block.
7. **FAQ** — 5 collapsible items (is it free? / when does it launch? / does it apply
   for me? / does the AI lie? / is my data safe?).
8. **Final CTA** — *"Be first to swipe your way to a job."* + the waitlist form again.
9. **Footer** — gradient wordmark, tagline, copyright, contact email, privacy link.

Full copy for every section lives in `LANDING_PAGE_BRIEF.md` §5 — use it closely.
**Honest framing:** never say "auto-applies for you"; the resume is *tailored*, never
fabricated; outreach messages are AI-drafted but user-reviewed and user-sent.

## 5. The email / waitlist system

The waitlist is the whole point — it must capture emails reliably and confirm clearly.

### Storage — Supabase

```sql
create table waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  source text default 'landing',
  created_at timestamptz default now()
);
alter table waitlist enable row level security;
-- allow anonymous INSERTs only — no one can read the list from the client
create policy "anyone can join the waitlist"
  on waitlist for insert to anon with check (true);
```

RLS is **insert-only** for `anon` — the list can never be read from the client.

### Form behaviour

- Validate the email format before submitting.
- A loading state while the request is in flight.
- A clear success state: *"You're on the list — we'll be in touch."*
- Duplicate email → friendly *"You're already on the list!"* (catch the unique
  constraint violation, do not show a raw error).
- A network/error state with a retry option.
- A honeypot field for basic spam protection.
- One reusable `<WaitlistForm>` component, used in both the hero and the final CTA.

### Confirmation email

- A Supabase Database Webhook / Edge Function fires on every `waitlist` insert.
- It sends a branded *"You're on the Zappli waitlist"* email via Resend.
- `RESEND_API_KEY` is stored as a Supabase secret — never in the client, never committed.
- Optional: a notification email to the Zappli owner on each new signup.

### Keys

- `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are public-safe and
  used client-side.
- The Supabase **service-role key** and `RESEND_API_KEY` are server/secret only —
  they must never enter the repository or the client bundle.

## 6. Secrets & security (the repo is public and a work in progress)

- `.gitignore` excludes every `.env*` file except `.env.example`.
- `.env.example` holds placeholder variable names only — no real values.
- Real values live in `.env.local` (local dev) and the Vercel dashboard (production).
- The Supabase anon key is designed to be public; the service-role key is not — keep
  it out of the repo entirely.
- Review `git status` before every commit; never stage `.env.local` or any key.

## 7. Build phases

### Phase 0 — Project setup
Scaffold Next.js + TS + Tailwind + ESLint (App Router, `src/`). Install dependencies.
Wire brand tokens + Inter. Build the base layout, page metadata, and a gradient "Z"
favicon. Add `.env.example` (done).

### Phase 1 — Design system
Color/gradient utilities, a typography scale, the background glow + grain overlay, a
scroll-reveal wrapper, and reusable primitives: `GradientText`, `GradientButton`,
`Section`, `Container`, `Card`, `Pill`.

### Phase 2 — Layout shell
A sticky nav (gradient wordmark, condenses on scroll), a footer, and a page scaffold
with all 9 section placeholders.

### Phase 3 — Sections
Build sections 1 → 9 in order. After each section, report what was built for a
browser review.

### Phase 4 — Waitlist & email
Create the Supabase project, the `waitlist` table, and the RLS policy. Build
`<WaitlistForm>` with every state. Add the Edge Function + Resend confirmation email
and the spam honeypot.

### Phase 5 — Polish
Scroll animations, micro-interactions, a full responsive pass (mobile + desktop),
performance (image optimization, LCP < 1.5s, Lighthouse ≥ 95), SEO/meta + an OG
image, and accessibility (contrast, focus states, `prefers-reduced-motion`, aria on
the form and accordion).

### Phase 6 — Deploy
Import the repo to Vercel, set env vars in the Vercel dashboard, attach a custom
domain (e.g. `zappli.app`), and verify the production build.

### Phase 7 — QA against success criteria
- Loads in under ~1.5s; sharp on mobile *and* desktop.
- A visitor understands what Zappli is within ~5 seconds.
- The form validates, stores the email, sends the confirmation, and confirms on screen.
- It unmistakably looks like the same brand as the app (the purple→blue gradient).

## 8. Assets needed

- The Zappli gradient wordmark — recreate it in code from the brand tokens.
- App screenshots — the swipe deck, Warm Introductions, the dashboard — placed in
  iPhone frames.
- Optional: a 10–20s looping swipe screen recording for the hero.
- A favicon — the gradient "Z" mark.

## 9. Launch-day follow-up

When the app ships, swap the waitlist CTA for a "Download on the App Store" button
and email the waitlist.
