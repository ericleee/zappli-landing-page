# Zappli Landing Page — Build Checklist

Track progress against `PLAN.md`. Check items off as they are completed.

## Phase 0 — Project setup

- [ ] Scaffold Next.js (App Router) + TypeScript + Tailwind + ESLint
- [ ] Install deps: `lucide-react`, `motion`, `@supabase/supabase-js`
- [ ] Add brand color tokens to the Tailwind `@theme`
- [ ] Add primary + accent gradient utilities
- [ ] Load Inter via `next/font`
- [ ] Build base layout, page metadata, and a gradient "Z" favicon
- [x] Create `.env.example` with placeholder variable names
- [x] Confirm `.gitignore` excludes all `.env*` files (except the example)

## Phase 1 — Design system

- [ ] `GradientText` component
- [ ] `GradientButton` component (hover glow / gradient shift)
- [ ] `Section` + `Container` layout primitives
- [ ] `Card` + `Pill` primitives (correct radii + soft shadows)
- [ ] Background radial-glow effect
- [ ] Subtle grain / noise overlay
- [ ] `ScrollReveal` animation wrapper
- [ ] `prefers-reduced-motion` respected throughout

## Phase 2 — Layout shell

- [ ] Sticky nav with the gradient wordmark
- [ ] Nav condenses / blurs on scroll
- [ ] Footer (wordmark, tagline, copyright, contact email, privacy link)
- [ ] Page scaffold with all 9 section placeholders

## Phase 3 — Sections

- [ ] S1 Hero — wordmark, gradient headline, subheadline
- [ ] S1 Hero — waitlist form (input + gradient button)
- [ ] S1 Hero — iPhone mockup with an animated swipe deck
- [ ] S2 The Problem — stat header + supporting paragraph
- [ ] S3 How It Works — 3 step cards with icons
- [ ] S4 Features — 4-card bento grid
- [ ] S5 The Numbers — 4 metric tiles with count-up animation
- [ ] S6 Trust line block
- [ ] S7 FAQ — 5-item animated accordion
- [ ] S8 Final CTA — headline + waitlist form
- [ ] S9 Footer finalized
- [ ] All copy matches the brief; no overstated claims

## Phase 4 — Waitlist & email

- [ ] Create the Supabase project
- [ ] Create the `waitlist` table
- [ ] Enable RLS + the anon insert-only policy
- [ ] `<WaitlistForm>` — email format validation
- [ ] `<WaitlistForm>` — loading state
- [ ] `<WaitlistForm>` — success state
- [ ] `<WaitlistForm>` — duplicate-email handling
- [ ] `<WaitlistForm>` — network / error state with retry
- [ ] Honeypot spam field
- [ ] Edge Function fires on insert
- [ ] Confirmation email sends via Resend
- [ ] `RESEND_API_KEY` stored as a Supabase secret (not in the repo)
- [ ] (Optional) owner notification email on each signup
- [ ] End-to-end test: submit → row inserted → confirmation email received
- [ ] End-to-end test: duplicate and invalid emails handled gracefully

## Phase 5 — Polish

- [ ] Scroll-reveal on every section
- [ ] Button + card micro-interactions
- [ ] Mobile responsive pass
- [ ] Desktop responsive pass
- [ ] Image optimization (`next/image`)
- [ ] LCP under 1.5s
- [ ] Lighthouse ≥ 95 (performance + accessibility)
- [ ] SEO meta tags + OG image
- [ ] Color contrast + visible focus states
- [ ] aria attributes on the form and the accordion

## Phase 6 — Deploy

- [ ] Import the repo to Vercel
- [ ] Set env vars in the Vercel dashboard
- [ ] Attach the custom domain
- [ ] Verify the production build + the waitlist works in production

## Phase 7 — QA

- [ ] Loads in under ~1.5s
- [ ] Sharp on mobile and desktop
- [ ] Zappli is understandable within ~5 seconds
- [ ] Waitlist works end-to-end, including the confirmation email
- [ ] Brand matches the app

## Security gate — before every commit

- [ ] `git status` reviewed — no `.env.local` or secrets staged
- [ ] No API keys or tokens present in committed code
