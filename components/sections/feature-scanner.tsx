export function FeatureScanner() {
  return (
    <section id="features" className="bg-[#f0faf2] pb-16 lg:pb-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Scanner Feature */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-2 items-center justify-center py-12 lg:py-[69px]">
          {/* Left — Text */}
          <div className="w-full lg:w-[504px] shrink-0 text-center lg:text-left">
            {/* Faded number */}
            <div className="text-[#538100] font-black text-[48px] lg:text-[72px] leading-[48px] lg:leading-[72px] opacity-10">
              01
            </div>
            {/* Heading */}
            <h2 className="font-black text-[#1a3c34] text-[24px] lg:text-[30px] leading-[30px] lg:leading-[37.5px] mt-2">
              Know exactly what&apos;s in
              <br />
              every product you <span className="text-[#538100]">buy.</span>
            </h2>
            {/* Body */}
            <p className="text-[#475569] text-sm lg:text-[16px] leading-relaxed lg:leading-[24px] mt-4 lg:mt-6">
              Point your camera at any barcode for instant
              nutritional info, allergen alerts, and one-tap
              logging.
            </p>
          </div>

          {/* Right — Dark Scanner Card */}
          <div className="w-full max-w-[360px] lg:max-w-none lg:w-[522px] shrink-0 bg-[#12212d] rounded-[32px] lg:rounded-[40px] overflow-hidden min-h-[280px] lg:min-h-[344px] flex flex-col justify-end px-6 lg:px-8 pb-6 lg:pb-8 pt-[120px] lg:pt-[160px] relative">
            {/* Scanner overlay */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[200px] lg:w-[260px] h-[120px] lg:h-[159px] bg-[rgba(15,23,42,0.5)] border-2 border-[rgba(153,204,51,0.3)] rounded-2xl flex items-center justify-center">
              <div className="w-[170px] lg:w-[228px] h-[90px] lg:h-[127px] border-2 border-[#9c3] rounded-xl opacity-40 absolute" />
              <img src="/assets/home/scanner-icon.svg" alt="" className="size-12 lg:size-16 relative z-10" />
            </div>

            {/* Result Card */}
            <div className="bg-white rounded-2xl p-4 lg:p-5 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
              <p className="font-bold text-[#1a3c34] text-sm lg:text-[16px] leading-[24px] mb-3 lg:mb-4">🌾 Organic Oat Milk</p>
              <div className="grid grid-cols-4 gap-1.5 lg:gap-2">
                {[
                  { val: "120", label: "kcal" },
                  { val: "4.5g", label: "Prot" },
                  { val: "16g", label: "Carb" },
                  { val: "3.2g", label: "Fat" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#f0faf2] rounded-lg p-1.5 lg:p-2 text-center">
                    <p className="text-[#538100] font-bold text-[10px] lg:text-[12px]">{stat.val}</p>
                    <p className="text-[#0f172a] text-[7px] lg:text-[8px] uppercase opacity-40">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Family Safety Check badge */}
        <div className="flex justify-center -mt-6 lg:-mt-10 mb-0 relative z-10">
          <div className="bg-white rounded-[40px] lg:rounded-[48px] px-4 lg:px-[17px] py-3 lg:py-[17px] flex items-center gap-4 lg:gap-6 shadow-[0px_10px_25px_0px_rgba(0,0,0,0.1)] border border-[rgba(153,204,51,0.05)]">
            <div className="flex items-center gap-3 lg:gap-4">
              <div className="relative">
                <div className="size-10 lg:size-12 rounded-full bg-[#e2e8f0] border-2 border-[rgba(153,204,51,0.2)] overflow-hidden">
                  <img src="/assets/home/hero-avatar.png" alt="Andy" className="size-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 size-4 lg:size-5 bg-[#ef4444] border-2 border-white rounded-full flex items-center justify-center">
                  <span className="text-white text-[7px] lg:text-[8px] font-bold">!</span>
                </div>
              </div>
              <div>
                <p className="text-[#0f172a] font-bold text-[12px] lg:text-[14px]">Family Safety Check</p>
                <p className="text-[#64748b] text-[10px] lg:text-[12px]">
                  Andy: <span className="text-[#ef4444] font-medium">Lactose Intolerant</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
