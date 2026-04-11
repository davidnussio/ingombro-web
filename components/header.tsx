"use client";

import { useState } from "react";
import { Menu, X, Github } from "lucide-react";
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
            <Github className="h-4 w-4" />
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
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
