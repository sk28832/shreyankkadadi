"use client";

import type { ReactNode } from "react";
import {
  StudyImage,
  StudyVisualFrame,
} from "@/components/studio/study-carousel";
import type { InteractomesSectionId } from "@/lib/studio/interactomes-sections";

const VISUALS: Record<InteractomesSectionId, ReactNode> = {
  causal: <StudyImage src="/studio/interactomes/scales.png" contain />,
  evidence: <StudyImage src="/studio/interactomes/associations.png" contain />,
  formula: <StudyImage src="/studio/interactomes/formula.png" contain />,
  calculator: <StudyImage src="/studio/interactomes/flowchart.png" contain />,
  topology: <StudyImage src="/studio/interactomes/network.png" contain />,
};

export function InteractomesSectionVisual({
  id,
}: {
  id: InteractomesSectionId;
}) {
  return <StudyVisualFrame>{VISUALS[id]}</StudyVisualFrame>;
}
