import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";

/**
 * Honest-copy gate (Hallmark gate 56): the "11 hours" figure is widely cited
 * but the source has not been verified. Softened to "around 11 hours" and
 * flagged for source confirmation before publish.
 *  TODO(honest-copy): cite the 11-hour stat or replace with a Zappli-owned
 *  observation before going live.
 */
export function Problem() {
  return (
    <Section id="problem" label="The problem">
      <Container>
        <ScrollReveal>
          <p
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
            className="mt-8 max-w-xl"
            style={{
              color: "var(--color-ink-secondary)",
              fontSize: "var(--text-md)",
              lineHeight: 1.6,
            }}
          >
            Rewriting the resume for every role. Writing cover letters. Hunting
            for the right contact. Repetitive work most people skip the
            personalization on — which is exactly what gets interviews.
          </p>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
