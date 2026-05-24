import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WaitlistForm } from "@/components/WaitlistForm";

export function FinalCTA() {
  return (
    <Section id="waitlist" label="Join the waitlist">
      <Container>
        <ScrollReveal>
          <div
            className="rounded-[var(--radius-card)] p-8 sm:p-12 lg:p-16 relative overflow-hidden"
            style={{
              backgroundColor: "oklch(22.0% 0.016 256.8 / 0.6)",
              border: "1px solid oklch(35% 0.020 258 / 0.45)",
            }}
          >
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
                Drop your email. Early invite. Founder updates. The launch link
                before anyone else.
              </p>

              <div className="max-w-md">
                <WaitlistForm variant="dark" />
              </div>

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
