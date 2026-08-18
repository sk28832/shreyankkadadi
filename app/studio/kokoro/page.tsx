import type { Metadata } from "next";
import { KokoroCarousel } from "@/components/studio/kokoro/kokoro-carousel";

export const metadata: Metadata = {
  title: "platformer along the tōkaidō — shreyank kadadi",
  description:
    "kokoro no tōkaidō: five browser stations with celeste-style movement and hiroshige prints as backgrounds.",
};

export default function KokoroStudyPage() {
  return <KokoroCarousel />;
}
