"use client";

import type { ReactNode } from "react";
import { StudyVisualFrame } from "@/components/studio/study-carousel";
import type { EegSectionId } from "@/lib/studio/eeg-sections";

const INK = "#1a1a1a";
const UMBER = "#8b4513";
const STONE = "#93a1a1";
const WASHI = "#fdf6e3";
const PARCHMENT = "#eee8d5";

function BarChart({
  rows,
  caption,
}: {
  rows: { label: string; value: number }[];
  caption?: string;
}) {
  const max = Math.max(...rows.map((r) => r.value), 1);
  const rowH = 28;
  const top = 24;
  const left = 88;
  const barMax = 180;
  const height = top + rows.length * rowH + (caption ? 28 : 12);

  return (
    <div className="study-visual-inner w-full aspect-[4/3] rounded-sm border border-stone/20 overflow-hidden" style={{ background: WASHI }}>
      <svg
        viewBox={`0 0 300 ${height}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        {rows.map((row, i) => {
          const y = top + i * rowH;
          const w = (row.value / max) * barMax;
          return (
            <g key={row.label}>
              <text
                x={left - 10}
                y={y + 12}
                textAnchor="end"
                fill={STONE}
                style={{ fontSize: 11, fontFamily: "Georgia, serif" }}
              >
                {row.label}
              </text>
              <rect
                x={left}
                y={y}
                width={barMax}
                height={16}
                fill={PARCHMENT}
              />
              <rect x={left} y={y} width={w} height={16} fill={UMBER} />
              <text
                x={left + barMax + 8}
                y={y + 12}
                fill={INK}
                style={{ fontSize: 11, fontFamily: "Georgia, serif" }}
              >
                {row.value}%
              </text>
            </g>
          );
        })}
        {caption ? (
          <text
            x={16}
            y={height - 10}
            fill={STONE}
            style={{ fontSize: 10, fontFamily: "Georgia, serif" }}
          >
            {caption}
          </text>
        ) : null}
      </svg>
    </div>
  );
}

function Waveform() {
  return (
    <div
      className="study-visual-inner flex items-center justify-center w-full aspect-[4/3] rounded-sm border border-stone/20 p-6"
      style={{ background: WASHI }}
    >
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
            stroke={INK}
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
          stroke={UMBER}
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.7"
        />
        <text x="12" y="132" fill={STONE} style={{ fontSize: 8 }}>
          0–300
        </text>
      </svg>
    </div>
  );
}

function HybridStack() {
  return (
    <div
      className="study-visual-inner w-full aspect-[4/3] rounded-sm border border-stone/20 p-5 flex items-center justify-center"
      style={{ background: WASHI }}
    >
      <svg viewBox="0 0 280 180" className="w-full max-w-md" aria-hidden>
        <rect
          x="20"
          y="24"
          width="100"
          height="48"
          rx="3"
          fill={PARCHMENT}
          stroke={INK}
          strokeWidth="1.2"
        />
        <text x="70" y="52" textAnchor="middle" fill={INK} style={{ fontSize: 11 }}>
          conv
        </text>

        <path d="M70 72 V92" stroke={INK} strokeWidth="1.2" />

        <rect
          x="20"
          y="92"
          width="100"
          height="40"
          rx="3"
          fill={PARCHMENT}
          stroke={UMBER}
          strokeWidth="1.3"
        />
        <text x="70" y="116" textAnchor="middle" fill={UMBER} style={{ fontSize: 11 }}>
          lstm / gru
        </text>

        <path d="M70 132 V148" stroke={INK} strokeWidth="1.2" />

        <rect
          x="35"
          y="148"
          width="70"
          height="24"
          rx="3"
          fill={PARCHMENT}
          stroke={INK}
          strokeWidth="1.2"
        />
        <text x="70" y="164" textAnchor="middle" fill={INK} style={{ fontSize: 10 }}>
          4 classes
        </text>

        <g transform="translate(150 48)">
          {[
            { label: "lstm alone", note: "35%" },
            { label: "cnn alone", note: "70%" },
            { label: "cnn+gru", note: "73%" },
          ].map((row, i) => (
            <g key={row.label} transform={`translate(0 ${i * 36})`}>
              <rect
                width="110"
                height="28"
                rx="2"
                fill={PARCHMENT}
                stroke={INK}
                strokeWidth="1"
              />
              <text x="10" y="12" fill={INK} style={{ fontSize: 10 }}>
                {row.label}
              </text>
              <text x="10" y="22" fill={UMBER} style={{ fontSize: 9 }}>
                {row.note}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

const VISUALS: Record<EegSectionId, ReactNode> = {
  problem: <Waveform />,
  window: (
    <BarChart
      rows={[
        { label: "one subject", value: 46.7 },
        { label: "all nine", value: 70.9 },
      ]}
      caption="validation accuracy, same holdout"
    />
  ),
  hybrids: <HybridStack />,
  dilation: (
    <BarChart
      rows={[
        { label: "cnn+gru", value: 73 },
        { label: "cnn+lstm", value: 72.7 },
        { label: "cnn", value: 70 },
        { label: "lstm", value: 35 },
        { label: "gru", value: 28 },
      ]}
    />
  ),
};

export function EegSectionVisual({ id }: { id: EegSectionId }) {
  return <StudyVisualFrame>{VISUALS[id]}</StudyVisualFrame>;
}
