"use client";

import { useEffect, useState } from "react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import type { GitHubRelease } from "@/lib/github";

export function ChangelogSection() {
  const [releases, setReleases] = useState<GitHubRelease[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/repos/OzanYDZ51/BannerlordCoop/releases?per_page=20")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Only show v1.0.0+ releases (skip old dev versions)
          const filtered = data.filter((r: GitHubRelease) => {
            const ver = r.tag_name.replace(/^v/, "");
            const major = parseInt(ver.split(".")[0] || "0", 10);
            return major >= 1;
          });
          setReleases(filtered);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="changelog" className="relative py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-gold text-glow-gold">
              Changelog
            </h2>
            <div className="medieval-divider w-48 mx-auto mt-4 mb-4" />
            <p className="text-text-secondary text-sm">Version history from our releases</p>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {loading && (
            <div className="text-center text-text-secondary animate-pulse">Loading versions...</div>
          )}
          {!loading && releases.length === 0 && (
            <div className="text-center text-text-secondary">No releases yet. Stay tuned!</div>
          )}
          {releases.map((r, i) => (
            <ScrollReveal key={r.tag_name} delay={i * 0.08}>
              <div className="border border-border hover:border-gold/20 transition-colors p-6 bg-bg-card/30">
                <div className="flex items-center gap-4 mb-3">
                  <span className="px-3 py-1 border border-gold/40 text-gold text-xs font-heading uppercase tracking-widest">
                    {r.tag_name}
                  </span>
                  <span className="text-text-secondary text-sm">
                    {new Date(r.published_at).toLocaleDateString("en-US", {
                      year: "numeric", month: "long", day: "numeric",
                    })}
                  </span>
                  {i === 0 && (
                    <span className="px-2 py-0.5 bg-gold/10 border border-gold/30 text-gold text-xs uppercase tracking-wider">
                      Latest
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-lg text-text-primary font-semibold mb-2">
                  {r.name}
                </h3>
                {r.body && (
                  <div className="text-text-secondary text-sm leading-relaxed whitespace-pre-line max-h-40 overflow-hidden">
                    {r.body.slice(0, 600)}{r.body.length > 600 ? "..." : ""}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
