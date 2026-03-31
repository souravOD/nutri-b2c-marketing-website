import { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import {
  LegalPageLayout,
  LegalSection,
  LegalParagraph,
  LegalList,
  LegalCallout,
  LegalContactCard,
} from "@/components/legal/legal-page-layout";
import { cn } from "@/lib/utils";

/* Figma icon assets from the design (node 1118:4537) */
const iconAccount = "http://localhost:3845/assets/9c85f445fc9fff42361c611a780ae2aff8f6343a.svg";
const iconHealth  = "http://localhost:3845/assets/d1960197233a4398df3e9a560fe6d8c94287ab22.svg";
const iconLock    = "http://localhost:3845/assets/1f572dfa39e0a8756be84f2e0be83ce9e74c3187.svg";
const iconMail    = "http://localhost:3845/assets/041a62f9db45591f6fc5d73dd88353aa6bda8cb2.svg";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Odyssey Nutrition Privacy Policy. Last updated March 29, 2026.",
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      badge="Legal Documentation"
      title="Privacy Policy"
      subtitle={
        <div className="flex flex-col items-center gap-4">
          <span className="flex flex-col items-center gap-1">
            <span>Your health journey is personal.</span>
            <span className="font-bold text-nutri-green-forest">
              Last updated: March 29, 2026
            </span>
          </span>
          <Link
            href="/privacy/ccpa"
            className={cn(
              "inline-flex items-center rounded-full px-6 py-2.5",
              "bg-nutri-green-dark text-white font-bold text-xs lg:text-sm",
              "hover:bg-nutri-green-deep transition-colors"
            )}
          >
            View CCPA Privacy Notice
          </Link>
        </div>
      }
    >
      {/* 1 */}
      <LegalSection title="1. Introduction">
        <LegalParagraph>
          {`Odyssey Nutrition, Inc. ("Odyssey", "we", "us", or "our"), is committed to safeguarding your privacy. This Privacy Policy explains what personal information we collect, how we use it, with whom we share it, and what choices you have.`}
        </LegalParagraph>
        <LegalParagraph>
          {`This policy applies to all users of the Odyssey mobile application, website, and related services (collectively, the "Services"). By using the Services, you agree to the collection and use of information as described here.`}
        </LegalParagraph>
      </LegalSection>

      {/* 2 — Information We Collect with Figma icons */}
      <LegalSection title="2. Information We Collect">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 my-2 lg:my-4">
          <div className="bg-[#f5f3ee] rounded-[24px] lg:rounded-[32px] p-5 lg:p-6">
            <img src={iconAccount} alt="" className="size-5 mb-3" />
            <h4 className="font-bold text-nutri-dark-text mb-2 text-sm lg:text-base">Account Information</h4>
            <p className="text-[#434939] text-xs lg:text-sm leading-relaxed">
              Full name, email address, and password
              <br />
              (stored in encrypted form).
            </p>
          </div>
          <div className="bg-[#f5f3ee] rounded-[24px] lg:rounded-[32px] p-5 lg:p-6">
            <img src={iconHealth} alt="" className="size-5 mb-3" />
            <h4 className="font-bold text-nutri-dark-text mb-2 text-sm lg:text-base">Health Profile Data</h4>
            <p className="text-[#434939] text-xs lg:text-sm leading-relaxed">
              Age, gender, height, weight, BMI, BMR, macro
              targets, dietary goals, dietary restrictions,
              allergens, and health conditions.
            </p>
          </div>
        </div>

        <LegalCallout title="Sensitive Data Classification" variant="info">
          Health profile data is classified as sensitive personal information and is subject to heightened protection. <strong>We never sell this data or use it for advertising profiling.</strong>
        </LegalCallout>

        <div className="mt-2 lg:mt-4">
          <h4 className="font-extrabold text-nutri-green-forest text-base lg:text-lg mb-3">
            2b. Information Collected Automatically
          </h4>
          <LegalParagraph>
            We automatically collect device information, log data (IP address, browser type), usage data, and approximate location to optimize your experience.
          </LegalParagraph>
        </div>
      </LegalSection>

      {/* 3 */}
      <LegalSection title="3. How We Use Your Information">
        <LegalList
          items={[
            "Provide and improve the Service.",
            "Communication and support.",
            "Ensure safety & security.",
            "Legal compliance.",
          ]}
        />
      </LegalSection>

      {/* 4 */}
      <LegalSection title="4. Legal Basis">
        <p className="text-nutri-dark-body text-xs lg:text-sm italic mb-3 opacity-70">
          (EEA / UK Users Only)
        </p>
        <LegalParagraph>
          Contractual necessity, legitimate interests, consent, and legal obligation.
        </LegalParagraph>
      </LegalSection>

      {/* 5 */}
      <LegalSection title="5. How We Share Your Information">
        <LegalParagraph>
          We do not sell your personal information or health profile data. Sharing occurs only under specific conditions:
        </LegalParagraph>
        <div className="flex flex-wrap gap-2 lg:gap-3 mt-2 lg:mt-4">
          {["Service Providers", "Legal Requirements", "Business Transfers", "Explicit Consent"].map((tag) => (
            <span
              key={tag}
              className="bg-white text-nutri-dark-text font-black text-[9px] lg:text-[10.4px] px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border border-[rgba(195,201,180,0.3)] uppercase tracking-[0.52px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </LegalSection>

      {/* 6 & 7 — Side by side on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-6 lg:py-14">
        {/* Section 6: Data Retention */}
        <div className="flex flex-col gap-4 lg:gap-6">
          <h2 className="font-extrabold text-nutri-green-forest text-[22px] lg:text-[32px]">
            6. Data Retention
          </h2>
          <div className="flex flex-col gap-3 lg:gap-4">
            {[
              { label: "Account Info", value: "Duration + 90 days" },
              { label: "Health Data", value: "Duration + 90 days" },
              { label: "Usage Data", value: "Up to 24 months" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex justify-between items-center pb-2 border-b border-[rgba(195,201,180,0.2)]"
              >
                <span className="text-[#434939] font-medium text-sm lg:text-base">{item.label}</span>
                <span className="text-[#416600] font-bold text-sm lg:text-base">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 7: Data Security */}
        <div className="flex flex-col gap-4 lg:gap-6">
          <h2 className="font-extrabold text-nutri-green-forest text-[22px] lg:text-[32px]">
            7. Data Security
          </h2>
          <div className="bg-[#1b1c19] rounded-[24px] lg:rounded-[32px] p-5 lg:p-6 flex items-center gap-4 lg:gap-6">
            <img src={iconLock} alt="" className="w-6 lg:w-8 h-8 lg:h-10 shrink-0" />
            <div className="flex flex-col gap-4 lg:gap-[23px] pb-4 lg:pb-6">
              <p className="text-[#bef458] font-medium text-xs lg:text-sm">TLS 1.2+ Encryption</p>
              <p className="text-[#d1d5db] font-medium text-xs lg:text-sm">AES-256 at Rest</p>
              <p className="text-[#d1d5db] font-medium text-xs lg:text-sm">Strict Access Controls</p>
            </div>
          </div>
        </div>
      </div>

      {/* 8 — Rights grid */}
      <LegalSection title="8. Your Rights and Choices">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {["Access", "Correction", "Deletion", "Portability", "Opt-out", "Restriction"].map((right) => (
            <div
              key={right}
              className="bg-[#f0eee9] rounded-xl lg:rounded-2xl p-3 lg:p-4 flex items-center justify-center"
            >
              <span className="font-bold text-nutri-dark-text text-xs lg:text-sm text-center">
                {right}
              </span>
            </div>
          ))}
        </div>
        <p className="text-nutri-dark-text text-sm lg:text-base mt-3 lg:mt-4 text-center font-medium">
          To exercise these rights, contact{" "}
          <a
            href="mailto:privacy@odysseynutrition.com"
            className="text-[#416600] font-bold underline"
          >
            privacy@odysseynutrition.com
          </a>
        </p>
      </LegalSection>

      {/* 9 */}
      <LegalSection title="9. Children&rsquo;s Privacy">
        <LegalParagraph>
          Our service is not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
        </LegalParagraph>
      </LegalSection>

      {/* 10 */}
      <LegalSection title="10. International Data Transfers">
        <LegalParagraph>
          Data is processed in the US using Standard Contractual Clauses for EEA/UK compliance.
        </LegalParagraph>
      </LegalSection>

      {/* 11 */}
      <LegalSection title="11. Changes to This Policy">
        <LegalParagraph>
          We provide 30 days notice for any material changes to this policy via your registered email or in-app notification.
        </LegalParagraph>
      </LegalSection>

      {/* Questions — compact card */}
      <div className="bg-[#f5f3ee] rounded-[24px] lg:rounded-[32px] p-5 lg:p-6 flex flex-col lg:flex-row items-center lg:items-center gap-3 lg:gap-4 text-center lg:text-left">
        <img src={iconMail} alt="" className="w-[25px] h-5 shrink-0" />
        <div className="flex flex-col gap-1 lg:gap-6">
          <p className="font-bold text-nutri-dark-text text-sm lg:text-base">Questions?</p>
          <a
            href="mailto:privacy@odysseynutrition.com"
            className="text-[#416600] font-medium text-sm lg:text-base hover:underline"
          >
            privacy@odysseynutrition.com
          </a>
        </div>
      </div>
    </LegalPageLayout>
  );
}
