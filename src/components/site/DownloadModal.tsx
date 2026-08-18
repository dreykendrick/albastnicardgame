import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { useI18n } from "@/lib/i18n";

const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.albastini";
const IOS_URL = "https://apps.apple.com/us/app/albastini-card-game/id6503353510";

interface DownloadModalProps {
  open: boolean;
  onClose: () => void;
}

export function DownloadModal({ open, onClose }: DownloadModalProps) {
  const { t } = useI18n();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    // focus the panel for accessibility
    panelRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="presentation"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="absolute inset-0 bg-alba-ink/80 backdrop-blur-sm" />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="download-title"
        tabIndex={-1}
        className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-lift sm:p-8"
      >
        <button
          onClick={onClose}
          aria-label={t("modal.close")}
          className="absolute right-4 top-4 grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="size-4" />
        </button>

        <h3
          id="download-title"
          className="display-xl pr-8 text-2xl leading-[0.95] sm:text-3xl"
        >
          {t("modal.title")}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {t("modal.body")}
        </p>

        <div className="mt-8 grid gap-3">
          <a
            href={IOS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-foreground px-6 py-4 font-display font-extrabold uppercase tracking-[0.1em] text-background transition-transform hover:-translate-y-0.5"
          >
            <AppleIcon className="size-5" />
            {t("modal.ios")}
          </a>
          <a
            href={ANDROID_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-alba-green px-6 py-4 font-display font-extrabold uppercase tracking-[0.1em] text-white transition-transform hover:-translate-y-0.5"
          >
            <PlayIcon className="size-5" />
            {t("modal.android")}
          </a>
        </div>
      </div>
    </div>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.05 20.28c-.98 1.4-2.04 2.4-3.32 2.4-1.28 0-2.04-.84-3.48-.84-1.48 0-2.24.84-3.52.84-1.48 0-2.6-1.4-3.64-2.96C1.8 16.8.6 12.84.6 9.52c0-5.32 3.44-8.16 6.84-8.16 1.8 0 3.32 1.2 4.44 1.2 1.08 0 2.8-1.28 4.88-1.28 2 0 3.44.92 4.48 2.08-3.92 2.2-3.24 8.84.88 10.56-.56 1.96-1.72 4.04-3.08 5.36zM12.04 2.4c.72-1 1.28-2.12 1.08-3.4-1.16.08-2.52.8-3.32 1.76-.64.76-1.2 1.96-1 3.2 1.24.12 2.52-.68 3.24-1.56z" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M3.609 1.814 20.91 12.021 3.61 22.186a.996.996 0 0 1-1.51-.86V2.674a1 1 0 0 1 1.51-.86z" />
    </svg>
  );
}
