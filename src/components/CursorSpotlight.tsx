"use client";

import { useEffect, useRef } from "react";

/**
 * HP3 Cursor-spotlight — a soft cyan radial that tracks the cursor.
 * Page-wide, fixed, very low opacity, screen-blended. Suppressed under
 * prefers-reduced-motion (no movement at all).
 */
export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${e.clientX}px`);
        el.style.setProperty("--my", `${e.clientY}px`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 motion-reduce:hidden"
      style={{
        background:
          "radial-gradient(360px circle at var(--mx, 50%) var(--my, 28%), oklch(80.4% 0.146 219.5 / 0.10), transparent 70%)",
        mixBlendMode: "screen",
      }}
    />
  );
}
