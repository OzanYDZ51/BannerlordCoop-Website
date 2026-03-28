"use client";

import { ScrollReveal } from "@/components/effects/ScrollReveal";

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "2-4 Players Co-op",
    desc: "Play the full campaign together. Each player controls their own lord with unique party and troops.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="14.5 2 18.5 8 12 12 5.5 8 9.5 2" /><line x1="12" y1="12" x2="12" y2="22" />
        <path d="M4 15l8 7 8-7" />
      </svg>
    ),
    title: "Real-Time Battles",
    desc: "Fight PvP and PvE battles in real-time. Troops, heroes, damage, and deaths fully synchronized.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "World Map Sync",
    desc: "See all players moving on the campaign map. NPCs, settlements, diplomacy events all synchronized.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Dedicated Server",
    desc: "Server-authoritative architecture. No host advantage. Standalone server process with zero Bannerlord dependency.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" />
      </svg>
    ),
    title: "Auto-Update Launcher",
    desc: "Download once. The launcher automatically checks for updates and installs new versions seamlessly.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Settlement Sync",
    desc: "Enter towns, recruit troops, trade goods. Everything synchronized between players in real-time.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-gold text-glow-gold">
              Features
            </h2>
            <div className="medieval-divider w-48 mx-auto mt-4" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.1}>
              <div className="group p-8 bg-bg-card/50 border border-border hover:border-gold/30 transition-all duration-500 hover:bg-bg-card">
                <div className="text-gold/70 group-hover:text-gold transition-colors mb-5">
                  {f.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-text-primary uppercase tracking-wider mb-3">
                  {f.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
