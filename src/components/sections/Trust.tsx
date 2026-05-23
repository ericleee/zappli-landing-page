import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Shield } from "lucide-react";

/**
 * S7 Trust — short reassurance block.
 * Honest framing per design.md §5: Zappli prepares, the user approves and
 * submits. Never "auto-applies for you."
 */
export function Trust() {
  return (
    <Section
      id="trust"
      label="Trust"
      className="border-t"
      style={{ borderColor: "oklch(35% 0.020 258 / 0.22)" }}
    >
      <Container>
        <ScrollReveal>
          <div className="flex items-start gap-5 max-w-3xl">
            <span
              className="hidden sm:inline-flex shrink-0 items-center justify-center w-12 h-12 rounded-[var(--radius-button)] mt-1"
              style={{
                backgroundColor: "oklch(56.3% 0.241 260.8 / 0.14)",
                border: "1px solid oklch(80.4% 0.146 219.5 / 0.28)",
              }}
              aria-hidden="true"
            >
              <Shield
                size={22}
                strokeWidth={1.5}
                style={{ color: "var(--color-cyan)" }}
              />
            </span>
            <div>
              <p
                className="text-[length:var(--text-sm)] uppercase tracking-[0.22em] font-mono mb-4"
                style={{ color: "var(--color-ink-muted)" }}
              >
                07 · you stay in control
              </p>
              <p
                className="font-medium"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 2.5vw + 0.5rem, 2rem)",
                  letterSpacing: "-0.02em",
                  color: "var(--color-ink)",
                  lineHeight: 1.3,
                }}
              >
                Zappli prepares everything. You review your resume and approve
                every message before anything is sent. Your information, your
                call.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
