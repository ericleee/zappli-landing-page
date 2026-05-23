import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Hand, Zap, Users } from "lucide-react";

const steps = [
  {
    icon: Hand,
    label: "Swipe",
    body: "Swipe through real jobs matched to your resume.",
  },
  {
    icon: Zap,
    label: "Zappli does the work",
    body: "AI tailors your resume and fills the application. You review and submit.",
  },
  {
    icon: Users,
    label: "Get warm intros",
    body: "Three people at the company. A personal message to each. Drafts ready to send.",
  },
];

/**
 * Three steps in a single row. No figure placeholders, no alternating
 * left/right layout — just the three steps stated plainly.
 */
export function HowItWorks() {
  return (
    <Section id="how-it-works" label="How it works">
      <Container>
        <ScrollReveal>
          <h2
            className="font-semibold mb-12 sm:mb-16"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.25rem, 4vw + 0.5rem, 3.5rem)",
              letterSpacing: "-0.03em",
              color: "var(--color-ink)",
              lineHeight: 1.08,
              maxWidth: "22ch",
            }}
          >
            Three steps. Most of them, Zappli does.
          </h2>
        </ScrollReveal>

        <div className="grid gap-10 sm:gap-8 sm:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.label} delay={i * 0.05}>
                <div>
                  <span
                    className="inline-flex items-center justify-center w-11 h-11 rounded-[var(--radius-button)] mb-5"
                    style={{
                      backgroundColor: "oklch(56.3% 0.241 260.8 / 0.14)",
                      border: "1px solid oklch(80.4% 0.146 219.5 / 0.30)",
                    }}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.7}
                      style={{ color: "var(--color-cyan)" }}
                    />
                  </span>
                  <h3
                    className="font-semibold mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-xl)",
                      letterSpacing: "-0.02em",
                      color: "var(--color-ink)",
                      lineHeight: 1.2,
                    }}
                  >
                    {step.label}
                  </h3>
                  <p
                    style={{
                      color: "var(--color-ink-secondary)",
                      fontSize: "var(--text-base)",
                      lineHeight: 1.55,
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
