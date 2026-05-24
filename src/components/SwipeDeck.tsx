"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
  type PanInfo,
} from "motion/react";
import { MapPin, X as XIcon, Check, RotateCcw, ArrowUpRight } from "lucide-react";

/* Fictional listings — chosen so no real employer is misrepresented (gate 56
 * honest-copy: don't invent claims attached to real companies). */
const JOBS = [
  {
    company: "Northwind Labs",
    role: "Senior Product Designer",
    location: "Remote · NYC",
    blurb: "Small-team design role shipping calm productivity tools.",
    tags: ["Figma", "Design Systems", "iOS"],
  },
  {
    company: "Helio Systems",
    role: "Staff Software Engineer",
    location: "San Francisco · Hybrid",
    blurb: "Distributed-systems work on a developer platform.",
    tags: ["TypeScript", "Rust", "AWS"],
  },
  {
    company: "Globex Studio",
    role: "Brand Marketing Lead",
    location: "London · Remote",
    blurb: "Lead content and growth for a category-defining D2C product.",
    tags: ["B2C", "Content", "Growth"],
  },
  {
    company: "Acme Research",
    role: "ML Research Scientist",
    location: "Boston · Hybrid",
    blurb: "Applied research on small-team NLP problems.",
    tags: ["PyTorch", "NLP", "Eval"],
  },
  {
    company: "Pied Piper Co.",
    role: "Founding Engineer",
    location: "Remote",
    blurb: "0→1 build of a developer SaaS. Equity-heavy.",
    tags: ["Rust", "0→1", "Generalist"],
  },
] as const;

/**
 * S4 — Interactive swipe deck.
 *
 * A draggable job-card stack. Drag right or tap "Apply"; drag left or tap
 * "Skip". The card flies off in the appropriate direction and the next
 * surfaces. Under prefers-reduced-motion the fly-off collapses to an instant
 * state change (no animation, only the index advances).
 *
 * Motion budget: drag is interactive demo motion (not entrance motion),
 * exempt from the atmospheric "fade-in only" rule per design.md §4.
 */
export function SwipeDeck() {
  const [index, setIndex] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setReduce(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const done = index >= JOBS.length;

  const onSwipe = (_direction: "left" | "right") => {
    setIndex((i) => i + 1);
  };

  return (
    <div className="relative max-w-[520px] mx-auto">
      <div
        className="relative mx-auto"
        style={{ height: 520, maxWidth: 380 }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {!done ? (
            JOBS.slice(index, index + 3)
              .map((job, i, arr) => ({ job, i, total: arr.length }))
              .reverse()
              .map(({ job, i }) =>
                i === 0 ? (
                  <TopCard
                    key={`${job.company}-${index}`}
                    job={job}
                    reduce={reduce}
                    onCommit={onSwipe}
                  />
                ) : (
                  <StackCard
                    key={`${job.company}-${index}-${i}`}
                    depth={i}
                  />
                )
              )
          ) : (
            <motion.div
              key="done"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduce ? 0 : 0.4 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 rounded-[var(--radius-card)]"
              style={{
                backgroundColor: "var(--color-card)",
                border: "1px solid oklch(35% 0.020 258 / 0.4)",
              }}
            >
              <p
                className="mb-3 font-semibold"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-2xl)",
                  letterSpacing: "-0.025em",
                  color: "var(--color-ink)",
                }}
              >
                That&apos;s everyone for now.
              </p>
              <p
                className="mb-6"
                style={{ color: "var(--color-ink-secondary)" }}
              >
                In the real app, the deck keeps refreshing as new jobs match.
              </p>
              <button
                type="button"
                onClick={() => setIndex(0)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-pill)] text-[length:var(--text-sm)] font-medium transition-colors hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-paper)]"
                style={{
                  color: "var(--color-ink)",
                  border: "1px solid oklch(35% 0.020 258 / 0.55)",
                }}
              >
                <RotateCcw size={16} strokeWidth={1.8} />
                Reshuffle the deck
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <ActionButton
          label="Skip"
          icon={<XIcon size={20} strokeWidth={2} />}
          accent="oklch(63.8% 0.225 25 / 0.55)"
          disabled={done}
          onClick={() => {
            const ev = new CustomEvent("zappli:swipe", {
              detail: { dir: "left" },
            });
            window.dispatchEvent(ev);
          }}
          aria-label="Skip this job"
        />
        <ActionButton
          label="Apply"
          icon={<Check size={20} strokeWidth={2} />}
          accent="oklch(69.6% 0.149 162.5 / 0.7)"
          disabled={done}
          onClick={() => {
            const ev = new CustomEvent("zappli:swipe", {
              detail: { dir: "right" },
            });
            window.dispatchEvent(ev);
          }}
          aria-label="Apply to this job (demo)"
          primary
        />
      </div>

    </div>
  );
}

