import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Pin Turbopack's workspace root to this project so a stray parent-dir
   * lockfile doesn't fool the inference. */
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
