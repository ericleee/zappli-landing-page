import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";

/**
 * S2 The Problem — contrast statement.
 * Two lines: the cost of applying, then Zappli's resolution. Numbers do the
 * work; no paragraph of explanation needed.
 */
export function Problem() {
  return (
    <Section id="problem" label="The problem">
      <Container>
        <ScrollReveal>
          <div className="max-w-3xl">
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
