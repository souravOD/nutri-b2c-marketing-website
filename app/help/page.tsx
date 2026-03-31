"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function HelpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    // Placeholder submit handler — ready for backend integration
    console.log("Form submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Message sent! We'll get back to you within 24 hours.");
    reset();
  };

  return (
    <div className="bg-nutri-warm-bg">
      {/* Hero */}
      <div className="text-center pt-12 lg:pt-16 pb-8 lg:pb-12 px-6 lg:px-8">
        <h1 className="font-black text-nutri-dark text-[36px] lg:text-[64px] leading-tight tracking-tight">
          Help & Support
        </h1>
        <p className="text-nutri-dark-body text-sm lg:text-lg mt-3 lg:mt-4 max-w-[520px] mx-auto">
          Whether you&apos;re fine-tuning your macros or navigating your botanical
          wellness journey, our team is here to guide every step.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start justify-center">
          {/* Contact Form */}
          <div className="bg-white rounded-[24px] lg:rounded-3xl border border-nutri-green-border p-6 lg:p-10 shadow-sm flex-1 w-full lg:max-w-[560px]">
            <h2 className="font-black text-nutri-dark-text text-xl lg:text-2xl mb-6 lg:mb-8">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 lg:space-y-6">
              <div>
                <label className="block text-nutri-dark-text text-[10px] lg:text-xs font-bold uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  {...register("name")}
                  placeholder="Alex Rivers"
                  className={cn(
                    "w-full px-4 py-3 rounded-xl bg-nutri-warm-bg border-0",
                    "text-nutri-dark-text text-sm lg:text-base placeholder:text-nutri-dark-body/50",
                    "focus:outline-none focus:ring-2 focus:ring-nutri-green/50",
                    errors.name && "ring-2 ring-red-400"
                  )}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-nutri-dark-text text-[10px] lg:text-xs font-bold uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="alex@example.com"
                  className={cn(
                    "w-full px-4 py-3 rounded-xl bg-nutri-warm-bg border-0",
                    "text-nutri-dark-text text-sm lg:text-base placeholder:text-nutri-dark-body/50",
                    "focus:outline-none focus:ring-2 focus:ring-nutri-green/50",
                    errors.email && "ring-2 ring-red-400"
                  )}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-nutri-dark-text text-[10px] lg:text-xs font-bold uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="How can we help you today?"
                  className={cn(
                    "w-full px-4 py-3 rounded-xl bg-nutri-warm-bg border-0 resize-none",
                    "text-nutri-dark-text text-sm lg:text-base placeholder:text-nutri-dark-body/50",
                    "focus:outline-none focus:ring-2 focus:ring-nutri-green/50",
                    errors.message && "ring-2 ring-red-400"
                  )}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full rounded-full py-3.5 lg:py-4 font-bold text-sm lg:text-base text-white",
                  "bg-nutri-green-dark hover:bg-nutri-green-deep transition-colors",
                  "disabled:opacity-50 disabled:cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Direct Support Card */}
          <div className="bg-nutri-green-dark rounded-[24px] lg:rounded-3xl p-6 lg:p-8 text-white w-full lg:w-[280px] shrink-0">
            <div className="bg-white/20 rounded-xl lg:rounded-2xl size-12 lg:size-14 flex items-center justify-center mb-4 lg:mb-6">
              <Mail className="size-6 lg:size-7 text-white" />
            </div>
            <h3 className="font-bold text-white text-lg lg:text-xl mb-2 lg:mb-3">
              Direct Support
            </h3>
            <p className="text-white/80 text-sm lg:text-base leading-relaxed mb-4 lg:mb-6">
              Prefer email? Reach out directly and our specialists will respond
              within 24 hours.
            </p>
            <a
              href="mailto:support@odysseyts.com"
              className="text-white font-bold text-sm lg:text-base underline hover:text-nutri-green-lime transition-colors"
            >
              support@odysseyts.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
