export type StudioProject = {
  slug: string;
  title: string;
  tagline: string;
  href: string;
  preview: "hanga" | "kokoro" | "none";
};

export const STUDIO_PROJECTS: StudioProject[] = [
  {
    slug: "hanga",
    title: "hanga",
    tagline: "woodblock deconstruction engine — calibrated on hiroshige",
    href: "/studio/hanga",
    preview: "hanga",
  },
  {
    slug: "kokoro",
    title: "kokoro no tōkaidō",
    tagline: "a meditative platformer along the fifty-three stations",
    href: "/studio/kokoro",
    preview: "kokoro",
  },
];
