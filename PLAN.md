# Zappli Landing Page — Build Plan (v2)

This plan supersedes v1. It is built on **three inputs** — a design study of
cluely.com, the Zappli app's own brand, and the **Hallmark** design methodology —
and is sequenced **local-first**: a complete version runs on `localhost` and is
reviewed before anything is published.

**Status:** planning complete — ready to build.
**Decisions locked this session:**
- Visual base — **dark & atmospheric** (near-black, glowing gradients).
- Hero — **both**: a looping app video anchors the hero *and* a separate
  interactive swipe-deck section.

---

## 1. Goal & success criteria

**One job:** collect waitlist emails from job seekers before the Zappli app launches.
**Secondary:** explain Zappli clearly and build excitement.

A build is done when:

- It loads in under ~1.5s and is sharp on mobile *and* desktop.
- A visitor understands what Zappli is within ~5 seconds.
- The waitlist form validates, stores the email, sends a confirmation, and confirms
  clearly on screen.
- It unmistakably reads as the same brand as the app (the purple→blue gradient).
- It passes the Hallmark 69-gate slop test with no open gates.

---

## 2. The three inputs this plan is built on

### 2.1 Cluely — design study (DNA extracted from cluely.com)

- **Macrostructure:** linear, single-column, alternating full-width sections; the
  hero dominates the fold; sequential feature demonstrations follow; FAQ accordion;
  final CTA; multi-column footer.
- **Section order:** header → hero statement → product demo → workflow
  visualization → multi-device showcase → feature suites → specs → FAQ → final CTA
  → footer.
- **Nav:** minimal top bar — logo left, a few inline links, CTA right.
- **Hero:** centered text, dual CTAs, large demo imagery directly below.
- **Type:** modern sans-serif; hierarchy built from size and weight, not serif
  contrast.
- **Color — important correction:** cluely.com is now **light** (white base with
  purple / pink / blue gradient-tinted section bands), *not* the dark site the v1
  brief assumed.
- **Motion:** a "shimmer" hero effect; implied interface-state transitions.
- **Product visuals:** real screenshots as responsive images, multiple viewport
  versions, shown in real context.

**What Zappli borrows:** the linear modular rhythm, demo-led storytelling, the
real-product-visuals discipline, the repeated CTA, metric specificity, the FAQ
accordion.

**What Zappli does differently (the "unique" mandate):**
- A **dark, atmospheric** base instead of cluely's current light treatment — your
  decision; the Zappli gradient glows hardest against near-black.
- An **optimistic, empowering** tone instead of cluely's edgy "undetectable"
  provocation. Job seeking is stressful; Zappli is the friendly way out.
- The **swipe metaphor as a literal, interactive centerpiece** — cluely has nothing
  like it. This is Zappli's signature.

### 2.2 The Zappli app — brand & design system

From the app brief and the logo assets:

- **Mark:** a white lightning bolt inside a rounded-square ("squircle") tile filled
  with a purple→blue gradient.
- **Wordmark:** "Zappli", bold sans-serif.
- **Colors** (source of truth — to be OKLCH-encoded at build):

  | Token         | Hex       | Use                          |
  | ------------- | --------- | ---------------------------- |
  | brand.purple  | `#7C3AED` | gradient start, accents      |
  | brand.indigo  | `#6366F1` | gradient middle              |
  | brand.blue    | `#3B82F6` | gradient end                 |
  | accent.blue   | `#0066FF` | buttons, links, CTAs         |
  | accent.cyan   | `#00D4FF` | gradient highlights, glow    |
  | dark.base     | `#0D1117` | page background (paper)      |
  | dark.card     | `#1F2937` | cards / elevated surfaces    |
  | white         | `#FFFFFF` | primary text on dark         |
  | gray.400      | `#9CA3AF` | muted text                   |
  | gray.500      | `#6B7280` | secondary text               |
  | green         | `#10B981` | success / positive stats     |

- **Gradients:** primary `#7C3AED → #6366F1 → #3B82F6`; accent `#0066FF → #00D4FF`.
- **Shape:** radii — cards 16px, buttons 12px, pills/inputs 100px / 10px; soft
  shadows, never harsh.
