"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { useI18n } from "@/i18n";
import type { GitHubRelease } from "@/lib/github";
import { formatBytes } from "@/lib/github";

export function DownloadSection() {
  const [release, setRelease] = useState<GitHubRelease | null>(null);
  const [loading, setLoading] = useState(true);
  const { t } = useI18n();

  useEffect(() => {
    fetch("/api/releases/latest")
      .then((r) => r.json())
      .then((data) => { if (data.release) setRelease(data.release); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const zip = release?.assets?.find((a) => a.name.endsWith(".zip"));

  return (
    <section id="download" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[500px] h-[500px] rounded-full bg-gold/[0.03] blur-[120px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-gold text-glow-gold mb-4">
            {t.download.title}
          </h2>
          <div className="medieval-divider w-48 mx-auto mb-8" />
          <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">{t.download.subtitle}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="inline-flex flex-col items-center gap-6 p-10 border border-gold/20 bg-bg-card/50 border-glow-gold">
            {loading ? (
              <div className="text-text-secondary animate-pulse">...</div>
            ) : zip ? (
              <>
                <a
                  href={zip.browser_download_url}
                  className="flex items-center gap-3 px-12 py-5 bg-gold/10 border-2 border-gold text-gold font-heading text-xl uppercase tracking-widest hover:bg-gold/20 hover:shadow-[0_0_40px_rgba(200,168,78,0.4)] transition-all duration-300"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  {t.download.cta}
                </a>
                <div className="flex items-center gap-4 text-text-secondary text-sm">
                  <span className="text-gold font-medium">{release?.tag_name}</span>
                  <span>{formatBytes(zip.size)}</span>
                  <span>Windows</span>
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="text-text-secondary mb-4">{t.download.unavailable}</div>
                <div className="px-12 py-5 border-2 border-border text-text-secondary font-heading text-xl uppercase tracking-widest opacity-50 cursor-not-allowed">
                  {t.download.cta}
                </div>
              </div>
            )}
            <div className="text-text-secondary/60 text-xs mt-2 max-w-sm">{t.download.requires}</div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            {t.download.steps.map((s, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 border border-gold/40 flex items-center justify-center text-gold font-heading font-bold">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-text-primary uppercase tracking-wider mb-1">{s.title}</h4>
                  <p className="text-text-secondary text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
