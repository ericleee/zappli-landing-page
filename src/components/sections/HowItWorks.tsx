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
 * S3 How It Works — type-led, poster-size numbers.
 *
 * Single column, stacked vertical rhythm. Each step starts with a giant
 * `01 / 02 / 03` in the brand cyan, then the label, then the body. A faint
 * vertical gradient line on the left ties the three steps together so the
 * section reads as a sequence, not three disconnected blocks.
 *
 * Will get *much* richer once per-step app visuals land (see ASSETS_NEEDED.md
 * locally — three step videos or screenshots would transform this section).
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

          <ol className="list-none p-0 m-0 relative space-y-16 sm:space-y-20">
            {/* faint vertical connector — only visible at sm+ so we don't
                fight mobile rhythm */}
            <div
              aria-hidden="true"
              className="hidden sm:block absolute top-2 bottom-6 left-[3px] w-px"
              style={{
                background:
                  "linear-gradient(180deg, oklch(80.4% 0.146 219.5 / 0.55), oklch(80.4% 0.146 219.5 / 0) 95%)",
              }}
            />

            {steps.map((step, i) => (
              <ScrollReveal key={step.label} delay={i * 0.06}>
                <li className="sm:pl-10 relative">
                  <p
                    className="num-tabular font-semibold mb-4"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(3rem, 5vw + 1rem, 4.75rem)",
                      color: "var(--color-cyan)",
                      letterSpacing: "-0.04em",
                      lineHeight: 0.95,
                    }}
                  >
                    0{i + 1}
                  </p>
                  <h3
                    className="font-semibold mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.5rem, 2vw + 0.5rem, 2rem)",
                      letterSpacing: "-0.025em",
                      color: "var(--color-ink)",
                      lineHeight: 1.15,
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
