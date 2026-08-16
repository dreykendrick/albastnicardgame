import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AlbaButton } from "./AlbaButton";
import { Logo } from "./Logo";
import { useI18n, type TKey } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

const links: { href: string; key: TKey }[] = [
  { href: "#home", key: "nav.home" },
  { href: "#game", key: "nav.game" },
  { href: "#tournament", key: "nav.tournament" },
  { href: "#winners", key: "nav.winners" },
];

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const { theme, toggle } = useTheme();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        stuck
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8 lg:grid-cols-[auto_1fr_auto]">
        <a href="#home" className="min-w-0" aria-label="Albastini">
          <Logo />
        </a>

        <nav className="hidden justify-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="eyebrow relative py-2 text-foreground/70 transition-colors hover:text-foreground"
            >
              {t(l.key)}
              <span className="kanga-rule absolute inset-x-0 -bottom-0.5 h-0.5 scale-x-0 transition-transform duration-300 hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <div className="hidden items-center rounded-full border border-border p-0.5 sm:flex">
            {(["en", "sw"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "eyebrow rounded-full px-2.5 py-1 text-[0.6rem] transition-colors",
                  lang === l
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l}
              </button>
            ))}
          </div>

          <button
            onClick={toggle}
            aria-label={t("nav.theme")}
            className="grid size-9 place-items-center rounded-full border border-border text-foreground/70 transition-colors hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          <AlbaButton asChildHref="#app" size="sm" className="hidden sm:inline-flex">
            {t("cta.app")}
          </AlbaButton>


          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={t("nav.menu")}
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background/95 px-5 pb-6 pt-2 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="display-xl border-b border-border/60 py-3 text-2xl"
              >
                {t(l.key)}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex items-center justify-between gap-3">
            <div className="flex items-center rounded-full border border-border p-0.5">
              {(["en", "sw"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={cn(
                    "eyebrow rounded-full px-3 py-1.5 text-[0.6rem]",
                    lang === l ? "bg-foreground text-background" : "text-muted-foreground",
                  )}
                >
                  {l}
                </button>
              ))}
            </div>
            <AlbaButton asChildHref="#app" size="sm" onClick={() => setOpen(false)}>
              {t("cta.app")}
            </AlbaButton>

          </div>
        </div>
      ) : null}
    </header>
  );
}
