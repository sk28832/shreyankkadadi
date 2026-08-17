"use client";

import type { ReactNode } from "react";
import {
  StudyImage,
  StudyVisualFrame,
} from "@/components/studio/study-carousel";
import type { CarbonpaperSectionId } from "@/lib/studio/carbonpaper-sections";

const VISUALS: Record<CarbonpaperSectionId, ReactNode> = {
  editor: (
    <StudyImage src="/studio/carbonpaper/editor-interface.png" contain={false} />
  ),
  tracked: (
    <StudyImage src="/studio/carbonpaper/editor-editing.png" contain={false} />
  ),
  chat: (
    <StudyImage src="/studio/carbonpaper/ai-assistant.gif" contain={false} />
  ),
  stack: (
    <StudyImage src="/studio/carbonpaper/preview.png" contain={false} />
  ),
};

export function CarbonpaperSectionVisual({
  id,
}: {
  id: CarbonpaperSectionId;
}) {
  return <StudyVisualFrame>{VISUALS[id]}</StudyVisualFrame>;
}
