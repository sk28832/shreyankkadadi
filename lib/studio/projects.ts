export type StudioProject = {
  slug: string;
  title: string;
  tagline: string;
  href: string;
  preview: "hanga" | "none";
};

export const STUDIO_PROJECTS: StudioProject[] = [
  {
    slug: "hanga",
    title: "hanga",
    tagline: "woodblock deconstruction engine — calibrated on hiroshige",
    href: "/studio/hanga",
    preview: "hanga",
  },
];
