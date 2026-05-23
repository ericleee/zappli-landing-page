import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SwipeDeck } from "@/components/SwipeDeck";

/**
 * S4 — Interactive swipe demo. Section frame + the SwipeDeck client component.
 */
export function SwipeDemo() {
  return (
    <Section
      id="swipe-demo"
      label="Try a swipe"
      className="border-t"
      style={{ borderColor: "oklch(35% 0.020 258 / 0.22)" }}
    >
      <Container>
        <ScrollReveal>
          <p
            className="text-[length:var(--text-sm)] uppercase tracking-[0.22em] font-mono mb-6"
            style={{ color: "var(--color-ink-muted)" }}
          >
            04 · try a swipe
          </p>
          <h2
            className="font-semibold mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.25rem, 4vw + 0.5rem, 3.5rem)",
              letterSpacing: "-0.03em",
              color: "var(--color-ink)",
              lineHeight: 1.08,
              maxWidth: "20ch",
            }}
          >
            See it. Swipe it.
          </h2>
          <p
            className="max-w-xl"
            style={{
              color: "var(--color-ink-secondary)",
              fontSize: "var(--text-md)",
              lineHeight: 1.6,
            }}
          >
            Drag a card to swipe. In the real app, every swipe-right kicks off
            a tailored resume, a filled-in application, and warm intros to
            people at the company.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <div className="mt-12 sm:mt-16">
            <SwipeDeck />
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
