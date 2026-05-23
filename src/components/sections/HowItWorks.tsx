import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Hand, Zap, Users } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Hand,
    label: "Swipe",
    body: "Swipe through real jobs matched to your resume. The ones you like, you keep moving on.",
  },
  {
    num: "02",
    icon: Zap,
    label: "Zappli does the work",
    body: "AI tailors your resume to the role and fills out the application. You give it a final look and tap submit.",
  },
  {
    num: "03",
    icon: Users,
    label: "Get warm intros",
    body: "Zappli finds 3 people at the company and drafts a personal message to each. You send the ones you like.",
  },
];

/**
 * S3 How It Works — three alternating rows. Each step row pairs a copy block
 * with a screenshot surface. Real app screens land in Phase 2.
 */
export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      label="How it works"
      className="border-t"
      style={{ borderColor: "oklch(35% 0.020 258 / 0.22)" }}
    >
      <Container>
        <ScrollReveal>
          <p
            className="text-[length:var(--text-sm)] uppercase tracking-[0.22em] font-mono mb-6"
            style={{ color: "var(--color-ink-muted)" }}
          >
            03 · how it works
          </p>
          <h2
            className="font-semibold mb-12 sm:mb-16"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.25rem, 4vw + 0.5rem, 3.5rem)",
              letterSpacing: "-0.03em",
              color: "var(--color-ink)",
              lineHeight: 1.08,
              maxWidth: "18ch",
            }}
          >
            Three steps. Most of them, Zappli does.
          </h2>
        </ScrollReveal>

        <div className="grid gap-16 sm:gap-20 lg:gap-24">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const reverse = i % 2 === 1;
            return (
              <ScrollReveal key={step.num} delay={i * 0.05}>
                <div className="grid lg:grid-cols-[1fr_1.05fr] gap-8 lg:gap-16 items-center">
                  <div className={reverse ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-5">
                      <span
                        className="inline-flex items-center justify-center w-9 h-9 rounded-[var(--radius-button)]"
                        style={{
                          backgroundColor: "oklch(56.3% 0.241 260.8 / 0.14)",
                          border: "1px solid oklch(80.4% 0.146 219.5 / 0.30)",
                        }}
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.7}
                          style={{ color: "var(--color-cyan)" }}
                        />
                      </span>
                      <span
                        className="font-mono text-[length:var(--text-sm)] uppercase tracking-[0.18em]"
                        style={{ color: "var(--color-ink-muted)" }}
                      >
                        Step {step.num}
                      </span>
                    </div>
                    <h3
                      className="font-semibold mb-4"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--text-3xl)",
                        letterSpacing: "-0.028em",
                        color: "var(--color-ink)",
                        lineHeight: 1.1,
                      }}
                    >
                      {step.label}
                    </h3>
                    <p
                      style={{
                        color: "var(--color-ink-secondary)",
                        fontSize: "var(--text-md)",
                        lineHeight: 1.6,
                        maxWidth: "36ch",
                      }}
                    >
                      {step.body}
                    </p>
                  </div>
                  <figure
                    className={`${reverse ? "lg:order-1" : ""} relative aspect-[4/5] max-w-[440px] w-full mx-auto rounded-[var(--radius-card)] overflow-hidden`}
                    style={{
                      backgroundColor: "var(--color-card)",
                      border: "1px solid oklch(35% 0.020 258 / 0.4)",
                      boxShadow:
                        "0 30px 70px -25px oklch(0% 0 0 / 0.6)",
                    }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(120% 80% at 50% 0%, oklch(54.1% 0.247 293.0 / 0.12), transparent 60%)",
                      }}
                    />
                    <figcaption
                      className="absolute inset-0 flex items-center justify-center text-center px-6 text-[length:var(--text-sm)] font-mono"
                      style={{ color: "var(--color-ink-muted)" }}
                    >
                      Step {step.num} screen — Phase 2
                    </figcaption>
                  </figure>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
