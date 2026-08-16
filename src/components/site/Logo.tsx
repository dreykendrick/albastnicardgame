import { cn } from "@/lib/utils";

/**
 * Albastini wordmark — italic heavy type with the points-chip "A" mark,
 * built from brand tokens (no bitmap needed, stays crisp at any size).
 */
export function Logo({ className, showTag = false }: { className?: string; showTag?: boolean }) {
  return (
    <span className={cn("group inline-flex items-center gap-2.5", className)}>
      <span className="relative grid size-9 shrink-0 place-items-center rounded-full bg-alba-ink ring-2 ring-primary transition-transform duration-300 group-hover:rotate-12">
        <span className="font-card text-lg leading-none text-primary">A</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="wordmark text-xl sm:text-2xl">Albastini</span>
        {showTag ? (
          <span className="eyebrow mt-1 text-[0.55rem] text-muted-foreground">Safari Edition</span>
        ) : null}
      </span>
    </span>
  );
}
