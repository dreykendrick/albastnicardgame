import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { useReveal } from "@/hooks/use-reveal";
import { albastiniStats, type Stat } from "@/data/albastini";
import { useI18n, type TKey } from "@/lib/i18n";

const labels: Record<Stat["key"], TKey> = {
  games: "stats.games",
  players: "stats.players",
  coins: "stats.coins",
};

const accents: Record<Stat["key"], string> = {
  games: "text-alba-blue",
  players: "text-alba-red",
  coins: "text-alba-gold",
};

function CountUp({ value }: { value: number }) {
  const { ref, shown } = useReveal<HTMLSpanElement>(0.4);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!shown) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(value);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {n.toLocaleString("en-US")}
    </span>
  );
}

export function StatsSection() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-alba-ink py-20 text-alba-paper lg:py-28">
      <div aria-hidden className="kanga-rule absolute inset-x-0 top-0 h-1.5" />
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-alba-paper/50">{t("stats.eyebrow")}</span>
          <h2 className="display-xl mt-4 text-4xl sm:text-5xl lg:text-6xl">{t("stats.title")}</h2>
        </Reveal>

        <dl className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-6">
          {albastiniStats.map((s, i) => (
            <Reveal key={s.key} delay={i * 90}>
              <div className="border-t-2 border-alba-paper/15 pt-5">
                <dd
                  className={`display-xl text-[3rem] leading-none sm:text-[3.4rem] lg:text-[4.5rem] ${accents[s.key]}`}
                >
                  <CountUp value={s.value} />
                  {s.suffix}
                </dd>
                <dt className="eyebrow mt-4 text-alba-paper/60">{t(labels[s.key])}</dt>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
