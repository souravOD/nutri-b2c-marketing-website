"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { useCookieConsent } from "@/hooks/use-cookie-consent";
import { cn } from "@/lib/utils";

interface CookieCategory {
  title: string;
  description: string;
  required: boolean;
  defaultEnabled: boolean;
  badge?: string;
  cookies: { name: string; duration: string; purpose: string }[];
}

const categories: CookieCategory[] = [
  {
    title: "1. Strictly Necessary",
    description:
      "These cookies are essential for the website to function and cannot be switched off. They are usually set in response to actions made by you which amount to a request for services, such as logging in or filling in forms.",
    required: true,
    defaultEnabled: true,
    badge: "All are active",
    cookies: [
      { name: "odyssey_session", duration: "Session", purpose: "Secure authentication" },
      { name: "csrf_token", duration: "Session", purpose: "Security prevention" },
    ],
  },
  {
    title: "2. Functional",
    description:
      "These cookies enable the website to provide enhanced functionality and personalization, such as remembering your preferences or saving your favorite recipes for offline access.",
    required: false,
    defaultEnabled: true,
    cookies: [
      { name: "ui_preferences", duration: "1 Year", purpose: "Interface settings" },
      { name: "local_cache", duration: "Persistent", purpose: "Speeds up loading" },
    ],
  },
  {
    title: "3. Analytics",
    description:
      "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular.",
    required: false,
    defaultEnabled: false,
    cookies: [
      { name: ".di", duration: "2 Years", purpose: "Usage statistics" },
      { name: ".gid", duration: "24 Hours", purpose: "Unique visitor tracking" },
    ],
  },
];

export default function CookiesPage() {
  const { savePreferences } = useCookieConsent();
  const [functional, setFunctional] = useState(true);
  const [analytics, setAnalytics] = useState(false);

  const handleSave = () => {
    if (functional && analytics) {
      savePreferences("all");
    } else if (functional) {
      savePreferences("functional");
    } else {
      savePreferences("necessary");
    }
    alert("Cookie preferences saved!");
  };

  const handleRejectAll = () => {
    setFunctional(false);
    setAnalytics(false);
    savePreferences("necessary");
    alert("Optional cookies rejected.");
  };

  const toggles = [null, functional, analytics];
  const setters = [null, setFunctional, setAnalytics];

  return (
    <div className="bg-nutri-warm-bg">
      {/* Hero */}
      <div className="text-center pt-12 lg:pt-16 pb-8 lg:pb-12 px-6 lg:px-8">
        <h1 className="font-black text-nutri-dark text-[36px] lg:text-[64px] leading-tight tracking-tight">
          Cookie Preferences
        </h1>
        <p className="text-nutri-dark-body text-sm lg:text-lg mt-3 lg:mt-4 max-w-[520px] mx-auto">
          Your vitality journey is yours alone. We use cookies to enhance your
          experience, analyze performance, and ensure the security of your health
          data.
        </p>
        <p className="text-nutri-green-forest font-bold text-xs lg:text-base mt-2 lg:mt-3">
          Last updated: March 29, 2026
        </p>
      </div>

      {/* Categories */}
      <div className="max-w-[800px] mx-auto px-6 lg:px-8 pb-8 lg:pb-12 flex flex-col gap-6 lg:gap-10">
        {categories.map((cat, idx) => (
          <div
            key={cat.title}
            className="bg-white rounded-[24px] lg:rounded-3xl border border-nutri-green-border p-6 lg:p-10 shadow-sm"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3 lg:mb-4">
              <h2 className="font-extrabold text-nutri-dark-text text-lg lg:text-2xl">
                {cat.title}
              </h2>
              {cat.required ? (
                <span className="bg-nutri-green-pale text-nutri-green-dark font-bold text-[10px] lg:text-xs px-2.5 lg:px-3 py-1 rounded-full">
                  {cat.badge}
                </span>
              ) : (
                <Switch
                  checked={toggles[idx] as boolean}
                  onCheckedChange={(v) => (setters[idx] as (v: boolean) => void)(v)}
                  className="data-checked:!bg-[#538100]"
                />
              )}
            </div>

            {/* Description */}
            <p className="text-nutri-dark-body text-sm lg:text-base leading-relaxed mb-6 lg:mb-8">
              {cat.description}
            </p>

            {/* Cookie Table */}
            <div className="bg-nutri-warm-bg rounded-xl lg:rounded-2xl overflow-hidden">
              <div className="grid grid-cols-[2fr_1fr_1fr] gap-x-3 px-4 lg:px-6 py-2.5 lg:py-3 border-b border-nutri-green-border/50">
                <span className="font-bold text-nutri-green-dark text-[10px] lg:text-xs uppercase tracking-wider">
                  Cookie
                </span>
                <span className="font-bold text-nutri-green-dark text-[10px] lg:text-xs uppercase tracking-wider">
                  Duration
                </span>
                <span className="font-bold text-nutri-green-dark text-[10px] lg:text-xs uppercase tracking-wider">
                  Purpose
                </span>
              </div>
              {cat.cookies.map((cookie) => (
                <div
                  key={cookie.name}
                  className="grid grid-cols-[2fr_1fr_1fr] gap-x-3 px-4 lg:px-6 py-2.5 lg:py-3 border-b border-nutri-green-border/30 last:border-0"
                >
                  <span className="text-nutri-dark-text font-bold text-xs lg:text-sm">
                    {cookie.name}
                  </span>
                  <span className="text-nutri-dark-body text-xs lg:text-sm">
                    {cookie.duration}
                  </span>
                  <span className="text-nutri-dark-body text-xs lg:text-sm">
                    {cookie.purpose}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Sticky Save Bar */}
      <div className="bg-white border-t border-nutri-green-border py-6 lg:py-8">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <div className="bg-nutri-dark-text rounded-[20px] lg:rounded-3xl p-6 lg:p-8 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-4 lg:gap-0">
            <div className="text-center lg:text-left">
              <h3 className="font-bold text-white text-lg lg:text-xl mb-1">
                Save your settings?
              </h3>
              <p className="text-white/60 text-xs lg:text-sm">
                Preferences can be changed anytime in your profile.
              </p>
            </div>
            <div className="flex gap-3 lg:gap-4 w-full lg:w-auto">
              <button
                onClick={handleRejectAll}
                className={cn(
                  "rounded-full flex-1 lg:flex-initial px-5 lg:px-6 py-2.5 lg:py-3 font-bold text-xs lg:text-sm",
                  "bg-white/10 text-white border border-white/20",
                  "hover:bg-white/20 transition-colors"
                )}
              >
                Reject All Optional
              </button>
              <button
                onClick={handleSave}
                className={cn(
                  "rounded-full flex-1 lg:flex-initial px-5 lg:px-6 py-2.5 lg:py-3 font-bold text-xs lg:text-sm",
                  "bg-nutri-green text-nutri-dark-text",
                  "hover:bg-nutri-green-lime transition-colors"
                )}
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
