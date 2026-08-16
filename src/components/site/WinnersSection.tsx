import { useMemo, useState } from "react";
import { Reveal } from "./Reveal";
import { WinnerCard } from "./WinnerCard";
import { tournamentWinners, winnerYears } from "@/data/albastini";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function WinnersSection() {
  const { t } = useI18n();
  const [year, setYear] = useState<number | "all">("all");

  const winners = useMemo(
    () =>
      (year === "all" ? tournamentWinners : tournamentWinners.filter((w) => w.year === year))
        .slice()
        .sort((a, b) => b.year - a.year || a.position - b.position),
    [year],
  );

  return (
    <section id="winners" className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <Reveal>
          <span className="eyebrow text-muted-foreground">{t("win.eyebrow")}</span>
          <h2 className="display-xl mt-4 text-4xl sm:text-5xl lg:text-6xl">
            {t("win.title1")}
            <br />
            <span className="text-alba-gold">{t("win.title2")}</span>
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">{t("win.body")}</p>
        </Reveal>

        {winnerYears.length > 1 ? (
          <div className="flex flex-wrap gap-2">
            <FilterChip active={year === "all"} onClick={() => setYear("all")}>
              {t("win.all")}
            </FilterChip>
            {winnerYears.map((y) => (
              <FilterChip key={y} active={year === y} onClick={() => setYear(y)}>
                {y}
              </FilterChip>
            ))}
          </div>
        ) : null}
      </div>

      {/* Mobile: swipeable rail · Desktop: grid */}
      <ul className="mt-12 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
        {winners.map((w, i) => (
          <Reveal
            as="li"
            key={w.id}
            delay={i * 70}
            className="w-[74vw] max-w-[300px] shrink-0 snap-start sm:w-auto sm:max-w-none"
          >
            <WinnerCard winner={w} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "eyebrow rounded-full border px-4 py-2 text-[0.6rem] transition-colors",
        active
          ? "border-foreground bg-foreground text-background"
          : "border-border text-muted-foreground hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}
