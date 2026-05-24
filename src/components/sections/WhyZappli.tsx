import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";

/**
 * S5 Why Zappli — the differentiator manifesto.
 *
 * A confident statement of what Zappli isn't and what it is. Type-led,
 * single column, no card grid (the AI features-row fingerprint).
 * Cyan accent on the key phrase for typographic emphasis without
 * expanding the brand-gradient exception beyond the hero.
 */
export function WhyZappli() {
  return (
    <Section id="why" label="Why Zappli">
      <Container>
        <div className="max-w-3xl">
          <ScrollReveal>
            <h2
              className="font-semibold mb-8 sm:mb-10"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw + 0.5rem, 4.25rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.04,
                color: "var(--color-ink)",
                maxWidth: "20ch",
              }}
            >
              Built for the{" "}
              <span style={{ color: "var(--color-cyan)" }}>
                swipe-right generation
              </span>
              .
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p
              className="mb-12 max-w-xl"
              style={{
                color: "var(--color-ink-secondary)",
                fontSize: "var(--text-lg)",
                lineHeight: 1.55,
              }}
            >
              Not another resume builder. Not another job board. Zappli is what
              comes after — warm intros and tailored resumes, drafted by AI
              and sent by you. Built by someone who applied to too many jobs to
              count.
            </p>
          </ScrollReveal>

          <ul className="list-none p-0 m-0 space-y-6 sm:space-y-7">
            {[
              "Warm intros, not cold applications.",
              "Real resumes, not invented experience.",
              "Built by a job seeker, for job seekers.",
            ].map((line, i) => (
              <ScrollReveal key={line} delay={0.1 + i * 0.06}>
                <li
                  className="flex items-start gap-4"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.25rem, 1.6vw + 0.5rem, 1.625rem)",
                    letterSpacing: "-0.018em",
                    lineHeight: 1.3,
                    color: "var(--color-ink)",
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="shrink-0 inline-block mt-[0.55em] w-6 h-[2px]"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-cyan), transparent)",
                    }}
                  />
                  <span>{line}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
