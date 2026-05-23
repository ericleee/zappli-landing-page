"use client";

import { useId, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Sparkles } from "lucide-react";
import { GradientButton } from "./GradientButton";

type Status = "idle" | "loading" | "success" | "duplicate" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Props {
  /** "dark" gives the input a darker fill, used inside the FinalCTA card. */
  variant?: "default" | "dark";
}

/**
 * The waitlist form — used in the Hero and the Final CTA.
 *
 * Implements all 8 interactive states per design.md:
 *   default · hover · :focus-visible · :active · disabled · loading · error · success
 *
 * Backend: POSTs to /api/waitlist. In Stage A this is a local mock writing
 * to waitlist.local.json (gitignored). In Stage B the same route swaps to
 * Supabase + Resend without any change to this component.
 */
export function WaitlistForm({ variant = "default" }: Props) {
  const reactId = useId();
  const inputId = `email-${reactId}`;
  const errorId = `error-${reactId}`;
  const honeyId = `website-${reactId}`;

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") || "")
      .trim()
      .toLowerCase();
    const website = String(fd.get("website") || "");

    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      setError("Please enter a valid email.");
      return;
    }

    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        status?: string;
        error?: string;
      };

      if (res.ok && json.ok) {
        setStatus("success");
      } else if (res.status === 409 || json.status === "duplicate") {
        setStatus("duplicate");
      } else {
        setStatus("error");
        setError(json.error || "Something went wrong. Try again?");
      }
    } catch {
      setStatus("error");
      setError("Network hiccup. Try again?");
    }
  }

  const inputBg =
    variant === "dark"
      ? "oklch(13% 0.014 258 / 0.65)"
      : "oklch(22.0% 0.016 256.8 / 0.55)";

  return (
    <div>
      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            role="status"
            className="flex items-center gap-3 rounded-[var(--radius-input)] px-4 py-3.5 max-w-md"
            style={{
              backgroundColor: "oklch(69.6% 0.149 162.5 / 0.12)",
              border: "1px solid oklch(69.6% 0.149 162.5 / 0.45)",
              color: "var(--color-success)",
            }}
          >
            <Check size={20} strokeWidth={2} aria-hidden="true" />
            <span className="font-medium">
              You&apos;re on the list. We&apos;ll be in touch.
            </span>
          </motion.div>
        ) : status === "duplicate" ? (
          <motion.div
            key="duplicate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            role="status"
            className="flex items-center gap-3 rounded-[var(--radius-input)] px-4 py-3.5 max-w-md"
            style={{
              backgroundColor: "oklch(80.4% 0.146 219.5 / 0.10)",
              border: "1px solid oklch(80.4% 0.146 219.5 / 0.35)",
              color: "var(--color-cyan)",
            }}
          >
            <Sparkles size={20} strokeWidth={2} aria-hidden="true" />
            <span className="font-medium">
              You&apos;re already on the list.
            </span>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onSubmit={onSubmit}
            aria-label="Join the waitlist"
            noValidate
          >
            {/* Honeypot — visually + assistive-tech hidden, only bots fill it */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-9999px",
                width: 1,
                height: 1,
                overflow: "hidden",
              }}
            >
              <label htmlFor={honeyId}>Website</label>
              <input
                id={honeyId}
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <label htmlFor={inputId} className="sr-only">
                Email
              </label>
              <input
                id={inputId}
                name="email"
                type="email"
                required
                inputMode="email"
                autoComplete="email"
                placeholder="you@example.com"
                disabled={status === "loading"}
                aria-invalid={status === "error"}
                aria-describedby={status === "error" ? errorId : undefined}
                onChange={() => {
                  if (status === "error") {
                    setStatus("idle");
                    setError(null);
                  }
                }}
                className="flex-1 px-4 py-3 text-[length:var(--text-md)] rounded-[var(--radius-input)] placeholder:text-[color:var(--color-ink-muted)] outline-none transition-[border-color,box-shadow] duration-150 focus:border-[oklch(80.4%_0.146_219.5/0.55)] focus:shadow-[0_0_0_3px_oklch(80.4%_0.146_219.5/0.18)] disabled:opacity-60"
                style={{
                  backgroundColor: inputBg,
                  border:
                    status === "error"
                      ? "1px solid oklch(63.8% 0.225 25 / 0.7)"
                      : "1px solid oklch(35% 0.020 258 / 0.5)",
                  color: "var(--color-ink)",
                }}
              />
              <GradientButton
                type="submit"
                size="lg"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Joining…" : "Join the waitlist"}
              </GradientButton>
            </div>

            {status === "error" && error && (
              <p
                id={errorId}
                role="alert"
                className="mt-3 text-[length:var(--text-sm)]"
                style={{ color: "oklch(72% 0.20 25)" }}
              >
                {error}
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
