import { Apple, Smartphone } from "lucide-react";
import players from "@/assets/players.jpg";
import { AlbaButton } from "./AlbaButton";
import { PhoneMockup } from "./PhoneMockup";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n";

export function AppSection() {
  const { t } = useI18n();

  return (
    <section id="app" className="relative overflow-hidden py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
        <Reveal>
          <span className="eyebrow text-muted-foreground">{t("app.eyebrow")}</span>
          <h2 className="display-xl mt-4 text-4xl sm:text-5xl lg:text-6xl">
            {t("app.title1")}
            <br />
            {t("app.title2")}
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">{t("app.body")}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {/* Store links are placeholders until the app is listed. */}
            <button
              type="button"
              disabled
              className="inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 text-left opacity-70"
            >
              <Smartphone className="size-5" />
              <span className="flex flex-col leading-tight">
                <span className="eyebrow text-[0.5rem] text-muted-foreground">{t("app.soon")}</span>
                <span className="font-display text-sm font-extrabold">{t("app.android")}</span>
              </span>
            </button>
            <button
              type="button"
              disabled
              className="inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 text-left opacity-70"
            >
              <Apple className="size-5" />
              <span className="flex flex-col leading-tight">
                <span className="eyebrow text-[0.5rem] text-muted-foreground">{t("app.soon")}</span>
                <span className="font-display text-sm font-extrabold">{t("app.ios")}</span>
              </span>
            </button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-card">
            <img
              src={players}
              alt="Friends playing Albastini around a table at night"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-alba-ink/35" />
            <div className="absolute -bottom-6 right-4 sm:right-8">
              <PhoneMockup className="w-[150px] sm:w-[190px]" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
