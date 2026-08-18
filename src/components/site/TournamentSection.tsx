import { CalendarDays, Trophy } from "lucide-react";
import { AlbaButton } from "./AlbaButton";
import { Reveal } from "./Reveal";
import { TournamentCountdown } from "./TournamentCountdown";
import { nextTournament } from "@/data/albastini";
import { useI18n } from "@/lib/i18n";

export function TournamentSection() {
  const { t, lang } = useI18n();
  const date = new Date(nextTournament.startsAt);
  const dateLabel = date.toLocaleDateString(lang === "sw" ? "sw-TZ" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section
      id="tournament"
      className="relative overflow-hidden bg-alba-blue py-20 text-alba-paper lg:py-28"
    >
      <div aria-hidden className="triangle-band absolute -left-10 bottom-0 size-72 text-alba-paper" />
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
        <Reveal>
          <span className="eyebrow text-alba-paper/60">{t("tour.eyebrow")}</span>
          <h2 className="display-xl mt-4 text-4xl sm:text-5xl lg:text-6xl">{t("tour.title")}</h2>
          <p className="mt-5 max-w-md text-alba-paper/80">{t("tour.body")}</p>

          <h3 className="mt-8 font-display text-xl font-extrabold">{nextTournament.name}</h3>
          <ul className="mt-4 grid gap-2 text-sm text-alba-paper/80 sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <CalendarDays className="size-4 shrink-0 text-primary" />
              {dateLabel}
            </li>
            {nextTournament.prizePool ? (
              <li className="flex items-center gap-2">
                <Trophy className="size-4 shrink-0 text-primary" />
                {t("tour.prize")}: {nextTournament.prizePool}
              </li>
            ) : null}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <TournamentCountdown startsAt={nextTournament.startsAt} />
          <div className="mt-6">
            <AlbaButton asChildHref="#app" size="lg">
              {t("tour.cta")}
            </AlbaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
