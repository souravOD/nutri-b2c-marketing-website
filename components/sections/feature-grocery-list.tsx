export function FeatureGroceryList() {
  return (
    <section className="bg-[#f0faf2]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex gap-20 items-center h-[495px] px-[91px] py-[76px]">
          {/* Left — Text */}
          <div className="w-[431px] shrink-0">
            {/* Faded number */}
            <div className="text-[#538100] font-black text-[72px] leading-[72px] opacity-10">
              03
            </div>
            {/* Heading */}
            <h2 className="font-black text-[#1a3c34] text-[30px] leading-[37.5px] mt-2">
              Shop smarter. Spend
              <br />
              <span className="text-[#538100]">less.</span>
            </h2>
            {/* Body */}
            <p className="text-[#475569] text-[16px] leading-[24px] mt-6">
              Automatically turn your meal plan into a sorted
              shopping list. Track your spend in real-time as
              you shop.
            </p>
          </div>

          {/* Right — Grocery Budget Card */}
          <div className="w-[522px] shrink-0 bg-white rounded-[40px] border border-[rgba(83,129,0,0.1)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] px-8 pt-12 pb-[60px]">
            {/* Budget Header */}
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center justify-between">
                <span className="text-[#94a3b8] font-bold text-[12px]">Weekly Budget</span>
                <span className="text-[#1a3c34] font-bold text-[12px]">$62 of $100</span>
              </div>
              <div className="bg-[#f0faf2] h-3 rounded-full overflow-hidden">
                <div className="h-full bg-[#9c3] rounded-none" style={{ width: "62%" }} />
              </div>
            </div>

            {/* Grocery Item */}
            <div className="bg-[rgba(240,250,242,0.5)] rounded-2xl p-4 flex items-center gap-4 mb-8">
              <img src="/assets/home/grocery-check.svg" alt="" className="size-6" />
              <div className="flex-1">
                <p className="text-[#0f172a] font-bold text-[14px]">Free-range chicken</p>
              </div>
              <span className="text-[#94a3b8] text-[14px]">$12.50</span>
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2.5">
              <div className="bg-[rgba(153,204,51,0.1)] border border-[rgba(153,204,51,0.2)] rounded-full px-4 py-2 flex items-center gap-2">
                <img src="/assets/home/brand-match-icon.svg" alt="" className="size-3" />
                <span className="text-[#538100] font-medium text-[14px]">Brand Match</span>
              </div>
              <div className="bg-[rgba(153,204,51,0.1)] border border-[rgba(153,204,51,0.2)] rounded-full px-4 py-2 flex items-center gap-2">
                <span className="text-[#538100] font-medium text-[14px]">Organic Only</span>
                {/* Toggle - ON state */}
                <div className="bg-[#9c3] h-7 w-12 rounded-full relative">
                  <div className="absolute top-1 right-1 size-5 bg-white rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
