export function AIAssistantMockup() {
  return (
    <div className="bg-white rounded-[32px] lg:rounded-[48px] p-5 lg:p-7 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] max-w-[340px] mx-auto">
      {/* Chat Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-[#f1f5f9] mb-4">
        <div className="size-9 rounded-full bg-[#538100] flex items-center justify-center">
          <span className="text-white font-bold text-[12px]">AI</span>
        </div>
        <div>
          <p className="text-[#0f172a] font-bold text-[14px]">
            Nutri Assistant
          </p>
          <div className="flex items-center gap-1.5">
            <div className="size-1.5 rounded-full bg-[#9c3]" />
            <span className="text-[#94a3b8] text-[11px]">Online</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-3">
        {/* User Message */}
        <div className="flex justify-end">
          <div className="bg-[#538100] text-white text-[13px] leading-[19px] rounded-[16px] rounded-br-[4px] px-4 py-2.5 max-w-[220px]">
            What should I cook for dinner tonight? Noah is allergic to gluten.
          </div>
        </div>

        {/* AI Response */}
        <div className="flex justify-start">
          <div className="bg-[#f7f8f6] text-[#1b1c19] text-[13px] leading-[19px] rounded-[16px] rounded-bl-[4px] px-4 py-3 max-w-[240px] border border-[#dee4d3]">
            <p className="mb-2">
              Here are 3 gluten-free dinner ideas for your family:
            </p>
            <div className="space-y-1.5">
              {[
                "🐟 Grilled Salmon with Quinoa",
                "🍗 Herb Chicken with Roasted Veggies",
                "🌮 Lettuce Wrap Tacos",
              ].map((meal) => (
                <p key={meal} className="text-[12px]">
                  {meal}
                </p>
              ))}
            </div>
            <p className="text-[#538100] font-medium text-[11px] mt-2">
              All verified safe for Noah ✓
            </p>
          </div>
        </div>

        {/* Typing Indicator */}
        <div className="flex justify-start">
          <div className="bg-[#f1f5f9] rounded-full px-4 py-2.5 flex items-center gap-1">
            <div className="size-1.5 rounded-full bg-[#94a3b8] animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="size-1.5 rounded-full bg-[#94a3b8] animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="size-1.5 rounded-full bg-[#94a3b8] animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>

      {/* Input Bar */}
      <div className="mt-4 flex items-center gap-2 bg-[#f7f8f6] rounded-full px-4 py-2.5 border border-[#dee4d3]">
        <span className="text-[#94a3b8] text-[13px] flex-1">
          Ask about nutrition...
        </span>
        <div className="size-7 rounded-full bg-[#538100] flex items-center justify-center flex-shrink-0">
          <span className="text-white text-[12px]">↑</span>
        </div>
      </div>
    </div>
  );
}
