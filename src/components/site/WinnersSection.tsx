import { Reveal } from "./Reveal";
import { WinnerCard } from "./WinnerCard";
import { latestTournamentWinners } from "@/data/albastini";
import { useI18n } from "@/lib/i18n";

export function WinnersSection() {
  const { t } = useI18n();

  const [first, second, third] = latestTournamentWinners;

  return (
    <section id="winners" className="relative overflow-hidden py-24 lg:py-32">
      <div aria-hidden className="alba-dots pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-muted-foreground">{t("win.eyebrow")}</span>
          <h2 className="display-xl mt-4 text-4xl leading-[0.9] sm:text-5xl lg:text-6xl">
            {t("win.title1")}
            <br />
            <span className="text-alba-gold">{t("win.title2")}</span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">{t("win.body")}</p>
        </Reveal>

        {/* Podium: 1st emphasised, 2nd and 3rd alongside. */}
        <div className="mx-auto mt-14 grid max-w-[1100px] gap-6 lg:grid-cols-3 lg:items-end lg:gap-8">
          {first ? (
            <Reveal className="lg:order-2">
              <div className="lg:-mt-10">
                <WinnerCard winner={first} featured />
              </div>
            </Reveal>
          ) : null}
          {second ? (
            <Reveal delay={90} className="lg:order-1">
              <WinnerCard winner={second} />
            </Reveal>
          ) : null}
          {third ? (
            <Reveal delay={150} className="lg:order-3">
              <WinnerCard winner={third} />
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
