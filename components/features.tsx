import { LayoutGrid, Search, Eye, Sparkles, Database, Globe } from "lucide-react";

const features = [
  {
    icon: LayoutGrid,
    title: "Interactive Treemap",
    description:
      "Proportional visualization of disk usage. Click any folder to drill down with smooth transition animations.",
  },
  {
    icon: Search,
    title: "Path Autocomplete",
    description:
      "Start typing a path and get instant directory suggestions. Supports ~ expansion and nested paths.",
  },
  {
    icon: Eye,
    title: "File Preview",
    description:
      "Side panel with detailed info: size, dates, largest file, file type distribution chart, and text/image previews.",
  },
  {
    icon: Sparkles,
    title: "Smart Clean",
    description:
      "Automatic detection of removable folders across your projects. Filter by type and clean with a single click.",
  },
  {
    icon: Database,
    title: "Cached Results",
    description:
      "Scan results are cached for instant loading. Reopening a directory from cache loads without re-scanning.",
  },
  {
    icon: Globe,
    title: "7 Languages",
    description:
      "Italiano, English, Espanol, Francais, Deutsch, Portugues, and Japanese. Auto-detection with manual override.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--foreground)] md:text-4xl">
            Everything you need to{" "}
            <span className="text-[var(--primary)]">clean up</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[var(--muted-foreground)]">
            Powerful features designed for developers who want to reclaim disk space efficiently.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 transition-colors hover:border-[var(--primary)]/50"
            >
              <div className="mb-4 inline-flex rounded-lg bg-[var(--secondary)] p-3">
                <feature.icon className="h-6 w-6 text-[var(--primary)]" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[var(--foreground)]">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
