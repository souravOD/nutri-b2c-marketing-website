const familyMembers = [
  { name: "Sarah", emoji: "👩", goal: "Weight management", kcal: "1,650", border: "border-[#538100]" },
  { name: "Mark", emoji: "👨", goal: "Muscle gain", kcal: "2,800", border: "border-[rgba(153,204,51,0.2)]" },
  { name: "Noah, 6", emoji: "👦", goal: "Gluten-free · Growth", kcal: "980", border: "border-[rgba(153,204,51,0.2)]" },
  { name: "Lily, 2", emoji: "👶", goal: "Healthy Start", kcal: "750", border: "border-[rgba(153,204,51,0.2)]" },
];

export function FamilyProfilesSection() {
  return (
    <section className="bg-[#538100] py-24">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col gap-20 items-center justify-center">
          {/* Header */}
          <div className="max-w-[768px] text-center">
            <p className="text-[#9c3] font-bold text-[14px] tracking-[2.8px] uppercase">
              Built for Households
            </p>
            <h2 className="font-black text-white text-[48px] leading-[48px] mt-6">
              One app. Every member of your
              <br />
              family.
            </h2>
            <p className="text-white/60 text-[20px] leading-[28px] mt-6">
              Create profiles for everyone. Track individual nutrition, allergens, and goals in
              one unified family view.
            </p>
          </div>

          {/* Family Member Cards */}
          <div className="grid grid-cols-4 gap-6 w-full">
            {familyMembers.map((member) => (
              <div
                key={member.name}
                className={`bg-[#faf8f3] border ${member.border} rounded-[40px] h-[293px] relative`}
              >
                {/* Emoji */}
                <div className="absolute left-8 right-8 top-8 flex flex-col items-center">
                  <span className="text-[48px]">{member.emoji}</span>
                </div>

                {/* Name */}
                <div className="absolute left-8 right-8 top-[104px] flex flex-col items-center">
                  <span className="text-[#1a3c34] font-bold text-[20px]">{member.name}</span>
                </div>

                {/* Goal */}
                <div className="absolute left-8 right-8 top-[140px] flex flex-col items-center opacity-40">
                  <span className="text-[#1a3c34] text-[12px] tracking-[1.2px] uppercase text-center">
                    {member.goal}
                  </span>
                </div>

                {/* Kcal Goal */}
                <div className="absolute left-8 right-8 top-[180px] bg-[rgba(153,204,51,0.1)] rounded-2xl py-4 flex flex-col items-center">
                  <span className="text-[#1a3c34] font-black text-[24px]">{member.kcal}</span>
                  <span className="text-[#1a3c34] text-[10px] tracking-[1px] uppercase opacity-50">kcal goal</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
