import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";

/**
 * S2 The Problem — stat-led opener.
 *
 * Honest-copy gate (Hallmark gate 56): the "11 hours" figure is widely cited
 * but the source has not been verified. Softened to "around 11 hours" and
 * flagged for source confirmation before publish.
 *  TODO(honest-copy): cite the 11-hour stat or replace with a Zappli-owned
 *  observation before going live.
 */
export function Problem() {
  return (
    <Section
      id="problem"
      label="The problem"
      className="border-t"
      style={{ borderColor: "oklch(35% 0.020 258 / 0.22)" }}
    >
      <Container>
        <ScrollReveal>
          <p
            className="text-[length:var(--text-sm)] uppercase tracking-[0.22em] font-mono mb-6"
            style={{ color: "var(--color-ink-muted)" }}
          >
            02 · the problem
          </p>
          <p
            className="mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw + 0.5rem, 4.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              color: "var(--color-ink)",
              maxWidth: "22ch",
            }}
          >
            Most job seekers spend around{" "}
            <span className="num-tabular whitespace-nowrap">11 hours</span> a
            week applying.
          </p>
          <p
            className="max-w-xl"
            style={{
              color: "var(--color-ink-secondary)",
              fontSize: "var(--text-md)",
              lineHeight: 1.6,
            }}
          >
            Rewriting the resume for every role, writing cover letters, hunting
            for the right contact — repetitive work most people skip the
            personalization on, which is exactly what gets interviews.
          </p>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
