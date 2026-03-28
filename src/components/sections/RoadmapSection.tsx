"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { useI18n } from "@/i18n";

export function RoadmapSection() {
  const { t } = useI18n();

  return (
    <section id="roadmap" className="relative py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-gold text-glow-gold">
            {t.roadmap.title}
          </h2>
          <div className="medieval-divider w-48 mx-auto mt-4 mb-6" />
          <p className="text-text-secondary text-lg mb-12">{t.roadmap.subtitle}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
          {t.roadmap.items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                className="flex items-center gap-3 p-4 border border-border hover:border-gold/20 bg-bg-card/30 transition-colors"
                whileHover={{ x: 4 }}
              >
                <div className="w-2 h-2 bg-gold/50 flex-shrink-0" />
                <span className="text-text-secondary text-sm">{item}</span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
