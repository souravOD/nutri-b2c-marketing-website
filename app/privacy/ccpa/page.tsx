import { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import {
  LegalPageLayout,
  LegalSection,
  LegalParagraph,
  LegalList,
} from "@/components/legal/legal-page-layout";

export const metadata: Metadata = {
  title: "CCPA Privacy Notice",
  description:
    "California Consumer Privacy Act — Rights & Disclosures for California Residents. Last updated March 29, 2026.",
};

export default function CCPAPage() {
  return (
    <LegalPageLayout
      badge="Legal Residents Notice"
      title="CCPA Privacy Notice"
      subtitle={
        <div className="flex flex-col items-center gap-1">
          <span>
            California Consumer Privacy Act — Rights & Disclosures for California
            Residents.
          </span>
          <span className="font-bold text-nutri-green-forest">
            Last updated: March 29, 2026
          </span>
        </div>
      }
    >
      <LegalParagraph>
        {`This CCPA Privacy Notice ("Notice") supplements the Odyssey Nutrition Privacy Policy and applies only to all visitors, users, and others who reside in the State of California. We adopt this notice to comply with the California Consumer Privacy Act of 2018 (CCPA) and the California Privacy Rights Act of 2020 (CPRA).`}
      </LegalParagraph>

      {/* 1 — Table (scrollable on mobile) */}
      <LegalSection title="1. Categories of Personal Information We Collect">
        <div className="overflow-x-auto -mx-2 px-2">
          <div className="border border-nutri-green-border rounded-2xl overflow-hidden min-w-[520px]">
            <div className="grid grid-cols-5 bg-nutri-warm-bg border-b border-nutri-green-border">
              <div className="p-3 lg:p-4 font-bold text-nutri-dark-text text-xs lg:text-sm">Category</div>
              <div className="p-3 lg:p-4 font-bold text-nutri-dark-text text-xs lg:text-sm">Examples</div>
              <div className="p-3 lg:p-4 font-bold text-nutri-dark-text text-xs lg:text-sm text-center">Collected</div>
              <div className="p-3 lg:p-4 font-bold text-nutri-dark-text text-xs lg:text-sm text-center">Sold</div>
              <div className="p-3 lg:p-4 font-bold text-nutri-dark-text text-xs lg:text-sm text-center">Shared</div>
            </div>
            {[
              { cat: "Identifiers", ex: "Name, email, IP address, device ID", collected: true, sold: false, shared: true },
              { cat: "Protected Info", ex: "Age, gender identity, health status", collected: true, sold: false, shared: false },
              { cat: "Commercial", ex: "Purchase history, subscriptions", collected: true, sold: false, shared: false },
              { cat: "Geolocation", ex: "Physical location (general only if enabled)", collected: true, sold: false, shared: true },
            ].map((row) => (
              <div key={row.cat} className="grid grid-cols-5 border-b border-nutri-green-border/50 last:border-0">
                <div className="p-3 lg:p-4 font-bold text-nutri-dark-text text-xs lg:text-sm">{row.cat}</div>
                <div className="p-3 lg:p-4 text-nutri-dark-body text-xs lg:text-sm">{row.ex}</div>
                <div className="p-3 lg:p-4 text-center font-bold text-xs lg:text-sm text-nutri-green-dark">{row.collected ? "YES" : "NO"}</div>
                <div className="p-3 lg:p-4 text-center font-bold text-xs lg:text-sm text-red-500">{row.sold ? "YES" : "NO"}</div>
                <div className="p-3 lg:p-4 text-center font-bold text-xs lg:text-sm">{row.shared ? "YES" : "NO"}</div>
              </div>
            ))}
          </div>
        </div>
      </LegalSection>

      {/* 2 */}
      <LegalSection title="2. Purposes for Collecting Personal Information">
        <LegalList
          items={[
            "To provide and maintain our nutrition coaching services.",
            "To process transactions and fulfill subscription orders.",
            "To personalize your user experience and nutrition plans.",
            "To improve our website through data analytics and feedback.",
          ]}
        />
      </LegalSection>

      {/* 3 */}
      <LegalSection title="3. Your California Privacy Rights">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {[
            {
              title: "Right to Know",
              desc: 'Access specific pieces of personal information we collected about you.',
            },
            {
              title: "Right to Delete",
              desc: "Request deletion of personal data we have collected.",
            },
            {
              title: "Right to Opt-Out",
              desc: 'Opt out of the "sale" or "sharing" of your personal information.',
            },
          ].map((right) => (
            <div
              key={right.title}
              className="bg-nutri-warm-bg rounded-2xl p-5 lg:p-6 border border-nutri-green-border"
            >
              <h4 className="font-bold text-nutri-dark-text text-sm lg:text-base mb-2">
                {right.title}
              </h4>
              <p className="text-nutri-dark-body text-xs lg:text-sm">{right.desc}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      {/* 4 — Dark card */}
      <div className="bg-nutri-dark-text rounded-[24px] lg:rounded-[32px] p-6 lg:p-10 text-white">
        <h3 className="font-bold text-nutri-green-lime text-lg lg:text-xl mb-3 lg:mb-4">
          Sensitive Personal Information Disclosure
        </h3>
        <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-4 lg:mb-6">
          Odyssey Nutrition collects health-related data to provide personalized nutrition recommendations. We do NOT use this data for any purpose other than providing the service you requested.
        </p>
        <div className="flex flex-wrap gap-2 lg:gap-3">
          {["No data selling", "Limited sharing", "Encrypted storage"].map((tag) => (
            <span
              key={tag}
              className="bg-white/10 text-white text-xs lg:text-sm font-bold px-3 lg:px-4 py-1.5 lg:py-2 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 5 */}
      <LegalSection title="5. How to Exercise Your Rights">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div className="bg-nutri-warm-bg rounded-2xl p-5 lg:p-6 text-center border border-nutri-green-border">
            <Mail className="size-6 lg:size-8 text-nutri-green-dark mx-auto mb-2 lg:mb-3" />
            <h4 className="font-bold text-nutri-dark-text mb-1 text-sm lg:text-base">Email Us</h4>
            <p className="text-nutri-dark-body text-xs lg:text-sm mb-2">For comprehensive requests</p>
            <p className="font-bold text-nutri-dark-text text-xs lg:text-sm">Email Privacy</p>
          </div>
          <div className="bg-nutri-warm-bg rounded-2xl p-5 lg:p-6 text-center border border-nutri-green-border">
            <Phone className="size-6 lg:size-8 text-nutri-green-dark mx-auto mb-2 lg:mb-3" />
            <h4 className="font-bold text-nutri-dark-text mb-1 text-sm lg:text-base">Phone Call</h4>
            <p className="text-nutri-dark-body text-xs lg:text-sm mb-2">Speak to a representative</p>
            <p className="font-bold text-nutri-dark-text text-xs lg:text-sm">1-800-0091867</p>
          </div>
        </div>
      </LegalSection>

      {/* 6 */}
      <LegalSection title="6. Data Retention Summary">
        <div className="overflow-x-auto -mx-2 px-2">
          <div className="border border-nutri-green-border rounded-2xl overflow-hidden min-w-[400px]">
            <div className="grid grid-cols-4 bg-nutri-warm-bg border-b border-nutri-green-border">
              <div className="p-3 lg:p-4 font-bold text-nutri-dark-text text-xs lg:text-sm">Account</div>
              <div className="p-3 lg:p-4 font-bold text-nutri-dark-text text-xs lg:text-sm">Payment</div>
              <div className="p-3 lg:p-4 font-bold text-nutri-dark-text text-xs lg:text-sm">Location</div>
              <div className="p-3 lg:p-4 font-bold text-nutri-dark-text text-xs lg:text-sm">Support</div>
            </div>
            <div className="grid grid-cols-4">
              <div className="p-3 lg:p-4 text-nutri-dark-text text-xs lg:text-sm">Life of Account</div>
              <div className="p-3 lg:p-4 text-nutri-dark-text text-xs lg:text-sm">7 Years</div>
              <div className="p-3 lg:p-4 text-nutri-dark-text text-xs lg:text-sm">2 Years</div>
              <div className="p-3 lg:p-4 text-nutri-dark-text text-xs lg:text-sm">3 Years</div>
            </div>
          </div>
        </div>
      </LegalSection>

      {/* 7 */}
      <LegalSection title='7. Shine the Light Disclosure'>
        <LegalParagraph>
          {`California's "Shine the Light" law (Civil Code Section § 1798.83) permits users of our website who are California residents to request certain information regarding our disclosure of personal information to third parties for their direct marketing purposes.`}
        </LegalParagraph>
      </LegalSection>

      {/* 8 — Contact centered */}
      <LegalSection title="8. Contact Info">
        <LegalParagraph>
          If you have any questions about this CCPA Notice, please contact our compliance department:
        </LegalParagraph>
        <div className="bg-nutri-warm-bg rounded-2xl p-5 lg:p-6 border border-nutri-green-border text-center">
          <p className="font-bold text-nutri-dark-text text-sm lg:text-base mb-1">Compliance Department</p>
          <p className="text-nutri-dark-body text-xs lg:text-sm">123 Wellness Way, Ste 300, San Francisco, CA 94100</p>
          <a
            href="mailto:privacy@odysseynutrition.com"
            className="text-nutri-green-forest text-xs lg:text-sm font-bold hover:underline mt-2 block"
          >
            privacy@odysseynutrition.com
          </a>
        </div>
      </LegalSection>
    </LegalPageLayout>
  );
}
