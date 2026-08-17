import type { Metadata } from "next";
import { CarbonpaperStudy } from "@/components/studio/carbonpaper/study-carousel";

export const metadata: Metadata = {
  title: "carbonpaper — shreyank kadadi",
  description:
    "ai-assisted document editor with tracked changes, hover actions, and carbonai chat.",
};

export default function CarbonpaperPage() {
  return <CarbonpaperStudy />;
}
