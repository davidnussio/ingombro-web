"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const screenshots = [
  {
    src: "https://raw.githubusercontent.com/davidnussio/ingombro/refs/heads/main/docs/00-home.png",
    alt: "Ingombro Home Screen",
    title: "Home Screen",
    description: "Clean interface to start scanning any directory"
  },
  {
    src: "https://raw.githubusercontent.com/davidnussio/ingombro/refs/heads/main/docs/01-treemap.png",
    alt: "Interactive Treemap",
    title: "Interactive Treemap",
    description: "Proportional visualization of disk usage with drill-down navigation"
  },
  {
    src: "https://raw.githubusercontent.com/davidnussio/ingombro/refs/heads/main/docs/02-autocomplete.png",
    alt: "Path Autocomplete",
    title: "Path Autocomplete",
    description: "Instant directory suggestions with ~ expansion support"
  },
  {
    src: "https://raw.githubusercontent.com/davidnussio/ingombro/refs/heads/main/docs/03-preview.png",
    alt: "File Preview",
    title: "File Preview",
    description: "Detailed info panel with size, dates, and file type distribution"
  },
  {
    src: "https://raw.githubusercontent.com/davidnussio/ingombro/refs/heads/main/docs/04-smart-clean-all.png",
    alt: "Smart Clean All Items",
    title: "Smart Clean",
    description: "Automatic detection of removable folders across your projects"
  },
  {
    src: "https://raw.githubusercontent.com/davidnussio/ingombro/refs/heads/main/docs/05-smart-clean-filtered.png",
    alt: "Smart Clean Filtered",
    title: "Smart Clean Filtered",
    description: "Filter by project type and select items to clean"
  }
];

export function Screenshots() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % screenshots.length);
  const prev = () => setCurrent((prev) => (prev - 1 + screenshots.length) % screenshots.length);

  return (
    <section id="screenshots" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--foreground)] md:text-4xl">
            See It in Action
          </h2>
          <p className="text-[var(--muted-foreground)]">
            Explore the features that make disk management effortless.
          </p>
        </div>

        <div className="relative">
          {/* Main Image */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]">
            <Image
              src={screenshots[current].src}
              alt={screenshots[current].alt}
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-[var(--background)]/80 p-2 text-[var(--foreground)] backdrop-blur-sm transition-colors hover:bg-[var(--secondary)]"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-[var(--background)]/80 p-2 text-[var(--foreground)] backdrop-blur-sm transition-colors hover:bg-[var(--secondary)]"
            aria-label="Next screenshot"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Caption */}
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold text-[var(--foreground)]">
              {screenshots[current].title}
            </h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              {screenshots[current].description}
            </p>
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === current
                    ? "bg-[var(--primary)]"
                    : "bg-[var(--muted-foreground)]/30 hover:bg-[var(--muted-foreground)]/50"
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
