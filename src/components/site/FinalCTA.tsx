import cardFan from "@/assets/card-fan.png.asset.json";
import { AlbaButton } from "./AlbaButton";
import { DownloadButton } from "./DownloadButton";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n";

export function FinalCTA() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-alba-ink py-24 text-alba-paper lg:py-32">
      <div aria-hidden className="kanga-rule absolute inset-x-0 top-0 h-1.5" />
      <img
        aria-hidden
        src={cardFan.url}
        alt=""
        loading="lazy"
        className="pointer-events-none absolute -right-24 -top-16 w-[420px] opacity-15 sm:w-[560px]"
      />
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="display-xl text-5xl leading-[0.88] sm:text-6xl lg:text-8xl">
            {t("final.title")}
          </h2>
          <p className="wordmark mt-6 text-2xl text-primary sm:text-3xl">{t("final.sub")}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <DownloadButton size="lg" className="w-full sm:w-auto">
              {t("cta.app")}
            </DownloadButton>
            <AlbaButton
              asChildHref="#cards"
              variant="outline"
              size="lg"
              className="w-full border-alba-paper/30 text-alba-paper hover:border-alba-paper/70 hover:bg-alba-paper/10 sm:w-auto"
            >
              {t("cta.cards")}
            </AlbaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
