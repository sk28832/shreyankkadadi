"use client";

export function CarbonpaperPreview({ className = "" }: { className?: string }) {
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
        {/* doc pane */}
        <rect
          x="16"
          y="16"
          width="180"
          height="168"
          rx="2"
          fill="#fdf6e3"
          stroke="#1a1a1a"
          strokeWidth="1.2"
        />
        <rect x="28" y="28" width="72" height="6" rx="1" fill="#1a1a1a" opacity="0.7" />
        <rect x="28" y="44" width="148" height="3" rx="1" fill="#3d3d3d" opacity="0.35" />
        <rect x="28" y="54" width="140" height="3" rx="1" fill="#3d3d3d" opacity="0.35" />
        <rect x="28" y="64" width="120" height="3" rx="1" fill="#3d3d3d" opacity="0.35" />
        {/* tracked suggestion highlight */}
        <rect x="28" y="80" width="132" height="14" rx="1" fill="#8b4513" opacity="0.18" />
        <rect x="28" y="84" width="118" height="3" rx="1" fill="#8b4513" opacity="0.55" />
        <rect x="28" y="104" width="148" height="3" rx="1" fill="#3d3d3d" opacity="0.35" />
        <rect x="28" y="114" width="100" height="3" rx="1" fill="#3d3d3d" opacity="0.35" />
        <rect x="28" y="124" width="136" height="3" rx="1" fill="#3d3d3d" opacity="0.3" />
        {/* accept / reject */}
        <rect x="28" y="148" width="40" height="14" rx="1" fill="none" stroke="#8b4513" strokeWidth="1" />
        <text x="48" y="158" textAnchor="middle" fill="#8b4513" style={{ fontSize: 8 }}>
          accept
        </text>
        <rect x="74" y="148" width="40" height="14" rx="1" fill="none" stroke="#93a1a1" strokeWidth="1" />
        <text x="94" y="158" textAnchor="middle" fill="#93a1a1" style={{ fontSize: 8 }}>
          reject
        </text>
        {/* ai rail */}
        <rect
          x="208"
          y="16"
          width="96"
          height="168"
          rx="2"
          fill="#fdf6e3"
          stroke="#8b4513"
          strokeWidth="1.2"
        />
        <text x="256" y="36" textAnchor="middle" fill="#8b4513" style={{ fontSize: 9 }}>
          carbonai
        </text>
        <rect x="220" y="48" width="72" height="3" rx="1" fill="#3d3d3d" opacity="0.3" />
        <rect x="220" y="58" width="64" height="3" rx="1" fill="#3d3d3d" opacity="0.3" />
        <rect x="220" y="68" width="68" height="3" rx="1" fill="#3d3d3d" opacity="0.3" />
        <rect x="220" y="88" width="72" height="28" rx="1" fill="#eee8d5" />
        <rect x="220" y="156" width="72" height="16" rx="1" fill="none" stroke="#93a1a1" strokeWidth="1" />
      </svg>
    </div>
  );
}
