"use client";

export function GlaucomaPreview({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-washi ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 320 200"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="320" height="200" fill="#eee8d5" />
        <circle
          cx="110"
          cy="100"
          r="58"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="2"
        />
        <circle
          cx="110"
          cy="100"
          r="22"
          fill="none"
          stroke="#8b4513"
          strokeWidth="2"
        />
        <circle cx="110" cy="100" r="9" fill="#8b4513" opacity="0.35" />
        <text
          x="110"
          y="178"
          textAnchor="middle"
          fill="#93a1a1"
          style={{ fontSize: 11, fontFamily: "Georgia, serif" }}
        >
          oct
        </text>
        {[
          { y: 48, label: "rnfl" },
          { y: 78, label: "vCDR" },
          { y: 108, label: "rim" },
          { y: 138, label: "cup" },
        ].map((row) => (
          <g key={row.label}>
            <rect
              x="200"
              y={row.y}
              width="88"
              height="22"
              rx="2"
              fill="#fdf6e3"
              stroke="#1a1a1a"
              strokeWidth="1.2"
            />
            <text
              x="244"
              y={row.y + 15}
              textAnchor="middle"
              fill="#1a1a1a"
              style={{ fontSize: 11, fontFamily: "Georgia, serif" }}
            >
              {row.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
