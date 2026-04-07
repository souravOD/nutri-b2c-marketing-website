import Link from "next/link";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#f0faf2] to-[#faf8f3] overflow-hidden pb-16 lg:pb-[160px] pt-24 lg:pt-[128px] px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 lg:gap-8 items-center lg:items-start text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex">
              <span className="bg-[rgba(153,204,51,0.2)] text-[#538100] font-bold text-[10px] lg:text-xs tracking-[1px] lg:tracking-[1.2px] uppercase px-4 py-1.5 rounded-full flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#9c3]" />
                Now available for families
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-black text-[#1a3c34] text-[40px] leading-[44px] lg:text-[72px] lg:leading-[72px]">
              The only
              <br />
              nutrition app
              <br />
              your family will
              <br />
              <span className="text-[#538100]">actually use.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#475569] text-sm lg:text-[20px] leading-relaxed lg:leading-[32.5px] max-w-[320px] lg:max-w-[672px]">
              Nutri plans your meals, builds your shopping list, and
              tracks allergens for the whole household in one unified
              experience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 pt-2 w-full lg:w-auto">
              <Link
                href="/get-started"
                className={cn(
                  "inline-flex items-center justify-center rounded-full w-full lg:w-auto px-10 py-4 lg:py-5",
                  "bg-[#9c3] text-[#0f172a] font-black text-base lg:text-[20px]",
                  "hover:brightness-110 transition-all",
                  "shadow-[0px_20px_25px_-5px_rgba(153,204,51,0.2),0px_8px_10px_-6px_rgba(153,204,51,0.2)]"
                )}
              >
                Start Your Free Trial
              </Link>
              <Link
                href="/#features"
                className="inline-flex items-center gap-2 text-[#538100] font-bold text-base lg:text-[18px] hover:opacity-80 transition-opacity"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#538100" strokeWidth="2"/>
                  <polygon points="10,8 16,12 10,16" fill="#538100"/>
                </svg>
                Watch how it works
              </Link>
            </div>
          </div>

          {/* Right — Johnson Family App Preview */}
          <div className="relative max-w-[320px] lg:max-w-none mx-auto lg:mx-0">
            <div className="bg-white rounded-[32px] lg:rounded-[48px] p-3 lg:p-[17px] border border-[rgba(83,129,0,0.05)] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
              <div className="bg-[#538100] rounded-[28px] lg:rounded-[40px] overflow-hidden">
                {/* Header area */}
                <div className="px-6 lg:px-8 pt-4 lg:pt-5 pb-1">
                  <p className="text-white/60 text-[10px] lg:text-[12px] leading-[16px]">Good morning,</p>
                  <h2 className="text-white font-bold text-lg lg:text-[24px] leading-[24px] lg:leading-[30px] mt-1">The Johnson Family</h2>
                </div>

                {/* Nutrition Summary Card */}
                <div className="px-6 lg:px-8 pb-0">
                  <div className="bg-white rounded-[32px] lg:rounded-[48px] p-4 lg:p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-[#f1f5f9]">
                    {/* Daily Progress + Circular Chart */}
                    <div className="flex items-center justify-between mb-4 lg:mb-6">
                      <div>
                        <p className="text-[#64748b] text-[11px] lg:text-[14px] font-medium tracking-[0.7px] uppercase">Daily Progress</p>
                        <div className="flex items-end mt-1">
                          <span className="text-[#0f172a] font-bold text-[22px] lg:text-[30px] leading-[28px] lg:leading-[36px]">450 </span>
                          <span className="text-[#94a3b8] text-sm lg:text-[18px] leading-[22px] lg:leading-[28px]">/ 2000 kcal</span>
                        </div>
                      </div>
                      {/* Circular Progress */}
                      <div className="relative size-[60px] lg:size-[80px]">
                        <svg className="size-[60px] lg:size-[80px] -rotate-90" viewBox="0 0 80 80">
                          <circle cx="40" cy="40" r="34" fill="none" stroke="#f1f5f9" strokeWidth="8" />
                          <circle cx="40" cy="40" r="34" fill="none" stroke="#9c3" strokeWidth="8" strokeLinecap="round"
                            strokeDasharray={`${2 * Math.PI * 34 * 0.22} ${2 * Math.PI * 34 * 0.78}`} />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-[#0f172a] font-bold text-[12px] lg:text-[15px]">22%</span>
                      </div>
                    </div>

                    {/* Macro Bars */}
                    <div className="space-y-3 lg:space-y-4">
                      {[
                        { label: "Protein", value: "35g / 150g", pct: 23, color: "#9c3" },
                        { label: "Carbs", value: "50g / 250g", pct: 20, color: "#60a5fa" },
                        { label: "Fats", value: "15g / 70g", pct: 21, color: "#fb923c" },
                      ].map(({ label, value, pct, color }) => (
                        <div key={label}>
                          <div className="flex justify-between text-[12px] lg:text-[14px] font-medium mb-1">
                            <span className="text-[#0f172a]">{label}</span>
                            <span className="text-[#64748b]">{value}</span>
                          </div>
                          <div className="h-1.5 lg:h-2 bg-[#f1f5f9] rounded-full overflow-hidden">
                            <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: color }} />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Feedback line */}
                    <div className="flex items-center gap-1 mt-3 lg:mt-4">
                      <img src="/assets/home/checkmark-icon.svg" alt="" className="size-3" />
                      <span className="text-[#538100] font-semibold text-[11px] lg:text-[12px]">Great protein choice!</span>
                    </div>
                  </div>
                </div>

                {/* Meal Slot */}
                <div className="px-6 lg:px-8 py-3 lg:py-4">
                  <div className="bg-white/10 border border-[rgba(153,204,51,0.05)] rounded-[32px] lg:rounded-[48px] px-3 lg:px-[18px] py-3 lg:py-[18px] flex items-center justify-between shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                    <div className="flex items-center gap-3 lg:gap-4">
                      <div className="size-12 lg:size-16 rounded-full overflow-hidden bg-[#538100]/50 flex-shrink-0">
                        <img src="/assets/home/hero-food-image.png" alt="Breakfast" className="size-full object-cover" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-[8px] lg:text-[10px] tracking-[0.5px] uppercase">Breakfast</p>
                        <p className="text-white font-semibold text-[13px] lg:text-[16px]">Avocado &amp; Egg Toast</p>
                        <p className="text-[#c1d2a3] text-[10px] lg:text-[12px]">15 mins • 320 kcal</p>
                      </div>
                    </div>
                    <div className="size-5 lg:size-6">
                      <img src="/assets/home/play-icon.svg" alt="" className="size-full opacity-60" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="flex flex-col lg:flex-row gap-3 mt-4 lg:mt-0 lg:absolute lg:-bottom-4 lg:right-8 mx-auto lg:mx-0 w-fit">
              <div className="bg-white rounded-2xl px-5 lg:px-6 py-3 lg:py-4 flex items-center justify-center lg:justify-start gap-3 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] border border-[rgba(83,129,0,0.05)]">
                <span className="size-3 rounded-full bg-[#9c3]" />
                <span className="text-[#1a3c34] font-bold text-[13px] lg:text-[14px]">Allergen-free certified ✓</span>
              </div>
              <div className="bg-white rounded-2xl px-5 lg:px-6 py-3 lg:py-4 flex items-center justify-center lg:justify-start gap-3 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] border border-[rgba(83,129,0,0.05)]">
                <span className="size-3 rounded-full bg-[#60a5fa]" />
                <span className="text-[#1a3c34] font-bold text-[13px] lg:text-[14px]">HIPAA Compliant ✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
