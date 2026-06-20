"use client";

import type { ComponentType } from "react";
import { CORPUS_IMAGES, PEEL_LAYERS } from "@/lib/studio/hanga-sections";
import { cn } from "@/lib/utils";

export type VisualId =
  | "recovers"
  | "keyblock"
  | "pigment"
  | "bokashi"
  | "hanmoto"
  | "calibrated";

export function VisualRecovers() {
  return (
    <div className="study-visual-inner relative w-full aspect-[4/3] max-h-full">
      {PEEL_LAYERS.map((src, i) => (
        <div
          key={src}
          className={cn(
            "absolute inset-4 rounded-sm overflow-hidden shadow-sm bg-washi study-peel-layer",
            `study-peel-${i}`,
          )}
          style={{ zIndex: i }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" className="w-full h-full object-contain" />
        </div>
      ))}
    </div>
  );
}

export function VisualKeyblock() {
  return (
    <div className="study-visual-inner flex items-center justify-center w-full aspect-[4/3] bg-washi rounded-sm border border-stone/20 p-8">
      <svg viewBox="0 0 200 120" className="w-full max-w-xs" aria-hidden>
        <path
          d="M10,90 Q40,30 80,50 T150,40 T190,70"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="2"
          strokeLinecap="round"
          className="study-keyblock-stroke"
        />
        {[...Array(8)].map((_, i) => (
          <line
            key={i}
            x1={30 + i * 18}
            y1={20}
            x2={32 + i * 18}
            y2={45}
            stroke="var(--ink)"
            strokeWidth="1"
            opacity="0.35"
            className="study-rain-line"
            style={{ animationDelay: `${i * 0.05}s` }}
          />
        ))}
      </svg>
    </div>
  );
}

export function VisualPigment() {
  return (
    <div className="study-visual-inner relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-washi border border-stone/20">
      <div className="absolute inset-0 bg-[#e5dcc6]" />
      <div className="study-bero-wash absolute inset-x-0 top-[15%] h-[55%]" />
      <div className="study-corner-mask absolute top-0 right-0 w-[40%] h-[35%] bg-ink/20 rounded-bl-[1.5rem]" />
      <div className="absolute bottom-3 left-3 flex gap-1.5">
        {["#4a6fa5", "#c73e3a", "#e5dcc6", "#5a7248"].map((c) => (
          <span
            key={c}
            className="w-4 h-4 rounded-sm border border-ink/10"
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
    </div>
  );
}

export function VisualBokashi() {
  return (
    <div className="study-visual-inner relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-washi border border-stone/20">
      <div className="absolute inset-0 bg-[#c4a882]" />
      <div className="study-bokashi-wipe absolute inset-0" />
    </div>
  );
}

export function VisualHanmoto() {
  const steps = 6;
  return (
    <div className="study-visual-inner flex justify-center w-full aspect-[4/3] px-6">
      <div className="relative flex flex-col justify-between py-4">
        {Array.from({ length: steps }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <span
              className={cn(
                "study-hanmoto-dot w-3 h-3 rounded-full border-2 border-umber/60",
                i < 4 && "study-hanmoto-active",
              )}
              style={{ animationDelay: `${i * 0.35}s` }}
            />
            <span className="text-xs text-stone font-serif tabular-nums">
              {i + 1}
            </span>
          </div>
        ))}
        <div className="absolute left-[5px] top-6 bottom-6 w-px bg-stone/30" />
      </div>
    </div>
  );
}

export function VisualCalibrated() {
  return (
    <div className="study-visual-inner relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-parchment/50 border border-stone/20">
      {CORPUS_IMAGES.map((src, i) => (
        <div
          key={src}
          className={cn(
            "absolute inset-2 study-corpus-slide rounded-sm overflow-hidden",
            `study-corpus-${i}`,
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" className="w-full h-full object-cover" />
        </div>
      ))}
      <div className="study-modern-blob absolute w-24 h-24 rounded-full bg-stone/15 blur-xl bottom-2 right-2 pointer-events-none" />
    </div>
  );
}

const VISUAL_MAP: Record<VisualId, ComponentType> = {
  recovers: VisualRecovers,
  keyblock: VisualKeyblock,
  pigment: VisualPigment,
  bokashi: VisualBokashi,
  hanmoto: VisualHanmoto,
  calibrated: VisualCalibrated,
};

export function SectionVisual({ id }: { id: VisualId }) {
  const Visual = VISUAL_MAP[id];
  return (
    <div className="study-stage w-full h-full min-h-[220px] md:min-h-[280px] flex items-center justify-center p-4 bg-parchment/40 border border-stone/25 rounded-sm overflow-hidden">
      <Visual />
    </div>
  );
}
