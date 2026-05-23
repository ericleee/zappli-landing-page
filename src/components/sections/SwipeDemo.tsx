import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SwipeDeck } from "@/components/SwipeDeck";

export function SwipeDemo() {
  return (
    <Section id="swipe-demo" label="Try a swipe">
      <Container>
        <ScrollReveal>
          <h2
            className="font-semibold mb-5"
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
            className="max-w-xl mb-12 sm:mb-16"
            style={{
              color: "var(--color-ink-secondary)",
              fontSize: "var(--text-md)",
              lineHeight: 1.55,
            }}
          >
            Drag a card. In the real app, every swipe-right kicks off a
            tailored resume, a filled application, and warm intros at the
            company.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <SwipeDeck />
        </ScrollReveal>
      </Container>
    </Section>
  );
}
