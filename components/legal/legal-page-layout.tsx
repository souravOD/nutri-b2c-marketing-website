import { cn } from "@/lib/utils";

interface LegalPageLayoutProps {
  badge: string;
  title: string;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
}

export function LegalPageLayout({
  badge,
  title,
  subtitle,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="bg-nutri-warm-bg">
      {/* Hero */}
      <div className="flex flex-col items-center gap-6 max-w-[896px] mx-auto pt-20 pb-20 px-8">
        <span className="bg-nutri-green-pale text-nutri-green-dark font-bold text-xs tracking-[0.6px] uppercase px-4 py-1.5 rounded-full">
          {badge}
        </span>
        <h1 className="font-black text-nutri-dark-text text-[72px] leading-none tracking-tight text-center">
          {title}
        </h1>
        {subtitle && (
          <div className="text-nutri-dark-body text-xl font-medium text-center">
            {subtitle}
          </div>
        )}
      </div>

      {/* Content Card */}
      <div className="max-w-[896px] mx-auto pb-24">
        <div className="bg-white rounded-[48px] shadow-sm relative overflow-hidden pt-[136px] pb-[256px] px-20">
          {/* Decorative blur accent */}
          <div className="absolute -top-24 -right-24 size-64 bg-nutri-green-lime/20 rounded-full blur-[32px]" />
          <div className="relative flex flex-col gap-14">{children}</div>
        </div>
      </div>
    </div>
  );
}

/* Reusable sub-components for legal pages */

export function LegalSection({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <h2 className="font-extrabold text-nutri-green-forest text-[32px] leading-tight">
        {title}
      </h2>
      {children}
    </div>
  );
}

export function LegalParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-nutri-dark-text text-base leading-relaxed">{children}</p>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-base">
          <span className="text-nutri-green-dark font-bold mt-0.5">•</span>
          <span className="text-nutri-dark-text">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LegalCallout({
  title,
  children,
  variant = "info",
}: {
  title: string;
  children: React.ReactNode;
  variant?: "info" | "warning" | "dark";
}) {
  return (
    <div
      className={cn(
        "rounded-[32px] p-7",
        variant === "info" &&
          "bg-nutri-green-dark/10 border-l-4 border-nutri-green-forest",
        variant === "warning" &&
          "bg-nutri-warm-card-alt border-2 border-dashed border-nutri-green-border-light",
        variant === "dark" &&
          "bg-nutri-dark-text text-white"
      )}
    >
      <p
        className={cn(
          "font-bold text-base mb-4",
          variant === "dark" ? "text-nutri-green-lime" : "text-nutri-green-forest"
        )}
      >
        {title}
      </p>
      <div
        className={cn(
          "text-sm leading-relaxed",
          variant === "dark" ? "text-gray-300" : "text-nutri-dark-body"
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function LegalContactCard({
  label,
  email,
  icon,
}: {
  label: string;
  email: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="bg-nutri-warm-card rounded-[32px] flex items-center gap-4 px-6 py-6">
      {icon && (
        <div className="shrink-0">{icon}</div>
      )}
      <div className="flex flex-col gap-1">
        <span className="font-bold text-nutri-dark-text text-base">{label}</span>
        <a
          href={`mailto:${email}`}
          className="text-nutri-green-forest text-base hover:underline"
        >
          {email}
        </a>
      </div>
    </div>
  );
}
