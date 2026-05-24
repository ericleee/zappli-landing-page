import { Logo } from "./Logo";
import { Container } from "./Container";

/**
 * Ft5 Statement footer — the atmospheric genre default.
 * Closes the page with a single sentence, then the wordmark + minimal
 * contact / legal row underneath. Default away from Ft3 (index columns),
 * the most-recognised footer AI fingerprint.
 */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="mt-16 sm:mt-24 pt-16 sm:pt-20 lg:pt-28 pb-12 border-t"
      style={{ borderColor: "oklch(35% 0.020 258 / 0.35)" }}
    >
      <Container>
        <p
          className="font-semibold tracking-[-0.025em] leading-[1.1] mb-12 sm:mb-16 max-w-[18ch]"
          style={{
            color: "var(--color-ink)",
            fontSize: "clamp(1.875rem, 4vw + 0.5rem, 3rem)",
            fontFamily: "var(--font-display)",
          }}
        >
          The job hunt, simplified.
        </p>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Logo size="sm" />
          <div
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-7 text-[length:var(--text-sm)]"
            style={{ color: "var(--color-ink-muted)" }}
          >
            <a
              href="mailto:zappli.app@gmail.com"
              className="transition-colors duration-150 hover:text-[color:var(--color-ink-secondary)]"
            >
              zappli.app@gmail.com
            </a>
            <a
              href="/privacy"
              className="transition-colors duration-150 hover:text-[color:var(--color-ink-secondary)]"
            >
              Privacy
            </a>
            <span>© {year} Zappli</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
