import Link from "next/link";
import { CarbonpaperPreview } from "@/components/studio/carbonpaper-preview";
import { HangaPreview } from "@/components/studio/hanga-preview";
import { HikokiPreview } from "@/components/studio/hikoki-preview";
import type { StudioTool } from "@/lib/studio/projects";

function Figure({ tool }: { tool: StudioTool }) {
  const className = "w-full h-full border-0 rounded-none";
  switch (tool.preview) {
    case "hikoki":
      return <HikokiPreview className={className} />;
    case "hanga":
      return <HangaPreview className={className} />;
    case "carbonpaper":
      return <CarbonpaperPreview className={className} />;
    default: {
      const _exhaustive: never = tool.preview;
      return _exhaustive;
    }
  }
}

export function ToolCard({
  tool,
  delay = "",
}: {
  tool: StudioTool;
  delay?: string;
}) {
  return (
    <li className={`h-full ink-reveal-subtle ${delay}`}>
      <article className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-stone/30 bg-[rgba(238,232,213,0.45)] hover:border-[color:var(--umber)] transition-colors motion-fast">
        <div className="tool-tile aspect-[16/10] w-full border-b border-stone/20 bg-washi">
          <div className="tool-figure absolute inset-0">
            <Figure tool={tool} />
          </div>
          <div className="tool-wash" aria-hidden />
          <div className="tool-sweep" aria-hidden />
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="mb-2 flex items-baseline justify-between gap-3">
            <p className="font-serif text-xs sm:text-sm text-stone">
              {tool.name}
            </p>
            <p className="font-serif text-xs text-stone tabular-nums">
              {tool.year}
            </p>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl leading-[1.15] text-ink">
            <Link
              href={tool.href}
              className="transition-colors motion-fast after:absolute after:inset-0 group-hover:text-[color:var(--umber)]"
            >
              {tool.title}
            </Link>
          </h3>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-brush-gray">
            {tool.summary}
          </p>

          <ul className="mt-5 space-y-2 border-t border-stone/25 pt-4">
            {tool.does.map((line) => (
              <li key={line} className="flex gap-3 text-sm leading-relaxed">
                <span aria-hidden className="text-stone">
                  ·
                </span>
                <span className="text-brush-gray">{line}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
            <span className="font-serif text-sm text-ink transition-colors motion-fast group-hover:text-[color:var(--umber)]">
              read the study →
            </span>
            <a
              href={tool.live.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 font-serif text-sm text-stone hover:text-umber transition-colors motion-fast"
            >
              {tool.live.label} ↗
            </a>
          </div>
        </div>
      </article>
    </li>
  );
}
