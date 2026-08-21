export function HikokiPreview({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-[#fdf6e3] ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 320 200"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="320" height="200" fill="#fdf6e3" />
        <circle cx="270" cy="35" r="42" fill="#d9ecf2" opacity="0.8" />
        <circle cx="42" cy="177" r="52" fill="#eadcf0" opacity="0.65" />

        <path
          d="M25 65 C76 34 121 43 155 76 C190 109 235 108 294 65"
          fill="none"
          stroke="#93a1a1"
          strokeWidth="1.2"
          strokeDasharray="4 5"
          opacity="0.7"
        />

        <g transform="translate(139 55)">
          <path
            d="M6 18 C11 4 29 2 38 12 C45 20 42 31 33 36 C24 42 9 37 6 27 C3 24 2 21 6 18Z"
            fill="#d9ecf2"
            stroke="#1a1a1a"
            strokeWidth="1.4"
          />
          <path
            d="M15 22 C3 21 -7 26 -14 35 C-1 35 11 32 20 27"
            fill="#d9ecf2"
            stroke="#1a1a1a"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <path
            d="M24 17 C31 8 42 3 52 4 C48 15 40 23 30 27"
            fill="#eee8d5"
            stroke="#1a1a1a"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <circle cx="32" cy="14" r="1.8" fill="#1a1a1a" />
          <path
            d="M39 18 L48 21 L39 23"
            fill="#e8b4a8"
            stroke="#1a1a1a"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </g>

        <rect
          x="45"
          y="103"
          width="230"
          height="70"
          rx="8"
          fill="#eee8d5"
          stroke="#93a1a1"
          strokeWidth="1"
        />
        <text x="62" y="124" fill="#586e75" style={{ fontSize: 8, letterSpacing: 1 }}>
          AA 100
        </text>
        <text x="62" y="150" fill="#1a1a1a" style={{ fontSize: 20, fontFamily: "serif" }}>
          JFK
        </text>
        <path d="M111 144 H202" stroke="#93a1a1" strokeWidth="1" />
        <path d="M196 139 L203 144 L196 149" fill="none" stroke="#93a1a1" strokeWidth="1" />
        <text x="218" y="150" fill="#1a1a1a" style={{ fontSize: 20, fontFamily: "serif" }}>
          LHR
        </text>
        <rect x="61" y="158" width="54" height="9" rx="4.5" fill="#f3df9b" />
        <text x="88" y="165" textAnchor="middle" fill="#586e75" style={{ fontSize: 6 }}>
          delayed 18m
        </text>
      </svg>
    </div>
  );
}
