"use client";

import { useI18n } from "@/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-5xl mx-auto px-8 flex flex-col items-center gap-3 text-center">
        <div className="font-heading text-gold/60 font-bold tracking-wider text-sm">
          CALRADIA ONLINE
        </div>
        <p className="text-text-secondary/50 text-xs max-w-md">{t.footer.disclaimer}</p>
        <div className="text-text-secondary/30 text-[10px] mt-1">
          &copy; {new Date().getFullYear()} Calradia Online
        </div>
      </div>
    </footer>
  );
}
