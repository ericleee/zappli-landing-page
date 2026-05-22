# Zappli Landing Page — Build Checklist

Tracks progress against `PLAN.md` (v2). Local-first: Stage A builds and is reviewed
on `localhost`; Stage B publishes only after local approval.

---

## STAGE A — build & review locally

### Phase 0 · Scaffold

- [ ] `create-next-app` — TypeScript, App Router, Tailwind, `src/`, ESLint
- [ ] Install `motion` and `lucide-react`
- [ ] Add `.env.example` (placeholder variable names only)
- [ ] Update `.gitignore` — raw `assets/`, `waitlist.local.json`, `.next/`
- [ ] Dev server runs at `localhost:3000`

### Phase 1 · Design system

- [ ] Run the Hallmark pre-flight scan; record findings
- [ ] Write `design.md` — the locked Zappli atmospheric system
- [ ] Write `tokens.css` — all brand colours OKLCH-encoded
- [ ] Wire Tailwind `@theme` from the tokens
- [ ] Load Inter + Inter Tight via `next/font`
- [ ] Base layout, page metadata, gradient "Z" favicon
- [ ] Create `.hallmark/` project memory (`log.json`, `preflight.json`)

### Phase 2 · Asset pipeline

- [ ] Install ffmpeg (winget)
- [ ] Audit, label, and dedupe the screen-recording clips
- [ ] Convert `.mov` / `.gif` → `.mp4` (H.264) + `.webm` (VP9/AV1)
- [ ] Optimize each clip (muted, looping, well under ~2MB)
- [ ] Generate a poster (first-frame) image per clip
- [ ] Rename assets semantically
- [ ] Recreate the gradient wordmark + bolt mark as SVG
- [ ] Place finished assets in `public/`; confirm raw `assets/` is gitignored

### Phase 3 · Layout shell

- [ ] N5 floating-pill nav with the gradient wordmark
- [ ] Minimal statement-style footer
- [ ] Page scaffold with all 10 section placeholders
- [ ] Background radial gradient bloom + grain overlay
- [ ] `ScrollReveal` animation wrapper (respects reduced-motion)
- [ ] Primitives: `GradientText`, `GradientButton`, `Section`, `Container`

### Phase 4 · Sections

- [ ] S1 Hero — wordmark, gradient headline, subheadline
- [ ] S1 Hero — looping app video centerpiece + HP3 cursor-spotlight
- [ ] S2 The Problem — stat header + supporting paragraph
- [ ] S3 How It Works — 3 steps, scroll-synced app visuals
- [ ] S5 Features — 4-feature grid, irregular tile sizes
- [ ] S6 The Numbers — 4 metric tiles
- [ ] S7 Trust line block
- [ ] S8 FAQ — 5-item accordion
- [ ] S9 Final CTA — headline + waitlist form
- [ ] S10 Footer finalized
- [ ] All copy matches the brief; honest-copy guardrails respected

### Phase 5 · Interactive swipe deck

- [ ] S4 draggable job-card stack (motion drag)
- [ ] Swipe-right → tailored-resume animation
- [ ] Keyboard accessible
- [ ] Reduced-motion fallback (tap / static)

### Phase 6 · Waitlist form (local mock)

- [ ] `<WaitlistForm>` — all 8 states
- [ ] `/api/waitlist` route handler — local mock storage
- [ ] Email-format validation
- [ ] Duplicate-email handling
- [ ] Honeypot spam field
- [ ] Success / error states verified

### Phase 7 · Motion + polish + responsive

- [ ] Scroll-reveal on every section
- [ ] Cursor-spotlight glow
- [ ] Count-up animation on the metric tiles
- [ ] Responsive at 320 / 375 / 414 / 768px — no horizontal scroll
- [ ] Performance — video posters, lazy loading, `next/image`
- [ ] Accessibility — focus rings, `prefers-reduced-motion`, aria on form + accordion

### Phase 8 · Hallmark slop test

- [ ] Run all 69 slop-test gates — fix every failure
- [ ] Six-axis pre-emit self-critique (revise anything scoring < 3)
- [ ] Stamp the CSS (`/* Hallmark · macrostructure: Workbench · ... */`)
- [ ] Update `.hallmark/log.json`

> ### ☐ LOCAL REVIEW GATE — open `localhost:3000`, iterate until approved

---

## STAGE B — publish (only after local approval)

### Phase 9 · Real email

- [ ] Create the Supabase project
- [ ] Create the `waitlist` table + RLS policy
- [ ] Swap `/api/waitlist` from local mock to Supabase
- [ ] Add the Resend confirmation email
- [ ] (Optional) owner-notification email on each signup
- [ ] Set env vars locally (`.env.local`, gitignored)
- [ ] End-to-end test: submit → row inserted → confirmation email received
- [ ] End-to-end test: duplicate and invalid emails handled gracefully

### Phase 10 · Deploy

- [ ] Push to GitHub
- [ ] Import the repo to Vercel
- [ ] Set env vars in the Vercel dashboard
- [ ] Attach the custom domain
- [ ] Verify the production build

### Phase 11 · Production QA

- [ ] Re-run the slop test on production
- [ ] Loads in under ~1.5s; sharp on mobile and desktop
- [ ] Zappli understandable within ~5 seconds
- [ ] Waitlist works in production, including the confirmation email
- [ ] Lighthouse ≥ 95 (performance + accessibility)
- [ ] Brand matches the app

---

## Hallmark compliance gate

- [ ] Genre file loaded (atmospheric)
- [ ] Macrostructure picked and stamped (Workbench)
- [ ] `design.md` system in place; tokens locked (no inline hex)
- [ ] No re-drawn device chrome — real video / screenshots only
- [ ] Honest copy — no invented metrics
- [ ] ≤ ~3 motion primitives; `transform`/`opacity` only; 3 named easings
- [ ] `prefers-reduced-motion` supported throughout
- [ ] Every interactive element ships all 8 states
- [ ] 69-gate slop test passed

## Security gate — before every commit

- [ ] `git status` reviewed — no `.env.local`, secrets, or raw `assets/` staged
- [ ] No API keys or tokens present in committed code
