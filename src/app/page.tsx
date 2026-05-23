/* Phase 3 — layout shell.
 *
 * Composes the N5 floating-pill nav, the Ft5 statement footer, and 9 section
 * placeholders the user can scroll through end-to-end. Real section content
 * lands in Phase 4 (sections) and Phase 5 (interactive swipe deck). */

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GradientText } from "@/components/GradientText";
import { GradientButton } from "@/components/GradientButton";

type SectionStub = {
  id: string;
  index: string;
  label: string;
  description: string;
};

const sections: SectionStub[] = [
  {
    id: "hero",
    index: "01",
    label: "Hero",
    description:
      "Headline · subheadline · waitlist form (email + gradient button) · looping app video centerpiece · HP3 cursor-spotlight glow.",
  },
  {
    id: "problem",
    index: "02",
    label: "The problem",
    description:
      "Big stat header (the 11-hour figure, sourced) + one short paragraph.",
  },
  {
    id: "how-it-works",
    index: "03",
    label: "How it works",
    description:
      "Three steps — Swipe · Zappli does the work · Get warm intros — with scroll-synced app visuals.",
  },
  {
    id: "swipe-demo",
    index: "04",
    label: "Interactive swipe demo",
    description:
      "Draggable job-card stack — visitors swipe a card and watch the resume tailor in place.",
  },
  {
    id: "features",
    index: "05",
    label: "Features",
    description:
      "Four-feature grid (irregular sizes): AI tailoring · auto-fill · warm intros · one dashboard.",
  },
  {
    id: "numbers",
    index: "06",
    label: "The numbers",
    description:
      "Metric tiles — 45 min → 1 min · 11 hrs/week · 3 intros · 10 sec — with count-up on scroll.",
  },
  {
    id: "trust",
    index: "07",
    label: "Trust",
    description: "You're always in control — short reassurance block.",
  },
  {
    id: "faq",
    index: "08",
    label: "FAQ",
    description: "Five-item accordion (free? · launch? · applies for me? · AI lying? · data?).",
  },
  {
    id: "waitlist",
    index: "09",
    label: "Final CTA",
    description: "Closing line + waitlist form again.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main
        id="top"
        className="flex-1 pt-32 sm:pt-36"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Hero placeholder gets a slightly bolder treatment so the nav anchor
         *  resolves to something visually anchored. Real hero in Phase 4. */}
        <Section id={sections[0].id} label={sections[0].label} className="pt-2 sm:pt-4">
          <Container>
            <ScrollReveal>
              <p
                className="text-[length:var(--text-sm)] uppercase tracking-[0.22em] font-mono mb-6"
                style={{ color: "var(--color-ink-muted)" }}
              >
                Phase 3 · layout shell online
              </p>
              <h1
                className="font-semibold mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-display)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.035em",
                  color: "var(--color-ink)",
                  maxWidth: "16ch",
                }}
              >
                Your next job is{" "}
                <GradientText>one swipe away.</GradientText>
              </h1>
              <p
                className="mb-10 max-w-xl"
                style={{
                  color: "var(--color-ink-secondary)",
                  fontSize: "var(--text-md)",
                  lineHeight: 1.55,
                }}
              >
                Zappli&apos;s AI tailors your resume, fills out the application, and
                drafts warm intros to real people at the company — every time you
                swipe right.
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <GradientButton size="lg" disabled>
                  Join the waitlist
                </GradientButton>
                <span
                  className="text-[length:var(--text-sm)]"
                  style={{ color: "var(--color-ink-muted)" }}
                >
                  (form arrives in Phase 6)
                </span>
              </div>
            </ScrollReveal>
          </Container>
        </Section>

        {sections.slice(1).map((s) => (
          <Section
            key={s.id}
            id={s.id}
            label={s.label}
            className="border-t"
            style={{ borderColor: "oklch(35% 0.020 258 / 0.22)" }}
          >
            <Container>
              <ScrollReveal>
                <p
                  className="text-[length:var(--text-sm)] uppercase tracking-[0.22em] font-mono mb-4"
                  style={{ color: "var(--color-ink-muted)" }}
                >
                  {s.index} · {s.label.toLowerCase()}
                </p>
                <h2
                  className="font-semibold mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-2xl)",
                    letterSpacing: "-0.025em",
                    color: "var(--color-ink)",
                    lineHeight: 1.15,
                  }}
                >
                  {s.label}
                </h2>
                <p
                  className="max-w-2xl"
                  style={{
                    color: "var(--color-ink-secondary)",
                    fontSize: "var(--text-md)",
                    lineHeight: 1.55,
                  }}
                >
                  {s.description}
                </p>
              </ScrollReveal>
            </Container>
          </Section>
        ))}
      </main>
      <Footer />
    </>
  );
}
