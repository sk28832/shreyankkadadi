"use client";

import type { ReactNode } from "react";
import { StudyVisualFrame } from "@/components/studio/study-carousel";
import type { CarbonpaperSectionId } from "@/lib/studio/carbonpaper-sections";

function EditorMock() {
  return (
    <div className="study-visual-inner w-full aspect-[4/3] rounded-sm border border-stone/20 bg-parchment overflow-hidden p-4">
      <svg viewBox="0 0 320 220" className="w-full h-full" aria-hidden>
        <rect width="320" height="220" fill="#eee8d5" />
        <rect
          x="12"
          y="12"
          width="200"
          height="196"
          rx="2"
          fill="#fdf6e3"
          stroke="#1a1a1a"
          strokeWidth="1.2"
        />
        <rect x="24" y="28" width="90" height="8" rx="1" fill="#1a1a1a" opacity="0.75" />
        <rect x="24" y="48" width="168" height="3" rx="1" fill="#3d3d3d" opacity="0.35" />
        <rect x="24" y="58" width="160" height="3" rx="1" fill="#3d3d3d" opacity="0.35" />
        <rect x="24" y="68" width="140" height="3" rx="1" fill="#3d3d3d" opacity="0.35" />
        <rect x="24" y="84" width="168" height="3" rx="1" fill="#3d3d3d" opacity="0.3" />
        <rect x="24" y="94" width="150" height="3" rx="1" fill="#3d3d3d" opacity="0.3" />
        <rect x="24" y="110" width="120" height="3" rx="1" fill="#3d3d3d" opacity="0.3" />
        <rect
          x="224"
          y="12"
          width="84"
          height="196"
          rx="2"
          fill="#fdf6e3"
          stroke="#8b4513"
          strokeWidth="1.2"
        />
        <text
          x="266"
          y="36"
          textAnchor="middle"
          fill="#8b4513"
          style={{ fontSize: 10 }}
        >
          carbonai
        </text>
        <rect x="236" y="48" width="60" height="3" rx="1" fill="#3d3d3d" opacity="0.3" />
        <rect x="236" y="58" width="52" height="3" rx="1" fill="#3d3d3d" opacity="0.3" />
        <rect x="236" y="180" width="60" height="14" rx="1" fill="none" stroke="#93a1a1" />
      </svg>
    </div>
  );
}

function TrackedMock() {
  return (
    <div className="study-visual-inner w-full aspect-[4/3] rounded-sm border border-stone/20 bg-parchment overflow-hidden p-4">
      <svg viewBox="0 0 320 220" className="w-full h-full" aria-hidden>
        <rect width="320" height="220" fill="#fdf6e3" />
        <rect x="28" y="36" width="200" height="8" rx="1" fill="#1a1a1a" opacity="0.7" />
        <rect x="28" y="60" width="264" height="4" rx="1" fill="#3d3d3d" opacity="0.3" />
        <rect x="28" y="74" width="250" height="4" rx="1" fill="#3d3d3d" opacity="0.3" />
        <rect x="28" y="100" width="264" height="28" rx="2" fill="#8b4513" opacity="0.16" />
        <rect x="36" y="110" width="220" height="4" rx="1" fill="#8b4513" opacity="0.65" />
        <rect x="36" y="120" width="180" height="4" rx="1" fill="#8b4513" opacity="0.45" />
        <rect
          x="28"
          y="148"
          width="56"
          height="22"
          rx="2"
          fill="none"
          stroke="#8b4513"
          strokeWidth="1.3"
        />
        <text x="56" y="163" textAnchor="middle" fill="#8b4513" style={{ fontSize: 11 }}>
          accept
        </text>
        <rect
          x="94"
          y="148"
          width="56"
          height="22"
          rx="2"
          fill="none"
          stroke="#93a1a1"
          strokeWidth="1.3"
        />
        <text x="122" y="163" textAnchor="middle" fill="#93a1a1" style={{ fontSize: 11 }}>
          reject
        </text>
        <rect
          x="162"
          y="148"
          width="72"
          height="22"
          rx="2"
          fill="none"
          stroke="#93a1a1"
          strokeWidth="1.3"
        />
        <text x="198" y="163" textAnchor="middle" fill="#93a1a1" style={{ fontSize: 11 }}>
          reprocess
        </text>
      </svg>
    </div>
  );
}

function ChatMock() {
  return (
    <div className="study-visual-inner w-full aspect-[4/3] rounded-sm border border-stone/20 bg-parchment overflow-hidden p-4">
      <svg viewBox="0 0 320 220" className="w-full h-full" aria-hidden>
        <rect width="320" height="220" fill="#eee8d5" />
        <rect
          x="16"
          y="16"
          width="140"
          height="188"
          rx="2"
          fill="#fdf6e3"
          stroke="#1a1a1a"
          strokeWidth="1"
          opacity="0.7"
        />
        <rect
          x="168"
          y="16"
          width="136"
          height="188"
          rx="2"
          fill="#fdf6e3"
          stroke="#8b4513"
          strokeWidth="1.3"
        />
        <text
          x="236"
          y="40"
          textAnchor="middle"
          fill="#8b4513"
          style={{ fontSize: 12 }}
        >
          explain this
        </text>
        <rect x="184" y="56" width="104" height="48" rx="2" fill="#eee8d5" />
        <rect x="192" y="68" width="88" height="3" rx="1" fill="#3d3d3d" opacity="0.35" />
        <rect x="192" y="78" width="80" height="3" rx="1" fill="#3d3d3d" opacity="0.35" />
        <rect x="192" y="88" width="72" height="3" rx="1" fill="#3d3d3d" opacity="0.35" />
        <rect
          x="184"
          y="168"
          width="104"
          height="20"
          rx="2"
          fill="none"
          stroke="#93a1a1"
        />
        <text
          x="236"
          y="182"
          textAnchor="middle"
          fill="#93a1a1"
          style={{ fontSize: 9 }}
        >
          ask about the doc
        </text>
      </svg>
    </div>
  );
}

function StackMock() {
  return (
    <div className="study-visual-inner w-full aspect-[4/3] rounded-sm border border-stone/20 bg-washi p-6 flex flex-col justify-center gap-3">
      {["next.js", "openai /api/process", "tracked edits"].map(
        (line) => (
          <div
            key={line}
            className="px-4 py-3 rounded-sm border border-stone/25 bg-parchment/60 font-serif text-sm text-ink"
          >
            {line}
          </div>
        ),
      )}
    </div>
  );
}

const VISUALS: Record<CarbonpaperSectionId, ReactNode> = {
  editor: <EditorMock />,
  tracked: <TrackedMock />,
  chat: <ChatMock />,
  stack: <StackMock />,
};

export function CarbonpaperSectionVisual({
  id,
}: {
  id: CarbonpaperSectionId;
}) {
  return <StudyVisualFrame>{VISUALS[id]}</StudyVisualFrame>;
}
