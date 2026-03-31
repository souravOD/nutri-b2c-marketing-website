"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "The Problem", href: "/#problem" },
  { label: "Features", href: "/#features" },
  { label: "Results", href: "/#results" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#")) {
      if (pathname === "/") {
        e.preventDefault();
        const id = href.replace("/#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="backdrop-blur-md bg-[rgba(255,255,255,0.8)] lg:bg-[rgba(250,248,243,0.9)] border-b border-[rgba(83,129,0,0.1)] lg:border-[rgba(83,129,0,0.1)]">
        <div className="w-full flex items-center justify-between h-16 lg:h-20 px-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileMenuOpen(false)}>
            <div className="bg-nutri-green rounded-[6px] lg:rounded-[4px] size-8 flex items-center justify-center">
              <span className="font-bold lg:font-black text-white lg:text-nutri-green-dark text-base lg:text-lg leading-none">
                N
              </span>
            </div>
            <span className="font-bold lg:font-black text-[#16232c] lg:text-nutri-green-dark text-[20px] lg:text-2xl tracking-[-0.5px] lg:tracking-tight">
              Nutri
            </span>
          </Link>

          {/* Desktop Nav Links + CTA */}
          <div className="hidden lg:flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="font-bold text-nutri-green-dark text-sm ml-8 hover:text-nutri-green transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-8">
              <Link
                href="/get-started"
                className={cn(
                  "inline-flex items-center justify-center rounded-full px-6 py-2.5",
                  "bg-nutri-green-dark text-white font-bold text-base",
                  "shadow-[0px_4px_6px_-1px_rgba(83,129,0,0.2),0px_2px_4px_-2px_rgba(83,129,0,0.2)]",
                  "hover:bg-nutri-green-deep transition-colors"
                )}
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden flex items-center justify-center px-[30px] py-2 rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              /* Close X icon */
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="2" y1="2" x2="16" y2="16" stroke="#16232c" strokeWidth="2" strokeLinecap="round" />
                <line x1="16" y1="2" x2="2" y2="16" stroke="#16232c" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              /* Hamburger 3-line icon */
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="1" x2="18" y2="1" stroke="#16232c" strokeWidth="2" strokeLinecap="round" />
                <line x1="0" y1="6" x2="18" y2="6" stroke="#16232c" strokeWidth="2" strokeLinecap="round" />
                <line x1="0" y1="11" x2="18" y2="11" stroke="#16232c" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Slide-Down Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col gap-1 px-4 pb-6 pt-2 border-t border-[rgba(83,129,0,0.05)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="font-bold text-[#16232c] text-base py-3 px-4 rounded-2xl hover:bg-[#f5f8ed] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 px-4">
              <Link
                href="/get-started"
                className={cn(
                  "inline-flex items-center justify-center rounded-full w-full px-6 py-3",
                  "bg-nutri-green-dark text-white font-bold text-base",
                  "shadow-[0px_4px_6px_-1px_rgba(83,129,0,0.2)]",
                  "hover:bg-nutri-green-deep transition-colors"
                )}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
