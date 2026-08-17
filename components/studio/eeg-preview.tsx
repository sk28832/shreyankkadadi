"use client";

export function EegPreview({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-24 h-16 shrink-0 overflow-hidden rounded-sm bg-parchment border border-stone/20 ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 96 64"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        {[0, 1, 2, 3].map((ch) => (
          <path
            key={ch}
            d={`M2 ${14 + ch * 12} ${Array.from({ length: 16 }, (_, i) => {
              const x = 2 + i * 6;
              const y = 14 + ch * 12 + Math.sin(i * 0.9 + ch) * 4;
              return `L${x} ${y.toFixed(1)}`;
            }).join(" ")}`}
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="1"
            opacity={0.5 + ch * 0.1}
          />
        ))}
        <rect
          x="2"
          y="8"
          width="28"
          height="48"
          fill="none"
          stroke="#8b4513"
          strokeWidth="1"
          strokeDasharray="2 2"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}
