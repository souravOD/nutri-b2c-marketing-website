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
      <div className="max-w-[1280px] mx-auto px-8 py-20">
        {/* Top Grid */}
        <div className="grid grid-cols-4 gap-12">
          {/* Brand (spans 2 cols) */}
          <div className="col-span-2 flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-nutri-green rounded-[4px] size-10 flex items-center justify-center">
                <span className="font-black text-nutri-green-dark text-xl leading-none">
                  N
                </span>
              </div>
              <span className="font-black text-white text-2xl tracking-tight">
                Nutri
              </span>
            </div>
            <p className="text-white/40 text-lg leading-relaxed max-w-[448px]">
              The only nutrition app built for the way families
              <br />
              actually eat — together. We combine AI technology
              <br />
              with human-centric meal planning.
            </p>
          </div>

          {/* Spacer */}
          <div />

          {/* Support Links */}
          <div className="flex flex-col gap-8">
            <span className="font-black text-nutri-green text-xs tracking-[1.2px] uppercase">
              Support
            </span>
            <div className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-bold text-white/60 text-base hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-20 pt-10 flex flex-col items-center gap-4">
          <p className="text-white/20 text-sm">
            © 2026 Odyssey Inc. All rights reserved.
          </p>
          <div className="flex gap-8">
            <div className="bg-white/10 rounded-full size-6" />
            <div className="bg-white/10 rounded-full size-6" />
            <div className="bg-white/10 rounded-full size-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
