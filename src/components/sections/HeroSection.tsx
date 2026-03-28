"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video/Image background — replace src with your video when ready */}
      {/* <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/hero-video.mp4" type="video/mp4" />
      </video> */}

      {/* Placeholder gradient background (remove when video is added) */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary" />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.7)_100%)]" />

      {/* Gold ambient glow */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
      >
        <motion.div
          className="w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] rounded-full bg-gold/[0.03] blur-[120px] sm:blur-[180px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="inline-block px-4 py-1.5 border border-gold/30 text-gold/80 text-[10px] uppercase tracking-[0.4em] font-medium mb-8">
            {t.hero.badge}
          </span>
        </motion.div>

        {/* Logo placeholder — replace with <img src="/logo.png" /> when provided */}
        <motion.h1
          className="font-heading text-6xl sm:text-7xl md:text-9xl font-black uppercase tracking-wider text-gold text-glow-gold leading-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          {t.hero.title1}
          <br />
          <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-gold-bright tracking-[0.15em]">
            {t.hero.title2}
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-text-secondary text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <a
            href="#download"
            className="group px-10 py-4 bg-gold/10 border-2 border-gold text-gold font-heading text-base uppercase tracking-[0.2em] hover:bg-gold/20 hover:shadow-[0_0_40px_rgba(200,168,78,0.3)] transition-all duration-500"
          >
            {t.hero.cta}
          </a>
          <a
            href="#features"
            className="px-8 py-4 border border-border/60 text-text-secondary text-xs uppercase tracking-[0.2em] hover:text-gold hover:border-gold/40 transition-all duration-300"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold/30">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
