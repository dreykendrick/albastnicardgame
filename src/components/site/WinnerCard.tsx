import { Medal, Trophy } from "lucide-react";
import type { Winner } from "@/data/albastini";
import { useI18n, type TKey } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const positionMeta: Record<number, { label: TKey; ring: string; badge: string }> = {
  1: { label: "win.champion", ring: "ring-primary", badge: "bg-primary text-alba-ink" },
  2: {
    label: "win.runnerup",
    ring: "ring-border",
    badge: "bg-foreground/10 text-foreground",
  },
  3: {
    label: "win.third",
    ring: "ring-alba-red/40",
    badge: "bg-alba-red/15 text-alba-red",
  },
};

export function WinnerCard({ winner }: { winner: Winner }) {
  const { t } = useI18n();
  const meta = positionMeta[winner.position];
  const label = meta ? t(meta.label) : t("win.finalist");

  return (
    <article
      className={cn(
        "group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card ring-1 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift",
        meta?.ring ?? "ring-border",
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        {winner.image ? (
          <img
            src={winner.image}
            alt={winner.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
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
            meta?.badge ?? "bg-foreground/10 text-foreground",
          )}
        >
          {winner.position === 1 ? (
            <Trophy className="size-3" />
          ) : (
            <Medal className="size-3" />
          )}
          {label}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="display-xl text-lg leading-tight">{winner.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{winner.tournament}</p>
        <p className="eyebrow mt-1 text-[0.55rem] text-muted-foreground">
          {winner.date}
          {winner.city ? ` · ${winner.city}` : ""}
        </p>
        {winner.prize ? (
          <p className="mt-4 border-t border-border pt-3 text-sm font-semibold">
            <span className="eyebrow mr-2 text-[0.55rem] text-muted-foreground">
              {t("win.prize")}
            </span>
            {winner.prize}
          </p>
        ) : null}
      </div>
    </article>
  );
}
