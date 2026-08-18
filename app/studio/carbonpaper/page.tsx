import type { Metadata } from "next";
import { CarbonpaperStudy } from "@/components/studio/carbonpaper/study-carousel";

export const metadata: Metadata = {
  title: "an ai document editor with tracked edits — shreyank kadadi",
  description:
    "carbonpaper — ai-assisted document editor with tracked changes, hover actions, and carbonai chat.",
};

export default function CarbonpaperPage() {
  return <CarbonpaperStudy />;
}
