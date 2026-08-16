import cardBlue from "@/assets/card-blue.jpeg.asset.json";
import cardRed from "@/assets/card-red.jpeg.asset.json";
import cardBlack from "@/assets/card-black.png.asset.json";
import { cn } from "@/lib/utils";

/** Lightweight CSS phone frame showing the Albastini app table. */
export function PhoneMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[9/18] w-[210px] rounded-[2rem] border-4 border-alba-ink bg-alba-ink p-2 shadow-lift sm:w-[240px]",
        className,
      )}
    >
      <div className="absolute left-1/2 top-2.5 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-white/25" />
      <div className="flex h-full w-full flex-col overflow-hidden rounded-[1.6rem] bg-[oklch(0.2_0.01_262)] p-3 pt-6">
        <div className="flex items-center justify-between">
          <span className="eyebrow text-[0.5rem] text-white/60">Table 07</span>
          <span className="rounded-full bg-primary px-2 py-0.5 text-[0.5rem] font-bold text-alba-ink">
            11 PTS
          </span>
        </div>

        <div className="mt-4 flex flex-1 items-center justify-center">
          <div className="relative flex">
            <img
              src={cardRed.url}
              alt=""
              loading="lazy"
              className="w-12 -rotate-12 rounded-[0.35rem] shadow-lg"
            />
            <img
              src={cardBlack.url}
              alt=""
              loading="lazy"
              className="-ml-4 w-12 rounded-[0.35rem] bg-white shadow-lg"
            />
            <img
              src={cardBlue.url}
              alt=""
              loading="lazy"
              className="-ml-4 w-12 rotate-12 rounded-[0.35rem] shadow-lg"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          {[70, 45].map((w) => (
            <div key={w} className="flex items-center gap-2">
              <span className="size-4 rounded-full bg-white/15" />
              <span className="h-1.5 rounded-full bg-white/15" style={{ width: `${w}%` }} />
            </div>
          ))}
        </div>

        <div className="mt-3 grid h-8 place-items-center rounded-full bg-primary text-[0.6rem] font-extrabold uppercase tracking-widest text-alba-ink">
          Play
        </div>
      </div>
    </div>
  );
}
