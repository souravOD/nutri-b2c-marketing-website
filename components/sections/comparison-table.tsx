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
      className="bg-[#f7f8f6] py-24"
    >
      <div className="max-w-[1000px] mx-auto px-8">
        <div className="flex flex-col gap-16">
          {/* Heading */}
          <div className="flex flex-col items-center">
            <h2 className="font-black text-[#161910] text-[36px] leading-[40px] text-center">
              Why Nutri Beats the Competition
            </h2>
          </div>

          {/* Table */}
          <div className="bg-white rounded-[48px] border border-[#dee4d3] overflow-hidden">
            {/* Header */}
            <div className="bg-[#eff1e9] flex">
              <div className="w-[358px] p-6">
                <span className="font-bold text-[#161910] text-[16px]">Feature</span>
              </div>
              <div className="w-[315px] p-6">
                <span className="font-bold text-[#538100] text-[16px]">Nutri App</span>
              </div>
              <div className="flex-1 p-6">
                <span className="font-bold text-[#161910] text-[16px]">Traditional Apps</span>
              </div>
            </div>

            {/* Rows */}
            {features.map((feature, i) => (
              <div
                key={feature.name}
                className={`flex items-center ${i < features.length - 1 ? "border-b border-[#eff1e9]" : ""}`}
              >
                <div className="w-[358px] px-6 py-7">
                  <span className="font-medium text-[#161910] text-[16px]">{feature.name}</span>
                </div>
                <div className="w-[315px] px-6 py-7 flex items-center gap-2">
                  {feature.nutriIcon && (
                    <div className="size-5 bg-[#9c3] rounded-full flex items-center justify-center">
                      <Check className="size-3 text-white" strokeWidth={3} />
                    </div>
                  )}
                  <span className="text-[#538100] text-[16px]">{feature.nutri}</span>
                </div>
                <div className="flex-1 px-6 py-7">
                  <span className="text-[#7c8e57] text-[16px]">{feature.traditional}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
