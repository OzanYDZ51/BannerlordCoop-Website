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
      <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-[0.15em] text-gold text-glow-gold mb-3">
            {t.download.title}
          </h2>
          <div className="medieval-divider w-32 mx-auto mb-8" />
          <p className="text-text-secondary text-sm mb-12 max-w-lg mx-auto">{t.download.subtitle}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="inline-flex flex-col items-center gap-5">
            {loading ? (
              <div className="text-text-secondary/50 animate-pulse text-sm">...</div>
            ) : zip ? (
              <>
                <motion.a
                  href={zip.browser_download_url}
                  className="group relative flex items-center gap-3 px-14 py-5 border border-gold/40 text-gold font-heading text-base uppercase tracking-[0.2em] overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-all duration-500" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_30px_rgba(200,168,78,0.15)]" />

                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="relative z-10">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  <span className="relative z-10">{t.download.cta}</span>
                </motion.a>
                <div className="flex items-center gap-4 text-text-secondary/60 text-xs">
                  <span className="text-gold/70">{release?.tag_name}</span>
                  <span>{formatBytes(zip.size)}</span>
                  <span>Windows</span>
                </div>
              </>
            ) : (
              <div className="text-text-secondary/50 text-sm">{t.download.unavailable}</div>
            )}
            <div className="text-text-secondary/30 text-[10px] mt-4 max-w-sm">{t.download.requires}</div>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <ScrollReveal delay={0.4}>
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {t.download.steps.map((s, i) => (
              <div key={i} className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 border border-gold/20 flex items-center justify-center text-gold/60 font-heading text-xs font-bold">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-heading text-[11px] font-semibold text-text-primary/70 uppercase tracking-[0.15em] mb-1">{s.title}</h4>
                  <p className="text-text-secondary/60 text-xs">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
