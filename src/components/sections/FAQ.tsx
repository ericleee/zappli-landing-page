import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Is Zappli free?",
    a: "Free to join the waitlist. The app ships with a free tier plus a Pro subscription at launch.",
  },
  {
    q: "When does it launch?",
    a: "Targeting late summer 2026 on the iOS App Store. Waitlist members get in first.",
  },
  {
    q: "Does it apply to jobs without me?",
    a: "Zappli does all the heavy lifting and fills the form — you give it a final look and tap submit. You stay in control.",
  },
  {
    q: "Does the AI lie on my resume?",
    a: "Never. It reorganises your real experience to fit the job. It does not invent anything.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. Your resume and details are private and never shared.",
  },
];

export function FAQ() {
  return (
    <Section id="faq" label="FAQ">
      <Container>
        <ScrollReveal>
          <h2
            className="font-semibold mb-10 sm:mb-12"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.25rem, 4vw + 0.5rem, 3.5rem)",
              letterSpacing: "-0.03em",
              color: "var(--color-ink)",
              lineHeight: 1.08,
              maxWidth: "16ch",
            }}
          >
            Quick honest answers.
          </h2>
        </ScrollReveal>

        <div
          className="max-w-3xl border-t"
          style={{ borderColor: "oklch(35% 0.020 258 / 0.3)" }}
        >
          {faqs.map((item, i) => (
            <ScrollReveal key={item.q} delay={Math.min(i * 0.03, 0.15)}>
              <details
                className="group border-b py-5 sm:py-6"
                style={{ borderColor: "oklch(35% 0.020 258 / 0.3)" }}
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none focus:outline-none focus-visible:rounded-[6px] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-paper)]">
                  <span
                    className="font-medium"
                    style={{
                      color: "var(--color-ink)",
                      fontSize: "var(--text-md)",
                      letterSpacing: "-0.012em",
                    }}
                  >
                    {item.q}
                  </span>
                  <Plus
                    size={20}
                    strokeWidth={1.6}
                    className="transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:rotate-45 shrink-0"
                    style={{ color: "var(--color-ink-muted)" }}
                  />
                </summary>
                <p
                  className="mt-4 max-w-2xl pr-8"
                  style={{
                    color: "var(--color-ink-secondary)",
                    fontSize: "var(--text-base)",
                    lineHeight: 1.6,
                  }}
                >
                  {item.a}
                </p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
