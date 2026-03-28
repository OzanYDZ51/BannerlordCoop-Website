"use client";

import { ScrollReveal } from "@/components/effects/ScrollReveal";

const milestones = [
  { version: "v1.0", status: "done", title: "Foundation", items: ["Dedicated server architecture", "2-player campaign sync", "PvP battle sync", "Auto-update launcher"] },
  { version: "v1.1", status: "current", title: "Battle Polish", items: ["Full troop sync in battles", "Death & spectator mode", "Weather synchronization", "Settlement recruitment sync"] },
  { version: "v1.2", status: "planned", title: "World Alive", items: ["NPC party lifecycle sync", "Trade & economy sync", "Kingdom diplomacy events", "Character appearance sync"] },
  { version: "v2.0", status: "planned", title: "Full Online", items: ["4+ player support", "Character creation UI", "Reconnection after disconnect", "Steam integration"] },
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-gold text-glow-gold">
              Roadmap
            </h2>
            <div className="medieval-divider w-48 mx-auto mt-4" />
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <ScrollReveal key={m.version} delay={i * 0.15}>
                <div className="relative pl-16 sm:pl-20">
                  {/* Dot */}
                  <div className={`absolute left-4 sm:left-6 top-1 w-4 h-4 border-2 ${
                    m.status === "done" ? "bg-gold border-gold" :
                    m.status === "current" ? "bg-gold/30 border-gold animate-pulse" :
                    "bg-transparent border-border"
                  }`} />

                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 text-xs font-heading uppercase tracking-widest border ${
                      m.status === "done" ? "border-gold/60 text-gold" :
                      m.status === "current" ? "border-gold/40 text-gold-bright bg-gold/10" :
                      "border-border text-text-secondary"
                    }`}>
                      {m.version}
                    </span>
                    {m.status === "current" && (
                      <span className="text-xs text-gold-bright uppercase tracking-wider">In Progress</span>
                    )}
                    {m.status === "done" && (
                      <span className="text-xs text-gold/60 uppercase tracking-wider">Released</span>
                    )}
                  </div>

                  <h3 className="font-heading text-xl text-text-primary font-semibold uppercase tracking-wider mb-3">
                    {m.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {m.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-text-secondary text-sm">
                        <span className={m.status === "done" ? "text-gold" : "text-border"}>
                          {m.status === "done" ? "+" : "-"}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
