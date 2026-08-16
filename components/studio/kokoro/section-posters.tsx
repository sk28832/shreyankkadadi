"use client";

import type { ComponentType } from "react";

export type PosterId = "nihonbashi" | "satta" | "numazu" | "mishima" | "sanjo";

const STAGE_CLS =
  "study-visual-inner relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-washi border border-stone/20";

// nihonbashi — dawn departure at the great bridge
export function PosterNihonbashi() {
  return (
    <div className={STAGE_CLS}>
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="dawn-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f5c6a1" />
            <stop offset="70%" stopColor="#e0dcc4" />
            <stop offset="100%" stopColor="#c9c4a8" />
          </linearGradient>
          <linearGradient id="dawn-water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8fa9b5" />
            <stop offset="100%" stopColor="#6f8a97" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="400" height="210" fill="url(#dawn-sky)" />
        <circle cx="290" cy="70" r="26" fill="#e8b287" opacity="0.85" />
        <rect x="0" y="210" width="400" height="90" fill="url(#dawn-water)" />
        {/* faint water lines */}
        {[220, 235, 250, 268, 285].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="400"
            y2={y}
            stroke="#ffffff"
            strokeWidth="1"
            opacity="0.28"
          />
        ))}
        {/* bridge silhouette */}
        <path
          d="M 0 195 Q 200 155 400 195 L 400 215 Q 200 175 0 215 Z"
          fill="#3d3a34"
          opacity="0.9"
        />
        <path
          d="M 0 195 Q 200 155 400 195"
          stroke="#2a2723"
          strokeWidth="2"
          fill="none"
        />
        {/* bridge pilings */}
        <rect x="130" y="200" width="4" height="18" fill="#2a2723" />
        <rect x="196" y="196" width="4" height="22" fill="#2a2723" />
        <rect x="262" y="200" width="4" height="18" fill="#2a2723" />
        {/* small figure crossing */}
        <rect x="187" y="175" width="4" height="10" fill="#1a1a1a" />
        <circle cx="189" cy="171" r="3" fill="#1a1a1a" />
        <polygon points="182,174 189,167 196,174" fill="#8b4513" />
      </svg>
    </div>
  );
}

// satta — Fuji above the pass, sea below
export function PosterSatta() {
  return (
    <div className={STAGE_CLS}>
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="satta-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a9c1d4" />
            <stop offset="70%" stopColor="#d4d7d0" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="400" height="230" fill="url(#satta-sky)" />
        {/* distant Fuji */}
        <polygon points="120,200 220,90 320,200" fill="#5a6a80" opacity="0.85" />
        <polygon
          points="180,140 220,90 260,140 245,155 232,142 220,158 208,142 195,153"
          fill="#f0eddd"
        />
        {/* clouds around Fuji */}
        <ellipse cx="180" cy="165" rx="60" ry="10" fill="#eee9d8" opacity="0.85" />
        <ellipse cx="260" cy="170" rx="55" ry="9" fill="#eee9d8" opacity="0.85" />
        {/* sea */}
        <rect x="0" y="230" width="400" height="70" fill="#7a92a5" />
        {[240, 255, 270, 285].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="400"
            y2={y}
            stroke="#ffffff"
            strokeWidth="1"
            opacity="0.3"
          />
        ))}
        {/* pass cliffs */}
        <polygon points="0,220 60,180 60,300 0,300" fill="#2f3548" />
        <polygon points="400,215 350,175 350,300 400,300" fill="#2f3548" />
      </svg>
    </div>
  );
}

// numazu — twilight moon through pines
export function PosterNumazu() {
  return (
    <div className={STAGE_CLS}>
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="numazu-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1c2340" />
            <stop offset="100%" stopColor="#495975" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="400" height="300" fill="url(#numazu-sky)" />
        {/* moon */}
        <circle cx="290" cy="100" r="42" fill="#f4ecc9" />
        <circle cx="290" cy="100" r="42" fill="#f9f0d0" opacity="0.35" />
        {/* distant hills */}
        <polygon
          points="0,240 100,190 220,240"
          fill="#1a2436"
          opacity="0.9"
        />
        <polygon
          points="180,240 320,180 400,240 400,300 180,300"
          fill="#1a2436"
          opacity="0.9"
        />
        {/* pine silhouettes */}
        {[
          { x: 40, h: 120 },
          { x: 100, h: 90 },
          { x: 160, h: 130 },
          { x: 340, h: 110 },
        ].map((p) => (
          <g key={p.x}>
            <polygon
              points={`${p.x - 15},240 ${p.x},${240 - p.h} ${p.x + 15},240`}
              fill="#0d1220"
            />
            <polygon
              points={`${p.x - 20},250 ${p.x},${250 - p.h * 0.85} ${p.x + 20},250`}
              fill="#0d1220"
              opacity="0.9"
            />
            <rect x={p.x - 2} y={240} width="4" height="18" fill="#0d1220" />
          </g>
        ))}
        {/* road */}
        <rect x="0" y="258" width="400" height="42" fill="#0a1020" />
        {/* road lantern glow */}
        <circle cx="220" cy="270" r="4" fill="#f2b56a" opacity="0.8" />
      </svg>
    </div>
  );
}

