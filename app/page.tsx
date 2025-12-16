"use client";

import { useState, useEffect, useCallback } from "react";

function BreathingGame({ onComplete, onSkip }: { onComplete: () => void; onSkip: () => void }) {
  const [phase, setPhase] = useState<'ready' | 'inhale' | 'hold-in' | 'exhale' | 'hold-out' | 'done'>('ready');
  const [progress, setProgress] = useState(0);
  const [cycle, setCycle] = useState(1);
  const totalCycles = 2;

  useEffect(() => {
    const startTimer = setTimeout(() => setPhase('inhale'), 600);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (phase === 'ready' || phase === 'done') return;

    const config: Record<string, { duration: number; max: number }> = {
      'inhale': { duration: 40, max: 100 },
      'hold-in': { duration: 60, max: 35 },
      'exhale': { duration: 40, max: 100 },
      'hold-out': { duration: 60, max: 25 },
    };

    const { duration, max } = config[phase];

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev + 1 >= max) {
          if (phase === 'inhale') setPhase('hold-in');
          else if (phase === 'hold-in') setPhase('exhale');
          else if (phase === 'exhale') setPhase('hold-out');
          else if (phase === 'hold-out') {
            if (cycle >= totalCycles) {
              setPhase('done');
            } else {
              setCycle(c => c + 1);
              setPhase('inhale');
            }
          }
          return 0;
        }
        return prev + 1;
      });
    }, duration);

    return () => clearInterval(interval);
  }, [phase, cycle]);

  useEffect(() => {
    if (phase === 'done') {
      const timer = setTimeout(onComplete, 600);
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  const getScale = () => {
    if (phase === 'inhale') return 0.55 + (progress / 100) * 0.45;
    if (phase === 'hold-in') return 1;
    if (phase === 'exhale') return 1 - (progress / 100) * 0.45;
    if (phase === 'hold-out') return 0.55;
    return 0.55;
  };

  const getText = () => {
    if (phase === 'ready' || phase === 'done') return '...';
    if (phase === 'inhale') return 'breathe in';
    if (phase === 'hold-in' || phase === 'hold-out') return 'hold';
    if (phase === 'exhale') return 'breathe out';
    return '';
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#f6f4ee] flex flex-col items-center justify-center select-none px-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-stone-300/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-8">
        <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" className="text-stone-400" />
        </svg>
        
        <svg 
          className="absolute inset-0 w-full h-full transition-transform duration-200 ease-out"
          style={{ transform: `scale(${getScale()})` }}
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="215 38" className="text-stone-600" />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-2.5 h-2.5 rounded-full transition-all duration-400 ${
            phase === 'hold-in' || phase === 'hold-out' ? 'bg-rose-400 scale-110' : 'bg-stone-400/40'
          }`} />
        </div>
      </div>

      <p className={`font-serif text-2xl sm:text-3xl tracking-wide mb-3 transition-colors duration-300 ${
        phase === 'hold-in' || phase === 'hold-out' ? 'text-rose-700/80' : 'text-stone-600'
      }`}>
        {getText()}
      </p>
      
      <p className="text-stone-400 font-serif text-lg tracking-widest">
        {cycle}
      </p>

      <button onClick={onSkip} className="absolute bottom-14 text-stone-400 hover:text-stone-500 transition-colors text-sm tracking-wider">
        skip
      </button>
    </div>
  );
}

export default function Home() {
  const [showGame, setShowGame] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (localStorage.getItem('breathingSkipped')) {
      setRevealed(true);
    } else {
      setShowGame(true);
    }
  }, []);

  const handleComplete = useCallback(() => {
    setTransitioning(true);
    setTimeout(() => {
      setShowGame(false);
      setTimeout(() => setRevealed(true), 100);
    }, 800);
  }, []);

  const handleSkip = useCallback(() => {
    localStorage.setItem('breathingSkipped', 'true');
    setShowGame(false);
    setRevealed(true);
  }, []);

  const handleReplay = useCallback(() => {
    localStorage.removeItem('breathingSkipped');
    setRevealed(false);
    setTransitioning(false);
    setShowGame(true);
  }, []);

  if (!isClient) return <div className="min-h-screen bg-[#f6f4ee]" />;

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#f6f4ee]">
      
      {showGame && (
        <div className={`transition-opacity duration-800 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
          <BreathingGame onComplete={handleComplete} onSkip={handleSkip} />
        </div>
      )}

      {/* Sumi-e Background - gentle, non-jarring */}
      <div className={`fixed inset-0 pointer-events-none transition-opacity duration-[2500ms] ${
        revealed ? 'opacity-100' : 'opacity-0'
      }`}>
        
        {/* Ink wash - top */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-stone-400/[0.04] via-stone-300/[0.02] to-transparent" />

        {/* Gentle mist */}
        <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-stone-300/[0.03] rounded-full blur-3xl animate-mist-drift" />
        <div className="absolute bottom-[30%] left-[5%] w-48 h-48 bg-rose-200/[0.02] rounded-full blur-3xl animate-mist-float" />

        {/* Lungs / Branches - gentle pulse */}
        <svg className="absolute top-[8%] right-[4%] sm:right-[7%] w-44 h-52 sm:w-56 sm:h-64 animate-gentle-breathe" viewBox="0 0 200 230">
          <path d="M100,8 L100,55" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" className="text-stone-500/30" />
          <path d="M100,55 Q72,78 48,95" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" className="text-stone-500/25" />
          <path d="M48,95 Q28,110 18,138 M48,95 Q42,122 35,152 M48,95 Q58,128 48,165" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" className="text-stone-400/20" />
          <path d="M100,55 Q128,78 152,95" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" className="text-stone-500/25" />
          <path d="M152,95 Q172,110 182,138 M152,95 Q158,122 165,152 M152,95 Q142,128 152,165" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" className="text-stone-400/20" />
          <circle cx="14" cy="148" r="12" fill="currentColor" className="text-stone-400/15" />
          <circle cx="32" cy="168" r="14" fill="currentColor" className="text-stone-400/12" />
          <circle cx="48" cy="182" r="10" fill="currentColor" className="text-stone-400/10" />
          <circle cx="186" cy="148" r="12" fill="currentColor" className="text-stone-400/15" />
          <circle cx="168" cy="168" r="14" fill="currentColor" className="text-stone-400/12" />
          <circle cx="152" cy="182" r="10" fill="currentColor" className="text-stone-400/10" />
        </svg>

        {/* Bamboo / Spine */}
        <svg className="absolute left-[6%] sm:left-[9%] top-[15%] w-6 h-[55%] animate-bamboo-sway" viewBox="0 0 20 280">
          <line x1="10" y1="0" x2="10" y2="280" stroke="currentColor" strokeWidth="3" className="text-stone-500/20" />
          {[28, 58, 88, 118, 148, 178, 208, 238].map((y, i) => (
            <g key={i}>
              <ellipse cx="10" cy={y} rx="8" ry="3" fill="currentColor" className="text-stone-500/22" />
              {i % 2 === 0 && <path d={`M10,${y} Q22,${y-10} 18,${y-20}`} stroke="currentColor" strokeWidth="1" fill="none" className="text-stone-400/15" />}
            </g>
          ))}
        </svg>

        {/* Enso */}
        <svg className="absolute bottom-[8%] right-[8%] sm:right-[12%] w-40 h-40 sm:w-48 sm:h-48 animate-enso-rotate" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="220 35" className="text-stone-700/[0.06]" />
        </svg>

        {/* Water / Blood flow */}
        <svg className="absolute bottom-[18%] left-0 w-full h-12" viewBox="0 0 400 30" preserveAspectRatio="none">
          <path d="M-20,15 Q20,8 60,15 T140,15 T220,15 T300,15 T380,15 T460,15" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-stone-600/[0.08] animate-water-flow" />
        </svg>

        {/* Floating petals - very gentle */}
        <div className="absolute top-[32%] right-[28%] w-2.5 h-2.5 rounded-full bg-stone-400/15 animate-petal-gentle-1" />
        <div className="absolute top-[48%] right-[18%] w-2 h-2 rounded-full bg-stone-400/12 animate-petal-gentle-2" />
        <div className="absolute top-[38%] left-[28%] w-2 h-2 rounded-full bg-rose-300/10 animate-petal-gentle-3" />
      </div>

      {/* Content */}
      <main className={`relative z-10 flex items-center justify-center min-h-screen px-6 sm:px-8 py-12 transition-all duration-[2000ms] ease-out ${
        revealed ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className={`max-w-xl w-full transition-transform duration-[2000ms] ease-out ${revealed ? 'translate-y-0' : 'translate-y-6'}`}>
          
          {/* Seal - plum blossom / health cross */}
          <svg className="w-11 h-11 sm:w-12 sm:h-12 mb-8 sm:mb-10" viewBox="0 0 48 48">
            <rect x="4" y="4" width="40" height="40" rx="3" fill="#a63d3d" opacity="0.88" />
            <g transform="translate(24, 24)">
              <circle cx="0" cy="-7" r="4.5" fill="#f6f4ee" opacity="0.85" />
              <circle cx="-7" cy="0" r="4.5" fill="#f6f4ee" opacity="0.85" />
              <circle cx="7" cy="0" r="4.5" fill="#f6f4ee" opacity="0.85" />
              <circle cx="0" cy="7" r="4.5" fill="#f6f4ee" opacity="0.85" />
              <circle cx="0" cy="0" r="3" fill="#d4a54a" opacity="0.75" />
            </g>
          </svg>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-stone-900 mb-8 sm:mb-10">
            shreyank kadadi
          </h1>

          <div className="space-y-3 sm:space-y-4 text-stone-600 text-lg sm:text-xl leading-relaxed mb-8 sm:mb-10">
            <p>
              i do product at{" "}
              <a href="https://heidihealth.com" target="_blank" rel="noopener noreferrer" className="text-stone-900 hover:text-rose-700 transition-colors border-b border-stone-300 hover:border-rose-400">
                heidi
              </a>.
            </p>
            <p className="text-stone-500">
              in quieter moments, i read widely, seek out good food, and think about art.
            </p>
          </div>

          {/* Brush stroke divider */}
          <svg className="w-20 sm:w-24 h-4 mb-6 sm:mb-8" viewBox="0 0 80 12">
            <path d="M0,6 Q20,3 40,6 T80,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" className="text-stone-500/25" />
          </svg>

          {/* Icons - custom healthcare x rinpa inspired */}
          <div className="flex items-center gap-6 sm:gap-7">
            {/* LinkedIn - as connected nodes */}
            <a href="https://www.linkedin.com/in/shreyank-kadadi/" target="_blank" rel="noopener noreferrer" className="group p-2 -m-2">
              <svg className="w-6 h-6 text-stone-500 group-hover:text-stone-900 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>

            {/* Twitter/X - as a brushstroke bird */}
            <a href="https://twitter.com/sk28832" target="_blank" rel="noopener noreferrer" className="group p-2 -m-2">
              <svg className="w-6 h-6 text-stone-500 group-hover:text-stone-900 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Email - as an envelope/letter */}
            <a href="mailto:shreyankkadadi@gmail.com" className="group p-2 -m-2">
              <svg className="w-6 h-6 text-stone-500 group-hover:text-stone-900 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 6L12 13L2 6" />
              </svg>
            </a>

            {/* Replay - as an enso/cycle */}
            <button onClick={handleReplay} className="group p-2 -m-2">
              <svg className="w-6 h-6 text-stone-500 group-hover:text-rose-600 transition-all duration-500 group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="9" strokeDasharray="50 8" />
                <path d="M12 3v3M12 18v3" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
