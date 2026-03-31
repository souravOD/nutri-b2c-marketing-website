"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "The Problem", href: "/#problem" },
  { label: "Features", href: "/#features" },
  { label: "Results", href: "/#results" },
];

export function Navbar() {
  const pathname = usePathname();

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
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="backdrop-blur-md bg-[rgba(250,248,243,0.9)] border-b border-[rgba(83,129,0,0.1)]">
        <div className="w-full flex items-center justify-between h-20 px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-nutri-green rounded-[4px] size-8 flex items-center justify-center">
              <span className="font-black text-nutri-green-dark text-lg leading-none">
                N
              </span>
            </div>
            <span className="font-black text-nutri-green-dark text-2xl tracking-tight">
              Nutri
            </span>
          </Link>

          {/* Nav Links + CTA */}
          <div className="flex items-center">
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
                href="/#cta"
                onClick={(e) => handleAnchorClick(e, "/#cta")}
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
        </div>
      </nav>
    </header>
  );
}
