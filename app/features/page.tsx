import type { Metadata } from "next";
import { FeaturesSidebar } from "@/components/features/features-sidebar";
import { FeatureDetailSection } from "@/components/features/feature-detail-section";
import { NutritionDashboardMockup } from "@/components/features/mockups/nutrition-dashboard-mockup";
import { RecipeAnalyzerMockup } from "@/components/features/mockups/recipe-analyzer-mockup";
import { CreateRecipesMockup } from "@/components/features/mockups/create-recipes-mockup";
import { MealPlanningMockup } from "@/components/features/mockups/meal-planning-mockup";
import { RecipeInsightsMockup } from "@/components/features/mockups/recipe-insights-mockup";
import { GroceryListMockup } from "@/components/features/mockups/grocery-list-mockup";
import { AIAssistantMockup } from "@/components/features/mockups/ai-assistant-mockup";
import { DataPrivacyMockup } from "@/components/features/mockups/data-privacy-mockup";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Features — Nutrition Tools Built on Data You Can Trust",
  description:
    "Explore Nutri's full suite of nutrition tools: real-time tracking, recipe analyzer, AI meal planning, smart grocery lists, and family profiles. All backed by USDA data.",
};

const featureSections = [
  {
    id: "nutrition-dashboard",
    number: "01",
    title: "Real-Time Nutrition Dashboard",
    subtitle: "Daily, weekly & monthly tracking for your whole household",
    description:
      "Track 11 key nutrients against personalized targets built from your health profile and USDA Dietary Reference Intakes. Health condition alerts warn when intake could affect conditions like hypertension or diabetes, and nutrient gap analysis surfaces deficiencies that calorie counting alone would miss. View every family member's progress on one screen.",
    bullets: [
      "BMR calculated via Mifflin-St Jeor equation",
      "Calorie compliance scored at the 80–110% range",
      "Timezone-aware daily boundaries",
    ],
    trustBadges: [
      "USDA Dietary Reference Intakes",
      "Mifflin-St Jeor BMR Standard",
    ],
    mockup: <NutritionDashboardMockup />,
    reverse: false,
  },
  {
    id: "recipe-analyzer",
    number: "02",
    title: "Recipe Analyzer",
    subtitle: "Instant nutritional breakdown for any recipe",
    description:
      "Paste any recipe URL or enter ingredients manually to get a complete nutritional profile. Our analyzer cross-references USDA data to calculate per-serving macros, micronutrients, and allergen flags for every family member. Health scores help you make informed choices.",
    bullets: [
      "Supports URL import from 500+ recipe sites",
      "Per-serving and per-ingredient breakdown",
      "Automatic allergen flagging per family profile",
    ],
    trustBadges: ["USDA Food Data Central", "500+ Recipe Sources"],
    mockup: <RecipeAnalyzerMockup />,
    reverse: true,
  },
  {
    id: "create-recipes",
    number: "03",
    title: "Create Your Own Recipes",
    subtitle: "Build, save, and share family-safe recipes",
    description:
      "Create custom recipes with our guided 3-step wizard. Every recipe is automatically analyzed for nutrition, allergens, and dietary compliance. Build a library of family favorites that everyone can trust.",
    bullets: [
      "Guided 3-step creation: Basics → Prep → Review",
      "Auto-calculates nutrition from ingredient database",
      "Tag recipes with dietary labels and meal types",
    ],
    trustBadges: ["Ingredient Database", "Auto Nutrition Calc"],
    mockup: <CreateRecipesMockup />,
    reverse: false,
  },
  {
    id: "meal-planning",
    number: "04",
    title: "Personalized Meal Planning",
    subtitle: "AI-generated weekly plans for every family member",
    description:
      "Tell Nutri what your family loves. Our AI generates a full week of personalized, balanced meals that respect each member's dietary restrictions, nutrition goals, and taste preferences. Swap meals with one tap.",
    bullets: [
      "Respects individual dietary restrictions & allergies",
      "One-tap meal swaps with nutrition-matched alternatives",
      "Auto-generates from your saved recipe collection",
    ],
    trustBadges: ["AI-Powered", "Personalized per Member"],
    mockup: <MealPlanningMockup />,
    reverse: true,
  },
  {
    id: "recipe-insights",
    number: "05",
    title: "Recipe Insights & Ingredient Swaps",
    subtitle: "Smart alternatives that match dietary needs",
    description:
      "Get intelligent ingredient alternatives that maintain taste while accommodating allergies, dietary preferences, and nutrition goals. Every swap is verified against our nutrition database to ensure equivalent or better nutritional value.",
    bullets: [
      "Nutrition-verified ingredient alternatives",
      "Considers allergens across all family profiles",
      "Preserves recipe taste and texture profiles",
    ],
    trustBadges: ["Verified Swaps", "Cross-Profile Safety"],
    mockup: <RecipeInsightsMockup />,
    reverse: false,
  },
  {
    id: "grocery-list",
    number: "06",
    title: "Smart Grocery List",
    subtitle: "From meal plan to shopping cart, automatically",
    description:
      "Turn your weekly meal plan into an aisle-sorted, budget-tracked shopping list. Track your spending in real time as you shop, get brand recommendations, and filter by organic, local, or dietary preferences.",
    bullets: [
      "Auto-generated from weekly meal plans",
      "Real-time budget tracking against weekly goals",
      "Brand matching and organic filtering",
    ],
    trustBadges: ["Aisle-Sorted", "Real-Time Budget"],
    mockup: <GroceryListMockup />,
    reverse: true,
  },
  {
    id: "ai-assistant",
    number: "07",
    title: "AI Nutrition Assistant",
    subtitle: "Your family's personal nutrition expert",
    description:
      "Ask anything about your diet and get instant answers backed by verified nutrition data. Our AI assistant understands your family's profiles, allergies, and goals to provide personalized recommendations that are safe for everyone.",
    bullets: [
      "Context-aware: knows your family's dietary needs",
      "Backed by USDA data and verified nutrition sources",
      "Suggests recipes, swaps, and meal ideas on demand",
    ],
    trustBadges: ["Verified Data Sources", "Family-Aware AI"],
    mockup: <AIAssistantMockup />,
    reverse: false,
  },
  {
    id: "data-privacy",
    number: "08",
    title: "Data Trust & Privacy",
    subtitle: "Enterprise-grade security for your family's health data",
    description:
      "Your family's health data deserves the highest level of protection. Nutri implements HIPAA-compliant infrastructure, end-to-end encryption, and strict data residency controls. We never sell your data or share it with third parties.",
    bullets: [
      "HIPAA-compliant data handling and storage",
      "End-to-end AES-256 encryption at rest and in transit",
      "US-only data residency with SOC 2 Type II compliance",
    ],
    trustBadges: ["HIPAA Compliant", "SOC 2 Type II", "AES-256 Encryption"],
    mockup: <DataPrivacyMockup />,
    reverse: true,
  },
];

