import Link from "next/link";
import {
  MessageSquareText,
  ScanBarcode,
  CalendarDays,
  Activity,
  ShoppingCart,
  Users,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    id: "ai-assistant",
    icon: MessageSquareText,
    title: "AI-powered Nutrition assistant",
    description:
      "Ask anything about your diet, get instant answers backed by verified nutrition data and personalized to your family's needs.",
    span: "lg:col-span-8",
    row: "lg:row-start-1",
    bg: "bg-white",
    textColor: "text-[#1b1c19]",
    descColor: "text-[#434939]",
    iconBg: "bg-[rgba(153,204,51,0.2)]",
    iconColor: "text-[#538100]",
    hasMockup: true,
  },
  {
    id: "scanner",
    icon: ScanBarcode,
    title: "Scan and analyze anything instantly",
    description:
      "Point your camera at any barcode or ingredient label for instant nutritional breakdown, allergen alerts, and one-tap logging.",
    span: "lg:col-span-4",
    row: "lg:row-start-1",
    bg: "bg-[#416600]",
    textColor: "text-white",
    descColor: "text-white/70",
    iconBg: "bg-white/20",
    iconColor: "text-white",
    stat: { value: "99.4%", label: "Accuracy" },
  },
  {
    id: "meal-planning",
    icon: CalendarDays,
    title: "AI-powered meal planning",
    description:
      "Generate a full week of personalized meals in seconds. Balanced for every family member's goals.",
    span: "lg:col-span-4",
    row: "lg:row-start-2",
    bg: "bg-[#fffefb]",
    textColor: "text-[#1b1c19]",
    descColor: "text-[#434939]",
    iconBg: "bg-[rgba(153,204,51,0.2)]",
    iconColor: "text-[#538100]",
  },
  {
    id: "tracking",
    icon: Activity,
    title: "Real-time nutrition tracking",
    description:
      "Track 11 key nutrients against personalized targets. Health condition alerts warn when intake could affect conditions.",
    span: "lg:col-span-4",
    row: "lg:row-start-2",
    bg: "bg-white",
    textColor: "text-[#1b1c19]",
    descColor: "text-[#434939]",
    iconBg: "bg-[rgba(153,204,51,0.2)]",
    iconColor: "text-[#538100]",
  },
  {
    id: "grocery",
    icon: ShoppingCart,
    title: "Budget smart grocery list",
    description:
      "Auto-generate aisle-sorted shopping lists from your meal plan. Track spend in real time against your weekly budget.",
    span: "lg:col-span-4",
    row: "lg:row-start-2",
    bg: "bg-[#fffefb]",
    textColor: "text-[#1b1c19]",
    descColor: "text-[#434939]",
    iconBg: "bg-[rgba(153,204,51,0.2)]",
    iconColor: "text-[#538100]",
  },
  {
    id: "family-profiles",
    icon: Users,
    title: "Unified family profiles",
    description:
      "Create profiles for everyone. Track individual nutrition, allergens, and goals in one unified family view.",
    span: "lg:col-span-6",
    row: "lg:row-start-3",
    bg: "bg-white",
    textColor: "text-[#1b1c19]",
    descColor: "text-[#434939]",
    iconBg: "bg-[rgba(153,204,51,0.2)]",
    iconColor: "text-[#538100]",
  },
  {
    id: "insights",
    icon: Lightbulb,
    title: "Recipe insights and swaps",
    description:
      "Get smart ingredient alternatives that match dietary needs without sacrificing taste. Every swap is nutrition-verified.",
    span: "lg:col-span-6",
    row: "lg:row-start-3",
    bg: "bg-white",
    textColor: "text-[#1b1c19]",
    descColor: "text-[#434939]",
    iconBg: "bg-[rgba(153,204,51,0.2)]",
    iconColor: "text-[#538100]",
  },
];

export function FeaturesBentoGrid() {
  return (
    <section id="features" className="bg-[#f0faf2] py-16 lg:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-4 lg:gap-6 mb-12 lg:mb-16">
          <p className="text-[#538100] font-bold text-[12px] lg:text-[14px] tracking-[2.8px] uppercase">
            Our Features
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="font-black text-[#1b1c19] text-[32px] leading-[36px] lg:text-[48px] lg:leading-[52px] tracking-[-1px]">
              Intelligence in every{" "}
              <span className="text-[#538100] italic">bite.</span>
            </h2>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 bg-[#538100] text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-[#416600] transition-colors w-fit shadow-[0px_4px_6px_-1px_rgba(83,129,0,0.2)]"
            >
              Explore all features
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className={`${feature.bg} ${feature.span} ${feature.row} rounded-[32px] lg:rounded-[40px] p-6 lg:p-8 border border-[rgba(83,129,0,0.05)] relative overflow-hidden transition-shadow hover:shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.07)] group`}
              >
                {/* Icon Badge */}
                <div
                  className={`${feature.iconBg} rounded-2xl size-12 lg:size-14 flex items-center justify-center mb-4 lg:mb-5`}
                >
                  <Icon
                    className={`${feature.iconColor} size-5 lg:size-6`}
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}
                <h3
                  className={`${feature.textColor} font-bold text-lg lg:text-[20px] leading-[26px] lg:leading-[28px] mb-2 lg:mb-3`}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className={`${feature.descColor} text-sm lg:text-[15px] leading-relaxed lg:leading-[24px] max-w-[400px]`}
                >
                  {feature.description}
                </p>

                {/* Stat Badge (Scanner Card) */}
                {"stat" in feature && feature.stat && (
                  <div className="mt-5 lg:mt-6 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2">
                    <span className="text-white font-black text-lg lg:text-[20px]">
                      {feature.stat.value}
                    </span>
                    <span className="text-white/60 font-medium text-xs lg:text-[13px] uppercase tracking-wider">
                      {feature.stat.label}
                    </span>
                  </div>
                )}

                {/* AI Chat Mockup (Hero Card) */}
                {"hasMockup" in feature && feature.hasMockup && (
                  <div className="hidden lg:block absolute right-8 top-8 w-[300px]">
                    <div className="bg-[#f7f8f6] rounded-[24px] p-5 border border-[#dee4d3] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05)]">
                      {/* User Message */}
                      <div className="flex justify-end mb-3">
                        <div className="bg-[#538100] text-white text-[13px] leading-[18px] rounded-[16px] rounded-br-[4px] px-4 py-2.5 max-w-[200px]">
                          Is this recipe safe for Noah&apos;s gluten allergy?
                        </div>
                      </div>
                      {/* AI Response */}
                      <div className="flex justify-start">
                        <div className="bg-white text-[#1b1c19] text-[13px] leading-[18px] rounded-[16px] rounded-bl-[4px] px-4 py-2.5 max-w-[220px] border border-[#dee4d3]">
                          <div className="flex items-center gap-1.5 mb-1">
                            <div className="size-1.5 rounded-full bg-[#9c3]" />
                            <span className="font-bold text-[11px] text-[#538100]">
                              Nutri AI
                            </span>
                          </div>
                          Yes! This recipe is certified gluten-free and safe for
                          Noah. ✓
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
