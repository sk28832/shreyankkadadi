export function HangaPreview({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-washi ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 160 100"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="hanga-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f2e8d0" />
            <stop offset="60%" stopColor="#d7dce0" />
            <stop offset="100%" stopColor="#b9c6cf" />
          </linearGradient>
          <linearGradient id="hanga-bokashi" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2f3b5c" />
            <stop offset="100%" stopColor="#2f3b5c" stopOpacity="0.15" />
          </linearGradient>
          <clipPath id="hanga-sheet">
            <rect x="10" y="18" width="80" height="64" rx="1" />
          </clipPath>
        </defs>

        <g clipPath="url(#hanga-sheet)">
          <rect x="10" y="18" width="80" height="64" fill="url(#hanga-sky)" />
          <circle cx="70" cy="34" r="8" fill="#c73e3a" opacity="0.85" />
          <polygon points="4,82 44,40 88,82" fill="#2f3b5c" />
          <polygon
            points="36,48 44,40 52,48 48.5,51 45,47.5 43,51 40,47.5 38,50"
            fill="#f5efd8"
          />
          <rect x="10" y="74" width="80" height="1.4" fill="#3a4468" opacity="0.45" />
          <rect x="10" y="78" width="80" height="1.4" fill="#3a4468" opacity="0.3" />
        </g>
        <rect
          x="10"
          y="18"
          width="80"
          height="64"
          rx="1"
          fill="none"
          stroke="#93a1a1"
          strokeWidth="0.7"
        />

        <path
          d="M95 50 L101 50 M99 47.5 L101.5 50 L99 52.5"
          stroke="#93a1a1"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <g className="hanga-block hanga-block-0">
          <rect
            x="108"
            y="18"
            width="42"
            height="18"
            rx="1"
            fill="#fdf6e3"
            stroke="#93a1a1"
            strokeWidth="0.6"
          />
          <polyline
            points="112,33 129,22 146,33"
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="0.8"
          />
          <circle
            cx="140"
            cy="24"
            r="3"
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="0.8"
          />
        </g>

        <g className="hanga-block hanga-block-1">
          <rect
            x="108"
            y="41"
            width="42"
            height="18"
            rx="1"
            fill="#fdf6e3"
            stroke="#93a1a1"
            strokeWidth="0.6"
          />
          <polygon points="112,56 129,45 146,56" fill="#2f3b5c" />
        </g>

        <g className="hanga-block hanga-block-2">
          <rect
            x="108"
            y="64"
            width="42"
            height="18"
            rx="1"
            fill="#fdf6e3"
            stroke="#93a1a1"
            strokeWidth="0.6"
          />
          <circle cx="140" cy="70" r="3.2" fill="#c73e3a" opacity="0.85" />
          <rect
            x="112"
            y="72"
            width="22"
            height="7"
            fill="url(#hanga-bokashi)"
          />
        </g>
      </svg>
    </div>
  );
}
