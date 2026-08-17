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
  title: string;
  tagline: string;
  href: string;
  preview: StudioPreview;
  year: number;
  kind: StudioKind;
};

export const STUDIO_PROJECTS: StudioProject[] = [
  {
    slug: "hanga",
    title: "hanga",
    tagline: "woodblock deconstruction engine — calibrated on hiroshige",
    href: "/studio/hanga",
    preview: "hanga",
    year: 2025,
    kind: "tool",
  },
  {
    slug: "kokoro",
    title: "kokoro no tōkaidō",
    tagline: "a meditative platformer along the fifty-three stations",
    href: "/studio/kokoro",
    preview: "kokoro",
    year: 2025,
    kind: "game",
  },
  {
    slug: "eeg",
    title: "eeg classification",
    tagline: "hybrid cnn/rnn motor-imagery classifier — 73% on four classes",
    href: "/studio/eeg",
    preview: "eeg",
    year: 2023,
    kind: "research",
  },
  {
    slug: "interactomes",
    title: "functional interactomes",
    tagline: "fis calculator — causal neural protein networks from 150+ studies",
    href: "/studio/interactomes",
    preview: "interactomes",
    year: 2023,
    kind: "research",
  },
  {
    slug: "carbonpaper",
    title: "carbonpaper",
    tagline: "ai-assisted document editor with tracked changes and chat",
    href: "/studio/carbonpaper",
    preview: "carbonpaper",
    year: 2024,
    kind: "tool",
  },
  {
    slug: "glaucoma",
    title: "ai & eye",
    tagline: "bimodal oct + metrics model — normal / mild-moderate / severe",
    href: "/studio/glaucoma",
    preview: "glaucoma",
    year: 2024,
    kind: "paper",
  },
];
