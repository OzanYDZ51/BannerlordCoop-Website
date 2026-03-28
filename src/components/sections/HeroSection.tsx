"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

const BG_VIDEOS = [
  "/bg-aserai.mp4",
  "/bg-battania.mp4",
  "/bg-empire.mp4",
  "/bg-khuzait.mp4",
  "/bg-sturgia.mp4",
  "/bg-vlandia.mp4",
];

export function HeroSection() {
  const { t } = useI18n();
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    setVideoSrc(BG_VIDEOS[Math.floor(Math.random() * BG_VIDEOS.length)]);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background video — random faction each visit */}
      {videoSrc && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          key={videoSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.8)_100%)]" />

      {/* Left-side gradient for sidebar readability */}
      <div className="absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-black/70 to-transparent" />

      {/* Content — centered in the remaining space */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="inline-block px-4 py-1.5 border border-gold/20 text-gold/60 text-[10px] uppercase tracking-[0.4em] font-medium mb-8">
            {t.hero.badge}
          </span>
        </motion.div>

        {/* Logo placeholder — replace with <img src="/logo.png" /> */}
        <motion.h1
          className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-wider text-gold text-glow-gold leading-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          {t.hero.title1}
          <br />
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gold-bright/80 tracking-[0.15em]">
            {t.hero.title2}
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-text-secondary/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
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
            className="group px-10 py-4 bg-gold/10 border border-gold/40 text-gold font-heading text-base uppercase tracking-[0.2em] hover:bg-gold/20 hover:shadow-[0_0_40px_rgba(200,168,78,0.3)] transition-all duration-500"
          >
            {t.hero.cta}
          </a>
          <a
            href="#features"
            className="px-8 py-4 border border-white/10 text-text-secondary/60 text-xs uppercase tracking-[0.2em] hover:text-gold hover:border-gold/30 transition-all duration-300"
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
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold/20">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
