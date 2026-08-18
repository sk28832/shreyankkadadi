import type { Metadata } from "next";
import { HangaStudy } from "@/components/studio/hanga/study-carousel";

export const metadata: Metadata = {
  title: "woodblock print deconstruction — shreyank kadadi",
  description:
    "hanga turns an image into a print plan: keyblock, colour blocks, bokashi gradations, and hanmoto printing order.",
};

export default function HangaStudyPage() {
  return <HangaStudy />;
}
