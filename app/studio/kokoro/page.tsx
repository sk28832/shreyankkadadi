import type { Metadata } from "next";
import { KokoroCarousel } from "@/components/studio/kokoro/kokoro-carousel";

export const metadata: Metadata = {
  title: "kokoro no tōkaidō — shreyank kadadi",
  description:
    "a meditative platformer along the tōkaidō, calibrated on hiroshige — five stations, tight controls, three lines of haiku between them.",
};

export default function KokoroStudyPage() {
  return <KokoroCarousel />;
}
