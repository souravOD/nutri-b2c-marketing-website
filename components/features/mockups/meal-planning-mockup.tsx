export function MealPlanningMockup() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const meals = [
    { type: "Breakfast", emoji: "🍳", name: "Avocado & Egg Toast", kcal: 320, time: "8:00 AM" },
    { type: "Lunch", emoji: "🥙", name: "Chicken Wrap", kcal: 480, time: "12:30 PM" },
    { type: "Dinner", emoji: "🐟", name: "Grilled Salmon", kcal: 520, time: "7:00 PM" },
  ];

  return (
    <div className="bg-white rounded-[32px] lg:rounded-[48px] p-5 lg:p-7 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] max-w-[376px] mx-auto">
      {/* AI Badge */}
      <div className="inline-flex items-center gap-2 bg-[#1a3c34] rounded-full px-3.5 py-1.5 mb-5">
        <div className="size-1.5 rounded-full bg-[#9c3]" />
        <span className="text-[#9c3] font-bold text-[9px] tracking-wider uppercase">
          AI-Generated for Your Family
        </span>
      </div>

      {/* Day Selector */}
      <div className="flex gap-1.5 mb-5 overflow-x-auto scrollbar-hide">
        {days.map((day, i) => (
          <button
            key={day}
            className={`px-3 py-1.5 rounded-full text-[11px] font-bold flex-shrink-0 transition-colors ${
              i === 2
                ? "bg-[#538100] text-white"
                : "bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0]"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Meal Cards */}
      <div className="space-y-2.5">
        {meals.map((meal, i) => (
          <div
            key={meal.type}
            className={`border border-[#f1f5f9] rounded-2xl p-3.5 flex items-center gap-3 transition-all ${
              i === 1
                ? "shadow-[0px_10px_25px_0px_rgba(0,0,0,0.08)] border-[rgba(153,204,51,0.2)]"
                : "opacity-70"
            }`}
          >
            <span className="text-[22px]">{meal.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[#94a3b8] font-bold text-[9px] tracking-wider uppercase">
                {meal.type}
              </p>
              <p className="text-[#0f172a] font-bold text-[13px] truncate">
                {meal.name}
              </p>
              <p className="text-[#94a3b8] text-[11px]">
                {meal.time} · {meal.kcal} kcal
              </p>
            </div>
            <span className="text-[#538100] font-bold text-[13px] flex-shrink-0">
              {meal.kcal}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
