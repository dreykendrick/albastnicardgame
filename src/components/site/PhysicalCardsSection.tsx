import cardBlack from "@/assets/card-black.png.asset.json";
import cardBlue from "@/assets/card-blue.jpeg.asset.json";
import cardRed from "@/assets/card-red.jpeg.asset.json";
import safariBox from "@/assets/safari-box.jpeg.asset.json";
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
    <section id="cards" className="bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
        <Reveal>
          <div className="relative">
            <img
              src={safariBox.url}
              alt="Albastini Safari Edition box"
              loading="lazy"
              width={1392}
              height={1920}
              className="w-full max-w-[420px] rounded-2xl object-cover shadow-lift"
            />
            <div className="mt-[-3rem] flex justify-end gap-2 pr-2 sm:mt-[-4rem] sm:pr-8">
              {cards.map((c) => (
                <img
                  key={c.alt}
                  src={c.src}
                  alt={c.alt}
                  loading="lazy"
                  className={`w-20 rounded-lg bg-white shadow-card transition-transform duration-300 hover:-translate-y-3 sm:w-28 ${c.rotate}`}
                />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <span className="eyebrow text-muted-foreground">{t("phys.eyebrow")}</span>
          <h2 className="display-xl mt-4 text-4xl sm:text-5xl">{t("phys.title")}</h2>
          <p className="mt-5 max-w-md text-muted-foreground">{t("phys.body")}</p>

          <ul className="mt-7 flex flex-wrap gap-2">
            {specs.map((s) => (
              <li
                key={s}
                className="eyebrow rounded-full border border-border bg-card px-4 py-2 text-[0.55rem] text-muted-foreground"
              >
                {t(s)}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <p className="eyebrow mb-4 text-[0.6rem] text-foreground">{t("phys.cta")}</p>
            <CardNotifyForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
