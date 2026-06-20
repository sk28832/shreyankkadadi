"use client";

import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  BrushDivider,
  PageShell,
  SiteNav,
} from "@/components/site/chrome";

export default function Home() {
  return (
    <PageShell>
      <main className="relative z-10 flex items-start justify-start min-h-screen px-8 sm:px-16 md:px-24 lg:px-32 py-20 sm:py-24 md:py-20 lg:py-24">
        <div className="w-full max-w-2xl">
          <SiteNav active="home" />

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-ink mb-10 sm:mb-14 leading-[1.1] ink-reveal delay-1">
            shreyank kadadi
          </h1>

          <BrushDivider className="mb-10 sm:mb-14" />

          <div className="space-y-5 sm:space-y-6 mb-8 sm:mb-10">
            <p className="text-ink text-lg sm:text-xl md:text-2xl leading-relaxed ink-reveal-subtle delay-3">
              enthusiast of healthtech and emergent technologies. i currently do
              product at{" "}
              <a
                href="https://heidihealth.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-brush"
              >
                heidi
              </a>
              .
            </p>
            <p className="text-brush-gray text-base sm:text-lg md:text-xl leading-relaxed ink-reveal-subtle delay-4">
              in quieter moments, i read widely, seek out good food, and think
              about art.
            </p>
          </div>

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
    </PageShell>
  );
}
