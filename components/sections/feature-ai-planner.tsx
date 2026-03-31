export function FeatureAIPlanner() {
  return (
    <section className="bg-[#f0faf2]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex items-center h-[495px] px-[91px] py-[95px]">
          {/* Left — Text */}
          <div className="w-[422px] shrink-0">
            {/* Faded number */}
            <div className="text-[#538100] font-black text-[72px] leading-[72px] opacity-10">
              02
            </div>
            {/* Heading */}
            <h2 className="font-black text-[#1a3c34] text-[30px] leading-[37.5px] mt-2">
              Your weekly meals,
              <br />
              <span className="text-[#538100]">planned in seconds.</span>
            </h2>
            {/* Body */}
            <p className="text-[#475569] text-[16px] leading-[24px] mt-6">
              Tell Nutri what your family loves. Our AI
              generates a full week of personalized, balanced
              meals.
            </p>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Right — AI Planner Visual */}
          <div className="w-[522px] shrink-0 relative">
            <div className="bg-white rounded-[40px] border border-[rgba(83,129,0,0.1)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] px-8 pt-12 pb-12">
              {/* AI Badge */}
              <div className="inline-flex items-center gap-2 bg-[#1a3c34] rounded-full px-4 py-2 mb-8">
                <img src="/assets/home/ai-badge-icon.svg" alt="" className="size-3" />
                <span className="text-[#9c3] font-bold text-[10px] tracking-wider">AI-GENERATED FOR YOUR FAMILY</span>
              </div>

              {/* Meal Cards Stack */}
              <div className="space-y-0 relative">
                {/* Highlighted Meal - Chicken Wrap */}
                <div className="bg-white border border-[#f1f5f9] rounded-2xl shadow-[0px_10px_25px_0px_rgba(0,0,0,0.1)] p-5 flex items-center gap-4 relative z-10 -ml-[130px] w-[calc(100%+60px)]">
                  <span className="text-[27px]">🥙</span>
                  <div className="flex-1">
                    <p className="text-[#0f172a] font-bold text-[16px]">Chicken Wrap</p>
                    <p className="text-[#94a3b8] text-[13px]">Lunch · 12:30pm</p>
                  </div>
                  <span className="text-[#538100] font-bold text-[16px]">480 kcal</span>
                </div>

                {/* Dimmed Meal - Grilled Salmon */}
                <div className="border border-[#f1f5f9] rounded-2xl p-4 flex items-center gap-4 opacity-50 mt-2">
                  <span className="text-[24px]">🐟</span>
                  <div className="flex-1">
                    <p className="text-[#0f172a] font-bold text-[14px]">Grilled Salmon</p>
                    <p className="text-[#94a3b8] text-[12px]">Dinner · 7:00pm</p>
                  </div>
                  <span className="text-[#538100] font-bold text-[14px]">520 kcal</span>
                </div>
              </div>
            </div>

            {/* Recipe Card Float — Bottom Right */}
            <div className="absolute bottom-[-20px] right-[-25px] w-[210px] bg-white rounded-[29px] border border-[#f1f5f9] shadow-[0px_10px_25px_0px_rgba(0,0,0,0.1)] overflow-hidden">
              <div className="h-[117px] overflow-hidden">
                <img src="/assets/home/hero-recipe-image.png" alt="Grilled Salmon Bowl" className="w-full h-full object-cover" />
              </div>
              <div className="p-2.5 text-center">
                <p className="text-[#0f172a] font-bold text-[11px]">Grilled Salmon with Quinoa Bowl</p>
                <div className="flex gap-2 text-[#64748b] text-[9px] mt-1 justify-center">
                  <span>450 kcal</span>
                  <span>30g Protein</span>
                </div>
                <div className="flex gap-1 mt-2">
                  <button className="flex-1 bg-[#9c3] text-[#1a1a1a] font-bold text-[9px] py-1 rounded-full">Add to Log</button>
                  <button className="flex-1 bg-[#f0f7e6] text-[#538100] font-bold text-[9px] py-1 rounded-full">Not for me</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
