"use client";

export function CarbonpaperPreview({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-24 h-16 shrink-0 overflow-hidden rounded-sm bg-parchment border border-stone/20 ${className}`}
      aria-hidden
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/studio/carbonpaper/preview.png"
        alt=""
        className="w-full h-full object-cover object-left-top"
      />
    </div>
  );
}
