"use client";

export function KokoroPreview({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-24 h-16 shrink-0 overflow-hidden rounded-sm bg-[#1a2544] border border-stone/20 ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 96 64"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* moon */}
        <circle cx="68" cy="20" r="8" fill="#f3ecd3" />
        {/* Fuji */}
        <polygon points="16,50 48,14 80,50" fill="#3a4468" />
        {/* snow cap */}
        <polygon
          points="40,24 48,14 56,24 53,28 50,25 48,29 46,25 43,28"
          fill="#f5efd8"
        />
        {/* ground */}
        <rect x="0" y="50" width="96" height="14" fill="#1e2842" />
        {/* torii */}
        <rect x="38" y="46" width="22" height="2" fill="#a53329" />
        <rect x="40" y="48" width="18" height="1" fill="#7a2620" />
        <rect x="41" y="46" width="2" height="12" fill="#a53329" />
        <rect x="55" y="46" width="2" height="12" fill="#a53329" />
        <rect x="41" y="52" width="16" height="1" fill="#a53329" />
      </svg>
    </div>
  );
}
