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
  /** Short product / project label shown above the title */
  name: string;
  /** Plain-English line — what it is, large on the tile */
  title: string;
  /** Two sentences: what you built + why it matters */
  blurb: string;
  /** One concrete ship signal */
  outcome: string;
  href: string;
  preview: StudioPreview;
  year: number;
  kind: StudioKind;
};

export const STUDIO_PROJECTS: StudioProject[] = [
  {
    slug: "hanga",
    name: "hanga",
    title: "turn any image into a woodblock print plan",
    blurb:
      "i built a deconstruction engine that recovers keyblock, colour blocks, bokashi, and print order from a single image — calibrated on hiroshige. it is the inverse of a generator: craft constraints in, a workshop plan out.",
    outcome: "live tool · calibrated on edo prints",
    href: "/studio/hanga",
    preview: "hanga",
    year: 2025,
    kind: "tool",
  },
  {
    slug: "kokoro",
    name: "kokoro no tōkaidō",
    title: "a playable walk along hiroshige’s road",
    blurb:
      "a meditative platformer i shipped in the browser — five stations, celeste-style jumps, public-domain woodblock backdrops. short enough to finish in an evening; quiet enough to feel like a print.",
    outcome: "playable in-browser · godot 4",
    href: "/studio/kokoro",
    preview: "kokoro",
    year: 2025,
    kind: "game",
  },
  {
    slug: "eeg",
    name: "eeg study",
    title: "classify imagined movement from brain signals",
    blurb:
      "hybrid cnn/rnn models that read motor imagery — left hand, right hand, legs, tongue — from 22-channel eeg. pure rnns overfit; stacking convolutions with lstm/gru and dilation is what actually worked.",
    outcome: "73% test accuracy · open source",
    href: "/studio/eeg",
    preview: "eeg",
    year: 2023,
    kind: "research",
  },
  {
    slug: "interactomes",
    name: "fis · neural dynamics",
    title: "map causal protein links across the brain",
    blurb:
      "a calculator and network pipeline from my ucla neural dynamics thesis. instead of predictive association scores, edges come from experimental causal effects across 150+ studies — then topology finds hubs.",
    outcome: "thesis · directed fis networks",
    href: "/studio/interactomes",
    preview: "interactomes",
    year: 2023,
    kind: "research",
  },
  {
    slug: "carbonpaper",
    name: "carbonpaper",
    title: "an ai document editor with tracked edits",
    blurb:
      "a next.js editor i shipped with carbonai on the side — select text, get a suggestion, accept or reject inline. built for dense docs where a silent rewrite is the wrong product.",
    outcome: "live on vercel · source on github",
    href: "/studio/carbonpaper",
    preview: "carbonpaper",
    year: 2024,
    kind: "tool",
  },
  {
    slug: "glaucoma",
    name: "ai & eye",
    title: "grade glaucoma severity from oct + clinic numbers",
    blurb:
      "a published bimodal fusion model: one stream reads the oct scan, the other the rnfl / vcdr / rim / cup metrics, late-fused into normal vs mild-moderate vs severe — not just diseased-or-not.",
    outcome: "published 2024 · tnoa journal",
    href: "/studio/glaucoma",
    preview: "glaucoma",
    year: 2024,
    kind: "paper",
  },
];
