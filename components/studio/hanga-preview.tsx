"use client";

const LAYERS = [
  "/studio/hanga/keyblock.png",
  "/studio/hanga/layer_05.png",
  "/studio/hanga/layer_08.png",
  "/studio/hanga/original.png",
];

export function HangaPreview({ className = "" }: { className?: string }) {
  return (
    <div
      className={`hanga-preview relative w-full h-full overflow-hidden bg-parchment/80 ${className}`}
      aria-hidden
    >
      {LAYERS.map((src, i) => (
        <div
          key={src}
          className={`hanga-preview-layer hanga-preview-layer-${i} absolute inset-0`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
}
