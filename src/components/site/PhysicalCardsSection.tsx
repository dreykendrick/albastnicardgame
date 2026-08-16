import cardBlack from "@/assets/card-black.png.asset.json";
import cardBlue from "@/assets/card-blue.jpeg.asset.json";
import cardRed from "@/assets/card-red.jpeg.asset.json";
import safariBox from "@/assets/safari-box.jpeg.asset.json";
import { AlbaButton } from "./AlbaButton";
import { CardNotifyForm } from "./CardNotifyForm";
import { Reveal } from "./Reveal";
import { useI18n, type TKey } from "@/lib/i18n";

const cards = [
  { src: cardRed.url, alt: "Albastini red ace card", rotate: "-rotate-6" },
  { src: cardBlack.url, alt: "Albastini black ace card", rotate: "rotate-2" },
  { src: cardBlue.url, alt: "Albastini blue ace card", rotate: "rotate-8" },
];

const specs: TKey[] = ["phys.spec1", "phys.spec2", "phys.spec3"];

export function PhysicalCardsSection() {
  const { t } = useI18n();

  return (
    <section id="cards" className="relative overflow-hidden bg-secondary/60 py-24 lg:py-32">
      <div aria-hidden className="kanga-rule absolute inset-x-0 top-0 h-1.5" />
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
        <Reveal>
          <div className="relative">
            <img
              src={safariBox.url}
              alt="Albastini Safari Edition card box"
              loading="lazy"
              width={1392}
              height={1920}
              className="w-full max-w-[520px] rounded-3xl object-cover shadow-lift"
            />
            <div className="mt-[-3.5rem] flex justify-end gap-3 pr-2 sm:mt-[-5rem] sm:pr-8">
              {cards.map((c) => (
                <img
                  key={c.alt}
                  src={c.src}
                  alt={c.alt}
                  loading="lazy"
                  className={`w-24 rounded-xl bg-white shadow-card transition-transform duration-300 sm:w-32 sm:hover:-translate-y-4 sm:hover:rotate-0 sm:hover:shadow-lift ${c.rotate}`}
                />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <span className="eyebrow text-muted-foreground">{t("phys.eyebrow")}</span>
          <h2 className="display-xl mt-4 text-4xl leading-[0.9] sm:text-5xl lg:text-6xl">
            {t("phys.title")}
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">{t("phys.body")}</p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {specs.map((s) => (
              <li
                key={s}
                className="eyebrow rounded-full border border-border bg-card px-4 py-2 text-[0.55rem] text-muted-foreground"
              >
                {t(s)}
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <AlbaButton asChildHref="#notify-email" size="lg" className="w-full sm:w-auto">
                {t("cta.cards")}
              </AlbaButton>
              <span className="eyebrow rounded-full bg-alba-gold/15 px-3 py-1.5 text-[0.55rem] text-alba-gold">
                {t("phys.soon")}
              </span>
            </div>
            <p className="eyebrow mt-6 text-[0.6rem] text-foreground">{t("phys.notify")}</p>
            <div className="mt-4">
              <CardNotifyForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
