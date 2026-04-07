export function CreateRecipesMockup() {
  return (
    <div className="max-w-[340px] mx-auto space-y-4">
      {/* Mini Wizard Card */}
      <div className="bg-white rounded-[32px] lg:rounded-[48px] p-5 lg:p-7 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
        {/* Step Indicators */}
        <div className="flex items-center gap-2 mb-5">
          {["Basics", "Prep", "Review"].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div
                className={`size-7 rounded-full flex items-center justify-center text-[11px] font-bold ${
                  i < 2
                    ? "bg-[#538100] text-white"
                    : "bg-[#f1f5f9] text-[#94a3b8]"
                }`}
              >
                {i < 2 ? "✓" : i + 1}
              </div>
              <span
                className={`text-[12px] font-medium ${
                  i < 2 ? "text-[#538100]" : "text-[#94a3b8]"
                }`}
              >
                {step}
              </span>
              {i < 2 && (
                <div className="w-6 h-px bg-[#dee4d3]" />
              )}
            </div>
          ))}
        </div>

        {/* Recipe Preview */}
        <div className="bg-[#f7f8f6] rounded-2xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[24px]">🍝</span>
            <div>
              <p className="text-[#0f172a] font-bold text-[14px]">
                Homemade Pasta Primavera
              </p>
              <p className="text-[#94a3b8] text-[12px]">
                30 min · 4 servings · 420 kcal
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["Vegetarian", "Low Sodium", "High Fiber"].map((tag) => (
              <span
                key={tag}
                className="bg-[rgba(153,204,51,0.15)] text-[#538100] text-[10px] font-medium px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Success Confirmation */}
      <div className="bg-[#f0faf2] border border-[rgba(153,204,51,0.3)] rounded-2xl px-4 py-3 flex items-center gap-3">
        <div className="size-8 rounded-full bg-[#9c3] flex items-center justify-center flex-shrink-0">
          <span className="text-white text-[14px]">✓</span>
        </div>
        <div>
          <p className="text-[#538100] font-bold text-[13px]">
            Recipe Added Successfully!
          </p>
          <p className="text-[#64748b] text-[11px]">
            Saved to your collection
          </p>
        </div>
      </div>
    </div>
  );
}
