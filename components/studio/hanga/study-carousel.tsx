"use client";

import { SectionVisual } from "@/components/studio/hanga/section-visuals";
import { StudyCarousel } from "@/components/studio/study-carousel";
import {
  HANGA_SECTIONS,
  HANGA_URL,
  HERO,
} from "@/lib/studio/hanga-sections";

export function HangaStudy() {
  return (
    <StudyCarousel
      name="hanga"
      title="woodblock print deconstruction"
      hero={HERO}
      sections={HANGA_SECTIONS}
      renderVisual={(id) => <SectionVisual id={id} />}
      cta={{
        body: "the engine runs at hanga — upload an image or walk through the bundled prints.",
        href: HANGA_URL,
        label: "open hanga",
        note: "bundled samples work without the python engine. uploads need the full stack running on a gpu host.",
      }}
    />
  );
}
