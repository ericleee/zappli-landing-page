"use client";

import { useEffect, useRef } from "react";

/**
 * The hero's looping app video. Renders the poster on SSR, then on mount
 * starts the loop *only* if the user has not requested reduced motion.
 * The poster image remains visible while the video downloads.
 *
 * - `muted` + `playsInline` are required for autoplay on iOS / mobile.
 * - WebM first (preferred by Chrome / Firefox / Edge), MP4 fallback (Safari).
 * - `preload="metadata"` loads only the first frame + headers; the rest
 *   streams when play() is called.
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return; // leave the poster up, do not play
    v.play().catch(() => {
      /* autoplay can be blocked; the poster stays — acceptable */
    });
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 w-full h-full object-cover"
      poster="/videos/hero-loop-poster.jpg"
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="Zappli app — looping demonstration"
    >
      <source src="/videos/hero-loop.webm" type="video/webm" />
      <source src="/videos/hero-loop.mp4" type="video/mp4" />
    </video>
  );
}
