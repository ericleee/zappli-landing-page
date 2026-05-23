import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";

/**
 * S6 The Numbers — 4 metric tiles.
 *
 * Honest-copy gate (Hallmark gate 56):
 *  - "45 min → 1 min" and "10 sec" are Zappli's own product claims.
 *  - "11 hrs/week" carries the same source caveat as Problem.tsx.
 *  - "3 intros per job" is Zappli's targeted count, not a measured average.
 * TODO(honest-copy): verify the 11-hour and 3-intros figures before publish.
 *
 * Count-up animation is wired in Phase 7. For now the numbers render static.
 */
const tiles = [
  {
    big: "45 min → 1 min",
    label: "time per application",
  },
  {
    big: "11",
    sub: "hrs / week",
    label: "saved",
  },
  {
    big: "3",
    label: "warm intros drafted per job",
  },
  {
    big: "10 sec",
    label: "to swipe and start",
  },
] as const;

export function Numbers() {
  return (
    <Section
      id="numbers"
      label="The numbers"
      className="border-t"
      style={{ borderColor: "oklch(35% 0.020 258 / 0.22)" }}
    >
      <Container>
        <ScrollReveal>
          <p
            className="text-[length:var(--text-sm)] uppercase tracking-[0.22em] font-mono mb-6"
            style={{ color: "var(--color-ink-muted)" }}
          >
            06 · the numbers
          </p>
          <h2
            className="font-semibold mb-10 sm:mb-12"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.25rem, 4vw + 0.5rem, 3.5rem)",
              letterSpacing: "-0.03em",
              color: "var(--color-ink)",
              lineHeight: 1.08,
              maxWidth: "18ch",
            }}
          >
            The math, plainly.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {tiles.map((tile, i) => (
            <ScrollReveal key={tile.big} delay={i * 0.05}>
              <div
                className="h-full rounded-[var(--radius-card)] p-6 sm:p-8 flex flex-col justify-between gap-6"
                style={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid oklch(35% 0.020 258 / 0.35)",
                  minHeight: "180px",
                }}
              >
                <p
                  className="num-tabular font-semibold"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 3.5vw + 0.5rem, 3rem)",
                    letterSpacing: "-0.035em",
                    color: "var(--color-ink)",
                    lineHeight: 1.0,
                  }}
                >
                  {tile.big}
                  {"sub" in tile && tile.sub && (
                    <span
                      className="block font-mono mt-1 normal-case"
                      style={{
                        fontSize: "var(--text-sm)",
                        letterSpacing: "0.15em",
                        color: "var(--color-cyan)",
                        textTransform: "uppercase",
                      }}
                    >
                      {tile.sub}
                    </span>
                  )}
                </p>
                <p
                  style={{
                    color: "var(--color-ink-secondary)",
                    fontSize: "var(--text-sm)",
                    lineHeight: 1.5,
                  }}
                >
                  {tile.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
