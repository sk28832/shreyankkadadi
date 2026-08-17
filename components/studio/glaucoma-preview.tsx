"use client";

export function GlaucomaPreview({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-24 h-16 shrink-0 overflow-hidden rounded-sm bg-parchment border border-stone/20 ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 96 64"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect x="0" y="0" width="96" height="64" fill="#eee8d5" />
        <circle
          cx="34"
          cy="32"
          r="18"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="1.5"
        />
        <circle
          cx="34"
          cy="32"
          r="7"
          fill="none"
          stroke="#8b4513"
          strokeWidth="1.5"
        />
        <circle cx="34" cy="32" r="3" fill="#8b4513" opacity="0.4" />
        <rect
          x="62"
          y="14"
          width="26"
          height="8"
          rx="1"
          fill="#fdf6e3"
          stroke="#1a1a1a"
          strokeWidth="0.8"
        />
        <rect
          x="62"
          y="28"
          width="26"
          height="8"
          rx="1"
          fill="#fdf6e3"
          stroke="#1a1a1a"
          strokeWidth="0.8"
        />
        <rect
          x="62"
          y="42"
          width="26"
          height="8"
          rx="1"
          fill="#fdf6e3"
          stroke="#8b4513"
          strokeWidth="0.8"
        />
      </svg>
    </div>
  );
}
