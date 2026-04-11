import { Github, Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-[var(--primary)]">
            <span className="text-xs font-bold text-[var(--primary-foreground)]">I</span>
          </div>
          <span className="text-sm text-[var(--muted-foreground)]">
            Ingombro - Disk Space Analyzer for macOS
          </span>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/davidnussio/ingombro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
          <span className="flex items-center gap-1 text-sm text-[var(--muted-foreground)]">
            Made with <Heart className="h-3 w-3 text-[var(--primary)]" /> by David Nussio
          </span>
        </div>
      </div>
    </footer>
  );
}
