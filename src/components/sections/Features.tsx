import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FileText, Send, Users, LayoutDashboard } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "AI resume tailoring",
    body: "A resume rewritten for every job — in seconds. The structure changes; your experience does not.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    icon: Send,
    title: "Application auto-fill",
    body: "The form fills itself. You just tap submit.",
    span: "lg:col-span-2",
  },
  {
    icon: Users,
    title: "Warm introductions",
    body: "Skip the cold-apply void. Reach real people at the company.",
    span: "lg:col-span-2",
  },
  {
    icon: LayoutDashboard,
    title: "One dashboard",
    body: "Every application and reply, in one place.",
    span: "lg:col-span-4",
  },
] as const;

/**
 * S5 Features — bento grid (irregular tile sizes per Hallmark, never uniform
 * 4-card rows which are the AI features-card-row tell).
 */
export function Features() {
  return (
    <Section
      id="features"
      label="Features"
      className="border-t"
      style={{ borderColor: "oklch(35% 0.020 258 / 0.22)" }}
    >
      <Container>
        <ScrollReveal>
          <p
            className="text-[length:var(--text-sm)] uppercase tracking-[0.22em] font-mono mb-6"
            style={{ color: "var(--color-ink-muted)" }}
          >
            05 · features
          </p>
          <h2
            className="font-semibold mb-10 sm:mb-12"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.25rem, 4vw + 0.5rem, 3.5rem)",
              letterSpacing: "-0.03em",
              color: "var(--color-ink)",
              lineHeight: 1.08,
              maxWidth: "20ch",
            }}
          >
            Built around the slow parts.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-5 lg:auto-rows-[200px]">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal
                key={feature.title}
                delay={i * 0.04}
                className={feature.span}
              >
                <div
                  className="h-full rounded-[var(--radius-card)] p-6 sm:p-8 flex flex-col justify-between gap-6"
                  style={{
                    backgroundColor: "var(--color-card)",
                    border: "1px solid oklch(35% 0.020 258 / 0.35)",
                  }}
                >
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-[var(--radius-button)]"
                    style={{
                      backgroundColor: "oklch(56.3% 0.241 260.8 / 0.14)",
                      border: "1px solid oklch(80.4% 0.146 219.5 / 0.28)",
                    }}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.6}
                      style={{ color: "var(--color-cyan)" }}
                    />
                  </span>
                  <div>
                    <h3
                      className="font-semibold mb-2"
                      style={{
                        fontSize: "var(--text-lg)",
                        letterSpacing: "-0.018em",
                        color: "var(--color-ink)",
                        lineHeight: 1.2,
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      style={{
                        color: "var(--color-ink-secondary)",
                        fontSize: "var(--text-sm)",
                        lineHeight: 1.55,
                        maxWidth: "44ch",
                      }}
                    >
                      {feature.body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
