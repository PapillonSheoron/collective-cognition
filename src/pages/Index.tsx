import { HeroSection } from "@/components/HeroSection";
import { OriginalProject } from "@/components/OriginalProject";
import { NewProject } from "@/components/NewProject";
import { WhatWereBuilding } from "@/components/WhatWereBuilding";
import { FeatureTable } from "@/components/FeatureTable";
import { DemoSection } from "@/components/DemoSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { CallToAction } from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Above the Fold */}
      <HeroSection />
      
      {/* Section 1: The Original Manhattan Project */}
      <OriginalProject />
      
      {/* Section 2: The New Manhattan Project */}
      <NewProject />
      
      {/* Section 3: What We're Building */}
      <WhatWereBuilding />
      
      {/* Section 4: Feature Table */}
      <FeatureTable />
      
      {/* Section 5: Demo */}
      <DemoSection />
      
      {/* Section 6: Philosophy */}
      <PhilosophySection />
      
      {/* Section 7: Call to Action */}
      <CallToAction />
    </div>
  );
};

export default Index;
