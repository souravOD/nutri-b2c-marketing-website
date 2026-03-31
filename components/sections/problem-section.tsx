export function ProblemSection() {
  return (
    <section id="problem" className="bg-white py-20 lg:py-[160px] px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
          {/* Left — Text */}
          <div className="shrink-0 w-full lg:w-[568px] text-center lg:text-left">
            <h2 className="font-black text-[#161910] text-[32px] leading-[36px] lg:text-[48px] lg:leading-[48px] tracking-[-1.2px]">
              Built for Families — Not Just One Person
            </h2>
            <div className="h-5" />
            <p className="text-[#475569] text-base lg:text-[20px] leading-relaxed lg:leading-[32.5px] pt-2">
              Most nutrition apps assume you eat alone and have no
              budget. Real family life involves multiple palates, allergies,
              and cost considerations.
            </p>
          </div>

          {/* Right — 2 Problem Cards */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">
            {/* Card 1: No Family Profiles */}
            <div className="bg-[#faf8f3] border border-[rgba(83,129,0,0.05)] rounded-[32px] lg:rounded-[40px] lg:h-[316px] relative p-6 lg:p-8">
              <div className="bg-[rgba(153,204,51,0.2)] rounded-2xl size-12 lg:size-14 flex items-center justify-center">
                <img src="/assets/home/problem-icon-1.svg" alt="" className="size-6 lg:size-8" />
              </div>
              <h3 className="font-bold text-[#1a3c34] text-lg lg:text-[20px] leading-[28px] mt-4 lg:mt-6">
                No Family Profiles
              </h3>
              <p className="text-[#64748b] text-sm lg:text-[16px] leading-relaxed lg:leading-[26px] mt-2 lg:mt-3">
                Competitors track one
                person. No app manages
                nutrition for multiple
                household members
                simultaneously—until now.
              </p>
            </div>

            {/* Card 2: Ignored Budgets */}
            <div className="bg-[#faf8f3] border border-[rgba(83,129,0,0.05)] rounded-[32px] lg:rounded-[40px] lg:h-[316px] relative p-6 lg:p-8">
              <div className="bg-[rgba(153,204,51,0.2)] rounded-2xl size-12 lg:size-14 flex items-center justify-center">
                <img src="/assets/home/problem-icon-2.svg" alt="" className="size-6 lg:size-8" />
              </div>
              <h3 className="font-bold text-[#1a3c34] text-lg lg:text-[20px] leading-[28px] mt-4 lg:mt-6">
                Ignored Budgets
              </h3>
              <p className="text-[#64748b] text-sm lg:text-[16px] leading-relaxed lg:leading-[26px] mt-2 lg:mt-3">
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
