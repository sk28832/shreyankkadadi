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
      name="fis · neural dynamics"
      title="map causal protein links across the brain"
      hero={HERO}
      sections={INTERACTOMES_SECTIONS}
      renderVisual={(id) => <InteractomesSectionVisual id={id} />}
      cta={{
        body: "the full thesis — methods, figures, and the fis derivation — is available as a pdf.",
        href: THESIS_PDF,
        label: "download thesis",
        download: "novel-functional-interactomes-of-proteins.pdf",
        note: "ucla computational & systems biology · neural dynamics group · mentor sharmila venugopal.",
      }}
    />
  );
}
