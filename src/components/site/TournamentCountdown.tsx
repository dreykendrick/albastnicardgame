import { useEffect, useState } from "react";
import { useI18n, type TKey } from "@/lib/i18n";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function diff(target: number): Parts | null {
  const ms = target - Date.now();
  if (ms <= 0) return null;
  const s = Math.floor(ms / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

const order: { key: keyof Parts; label: TKey }[] = [
  { key: "days", label: "tour.days" },
  { key: "hours", label: "tour.hours" },
  { key: "minutes", label: "tour.minutes" },
  { key: "seconds", label: "tour.seconds" },
];

export function TournamentCountdown({ startsAt }: { startsAt: string }) {
  const { t } = useI18n();
  const target = new Date(startsAt).getTime();
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    setParts(diff(target));
    const id = window.setInterval(() => setParts(diff(target)), 1000);
    return () => window.clearInterval(id);
  }, [target]);

  return (
    <div className="rounded-3xl border border-alba-paper/15 bg-alba-ink/60 p-5 sm:p-7">
      <span className="eyebrow text-primary">{parts ? t("tour.next") : t("tour.live")}</span>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {order.map((o) => (
          <div
            key={o.key}
            className="rounded-2xl border border-alba-paper/10 bg-[oklch(0.12_0.006_260)] px-2 py-4 text-center"
          >
            <span className="display-xl block text-4xl tabular-nums text-alba-paper sm:text-5xl">
              {String(parts ? parts[o.key] : 0).padStart(2, "0")}
            </span>
            <span className="eyebrow mt-2 block text-[0.55rem] text-alba-paper/50">
              {t(o.label)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
