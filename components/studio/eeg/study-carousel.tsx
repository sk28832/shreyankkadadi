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
      name="eeg study"
      title="classify imagined movement from brain signals"
      hero={HERO}
      sections={EEG_SECTIONS}
      renderVisual={(id) => <EegSectionVisual id={id} />}
      cta={{
        body: "models, notebooks, and the write-up live in the public repo.",
        href: EEG_GITHUB,
        label: "open on github",
        note: "cnn+gru edged the board at 73%; dilation was the quiet lever.",
      }}
    />
  );
}
