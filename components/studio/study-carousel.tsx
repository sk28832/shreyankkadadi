"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  BrushDivider,
  PageShell,
  SiteNav,
} from "@/components/site/chrome";
import { cn } from "@/lib/utils";

export type StudySection<Id extends string = string> = {
  id: Id;
  title: string;
  lead: string;
  craft: string;
  engine: string;
};

export type StudyCta = {
  body: string;
  href: string;
  label: string;
  note?: string;
  download?: boolean | string;
  secondary?: { href: string; label: string };
};

type Props<Id extends string> = {
  title: string;
  name?: string;
  hero: { primary: string; secondary: string };
  sections: StudySection<Id>[];
  renderVisual: (id: Id) => ReactNode;
  cta: StudyCta;
};

export function StudyCarousel<Id extends string>({
  title,
  name,
  hero,
  sections,
  renderVisual,
  cta,
}: Props<Id>) {
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const total = sections.length;
  const section = sections[index];

  const go = useCallback(
    (next: number) => {
      const wrapped = ((next % total) + total) % total;
      setIndex(wrapped);
      setAnimKey((k) => k + 1);
    },
    [total],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(index - 1);
      if (e.key === "ArrowRight") go(index + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index]);

  return (
    <PageShell>
      <main className="relative z-10 px-8 sm:px-16 md:px-24 lg:px-32 py-20 sm:py-24 max-w-5xl mx-auto">
        <SiteNav active="studio" />

        {name ? (
          <p className="text-stone text-sm sm:text-base font-serif tracking-wide mb-4 ink-reveal delay-1">
            {name}
          </p>
        ) : null}

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-ink mb-10 sm:mb-14 leading-[1.15] ink-reveal delay-1">
          {title}
        </h1>

        <BrushDivider className="mb-10 sm:mb-14" />

        <div className="space-y-5 sm:space-y-6 mb-12 sm:mb-14 ink-reveal-subtle delay-3">
          <p className="text-ink text-lg sm:text-xl md:text-2xl leading-relaxed">
            {hero.primary}
          </p>
          <p className="text-brush-gray text-base sm:text-lg leading-relaxed">
            {hero.secondary}
          </p>
        </div>

        <div className="mb-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => go(index - 1)}
            className="font-serif text-sm text-stone hover:text-umber transition-colors motion-fast px-2 py-1"
            aria-label="previous section"
          >
            ←
          </button>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {sections.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => go(i)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all motion-fast",
                  i === index
                    ? "bg-umber scale-110"
                    : "bg-stone/40 hover:bg-stone",
                )}
                aria-label={`section ${i + 1}: ${s.title}`}
                aria-current={i === index ? "true" : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(index + 1)}
            className="font-serif text-sm text-stone hover:text-umber transition-colors motion-fast px-2 py-1"
            aria-label="next section"
          >
            →
          </button>
        </div>

        <p className="text-center text-xs text-stone mb-6 font-serif tabular-nums">
          {index + 1} / {total}
        </p>

        <div
          key={animKey}
          className="study-panel-enter grid md:grid-cols-2 gap-8 md:gap-10 min-h-[min(70vh,520px)] mb-14"
        >
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-xl sm:text-2xl text-ink mb-3">
              {section.title}
            </h2>
            <p className="text-ink text-base leading-relaxed mb-5">
              {section.lead}
            </p>
            <div className="space-y-4">
              <p className="text-brush-gray leading-relaxed">{section.craft}</p>
              <p className="text-brush-gray leading-relaxed">{section.engine}</p>
            </div>
          </div>

          <div className="flex items-center">{renderVisual(section.id)}</div>
        </div>

        <div className="pt-6 border-t border-stone/30">
          <BrushDivider className="mb-8" />
          <div className="p-5 sm:p-6 rounded-sm bg-parchment/50 border border-stone/30">
            <p className="text-lg text-ink leading-relaxed mb-5">{cta.body}</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={cta.href}
                {...(cta.download
                  ? {
                      download:
                        typeof cta.download === "string"
                          ? cta.download
                          : true,
                    }
                  : {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                className="inline-flex items-center gap-2 font-serif text-lg link-brush text-ink hover:text-umber motion-fast"
              >
                {cta.label}
                <span aria-hidden>→</span>
              </a>
              {cta.secondary ? (
                <a
                  href={cta.secondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-serif text-base text-stone hover:text-umber transition-colors motion-fast"
                >
                  {cta.secondary.label}
                  <span aria-hidden>→</span>
                </a>
              ) : null}
            </div>
            {cta.note ? (
              <p className="mt-5 text-sm text-stone leading-relaxed">{cta.note}</p>
            ) : null}
          </div>
          <p className="mt-8 text-sm text-stone leading-relaxed">
            <Link
              href="/studio"
              className="hover:text-umber transition-colors motion-fast"
            >
              ← back to studio
            </Link>
          </p>
        </div>
      </main>
    </PageShell>
  );
}

export function StudyVisualFrame({ children }: { children: ReactNode }) {
  return (
    <div className="study-stage w-full h-full min-h-[220px] md:min-h-[280px] flex items-center justify-center p-4 bg-parchment/40 border border-stone/25 rounded-sm overflow-hidden">
      {children}
    </div>
  );
}

export function StudyImage({
  src,
  alt = "",
  contain = true,
}: {
  src: string;
  alt?: string;
  contain?: boolean;
}) {
  return (
    <div className="study-visual-inner relative w-full aspect-[4/3] max-h-full rounded-sm overflow-hidden bg-washi border border-stone/15">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={
          contain ? "w-full h-full object-contain" : "w-full h-full object-cover"
        }
      />
    </div>
  );
}
