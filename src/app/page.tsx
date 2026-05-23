/* Phase 1 placeholder — confirms the atmospheric canvas, the blooms, the
 * Geist pairing, and the locked tokens are wired. Real page content arrives
 * in Phase 3 (layout shell) and Phase 4 (sections). */

export default function Home() {
  return (
    <main className="flex-1 flex items-center justify-center px-6 py-24">
      <div className="text-center max-w-xl">
        <p
          className="text-[length:var(--text-sm)] uppercase mb-8 font-mono"
          style={{
            color: "var(--color-ink-muted)",
            letterSpacing: "0.18em",
          }}
        >
          Phase 1 · design system online
        </p>
        <h1
          className="font-semibold mb-6"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-display)",
            lineHeight: 1.05,
            letterSpacing: "-0.035em",
            color: "var(--color-ink)",
          }}
        >
          Zappli
        </h1>
        <p
          className="mx-auto max-w-md"
          style={{
            color: "var(--color-ink-secondary)",
            fontSize: "var(--text-md)",
            lineHeight: 1.55,
          }}
        >
          Building the landing page. The atmospheric dark canvas, the brand
          gradient bloom, and the locked design tokens are wired in. Sections
          arrive next.
        </p>
      </div>
    </main>
  );
}
