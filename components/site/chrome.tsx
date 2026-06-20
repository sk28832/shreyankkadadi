"use client";

import Link from "next/link";
import { useState } from "react";

export function PaperTexture() {
  return <div className="paper-texture" aria-hidden="true" />;
}

export function InkWash() {
  return (
    <svg
      className="fixed top-8 right-8 sm:top-16 sm:right-16 w-48 sm:w-64 h-auto ink-wash-reveal delay-late pointer-events-none"
      style={{ "--wash-opacity": "0.12" } as React.CSSProperties}
      viewBox="0 0 200 80"
      aria-hidden="true"
    >
      <ellipse cx="60" cy="40" rx="52" ry="28" fill="var(--ink)" opacity="0.25" />
      <ellipse cx="120" cy="35" rx="62" ry="32" fill="var(--ink)" opacity="0.2" />
      <ellipse cx="155" cy="42" rx="38" ry="22" fill="var(--ink)" opacity="0.15" />
    </svg>
  );
}

export function BottomWash() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink/[0.03] to-transparent pointer-events-none ink-wash-reveal delay-5"
      aria-hidden="true"
    />
  );
}

export function PlumBlossom() {
  return (
    <svg
      className="fixed bottom-12 left-8 sm:bottom-20 sm:left-16 w-16 sm:w-20 h-auto pointer-events-none ink-wash-reveal delay-very-late"
      style={{ "--wash-opacity": "0.18" } as React.CSSProperties}
      viewBox="0 0 60 60"
      aria-hidden="true"
    >
      <circle cx="30" cy="30" r="3" fill="var(--umber)" />
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse
          key={deg}
          cx="30"
          cy="15"
          rx="8"
          ry="12"
          fill="var(--ink)"
          opacity="0.5"
          transform={`rotate(${deg} 30 30)`}
        />
      ))}
    </svg>
  );
}

export function BrushDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-24 sm:w-32 h-3 brush-stroke-reveal delay-2 ${className}`}
      viewBox="0 0 100 8"
      aria-hidden="true"
    >
      <path
        d="M0,4 Q5,2 15,4 T35,3 T55,5 T75,3 T95,4 L100,4"
        stroke="var(--brush-gray)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}

export function SiteNav({ active }: { active?: "home" | "studio" }) {
  const [menuOpen, setMenuOpen] = useState(true);

  const linkClass = (key: typeof active) =>
    `font-serif text-lg sm:text-xl whitespace-nowrap transition-colors ${
      active === key ? "text-ink" : "text-stone hover:text-umber"
    }`;

  return (
    <header className="mb-10 sm:mb-14 seal-reveal delay-0 flex items-center gap-6">
      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        className="relative focus:outline-none focus-visible:ring-2 focus-visible:ring-umber focus-visible:ring-offset-4 focus-visible:ring-offset-washi rounded-sm group"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <svg
          className={`w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 ${
            menuOpen ? "rotate-0" : "rotate-12 scale-95 opacity-70"
          } group-hover:scale-105`}
          viewBox="0 0 44 44"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="3"
            width="38"
            height="38"
            rx="1"
            fill="none"
            stroke="var(--vermillion)"
            strokeWidth="2"
            opacity="0.85"
          />
          <g transform="translate(22, 22)">
            <circle cx="0" cy="-5" r="4" fill="var(--vermillion)" opacity="0.8" />
            <circle cx="-5" cy="3" r="4" fill="var(--vermillion)" opacity="0.8" />
            <circle cx="5" cy="3" r="4" fill="var(--vermillion)" opacity="0.8" />
            <circle cx="0" cy="0" r="2.5" fill="var(--washi)" />
          </g>
        </svg>
      </button>

      <nav
        className={`flex items-center gap-6 sm:gap-8 overflow-hidden transition-all duration-500 ease-out ${
          menuOpen ? "max-w-xs opacity-100" : "max-w-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <Link
          href="/"
          className={linkClass("home")}
          tabIndex={menuOpen ? 0 : -1}
        >
          home
        </Link>
        <span className="text-stone">·</span>
        <Link
          href="/studio"
          className={linkClass("studio")}
          tabIndex={menuOpen ? 0 : -1}
        >
          studio
        </Link>
      </nav>
    </header>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-washi">
      <PaperTexture />
      <InkWash />
      <BottomWash />
      {children}
      <PlumBlossom />
    </div>
  );
}
