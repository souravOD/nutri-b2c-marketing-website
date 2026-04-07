export function NutritionDashboardMockup() {
  return (
    <div className="bg-white rounded-[32px] lg:rounded-[48px] p-5 lg:p-7 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] max-w-[376px] mx-auto">
      {/* Header */}
      <div className="mb-5 lg:mb-7">
        <p className="text-[#0f172a] font-bold text-base lg:text-[18px] tracking-[-0.6px]">
          How is my nutrition looking?
        </p>
        <p className="text-[#64748b] text-[13px] lg:text-[14px] mt-1">
          Based on your activity and logs today.
        </p>
      </div>

      {/* Daily Summary Card */}
      <div className="border border-[rgba(148,163,184,0.24)] rounded-[24px] p-5 lg:p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
        {/* Progress Header */}
        <div className="flex items-center justify-between mb-5 lg:mb-6">
          <div>
            <p className="text-[#94a3b8] font-bold text-[11px] lg:text-[12px] tracking-[1.2px] uppercase">
              Daily Progress
            </p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-[#0f172a] font-bold text-[28px] lg:text-[36px] leading-[36px] lg:leading-[40px]">
                1,450
              </span>
              <span className="text-[#94a3b8] font-medium text-[14px] lg:text-[16px]">
                / 2000 kcal
              </span>
            </div>
          </div>
          {/* Circular Progress */}
          <div className="relative size-[56px] lg:size-[64px]">
            <svg
              className="size-full -rotate-90"
              viewBox="0 0 64 64"
            >
              <circle
                cx="32"
                cy="32"
                r="27"
                fill="none"
                stroke="#f1f5f9"
                strokeWidth="6"
              />
              <circle
                cx="32"
                cy="32"
                r="27"
                fill="none"
                stroke="#9c3"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 27 * 0.72} ${2 * Math.PI * 27 * 0.28}`}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[#0f172a] font-bold text-[11px] lg:text-[12px]">
              72%
            </span>
          </div>
        </div>

        {/* Macro Bars */}
        <div className="space-y-4 lg:space-y-5">
          {[
            { label: "Protein", value: "65g / 120g", pct: 54, color: "#9c3" },
            { label: "Carbs", value: "180g / 250g", pct: 72, color: "#fb923c" },
            { label: "Fats", value: "42g / 70g", pct: 60, color: "#60a5fa" },
          ].map(({ label, value, pct, color }) => (
            <div key={label}>
              <div className="flex justify-between text-[13px] lg:text-[14px] font-medium mb-1.5">
                <span className="text-[#0f172a]">{label}</span>
                <span className="text-[#94a3b8]">{value}</span>
              </div>
              <div className="h-2.5 bg-[#f1f5f9] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${pct}%`, backgroundColor: color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Streak Badge */}
      <div className="bg-[rgba(153,204,51,0.1)] rounded-[32px] px-3 py-2 flex items-center gap-2 mt-5 lg:mt-6">
        <span className="text-[14px]">🔥</span>
        <span className="text-[#334155] font-bold text-[12px]">
          12 Day Streak!
        </span>
      </div>
    </div>
  );
}
