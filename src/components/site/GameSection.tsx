import safariBox from "@/assets/safari-box.jpeg.asset.json";
import { AlbaButton } from "./AlbaButton";
import { PhoneMockup } from "./PhoneMockup";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n";

export function GameSection() {
  const { t } = useI18n();

  return (
    <section id="game" className="bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-muted-foreground">{t("game.eyebrow")}</span>
          <h2 className="display-xl mt-4 text-4xl sm:text-5xl lg:text-6xl">{t("game.title")}</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-9">
              <div
                aria-hidden
                className="triangle-band absolute -right-6 -top-6 size-40 text-alba-blue"
              />
              <div className="flex justify-center py-4">
                <PhoneMockup className="transition-transform duration-500 group-hover:-rotate-2" />
              </div>
              <h3 className="display-xl mt-6 text-2xl sm:text-3xl">{t("game.app.t")}</h3>
              <p className="mt-3 max-w-sm text-sm text-muted-foreground">{t("game.app.b")}</p>
              <div className="mt-6">
                <AlbaButton asChildHref="#app">{t("game.app.cta")}</AlbaButton>
              </div>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-9">
              <div
                aria-hidden
                className="triangle-band absolute -right-6 -top-6 size-40 text-alba-green"
              />
              <div className="flex justify-center py-4">
                <img
                  src={safariBox.url}
                  alt="Albastini Safari Edition card box"
                  loading="lazy"
                  width={1392}
                  height={1920}
                  className="h-[300px] w-auto rounded-xl object-cover shadow-lift transition-transform duration-500 group-hover:rotate-2 sm:h-[340px]"
                />
              </div>
              <h3 className="display-xl mt-6 text-2xl sm:text-3xl">{t("game.phys.t")}</h3>
              <p className="mt-3 max-w-sm text-sm text-muted-foreground">{t("game.phys.b")}</p>
              <div className="mt-6">
                <AlbaButton asChildHref="#cards" variant="outline">
                  {t("game.phys.cta")}
                </AlbaButton>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
