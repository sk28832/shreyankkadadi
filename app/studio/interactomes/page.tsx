import type { Metadata } from "next";
import { InteractomesStudy } from "@/components/studio/interactomes/study-carousel";

export const metadata: Metadata = {
  title: "causal protein networks — shreyank kadadi",
  description:
    "ucla thesis: fis calculator for causal neural protein–protein networks.",
};

export default function InteractomesPage() {
  return <InteractomesStudy />;
}
