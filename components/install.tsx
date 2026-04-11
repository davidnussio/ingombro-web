"use client";

import { useState } from "react";
import { Check, Copy, Download, Terminal } from "lucide-react";

export function Install() {
  const [copied, setCopied] = useState(false);

  const brewCommand = "brew install davidnussio/tap/ingombro";

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(brewCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="install" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--foreground)] md:text-4xl">
            Get Started
          </h2>
          <p className="text-[var(--muted-foreground)]">
            Install Ingombro and start reclaiming your disk space today.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Homebrew */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-[var(--secondary)] p-2">
                <Terminal className="h-5 w-5 text-[var(--primary)]" />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--foreground)]">Homebrew</h3>
                <p className="text-sm text-[var(--muted-foreground)]">Recommended</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-[var(--background)] p-3">
              <code className="flex-1 overflow-x-auto font-mono text-sm text-[var(--muted-foreground)]">
                {brewCommand}
              </code>
              <button
                onClick={copyToClipboard}
                className="shrink-0 rounded-md p-2 text-[var(--muted-foreground)] transition-colors hover:bg-[var(--secondary)] hover:text-[var(--foreground)]"
                aria-label="Copy command"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-[var(--primary)]" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>
            <p className="mt-4 text-xs text-[var(--muted-foreground)]">
              Use <code className="rounded bg-[var(--secondary)] px-1">--no-quarantine</code> flag if macOS blocks the app.
            </p>
          </div>

          {/* Manual Download */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-[var(--secondary)] p-2">
                <Download className="h-5 w-5 text-[var(--primary)]" />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--foreground)]">Manual Download</h3>
                <p className="text-sm text-[var(--muted-foreground)]">Direct from GitHub</p>
              </div>
            </div>
            <a
              href="https://github.com/davidnussio/ingombro/releases/download/v1.0.0/stable-macos-arm64-Ingombro.dmg"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--secondary)]"
            >
              <Download className="h-4 w-4" />
              Download .dmg (Apple Silicon)
            </a>
            <p className="mt-4 text-xs text-[var(--muted-foreground)]">
              Drag the app into Applications folder after downloading.
            </p>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-8 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
          <p className="text-sm text-amber-200">
            <strong>macOS Security Notice:</strong> Ingombro is not signed with an Apple Developer certificate.
            If macOS shows a security warning, run:{" "}
            <code className="rounded bg-[var(--background)] px-1.5 py-0.5 font-mono text-xs">
              xattr -d com.apple.quarantine /Applications/Ingombro.app
            </code>
          </p>
        </div>
      </div>
    </section>
  );
}
