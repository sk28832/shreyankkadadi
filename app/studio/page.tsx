import type { Metadata } from "next";
import {
  BrushDivider,
  PageShell,
  SiteNav,
} from "@/components/site/chrome";
import { EntryWell } from "@/components/studio/entry-well";
import { STUDIO_PROJECTS } from "@/lib/studio/projects";

export const metadata: Metadata = {
  title: "studio — shreyank kadadi",
  description:
    "tools, games, and research i’ve shipped — from woodblock engines to published clinical ai.",
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

        <p className="text-lg sm:text-xl text-ink leading-relaxed mb-4 ink-reveal-subtle delay-3 max-w-2xl">
          things i&apos;ve actually shipped — tools in production, a game you
          can play, research with numbers and a paper with my name on it.
        </p>
        <p className="text-base sm:text-lg text-brush-gray leading-relaxed mb-12 sm:mb-14 ink-reveal-subtle delay-4 max-w-2xl">
          pick one up. each page walks through what it is, how it works, and
          where to open it.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {STUDIO_PROJECTS.map((project, i) => (
            <EntryWell key={project.slug} project={project} index={i} />
          ))}
        </ul>
      </main>
    </PageShell>
  );
}
