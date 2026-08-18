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
      title="ai document editor"
      hero={HERO}
      sections={CARBON_PAPER_SECTIONS}
      renderVisual={(id) => <CarbonpaperSectionVisual id={id} />}
      cta={{
        body: "the editor is deployed. open a document, select a passage, and ask for an edit.",
        href: CARBON_PAPER_URL,
        label: "open app",
        secondary: { href: CARBON_PAPER_GITHUB, label: "github" },
        note: "running it locally requires an openai api key.",
      }}
    />
  );
}
