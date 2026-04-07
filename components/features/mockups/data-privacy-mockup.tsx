import { ShieldCheck, Lock, Server } from "lucide-react";

export function DataPrivacyMockup() {
  return (
    <div className="bg-white rounded-[32px] lg:rounded-[48px] p-5 lg:p-7 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] max-w-[340px] mx-auto">
      {/* Shield Header */}
      <div className="flex flex-col items-center mb-6">
        <div className="size-16 rounded-full bg-[#f0faf2] flex items-center justify-center mb-3">
          <ShieldCheck className="size-8 text-[#538100]" strokeWidth={1.5} />
        </div>
        <p className="text-[#0f172a] font-bold text-[16px]">
          Your Data is Protected
        </p>
        <p className="text-[#64748b] text-[12px] mt-1 text-center">
          Enterprise-grade security for your family
        </p>
      </div>

      {/* Compliance Badges */}
      <div className="grid grid-cols-2 gap-2.5 mb-5">
        {[
          { label: "HIPAA", status: "Compliant", color: "text-[#538100]", bg: "bg-[#f0faf2]" },
          { label: "SOC 2", status: "Type II", color: "text-[#538100]", bg: "bg-[#f0faf2]" },
          { label: "GDPR", status: "Ready", color: "text-[#538100]", bg: "bg-[#f0faf2]" },
          { label: "AES-256", status: "Encrypted", color: "text-[#538100]", bg: "bg-[#f0faf2]" },
        ].map((badge) => (
          <div
            key={badge.label}
            className={`${badge.bg} rounded-xl p-3 text-center`}
          >
            <p className="text-[#0f172a] font-bold text-[13px]">
              {badge.label}
            </p>
            <p className={`${badge.color} text-[10px] font-medium mt-0.5`}>
              {badge.status}
            </p>
          </div>
        ))}
      </div>

      {/* Security Status */}
      <div className="space-y-2.5">
        <div className="flex items-center gap-3 bg-[#f7f8f6] rounded-xl px-3.5 py-2.5">
          <Lock className="size-4 text-[#538100] flex-shrink-0" strokeWidth={2} />
          <div className="flex-1">
            <p className="text-[#0f172a] font-medium text-[12px]">
              End-to-end encryption
            </p>
          </div>
          <div className="size-2 rounded-full bg-[#9c3]" />
        </div>
        <div className="flex items-center gap-3 bg-[#f7f8f6] rounded-xl px-3.5 py-2.5">
          <Server className="size-4 text-[#538100] flex-shrink-0" strokeWidth={2} />
          <div className="flex-1">
            <p className="text-[#0f172a] font-medium text-[12px]">
              US-only data residency
            </p>
          </div>
          <div className="size-2 rounded-full bg-[#9c3]" />
        </div>
      </div>
    </div>
  );
}
