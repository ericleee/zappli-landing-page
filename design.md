# Zappli — Design System (`design.md`)

This file is the **locked design system** for the Zappli landing page. Per the
Hallmark methodology, `design.md` overrides downstream picks — every Hallmark run
in this repo reads this file first and conforms to it. The atmospheric genre
disciplines apply on top, except where this file documents a deliberate brand
exception (§6).

---

## 1. Identity & locked decisions

| Aspect          | Pick                                                                |
| --------------- | ------------------------------------------------------------------- |
| Genre           | **atmospheric** (dark AI-tool school)                               |
| Macrostructure  | **Workbench (#05)** — guided app tour                               |
| Theme route     | **custom** — Zappli atmospheric (this file is the locked system)    |
| Nav archetype   | **N5 Floating pill** (atmospheric default)                          |
| Footer archetype| **Ft5 Statement** (atmospheric default)                             |
| Hero polish     | **HP3 Cursor-spotlight** glow                                       |
| Enrichment      | Real looping demo video (hero) + interactive swipe deck (section)   |
| Anchor hue      | ~258 (cool blue-violet)                                             |

---

## 2. Brand source of truth

The brand colours and shapes come from the Zappli iPhone app
(`src/constants/theme.ts` in the app repo). Every value below has both an OKLCH
expression (the build artefact, in `src/app/tokens.css`) and a hex equivalent
(the app source).

### 2.1 Colours

| Token                   | OKLCH                            | Hex        | Role                          |
| ----------------------- | -------------------------------- | ---------- | ----------------------------- |
| `--color-paper`         | `oklch(17.6% 0.014 258.4)`       | `#0D1117`  | page background               |
| `--color-surface`       | `oklch(22.0% 0.016 256.8)`       | `#161B22`  | raised band                   |
| `--color-card`          | `oklch(27.8% 0.030 256.8)`       | `#1F2937`  | card surface                  |
| `--color-card-hi`       | `oklch(31.5% 0.036 260.1)`       | `#273244`  | elevated card                 |
| `--color-rule`          | `oklch(35.0% 0.020 258.0)`       | —          | hairline border               |
| `--color-ink`           | `oklch(96.0% 0.005 258.0)`       | near-white | primary text                  |
| `--color-ink-secondary` | `oklch(71.4% 0.019 261.3)`       | `#9CA3AF`  | secondary text                |
| `--color-ink-muted`     | `oklch(55.1% 0.023 264.4)`       | `#6B7280`  | muted text                    |
| `--color-purple`        | `oklch(54.1% 0.247 293.0)`       | `#7C3AED`  | gradient start                |
| `--color-indigo`        | `oklch(58.5% 0.204 277.1)`       | `#6366F1`  | gradient middle               |
| `--color-blue`          | `oklch(62.3% 0.188 259.8)`       | `#3B82F6`  | gradient end                  |
| `--color-accent`        | `oklch(56.3% 0.241 260.8)`       | `#0066FF`  | primary action                |
| `--color-cyan`          | `oklch(80.4% 0.146 219.5)`       | `#00D4FF`  | glow / highlight              |
| `--color-focus`         | `oklch(80.4% 0.146 219.5)`       | `#00D4FF`  | focus ring (≥ 3:1)            |
| `--color-success`       | `oklch(69.6% 0.149 162.5)`       | `#10B981`  | success                       |

### 2.2 Gradients

- `--gradient-primary` — purple → indigo → blue (`135deg`, three stops).
- `--gradient-accent`  — accent-blue → cyan (`135deg`, two stops).

### 2.3 Atmospheric blooms

Two fixed-attached cool radial blooms compose the canvas; per atmospheric.md
they are **not animated**.

- Purple bloom anchored top-left, ~62 × 50 % footprint, 32 % opacity.
- Cyan bloom anchored bottom-right, ~55 × 45 %, 16 % opacity.

### 2.4 Shape

| Token             | Value     | Use            |
| ----------------- | --------- | -------------- |
| `--radius-input`  | 0.625rem  | inputs         |
| `--radius-button` | 0.75rem   | buttons        |
| `--radius-card`   | 1rem      | cards          |
| `--radius-pill`   | 100rem    | pills / chips  |

---

## 3. Typography

**Pairing:** `Geist Sans` (display + body) + `Geist Mono` (outlier).

- Geist is the Hallmark **atmospheric** canon (typography.md § Atmospheric).
- Inter, Roboto, Open Sans are banned defaults (typography.md § Bans) — Geist
  serves the brief's intent (a modern sans like SF Pro) without that conflict.
- Geist Mono is the outlier — used only on small caps labels, the metric
  numerals, and code-like tags. Max two slots.

**Scale:** major third (1.25). Display via `clamp()`. Body floor: 16 px.
Line-height: 1.05–1.2 on display, 1.5–1.65 on body.

**Weights:** body 400 with weight 600/700 for display — a ≥ 300-unit contrast.

---

## 4. Motion

Atmospheric is **fade-in only**. No slide-in entrances, no bounce, no overshoot.

- Three named easings: `--ease-out`, `--ease-in`, `--ease-in-out`.
- Three primitives, no more: **scroll-reveal (opacity)**, **cursor-spotlight**,
  **count-up** (numerals). The swipe-deck drag is a deliberate interactive
  demo, not an entrance animation, and lives outside this budget.
- Animate `transform` and `opacity` only; never layout properties.
- `prefers-reduced-motion: reduce` collapses everything to ≤ 150 ms opacity
  crossfade; blooms and grain are suppressed.

---

## 5. Voice

Direct, optimistic, specific. Job seeking is stressful; Zappli is the friendly
way out. Voice fixtures:

- *Zappli does the 45-minute part of every job application. You do the
  60-second part.*
- *Your next job is one swipe away.*
- *Swipe right. Get hired.*

**Honest-copy guardrails** (Hallmark gate 56):

- Never say *"auto-applies to every job for you"* — Zappli prepares; the user
  reviews and submits.
- The resume is *tailored*, never fabricated.
- AI drafts the outreach; the user reviews and sends.
- Any metric not independently verified (the 11-hour stat, the 3-intros claim,
  the 10-second figure) must be sourced or rendered as a "metric to confirm"
  placeholder. **No invented numbers.**

---

## 6. Documented brand exceptions

Two Hallmark gates relax for this project because the brand identity precedes
them. Both are recorded here so the slop test treats them as deliberate, not
slop.

### 6.1 The multi-stop brand gradient

Color.md cautions against purple-to-cyan and three-stop gradients ("Every LLM
picks these"). The Zappli brand **is** a purple → indigo → blue gradient. It
predates the landing page; it lives in the app's icon and in the app's UI.
This file declares the gradient as the deliberate locked brand asset, allowed
in three specific places and nowhere else:

1. The Zappli mark (logo).
2. The primary CTA's fill or border.
3. The hero headline's last 3-4 keywords.

The gradient never fills a section background, never appears on body text,
never spreads beyond ~3 % of any viewport (color.md accent rule).

### 6.2 Gradient text on hero keywords

Hallmark gate 5 bans gradient text on headings. The Zappli brief explicitly
requires the hero headline's tail to read in the gradient — this is the brand
signature, identical to the app's marketing. Allowed **only** on the hero's
final 3-4 words. Plain `--color-ink` everywhere else.

These two exceptions are the entirety of the deliberate gradient surface. All
other gates apply unchanged.

---

## 7. Macrostructure & archetypes

- **Workbench (#05).** Product screenshots/video are the primary content; the
  page is a guided tour of the app in use.
- **N5 Floating pill nav.** Backdrop-blurred pill over the dark canvas; the
  blooms show through. Default away from N1 (the AI-fingerprint nav).
- **Ft5 Statement footer.** A closing line of copy plus the wordmark; the
  inline social/legal row sits below. Default away from Ft3 (index columns).
- **HP3 Cursor-spotlight** hero polish: a soft glow tracks the cursor; off
  under `prefers-reduced-motion`.

Sections (10): Hero · Problem · How It Works · Swipe Demo · Features · Numbers
· Trust · FAQ · Final CTA · Footer.

---

## 8. Asset rules

- Real screenshots and real video only. **No hand-drawn device chrome** (CSS
  iPhone frames, fake browser bars) — Hallmark discipline 4.
- Optimized assets live in `public/`; the raw originals stay in `assets/` and
  are gitignored.
- Every clip ships `.mp4` + `.webm` with a poster image; muted autoplay loops.
- The logo is recreated as SVG (`src/app/icon.svg` for the favicon; a `<Logo>`
  component for in-page use), not the white-background PNG.
