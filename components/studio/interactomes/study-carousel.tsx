"use client";

import { InteractomesSectionVisual } from "@/components/studio/interactomes/section-visuals";
import { StudyCarousel } from "@/components/studio/study-carousel";
import {
  HERO,
  INTERACTOMES_SECTIONS,
  THESIS_PDF,
} from "@/lib/studio/interactomes-sections";

export function InteractomesStudy() {
  return (
    <StudyCarousel
      name="neural dynamics"
      title="causal protein networks"
      hero={HERO}
      sections={INTERACTOMES_SECTIONS}
      renderVisual={(id) => <InteractomesSectionVisual id={id} />}
      cta={{
        body: "the full thesis covers the methods, the fis derivation, and every figure.",
        href: THESIS_PDF,
        label: "download pdf",
        download: "novel-functional-interactomes-of-proteins.pdf",
        note: "ucla computational and systems biology, 2023. mentor: dr. sharmila venugopal.",
      }}
    />
  );
}
