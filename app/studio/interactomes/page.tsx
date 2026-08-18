import type { Metadata } from "next";
import { InteractomesStudy } from "@/components/studio/interactomes/study-carousel";

export const metadata: Metadata = {
  title: "map causal protein links across the brain — shreyank kadadi",
  description:
    "fis calculator for causal neural protein–protein networks — ucla neural dynamics group thesis.",
};

export default function InteractomesPage() {
  return <InteractomesStudy />;
}
