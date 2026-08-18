"use client";

export function InteractomesPreview({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-washi ${className}`}
      aria-hidden
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/studio/interactomes/network.png"
        alt=""
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}
