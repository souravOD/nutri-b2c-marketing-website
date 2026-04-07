export function RecipeInsightsMockup() {
  return (
    <div className="bg-white rounded-[32px] lg:rounded-[48px] p-5 lg:p-7 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] max-w-[340px] mx-auto">
      {/* Recipe Card */}
      <div className="relative mb-5">
        <div className="bg-[#f7f8f6] rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-br from-[#e8f5e9] to-[#fff8e1] h-[120px] flex items-center justify-center">
            <span className="text-[48px]">🥗</span>
          </div>
          <div className="p-4">
            <p className="text-[#0f172a] font-bold text-[15px]">
              Quinoa Salad
            </p>
            <p className="text-[#94a3b8] text-[12px] mt-0.5">
              Mediterranean Style · 25 min
            </p>
          </div>
        </div>
      </div>

      {/* Ingredient Swap */}
      <div className="border border-[rgba(153,204,51,0.2)] rounded-2xl p-4 bg-[#fafff5]">
        <p className="text-[#538100] font-bold text-[11px] tracking-wider uppercase mb-3">
          Smart Swap Suggestion
        </p>
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-[#fef2f2] rounded-xl px-3 py-2 text-center">
            <p className="text-[#b91c1c] text-[10px] font-medium uppercase tracking-wider">
              Replace
            </p>
            <p className="text-[#0f172a] font-bold text-[13px] mt-0.5">
              Feta Cheese
            </p>
            <p className="text-[#ef4444] text-[10px]">Contains dairy</p>
          </div>
          <div className="text-[#94a3b8] text-[16px]">→</div>
          <div className="flex-1 bg-[#f0faf2] rounded-xl px-3 py-2 text-center">
            <p className="text-[#538100] text-[10px] font-medium uppercase tracking-wider">
              With
            </p>
            <p className="text-[#0f172a] font-bold text-[13px] mt-0.5">
              Nutritional Yeast
            </p>
            <p className="text-[#538100] text-[10px]">Dairy-free ✓</p>
          </div>
        </div>
      </div>
    </div>
  );
}
