import { Users, DollarSign, FileWarning } from "lucide-react";

const problems = [
  {
    icon: Users,
    title: "No Family Profiles",
    description:
      "Competitors track one person. No app manages nutrition for multiple household members simultaneously—until now.",
  },
  {
    icon: DollarSign,
    title: "Ignored Budgets",
    description:
      "Not a single competitor connects your meal plan to your grocery spending. NutriFind is the only app that does.",
  },
  {
    icon: FileWarning,
    title: "Confusing Nutrition Labels",
    description:
      "Cryptic ingredient lists and misleading health claims make it impossible to know what you're actually feeding your family. We decode it all instantly.",
    wide: true,
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="bg-white py-20 lg:py-[160px] px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Label */}
        <p className="text-[#538100] font-bold text-[12px] lg:text-[14px] tracking-[2.8px] uppercase mb-4 lg:mb-6">
          The Problem
        </p>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
          {/* Left — Text */}
          <div className="shrink-0 w-full lg:w-[568px] text-center lg:text-left">
            <h2 className="font-black text-[#161910] text-[32px] leading-[36px] lg:text-[48px] lg:leading-[52px] tracking-[-1.2px]">
              They were built for one person.{" "}
              <span className="text-[#538100]">
                You&apos;re feeding a family.
              </span>
            </h2>
            <div className="h-5" />
            <p className="text-[#475569] text-base lg:text-[20px] leading-relaxed lg:leading-[32.5px] pt-2">
              Most nutrition apps assume you eat alone and have no budget. Real
              family life involves multiple palates, allergies, and cost
              considerations.
            </p>
          </div>

          {/* Right — Problem Cards */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
              {problems.map((problem) => {
                const Icon = problem.icon;
                return (
                  <div
                    key={problem.title}
                    className={`bg-[#faf8f3] border border-[rgba(83,129,0,0.05)] rounded-[32px] lg:rounded-[40px] p-6 lg:p-8 ${
                      problem.wide ? "lg:col-span-2" : ""
                    }`}
                  >
                    <div className="bg-[rgba(153,204,51,0.2)] rounded-2xl size-12 lg:size-14 flex items-center justify-center">
                      <Icon
                        className="size-5 lg:size-6 text-[#538100]"
                        strokeWidth={2}
                      />
                    </div>
                    <h3 className="font-bold text-[#1a3c34] text-lg lg:text-[20px] leading-[28px] mt-4 lg:mt-6">
                      {problem.title}
                    </h3>
                    <p className="text-[#64748b] text-sm lg:text-[16px] leading-relaxed lg:leading-[26px] mt-2 lg:mt-3">
                      {problem.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
