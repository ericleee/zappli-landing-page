import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WaitlistForm } from "@/components/WaitlistForm";

/**
 * S9 Final CTA — closing statement + the waitlist form again.
 * Form is wired in Phase 6 (currently a disabled placeholder).
 */
export function FinalCTA() {
  return (
    <Section
      id="waitlist"
      label="Join the waitlist"
      className="border-t"
      style={{ borderColor: "oklch(35% 0.020 258 / 0.22)" }}
    >
      <Container>
        <ScrollReveal>
          <div
            className="rounded-[var(--radius-card)] p-8 sm:p-12 lg:p-16 relative overflow-hidden"
            style={{
              backgroundColor: "oklch(22.0% 0.016 256.8 / 0.6)",
              border: "1px solid oklch(35% 0.020 258 / 0.45)",
            }}
          >
            {/* contained accent bloom inside the card */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(80% 60% at 0% 0%, oklch(54.1% 0.247 293.0 / 0.18), transparent 60%)," +
                  "radial-gradient(60% 60% at 100% 100%, oklch(80.4% 0.146 219.5 / 0.14), transparent 60%)",
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <p
                className="text-[length:var(--text-sm)] uppercase tracking-[0.22em] font-mono mb-5"
                style={{ color: "var(--color-ink-muted)" }}
              >
                09 · join the waitlist
              </p>
              <h2
                className="font-semibold mb-5"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.25rem, 4vw + 0.5rem, 3.75rem)",
                  letterSpacing: "-0.032em",
                  color: "var(--color-ink)",
                  lineHeight: 1.06,
                  maxWidth: "20ch",
                }}
              >
                Be first to swipe your way to a job.
              </h2>
              <p
                className="mb-8 max-w-lg"
                style={{
                  color: "var(--color-ink-secondary)",
                  fontSize: "var(--text-md)",
                  lineHeight: 1.55,
                }}
              >
                Drop your email. We&apos;ll let you know the day Zappli ships,
                and you&apos;ll be at the front of the line.
              </p>

              <WaitlistForm variant="dark" />

              <p
                className="mt-3 text-[length:var(--text-sm)]"
                style={{ color: "var(--color-ink-muted)" }}
              >
                No spam. Unsubscribe any time.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
