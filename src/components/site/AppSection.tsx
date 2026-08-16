import players from "@/assets/players.jpg";
import { AlbaButton } from "./AlbaButton";
import { PhoneMockup } from "./PhoneMockup";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n";

export function AppSection() {
  const { t } = useI18n();

  return (
    <section id="app" className="relative overflow-hidden py-24 lg:py-32">
      <div aria-hidden className="alba-dots pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
        <Reveal>
          <span className="eyebrow text-muted-foreground">{t("app.eyebrow")}</span>
          <h2 className="display-xl mt-4 text-4xl leading-[0.9] sm:text-5xl lg:text-6xl">
            {t("app.title1")}
            <br />
            {t("app.title2")}
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">{t("app.body")}</p>

          <div className="mt-9">
            {/* Single CTA — real store URLs get wired in here once the app is listed. */}
            <AlbaButton asChildHref="#app" size="lg" className="w-full sm:w-auto">
              {t("cta.app")}
            </AlbaButton>
            <p className="eyebrow mt-4 text-[0.6rem] text-muted-foreground">{t("app.soon")}</p>
          </div>

          {/* Lifestyle image is a secondary, supporting visual. */}
          <div className="mt-10 hidden overflow-hidden rounded-2xl border border-border lg:block">
            <img
              src={players}
              alt="Friends playing Albastini around a table at night"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-40 w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative grid place-items-center py-6">
            <div
              aria-hidden
              className="absolute size-[22rem] rounded-full bg-primary/15 blur-3xl sm:size-[28rem]"
            />
            <PhoneMockup className="relative w-[240px] sm:w-[300px]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
