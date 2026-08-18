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
  const tileClass = "w-full h-full border-0 rounded-none";
  switch (project.preview) {
    case "hanga":
      return <HangaPreview className={tileClass} />;
    case "kokoro":
      return <KokoroPreview className={tileClass} />;
    case "eeg":
      return <EegPreview className={tileClass} />;
    case "interactomes":
      return <InteractomesPreview className={tileClass} />;
    case "carbonpaper":
      return <CarbonpaperPreview className={tileClass} />;
    case "glaucoma":
      return <GlaucomaPreview className={tileClass} />;
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
    <li className={`ink-reveal-subtle delay-${Math.min(index + 4, 7)} h-full`}>
      <Link
        href={project.href}
        className="group flex h-full flex-col rounded-sm bg-parchment/50 border border-stone/30 hover:border-umber/40 hover:-translate-y-0.5 transition-all motion-fast overflow-hidden"
      >
        <div className="relative w-full aspect-[16/10] bg-washi border-b border-stone/20 overflow-hidden">
          <Preview project={project} />
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
          <p className="text-stone text-xs sm:text-sm font-serif">
            {project.name}
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl text-ink leading-[1.15] group-hover:text-umber transition-colors motion-fast">
            {project.title}
          </h2>
          <p className="text-brush-gray text-sm sm:text-base leading-relaxed">
            {project.blurb}
          </p>
          <p className="mt-auto pt-2 text-stone text-xs font-serif tabular-nums">
            {project.year} · {project.kind}
          </p>
        </div>
      </Link>
    </li>
  );
}
