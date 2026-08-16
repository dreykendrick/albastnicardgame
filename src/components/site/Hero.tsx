import cardFan from "@/assets/card-fan.png.asset.json";
import { AlbaButton } from "./AlbaButton";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* geometric brand details */}
      <div
        aria-hidden
        className="triangle-band pointer-events-none absolute -right-10 top-24 h-56 w-56 text-alba-blue lg:h-80 lg:w-80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/3 size-64 rounded-full bg-alba-red/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 pb-14 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:pb-24">
        <div className="max-w-xl">
          <span className="eyebrow inline-flex items-center gap-2 text-muted-foreground">
            <span className="kanga-rule inline-block h-1 w-8 rounded-full" />
            {t("hero.eyebrow")}
          </span>

          <h1 className="display-xl mt-5 text-[3.25rem] leading-[0.86] sm:text-7xl lg:text-[6.2rem]">
            {t("hero.title")}
          </h1>

          <p className="mt-6 max-w-md text-base text-muted-foreground sm:text-lg">
            {t("hero.sub")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <AlbaButton asChildHref="#app" size="lg">
              {t("hero.cta1")}
            </AlbaButton>
            <AlbaButton asChildHref="#app" variant="outline" size="lg">
              {t("hero.cta2")}
            </AlbaButton>
          </div>
        </div>

        <div className="relative">
          <div className="float-slow relative mx-auto max-w-[520px] transition-transform duration-500 hover:scale-[1.03] hover:-rotate-1">
            <img
              src={cardFan.url}
              alt="A fan of Albastini playing cards in green, red, black and blue with the yellow points chip"
              width={1920}
              height={1920}
              className="w-full drop-shadow-[0_36px_60px_rgba(0,0,0,0.35)]"
            />
          </div>
          <span className="eyebrow absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-border bg-card/80 px-3 py-1 text-[0.6rem] text-muted-foreground backdrop-blur">
            {t("hero.badge")}
          </span>
        </div>
      </div>

      <div aria-hidden className="kanga-rule h-1.5 w-full" />
    </section>
  );
}
