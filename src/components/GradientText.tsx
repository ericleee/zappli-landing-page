import type { ReactNode } from "react";

/**
 * Brand-gradient text — restricted to the hero headline's final 3-4 keywords
 * per design.md §6.2 (the documented brand exception to Hallmark gate 5).
 * Do NOT use this anywhere else on the page.
 */
export function GradientText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={className}
      style={{
        backgroundImage: "var(--gradient-primary)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </span>
  );
}
