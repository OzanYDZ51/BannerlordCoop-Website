"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useI18n, LOCALES } from "@/i18n";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale, t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.nav.features, href: "#features" },
    { label: t.nav.download, href: "#download" },
    { label: t.nav.changelog, href: "#changelog" },
    { label: t.nav.roadmap, href: "#roadmap" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg-primary/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-heading text-gold font-bold text-lg tracking-wider">
          CALRADIA ONLINE
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-gold transition-colors uppercase tracking-widest font-medium"
            >
              {link.label}
            </a>
          ))}

          {/* Language switcher */}
          <div className="flex items-center gap-0.5">
            {LOCALES.map((l) => (
              <button
                key={l.code}
                onClick={() => setLocale(l.code)}
                title={l.label}
                className={`text-lg px-1.5 py-1 rounded transition-all ${
                  locale === l.code
                    ? "scale-110 drop-shadow-[0_0_6px_rgba(200,168,78,0.5)]"
                    : "opacity-50 hover:opacity-100 hover:scale-105"
                }`}
              >
                {l.flag}
              </button>
            ))}
          </div>

          <a
            href="#download"
            className="px-5 py-2 border border-gold/50 text-gold text-sm uppercase tracking-widest hover:bg-gold/10 hover:border-gold transition-all"
          >
            {t.nav.downloadBtn}
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