export default function FeaturesPage() {
  return (
    <div className="bg-[#f7f8f6] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f0faf2] to-[#f7f8f6] pt-16 lg:pt-24 pb-12 lg:pb-16 px-6 lg:px-8">
        <div className="max-w-[896px] mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-[rgba(153,204,51,0.15)] rounded-full px-4 py-1.5 mb-6 lg:mb-8">
            <div className="size-1.5 rounded-full bg-[#9c3]" />
            <span className="text-[#538100] font-bold text-[11px] lg:text-[12px] tracking-wider uppercase">
              USDA Data Verified
            </span>
          </div>

          <h1 className="font-black text-[#1b1c19] text-[32px] leading-[36px] lg:text-[56px] lg:leading-[64px] tracking-[-1px]">
            Nutrition tools built on data{" "}
            <br className="hidden lg:block" />
            you can trust
          </h1>
          <p className="text-[#475569] text-base lg:text-[20px] leading-relaxed lg:leading-[32px] mt-4 lg:mt-6 max-w-[672px] mx-auto">
            A platform your household trusts beyond the headlines and
            misinformation — backed by the same reference data clinicians use,
            tailored to every member.
          </p>
        </div>
      </section>

      {/* Sidebar + Feature Sections */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-16 lg:pb-24">
        {/* Mobile Tabs - sticky below navbar */}
        <div className="lg:hidden sticky top-[64px] z-40 -mx-6 px-0">
          <FeaturesSidebar />
        </div>

        <div className="lg:flex lg:gap-12">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <FeaturesSidebar />
          </div>

          {/* Feature Content */}
          <div className="flex-1 min-w-0 overflow-hidden space-y-6 lg:space-y-12 mt-6 lg:mt-0">
            {featureSections.map((section) => (
              <FeatureDetailSection key={section.id} {...section} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <section className="bg-[#1a2b2b] py-12 lg:py-16">
        <div className="max-w-[896px] mx-auto px-6 lg:px-8 text-center">
          <p className="text-[#9c3] font-bold text-[10px] lg:text-[12px] tracking-[2.8px] uppercase mb-4">
            Data & Compliance Assurance
          </p>
          <p className="text-white/60 text-sm lg:text-[16px] leading-relaxed lg:leading-[26px]">
            All nutritional calculations are based on USDA Dietary Reference
            Intakes and FoodData Central. BMR estimates use the Mifflin-St Jeor
            equation. Nutri is not a substitute for professional medical advice.
            Consult your healthcare provider for specific dietary needs.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-t from-[#f0faf2] to-[#f7f8f6] py-16 lg:py-24">
        <div className="max-w-[672px] mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h2 className="font-black text-[#1a3c34] text-[32px] leading-[36px] lg:text-[48px] lg:leading-[52px]">
            Ready to feed your family{" "}
            <span className="text-[#538100]">better?</span>
          </h2>
          <p className="text-[#475569] text-base lg:text-[18px] leading-relaxed">
            Join 50,000+ families who trust Nutri for their daily nutrition.
          </p>
          <Link
            href="/get-started"
            className={cn(
              "inline-flex items-center justify-center rounded-full px-10 py-4 lg:py-5 w-full lg:w-auto",
              "bg-[#9c3] text-[#0f172a] font-black text-base lg:text-[18px]",
              "hover:brightness-110 transition-all",
              "shadow-[0px_20px_25px_-5px_rgba(153,204,51,0.2),0px_8px_10px_-6px_rgba(153,204,51,0.2)]"
            )}
          >
            Start Your Free Trial
          </Link>
          <p className="text-[#94a3b8] font-bold text-[10px] lg:text-[12px] tracking-[1.2px] uppercase">
            No credit card required · Free to start
          </p>
        </div>
      </section>
    </div>
  );
}
