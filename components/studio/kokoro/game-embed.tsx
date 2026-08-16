"use client";

import { useEffect, useRef, useState } from "react";
import { GAME_URL } from "@/lib/studio/kokoro-sections";

export function GameEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    // If the game bundle hasn't been exported into public/ yet, HEAD its
    // index.html so we can show a friendlier "coming soon" state instead
    // of a raw 404 iframe.
    let cancelled = false;
    fetch(GAME_URL, { method: "HEAD" })
      .then((res) => {
        if (cancelled) return;
        if (!res.ok) setFailed(true);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (failed) {
    return (
      <div className="study-stage w-full aspect-video flex flex-col items-center justify-center gap-3 p-8 bg-parchment/40 border border-stone/25 rounded-sm">
        <p className="font-serif text-lg text-ink">the road is being paved</p>
        <p className="text-brush-gray text-sm text-center max-w-md">
          the web build is not published yet. check back soon — or run the game
          locally from its godot source repo.
        </p>
      </div>
    );
  }

  return (
    <div className="study-stage relative w-full aspect-video bg-ink/95 border border-stone/25 rounded-sm overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-serif text-sm text-parchment/70 animate-pulse">
            loading the road…
          </span>
        </div>
      )}
      <iframe
        ref={iframeRef}
        src={GAME_URL}
        title="Kokoro no Tōkaidō"
        className="absolute inset-0 w-full h-full"
        allow="autoplay; fullscreen; cross-origin-isolated"
        allowFullScreen
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
