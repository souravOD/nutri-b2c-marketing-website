export function RecipeAnalyzerMockup() {
  return (
    <div className="bg-white rounded-[32px] lg:rounded-[48px] p-5 lg:p-7 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] max-w-[340px] mx-auto">
      {/* Recipe Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="size-12 lg:size-14 rounded-2xl bg-[#f0faf2] flex items-center justify-center text-[24px]">
          🥗
        </div>
        <div>
          <p className="text-[#0f172a] font-bold text-[15px] lg:text-[16px]">
            Chicken Caesar Salad
          </p>
          <p className="text-[#94a3b8] text-[12px] lg:text-[13px]">
            Lunch · 4 servings
          </p>
        </div>
      </div>

      {/* Health Rating */}
      <div className="bg-[#f0faf2] rounded-2xl px-4 py-3 flex items-center justify-between mb-5">
        <span className="text-[#538100] font-bold text-[13px]">
          Health Score
        </span>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="size-2.5 rounded-full bg-[#9c3]"
              />
            ))}
            <div className="size-2.5 rounded-full bg-[#e2e8f0]" />
          </div>
          <span className="text-[#538100] font-black text-[14px]">8.2</span>
        </div>
      </div>

      {/* Nutrition Grid */}
      <div className="grid grid-cols-4 gap-2 mb-5">
        {[
          { val: "380", unit: "kcal", color: "text-[#538100]" },
          { val: "32g", unit: "Protein", color: "text-[#538100]" },
          { val: "18g", unit: "Carbs", color: "text-[#fb923c]" },
          { val: "22g", unit: "Fat", color: "text-[#60a5fa]" },
        ].map((stat) => (
          <div
            key={stat.unit}
            className="bg-[#f7f8f6] rounded-xl p-2.5 text-center"
          >
            <p className={`${stat.color} font-bold text-[13px]`}>{stat.val}</p>
            <p className="text-[#94a3b8] text-[9px] uppercase tracking-wider mt-0.5">
              {stat.unit}
            </p>
          </div>
        ))}
      </div>

      {/* Warning */}
      <div className="bg-[#fef2f2] border border-[#fecaca] rounded-xl px-3 py-2.5 flex items-start gap-2">
        <span className="text-[12px] mt-0.5">⚠️</span>
        <div>
          <p className="text-[#991b1b] font-bold text-[11px]">
            Allergen Warning
          </p>
          <p className="text-[#b91c1c] text-[11px] mt-0.5">
            Contains dairy — flagged for Noah&apos;s profile
          </p>
        </div>
      </div>
    </div>
  );
}
