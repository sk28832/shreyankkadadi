import type { Metadata } from "next";
import Link from "next/link";
import {
  BrushDivider,
  PageShell,
  SiteNav,
} from "@/components/site/chrome";
import { SectionHeading } from "@/components/studio/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "hikoki — studio",
  description: "A warm flight companion that texts the people you love.",
};

export default function HikokiStudioPage() {
  return (
    <PageShell>
      <main className="relative z-10 px-8 sm:px-16 md:px-24 lg:px-32 py-20 sm:py-24 max-w-3xl mx-auto">
        <SiteNav active="studio" />

        <p className="text-stone text-sm mb-4 ink-reveal delay-1">studio · tool</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-ink mb-6 ink-reveal delay-2">
          hikoki
        </h1>
        <p className="text-stone text-sm tracking-widest mb-10 ink-reveal delay-2">飛行機</p>

        <BrushDivider className="mb-10" />

        <p className="text-lg text-ink leading-relaxed mb-8 ink-reveal-subtle delay-3">
          keep your people in the loop. before a trip, add the folks who care about you.
          hikoki sends them gentle texts when you take off, land, or run late. each message
          changes based on who receives it, instead of repeating airline boilerplate.
        </p>

        <SectionHeading
          index="01"
          label="does"
          blurb="what you can do with it"
          delay="delay-4"
        />
        <ul className="space-y-4 mb-12 text-ink ink-reveal delay-4">
          <li>track one flight or a whole multi-leg trip</li>
          <li>add your people with relationship-aware message previews</li>
          <li>share a simple link for family who just want to know you landed</li>
        </ul>

        <Button asChild className="ink-reveal delay-5">
          <Link href="https://hikoki.shreyankkadadi.com" target="_blank" rel="noopener noreferrer">
            open hikoki
          </Link>
        </Button>
      </main>
    </PageShell>
  );
}
