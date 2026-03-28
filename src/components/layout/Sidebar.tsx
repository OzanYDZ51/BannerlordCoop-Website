"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useI18n, LOCALES, type Locale } from "@/i18n";
import { FlagEN, FlagFR, FlagTR } from "@/components/ui/FlagIcon";

const flagComponents: Record<string, React.FC<{ className?: string }>> = {
  en: FlagEN, fr: FlagFR, tr: FlagTR,
};

export function Sidebar() {
  const { locale, setLocale, t } = useI18n();
  const [activeSection, setActiveSection] = useState("hero");

  const links = [
    { id: "hero", label: t.nav.home },
    { id: "features", label: t.nav.features },
    { id: "download", label: t.nav.download },
    { id: "changelog", label: t.nav.changelog },
    { id: "roadmap", label: t.nav.roadmap },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    links.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [locale]);

  return (
    <motion.aside
      className="fixed left-0 top-0 bottom-0 w-64 bg-bg-sidebar/95 backdrop-blur-sm border-r border-border z-50 hidden lg:flex flex-col"
      initial={{ x: -264 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <div className="px-6 pt-8 pb-6">
        <a href="#hero" className="block">
          {/* Placeholder for logo — replace with <img src="/logo.png" /> when provided */}
          <div className="font-heading text-gold font-bold text-xl tracking-wider leading-tight">
            CALRADIA<br />
            <span className="text-gold-bright text-2xl">ONLINE</span>
          </div>
        </a>
        <div className="medieval-divider w-full mt-4" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3">
        {links.map((link, i) => (
          <motion.a
            key={link.id}
            href={`#${link.id}`}
            className={`group flex items-center gap-3 px-4 py-3 mb-1 transition-all duration-300 ${
              activeSection === link.id
                ? "bg-gold/10 border-l-2 border-gold text-gold"
                : "border-l-2 border-transparent text-text-secondary hover:text-gold hover:bg-gold/5"
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.08 }}
          >
            <span className="font-heading text-sm uppercase tracking-widest">{link.label}</span>
          </motion.a>
        ))}
      </nav>

      {/* Language switcher */}
      <div className="px-6 pb-6">
        <div className="medieval-divider w-full mb-4" />
        <div className="flex items-center gap-2">
          {LOCALES.map((l) => {
            const Flag = flagComponents[l.code];
            return (
              <button
                key={l.code}
                onClick={() => setLocale(l.code as Locale)}
                title={l.label}
                className={`w-8 h-6 rounded overflow-hidden border transition-all ${
                  locale === l.code
                    ? "border-gold shadow-[0_0_8px_rgba(200,168,78,0.4)] scale-110"
                    : "border-border opacity-50 hover:opacity-100 hover:scale-105"
                }`}
              >
                <Flag className="w-full h-full" />
              </button>
            );
          })}
        </div>
      </div>
    </motion.aside>
  );
}
