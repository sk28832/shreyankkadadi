"use client";

import { BrushDivider } from "@/components/site/chrome";
import { GameEmbed } from "@/components/studio/kokoro/game-embed";
import { SectionPoster } from "@/components/studio/kokoro/section-posters";
import { StudyCarousel } from "@/components/studio/study-carousel";
import {
  HERO,
  KOKORO_SECTIONS,
  SOURCE_URL,
} from "@/lib/studio/kokoro-sections";

export function KokoroCarousel() {
  return (
    <StudyCarousel
      name="kokoro no tōkaidō"
      title="platformer along the tōkaidō"
      hero={HERO}
      sections={KOKORO_SECTIONS}
      renderVisual={(id) => <SectionPoster id={id} />}
      intro={
        <>
          <div className="mb-4 ink-reveal-subtle delay-4">
            <GameEmbed />
          </div>
          <p className="text-xs text-stone text-center mb-16 font-serif">
            click the game to focus · arrows to move · space to jump · shift to
            dash · m mutes
          </p>
          <BrushDivider className="mb-10 sm:mb-14" />
        </>
      }
      cta={{
        body: "built in godot 4 with public-domain hiroshige scans, sunny land sprites, and kenney sfx. everything ships cc0-friendly.",
        href: SOURCE_URL,
        label: "source on github",
        note: "five stations, one dash, one wall-jump, one bell at each torii.",
      }}
    />
  );
}
