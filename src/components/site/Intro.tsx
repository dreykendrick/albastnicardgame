import { Reveal } from "./Reveal";
import { useI18n, type TKey } from "@/lib/i18n";

const features: { t: TKey; b: TKey; color: string }[] = [
  { t: "intro.f1.t", b: "intro.f1.b", color: "bg-alba-blue" },
  { t: "intro.f2.t", b: "intro.f2.b", color: "bg-alba-red" },
  { t: "intro.f3.t", b: "intro.f3.b", color: "bg-alba-gold" },
  { t: "intro.f4.t", b: "intro.f4.b", color: "bg-alba-green" },
];

export function Intro() {
  const { t } = useI18n();

  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <span className="eyebrow text-muted-foreground">{t("intro.eyebrow")}</span>
          <h2 className="display-xl mt-4 text-4xl sm:text-5xl lg:text-6xl">{t("intro.title")}</h2>
          <p className="mt-6 max-w-md text-muted-foreground">{t("intro.body")}</p>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2">
          {features.map((f, i) => (
            <Reveal as="li" key={f.t} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span
                  className={`mb-5 block h-1.5 w-10 rounded-full ${f.color} transition-all duration-300 group-hover:w-16`}
                />
                <h3 className="display-xl text-xl">{t(f.t)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(f.b)}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
