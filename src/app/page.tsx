"use client";

import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { DownloadSection } from "@/components/sections/DownloadSection";
import { ChangelogSection } from "@/components/sections/ChangelogSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { Footer } from "@/components/layout/Footer";
import { EmberParticles } from "@/components/effects/EmberParticles";

export default function Home() {
  return (
    <>
      <EmberParticles />
      <Navbar />
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
    </>
  );
}
