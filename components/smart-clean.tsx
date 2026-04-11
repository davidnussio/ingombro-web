import { Check } from "lucide-react";

const categories = [
  {
    name: "Node / Bun",
    folders: ["node_modules", ".parcel-cache", ".turbo"],
  },
  {
    name: "Frameworks",
    folders: [".next", ".nuxt", ".svelte-kit", ".astro", ".angular"],
  },
  {
    name: "Python",
    folders: ["__pycache__", ".venv", "venv", ".pytest_cache", ".mypy_cache"],
  },
  {
    name: "Rust / Java",
    folders: ["target", ".gradle"],
  },
  {
    name: "Elixir",
    folders: ["_build", "deps", ".elixir_ls"],
  },
  {
    name: "iOS / Flutter",
    folders: ["Pods", ".dart_tool", ".pub-cache"],
  },
  {
    name: "Build Artifacts",
    folders: ["build", "dist", ".cache"],
  },
  {
    name: "Infrastructure",
    folders: [".terraform", ".cdk.out", ".serverless"],
  },
];

export function SmartClean() {
  return (
    <section id="smart-clean" className="bg-[var(--card)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-4 py-2">
            <Check className="h-4 w-4 text-[var(--primary)]" />
            <span className="text-sm font-medium text-[var(--primary)]">Smart Clean</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-[var(--foreground)] md:text-4xl">
            Detect and remove automatically
          </h2>
          <p className="mx-auto max-w-2xl text-[var(--muted-foreground)]">
            Smart Clean automatically detects removable folders across your projects.
            Filter by project type, select items individually or in batch, and clean with a single click.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-4"
            >
              <h3 className="mb-3 text-sm font-semibold text-[var(--foreground)]">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.folders.map((folder) => (
                  <code
                    key={folder}
                    className="rounded bg-[var(--secondary)] px-2 py-1 font-mono text-xs text-[var(--muted-foreground)]"
                  >
                    {folder}
                  </code>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--muted-foreground)]">
            Plus AI/ML folders, design assets, video caches, music production files, and system junk files.
          </p>
        </div>
      </div>
    </section>
  );
}
