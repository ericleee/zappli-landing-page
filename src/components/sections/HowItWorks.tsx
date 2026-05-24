import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";

const steps = [
  {
    label: "Swipe",
    body: "Swipe through real jobs matched to your resume. The ones you like, you keep moving on.",
  },
  {
    label: "Zappli does the work",
    body: "AI tailors your resume to the role and fills the application. You give it a final look and tap submit.",
  },
  {
    label: "Get warm intros",
    body: "Zappli finds people at the company and drafts a personal message to each. You send the ones you like.",
  },
];

/**
 * S3 How It Works — stacked numbered moments, type-led.
 *
 * Single column, vertical rhythm, generous spacing. The number is the visual
 * anchor (display-sized, cyan); the label sits directly below, body underneath.
 * Not a card grid. Not a 3-column feature row. The content is *genuinely
 * ordinal* per Hallmark, so numbered eyebrows are allowed here.
 */
export function HowItWorks() {
  return (
    <Section id="how-it-works" label="How it works">
      <Container>
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <h2
              className="font-semibold mb-14 sm:mb-20"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.25rem, 4vw + 0.5rem, 3.5rem)",
                letterSpacing: "-0.03em",
                color: "var(--color-ink)",
                lineHeight: 1.06,
                maxWidth: "22ch",
              }}
            >
              Three steps. Most of them, Zappli does.
            </h2>
          </ScrollReveal>

          <ol className="space-y-14 sm:space-y-16 list-none p-0">
            {steps.map((step, i) => (
              <ScrollReveal key={step.label} delay={i * 0.06}>
                <li>
                  <p
                    className="num-tabular font-semibold mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-2xl)",
                      color: "var(--color-cyan)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    0{i + 1}
                  </p>
                  <h3
                    className="font-semibold mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-xl)",
                      letterSpacing: "-0.022em",
                      color: "var(--color-ink)",
                      lineHeight: 1.2,
                    }}
                  >
                    {step.label}
                  </h3>
                  <p
                    className="max-w-xl"
                    style={{
                      color: "var(--color-ink-secondary)",
                      fontSize: "var(--text-md)",
                      lineHeight: 1.55,
                    }}
                  >
                    {step.body}
                  </p>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
