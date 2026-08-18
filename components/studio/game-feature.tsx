import Link from "next/link";
import { GAME_URL } from "@/lib/studio/kokoro-sections";
import type { StudioGame } from "@/lib/studio/projects";

const PETALS = [
  { left: "12%", delay: "0s", duration: "11s" },
  { left: "28%", delay: "2.6s", duration: "13s" },
  { left: "47%", delay: "5.1s", duration: "10s" },
  { left: "66%", delay: "1.4s", duration: "14s" },
  { left: "84%", delay: "7.2s", duration: "12s" },
];

function KokoroStage() {
  return (
    <div
      className="absolute inset-0 overflow-hidden bg-[#1a2544]"
      aria-hidden
    >
      <div className="kokoro-stage-layer kokoro-far">
        <svg
          viewBox="0 0 96 72"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="20" cy="14" r="0.5" fill="#f3ecd3" opacity="0.7" />
          <circle cx="33" cy="9" r="0.4" fill="#f3ecd3" opacity="0.5" />
          <circle cx="56" cy="11" r="0.45" fill="#f3ecd3" opacity="0.6" />
          <circle cx="79" cy="33" r="0.4" fill="#f3ecd3" opacity="0.45" />
          <g className="kokoro-moon">
            <circle cx="68" cy="18" r="11" fill="#f3ecd3" opacity="0.12" />
            <circle cx="68" cy="18" r="6" fill="#f3ecd3" />
          </g>
          <polygon points="0,58 20,44 40,58" fill="#2b3557" />
          <polygon points="58,58 78,46 96,58" fill="#2b3557" />
        </svg>
      </div>

      <div className="kokoro-stage-layer kokoro-mid">
        <div className="kokoro-drift absolute inset-0">
          <svg
            viewBox="0 0 96 72"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <polygon points="10,58 48,22 86,58" fill="#3a4468" />
            <polygon
              points="43,27 48,22 53,27 51,29 49,26.5 48,29 46.5,26.5 45,28.5"
              fill="#f5efd8"
            />
          </svg>
        </div>
      </div>

      <div className="kokoro-stage-layer kokoro-near">
        <svg
          viewBox="0 0 96 72"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <rect x="0" y="58" width="96" height="14" fill="#161f39" />
          <rect x="0" y="58" width="96" height="0.6" fill="#26314f" />
          <g fill="#a53329">
            <rect x="37" y="47" width="22" height="1.6" />
            <rect x="39.5" y="49.6" width="17" height="1" />
            <rect x="40" y="47" width="1.8" height="11" />
            <rect x="54.2" y="47" width="1.8" height="11" />
          </g>
          <rect x="24" y="54.6" width="1.5" height="3.4" fill="#0f1729" />
          <circle cx="24.75" cy="53.6" r="1" fill="#0f1729" />
        </svg>
      </div>

      {PETALS.map((petal) => (
        <span
          key={petal.left}
          className="kokoro-petal"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
          }}
        />
      ))}
    </div>
  );
}

export function GameFeature({
  game,
  delay = "",
}: {
  game: StudioGame;
  delay?: string;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-sm border border-stone/30 ink-reveal-subtle ${delay}`}
    >
      <div className="grid md:grid-cols-[1.1fr_1fr]">
        <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[340px]">
          <KokoroStage />
        </div>

        <div className="flex flex-col justify-center gap-3 bg-[rgba(238,232,213,0.45)] p-6 sm:p-8">
          <div className="flex items-baseline justify-between gap-3">
            <p className="font-serif text-xs sm:text-sm text-stone">
              {game.name}
            </p>
            <p className="font-serif text-xs text-stone tabular-nums">
              {game.year}
            </p>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl leading-[1.15] text-ink">
            <Link
              href={game.href}
              className="transition-colors motion-fast after:absolute after:inset-0 group-hover:text-[color:var(--umber)]"
            >
              {game.title}
            </Link>
          </h3>

          <p className="text-sm sm:text-base leading-relaxed text-brush-gray">
            {game.summary}
          </p>
          <p className="text-sm leading-relaxed text-brush-gray">
            {game.detail}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="font-serif text-sm text-ink transition-colors motion-fast group-hover:text-[color:var(--umber)]">
              play it in the browser →
            </span>
            <a
              href={GAME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 font-serif text-sm text-stone hover:text-umber transition-colors motion-fast"
            >
              open fullscreen ↗
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
