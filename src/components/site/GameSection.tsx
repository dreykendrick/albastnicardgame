import safariBox from "@/assets/box-expansion.png.asset.json";
import { AlbaButton } from "./AlbaButton";
import { PhoneMockup } from "./PhoneMockup";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n";

export function GameSection() {
  const { t } = useI18n();

  return (
    <section id="game" className="bg-secondary/60 py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-muted-foreground">{t("game.eyebrow")}</span>
          <h2 className="display-xl mt-4 text-4xl leading-[0.9] sm:text-5xl lg:text-6xl">
            {t("game.title")}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* DIGITAL */}
          <Reveal>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-alba-ink p-7 text-alba-paper shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-10">
              <div
                aria-hidden
                className="triangle-band absolute -right-6 -top-6 size-40 text-alba-blue"
              />
              <span className="eyebrow relative w-fit rounded-full bg-alba-blue px-3 py-1 text-[0.55rem] text-white">
                {t("game.app.tag")}
              </span>
              <div className="flex justify-center py-6">
                <PhoneMockup className="transition-transform duration-500 group-hover:-rotate-2" />
              </div>
              <h3 className="display-xl mt-4 text-2xl sm:text-3xl">{t("game.app.t")}</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-alba-paper/70">
                {t("game.app.b")}
              </p>
              <div className="mt-8">
                <AlbaButton asChildHref="#app" className="w-full sm:w-auto">
                  {t("cta.app")}
                </AlbaButton>
              </div>
            </article>
          </Reveal>

          {/* PHYSICAL */}
          <Reveal delay={100}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-10">
              <div
                aria-hidden
                className="triangle-band absolute -right-6 -top-6 size-40 text-alba-green"
              />
              <span className="eyebrow relative w-fit rounded-full bg-alba-green/15 px-3 py-1 text-[0.55rem] text-alba-green">
                {t("game.phys.tag")}
              </span>
              <div className="flex justify-center py-6">
                <img
                  src={safariBox.url}
                  alt="Albastini Safari Edition Expansion Pack card box"
                  loading="lazy"
                  width={1355}
                  height={1105}
                  className="h-[220px] w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:rotate-2 sm:h-[260px]"
                />
              </div>
              <h3 className="display-xl mt-4 text-2xl sm:text-3xl">{t("game.phys.t")}</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {t("game.phys.b")}
              </p>
              <div className="mt-8">
                <AlbaButton asChildHref="#cards" variant="outline" className="w-full sm:w-auto">
                  {t("cta.cards")}
                </AlbaButton>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
