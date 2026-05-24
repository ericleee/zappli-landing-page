import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";

/**
 * S2 The Problem — manifesto opener + contrast statement.
 * Emotional hook first, then the numbers prove the value.
 */
export function Problem() {
  return (
    <Section id="problem" label="The problem">
      <Container>
        <ScrollReveal>
          <div className="max-w-3xl">
            <h2 className="sr-only">The problem</h2>
            <p
              className="mb-10 sm:mb-14"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.875rem, 3.5vw + 0.5rem, 2.75rem)",
                lineHeight: 1.2,
                letterSpacing: "-0.025em",
                color: "var(--color-ink-muted)",
                maxWidth: "30ch",
              }}
            >
              Job hunting was never supposed to be a second job.
            </p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw + 0.5rem, 4.5rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
                color: "var(--color-ink-secondary)",
                maxWidth: "20ch",
              }}
            >
              The average application takes{" "}
              <span
                className="num-tabular whitespace-nowrap"
                style={{ color: "var(--color-ink)" }}
              >
                45 minutes
              </span>
              .
            </p>
            <p
              className="mt-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw + 0.5rem, 4.5rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
                color: "var(--color-ink)",
                maxWidth: "22ch",
              }}
            >
              Zappli does it in{" "}
              <span
                className="num-tabular whitespace-nowrap"
                style={{ color: "var(--color-cyan)" }}
              >
                60 seconds
              </span>
              .
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