/* ── Top draggable card ──────────────────────────────────────────────── */

interface TopCardProps {
  job: (typeof JOBS)[number];
  reduce: boolean;
  onCommit: (dir: "left" | "right") => void;
}

function TopCard({ job, reduce, onCommit }: TopCardProps) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 0, 300], [-14, 0, 14]);
  const skipOpacity = useTransform(x, [-160, -50, 0], [1, 0.4, 0]);
  const applyOpacity = useTransform(x, [0, 50, 160], [0, 0.4, 1]);

  // Allow programmatic swipe via button or keyboard.
  useEffect(() => {
    const fly = (dir: "left" | "right") => {
      const target = dir === "right" ? 600 : -600;
      if (reduce) {
        onCommit(dir);
      } else {
        animate(x, target, {
          duration: 0.32,
          ease: [0.16, 1, 0.3, 1],
        }).then(() => onCommit(dir));
      }
    };
    const onSwipeEvt = (e: Event) => {
      const detail = (e as CustomEvent<{ dir: "left" | "right" }>).detail;
      fly(detail.dir);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") fly("left");
      else if (e.key === "ArrowRight") fly("right");
    };
    window.addEventListener("zappli:swipe", onSwipeEvt);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("zappli:swipe", onSwipeEvt);
      window.removeEventListener("keydown", onKey);
    };
  }, [x, onCommit, reduce]);

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 110;
    if (info.offset.x > threshold) {
      animate(x, 600, {
        duration: reduce ? 0 : 0.32,
        ease: [0.16, 1, 0.3, 1],
      }).then(() => onCommit("right"));
    } else if (info.offset.x < -threshold) {
      animate(x, -600, {
        duration: reduce ? 0 : 0.32,
        ease: [0.16, 1, 0.3, 1],
      }).then(() => onCommit("left"));
    } else {
      animate(x, 0, {
        duration: reduce ? 0 : 0.25,
        ease: [0.16, 1, 0.3, 1],
      });
    }
  };

  return (
    <motion.div
      drag={reduce ? false : "x"}
      dragConstraints={{ left: -300, right: 300 }}
      dragElastic={0.35}
      onDragEnd={handleDragEnd}
      style={{ x, rotate }}
      className="absolute inset-0 select-none cursor-grab active:cursor-grabbing touch-pan-y"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduce ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <CardBody job={job} />
      <motion.span
        style={{ opacity: skipOpacity }}
        className="pointer-events-none absolute top-6 left-6 px-3 py-1 rounded-[var(--radius-pill)] font-mono uppercase tracking-[0.18em] text-[length:var(--text-xs)]"
        aria-hidden="true"
      >
        <span
          className="inline-block px-3 py-1 rounded-[var(--radius-pill)]"
          style={{
            color: "oklch(70% 0.18 25)",
            border: "1.5px solid oklch(63.8% 0.225 25 / 0.7)",
            backgroundColor: "oklch(13% 0.014 258 / 0.55)",
          }}
        >
          Skip
        </span>
      </motion.span>
      <motion.span
        style={{ opacity: applyOpacity }}
        className="pointer-events-none absolute top-6 right-6 px-3 py-1 rounded-[var(--radius-pill)] font-mono uppercase tracking-[0.18em] text-[length:var(--text-xs)]"
        aria-hidden="true"
      >
        <span
          className="inline-block px-3 py-1 rounded-[var(--radius-pill)]"
          style={{
            color: "var(--color-success)",
            border: "1.5px solid oklch(69.6% 0.149 162.5 / 0.7)",
            backgroundColor: "oklch(13% 0.014 258 / 0.55)",
          }}
        >
          Apply
        </span>
      </motion.span>
    </motion.div>
  );
}

