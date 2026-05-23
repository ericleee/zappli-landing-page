import type { ReactElement } from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  href?: string;
  className?: string;
}

/**
 * The Zappli logo: gradient squircle + white bolt mark, optionally followed
 * by the "Zappli" wordmark in Geist semibold.
 *
 * Per design.md §6.1, the brand multi-stop gradient is allowed in three
 * places only — the mark is one of them.
 */
export function Logo({
  size = "md",
  showWordmark = true,
  href,
  className = "",
}: LogoProps): ReactElement {
  const dim = { sm: 28, md: 32, lg: 44 }[size];
  const textSize = {
    sm: "var(--text-md)",
    md: "var(--text-lg)",
    lg: "var(--text-xl)",
  }[size];

  const content = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={dim}
        height={dim}
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(54.1% 0.247 293.0)" />
            <stop offset="55%" stopColor="oklch(58.5% 0.204 277.1)" />
            <stop offset="100%" stopColor="oklch(62.3% 0.188 259.8)" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="7" fill="url(#logo-grad)" />
        <path
          d="M19.6 5.2 L9 17.6 L15 17.6 L12.4 26.8 L23 14.4 L17 14.4 L19.6 5.2 Z"
          fill="#ffffff"
        />
      </svg>
      {showWordmark ? (
        <span
          className="font-semibold"
          style={{
            fontSize: textSize,
            letterSpacing: "-0.03em",
            color: "var(--color-ink)",
            lineHeight: 1,
          }}
        >
          Zappli
        </span>
      ) : (
        <span className="sr-only">Zappli</span>
      )}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        aria-label="Zappli — home"
        className="inline-flex items-center rounded-[var(--radius-input)]"
      >
        {content}
      </a>
    );
  }
  return content;
}
