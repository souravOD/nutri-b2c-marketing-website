const testimonials = [
  {
    quote:
      "\"Finally, an app that understands I'm not cooking for one. Nutri plans meals for all four of us — including my daughter's nut allergy — in one go.\"",
    name: "Sarah Jenkins",
    role: "Mum of 2 · San Fransisco",
    initials: "SR",
  },
  {
    quote:
      "\"The budget feature alone saved us $200 last month. It's actually fun to shop when you know exactly what you need and what it costs.\"",
    name: "Marcus Thorne",
    role: "Fitness Enthusiast & Parent",
    initials: "MT",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:gap-16">
          {/* Header */}
          <div className="flex flex-col gap-4 lg:gap-6 items-center">
            <p className="text-[#9c3] font-bold text-[12px] lg:text-[14px] tracking-[2.8px] uppercase text-center">
              Social Proof
            </p>
            <h2 className="font-black text-[#1a3c34] text-[28px] lg:text-[36px] leading-[32px] lg:leading-[45px] text-center">
              Real families. Real results.
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[#faf8f3] border border-[rgba(83,129,0,0.05)] rounded-[32px] lg:rounded-[48px] p-8 lg:p-12 flex flex-col gap-6 lg:gap-8"
              >
                {/* Stars */}
                <div className="flex gap-0">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="size-4 lg:size-5" viewBox="0 0 20 20" fill="#9c3">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="font-medium text-[#1a3c34] text-base lg:text-[20px] leading-relaxed lg:leading-[32.5px]">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 lg:gap-6 pt-2">
                  <div className="size-12 lg:size-16 bg-[rgba(153,204,51,0.2)] rounded-full flex items-center justify-center">
                    <span className="text-[#538100] font-black text-base lg:text-[20px]">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-[#1a3c34] font-black text-base lg:text-[18px] leading-[28px]">{t.name}</p>
                    <p className="text-[#94a3b8] text-sm lg:text-[16px] leading-[24px]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
