"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n, LOCALES, type Locale } from "@/i18n";
import { FlagEN, FlagFR, FlagTR } from "@/components/ui/FlagIcon";

const flagComponents: Record<string, React.FC<{ className?: string }>> = {
  en: FlagEN, fr: FlagFR, tr: FlagTR,
};

// Subtle hover sound effect (game-like)
function playHover() {
  try {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 800;
    osc.type = "sine";
    gain.gain.setValueAtTime(0.03, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch {}
}

export function Sidebar() {
  const { locale, setLocale, t } = useI18n();
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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
      className="fixed left-[5%] top-0 bottom-0 w-64 z-50 hidden lg:flex flex-col justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* No panel background — text floats over the scene like the game */}

      {/* Logo area */}
      <div className="relative px-2 pb-8">
        <a href="#hero" className="block">
          {/* Replace with <img src="/logo.png" className="h-12" /> when logo is provided */}
          <div className="font-heading text-gold font-black text-2xl tracking-wider leading-none">
            CALRADIA
          </div>
          <div className="font-heading text-gold-bright/80 text-lg tracking-[0.3em] font-semibold mt-0.5">
            ONLINE
          </div>
        </a>
      </div>

      {/* Menu items — game-style */}
      <nav className="relative px-0">
        {links.map((link, i) => {
          const isActive = activeSection === link.id;
          const isHovered = hoveredItem === link.id;

          return (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              className="relative block py-3 px-6 mb-0.5 cursor-pointer"
              onMouseEnter={() => { setHoveredItem(link.id); playHover(); }}
              onMouseLeave={() => setHoveredItem(null)}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
            >
              {/* Active/hover background — like game menu highlight */}
              <AnimatePresence>
                {(isActive || isHovered) && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gold/15 via-gold/5 to-transparent"
                    initial={{ opacity: 0, scaleX: 0.8 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    exit={{ opacity: 0, scaleX: 0.8 }}
                    transition={{ duration: 0.2 }}
                    style={{ originX: 0 }}
                  />
                )}
              </AnimatePresence>

              {/* Gold left accent bar */}
              {isActive && (
                <motion.div
                  className="absolute left-0 top-1 bottom-1 w-[2px] bg-gold shadow-[0_0_8px_rgba(200,168,78,0.5)]"
                  layoutId="activeBar"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <span className={`relative font-heading text-sm uppercase tracking-[0.2em] transition-all duration-200 ${
                isActive
                  ? "text-gold text-glow-gold"
                  : isHovered
                    ? "text-gold/90"
                    : "text-text-secondary/70"
              }`}>
                {link.label}
              </span>
            </motion.a>
          );
        })}
      </nav>

      {/* Language flags */}
      <div className="relative px-2 pt-6">
        <div className="flex items-center gap-3">
          {LOCALES.map((l) => {
            const Flag = flagComponents[l.code];
            return (
              <button
                key={l.code}
                onClick={() => setLocale(l.code as Locale)}
                title={l.label}
                className={`w-8 h-5 rounded-sm overflow-hidden border transition-all duration-300 ${
                  locale === l.code
                    ? "border-gold/60 shadow-[0_0_10px_rgba(200,168,78,0.3)] scale-110"
                    : "border-white/10 opacity-40 hover:opacity-80 hover:scale-105"
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
