"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { useCookieConsent } from "@/hooks/use-cookie-consent";
import { cn } from "@/lib/utils";

export function CookieConsentBanner() {
  const { showBanner, acceptAll, acceptNecessary } = useCookieConsent();
  const router = useRouter();

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-[48px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] p-12 max-w-[720px] w-full relative overflow-hidden">
        {/* Decorative blur accent */}
        <div className="absolute -top-10 -right-10 size-40 bg-nutri-green/20 rounded-full blur-[32px]" />

        <div className="flex flex-col gap-6 relative">
          {/* Header */}
          <div className="flex items-start justify-between">
            <h2 className="font-black text-nutri-dark-card text-[30px] leading-9 max-w-[448px]">
              You are in control of your own cookies
            </h2>
            <button
              onClick={acceptNecessary}
              className="text-nutri-dark-body hover:text-nutri-dark-text transition-colors shrink-0 mt-1"
              aria-label="Close cookie banner"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Description */}
          <p className="text-nutri-dark-body text-lg leading-relaxed">
            Odyssey Nutrition and our digital partners use cookies on this site.
            Some are strictly necessary to run the site but below are the
            optional ones:
          </p>

          {/* Bullet List */}
          <div className="flex flex-col gap-4 py-2">
            {[
              "Used for measuring how the site is used",
              "Enabling personalization of the site",
              "For advertising marketing and social media",
            ].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <div className="size-2 rounded-full bg-nutri-green-dark shrink-0" />
                <span className="text-nutri-dark-text text-base">{item}</span>
              </div>
            ))}
          </div>

          {/* Customize Link */}
          <Link
            href="/cookies"
            onClick={() => acceptNecessary()}
            className="font-bold text-nutri-green-dark text-base underline hover:text-nutri-green-deep transition-colors"
          >
            Read more and customize cookie settings
          </Link>

          {/* Buttons */}
          <div className="border-t border-nutri-green-border-light/15 pt-6 flex gap-4 justify-center">
            <button
              onClick={acceptAll}
              className={cn(
                "rounded-full px-8 py-5 w-[327px] font-bold text-base text-white",
                "bg-nutri-green-deep hover:bg-nutri-green-dark transition-colors"
              )}
            >
              Accept All Cookies
            </button>
            <button
              onClick={() => {
                acceptNecessary();
                router.push("/cookies");
              }}
              className={cn(
                "rounded-full px-8 py-5 w-[329px] font-bold text-base",
                "bg-white border border-nutri-green-border text-nutri-dark",
                "hover:bg-nutri-warm-card transition-colors"
              )}
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
