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
  /** Shorter label for the section tabs when the title is long. */
  short?: string;
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
  /** Rendered between the hero and the section reader. */
  intro?: ReactNode;
};

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  return (
    target.tagName === "IFRAME" ||
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.isContentEditable
  );
}

export function StudyCarousel<Id extends string>({
  title,
  name,
  hero,
  sections,
  renderVisual,
  cta,
  intro,
}: Props<Id>) {
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const total = sections.length;
  const section = sections[index];
  const prev = sections[(index - 1 + total) % total];
  const next = sections[(index + 1) % total];

  const go = useCallback(
    (target: number) => {
      const wrapped = ((target % total) + total) % total;
      setIndex(wrapped);
      setAnimKey((k) => k + 1);
    },
    [total],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (isTypingTarget(e.target)) return;
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

        {intro}

        <div className="mb-8 sm:mb-10">
          <div className="flex items-baseline justify-between gap-4 mb-3">
            <p className="text-stone text-xs sm:text-sm font-serif">
              sections
            </p>
            <p className="text-stone text-xs font-serif tabular-nums">
              {index + 1} of {total}
            </p>
          </div>

          <div
            role="tablist"
            aria-label="sections"
            className="flex flex-wrap gap-x-5 gap-y-1 border-b border-stone/30"
          >
            {sections.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                id={`study-tab-${s.id}`}
                aria-selected={i === index}
                aria-controls={`study-panel-${s.id}`}
                onClick={() => go(i)}
                className={cn(
                  "font-serif text-sm sm:text-base pb-3 -mb-px border-b-2 transition-colors motion-fast",
                  i === index
                    ? "text-ink border-[color:var(--umber)]"
                    : "text-stone border-transparent hover:text-umber",
                )}
              >
                <span className="tabular-nums text-xs mr-1.5 opacity-70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.short ?? s.title}
              </button>
            ))}
          </div>
        </div>

        <div
          key={animKey}
          role="tabpanel"
          id={`study-panel-${section.id}`}
          aria-labelledby={`study-tab-${section.id}`}
          className="study-panel-enter grid md:grid-cols-2 gap-8 md:gap-10 md:min-h-[min(62vh,480px)] mb-10"
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

        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
          <button
            type="button"
            onClick={() => go(index - 1)}
            className="group text-left p-4 rounded-sm border border-stone/30 bg-[rgba(238,232,213,0.5)] hover:border-[color:var(--umber)] transition-colors motion-fast"
          >
            <span className="block text-xs font-serif text-stone mb-1">
              ← previous
            </span>
            <span className="block font-serif text-sm sm:text-base text-ink group-hover:text-[color:var(--umber)] transition-colors motion-fast">
              {prev.short ?? prev.title}
            </span>
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            className="group text-right p-4 rounded-sm border border-stone/30 bg-[rgba(238,232,213,0.5)] hover:border-[color:var(--umber)] transition-colors motion-fast"
          >
            <span className="block text-xs font-serif text-stone mb-1">
              next →
            </span>
            <span className="block font-serif text-sm sm:text-base text-ink group-hover:text-[color:var(--umber)] transition-colors motion-fast">
              {next.short ?? next.title}
            </span>
          </button>
        </div>

        <p className="text-xs text-stone font-serif mb-14">
          arrow keys move between sections.
        </p>

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
