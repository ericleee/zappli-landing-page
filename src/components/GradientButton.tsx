import type { ButtonHTMLAttributes, ReactNode } from "react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

/**
 * Primary action button — fills with the brand gradient.
 * Per design.md §6.1 the gradient is allowed on the primary CTA only; secondary
 * actions should use a transparent or rule-bordered button.
 *
 * Implements default / hover / :focus-visible / :active / :disabled states
 * inline; loading / error / success live in the consuming form (Phase 6).
 */
export function GradientButton({
  children,
  className = "",
  size = "md",
  type = "button",
  ...props
}: GradientButtonProps) {
  const sizing = {
    sm: "px-4 py-2 text-[length:var(--text-sm)]",
    md: "px-5 py-2.5 text-[length:var(--text-base)]",
    lg: "px-6 py-3.5 text-[length:var(--text-md)]",
  }[size];

  return (
    <button
      type={type}
      className={[
        "relative inline-flex items-center justify-center gap-2",
        "font-medium text-white",
        "rounded-[var(--radius-button)]",
        "transition-[box-shadow,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:shadow-[0_0_36px_-4px_oklch(56.3%_0.241_260.8/0.55)]",
        "active:translate-y-[1px]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-paper)]",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:active:translate-y-0",
        "whitespace-nowrap",
        sizing,
        className,
      ].join(" ")}
      style={{ backgroundImage: "var(--gradient-primary)" }}
      {...props}
    >
      {children}
    </button>
  );
}
