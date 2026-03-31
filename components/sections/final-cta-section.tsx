import Link from "next/link";
import { cn } from "@/lib/utils";

export function FinalCTASection() {
  return (
    <section
      id="cta"
      className="bg-gradient-to-t from-[#f0faf2] to-white py-24 h-[825px] flex items-center justify-center"
    >
      <div className="max-w-[896px] mx-auto px-8 text-center flex flex-col items-center gap-8">
        {/* Heading */}
        <h2 className="font-black text-[#1a3c34] text-[72px] leading-[72px]">
          Eat better.
          <br />
          Live smarter.
          <br />
          <span className="text-[#538100]">Together.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-[#475569] text-[20px] leading-[28px] max-w-[672px]">
          Join 50,000+ families who have replaced five apps with one. Start your
          journey today.
        </p>

        {/* CTA Button */}
        <div className="pt-4 w-full">
          <Link
            href="#"
            className={cn(
              "flex items-center justify-center gap-3 rounded-[24px] py-5 w-full",
              "bg-[#1a3c34] text-white font-black text-[18px]",
              "hover:bg-[#254d43] transition-colors",
              "shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]"
            )}
          >
            Join Nutri
          </Link>
        </div>

        {/* Subtext */}
        <p className="text-[#94a3b8] font-bold text-[12px] tracking-[1.2px] uppercase pt-2">
          No credit card required · Free to start
        </p>
      </div>
    </section>
  );
}
