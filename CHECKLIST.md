# Zappli Landing Page — Build Checklist

Tracks progress against `PLAN.md` (v2). Local-first: Stage A builds and is reviewed
on `localhost`; Stage B publishes only after local approval.

---

## STAGE A — build & review locally

### Phase 0 · Scaffold

- [x] `create-next-app` — TypeScript, App Router, Tailwind, `src/`, ESLint
- [x] Install `motion` and `lucide-react`
- [x] Add `.env.example` (placeholder variable names only)
- [x] Update `.gitignore` — raw `assets/`, `waitlist.local.json`, `.next/`
- [x] Production build passes (`npm run build` → static prerender, no warnings)

### Phase 1 · Design system

- [x] Run the Hallmark pre-flight scan; record findings (`.hallmark/preflight.json`)
- [x] Write `design.md` — the locked Zappli atmospheric system
- [x] Write `tokens.css` — all brand colours OKLCH-encoded
- [x] Wire Tailwind `@theme` from the tokens
- [x] Load Geist + Geist Mono via `next/font` (Hallmark bans Inter — see design.md §3)
- [x] Base layout, page metadata, gradient "Z" favicon (`src/app/icon.svg`)
- [x] Create `.hallmark/` project memory (log entry written at the Phase 8 build stamp)

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

- [x] N5 floating-pill nav with the gradient wordmark
- [x] Ft5 statement-style footer
- [x] Page scaffold with all 10 section placeholders
- [x] Background radial gradient bloom + grain overlay (Phase 1)
- [x] `ScrollReveal` animation wrapper (opacity-only, reduced-motion safe)
- [x] Primitives: `GradientText`, `GradientButton`, `Logo`, `Section`, `Container`

### Phase 4 · Sections

- [x] S1 Hero — wordmark, gradient headline, subheadline
- [~] S1 Hero — looping app video centerpiece + HP3 cursor-spotlight (cursor-spotlight done; real video lands in Phase 2)
- [x] S2 The Problem — stat header + supporting paragraph
- [x] S3 How It Works — 3 alternating steps with figure placeholders (real screens in Phase 2)
- [x] S5 Features — bento grid, irregular tile sizes
- [x] S6 The Numbers — 4 metric tiles (count-up wired in Phase 7)
- [x] S7 Trust line block
- [x] S8 FAQ — 5-item accordion (native `<details>`, no JS)
- [x] S9 Final CTA — headline + waitlist form (form wired in Phase 6)
- [x] S10 Footer finalized (Phase 3)
- [x] All copy matches the brief; honest-copy guardrails respected (TODOs flagged on the 11-hour stat and the 3-intros figure)

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
