import type { Metadata } from "next";
import { GlaucomaStudy } from "@/components/studio/glaucoma/study-carousel";

export const metadata: Metadata = {
  title: "grade glaucoma severity from oct + clinic numbers — shreyank kadadi",
  description:
    "bimodal oct + metrics fusion model for glaucoma severity classification — published 2024.",
};

export default function GlaucomaPage() {
  return <GlaucomaStudy />;
}
