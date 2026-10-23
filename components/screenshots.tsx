"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const screenshots = [
  {
    src: "/images/screenshots/treemap.webp",
    alt: "Ingombro's interactive treemap showing the space used by each project in the Developer folder",
    title: "Treemap & Directory List",
    description: "Proportional visualization of disk usage with drill-down navigation"
  },
  {
    src: "/images/screenshots/smart-clean.webp",
    alt: "Ingombro's Smart Clean: node_modules, .venv, target and .next folders to remove, each with a risk level",
    title: "Smart Clean",
    description: "Automatic detection of removable folders across your projects, each with a risk level"
  },
  {
    src: "/images/screenshots/details.webp",
    alt: "Folder details in Ingombro: size, files, largest file and type distribution",
    title: "Folder Details",
    description: "Size, dates, largest file and file type distribution of the selected folder"
  },
  {
    src: "/images/screenshots/home.webp",
    alt: "Ingombro's start screen: pick a folder to analyze, with recent scans and space freed",
    title: "Start Screen",
    description: "Pick a folder to analyze, with recent scans and the space freed so far"
  },
  {
    src: "/images/screenshots/tui-overview.webp",
    alt: "ingombro-cli in the terminal: folders sorted by size with proportional bars, next to Smart Clean and the details of the selected folder",
    title: "ingombro-cli",
    description: "The same analyzer in the terminal: folders by size, Smart Clean and details side by side"
  },
  {
    src: "/images/screenshots/tui-smart-clean.webp",
    alt: "Smart Clean in ingombro-cli: node_modules, .venv, target and .next folders selected, with the project, type and risk of the current item",
    title: "Smart Clean in the Terminal",
    description: "Mark folders from the keyboard and see the project, type and risk of each one"
  },
  {
    src: "/images/screenshots/tui-clean-confirm.webp",
    alt: "Smart Clean confirmation in ingombro-cli: folders to move to the Trash, each with its path and size",
    title: "Move to Trash",
    description: "Review every path and size before the folders go to the Trash"
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
          {/* All images stacked — crossfade via opacity */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]">
            {screenshots.map((shot, index) => (
              <Image
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 960px"
                className={`object-contain transition-opacity duration-500 ease-in-out ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
            ))}
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

          {/* Caption with fade */}
          <div className="mt-4 text-center transition-opacity duration-300">
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
