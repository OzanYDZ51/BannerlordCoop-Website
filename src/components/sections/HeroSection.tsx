"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/60 via-bg-primary/30 to-bg-primary" />

      {/* Radial gold glow */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 2 }}
      >
        <motion.div
          className="w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] rounded-full bg-gold/[0.04] blur-[100px] sm:blur-[160px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 border border-gold/30 text-gold text-xs uppercase tracking-[0.3em] font-medium mb-8">
            Mount & Blade II: Bannerlord
          </span>
        </motion.div>

        <motion.h1
          className="font-heading text-5xl sm:text-6xl md:text-8xl font-bold uppercase tracking-wider text-gold text-glow-gold leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Coop &<br />Online
        </motion.h1>

        <motion.p
          className="mt-6 sm:mt-8 text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Conquer Calradia together. Play the full campaign with your friends
          in online multiplayer. Build your kingdom, fight battles, forge alliances.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="#download"
            className="px-10 py-4 bg-gold/10 border-2 border-gold text-gold font-heading text-lg uppercase tracking-widest hover:bg-gold/20 hover:shadow-[0_0_30px_rgba(200,168,78,0.3)] transition-all duration-300"
          >
            Download Free
          </a>
          <a
            href="#features"
            className="px-8 py-4 border border-border text-text-secondary text-sm uppercase tracking-widest hover:text-gold hover:border-gold/50 transition-all"
          >
            Discover Features
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold/40">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
