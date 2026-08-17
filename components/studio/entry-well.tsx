import Link from "next/link";
import { CarbonpaperPreview } from "@/components/studio/carbonpaper-preview";
import { EegPreview } from "@/components/studio/eeg-preview";
import { GlaucomaPreview } from "@/components/studio/glaucoma-preview";
import { HangaPreview } from "@/components/studio/hanga-preview";
import { InteractomesPreview } from "@/components/studio/interactomes-preview";
import { KokoroPreview } from "@/components/studio/kokoro-preview";
import type { StudioProject } from "@/lib/studio/projects";

type Props = {
  project: StudioProject;
  index?: number;
};

function Preview({ project }: { project: StudioProject }) {
  switch (project.preview) {
    case "hanga":
      return <HangaPreview />;
    case "kokoro":
      return <KokoroPreview />;
    case "eeg":
      return <EegPreview />;
    case "interactomes":
      return <InteractomesPreview />;
    case "carbonpaper":
      return <CarbonpaperPreview />;
    case "glaucoma":
      return <GlaucomaPreview />;
    case "none":
      return null;
    default: {
      const _exhaustive: never = project.preview;
      return _exhaustive;
    }
  }
}

export function EntryWell({ project, index = 0 }: Props) {
  return (
    <li className={`ink-reveal-subtle delay-${Math.min(index + 4, 7)}`}>
      <Link
        href={project.href}
        className="group flex gap-5 sm:gap-6 p-4 sm:p-5 rounded-sm bg-parchment/50 border border-stone/30 hover:border-umber/40 hover:-translate-y-0.5 transition-all motion-fast"
      >
        <Preview project={project} />
        <div className="min-w-0 flex-1 flex flex-col justify-center gap-2">
          <h2 className="font-serif text-xl sm:text-2xl text-ink group-hover:text-umber transition-colors motion-fast">
            {project.title}
          </h2>
          <p className="text-brush-gray text-sm sm:text-base leading-relaxed">
            {project.tagline}
          </p>
          <p className="text-stone text-xs sm:text-sm font-serif tabular-nums">
            {project.year} · {project.kind}
          </p>
        </div>
      </Link>
    </li>
  );
}
