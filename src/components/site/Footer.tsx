import { useState } from "react";
import { Logo } from "./Logo";
import { useI18n, type TKey } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const links: { href: string; key: TKey }[] = [
  { href: "#home", key: "nav.home" },
  { href: "#game", key: "nav.game" },
  { href: "#tournament", key: "nav.tournament" },
  { href: "#winners", key: "nav.winners" },
];

export function Footer() {
  const { t, lang, setLang } = useI18n();
  const [egg, setEgg] = useState(false);

  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-[1fr_auto] sm:items-start">
          <div>
            <Logo showTag />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">{t("footer.tagline")}</p>
          </div>

          <nav className="flex flex-wrap gap-x-7 gap-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="eyebrow text-muted-foreground transition-colors hover:text-foreground"
              >
                {t(l.key)}
              </a>
            ))}
          </nav>
        </div>

        <div aria-hidden className="kanga-rule my-9 h-1 w-full rounded-full opacity-80" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Albastini. {t("footer.rights")}
          </p>

          <div className="flex items-center gap-4">
            {/* Easter egg: the hidden ace */}
            <button
              onMouseEnter={() => setEgg(true)}
              onFocus={() => setEgg(true)}
              onMouseLeave={() => setEgg(false)}
              onBlur={() => setEgg(false)}
              aria-label="A"
              className="font-card text-sm text-muted-foreground/50 transition-colors hover:text-primary"
            >
              A
            </button>
            <span
              className={cn(
                "eyebrow text-[0.55rem] text-primary transition-opacity duration-300",
                egg ? "opacity-100" : "opacity-0",
              )}
            >
              {t("footer.egg")}
            </span>

            <div className="flex items-center rounded-full border border-border p-0.5">
              {(["en", "sw"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={cn(
                    "eyebrow rounded-full px-2.5 py-1 text-[0.55rem] transition-colors",
                    lang === l
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
