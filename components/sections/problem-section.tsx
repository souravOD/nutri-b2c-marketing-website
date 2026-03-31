export function ProblemSection() {
  return (
    <section id="problem" className="bg-white py-[160px] px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex gap-20 items-center">
          {/* Left — Text */}
          <div className="shrink-0 w-[568px]">
            <h2 className="font-black text-[#161910] text-[48px] leading-[48px] tracking-[-1.2px]">
              Built for Families — Not Just One Person
            </h2>
            <div className="h-5" />
            <p className="text-[#475569] text-[20px] leading-[32.5px] pt-2">
              Most nutrition apps assume you eat alone and have no
              budget. Real family life involves multiple palates, allergies,
              and cost considerations.
            </p>
          </div>

          {/* Right — 2 Problem Cards */}
          <div className="flex-1 grid grid-cols-2 gap-8">
            {/* Card 1: No Family Profiles */}
            <div className="bg-[#faf8f3] border border-[rgba(83,129,0,0.05)] rounded-[40px] h-[316px] relative p-8">
              <div className="bg-[rgba(153,204,51,0.2)] rounded-2xl size-14 flex items-center justify-center">
                <img src="/assets/home/problem-icon-1.svg" alt="" className="size-8" />
              </div>
              <h3 className="font-bold text-[#1a3c34] text-[20px] leading-[28px] mt-6">
                No Family Profiles
              </h3>
              <p className="text-[#64748b] text-[16px] leading-[26px] mt-3">
                Competitors track one
                person. No app manages
                nutrition for multiple
                household members
                simultaneously—until now.
              </p>
            </div>

            {/* Card 2: Ignored Budgets */}
            <div className="bg-[#faf8f3] border border-[rgba(83,129,0,0.05)] rounded-[40px] h-[316px] relative p-8">
              <div className="bg-[rgba(153,204,51,0.2)] rounded-2xl size-14 flex items-center justify-center">
                <img src="/assets/home/problem-icon-2.svg" alt="" className="size-8" />
              </div>
              <h3 className="font-bold text-[#1a3c34] text-[20px] leading-[28px] mt-6">
                Ignored Budgets
              </h3>
              <p className="text-[#64748b] text-[16px] leading-[26px] mt-3">
                Not a single competitor
                connects your meal plan
                to your grocery spending.
                NutriFind is the only app
                that does.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
