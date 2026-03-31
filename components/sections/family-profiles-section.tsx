const familyMembers = [
  { name: "Sarah", emoji: "👩", goal: "Weight management", kcal: "1,650", border: "border-[#538100]" },
  { name: "Mark", emoji: "👨", goal: "Muscle gain", kcal: "2,800", border: "border-[rgba(153,204,51,0.2)]" },
  { name: "Noah, 6", emoji: "👦", goal: "Gluten-free · Growth", kcal: "980", border: "border-[rgba(153,204,51,0.2)]" },
  { name: "Lily, 2", emoji: "👶", goal: "Healthy Start", kcal: "750", border: "border-[rgba(153,204,51,0.2)]" },
];

export function FamilyProfilesSection() {
  return (
    <section className="bg-[#538100] py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:gap-20 items-center justify-center">
          {/* Header */}
          <div className="max-w-[768px] text-center">
            <p className="text-[#9c3] font-bold text-[12px] lg:text-[14px] tracking-[2.8px] uppercase">
              Built for Households
            </p>
            <h2 className="font-black text-white text-[32px] leading-[36px] lg:text-[48px] lg:leading-[48px] mt-4 lg:mt-6">
              One app. Every member of your
              <br className="hidden lg:block" />
              {" "}family.
            </h2>
            <p className="text-white/60 text-base lg:text-[20px] leading-relaxed lg:leading-[28px] mt-4 lg:mt-6">
              Create profiles for everyone. Track individual nutrition, allergens, and goals in
              one unified family view.
            </p>
          </div>

          {/* Family Member Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full">
            {familyMembers.map((member) => (
              <div
                key={member.name}
                className={`bg-[#faf8f3] border ${member.border} rounded-[28px] lg:rounded-[40px] h-auto lg:h-[293px] relative p-6 lg:p-0`}
              >
                {/* Mobile: flex layout, Desktop: absolute positioning */}
                <div className="flex flex-col items-center gap-2 lg:hidden">
                  <span className="text-[36px]">{member.emoji}</span>
                  <span className="text-[#1a3c34] font-bold text-[16px]">{member.name}</span>
                  <span className="text-[#1a3c34] text-[10px] tracking-[1px] uppercase text-center opacity-40">
                    {member.goal}
                  </span>
                  <div className="bg-[rgba(153,204,51,0.1)] rounded-xl py-3 px-4 flex flex-col items-center w-full mt-1">
                    <span className="text-[#1a3c34] font-black text-[20px]">{member.kcal}</span>
                    <span className="text-[#1a3c34] text-[9px] tracking-[1px] uppercase opacity-50">kcal goal</span>
                  </div>
                </div>

                {/* Desktop: absolute positioning */}
                <div className="hidden lg:block">
                  <div className="absolute left-8 right-8 top-8 flex flex-col items-center">
                    <span className="text-[48px]">{member.emoji}</span>
                  </div>
                  <div className="absolute left-8 right-8 top-[104px] flex flex-col items-center">
                    <span className="text-[#1a3c34] font-bold text-[20px]">{member.name}</span>
                  </div>
                  <div className="absolute left-8 right-8 top-[140px] flex flex-col items-center opacity-40">
                    <span className="text-[#1a3c34] text-[12px] tracking-[1.2px] uppercase text-center">
                      {member.goal}
                    </span>
                  </div>
                  <div className="absolute left-8 right-8 top-[180px] bg-[rgba(153,204,51,0.1)] rounded-2xl py-4 flex flex-col items-center">
                    <span className="text-[#1a3c34] font-black text-[24px]">{member.kcal}</span>
                    <span className="text-[#1a3c34] text-[10px] tracking-[1px] uppercase opacity-50">kcal goal</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
