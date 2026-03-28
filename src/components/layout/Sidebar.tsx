"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n, LOCALES, type Locale } from "@/i18n";
import { FlagEN, FlagFR, FlagTR } from "@/components/ui/FlagIcon";

const flagComponents: Record<string, React.FC<{ className?: string }>> = {
  en: FlagEN, fr: FlagFR, tr: FlagTR,
};

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

function MenuContent({ links, activeSection, hoveredItem, setHoveredItem, locale, setLocale, onNavigate }: {
  links: { id: string; label: string }[];
  activeSection: string;
  hoveredItem: string | null;
  setHoveredItem: (v: string | null) => void;
  locale: Locale;
  setLocale: (l: Locale) => void;
  onNavigate?: () => void;
}) {
  return (
    <>
      <nav className="relative px-4">
        {links.map((link, i) => {
          const isActive = activeSection === link.id;
          const isHovered = hoveredItem === link.id;

          return (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              onClick={onNavigate}
              className="relative block py-4 px-6 mb-1 cursor-pointer"
              onMouseEnter={() => { setHoveredItem(link.id); playHover(); }}
              onMouseLeave={() => setHoveredItem(null)}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
            >
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

              {isActive && (
                <motion.div
                  className="absolute left-0 top-1 bottom-1 w-[2px] bg-gold shadow-[0_0_8px_rgba(200,168,78,0.5)]"
                  layoutId="activeBar"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <span className={`relative font-heading text-base uppercase tracking-[0.2em] transition-all duration-200 ${
                isActive ? "text-gold text-glow-gold" : isHovered ? "text-gold/90" : "text-text-secondary/70"
              }`}>
                {link.label}
              </span>
            </motion.a>
          );
        })}
      </nav>

      <div className="relative px-10 pt-8">
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
    </>
  );
}

export function Sidebar() {
  const { locale, setLocale, t } = useI18n();
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* ========== DESKTOP SIDEBAR ========== */}
      <motion.aside
        className="fixed left-0 top-0 bottom-0 w-80 z-50 hidden lg:flex flex-col justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent" />

        <div className="relative px-10 pb-8">
          <a href="#hero" className="block">
            <div className="font-heading text-gold font-black text-3xl tracking-wider leading-none">CALRADIA</div>
            <div className="font-heading text-gold-bright/80 text-xl tracking-[0.3em] font-semibold mt-1">ONLINE</div>
          </a>
        </div>

        <MenuContent
          links={links}
          activeSection={activeSection}
          hoveredItem={hoveredItem}
          setHoveredItem={setHoveredItem}
          locale={locale}
          setLocale={setLocale}
        />
      </motion.aside>

      {/* ========== MOBILE HEADER ========== */}
      <div className="fixed top-0 left-0 right-0 z-50 lg:hidden">
        <div className="flex items-center justify-between px-5 py-3 bg-black/70 backdrop-blur-sm border-b border-white/[0.05]">
          <a href="#hero" className="font-heading text-gold font-bold text-base tracking-wider">
            CALRADIA <span className="text-gold-bright/80">ONLINE</span>
          </a>

          <div className="flex items-center gap-3">
            {/* Flags */}
            {LOCALES.map((l) => {
              const Flag = flagComponents[l.code];
              return (
                <button
                  key={l.code}
                  onClick={() => setLocale(l.code as Locale)}
                  className={`w-6 h-4 rounded-sm overflow-hidden border transition-all ${
                    locale === l.code ? "border-gold/60 scale-110" : "border-white/10 opacity-40"
                  }`}
                >
                  <Flag className="w-full h-full" />
                </button>
              );
            })}

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="ml-2 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            >
              <motion.span
                className="block w-5 h-[1.5px] bg-gold"
                animate={mobileOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-5 h-[1.5px] bg-gold"
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="block w-5 h-[1.5px] bg-gold"
                animate={mobileOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="bg-black/90 backdrop-blur-md border-b border-white/[0.05] pb-6 pt-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <MenuContent
                links={links}
                activeSection={activeSection}
                hoveredItem={hoveredItem}
                setHoveredItem={setHoveredItem}
                locale={locale}
                setLocale={setLocale}
                onNavigate={() => setMobileOpen(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
