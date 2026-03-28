"use client";

import { I18nProvider } from "@/i18n";
import { Sidebar } from "@/components/layout/Sidebar";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { DownloadSection } from "@/components/sections/DownloadSection";
import { ChangelogSection } from "@/components/sections/ChangelogSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { Footer } from "@/components/layout/Footer";
import { EmberParticles } from "@/components/effects/EmberParticles";

export default function Home() {
  return (
    <I18nProvider>
      <EmberParticles />
      <Sidebar />

      {/* Main content — full width, sidebar floats over */}
      <div>
        <main className="relative z-10">
          <HeroSection />
          <div className="medieval-divider w-full" />
          <FeaturesSection />
          <div className="medieval-divider w-full" />
          <DownloadSection />
          <div className="medieval-divider w-full" />
          <ChangelogSection />
          <div className="medieval-divider w-full" />
          <RoadmapSection />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