// mishima — morning mist between shapes
export function PosterMishima() {
  return (
    <div className={STAGE_CLS}>
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="mishima-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c9d6d3" />
            <stop offset="100%" stopColor="#d9dbc9" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="400" height="300" fill="url(#mishima-sky)" />
        {/* faint distant trees fading into mist */}
        {[70, 130, 210, 300].map((x, i) => (
          <g key={x} opacity={0.35 - i * 0.06}>
            <rect x={x - 1} y={150} width="2" height="100" fill="#3d3d3d" />
            <ellipse cx={x} cy={150} rx="18" ry="26" fill="#4a5651" />
          </g>
        ))}
        {/* mist bands */}
        <rect x="0" y="130" width="400" height="24" fill="#f0ede0" opacity="0.7" />
        <rect x="0" y="170" width="400" height="18" fill="#f0ede0" opacity="0.55" />
        <rect x="0" y="200" width="400" height="26" fill="#f0ede0" opacity="0.5" />
        {/* torii silhouette peeking through mist */}
        <g opacity="0.65">
          <rect x="150" y="150" width="100" height="4" fill="#8b3a2e" />
          <rect x="155" y="156" width="90" height="2" fill="#6a2a20" />
          <rect x="163" y="150" width="4" height="80" fill="#8b3a2e" />
          <rect x="233" y="150" width="4" height="80" fill="#8b3a2e" />
          <rect x="163" y="182" width="74" height="3" fill="#8b3a2e" />
        </g>
        {/* travelers as small shadows */}
        <ellipse cx="120" cy="242" rx="7" ry="3" fill="#2a2a2a" opacity="0.55" />
        <rect x="118" y="230" width="4" height="14" fill="#2a2a2a" opacity="0.55" />
        <ellipse cx="280" cy="248" rx="9" ry="3" fill="#2a2a2a" opacity="0.5" />
        <rect x="278" y="234" width="4" height="16" fill="#2a2a2a" opacity="0.5" />
        {/* ground */}
        <rect x="0" y="250" width="400" height="50" fill="#8d8b74" />
      </svg>
    </div>
  );
}

// sanjo — arrival at the great bridge of kyoto, dawn petals
export function PosterSanjo() {
  return (
    <div className={STAGE_CLS}>
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="sanjo-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f0c7a5" />
            <stop offset="60%" stopColor="#f4e4c5" />
            <stop offset="100%" stopColor="#e3d5b4" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="400" height="230" fill="url(#sanjo-sky)" />
        {/* soft sun */}
        <circle cx="80" cy="90" r="30" fill="#f5c98a" opacity="0.65" />
        {/* distant mountains */}
        <polygon points="0,205 130,150 260,205" fill="#7f8ea3" opacity="0.7" />
        <polygon points="220,205 320,165 400,205" fill="#7f8ea3" opacity="0.65" />
        {/* river */}
        <rect x="0" y="205" width="400" height="45" fill="#a4b0be" />
        {[215, 228, 240].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="400"
            y2={y}
            stroke="#ffffff"
            strokeWidth="1"
            opacity="0.4"
          />
        ))}
        {/* the bridge — arched */}
        <path
          d="M 30 250 Q 200 195 370 250 L 370 260 Q 200 210 30 260 Z"
          fill="#3a2b22"
        />
        <path
          d="M 30 250 Q 200 195 370 250"
          stroke="#221812"
          strokeWidth="1.5"
          fill="none"
        />
        {/* railings */}
        {[90, 150, 200, 250, 310].map((x) => (
          <rect
            key={x}
            x={x}
            y="220"
            width="2"
            height="24"
            fill="#3a2b22"
          />
        ))}
        {/* ground */}
        <rect x="0" y="260" width="400" height="40" fill="#8d6e5a" />
        {/* ceremonial torii on the far side */}
        <g>
          <rect x="288" y="230" width="70" height="4" fill="#a53329" />
          <rect x="293" y="234" width="60" height="2" fill="#7a2620" />
          <rect x="298" y="230" width="4" height="34" fill="#a53329" />
          <rect x="345" y="230" width="4" height="34" fill="#a53329" />
          <rect x="298" y="248" width="51" height="3" fill="#a53329" />
        </g>
        {/* cherry petals */}
        {[
          { x: 60, y: 130, r: 3 },
          { x: 150, y: 90, r: 2 },
          { x: 220, y: 165, r: 2.5 },
          { x: 300, y: 55, r: 3 },
          { x: 350, y: 130, r: 2 },
          { x: 40, y: 200, r: 2 },
          { x: 180, y: 40, r: 2.5 },
          { x: 260, y: 120, r: 2 },
        ].map((p) => (
          <circle
            key={`${p.x}-${p.y}`}
            cx={p.x}
            cy={p.y}
            r={p.r}
            fill="#f8b7be"
            opacity="0.85"
          />
        ))}
      </svg>
    </div>
  );
}

const POSTER_MAP: Record<PosterId, ComponentType> = {
  nihonbashi: PosterNihonbashi,
  satta: PosterSatta,
  numazu: PosterNumazu,
  mishima: PosterMishima,
  sanjo: PosterSanjo,
};

export function SectionPoster({ id }: { id: PosterId }) {
  const Poster = POSTER_MAP[id];
  return (
    <div className="study-stage w-full h-full min-h-[220px] md:min-h-[280px] flex items-center justify-center p-4 bg-parchment/40 border border-stone/25 rounded-sm overflow-hidden">
      <Poster />
    </div>
  );
}
