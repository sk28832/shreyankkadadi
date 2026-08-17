import type { Metadata } from "next";
import { EegStudy } from "@/components/studio/eeg/study-carousel";

export const metadata: Metadata = {
  title: "eeg classification — shreyank kadadi",
  description:
    "hybrid cnn/rnn motor-imagery classifier for eeg — four classes, nine subjects, 73% test accuracy.",
};

export default function EegPage() {
  return <EegStudy />;
}