- **Type:** Geist pairing — the brief originally specified Inter, but Hallmark
  bans Inter as a default and the atmospheric pairing canon is Geist. Geist
  serves the brief's SF-Pro intent without that conflict. See `design.md` §3.

This becomes the **locked design system** — see §5.

### 2.3 Hallmark — the build methodology

The Hallmark design skill is installed (`~/.claude/skills/hallmark/`). The build
follows its **Design flow**:

- **Genre — atmospheric.** The dark, AI-forward, "dark-AI-tool" school. The
  atmospheric genre file scopes themes, gates, and voice.
- **Macrostructure — Workbench (#05).** "Product screenshots in frames are the
  primary content; the page is a guided tour of the app in use." This fits Zappli
  exactly — the screen recordings and the live swipe demo *are* the content. (This
  is the first Hallmark run for the project, so there is no diversification
  constraint yet; `.hallmark/log.json` is created at build time.)
- **Theme route — custom.** The brief names exact brand colours, which is a
  custom-theme signal. The build uses a **custom atmospheric theme anchored on the
  Zappli gradient**, locked into `design.md` + `tokens.css`. Hallmark then treats
  this as a system-managed project and defers to `design.md`.
- **Nav archetype — N5 Floating pill** (Hallmark says default *away* from N1, the
  most-recognised AI fingerprint). **Footer — minimal statement style** (default
  away from Ft3). Exact archetype codes are confirmed at build Step 2 against
  Hallmark's component cookbook.
- **Hero polish — HP3 Cursor-spotlight:** a soft glow that tracks the cursor.
  Atmospheric and premium; reinforces the "glow" of the brand gradient.
- **Enrichment:** a real looping demo video in the hero — a real asset, never a
  hand-drawn device frame.

**The five disciplines (apply everywhere):**

1. **Pre-emit self-critique** — score every output 1–5 on six axes (Philosophy,
   Hierarchy, Execution, Specificity, Restraint, Variety); anything < 3 triggers a
   revision pass; stamp the scores.
2. **Honest copy** — no fabricated metrics, testimonials, or logos. Real numbers,
   or a labelled "metric to confirm" placeholder.
3. **Locked tokens** — every colour and font references a named token; no inline
   hex / OKLCH / font-family improvisation.
4. **No re-drawn chrome** — no CSS-built browser bars or phone frames. Real
   screenshots and real video only, in a `<figure>` with at most a hairline border.
5. **Mobile verified at 320 / 375 / 414 / 768px** — a hard floor, not a wish list.

**Motion restraint:** at most ~3 microinteraction primitives; animate `transform`
and `opacity` only; three named easings; full `prefers-reduced-motion` support.

**Slop test:** the 69-gate check runs before the local review gate and again before
publishing.

---

## 3. Locked build decisions (the Hallmark "preview" target)

```
Hallmark · build target

- Genre          · atmospheric (dark AI-tool school)
- Macrostructure · Workbench (#05) — guided app tour
- Theme          · custom — Zappli atmospheric
                   (#0D1117 paper · purple→cyan gradient accent · Geist display)
- Nav            · N5 Floating pill
- Footer         · minimal statement
- Hero           · headline + waitlist form + looping app video · HP3 cursor-spotlight
- Enrichment     · real looping demo video (hero) + interactive swipe deck (section)
- Sections       · Hero · Problem · How It Works · Swipe Demo · Features ·
                   Numbers · Trust · FAQ · Final CTA · Footer
- Motion         · scroll-reveal · cursor-spotlight · count-up  (+ the swipe drag)
- Slop test      · run at Phase 8 and Phase 11 (target 69/69)
```

---

## 4. Tech stack

| Layer            | Choice                                                        |
| ---------------- | ------------------------------------------------------------- |
| Framework        | Next.js (App Router) + TypeScript                             |
| Styling          | Tailwind CSS v4 (`@theme`, fed from `tokens.css`)             |
| Fonts            | Geist + Geist Mono, via `next/font`                           |
| Animation        | motion (Framer Motion) — scroll reveal, swipe drag, count-up  |
| Icons            | lucide-react                                                  |
| Waitlist backend | Next.js Route Handler `POST /api/waitlist` (one backend)      |
| Storage          | Supabase (publish phase)                                      |
| Email            | Resend (publish phase)                                        |
| Video tooling    | ffmpeg (local only — asset conversion)                        |
| Hosting          | Vercel (publish phase)                                        |

---

## 5. Design system — the Zappli atmospheric tokens

Locked into `design.md` + `tokens.css` in Phase 1. All colours are OKLCH-encoded;
the brand hex in §2.2 is the source of truth. Token groups:

- **Paper / surfaces** — `--color-paper` `#0D1117` · `--color-surface` (a hair
  lighter, for raised bands) · `--color-card` `#1F2937` · hairline borders at
  ~8% white.
- **Ink** — `--color-ink` `#FFFFFF` · `--color-ink-secondary` `#9CA3AF` ·
  `--color-ink-muted` `#6B7280`.
- **Accent & gradient** — `--color-purple` `#7C3AED` · `--color-indigo` `#6366F1`
  · `--color-blue` `#3B82F6` · `--color-accent` `#0066FF` · `--color-cyan`
  `#00D4FF`; `--gradient-primary` and `--gradient-accent`; `--glow-cyan` for the
  atmospheric bloom.
- **Semantic** — `--color-success` `#10B981`.
- **Type** — `--font-display` Geist Sans · `--font-body` Geist Sans · `--font-outlier`
  Geist Mono. Hallmark bans Inter as a default; Geist is the atmospheric pairing
  canon and matches the brief's SF-Pro intent. Locked in `design.md` §3.
- **Scale** — 4-pt spacing (`--space-*`), a `--text-*` type scale, radii
  (`--radius-card` 16px, `--radius-button` 12px, `--radius-pill` 100px),
  `--ease-*` and `--dur-*` motion tokens.

Because `design.md` exists, Hallmark treats the project as system-managed: every
page shares this system, and no page improvises off-token values.

---

## 6. Asset pipeline

The `assets/` folder currently holds raw, oversized, partly-duplicated captures:
4 `.mov` screen recordings (~8MB each), 1 more `.mov` (`ezgif-…`, 2.5MB), 2 GIFs
(4.5MB and **11MB**), and 2 logo PNGs. Three of the `.mov` files share the base
name `ScreenRecording_01-06-2026_23-34-42_1` — almost certainly duplicates.

Pipeline:

1. **Audit & label.** Identify what each clip shows. (`.mov` files cannot be
   previewed directly — either you label each clip, or frames are extracted with
   ffmpeg for identification.) Dedupe the repeated recordings.
2. **Convert.** Every clip → web video: `.mp4` (H.264) **and** `.webm` (VP9/AV1).
   The 11MB GIF in particular must become video — a GIF that size is a performance
   failure on its own.
3. **Optimize.** Muted, short, looping; target each clip well under ~2MB; generate
   a poster (first-frame) image for each so the hero paints instantly.
4. **Rename semantically** — e.g. `hero-loop.mp4`, `how-it-works-swipe.mp4`.
5. **Logos.** Recreate the gradient wordmark and bolt mark **in code/SVG** so they
   are crisp and correct on a dark background (the PNG wordmark sits on white).
   Derive the favicon from the bolt mark.
6. **Repo hygiene.** Optimized assets go in `public/` and are committed; the raw
   `assets/` originals (~40MB) are **gitignored** — never pushed.
7. **Tooling.** Install ffmpeg via winget.

---

## 7. Page architecture — 10 sections

The Workbench macrostructure: a guided tour of the app. Each section below lists
its job, its copy direction, its app visual, and its motion. Section copy follows
the v1 brief closely; **honest-copy guardrails apply** (see end of section).

1. **Hero** — N5 floating-pill nav with the gradient wordmark. Headline
   *"Your next job is one swipe away."* (last 3–4 words in the gradient).
   Subheadline. The `<WaitlistForm>` (email input + gradient button). Microcopy:
   "Be first in line when Zappli launches. No spam." Centerpiece: the **looping app
   video**. Background: a radial gradient bloom + HP3 cursor-spotlight glow.
2. **The Problem** — stat header *"The average job seeker spends 11 hours a week
   applying."* + one short paragraph on repetitive, un-personalized applications.
3. **How It Works** — 3 steps: **Swipe** / **Zappli does the work** / **Get warm
   intros**. Scroll-synced app visuals (a Feature-Stack treatment — sticky copy,
   cycling screens).
4. **Interactive Swipe Demo** — the signature section: a **draggable job-card
   deck**. The visitor swipes a card right and watches a tailored-resume animation.
   Keyboard-accessible; collapses to a tap/static fallback under reduced-motion.
5. **Features grid** — 4 features (AI resume tailoring · application auto-fill ·
   warm introductions · one dashboard). Irregular tile sizes, not uniform cards.
6. **The Numbers** — metric tiles: `45 min → 1 min` · `11 hrs/week` · `3` intros ·
   `10 sec`. Count-up animation on scroll-in.
7. **Trust line** — a short "you're always in control" block.
8. **FAQ** — a 5-item accordion (Conversational-FAQ archetype): free? · launch
   timing? · does it apply for me? · does the AI lie? · is my data safe?
9. **Final CTA** — *"Be first to swipe your way to a job."* + the `<WaitlistForm>`
   again.
10. **Footer** — minimal statement: gradient wordmark, tagline, contact email,
    privacy link, copyright.

**Honest-copy guardrails:** never say Zappli "auto-applies for you" — it does the
heavy lifting; the user reviews and submits. The resume is *tailored*, never
fabricated. Outreach messages are AI-drafted but user-reviewed and user-sent. Any
metric not independently verified (`11 hrs/week`, `3 intros`, `10 sec`) must be
sourced or marked "metric to confirm" — Hallmark gate 56 fails invented numbers.

---

## 8. The waitlist / email system — local-mock-first

**One backend:** a Next.js Route Handler, `POST /api/waitlist`.

- **Local v1 (Stage A):** the route validates the email server-side, dedupes
  against a gitignored local `waitlist.local.json`, and returns success / duplicate
  / error. The entire form experience is testable with **zero external accounts**.
- **Publish (Stage B):** the same route swaps storage to **Supabase** and calls
  **Resend** to send a branded confirmation email. All keys are server-side
  environment variables — never `NEXT_PUBLIC_`, never committed. An optional
  owner-notification email can fire on each signup.

**`<WaitlistForm>` component** — used in the hero and the final CTA:

- All 8 interactive states (default · hover · focus · active · disabled · loading ·
  error · success).
- Email-format validation before submit.
- Friendly duplicate handling ("You're already on the list!").
- A honeypot field for basic spam protection.
- A clear success state: "You're on the list — we'll be in touch."

**Supabase table (Stage B):**

```sql
create table waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  source text default 'landing',
  created_at timestamptz default now()
);
alter table waitlist enable row level security;
create policy "service inserts only" on waitlist for insert with check (true);
```

The route handler holds the Supabase key server-side, so the list is never
exposed to the client. This is why "all features work with email": the route owns
both the database insert and the confirmation send, and is tested end-to-end.

---

## 9. Build phases — local-first

**Stage A (Phases 0–8)** ends at a local review gate. **Stage B (Phases 9–11)**
runs only after you approve the local build.

### Stage A — build & review locally

- **Phase 0 · Scaffold** — `create-next-app` (TypeScript, App Router, Tailwind,
  `src/`, ESLint); install `motion` and `lucide-react`; add `.env.example`;
  update `.gitignore` (raw `assets/`, `waitlist.local.json`); dev server runs.
- **Phase 1 · Design system** — run the Hallmark pre-flight scan; write `design.md`
  (the locked Zappli atmospheric system) and `tokens.css` (OKLCH); wire Tailwind
  `@theme` and `next/font` (Geist, Geist Mono); base layout, metadata, favicon;
  create `.hallmark/` project memory.
- **Phase 2 · Asset pipeline** — install ffmpeg; audit / label / dedupe the clips;
  convert `.mov` and `.gif` → `.mp4` + `.webm`; optimize and generate posters;
  recreate the wordmark / bolt as SVG; place finished assets in `public/`.
- **Phase 3 · Layout shell** — N5 floating-pill nav; minimal footer; page scaffold
  with all 10 section placeholders; background gradient bloom + grain overlay;
  `ScrollReveal` wrapper; primitives (`GradientText`, `GradientButton`, `Section`,
  `Container`).
- **Phase 4 · Sections** — build sections 1, 2, 3, 5, 6, 7, 8, 9, 10 in order;
  after each, report what was built for a browser review.
- **Phase 5 · Interactive swipe deck** — section 4: the draggable card stack
  (motion drag), the swipe-right tailoring animation, keyboard access, and the
  reduced-motion fallback.
- **Phase 6 · Waitlist form (local mock)** — `<WaitlistForm>` with all 8 states;
  the `/api/waitlist` local mock; validation, dedupe, honeypot, success states.
- **Phase 7 · Motion + polish + responsive** — scroll-reveal, cursor-spotlight,
  count-up; responsive verified at 320 / 375 / 414 / 768px; performance (video
  posters, lazy loading, `next/image`); accessibility (focus rings,
  `prefers-reduced-motion`, aria on form + accordion).
- **Phase 8 · Hallmark slop test** — run all 69 gates; the six-axis pre-emit
  self-critique (revise anything < 3); stamp the CSS; fix every failing gate.

> **Local review gate** — you open `localhost:3000`; we iterate until you say it
> looks good. **Nothing is published before this.**

### Stage B — publish (only after local approval)

- **Phase 9 · Real email** — create the Supabase project + `waitlist` table + RLS;
  swap `/api/waitlist` to Supabase; add the Resend confirmation email; set env
  vars; test end-to-end (submit → row inserted → confirmation email received;
  duplicate and invalid emails handled).
- **Phase 10 · Deploy** — push; import the repo to Vercel; set env vars in the
  Vercel dashboard; attach the custom domain; verify the production build.
- **Phase 11 · Production QA** — re-run the slop test on production; verify the
  success criteria (§1); confirm the waitlist works in production including the
  email; Lighthouse ≥ 95; cross-device check.

---

## 10. Hallmark compliance checklist

Genre file loaded · macrostructure picked and stamped · `design.md` system in
place · tokens locked (no inline hex) · no re-drawn device chrome (real video and
screenshots only) · honest copy (no invented metrics) · ≤ ~3 motion primitives ·
`transform`/`opacity` animation only · three named easings · `prefers-reduced-motion`
supported · `:focus-visible` ring ≥ 3:1 · mobile verified at 320/375/414/768 ·
every interactive element ships all 8 states · 69-gate slop test passed ·
`.hallmark/log.json` updated.

---

## 11. Risks & open items

- **cluely is light now; we chose dark.** An intentional divergence — recorded so
  it is not mistaken for an oversight.
- **Unverified metrics.** `11 hrs/week`, `3 intros`, `10 sec` must be sourced or
  marked "metric to confirm" — Hallmark fails invented numbers.
- **`.mov` files can't be previewed here.** Each clip needs labelling (by you, or
  via ffmpeg frame extraction) before it can be placed correctly.
- **Raw assets are heavy (~40MB).** The raw `assets/` folder is gitignored; only
  optimized `public/` assets are committed.
- **Hallmark as a skill** loads automatically in new Claude Code sessions; in the
  current session its `SKILL.md` is applied manually. Either way the methodology is
  followed.
- **"Both" hero** (video + interactive deck) adds Phase 5 — extra build effort,
  accounted for in the phasing.

---

## 12. What's needed from you

- **For Stage A (local build):** only labels for the screen-recording clips — what
  each one shows — so they land in the right sections.
- **For Stage B (publish):** Supabase, Resend, and Vercel accounts, plus the
  domain. The full account / key / asset checklist is kept in the **local**
  `SETUP_AND_COSTS.md` (deliberately not committed to this public repo).

Stage A can begin immediately.
