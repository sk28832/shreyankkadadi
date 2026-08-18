"use client";

export function EegPreview({ className = "" }: { className?: string }) {
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
        <rect width="320" height="200" fill="#fdf6e3" />
        {[0, 1, 2, 3, 4, 5].map((ch) => (
          <path
            key={ch}
            d={`M16 ${36 + ch * 24} ${Array.from({ length: 36 }, (_, i) => {
              const x = 16 + i * 8;
              const y =
                36 +
                ch * 24 +
                Math.sin(i * 0.5 + ch * 0.7) * (5 + (ch % 3)) +
                Math.sin(i * 1.4) * 2;
              return `L${x} ${y.toFixed(1)}`;
            }).join(" ")}`}
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="1.4"
            opacity={0.35 + ch * 0.08}
          />
        ))}
        <rect
          x="16"
          y="24"
          width="88"
          height="152"
          fill="none"
          stroke="#8b4513"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          opacity="0.75"
        />
        <text
          x="22"
          y="188"
          fill="#93a1a1"
          style={{ fontSize: 11, fontFamily: "Georgia, serif" }}
        >
          motor window · 0–300
        </text>
        <text
          x="300"
          y="188"
          textAnchor="end"
          fill="#8b4513"
          style={{ fontSize: 12, fontFamily: "Georgia, serif" }}
        >
          73%
        </text>
      </svg>
    </div>
  );
}
