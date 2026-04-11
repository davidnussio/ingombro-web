export function TechStack() {
  const stack = [
    { name: "Bun", description: "Runtime" },
    { name: "Electrobun", description: "Desktop Framework" },
    { name: "TypeScript", description: "Language" },
    { name: "Canvas", description: "Treemap Rendering" },
  ];

  return (
    <section className="border-t border-[var(--border)] bg-[var(--card)] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h3 className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-[var(--muted-foreground)]">
          Built with modern technologies
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {stack.map((tech) => (
            <div key={tech.name} className="text-center">
              <div className="text-lg font-semibold text-[var(--foreground)]">{tech.name}</div>
              <div className="text-sm text-[var(--muted-foreground)]">{tech.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
