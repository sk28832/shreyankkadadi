import type { Metadata } from "next";
import { GlaucomaStudy } from "@/components/studio/glaucoma/study-carousel";

export const metadata: Metadata = {
  title: "glaucoma severity from oct — shreyank kadadi",
  description:
    "bimodal oct + metrics fusion for glaucoma severity. published 2024.",
};

export default function GlaucomaPage() {
  return <GlaucomaStudy />;
}
