"use client";

import type { ReactNode } from "react";
import { StudyVisualFrame } from "@/components/studio/study-carousel";
import type { GlaucomaSectionId } from "@/lib/studio/glaucoma-sections";

function PipelineDiagram() {
  return (
    <div className="study-visual-inner w-full aspect-[4/3] rounded-sm border border-stone/20 bg-washi p-5 flex items-center justify-center">
      <svg viewBox="0 0 280 180" className="w-full max-w-md" aria-hidden>
        <rect
          x="16"
          y="58"
          width="70"
          height="64"
          rx="3"
          fill="var(--parchment)"
          stroke="var(--ink)"
          strokeWidth="1.2"
        />
        <text x="51" y="84" textAnchor="middle" style={{ fontSize: 9 }} fill="var(--ink)">
          oct scan
        </text>
        <text x="51" y="100" textAnchor="middle" style={{ fontSize: 8 }} fill="var(--stone)">
          disc · rnfl
        </text>

        <rect
          x="16"
          y="20"
          width="70"
          height="28"
          rx="3"
          fill="var(--parchment)"
          stroke="var(--umber)"
          strokeWidth="1.2"
        />
        <text x="51" y="38" textAnchor="middle" style={{ fontSize: 8 }} fill="var(--umber)">
          metrics
        </text>

        <path
          d="M86 34 H118"
          stroke="var(--ink)"
          strokeWidth="1.2"
          markerEnd="url(#arr)"
        />
        <path
          d="M86 90 H118"
          stroke="var(--ink)"
          strokeWidth="1.2"
          markerEnd="url(#arr)"
        />

        <rect
          x="118"
          y="48"
          width="72"
          height="84"
          rx="3"
          fill="var(--parchment)"
          stroke="var(--ink)"
          strokeWidth="1.2"
        />
        <text x="154" y="78" textAnchor="middle" style={{ fontSize: 9 }} fill="var(--ink)">
          fusion
        </text>
        <text x="154" y="94" textAnchor="middle" style={{ fontSize: 8 }} fill="var(--stone)">
          late concat
        </text>
        <text x="154" y="110" textAnchor="middle" style={{ fontSize: 8 }} fill="var(--stone)">
          + fc head
        </text>

        <path
          d="M190 90 H222"
          stroke="var(--ink)"
          strokeWidth="1.2"
          markerEnd="url(#arr)"
        />

        <rect
          x="222"
          y="40"
          width="42"
          height="100"
          rx="3"
          fill="var(--parchment)"
          stroke="var(--umber)"
          strokeWidth="1.2"
        />
        <text x="243" y="68" textAnchor="middle" style={{ fontSize: 8 }} fill="var(--ink)">
          N
        </text>
        <text x="243" y="92" textAnchor="middle" style={{ fontSize: 8 }} fill="var(--ink)">
          M
        </text>
        <text x="243" y="116" textAnchor="middle" style={{ fontSize: 8 }} fill="var(--ink)">
          S
        </text>

        <defs>
          <marker
            id="arr"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--ink)" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

function BimodalDiagram() {
  return (
    <div className="study-visual-inner w-full aspect-[4/3] rounded-sm border border-stone/20 bg-washi p-5 flex items-center justify-center">
      <svg viewBox="0 0 280 180" className="w-full max-w-md" aria-hidden>
        <circle cx="70" cy="90" r="48" fill="var(--parchment)" stroke="var(--ink)" strokeWidth="1.2" />
        <circle cx="70" cy="90" r="18" fill="none" stroke="var(--umber)" strokeWidth="2" />
        <circle cx="70" cy="90" r="8" fill="var(--umber)" opacity="0.35" />
        <text x="70" y="156" textAnchor="middle" style={{ fontSize: 9 }} fill="var(--stone)">
          oct image
        </text>

        <g transform="translate(160 36)">
          {[
            "rnfl thickness",
            "vCDR",
            "rim area",
            "cup volume",
          ].map((label, i) => (
            <g key={label} transform={`translate(0 ${i * 28})`}>
              <rect
                width="100"
                height="22"
                rx="2"
                fill="var(--parchment)"
                stroke="var(--ink)"
                strokeWidth="1"
              />
              <text x="50" y="15" textAnchor="middle" style={{ fontSize: 8 }} fill="var(--ink)">
                {label}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

function FusionDiagram() {
  return (
    <div className="study-visual-inner w-full aspect-[4/3] rounded-sm border border-stone/20 bg-washi p-5 flex items-center justify-center">
      <svg viewBox="0 0 280 180" className="w-full max-w-md" aria-hidden>
        <rect x="20" y="30" width="80" height="50" rx="3" fill="var(--parchment)" stroke="var(--ink)" strokeWidth="1.2" />
        <text x="60" y="52" textAnchor="middle" style={{ fontSize: 9 }} fill="var(--ink)">oct cnn</text>
        <text x="60" y="68" textAnchor="middle" style={{ fontSize: 8 }} fill="var(--stone)">visual tower</text>

        <rect x="20" y="100" width="80" height="50" rx="3" fill="var(--parchment)" stroke="var(--ink)" strokeWidth="1.2" />
        <text x="60" y="122" textAnchor="middle" style={{ fontSize: 9 }} fill="var(--ink)">numeric</text>
        <text x="60" y="138" textAnchor="middle" style={{ fontSize: 8 }} fill="var(--stone)">mlp tower</text>

        <path d="M100 55 H130 V90 H150" fill="none" stroke="var(--ink)" strokeWidth="1.2" />
        <path d="M100 125 H130 V90 H150" fill="none" stroke="var(--ink)" strokeWidth="1.2" />

        <rect x="150" y="68" width="50" height="44" rx="3" fill="var(--parchment)" stroke="var(--umber)" strokeWidth="1.4" />
        <text x="175" y="94" textAnchor="middle" style={{ fontSize: 9 }} fill="var(--umber)">⊕</text>

        <path d="M200 90 H220" stroke="var(--ink)" strokeWidth="1.2" />
        <rect x="220" y="68" width="40" height="44" rx="3" fill="var(--parchment)" stroke="var(--ink)" strokeWidth="1.2" />
        <text x="240" y="94" textAnchor="middle" style={{ fontSize: 9 }} fill="var(--ink)">fc</text>
      </svg>
    </div>
  );
}

function SeverityStack() {
  return (
    <div className="study-visual-inner w-full aspect-[4/3] rounded-sm border border-stone/20 bg-washi p-6 flex flex-col justify-center gap-3">
      {[
        { label: "normal", opacity: 0.25 },
        { label: "mild / moderate", opacity: 0.55 },
        { label: "severe", opacity: 0.9 },
      ].map((row) => (
        <div
          key={row.label}
          className="flex items-center justify-between px-4 py-3 rounded-sm border border-stone/25"
          style={{ backgroundColor: `rgba(139, 69, 19, ${row.opacity * 0.18})` }}
        >
          <span className="font-serif text-sm text-ink">{row.label}</span>
          <span
            className="w-2.5 h-2.5 rounded-full bg-umber"
            style={{ opacity: row.opacity }}
          />
        </div>
      ))}
    </div>
  );
}

const VISUALS: Record<GlaucomaSectionId, ReactNode> = {
  burden: <PipelineDiagram />,
  bimodal: <BimodalDiagram />,
  fusion: <FusionDiagram />,
  multiclass: <SeverityStack />,
};

export function GlaucomaSectionVisual({ id }: { id: GlaucomaSectionId }) {
  return <StudyVisualFrame>{VISUALS[id]}</StudyVisualFrame>;
}
