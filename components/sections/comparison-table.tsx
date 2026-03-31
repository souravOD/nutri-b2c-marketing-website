import { Check } from "lucide-react";

const features = [
  {
    name: "Family Profiles",
    nutri: "Unlimited",
    nutriIcon: true,
    traditional: "Single Only",
  },
  {
    name: "Allergy Tracking",
    nutri: "Advanced",
    nutriIcon: true,
    traditional: "Basic or None",
  },
  {
    name: "Auto Grocery List",
    nutri: "Aisle-Sorted",
    nutriIcon: true,
    traditional: "Simple List",
  },
  {
    name: "Multi-Diet Planning",
    nutri: "Supported",
    nutriIcon: true,
    traditional: "Not Possible",
  },
  {
    name: "Household Budget",
    nutri: "Real-time",
    nutriIcon: true,
    traditional: "Manual Entry",
  },
];

export function ComparisonTable() {
  return (
    <section
      id="results"
      className="bg-[#f7f8f6] py-16 lg:py-24"
    >
      <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:gap-16">
          {/* Heading */}
          <div className="flex flex-col items-center">
            <h2 className="font-black text-[#161910] text-[28px] lg:text-[36px] leading-[32px] lg:leading-[40px] text-center">
              Why Nutri Beats the Competition
            </h2>
          </div>

          {/* Table — scrollable on mobile */}
          <div className="overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0">
            <div className="bg-white rounded-[32px] lg:rounded-[48px] border border-[#dee4d3] overflow-hidden min-w-[580px]">
              {/* Header */}
              <div className="bg-[#eff1e9] flex">
                <div className="w-[180px] lg:w-[358px] p-4 lg:p-6">
                  <span className="font-bold text-[#161910] text-[13px] lg:text-[16px]">Feature</span>
                </div>
                <div className="w-[180px] lg:w-[315px] p-4 lg:p-6">
                  <span className="font-bold text-[#538100] text-[13px] lg:text-[16px]">Nutri App</span>
                </div>
                <div className="flex-1 p-4 lg:p-6">
                  <span className="font-bold text-[#161910] text-[13px] lg:text-[16px]">Traditional Apps</span>
                </div>
              </div>

              {/* Rows */}
              {features.map((feature, i) => (
                <div
                  key={feature.name}
                  className={`flex items-center ${i < features.length - 1 ? "border-b border-[#eff1e9]" : ""}`}
                >
                  <div className="w-[180px] lg:w-[358px] px-4 lg:px-6 py-4 lg:py-7">
                    <span className="font-medium text-[#161910] text-[13px] lg:text-[16px]">{feature.name}</span>
                  </div>
                  <div className="w-[180px] lg:w-[315px] px-4 lg:px-6 py-4 lg:py-7 flex items-center gap-2">
                    {feature.nutriIcon && (
                      <div className="size-4 lg:size-5 bg-[#9c3] rounded-full flex items-center justify-center">
                        <Check className="size-2.5 lg:size-3 text-white" strokeWidth={3} />
                      </div>
                    )}
                    <span className="text-[#538100] text-[13px] lg:text-[16px]">{feature.nutri}</span>
                  </div>
                  <div className="flex-1 px-4 lg:px-6 py-4 lg:py-7">
                    <span className="text-[#7c8e57] text-[13px] lg:text-[16px]">{feature.traditional}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
