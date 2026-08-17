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
      title="ai & eye"
      hero={HERO}
      sections={GLAUCOMA_SECTIONS}
      renderVisual={(id) => <GlaucomaSectionVisual id={id} />}
      cta={{
        body: "published in tnoa journal of ophthalmic science and research — the fusion note and clinical framing are there in full.",
        href: GLAUCOMA_PAPER_URL,
        label: "read the paper",
        note: "ramesh, chinasigari, kadadi, et al. · 2024 · doi 10.4103/tjosr.tjosr_23_24",
      }}
    />
  );
}
