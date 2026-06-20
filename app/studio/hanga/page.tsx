import type { Metadata } from "next";
import { StudyCarousel } from "@/components/studio/hanga/study-carousel";

export const metadata: Metadata = {
  title: "hanga — shreyank kadadi",
  description:
    "a woodblock deconstruction engine calibrated on hiroshige. recover the keyblock, colour blocks, bokashi gradations, and hanmoto printing sequence from any image.",
};

export default function HangaStudyPage() {
  return <StudyCarousel />;
}
