import type { Metadata } from "next";
import {
  BrushDivider,
  PageShell,
  SiteNav,
} from "@/components/site/chrome";
import { GameFeature } from "@/components/studio/game-feature";
import { PaperRow } from "@/components/studio/paper-row";
import { SectionHeading } from "@/components/studio/section-heading";
import { ToolCard } from "@/components/studio/tool-card";
import {
  STUDIO_GAME,
  STUDIO_PAPERS,
  STUDIO_TOOLS,
} from "@/lib/studio/projects";

export const metadata: Metadata = {
  title: "studio — shreyank kadadi",
  description: "things i've worked on — tools, research, and a game.",
};

export default function StudioPage() {
  return (
    <PageShell>
      <main className="relative z-10 px-8 sm:px-16 md:px-24 lg:px-32 py-20 sm:py-24 max-w-5xl mx-auto">
        <SiteNav active="studio" />

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-ink mb-10 sm:mb-14 leading-[1.1] ink-reveal delay-1">
          studio
        </h1>

        <BrushDivider className="mb-10 sm:mb-14" />

        <p className="text-lg sm:text-xl text-ink leading-relaxed mb-16 sm:mb-20 ink-reveal-subtle delay-3 max-w-2xl">
          these are the things i&apos;ve worked on.
        </p>

        <section className="mb-20 sm:mb-28">
          <SectionHeading
            index="01"
            label="tools"
            blurb="cool tools i've made"
            delay="delay-3"
          />
          <ul className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
            {STUDIO_TOOLS.map((tool, i) => (
              <ToolCard
                key={tool.slug}
                tool={tool}
                delay={`delay-${Math.min(i + 4, 7)}`}
              />
            ))}
          </ul>
        </section>

        <section className="mb-20 sm:mb-28">
          <SectionHeading
            index="02"
            label="research"
            blurb="published and academic work."
            delay="delay-4"
          />
          <ol className="border-b border-stone/25">
            {STUDIO_PAPERS.map((paper, i) => (
              <PaperRow
                key={paper.slug}
                paper={paper}
                index={i + 1}
                delay={`delay-${Math.min(i + 5, 7)}`}
              />
            ))}
          </ol>
        </section>

        <section>
          <SectionHeading
            index="03"
            label="game"
            blurb="games i've made"
            delay="delay-5"
          />
          <GameFeature game={STUDIO_GAME} delay="delay-6" />
        </section>
      </main>
    </PageShell>
  );
}
