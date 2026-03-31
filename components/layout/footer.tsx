import Link from "next/link";

const footerLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "CCPA Privacy Notice", href: "/privacy/ccpa" },
  { label: "Terms", href: "/terms" },
  { label: "Cookie Preferences", href: "/cookies" },
  { label: "Help Center", href: "/help" },
];

export function Footer() {
  return (
    <footer className="bg-nutri-dark-footer text-white">
      <div className="max-w-[448px] lg:max-w-[1280px] mx-auto px-6 lg:px-8 pt-16 lg:py-20 pb-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand (spans 2 cols on desktop) */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-nutri-green rounded-[6px] size-8 lg:size-10 flex items-center justify-center">
                <span className="font-bold text-[#16232c] lg:text-nutri-green-dark text-base lg:text-xl leading-none">
                  N
                </span>
              </div>
              <span className="font-bold lg:font-black text-white text-[20px] lg:text-2xl tracking-[-0.5px] lg:tracking-tight">
                Nutri
              </span>
            </div>
            <p className="text-[#6b7280] lg:text-white/40 text-sm lg:text-lg leading-relaxed lg:max-w-[448px]">
              The only nutrition app built for the way families
              <br />
              actually eat — together. We combine AI technology
              <br />
              with human-centric meal planning.
            </p>
          </div>

          {/* Spacer (desktop only) */}
          <div className="hidden lg:block" />

          {/* Support Links */}
          <div className="flex flex-col gap-4 lg:gap-8 pt-4 lg:pt-0 pb-8 lg:pb-0">
            <span className="font-bold lg:font-black text-[#9ca3af] lg:text-nutri-green text-[10px] lg:text-xs tracking-[1px] lg:tracking-[1.2px] uppercase">
              Support
            </span>
            <div className="flex flex-col gap-3 lg:gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium lg:font-bold text-white lg:text-white/60 text-sm lg:text-base hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-8 lg:mt-20 pt-8 lg:pt-10 flex flex-col items-center gap-6 lg:gap-4">
          <div className="flex gap-4">
            <div className="bg-white/5 rounded-full size-10 flex items-center justify-center">
              <div className="bg-white/20 rounded-full size-5" />
            </div>
            <div className="bg-white/5 rounded-full size-10 flex items-center justify-center">
              <div className="bg-white/20 rounded-full size-5" />
            </div>
            <div className="bg-white/5 rounded-full size-10 flex items-center justify-center">
              <div className="bg-white/20 rounded-full size-5" />
            </div>
          </div>
          <p className="text-[#4b5563] lg:text-white/20 text-[10px] lg:text-sm font-bold lg:font-normal">
            © 2026 Odyssey Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
