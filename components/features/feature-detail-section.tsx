import type { ReactNode } from "react";
import { Check } from "lucide-react";

interface FeatureDetailProps {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  trustBadges: string[];
  mockup: ReactNode;
  reverse?: boolean;
}

export function FeatureDetailSection({
  id,
  number,
  title,
  subtitle,
  description,
  bullets,
  trustBadges,
  mockup,
  reverse = false,
}: FeatureDetailProps) {
  return (
    <section
      id={id}
      className="scroll-mt-[120px] lg:scroll-mt-[120px]"
    >
      <div className="bg-white rounded-[24px] lg:rounded-[48px] p-5 lg:p-12 border border-[rgba(83,129,0,0.05)]">
        <div
          className={`flex flex-col ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-8 lg:gap-16 items-center`}
        >
          {/* Text Content */}
          <div className="flex-1 w-full min-w-0">
            {/* Icon + Title */}
            <div className="flex items-start gap-3 lg:gap-4 mb-5 lg:mb-8">
              <div className="bg-[#538100] rounded-full h-10 w-10 lg:h-12 lg:min-w-[36px] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-[12px] lg:text-[14px]">
                  {number}
                </span>
              </div>
              <div className="min-w-0">
                <h2 className="font-extrabold text-[#1b1c19] text-[20px] lg:text-[28px] leading-[26px] lg:leading-[42px]">
                  {title}
                </h2>
                <p className="text-[#434939] text-[12px] lg:text-[14px] mt-0.5 lg:mt-1">
                  {subtitle}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-[#434939] text-[14px] lg:text-[16px] leading-[22px] lg:leading-[26px] mb-5 lg:mb-8">
              {description}
            </p>

            {/* Bullet List */}
            <div className="space-y-2.5 lg:space-y-3 mb-5 lg:mb-8">
              {bullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-2.5 lg:gap-3">
                  <div className="mt-0.5 flex-shrink-0">
                    <Check
                      className="size-[14px] lg:size-[15px] text-[#538100]"
                      strokeWidth={2.5}
                    />
                  </div>
                  <span className="text-[#1b1c19] text-[13px] lg:text-[14px] leading-[20px]">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-1.5 lg:gap-2">
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="bg-[#e4e2dd] border border-[rgba(195,201,180,0.3)] rounded-full px-2.5 lg:px-3.5 py-0.5 lg:py-1 flex items-center"
                >
                  <span className="text-[#434939] font-bold text-[9px] lg:text-[10px] uppercase tracking-wider">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mockup */}
          <div className="w-full lg:flex-1 flex justify-center">
            <div className="w-full max-w-[320px] lg:max-w-none">
              {mockup}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
