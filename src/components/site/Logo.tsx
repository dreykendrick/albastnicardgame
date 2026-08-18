import { cn } from "@/lib/utils";
import logoAsset from "@/assets/albastini-logo.png.asset.json";

/**
 * Albastini wordmark — official logo mark with the Albastini wordmark.
 */
export function Logo({ className, showTag = false }: { className?: string; showTag?: boolean }) {
  return (
    <span className={cn("group inline-flex items-center gap-2.5", className)}>
      <img
        src={logoAsset.url}
        alt="Albastini logo"
        width={36}
        height={36}
        className="size-9 shrink-0 object-cover transition-transform duration-300 group-hover:rotate-12"
      />
      <span className="flex flex-col leading-none">
        <span className="wordmark text-xl sm:text-2xl">Albastini</span>
        {showTag ? (
          <span className="eyebrow mt-1 text-[0.55rem] text-muted-foreground uppercase">INGIA UWANJANI TIUCHEZE</span>
        ) : null}
      </span>
    </span>
  );
}
