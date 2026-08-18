"use client";

import { CarbonpaperSectionVisual } from "@/components/studio/carbonpaper/section-visuals";
import { StudyCarousel } from "@/components/studio/study-carousel";
import {
  CARBON_PAPER_GITHUB,
  CARBON_PAPER_SECTIONS,
  CARBON_PAPER_URL,
  HERO,
} from "@/lib/studio/carbonpaper-sections";

export function CarbonpaperStudy() {
  return (
    <StudyCarousel
      name="carbonpaper"
      title="an ai document editor with tracked edits"
      hero={HERO}
      sections={CARBON_PAPER_SECTIONS}
      renderVisual={(id) => <CarbonpaperSectionVisual id={id} />}
      cta={{
        body: "the editor is live — open a document, select a passage, and ask carbonai to revise or explain.",
        href: CARBON_PAPER_URL,
        label: "open carbonpaper",
        secondary: { href: CARBON_PAPER_GITHUB, label: "source on github" },
        note: "needs an openai key in local .env if you run it yourself.",
      }}
    />
  );
}
