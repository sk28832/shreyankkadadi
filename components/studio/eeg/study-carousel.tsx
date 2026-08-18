"use client";

import { EegSectionVisual } from "@/components/studio/eeg/section-visuals";
import { StudyCarousel } from "@/components/studio/study-carousel";
import {
  EEG_GITHUB,
  EEG_SECTIONS,
  HERO,
} from "@/lib/studio/eeg-sections";

export function EegStudy() {
  return (
    <StudyCarousel
      name="eeg"
      title="motor imagery classification"
      hero={HERO}
      sections={EEG_SECTIONS}
      renderVisual={(id) => <EegSectionVisual id={id} />}
      cta={{
        body: "the models, training notebooks, and the full write-up are on github.",
        href: EEG_GITHUB,
        label: "github",
        note: "with arvind kalyan and richard jiang, ucla, 2023.",
      }}
    />
  );
}