/* ── Ghost cards behind the top ──────────────────────────────────────── */

function StackCard({ depth }: { depth: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none rounded-[var(--radius-card)]"
      style={{
        transform: `translateY(${depth * 10}px) scale(${1 - depth * 0.04})`,
        opacity: 0.6 - depth * 0.18,
        backgroundColor: "var(--color-card)",
        border: "1px solid oklch(35% 0.020 258 / 0.35)",
      }}
      aria-hidden="true"
    />
  );
}

/* ── Card body ───────────────────────────────────────────────────────── */

function CardBody({ job }: { job: (typeof JOBS)[number] }) {
  return (
    <article
      className="h-full w-full rounded-[var(--radius-card)] overflow-hidden flex flex-col p-6"
      style={{
        backgroundColor: "var(--color-card)",
        border: "1px solid oklch(35% 0.020 258 / 0.5)",
        boxShadow:
          "0 30px 70px -28px oklch(0% 0 0 / 0.7), 0 0 40px -8px oklch(56.3% 0.241 260.8 / 0.16)",
      }}
    >
      <header className="flex items-start justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-[var(--radius-button)] font-semibold"
            style={{
              backgroundImage: "var(--gradient-primary)",
              color: "white",
              fontSize: "var(--text-md)",
            }}
            aria-hidden="true"
          >
            {job.company[0]}
          </span>
          <div>
            <p
              className="font-medium leading-tight"
              style={{
                color: "var(--color-ink)",
                fontSize: "var(--text-base)",
              }}
            >
              {job.company}
            </p>
            <p
              className="flex items-center gap-1 mt-1 text-[length:var(--text-sm)]"
              style={{ color: "var(--color-ink-secondary)" }}
            >
              <MapPin size={12} strokeWidth={1.7} />
              {job.location}
            </p>
          </div>
        </div>
        <ArrowUpRight
          size={20}
          strokeWidth={1.6}
          style={{ color: "var(--color-ink-muted)" }}
          aria-hidden="true"
        />
      </header>

      <h3
        className="font-semibold mb-4"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-2xl)",
          letterSpacing: "-0.025em",
          color: "var(--color-ink)",
          lineHeight: 1.1,
        }}
      >
        {job.role}
      </h3>

      <p
        className="text-[length:var(--text-base)] mb-auto"
        style={{ color: "var(--color-ink-secondary)", lineHeight: 1.55 }}
      >
        {job.blurb}
      </p>

      <div className="flex flex-wrap gap-2 mt-6">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-[var(--radius-pill)] text-[length:var(--text-xs)] font-mono uppercase tracking-[0.08em]"
            style={{
              backgroundColor: "oklch(22% 0.016 256.8 / 0.6)",
              border: "1px solid oklch(35% 0.020 258 / 0.5)",
              color: "var(--color-ink-secondary)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

/* ── Side action buttons (Skip / Apply) ──────────────────────────────── */

interface ActionButtonProps {
  label: string;
  icon: React.ReactNode;
  accent: string;
  onClick: () => void;
  disabled?: boolean;
  primary?: boolean;
  "aria-label"?: string;
}

function ActionButton({
  label,
  icon,
  accent,
  onClick,
  disabled,
  primary,
  ...rest
}: ActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      {...rest}
      className="inline-flex items-center justify-center w-14 h-14 rounded-[var(--radius-pill)] transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04] active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-paper)] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
      style={{
        backgroundColor: primary
          ? "oklch(69.6% 0.149 162.5 / 0.18)"
          : "oklch(22% 0.016 256.8 / 0.55)",
        border: `1.5px solid ${accent}`,
        color: primary ? "var(--color-success)" : "oklch(70% 0.18 25)",
      }}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </button>
  );
}
