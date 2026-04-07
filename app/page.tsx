"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { FeaturesBentoGrid } from "@/components/sections/features-bento-grid";
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
        <FeaturesBentoGrid />
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
