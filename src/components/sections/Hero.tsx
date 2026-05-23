import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { GradientText } from "@/components/GradientText";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WaitlistForm } from "@/components/WaitlistForm";
import { HeroVideo } from "@/components/HeroVideo";

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

            <WaitlistForm />

            <p
              className="mt-3 text-[length:var(--text-sm)]"
              style={{ color: "var(--color-ink-muted)" }}
            >
              Be first in line when Zappli launches. No spam.
            </p>
          </ScrollReveal>

          {/* Right: real looping app video (source aspect 480 / 878) */}
          <ScrollReveal delay={0.12}>
            <figure
              className="relative aspect-[480/878] max-w-[340px] mx-auto rounded-[1.5rem] overflow-hidden"
              style={{
                backgroundColor: "var(--color-card)",
                border: "1px solid oklch(35% 0.020 258 / 0.45)",
                boxShadow:
                  "0 40px 80px -28px oklch(0% 0 0 / 0.75), 0 0 60px -10px oklch(56.3% 0.241 260.8 / 0.18)",
              }}
            >
              <HeroVideo />
            </figure>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
