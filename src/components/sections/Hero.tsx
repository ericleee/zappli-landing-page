import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { GradientText } from "@/components/GradientText";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WaitlistForm } from "@/components/WaitlistForm";
import { HeroVideo } from "@/components/HeroVideo";

/**
 * S1 Hero — centered, form-prominent, video below.
 *
 * Conversion-focused composition:
 *  1. Bold headline (gradient on the brand-exception keywords).
 *  2. One-line subhead with the time benefit ("in under a minute").
 *  3. A wide email form, immediately visible — the page's primary action.
 *  4. A small "Be first in line" reassurance line.
 *  5. The looping app video below, as product validation.
 */
export function Hero() {
  return (
    <Section
      id="hero"
      label="Hero"
      className="pt-2 sm:pt-8 lg:pt-12 pb-12 sm:pb-20"
    >
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h1
              className="font-semibold mb-6 mx-auto"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-display)",
                lineHeight: 1.02,
                letterSpacing: "-0.04em",
                color: "var(--color-ink)",
                maxWidth: "18ch",
              }}
            >
              Your next job is{" "}
              <GradientText>one swipe away.</GradientText>
            </h1>
            <p
              className="mx-auto mb-9 max-w-xl"
              style={{
                color: "var(--color-ink-secondary)",
                fontSize: "var(--text-lg)",
                lineHeight: 1.5,
              }}
            >
              AI tailors your resume, fills the application, and drafts warm
              intros to people at the company. Every job. In under a minute.
            </p>
            <div className="mx-auto max-w-lg">
              <WaitlistForm />
            </div>
            <p
              className="mt-3 text-[length:var(--text-sm)]"
              style={{ color: "var(--color-ink-muted)" }}
            >
              Be first in line when Zappli launches. No spam.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <figure
            className="mt-14 sm:mt-20 relative aspect-[480/878] max-w-[320px] sm:max-w-[360px] mx-auto rounded-[1.5rem] overflow-hidden"
            style={{
              backgroundColor: "var(--color-card)",
              border: "1px solid oklch(35% 0.020 258 / 0.45)",
              boxShadow:
                "0 50px 100px -28px oklch(0% 0 0 / 0.85), 0 0 80px -8px oklch(56.3% 0.241 260.8 / 0.25), 0 0 0 1px oklch(80.4% 0.146 219.5 / 0.10)",
            }}
          >
            <HeroVideo />
          </figure>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
