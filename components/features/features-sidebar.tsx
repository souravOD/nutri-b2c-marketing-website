"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import {
  BarChart3,
  ScanSearch,
  ChefHat,
  CalendarDays,
  Lightbulb,
  ShoppingCart,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";

const navItems = [
  { id: "nutrition-dashboard", label: "Nutrition Dashboard", icon: BarChart3 },
  { id: "recipe-analyzer", label: "Recipe Analyzer", icon: ScanSearch },
  { id: "create-recipes", label: "Create Recipes", icon: ChefHat },
  { id: "meal-planning", label: "Meal Planning", icon: CalendarDays },
  { id: "recipe-insights", label: "Recipe Insights", icon: Lightbulb },
  { id: "grocery-list", label: "Grocery List", icon: ShoppingCart },
  { id: "ai-assistant", label: "AI Assistant", icon: MessageSquareText },
  { id: "data-privacy", label: "Data & Privacy", icon: ShieldCheck },
];

export function FeaturesSidebar() {
  const [activeId, setActiveId] = useState(navItems[0].id);
  const tabsRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  // Scroll-spy: track which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-scroll active tab into view on mobile
  useEffect(() => {
    if (!tabsRef.current) return;
    const activeEl = tabsRef.current.querySelector(`[data-id="${activeId}"]`);
    if (activeEl) {
      (activeEl as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeId]);

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:block w-[256px] flex-shrink-0">
        <div className="sticky top-[96px]">
          <div className="flex flex-col gap-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleClick(id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                  activeId === id
                    ? "bg-[#538100] text-white shadow-[0px_4px_6px_-1px_rgba(83,129,0,0.3)]"
                    : "text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#1b1c19]"
                }`}
              >
                <Icon className="size-4 flex-shrink-0" strokeWidth={2} />
                <span className="font-medium text-[14px]">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Horizontal Tabs */}
      <div className="lg:hidden bg-white/90 backdrop-blur-md border-b border-[rgba(83,129,0,0.1)] px-4 py-3">
        <div
          ref={tabsRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide pb-1"
        >
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              data-id={id}
              onClick={() => handleClick(id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-[12px] font-semibold whitespace-nowrap flex-shrink-0 transition-all duration-200 ${
                activeId === id
                  ? "bg-[#538100] text-white shadow-sm"
                  : "bg-[#f1f5f9] text-[#64748b]"
              }`}
            >
              <Icon className="size-3" strokeWidth={2} />
              {label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
