import { HeroSection } from "@/components/HeroSection";
import { OriginalProject } from "@/components/OriginalProject";
import { NewProject } from "@/components/NewProject";
import { WhatWereBuilding } from "@/components/WhatWereBuilding";
import { FeatureTable } from "@/components/FeatureTable";
import { PhilosophySection } from "@/components/PhilosophySection";
import { CallToAction } from "@/components/CallToAction";
import { InteractiveParticles } from "@/components/InteractiveParticles";
import { ScrollEffects } from "@/components/ScrollEffects";

const Index = () => {
  return (
    <ScrollEffects>
      <div className="min-h-screen bg-background relative">
        {/* Interactive Particles Background */}
        <InteractiveParticles />
        
        {/* Hero Section - Above the Fold */}
        <HeroSection />
        
        {/* Section 1: The Original Manhattan Project */}
        <OriginalProject />
        
        {/* Section 2: The New Manhattan Project */}
        <NewProject />
        
        {/* Section 3: What We're Building */}
        <WhatWereBuilding />
        
        {/* Section 4: Philosophy */}
        <PhilosophySection />
        
        {/* Section 5: Call to Action */}
        <CallToAction />
      </div>
    </ScrollEffects>
  );
};

export default Index;
