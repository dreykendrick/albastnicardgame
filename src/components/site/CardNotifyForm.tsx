import { useState } from "react";
import { AlbaButton } from "./AlbaButton";
import { useI18n } from "@/lib/i18n";

/**
 * Simple notify-me capture. `onSubmit` is where a backend call goes later;
 * today it just resolves locally.
 */
export function CardNotifyForm({
  onSubmit,
}: {
  onSubmit?: (email: string) => Promise<void> | void;
}) {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="rounded-2xl border border-primary/40 bg-primary/10 p-6">
        <p className="display-xl text-2xl">{t("form.thanks1")}</p>
        <p className="mt-1 text-sm text-muted-foreground">{t("form.thanks2")}</p>
      </div>
    );
  }

  return (
    <form
      className="w-full max-w-md"
      onSubmit={async (e) => {
        e.preventDefault();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
          setError(t("form.invalid"));
          return;
        }
        setError(null);
        await onSubmit?.(email);
        setDone(true);
      }}
    >
      <label htmlFor="notify-email" className="eyebrow text-muted-foreground">
        {t("form.email")}
      </label>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <input
          id="notify-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("form.placeholder")}
          className="h-11 min-w-0 flex-1 rounded-full border border-input bg-card px-5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring"
        />
        <AlbaButton type="submit">{t("form.submit")}</AlbaButton>
      </div>
      {error ? <p className="mt-2 text-xs text-destructive">{error}</p> : null}
    </form>
  );
}
