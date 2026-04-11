import { Apple, Terminal } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--primary)]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2">
          <Apple className="h-4 w-4 text-[var(--muted-foreground)]" />
          <span className="text-sm text-[var(--muted-foreground)]">macOS App</span>
        </div>

        {/* Main headline */}
        <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-[var(--foreground)] md:text-6xl lg:text-7xl">
          Reclaim Your
          <br />
          <span className="text-[var(--primary)]">Disk Space</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-[var(--muted-foreground)] md:text-xl">
          Analyze disk usage with an interactive treemap and clean up bloated project folders like{" "}
          <code className="rounded bg-[var(--secondary)] px-1.5 py-0.5 font-mono text-[var(--primary)]">node_modules</code>,{" "}
          <code className="rounded bg-[var(--secondary)] px-1.5 py-0.5 font-mono text-[var(--primary)]">target</code>,{" "}
          <code className="rounded bg-[var(--secondary)] px-1.5 py-0.5 font-mono text-[var(--primary)]">.venv</code>, and more.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#install"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--foreground)] px-6 py-3 text-base font-medium text-[var(--background)] transition-opacity hover:opacity-90"
          >
            Download for macOS
          </Link>
          <Link
            href="https://github.com/davidnussio/ingombro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-6 py-3 text-base font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--secondary)]"
          >
            View on GitHub
          </Link>
        </div>

        {/* Install command */}
        <div className="mt-10 inline-flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3">
          <Terminal className="h-4 w-4 text-[var(--muted-foreground)]" />
          <code className="font-mono text-sm text-[var(--muted-foreground)]">
            brew install davidnussio/tap/ingombro
          </code>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-[var(--border)] p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-[var(--muted-foreground)]" />
        </div>
      </div>
    </section>
  );
}
