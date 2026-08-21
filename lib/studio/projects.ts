export type StudioToolPreview = "hikoki" | "hanga" | "carbonpaper";
export type StudioPaperFigure = "glaucoma" | "eeg" | "interactomes";

export type StudioTool = {
  slug: string;
  name: string;
  title: string;
  summary: string;
  /** What you can actually do with it, in order of use. */
  does: string[];
  href: string;
  live: { href: string; label: string };
  year: number;
  preview: StudioToolPreview;
};

export type PaperAuthor = {
  name: string;
  self?: boolean;
};

export type PaperLink = {
  label: string;
  href: string;
};

export type StudioPaper = {
  slug: string;
  /** The published title, verbatim. */
  title: string;
  authors: PaperAuthor[];
  venue: string;
  year: number;
  type: string;
  summary: string;
  note?: string;
  href: string;
  links: PaperLink[];
  figure: StudioPaperFigure;
  figureCaption: string;
};

export type StudioGame = {
  slug: string;
  name: string;
  title: string;
  summary: string;
  detail: string;
  href: string;
  year: number;
};

export const STUDIO_TOOLS: StudioTool[] = [
  {
    slug: "hikoki",
    name: "hikoki",
    title: "flight companion for your people",
    summary:
      "texts the people you love when you take off, land, or run late. warm and personal, without another flight tracker to check.",
    does: [
      "track a flight or whole multi-leg trip",
      "add parents, partners, and friends with messages written for each relationship",
      "send gentle SMS updates on takeoff, landing, delays, and gate changes",
    ],
    href: "/studio/hikoki",
    live: { href: "https://hikoki.shreyankkadadi.com", label: "open hikoki" },
    year: 2026,
    preview: "hikoki",
  },
  {
    slug: "hanga",
    name: "hanga",
    title: "woodblock print deconstruction",
    summary:
      "takes a finished image and works backwards to the blocks a printer would have cut.",
    does: [
      "upload an image, or open one of the bundled hiroshige prints",
      "separate the keyblock outline from each colour block",
      "read back the bokashi gradations and the hanmoto printing order",
    ],
    href: "/studio/hanga",
    live: { href: "https://hanga.shreyankkadadi.com", label: "open hanga" },
    year: 2025,
    preview: "hanga",
  },
  {
    slug: "carbonpaper",
    name: "carbonpaper",
    title: "ai document editor",
    summary:
      "a real editor where the model suggests and you decide what lands in the document.",
    does: [
      "write and format in a document, not a chat window",
      "select a passage and describe the edit you want",
      "accept or reject each suggestion inline, with version history behind you",
    ],
    href: "/studio/carbonpaper",
    live: {
      href: "https://carbonpaper-app.vercel.app",
      label: "open carbonpaper",
    },
    year: 2024,
    preview: "carbonpaper",
  },
];

export const STUDIO_PAPERS: StudioPaper[] = [
  {
    slug: "glaucoma",
    title:
      "A Novel Fusion Deep Learning Approach for Glaucoma Severity Classification – An Optical Coherence Tomography-Based Bimodal Artificial Intelligence Model",
    authors: [
      { name: "Prasanna Venkatesh Ramesh" },
      { name: "Puja Chinasigari" },
      { name: "Shreyank Kadadi", self: true },
      { name: "Aditya Gupta" },
      { name: "Archana Nivash" },
      { name: "Murali Ariga" },
      { name: "Pratheeba Devi Nivean" },
      { name: "Sujatha Mohan" },
    ],
    venue: "TNOA Journal of Ophthalmic Science and Research, 62(2), 241–243",
    year: 2024,
    type: "journal article",
    summary:
      "one model reads the oct scan and another reads the numerical metrics from the same exam. their features are fused late, and the result grades severity as normal, mild to moderate, or severe rather than a yes or no.",
    href: "/studio/glaucoma",
    links: [
      {
        label: "doi: 10.4103/tjosr.tjosr_23_24",
        href: "https://www.ovid.com/jnls/tnoa/fulltext/10.4103/tjosr.tjosr_23_24~a-novel-fusion-deep-learning-approach-for-glaucoma-severity",
      },
    ],
    figure: "glaucoma",
    figureCaption: "oct scan and clinic metrics",
  },
  {
    slug: "interactomes",
    title: "Novel Functional Interactomes of Proteins Across Brain Scales",
    authors: [{ name: "Shreyank Kadadi", self: true }],
    venue: "Undergraduate thesis, Computational and Systems Biology, UCLA",
    year: 2023,
    type: "thesis",
    summary:
      "defines a functional interactomes score for protein pairs, computes it from over 150 published experiments, and assembles the scored edges into a directed causal network that can be analysed topologically.",
    note: "faculty mentor: dr. sharmila venugopal, integrative biology and physiology",
    href: "/studio/interactomes",
    links: [{ label: "thesis pdf", href: "/studio/interactomes/thesis.pdf" }],
    figure: "interactomes",
    figureCaption: "the scored directed network",
  },
  {
    slug: "eeg",
    title: "EEG Classification using CNNs and RNNs",
    authors: [
      { name: "Arvind Kalyan" },
      { name: "Richard Jiang" },
      { name: "Shreyank Kadadi", self: true },
    ],
    venue: "Course project, UCLA",
    year: 2023,
    type: "project paper",
    summary:
      "four motor imagery classes from 22-channel eeg. pure recurrent models stayed near chance, but cnn/rnn hybrids reached 73% test accuracy, with dilated convolutions giving the largest single gain.",
    href: "/studio/eeg",
    links: [
      {
        label: "code and paper",
        href: "https://github.com/sk28832/eeg-classification-model",
      },
    ],
    figure: "eeg",
    figureCaption: "one trial, 22 channels",
  },
];

export const STUDIO_GAME: StudioGame = {
  slug: "kokoro",
  name: "kokoro no tōkaidō",
  title: "platformer along the tōkaidō",
  summary:
    "five stations of the old road from edo to kyoto, playable in the browser.",
  detail:
    "celeste-style movement over public-domain hiroshige prints. each station teaches one mechanic and says nothing about it.",
  href: "/studio/kokoro",
  year: 2025,
};
