"use client";

import { useState } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-washi">
      {/* Lightweight paper texture */}
      <div className="paper-texture" />
      
      {/* Ink wash cloud */}
      <svg 
        className="fixed top-8 right-8 sm:top-16 sm:right-16 w-48 sm:w-64 h-auto ink-wash-reveal delay-late"
        style={{ '--wash-opacity': '0.12' } as React.CSSProperties}
        viewBox="0 0 200 80"
        aria-hidden="true"
      >
        <ellipse cx="60" cy="40" rx="52" ry="28" fill="var(--ink)" opacity="0.25" />
        <ellipse cx="120" cy="35" rx="62" ry="32" fill="var(--ink)" opacity="0.2" />
        <ellipse cx="155" cy="42" rx="38" ry="22" fill="var(--ink)" opacity="0.15" />
      </svg>

      {/* Bottom gradient wash */}
      <div 
        className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink/[0.03] to-transparent pointer-events-none ink-wash-reveal delay-5"
        aria-hidden="true"
      />

      {/* Content */}
      <main className="relative z-10 flex items-start justify-start min-h-screen px-8 sm:px-16 md:px-24 lg:px-32 py-20 sm:py-24 md:py-20 lg:py-24">
        <div className="w-full max-w-2xl">
          
          {/* Hanko seal as menu trigger */}
          <div className="mb-12 sm:mb-16 seal-reveal delay-0 flex items-center gap-6">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative focus:outline-none focus-visible:ring-2 focus-visible:ring-umber focus-visible:ring-offset-4 focus-visible:ring-offset-washi rounded-sm group"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <svg 
                className={`w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 ${menuOpen ? 'rotate-0' : 'rotate-12 scale-95 opacity-70'} group-hover:scale-105`} 
                viewBox="0 0 44 44"
              >
                <rect x="3" y="3" width="38" height="38" rx="1" fill="none" stroke="var(--vermillion)" strokeWidth="2" opacity="0.85" />
                <g transform="translate(22, 22)">
                  <circle cx="0" cy="-5" r="4" fill="var(--vermillion)" opacity="0.8" />
                  <circle cx="-5" cy="3" r="4" fill="var(--vermillion)" opacity="0.8" />
                  <circle cx="5" cy="3" r="4" fill="var(--vermillion)" opacity="0.8" />
                  <circle cx="0" cy="0" r="2.5" fill="var(--washi)" />
                </g>
              </svg>
            </button>

            {/* Menu extending rightward */}
            <nav 
              className={`flex items-center gap-6 sm:gap-8 overflow-hidden transition-all duration-500 ease-out ${
                menuOpen ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
              }`}
              aria-hidden={!menuOpen}
            >
              <a 
                href="/" 
                className="font-serif text-lg sm:text-xl text-ink hover:text-umber transition-colors whitespace-nowrap"
                tabIndex={menuOpen ? 0 : -1}
              >
                home
              </a>
              <span className="text-stone">·</span>
              <span 
                className="font-serif text-lg sm:text-xl text-stone whitespace-nowrap cursor-default"
                tabIndex={menuOpen ? 0 : -1}
              >
                studio <span className="text-xs text-umber italic">(soon)</span>
              </span>
            </nav>
          </div>

          {/* Name */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-ink mb-10 sm:mb-14 leading-[1.1] ink-reveal delay-1">
            shreyank kadadi
          </h1>

          {/* Brushstroke divider */}
          <svg 
            className="w-24 sm:w-32 h-3 mb-10 sm:mb-14 brush-stroke-reveal delay-2"
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

          {/* Bio */}
          <div className="space-y-5 sm:space-y-6 mb-8 sm:mb-10">
            <p className="text-ink text-lg sm:text-xl md:text-2xl leading-relaxed ink-reveal-subtle delay-3">
              enthusiast of healthtech and emergent technologies. i currently do product at{" "}
              <a 
                href="https://heidihealth.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="link-brush"
              >
                heidi
              </a>.
            </p>
            <p className="text-brush-gray text-base sm:text-lg md:text-xl leading-relaxed ink-reveal-subtle delay-4">
              in quieter moments, i read widely, seek out good food, and think about art.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-8 sm:gap-10">
            <a 
              href="https://www.linkedin.com/in/shreyank-kadadi/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon social-reveal delay-5"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com/sk28832" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon social-reveal delay-6"
              aria-label="Twitter"
            >
              <FaXTwitter className="h-5 w-5" />
            </a>
            <a 
              href="mailto:shreyankkadadi@gmail.com" 
              className="social-icon social-reveal delay-7"
              aria-label="Email"
            >
              <FaEnvelope className="h-5 w-5" />
            </a>
          </div>
        </div>
      </main>

      {/* Plum blossom accent */}
      <svg 
        className="fixed bottom-12 left-8 sm:bottom-20 sm:left-16 w-16 sm:w-20 h-auto pointer-events-none ink-wash-reveal delay-very-late"
        style={{ '--wash-opacity': '0.18' } as React.CSSProperties}
        viewBox="0 0 60 60"
        aria-hidden="true"
      >
        <circle cx="30" cy="30" r="3" fill="var(--umber)" />
        <ellipse cx="30" cy="15" rx="8" ry="12" fill="var(--ink)" opacity="0.5" />
        <ellipse cx="30" cy="15" rx="8" ry="12" fill="var(--ink)" opacity="0.5" transform="rotate(72 30 30)" />
        <ellipse cx="30" cy="15" rx="8" ry="12" fill="var(--ink)" opacity="0.5" transform="rotate(144 30 30)" />
        <ellipse cx="30" cy="15" rx="8" ry="12" fill="var(--ink)" opacity="0.5" transform="rotate(216 30 30)" />
        <ellipse cx="30" cy="15" rx="8" ry="12" fill="var(--ink)" opacity="0.5" transform="rotate(288 30 30)" />
      </svg>
    </div>
  );
}
