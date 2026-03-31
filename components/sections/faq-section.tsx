"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Can I add multiple family members with different dietary needs?",
    answer:
      "Yes! Nutri allows you to create individual profiles for every household member. Each profile tracks unique dietary needs, allergies, and nutrition goals.",
  },
  {
    question: "How does the allergy tracking work?",
    answer:
      "Our allergen detection system scans barcodes and recipe ingredients against known allergens. You'll get instant alerts if a product contains anything flagged in any family member's profile.",
  },
  {
    question: "Is the grocery list shared across multiple devices?",
    answer:
      "Absolutely. Your grocery list syncs across all devices in real time. Family members can check off items as they shop, and everyone sees the updates instantly.",
  },
  {
    question: "Does Nutri help with grocery budgeting?",
    answer:
      "Yes. Nutri tracks your grocery spending in real time against your weekly budget. It also suggests cost-effective alternatives and helps reduce food waste.",
  },
  {
    question: "Can I use Nutri on my desktop and mobile?",
    answer:
      "Nutri works seamlessly across desktop, tablet, and mobile. Your data syncs automatically, so you can plan on your laptop and shop with your phone.",
  },
];

export function FAQSection() {
  return (
    <section className="bg-[#f7f8f6] py-24">
      <div className="max-w-[800px] mx-auto px-8">
        <div className="flex flex-col gap-16">
          {/* Heading */}
          <div className="flex flex-col items-center">
            <h2 className="font-black text-[#161910] text-[36px] leading-[40px] text-center">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Accordion */}
          <Accordion className="flex flex-col gap-4">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white rounded-[32px] border border-[#dee4d3] px-6 py-0 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-[#161910] text-[16px] font-bold hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#7c8e57] text-[16px] leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
