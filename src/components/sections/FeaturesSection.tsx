"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { useI18n } from "@/i18n";

const icons = [
  <svg key="0" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  <svg key="1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="14.5 2 18.5 8 12 12 5.5 8 9.5 2" /><line x1="12" y1="12" x2="12" y2="22" /><path d="M4 15l8 7 8-7" /></svg>,
  <svg key="2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
  <svg key="3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  <svg key="4" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>,
  <svg key="5" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" x2="4" y1="22" y2="15" /></svg>,
];

export function FeaturesSection() {
  const { t } = useI18n();

  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-[0.15em] text-gold text-glow-gold">
              {t.features.title}
            </h2>
            <div className="medieval-divider w-32 mx-auto mt-4" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.features.items.map((f, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                className="group relative p-6 bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.04] hover:border-gold/20 transition-all duration-500"
                whileHover={{ y: -2 }}
              >
                {/* Top gold accent line */}
                <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent group-hover:via-gold/50 transition-all duration-500" />

                <div className="text-gold/40 group-hover:text-gold/80 transition-colors duration-300 mb-4">
                  {icons[i]}
                </div>
                <h3 className="font-heading text-sm font-semibold text-text-primary/90 uppercase tracking-[0.15em] mb-2 group-hover:text-gold transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
