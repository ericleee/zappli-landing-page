import { Logo } from "./Logo";

/**
 * N5 Floating pill nav — the atmospheric genre default.
 *
 * - Fixed top, centered horizontally, single-line.
 * - Backdrop blur is allowed on this single pill (not the same as the
 *   atmospheric ban on glassmorphism, which is about the whole-page
 *   frosted-glass aesthetic).
 * - The blooms in the body background show through the blur.
 *
 * Mobile (< 640px): hides the inline anchor links; keeps Logo + CTA.
 */
export function Nav() {
  return (
    <header
      className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-auto"
      role="banner"
    >
      <div
        className="flex items-center justify-between gap-3 sm:gap-5 pl-2.5 pr-1.5 sm:pl-3 sm:pr-2 py-1.5 sm:py-2 rounded-[var(--radius-pill)]"
        style={{
          backgroundColor: "oklch(17.6% 0.014 258.4 / 0.82)",
          backdropFilter: "blur(28px) saturate(140%)",
          WebkitBackdropFilter: "blur(28px) saturate(140%)",
          border: "1px solid oklch(96% 0.005 258 / 0.08)",
          boxShadow:
            "0 8px 32px -10px oklch(0% 0 0 / 0.7), inset 0 1px 0 oklch(96% 0.005 258 / 0.05)",
        }}
      >
        <Logo size="sm" href="#top" />
        <nav
          className="hidden sm:flex items-center gap-1 text-[length:var(--text-sm)]"
          aria-label="Primary"
        >
          <a
            href="#how-it-works"
            className="px-3 py-1.5 rounded-[var(--radius-pill)] transition-colors duration-150 hover:bg-white/[0.05]"
            style={{ color: "var(--color-ink-secondary)" }}
          >
            How it works
          </a>
          <a
            href="#faq"
            className="px-3 py-1.5 rounded-[var(--radius-pill)] transition-colors duration-150 hover:bg-white/[0.05]"
            style={{ color: "var(--color-ink-secondary)" }}
          >
            FAQ
          </a>
        </nav>
        <a
          href="#waitlist"
          className="inline-flex items-center justify-center text-[length:var(--text-sm)] font-medium text-white px-3.5 py-1.5 rounded-[var(--radius-pill)] whitespace-nowrap transition-shadow duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_0_28px_-4px_oklch(56.3%_0.241_260.8/0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-paper)]"
          style={{ backgroundImage: "var(--gradient-primary)" }}
        >
          Join waitlist
        </a>
      </div>
    </header>
  );
}
