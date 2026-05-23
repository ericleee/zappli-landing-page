"use client";

import { useEffect, useRef } from "react";

/**
 * The hero's looping app video.
 *
 * - Renders the poster on SSR; on mount, plays *only* if the user has not
 *   requested reduced motion.
 * - IntersectionObserver pauses the video when it scrolls out of view so we
 *   don't burn CPU decoding off-screen frames.
 * - `muted` + `playsInline` are required for autoplay on iOS / mobile.
 * - WebM first (Chrome / Firefox / Edge), MP4 fallback (Safari).
 * - `preload="metadata"` loads only the first frame + headers; the body
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

    let inView = false;

    const tryPlay = () => {
      v.play().catch(() => {
        /* autoplay can be blocked; the poster stays — acceptable */
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          inView = e.isIntersecting;
          if (inView) tryPlay();
          else v.pause();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(v);

    // Kick it off in case the video is already on-screen at mount.
    const rect = v.getBoundingClientRect();
    if (
      rect.top < window.innerHeight &&
      rect.bottom > 0 &&
      !inView // observer's first callback is async — start optimistically
    ) {
      tryPlay();
    }

    return () => io.disconnect();
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
