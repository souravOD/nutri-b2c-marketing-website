import { Metadata } from "next";
import { Mail } from "lucide-react";
import {
  LegalPageLayout,
  LegalSection,
  LegalParagraph,
  LegalList,
  LegalCallout,
  LegalContactCard,
} from "@/components/legal/legal-page-layout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Odyssey Nutrition Platform Terms of Service. Last updated March 29, 2026.",
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      badge="Legal Documentation"
      title="Terms of Service"
      subtitle={
        <span className="flex flex-col items-center gap-1">
          <span>Odyssey Nutrition Platform</span>
          <span className="font-bold text-nutri-green-forest">
            Last updated: March 29, 2026
          </span>
        </span>
      }
    >
      {/* 1 */}
      <LegalSection title="1. Agreement to Terms">
        <LegalParagraph>
          By accessing or using Odyssey Nutrition, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services. These terms constitute a legally binding agreement between you and Odyssey Nutrition regarding your use of the platform and its related features.
        </LegalParagraph>
      </LegalSection>

      {/* 2 */}
      <LegalSection title="2. Who May Use the Service">
        <LegalParagraph>
          You must be at least 18 years old to use the Service. By agreeing to these Terms, you represent and warrant to us that: (a) you are at least 18 years old; (b) you have not previously been suspended or removed from the Service; and (c) your registration and your use of the Service is in compliance with all applicable laws and regulations.
        </LegalParagraph>
      </LegalSection>

      {/* 3 */}
      <div className="bg-nutri-warm-card rounded-none -mx-6 px-6 lg:-mx-20 lg:px-20 py-8 lg:py-10">
        <LegalSection title="3. The Odyssey Service">
          <LegalCallout title="Important — Not Medical Advice" variant="info">
            The content provided through Odyssey Nutrition is for informational purposes only. We are not medical professionals, and our suggestions should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician.
          </LegalCallout>
          <LegalParagraph>
            The Service provides nutrition tracking, personalized planning, and community features designed to support your wellness journey:
          </LegalParagraph>
          <LegalList
            items={[
              "Access to proprietary nutritional databases and analysis tools.",
              "Personalized meal suggestions based on user-provided data.",
              "Interactive community forums and expert-led science modules.",
              "Progress tracking and historical data visualization.",
            ]}
          />
        </LegalSection>
      </div>

      {/* 4 */}
      <LegalSection title="4. Your Account">
        <LegalParagraph>
          When you create an account, you must provide accurate and complete information. You are solely responsible for the activity that occurs on your account and for keeping your password secure. You must notify us immediately of any breach of security or unauthorized use of your account.
        </LegalParagraph>
      </LegalSection>

      {/* 5 */}
      <LegalSection title="5. Health Profile Data">
        <LegalParagraph>
          Your Health Profile is the core of your Odyssey experience. In relation to this data:
        </LegalParagraph>
        <LegalList
          items={[
            "You retain ownership of all health data you input into the Service.",
            "We use this data strictly to provide and improve your personalized experience.",
            "Data is processed in accordance with our Privacy Policy.",
            "You may export or request deletion of your health data at any time.",
          ]}
        />
      </LegalSection>

      {/* 6 */}
      <LegalSection title="6. Acceptable Use">
        <LegalParagraph>
          To keep our community safe and focused on health, you agree not to:
        </LegalParagraph>
        <LegalList
          items={[
            "Use the service for any illegal purposes or unauthorized commercial activity.",
            "Harass, abuse, or harm another person in the community forums.",
            "Post misleading, inaccurate, or unsafe nutritional information.",
            "Attempt to reverse engineer or scrape data from the Odyssey platform.",
          ]}
        />
      </LegalSection>

      {/* 7 */}
      <LegalSection title="7. Intellectual Property">
        <LegalParagraph>
          {`The Service, including its "look and feel" (e.g., text, graphics, images, logos, and button icons), photographs, editorial content, notices, software, and other material are protected under both United States and other applicable copyright, trademark, and other laws.`}
        </LegalParagraph>
      </LegalSection>

      {/* 8 */}
      <LegalSection title="8. Third-Party Products and Links">
        <LegalParagraph>
          Our Service may contain links to third-party websites or services that are not owned or controlled by Odyssey Nutrition. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
        </LegalParagraph>
      </LegalSection>

      {/* 9 */}
      <LegalSection title="9. Disclaimers">
        <LegalParagraph>
          {`Your use of the service is at your sole risk. The service is provided on an "AS IS" and "AS AVAILABLE" basis. Odyssey Nutrition expressly disclaims all warranties of any kind, whether express, implied or statutory.`}
        </LegalParagraph>
      </LegalSection>

      {/* 10 — Dark card */}
      <div className="bg-nutri-dark-text rounded-[24px] lg:rounded-[32px] p-8 lg:p-20 -mx-0 text-white">
        <h2 className="font-extrabold text-nutri-green-lime text-[22px] lg:text-[32px] leading-tight mb-4 lg:mb-6">
          10. Limitation of Liability
        </h2>

        <div className="border-b border-white/10 pb-6 lg:pb-8 mb-6 lg:mb-8">
          <p className="font-bold text-nutri-green-lime-light text-sm lg:text-base mb-3 lg:mb-4">
            Allergen Disclaimer
          </p>
          <p className="text-gray-300 text-xs lg:text-sm leading-relaxed">
            Odyssey Nutrition tracks common allergens but cannot guarantee the accuracy of third-party ingredient data. Users with severe allergies must independently verify all food ingredients before consumption.
          </p>
        </div>

        <LegalParagraph>
          <span className="text-white text-xs lg:text-sm">
            To the maximum extent permitted by law, Odyssey Nutrition shall not be liable for:
          </span>
        </LegalParagraph>
        <ul className="flex flex-col gap-2 lg:gap-3 mt-3 lg:mt-4">
          {[
            "Any indirect, incidental, special, or consequential damages.",
            "Loss of profits, data, use, goodwill, or other intangible losses.",
            "Adverse health reactions resulting from the use of our meal plans.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 lg:gap-3 text-sm lg:text-base">
              <span className="text-nutri-green-dark font-bold mt-0.5">•</span>
              <span className="text-gray-300 text-xs lg:text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 11 */}
      <LegalSection title="11. Indemnification">
        <LegalParagraph>
          You agree to defend, indemnify, and hold harmless Odyssey Nutrition and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses.
        </LegalParagraph>
      </LegalSection>

      {/* 12 */}
      <LegalSection title="12. Termination">
        <LegalParagraph>
          We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including but not limited to:
        </LegalParagraph>
        <LegalList
          items={[
            "A breach of the Terms.",
            "Violation of Community Guidelines.",
            "Extended periods of inactivity on a free account tier.",
          ]}
        />
      </LegalSection>

      {/* 13 */}
      <LegalSection title="13. Governing Law and Dispute Resolution">
        <LegalParagraph>
          These Terms shall be governed and construed in accordance with the laws of Delaware, United States, without regard to its conflict of law provisions.
        </LegalParagraph>
        <LegalCallout title="Class Action Waiver" variant="warning">
          YOU AND ODYSSEY NUTRITION AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
        </LegalCallout>
      </LegalSection>

      {/* 14 */}
      <LegalSection title="14. Changes to These Terms">
        <LegalParagraph>
          {`We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.`}
        </LegalParagraph>
      </LegalSection>

      {/* 15 */}
      <div className="border-t border-nutri-warm-card-alt pt-8 lg:pt-10">
        <LegalSection title="15. Contact">
          <LegalParagraph>
            If you have any questions about these Terms, please contact us at:
          </LegalParagraph>
          <LegalContactCard
            label="Legal Department"
            email="legal@odysseyts.com"
            icon={<Mail className="size-5 text-nutri-dark-body" />}
          />
        </LegalSection>
      </div>
    </LegalPageLayout>
  );
}
