/* The Zappli landing page.
 * Macrostructure: Workbench (#05).  Genre: atmospheric.
 *
 * 6 sections, marketing-focused funnel:
 *   Hero (centered, form-prominent) -> Problem (contrast statement) ->
 *   How It Works (stacked numbered moments) -> Try a swipe (interactive)
 *   -> FAQ -> Final CTA.
 *
 * See design.md for the locked system. */

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SwipeDemo } from "@/components/sections/SwipeDemo";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="flex-1 pt-32 sm:pt-40 lg:pt-44">
        <Hero />
        <Problem />
        <HowItWorks />
        <SwipeDemo />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
