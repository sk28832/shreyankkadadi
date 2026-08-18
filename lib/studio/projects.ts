export type StudioKind = "tool" | "game" | "research" | "paper";

export type StudioPreview =
  | "hanga"
  | "kokoro"
  | "eeg"
  | "interactomes"
  | "carbonpaper"
  | "glaucoma"
  | "none";

export type StudioProject = {
  slug: string;
  name: string;
  title: string;
  blurb: string;
  href: string;
  preview: StudioPreview;
  year: number;
  kind: StudioKind;
};

export const STUDIO_PROJECTS: StudioProject[] = [
  {
    slug: "hanga",
    name: "hanga",
    title: "woodblock print deconstruction",
    blurb:
      "upload an image, get a print plan: keyblock, colour blocks, bokashi, and print order. calibrated on hiroshige.",
    href: "/studio/hanga",
    preview: "hanga",
    year: 2025,
    kind: "tool",
  },
  {
    slug: "kokoro",
    name: "kokoro no tōkaidō",
    title: "platformer along the tōkaidō",
    blurb:
      "five stations in the browser. celeste-style movement, hiroshige prints as backgrounds.",
    href: "/studio/kokoro",
    preview: "kokoro",
    year: 2025,
    kind: "game",
  },
  {
    slug: "eeg",
    name: "eeg",
    title: "motor imagery classification",
    blurb:
      "cnn + lstm/gru on 22-channel eeg. four classes (hands, legs, tongue). 73% test accuracy.",
    href: "/studio/eeg",
    preview: "eeg",
    year: 2023,
    kind: "research",
  },
  {
    slug: "interactomes",
    name: "neural dynamics",
    title: "causal protein networks",
    blurb:
      "ucla thesis. scored protein–protein edges from 150+ experiments, then built the directed graph.",
    href: "/studio/interactomes",
    preview: "interactomes",
    year: 2023,
    kind: "research",
  },
  {
    slug: "carbonpaper",
    name: "carbonpaper",
    title: "ai document editor",
    blurb:
      "rich text editor with suggested edits you can accept or reject, plus a sidebar chat.",
    href: "/studio/carbonpaper",
    preview: "carbonpaper",
    year: 2024,
    kind: "tool",
  },
  {
    slug: "glaucoma",
    name: "ai & eye",
    title: "glaucoma severity from oct",
    blurb:
      "published fusion model: oct image + clinic metrics into normal / mild-moderate / severe.",
    href: "/studio/glaucoma",
    preview: "glaucoma",
    year: 2024,
    kind: "paper",
  },
];
