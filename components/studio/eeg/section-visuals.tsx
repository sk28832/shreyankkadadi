"use client";

import type { ReactNode } from "react";
import { StudyVisualFrame } from "@/components/studio/study-carousel";
import type { EegSectionId } from "@/lib/studio/eeg-sections";

function AccuracyBars() {
  const rows = [
    { label: "cnn+gru", value: 73 },
    { label: "cnn+lstm", value: 72.7 },
    { label: "cnn", value: 70 },
    { label: "lstm", value: 35 },
    { label: "gru", value: 28 },
  ];
  return (
    <div className="study-visual-inner w-full aspect-[4/3] rounded-sm border border-stone/20 bg-washi p-5 flex flex-col justify-center gap-2.5">
      {rows.map((row) => (
        <div key={row.label} className="flex items-center gap-3">
          <span className="w-20 shrink-0 text-[11px] font-serif text-stone tabular-nums text-right">
            {row.label}
          </span>
          <div className="flex-1 h-2.5 rounded-sm bg-parchment overflow-hidden">
            <div
              className="h-full rounded-sm bg-umber/70"
              style={{ width: `${row.value}%` }}
            />
          </div>
          <span className="w-10 shrink-0 text-[11px] font-serif text-ink tabular-nums">
            {row.value}%
          </span>
        </div>
      ))}
    </div>
  );
}

function Waveform() {
  return (
    <div className="study-visual-inner flex items-center justify-center w-full aspect-[4/3] rounded-sm border border-stone/20 bg-washi p-6">
      <svg viewBox="0 0 240 140" className="w-full max-w-sm" aria-hidden>
        {[0, 1, 2, 3, 4].map((ch) => (
          <path
            key={ch}
            d={`M8 ${28 + ch * 22} ${Array.from({ length: 28 }, (_, i) => {
              const x = 8 + i * 8;
              const y =
                28 +
                ch * 22 +
                Math.sin(i * 0.55 + ch) * (6 + (ch % 3)) +
                Math.sin(i * 1.3) * 2;
              return `L${x} ${y.toFixed(1)}`;
            }).join(" ")}`}
            fill="none"
            stroke="var(--ink)"
            strokeWidth="1.2"
            opacity={0.45 + ch * 0.08}
          />
        ))}
        <rect
          x="8"
          y="18"
          width="72"
          height="104"
          fill="none"
          stroke="var(--umber)"
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.55"
        />
        <text
          x="12"
          y="132"
          className="fill-[var(--stone)]"
          style={{ fontSize: 8 }}
        >
          0–300
        </text>
      </svg>
    </div>
  );
}

function HybridStack() {
  return (
    <div className="study-visual-inner w-full aspect-[4/3] rounded-sm border border-stone/20 bg-washi p-5 flex items-center justify-center">
      <svg viewBox="0 0 280 180" className="w-full max-w-md" aria-hidden>
        <rect
          x="20"
          y="24"
          width="100"
          height="48"
          rx="3"
          fill="var(--parchment)"
          stroke="var(--ink)"
          strokeWidth="1.2"
        />
        <text
          x="70"
          y="52"
          textAnchor="middle"
          fill="var(--ink)"
          style={{ fontSize: 11 }}
        >
          conv · eegnex
        </text>

        <path
          d="M70 72 V92"
          stroke="var(--ink)"
          strokeWidth="1.2"
          markerEnd="url(#eegArr)"
        />

        <rect
          x="20"
          y="92"
          width="100"
          height="40"
          rx="3"
          fill="var(--parchment)"
          stroke="var(--umber)"
          strokeWidth="1.3"
        />
        <text
          x="70"
          y="116"
          textAnchor="middle"
          fill="var(--umber)"
          style={{ fontSize: 11 }}
        >
          lstm / gru
        </text>

        <path
          d="M70 132 V148"
          stroke="var(--ink)"
          strokeWidth="1.2"
          markerEnd="url(#eegArr)"
        />

        <rect
          x="35"
          y="148"
          width="70"
          height="24"
          rx="3"
          fill="var(--parchment)"
          stroke="var(--ink)"
          strokeWidth="1.2"
        />
        <text
          x="70"
          y="164"
          textAnchor="middle"
          fill="var(--ink)"
          style={{ fontSize: 10 }}
        >
          4 classes
        </text>

        <g transform="translate(150 40)">
          {[
            { label: "pure rnn", note: "overfits", opacity: 0.35 },
            { label: "pure cnn", note: "~70%", opacity: 0.55 },
            { label: "hybrid", note: "73%", opacity: 0.95 },
          ].map((row, i) => (
            <g key={row.label} transform={`translate(0 ${i * 40})`}>
              <rect
                width="110"
                height="30"
                rx="2"
                fill="var(--parchment)"
                stroke="var(--ink)"
                strokeWidth="1"
                opacity={row.opacity}
              />
              <text
                x="12"
                y="13"
                fill="var(--ink)"
                style={{ fontSize: 10 }}
                opacity={row.opacity}
              >
                {row.label}
              </text>
              <text
                x="12"
                y="24"
                fill="var(--umber)"
                style={{ fontSize: 9 }}
                opacity={row.opacity}
              >
                {row.note}
              </text>
            </g>
          ))}
        </g>

        <defs>
          <marker
            id="eegArr"
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

function SubjectBars() {
  return (
    <div className="study-visual-inner w-full aspect-[4/3] rounded-sm border border-stone/20 bg-washi p-6 flex flex-col justify-center gap-6">
      {[
        { label: "one subject", value: 46.7 },
        { label: "all nine", value: 70.9 },
      ].map((row) => (
        <div key={row.label} className="space-y-2">
          <div className="flex justify-between text-xs font-serif text-stone">
            <span>{row.label}</span>
            <span className="tabular-nums text-ink">{row.value}%</span>
          </div>
          <div className="h-3 rounded-sm bg-parchment overflow-hidden">
            <div
              className="h-full rounded-sm bg-umber/65"
              style={{ width: `${row.value}%` }}
            />
          </div>
        </div>
      ))}
      <p className="text-[11px] text-stone font-serif leading-relaxed">
        validation on the same holdout — pooling subjects beat training on
        subject 1 alone.
      </p>
    </div>
  );
}

const VISUALS: Record<EegSectionId, ReactNode> = {
  problem: <Waveform />,
  window: <SubjectBars />,
  hybrids: <HybridStack />,
  dilation: <AccuracyBars />,
};

export function EegSectionVisual({ id }: { id: EegSectionId }) {
  return <StudyVisualFrame>{VISUALS[id]}</StudyVisualFrame>;
}
