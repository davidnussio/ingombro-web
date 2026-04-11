"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary)]">
            <span className="text-sm font-bold text-[var(--primary-foreground)]">I</span>
          </div>
          <span className="text-lg font-semibold text-[var(--foreground)]">Ingombro</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#features" className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]">
            Features
          </Link>
          <Link href="#smart-clean" className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]">
            Smart Clean
          </Link>
          <Link href="#install" className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]">
            Install
          </Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="https://github.com/davidnussio/ingombro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </Link>
          <Link
            href="#install"
            className="rounded-lg bg-[var(--foreground)] px-4 py-2 text-sm font-medium text-[var(--background)] transition-opacity hover:opacity-90"
          >
            Download
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-[var(--foreground)]" />
          ) : (
            <Menu className="h-6 w-6 text-[var(--foreground)]" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--background)] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link href="#features" className="text-sm text-[var(--muted-foreground)]" onClick={() => setIsMenuOpen(false)}>
              Features
            </Link>
            <Link href="#smart-clean" className="text-sm text-[var(--muted-foreground)]" onClick={() => setIsMenuOpen(false)}>
              Smart Clean
            </Link>
            <Link href="#install" className="text-sm text-[var(--muted-foreground)]" onClick={() => setIsMenuOpen(false)}>
              Install
            </Link>
            <Link
              href="https://github.com/davidnussio/ingombro"
              target="_blank"
              className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
