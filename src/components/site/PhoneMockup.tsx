import appHome from "@/assets/app-home.jpg.asset.json";
import { cn } from "@/lib/utils";

/** Lightweight CSS phone frame showing a real screenshot of the Albastini app. */
export function PhoneMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[9/18] w-[210px] rounded-[2rem] border-4 border-alba-ink bg-alba-ink p-2 shadow-lift sm:w-[240px]",
        className,
      )}
    >
      <div className="absolute left-1/2 top-2.5 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-white/25" />
      <div className="h-full w-full overflow-hidden rounded-[1.6rem]">
        <img
          src={appHome.url}
          alt="Albastini app home screen with practice mode, head to head and tournament options"
          loading="lazy"
          width={886}
          height={1920}
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}
