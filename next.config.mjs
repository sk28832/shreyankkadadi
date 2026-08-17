/** @type {import('next').NextConfig} */
const nextConfig = {
  // Godot 4 web builds need SharedArrayBuffer, which requires COOP + COEP
  // on both the embedding page and the iframe assets. Scoped to /studio/kokoro
  // and /games/kokoro/* so the rest of the site (Google Fonts, etc.) is
  // unaffected. Mirrors vercel.json for production parity.
  async headers() {
    const isolation = [
      { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
      { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
    ];
    return [
      {
        source: "/games/kokoro/:path*",
        headers: [
          ...isolation,
          { key: "Cross-Origin-Resource-Policy", value: "cross-origin" },
        ],
      },
      {
        source: "/studio/kokoro",
        headers: isolation,
      },
    ];
  },
};

export default nextConfig;
