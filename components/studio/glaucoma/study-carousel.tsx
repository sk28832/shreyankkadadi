"use client";

import { GlaucomaSectionVisual } from "@/components/studio/glaucoma/section-visuals";
import { StudyCarousel } from "@/components/studio/study-carousel";
import {
  GLAUCOMA_PAPER_URL,
  GLAUCOMA_SECTIONS,
  HERO,
} from "@/lib/studio/glaucoma-sections";

export function GlaucomaStudy() {
  return (
    <StudyCarousel
      name="ai & eye"
      title="glaucoma severity from oct"
      hero={HERO}
      sections={GLAUCOMA_SECTIONS}
      renderVisual={(id) => <GlaucomaSectionVisual id={id} />}
      cta={{
        body: "the paper covers the architecture and the clinical reasoning in full.",
        href: GLAUCOMA_PAPER_URL,
        label: "read paper",
        note: "ramesh, chinasigari, kadadi, et al. tnoa journal of ophthalmic science and research, 2024.",
      }}
    />
  );
}
