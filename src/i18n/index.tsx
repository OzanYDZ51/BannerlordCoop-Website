"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import en from "./locales/en";
import fr from "./locales/fr";
import tr from "./locales/tr";

export type Locale = "en" | "fr" | "tr";

export type Translations = typeof en;

export const LOCALES: { code: Locale; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "EN" },
  { code: "fr", label: "Francais", flag: "FR" },
  { code: "tr", label: "Turkce", flag: "TR" },
];

const dictionaries: Record<Locale, Translations> = { en, fr, tr };

type I18nContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "calradia_lang";

function detectLocale(): Locale {
  if (typeof window === "undefined") return "en";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "fr" || stored === "tr") return stored;
  } catch {}
  const lang = (navigator.language || "").toLowerCase();
  if (lang.startsWith("fr")) return "fr";
  if (lang.startsWith("tr")) return "tr";
  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);

  function setLocale(l: Locale) {
    setLocaleState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch {}
    document.documentElement.lang = l;
  }

  useEffect(() => { document.documentElement.lang = locale; }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
