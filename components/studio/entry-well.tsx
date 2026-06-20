import Link from "next/link";
import { HangaPreview } from "@/components/studio/hanga-preview";
import type { StudioProject } from "@/lib/studio/projects";

type Props = {
  project: StudioProject;
  index?: number;
};

export function EntryWell({ project, index = 0 }: Props) {
  return (
    <li className={`ink-reveal-subtle delay-${Math.min(index + 4, 7)}`}>
      <Link
        href={project.href}
        className="group flex gap-5 sm:gap-6 p-4 sm:p-5 rounded-sm bg-parchment/50 border border-stone/30 hover:border-umber/40 hover:-translate-y-0.5 transition-all motion-fast"
      >
        {project.preview === "hanga" && <HangaPreview />}
        <div className="min-w-0 flex-1 flex flex-col justify-center gap-2">
          <h2 className="font-serif text-xl sm:text-2xl text-ink group-hover:text-umber transition-colors motion-fast">
            {project.title}
          </h2>
          <p className="text-brush-gray text-sm sm:text-base leading-relaxed">
            {project.tagline}
          </p>
        </div>
      </Link>
    </li>
  );
}
