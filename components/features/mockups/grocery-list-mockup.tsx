export function GroceryListMockup() {
  const items = [
    { name: "Free-range Chicken", price: "$12.50", checked: true },
    { name: "Organic Quinoa (500g)", price: "$6.99", checked: true },
    { name: "Avocados (6 pack)", price: "$5.49", checked: false },
    { name: "Greek Yogurt", price: "$4.29", checked: false },
  ];

  return (
    <div className="bg-white rounded-[32px] lg:rounded-[48px] p-5 lg:p-7 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] max-w-[340px] mx-auto">
      {/* Budget Header */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[#94a3b8] font-bold text-[11px] tracking-wider uppercase">
            Weekly Budget
          </span>
          <span className="text-[#1a3c34] font-bold text-[13px]">
            $62 of $100
          </span>
        </div>
        <div className="bg-[#f0faf2] h-3 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#9c3] rounded-full transition-all duration-700"
            style={{ width: "62%" }}
          />
        </div>
        <p className="text-[#538100] text-[11px] font-medium mt-1.5">
          $38 remaining · On track ✓
        </p>
      </div>

      {/* Grocery Items */}
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.name}
            className={`rounded-xl px-3.5 py-3 flex items-center gap-3 ${
              item.checked
                ? "bg-[rgba(240,250,242,0.5)]"
                : "bg-white border border-[#f1f5f9]"
            }`}
          >
            <div
              className={`size-5 rounded-md flex items-center justify-center flex-shrink-0 ${
                item.checked
                  ? "bg-[#9c3]"
                  : "border-2 border-[#d1d5db]"
              }`}
            >
              {item.checked && (
                <span className="text-white text-[10px]">✓</span>
              )}
            </div>
            <span
              className={`flex-1 font-medium text-[13px] ${
                item.checked
                  ? "text-[#94a3b8] line-through"
                  : "text-[#0f172a]"
              }`}
            >
              {item.name}
            </span>
            <span className="text-[#94a3b8] text-[13px] flex-shrink-0">
              {item.price}
            </span>
          </div>
        ))}
      </div>

      {/* Filter Pills */}
      <div className="flex gap-2 mt-4">
        <div className="bg-[rgba(153,204,51,0.1)] border border-[rgba(153,204,51,0.2)] rounded-full px-3 py-1.5 flex items-center gap-1.5">
          <span className="text-[#538100] font-medium text-[11px]">
            Brand Match
          </span>
        </div>
        <div className="bg-[rgba(153,204,51,0.1)] border border-[rgba(153,204,51,0.2)] rounded-full px-3 py-1.5 flex items-center gap-1.5">
          <span className="text-[#538100] font-medium text-[11px]">
            Organic Only
          </span>
          <div className="bg-[#9c3] h-5 w-9 rounded-full relative">
            <div className="absolute top-0.5 right-0.5 size-4 bg-white rounded-full shadow-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
