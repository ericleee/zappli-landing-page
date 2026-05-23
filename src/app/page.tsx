/* The Zappli landing page.
 * Macrostructure: Workbench (#05).  Genre: atmospheric.
 * See design.md for the locked system and PLAN.md for the build phasing. */

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SwipeDemo } from "@/components/sections/SwipeDemo";
import { Features } from "@/components/sections/Features";
import { Numbers } from "@/components/sections/Numbers";
import { Trust } from "@/components/sections/Trust";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <CursorSpotlight />
      <Nav />
      <main id="top" className="flex-1 pt-28 sm:pt-32">
        <Hero />
        <Problem />
        <HowItWorks />
        <SwipeDemo />
        <Features />
        <Numbers />
        <Trust />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
