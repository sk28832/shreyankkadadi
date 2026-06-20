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
  description: "things built while thinking — tools, studies, notes from the workbench.",
};

export default function StudioPage() {
  return (
    <PageShell>
      <main className="relative z-10 px-8 sm:px-16 md:px-24 lg:px-32 py-20 sm:py-24 max-w-3xl">
        <SiteNav active="studio" />

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-ink mb-10 sm:mb-14 leading-[1.1] ink-reveal delay-1">
          studio
        </h1>

        <BrushDivider className="mb-10 sm:mb-14" />

        <p className="text-lg sm:text-xl text-ink leading-relaxed mb-12 ink-reveal-subtle delay-3">
          things i&apos;ve built while thinking — tools, studies, notes from
          the workbench.
        </p>

        <ul className="space-y-4">
          {STUDIO_PROJECTS.map((project, i) => (
            <EntryWell key={project.slug} project={project} index={i} />
          ))}
        </ul>
      </main>
    </PageShell>
  );
}
