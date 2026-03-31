"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { FeatureScanner } from "@/components/sections/feature-scanner";
import { FeatureAIPlanner } from "@/components/sections/feature-ai-planner";
import { FeatureGroceryList } from "@/components/sections/feature-grocery-list";
import { FamilyProfilesSection } from "@/components/sections/family-profiles-section";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function LandingPage() {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      <HeroSection />
      <div className="reveal">
        <ProblemSection />
      </div>
      <div className="reveal">
        <FeatureScanner />
      </div>
      <div className="reveal">
        <FeatureAIPlanner />
      </div>
      <div className="reveal">
        <FeatureGroceryList />
      </div>
      <div className="reveal">
        <FamilyProfilesSection />
      </div>
      <div className="reveal">
        <ComparisonTable />
      </div>
      <div className="reveal">
        <TestimonialsSection />
      </div>
      <div className="reveal">
        <FAQSection />
      </div>
      <div className="reveal">
        <FinalCTASection />
      </div>
    </div>
  );
}
