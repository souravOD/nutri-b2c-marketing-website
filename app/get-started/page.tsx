// app/get-started/page.tsx
"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Metadata } from "next";

type Step = "form" | "success";

// Leaf SVG icons for decorative elements
function LeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20c4 0 8.5-3.5 9-12Z" fill="currentColor" opacity="0.15"/>
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20c4 0 8.5-3.5 9-12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#f5f3ee] flex items-center justify-center mx-auto">
      <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#538100] flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#538100" opacity="0.15"/>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#538100" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M9 12l2 2 4-4" stroke="#538100" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function GetStartedPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("form");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [cooldown, setCooldown] = useState(0);
  const [requiresConfirmation, setRequiresConfirmation] = useState(false);

  const handleSubmit = useCallback(
    async (e?: React.FormEvent, forceResend = false) => {
      e?.preventDefault();
      setError("");

      if (!firstName.trim() || !lastName.trim() || !email.trim()) {
        setError("Please fill in all fields.");
        return;
      }
      if (!agreedTerms) {
        setError("Please agree to the Terms of Service and Privacy Policy.");
        return;
      }

      setIsLoading(true);
      try {
        const res = await fetch("/api/send-trial-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim(),
            forceResend,
            userTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          }),
        });

        const data = await res.json();

        if (res.status === 409 && data.requiresConfirmation) {
          setRequiresConfirmation(true);
          return;
        }

        if (!res.ok) {
          setError(data.error || "Something went wrong. Please try again.");
          return;
        }

        setStep("success");
      } catch {
        setError("Network error. Please check your connection and try again.");
      } finally {
        setIsLoading(false);
      }
    },
    [firstName, lastName, email, agreedTerms]
  );

  const handleResend = useCallback(async () => {
    if (cooldown > 0) return;

    setError("");
    setIsLoading(true);
    try {
      const res = await fetch("/api/send-trial-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          userTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to resend. Please try again.");
        return;
      }

      // Start 60s cooldown
      setCooldown(60);
      const interval = setInterval(() => {
        setCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [firstName, lastName, email, cooldown]);

  return (
    <>
      <section className="bg-[#f5f3ee] min-h-[calc(100vh-80px)] flex items-start lg:items-center justify-center py-8 lg:py-16 px-4 lg:px-8">
        {step === "form" ? (
          /* ═══════════════════════════════════════
             STEP 1: Registration Form
             ═══════════════════════════════════════ */
          <div className="w-full max-w-[747px] bg-white rounded-[40px] lg:rounded-[48px] shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-6 sm:p-8 lg:p-16">
            {/* Headline */}
            <h1 className="font-black text-[#1a3c34] text-[28px] leading-[34px] lg:text-[48px] lg:leading-[52px] mb-6 lg:mb-10">
              Start your and your family&rsquo;s journey to vitality.
            </h1>

            {/* Form Section */}
            <form onSubmit={handleSubmit} id="trial-form">
              <h2 className="font-extrabold text-[#1a3c34] text-[20px] lg:text-[30px] mb-1 lg:mb-2">
                Basic details
              </h2>
              <p className="text-[#475569] text-sm lg:text-base mb-6 lg:mb-8">
                We&rsquo;ll use this to send you email notifications and communication
              </p>

              {/* Name Fields */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-4 lg:mb-6">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-[10px] font-bold uppercase tracking-[1px] text-[#496800] mb-2 pl-1"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Julian"
                    required
                    className="w-full h-[52px] lg:h-[56px] px-5 lg:px-6 rounded-[16px] lg:rounded-full bg-[#f5f3ee] border-none text-[#1a3c34] text-base placeholder:text-[#94a3b8] outline-none focus:ring-2 focus:ring-[#538100]/30 transition-shadow"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-[10px] font-bold uppercase tracking-[1px] text-[#496800] mb-2 pl-1"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Verdant"
                    required
                    className="w-full h-[52px] lg:h-[56px] px-5 lg:px-6 rounded-[16px] lg:rounded-full bg-[#f5f3ee] border-none text-[#1a3c34] text-base placeholder:text-[#94a3b8] outline-none focus:ring-2 focus:ring-[#538100]/30 transition-shadow"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-6 lg:mb-8">
                <label
                  htmlFor="email"
                  className="block text-[10px] font-bold uppercase tracking-[1px] text-[#496800] mb-2 pl-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (requiresConfirmation) setRequiresConfirmation(false);
                  }}
                  placeholder="julian@odyssey.com"
                  required
                  className="w-full h-[52px] lg:h-[56px] px-5 lg:px-6 rounded-[16px] lg:rounded-full bg-[#f5f3ee] border-none text-[#1a3c34] text-base placeholder:text-[#94a3b8] outline-none focus:ring-2 focus:ring-[#538100]/30 transition-shadow"
                />
              </div>

              {/* Terms Consent */}
              <label
                htmlFor="terms"
                className="flex items-start gap-3 mb-6 lg:mb-8 cursor-pointer select-none"
              >
                <div className="relative mt-0.5 shrink-0">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={agreedTerms}
                    onChange={(e) => setAgreedTerms(e.target.checked)}
                    className="peer sr-only"
                  />
                  <div className="w-5 h-5 rounded-full border-2 border-[#cbd5e1] peer-checked:border-[#538100] peer-checked:bg-[#538100] transition-colors flex items-center justify-center">
                    {agreedTerms && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-sm text-[#475569] leading-[20px]">
                  I agree to the{" "}
                  <Link href="/terms" className="font-semibold text-[#1a3c34] underline hover:text-[#538100] transition-colors">
                    Terms of Service
                  </Link>{" "}
                  and acknowledge the{" "}
                  <Link href="/privacy" className="font-semibold text-[#1a3c34] underline hover:text-[#538100] transition-colors">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {/* Error Message */}
              {error && (
                <div className="mb-4 p-3 rounded-2xl bg-red-50 text-red-600 text-sm font-medium">
                  {error}
                </div>
              )}

              {/* Action Buttons & Confirmation Warning */}
              {!requiresConfirmation ? (
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-3 lg:gap-4 mb-6 lg:mb-8">
                  <button
                    type="button"
                    onClick={() => router.push("/")}
                    className="text-[#1a3c34] font-bold text-sm lg:text-base hover:text-[#538100] transition-colors bg-transparent border-none cursor-pointer py-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full lg:w-auto inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 bg-gradient-to-r from-[#416600] to-[#538100] text-white font-bold text-base shadow-[0_4px_14px_rgba(83,129,0,0.3)] hover:shadow-[0_6px_20px_rgba(83,129,0,0.4)] disabled:opacity-50 transition-all cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>Start Free Trial →</>
                    )}
                  </button>
                </div>
              ) : (
                <div className="mb-6 lg:mb-8 rounded-2xl bg-[#fffbeb] border border-[#fde68a] p-5 lg:p-6 shadow-sm">
                  <h3 className="text-[#92400e] font-extrabold text-base lg:text-lg mb-2 flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Check Inbox First
                  </h3>
                  <p className="text-[#92400e]/80 text-sm lg:text-base leading-relaxed mb-5">
                    We previously sent a free trial link to this email address. Would you like us to generate and send a new one?
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleSubmit(undefined, true)}
                      disabled={isLoading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 bg-[#d97706] text-white font-bold text-sm lg:text-base shadow-sm hover:bg-[#b45309] disabled:opacity-50 transition-all cursor-pointer"
                    >
                      {isLoading ? "Sending..." : "Yes, send new link"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setRequiresConfirmation(false)}
                      disabled={isLoading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 bg-transparent text-[#92400e] font-bold text-sm lg:text-base border border-[#fcd34d] hover:bg-[#fef3c7] disabled:opacity-50 transition-all cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </form>

            {/* Trust Badge */}
            <div className="rounded-[24px] lg:rounded-[32px] bg-[#f5f3ee]/50 p-4 lg:p-5 flex items-start gap-3">
              <ShieldIcon />
              <p className="text-xs lg:text-[13px] text-[#475569] leading-[18px] m-0">
                Your data is encrypted and stored according to medical-grade security standards.
                We never sell your personal information.
              </p>
            </div>
          </div>
        ) : (
          /* ═══════════════════════════════════════
             STEP 2: Check Your Email (Success)
             ═══════════════════════════════════════ */
          <div className="w-full max-w-[576px] bg-white rounded-[40px] lg:rounded-[48px] shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-8 lg:p-16 text-center">
            {/* Checkmark Icon */}
            <div className="mb-5 lg:mb-6">
              <CheckCircleIcon />
            </div>

            {/* Badge */}
            <p className="text-[10px] lg:text-[12px] font-bold uppercase tracking-[1.2px] text-[#416600] mb-2 lg:mb-3">
              Account Security
            </p>

            {/* Heading */}
            <h1 className="font-extrabold text-[#1a3c34] text-[24px] lg:text-[32px] leading-tight mb-4 lg:mb-5">
              Check your email
            </h1>

            {/* Description */}
            <p className="text-[#475569] text-sm lg:text-base leading-relaxed mb-6 lg:mb-8 max-w-[400px] mx-auto">
              We&rsquo;ve sent a verification link to your email address. Please click the link in that
              email to activate your free trial and begin your journey.
            </p>

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 rounded-2xl bg-red-50 text-red-600 text-sm font-medium">
                {error}
              </div>
            )}

            {/* Resend */}
            <p className="text-sm text-[#475569] mb-6 lg:mb-8">
              Didn&rsquo;t receive the email?{" "}
              {cooldown > 0 ? (
                <span className="font-bold text-[#94a3b8]">
                  Resend in {cooldown}s
                </span>
              ) : (
                <button
                  onClick={handleResend}
                  disabled={isLoading}
                  className="font-bold text-[#1a3c34] underline hover:text-[#538100] transition-colors bg-transparent border-none cursor-pointer p-0 disabled:opacity-50"
                >
                  {isLoading ? "Sending..." : "Resend Email"}
                </button>
              )}
            </p>

            {/* Decorative leaf icons */}
            <div className="flex items-center justify-center gap-4 text-[#538100] opacity-20">
              <LeafIcon />
              <LeafIcon className="rotate-45" />
              <LeafIcon className="-rotate-45" />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
