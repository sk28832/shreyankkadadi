import type { Metadata } from "next";
import { CarbonpaperStudy } from "@/components/studio/carbonpaper/study-carousel";

export const metadata: Metadata = {
  title: "ai document editor — shreyank kadadi",
  description: "carbonpaper: document editor with tracked ai edits and chat.",
};

export default function CarbonpaperPage() {
  return <CarbonpaperStudy />;
}
