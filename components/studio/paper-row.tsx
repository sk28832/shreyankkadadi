import Link from "next/link";
import { EegPreview } from "@/components/studio/eeg-preview";
import { GlaucomaPreview } from "@/components/studio/glaucoma-preview";
import { InteractomesPreview } from "@/components/studio/interactomes-preview";
import type { StudioPaper } from "@/lib/studio/projects";

function Figure({ paper }: { paper: StudioPaper }) {
  const className = "w-full h-full border-0 rounded-none";
  switch (paper.figure) {
    case "glaucoma":
      return <GlaucomaPreview className={className} />;
    case "eeg":
      return <EegPreview className={className} />;
    case "interactomes":
      return <InteractomesPreview className={className} />;
    default: {
      const _exhaustive: never = paper.figure;
      return _exhaustive;
    }
  }
}

export function PaperRow({
  paper,
  index,
  delay = "",
}: {
  paper: StudioPaper;
  index: number;
  delay?: string;
}) {
  return (
    <li className={`ink-reveal-subtle ${delay}`}>
      <article
        className={`group relative grid gap-x-6 gap-y-5 py-8 sm:py-10 md:grid-cols-[9rem_1fr] ${
          index === 1 ? "" : "border-t border-stone/25"
        }`}
      >
        <div className="flex items-start gap-4 md:block">
          <p className="font-serif text-xs text-stone tabular-nums md:mb-3">
            {String(index).padStart(2, "0")}
          </p>
          <figure className="m-0">
            <div className="paper-figure aspect-[4/3] w-24 overflow-hidden rounded-sm border border-stone/25 bg-washi sm:w-32 md:w-full">
              <Figure paper={paper} />
            </div>
            <figcaption className="mt-2 font-serif text-[0.7rem] leading-snug text-stone">
              fig. {index} — {paper.figureCaption}
            </figcaption>
          </figure>
        </div>

        <div>
          <p className="font-serif text-xs text-stone">
            {paper.type} · {paper.year}
          </p>

          <h3 className="mt-2 font-serif text-xl leading-snug text-ink sm:text-2xl">
            <Link
              href={paper.href}
              className="transition-colors motion-fast after:absolute after:inset-0 group-hover:text-[color:var(--umber)]"
            >
              {paper.title}
            </Link>
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-stone">
            {paper.authors.map((author, i) => (
              <span key={author.name}>
                {i > 0 ? ", " : ""}
                <span className={author.self ? "text-ink" : undefined}>
                  {author.name}
                </span>
              </span>
            ))}
          </p>

          <p className="mt-1 text-sm italic leading-relaxed text-stone">
            {paper.venue}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-brush-gray sm:text-base">
            {paper.summary}
          </p>

          {paper.note ? (
            <p className="mt-2 text-xs leading-relaxed text-stone">
              {paper.note}
            </p>
          ) : null}

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="font-serif text-sm text-ink transition-colors motion-fast group-hover:text-[color:var(--umber)]">
              read the study →
            </span>
            {paper.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 font-serif text-sm text-stone hover:text-umber transition-colors motion-fast"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
      </article>
    </li>
  );
}
