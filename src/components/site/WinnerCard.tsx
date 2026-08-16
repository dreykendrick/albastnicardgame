import { Medal, Trophy } from "lucide-react";
import type { Winner } from "@/data/albastini";
import { useI18n, type TKey } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const positionMeta: Record<
  number,
  { label: TKey; ring: string; badge: string; accent: string }
> = {
  1: {
    label: "win.p1",
    ring: "ring-2 ring-alba-gold/70",
    badge: "bg-alba-gold text-alba-ink",
    accent: "text-alba-gold",
  },
  2: {
    label: "win.p2",
    ring: "ring-1 ring-foreground/25",
    badge: "bg-foreground/10 text-foreground",
    accent: "text-foreground/70",
  },
  3: {
    label: "win.p3",
    ring: "ring-1 ring-alba-red/40",
    badge: "bg-alba-red/15 text-alba-red",
    accent: "text-alba-red",
  },
};

export function WinnerCard({ winner, featured = false }: { winner: Winner; featured?: boolean }) {
  const { t } = useI18n();
  const meta = positionMeta[winner.position] ?? positionMeta[3]!;
  const label = t(meta.label);

  return (
    <article
      className={cn(
        "group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift",
        meta.ring,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-secondary",
          featured ? "aspect-[4/5]" : "aspect-[4/5]",
        )}
      >
        {winner.image ? (
          <img
            src={winner.image}
            alt={`${label} — ${winner.name}, ${winner.tournament}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="grid h-full w-full place-items-center">
            <span className="font-card text-6xl text-muted-foreground">
              {winner.name.charAt(0)}
            </span>
          </div>
        )}
        <span
          className={cn(
            "eyebrow absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.55rem]",
            meta.badge,
          )}
        >
          {winner.position === 1 ? <Trophy className="size-3" /> : <Medal className="size-3" />}
          {label}
        </span>
      </div>

      <div className={cn("flex flex-1 flex-col", featured ? "p-6 sm:p-7" : "p-5")}>
        <span className={cn("eyebrow text-[0.55rem]", meta.accent)}>
          {winner.position === 1 ? "01" : winner.position === 2 ? "02" : "03"} · {label}
        </span>
        <h3
          className={cn(
            "display-xl mt-2 leading-tight",
            featured ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl",
          )}
        >
          {winner.name}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground">{winner.tournament}</p>
        <p className="eyebrow mt-1 text-[0.55rem] text-muted-foreground">
          {winner.date}
          {winner.city ? ` · ${winner.city}` : ""}
        </p>
      </div>
    </article>
  );
}
