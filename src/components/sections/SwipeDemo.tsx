import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";

/**
 * S4 Interactive swipe demo — Phase 5 fills in the draggable card stack.
 * This is the Phase-4 placeholder.
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
              maxWidth: "18ch",
            }}
          >
            See it. Swipe it.
          </h2>
          <p
            className="mb-12 max-w-xl"
            style={{
              color: "var(--color-ink-secondary)",
              fontSize: "var(--text-md)",
              lineHeight: 1.6,
            }}
          >
            Swipe the card on the right. Watch the tailored resume render in
            place — same flow as the app, no install required.
          </p>
        </ScrollReveal>

        <div
          className="relative aspect-[16/10] sm:aspect-[16/9] rounded-[var(--radius-card)] overflow-hidden"
          style={{
            backgroundColor: "var(--color-card)",
            border: "1px solid oklch(35% 0.020 258 / 0.4)",
            boxShadow: "0 30px 80px -28px oklch(0% 0 0 / 0.65)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(80% 60% at 30% 0%, oklch(54.1% 0.247 293.0 / 0.12), transparent 60%)," +
                "radial-gradient(70% 60% at 70% 100%, oklch(80.4% 0.146 219.5 / 0.10), transparent 60%)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-center px-8">
            <div>
              <p
                className="font-mono uppercase tracking-[0.2em] text-[length:var(--text-sm)] mb-2"
                style={{ color: "var(--color-ink-muted)" }}
              >
                Interactive swipe deck
              </p>
              <p style={{ color: "var(--color-ink-secondary)" }}>
                Phase 5 wires the draggable card stack.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
