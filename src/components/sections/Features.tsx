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

export function Features() {
  return (
    <Section id="features" label="Features">
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
                  <Icon
                    size={22}
                    strokeWidth={1.6}
                    style={{ color: "var(--color-cyan)" }}
                  />
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
