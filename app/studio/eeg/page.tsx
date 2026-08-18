import type { Metadata } from "next";
import { EegStudy } from "@/components/studio/eeg/study-carousel";

export const metadata: Metadata = {
  title: "motor imagery classification — shreyank kadadi",
  description:
    "cnn/rnn eeg classifier for four motor imagery classes. 73% test accuracy.",
};

export default function EegPage() {
  return <EegStudy />;
}
