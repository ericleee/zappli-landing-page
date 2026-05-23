import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { GradientText } from "@/components/GradientText";
import { GradientButton } from "@/components/GradientButton";
import { ScrollReveal } from "@/components/ScrollReveal";

/**
 * S1 Hero — Workbench macrostructure entry.
 * Headline (with brand-exception gradient on the last 3 words) · subheadline ·
 * waitlist form (disabled placeholder; Phase 6 wires it) · looping app video
 * placeholder (Phase 2 swaps in the real .mp4 + .webm).
 *
 * The "video" container is a plain rounded surface with a hairline + soft
 * shadow — NOT a hand-drawn iPhone frame (Hallmark gate: no re-drawn chrome).
 */
export function Hero() {
  return (
    <Section
      id="hero"
      label="Hero"
      className="pt-2 sm:pt-6 lg:pt-10 pb-16 sm:pb-24"
    >
      <Container>
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Left: copy + form */}
          <ScrollReveal>
            <h1
              className="font-semibold mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-display)",
                lineHeight: 1.04,
                letterSpacing: "-0.035em",
                color: "var(--color-ink)",
                maxWidth: "16ch",
              }}
            >
              Your next job is{" "}
              <GradientText>one swipe away.</GradientText>
            </h1>
            <p
              className="mb-8 max-w-xl"
              style={{
                color: "var(--color-ink-secondary)",
                fontSize: "var(--text-md)",
                lineHeight: 1.55,
              }}
            >
              Zappli&apos;s AI tailors your resume, fills out the application,
              and drafts warm intros to real people at the company — every time
              you swipe right.
            </p>

            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mb-3"
              aria-label="Join the waitlist"
            >
              <label htmlFor="hero-email" className="sr-only">
                Email
              </label>
              <input
                id="hero-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@example.com"
                disabled
                className="flex-1 px-4 py-3 text-[length:var(--text-md)] rounded-[var(--radius-input)] placeholder:text-[color:var(--color-ink-muted)]"
                style={{
                  backgroundColor: "oklch(22.0% 0.016 256.8 / 0.55)",
                  border: "1px solid oklch(35% 0.020 258 / 0.5)",
                  color: "var(--color-ink)",
                }}
              />
              <GradientButton size="lg" disabled type="submit">
                Join the waitlist
              </GradientButton>
            </form>

            <p
              className="text-[length:var(--text-sm)]"
              style={{ color: "var(--color-ink-muted)" }}
            >
              Be first in line when Zappli launches. No spam. (Form arrives in
              Phase 6.)
            </p>
          </ScrollReveal>

          {/* Right: app video centerpiece */}
          <ScrollReveal delay={0.12}>
            <figure
              className="relative aspect-[9/16] max-w-[340px] mx-auto rounded-[1.5rem] overflow-hidden"
              style={{
                backgroundColor: "var(--color-card)",
                border: "1px solid oklch(35% 0.020 258 / 0.45)",
                boxShadow:
                  "0 40px 80px -28px oklch(0% 0 0 / 0.75), 0 0 60px -10px oklch(56.3% 0.241 260.8 / 0.18)",
              }}
            >
              {/* Subtle inner gradient hint so the empty surface still reads
                  as the brand and not as a bug. */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(120% 80% at 50% 0%, oklch(54.1% 0.247 293.0 / 0.18), transparent 60%)",
                }}
              />
              <figcaption
                className="absolute inset-0 flex items-center justify-center text-center px-8"
                style={{ color: "var(--color-ink-muted)" }}
              >
                <p className="text-[length:var(--text-sm)] font-mono uppercase tracking-[0.18em]">
                  Hero video
                  <br />
                  <span className="opacity-70 normal-case tracking-normal font-sans">
                    Phase 2 swaps in the real looping app recording
                  </span>
                </p>
              </figcaption>
            </figure>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
