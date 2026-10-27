"use client";

import React, { useState, useEffect, useRef } from "react";

export type ContactChannel = "whatsapp" | "call" | "mail";

export interface ContactIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialChannel?: ContactChannel;
  initialService?: string;
}

const PHONE_NUMBER = "+919330490777";
const WHATSAPP_NUMBER = "919330490777";
const EMAIL_ADDRESS = "connect@servicedialtm.com";

const SERVICES = [
  "HRMS & Payroll Management",
  "Statutory Compliance & Audits",
  "Staffing & Manpower Recruitment",
  "Finance, Accounting & Tax Filing",
  "Trademark & IP Legal Protection",
  "General Corporate Consultation",
];

const HEADCOUNT_RANGES = [
  "1 - 10 Employees",
  "11 - 50 Employees",
  "51 - 200 Employees",
  "201 - 1,000 Employees",
  "1,000+ Enterprise Scale",
];

// ── Field wrapper — defined at MODULE level so React never remounts inputs on re-render ────
function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-bold text-slate-700 block">
        {label}
        {required && <span className="text-rose-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-[11px] text-rose-600 font-semibold mt-1">
          <svg
            className="w-3.5 h-3.5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}

export function openContactIntentModal(channel: ContactChannel = "whatsapp", service?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open_contact_modal", {
        detail: { channel, service },
      })
    );
  }
}

export default function ContactIntentModal({
  isOpen,
  onClose,
  initialChannel = "whatsapp",
  initialService,
}: ContactIntentModalProps) {
  const [channel, setChannel] = useState<ContactChannel>(initialChannel);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState(initialService || SERVICES[0]);
  const [headcount, setHeadcount] = useState(HEADCOUNT_RANGES[1]);
  const [message, setMessage] = useState("");
  const [dpdpConsent, setDpdpConsent] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nameInputRef = useRef<HTMLInputElement>(null);

  // Sync initialChannel when prop changes
  useEffect(() => {
    if (initialChannel) setChannel(initialChannel);
  }, [initialChannel]);

  // Sync initialService when prop changes
  useEffect(() => {
    if (initialService) setService(initialService);
  }, [initialService]);

  // Reset errors and focus on open
  useEffect(() => {
    if (isOpen) {
      setErrors({});
      const timer = setTimeout(() => {
        nameInputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // ── Validation ────────────────────────────────────────────────────────────
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const cleanName = name.trim();
    const cleanPhone = phone.replace(/[\s-]/g, "");
    const cleanEmail = email.trim();

    if (!cleanName) {
      newErrors.name = "Please enter your full name.";
    }

    if (!cleanPhone) {
      newErrors.phone = "Mobile / WhatsApp number is required.";
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number (e.g. 9330490777).";
    }

    if (!cleanEmail) {
      newErrors.email = "Business email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      newErrors.email = "Please provide a valid email format.";
    }

    if (!dpdpConsent) {
      newErrors.dpdp = "Statutory consent under DPDP Act 2023 is required to connect.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ── Dispatch & Submission Handler ─────────────────────────────────────────
  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const cleanName = name.trim();
    const cleanPhone = phone.replace(/[\s-]/g, "");
    const cleanEmail = email.trim();
    const cleanCompany = company.trim();
    const cleanMessage = message.trim();
    const currentUrl = typeof window !== "undefined" ? window.location.href : "https://servicedialtm.com";

    // 1. Fire-and-forget push to internal backend (/api/lead-capture)
    // Synchronously captures to MongoDB and triggers Google Sheets Webhook
    try {
      fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: cleanName,
          phone: cleanPhone,
          email: cleanEmail,
          company: cleanCompany,
          channel: channel === "whatsapp" ? "WhatsApp" : channel === "call" ? "Call" : "Email",
          service,
          headcount,
          message: cleanMessage,
          sourceUrl: currentUrl,
          dpdpConsent: true,
        }),
        keepalive: true,
      }).catch((err) => console.warn("[Lead Capture Dispatch Notice]:", err));
    } catch {}

    // 2. Immediate channel redirection (Zero friction for the user)
    if (channel === "whatsapp") {
      const waText = 
`💼 *SERVICE DIAL — ENTERPRISE CONSULTATION*

👤 *Name:* ${cleanName}
📞 *Phone:* +91 ${cleanPhone}
📧 *Email:* ${cleanEmail}
🏢 *Company:* ${cleanCompany || "Individual / Unregistered"}
🛠️ *Service Required:* ${service}
👥 *Workforce Scale:* ${headcount}
📝 *Requirements:* ${cleanMessage || "Requesting executive briefing and service consultation."}

_Sent via servicedialtm.com_`;

      const targetUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;
      if (typeof window !== "undefined") {
        window.open(targetUrl, "_blank", "noopener,noreferrer");
      }
    } else if (channel === "call") {
      if (typeof window !== "undefined") {
        window.location.href = `tel:${PHONE_NUMBER}`;
      }
    } else if (channel === "mail") {
      const subject = `Enterprise Consultation Request — ${service} — ${cleanCompany || cleanName}`;
      const body = 
`Dear Service Dial Team,

I would like to inquire about your enterprise solutions:

• Full Name: ${cleanName}
• Phone: +91 ${cleanPhone}
• Email: ${cleanEmail}
• Company: ${cleanCompany || "Not Specified"}
• Service Required: ${service}
• Workforce / Headcount Scale: ${headcount}
• Scope / Requirements:
${cleanMessage || "Please share an initial proposal and schedule an introductory briefing."}

Looking forward to your response.

Best regards,
${cleanName}`;

      const mailtoUrl = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      if (typeof window !== "undefined") {
        window.location.href = mailtoUrl;
      }
    }

    setIsSubmitting(false);
    onClose();
  };

  // Channel theme configuration
  const channelConfig = {
    whatsapp: {
      title: "Chat with an Enterprise Consultant",
      subtitle: "Instant WhatsApp dispatch with pre-filled scope details",
      badgeText: "Instant WhatsApp Chat",
      accentBg: "bg-[#25D366]",
      accentHover: "hover:bg-[#20ba59]",
      headerBg: "bg-emerald-950 text-white",
      buttonText: "Continue to WhatsApp Chat →",
      btnClass: "bg-[#25D366] hover:bg-[#20ba59] text-white shadow-emerald-500/25",
    },
    call: {
      title: "Connect with Senior Advisory Desk",
      subtitle: "Direct voice line to our Principal Compliance & Payroll Officer",
      badgeText: "Priority Phone Line (+91 93304 90777)",
      accentBg: "bg-[#2563EB]",
      accentHover: "hover:bg-[#1d4ed8]",
      headerBg: "bg-blue-950 text-white",
      buttonText: "Initiate Call Now (+91 93304 90777) →",
      btnClass: "bg-[#2563EB] hover:bg-[#1d4ed8] text-white shadow-blue-500/25",
    },
    mail: {
      title: "Request Formal Written Proposal",
      subtitle: "Direct RFP dispatch to connect@servicedialtm.com",
      badgeText: "Executive Email Desk",
      accentBg: "bg-[#E91E8C]",
      accentHover: "hover:bg-[#c41677]",
      headerBg: "bg-slate-950 text-white",
      buttonText: "Open Email Client (connect@servicedialtm.com) →",
      btnClass: "bg-[#E91E8C] hover:bg-[#c41677] text-white shadow-pink-500/25",
    },
  }[channel];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 transition-all duration-300 transform scale-100 my-auto">
        {/* Top Header Banner */}
        <div className={`px-5 py-4 ${channelConfig.headerBg} relative border-b border-white/10`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-black uppercase tracking-wider text-emerald-400">
                Service Dial Executive Desk
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-1.5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <h2 id="contact-modal-title" className="text-lg sm:text-xl font-black text-white mt-2 leading-tight">
            {channelConfig.title}
          </h2>
          <p className="text-xs text-white/80 mt-1">
            {channelConfig.subtitle}
          </p>

          {/* Channel Selector Tabs */}
          <div className="mt-4 grid grid-cols-3 gap-1.5 p-1 bg-black/30 rounded-xl backdrop-blur-xs">
            <button
              type="button"
              onClick={() => { setChannel("whatsapp"); setErrors({}); }}
              className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                channel === "whatsapp"
                  ? "bg-[#25D366] text-white shadow-md scale-[1.02]"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              <span>WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={() => { setChannel("call"); setErrors({}); }}
              className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                channel === "call"
                  ? "bg-[#2563EB] text-white shadow-md scale-[1.02]"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 shrink-0">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Phone Call</span>
            </button>

            <button
              type="button"
              onClick={() => { setChannel("mail"); setErrors({}); }}
              className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                channel === "mail"
                  ? "bg-[#E91E8C] text-white shadow-md scale-[1.02]"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 shrink-0">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>Email</span>
            </button>
          </div>
        </div>

        {/* Modal Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Row 1: Name and Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Field label="Full Name" required error={errors.name}>
              <input
                ref={nameInputRef}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:border-sd-blue focus:ring-2 focus:ring-sd-blue/20 outline-none transition-all placeholder:text-slate-400"
              />
            </Field>

            <Field label="Mobile / WhatsApp Number" required error={errors.phone}>
              <div className="relative flex">
                <span className="inline-flex items-center px-2.5 rounded-l-lg border border-r-0 border-slate-300 bg-slate-50 text-xs font-bold text-slate-600">
                  +91
                </span>
                <input
                  type="tel"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  placeholder="93304 90777"
                  className="w-full px-3 py-2 rounded-r-lg border border-slate-300 text-sm focus:border-sd-blue focus:ring-2 focus:ring-sd-blue/20 outline-none transition-all placeholder:text-slate-400"
                />
              </div>
            </Field>
          </div>

          {/* Row 2: Business Email and Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Field label="Business Email" required error={errors.email}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="rahul@company.com"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:border-sd-blue focus:ring-2 focus:ring-sd-blue/20 outline-none transition-all placeholder:text-slate-400"
              />
            </Field>

            <Field label="Company / Organisation (Optional)">
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Acme Tech Private Ltd"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:border-sd-blue focus:ring-2 focus:ring-sd-blue/20 outline-none transition-all placeholder:text-slate-400"
              />
            </Field>
          </div>

          {/* Row 3: Service Selection */}
          <Field label="Primary Service Required" required>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm bg-white focus:border-sd-blue focus:ring-2 focus:ring-sd-blue/20 outline-none transition-all font-medium text-slate-800"
            >
              {SERVICES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </Field>

          {/* Row 4: Workforce Scale */}
          <Field label="Workforce Scale / Current Headcount">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
              {HEADCOUNT_RANGES.map((h) => (
                <button
                  type="button"
                  key={h}
                  onClick={() => setHeadcount(h)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-semibold text-center border transition-all cursor-pointer ${
                    headcount === h
                      ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {h}
                </button>
              ))}
            </div>
          </Field>

          {/* Row 5: Optional Requirements Note */}
          <Field label="Brief Scope / Requirements (Optional)">
            <textarea
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g. Looking to onboard 150 employees on multi-state payroll & PF audit by next month..."
              className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:border-sd-blue focus:ring-2 focus:ring-sd-blue/20 outline-none transition-all resize-none placeholder:text-slate-400"
            />
          </Field>

          {/* Statutory DPDP Act Consent Checkbox */}
          <div className="pt-1">
            <label className="flex items-start gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={dpdpConsent}
                onChange={(e) => setDpdpConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-sd-blue focus:ring-sd-blue cursor-pointer"
              />
              <span className="text-[11px] text-slate-500 leading-snug">
                I hereby grant consent under Section 8(2) of the <strong>Digital Personal Data Protection (DPDP) Act 2023</strong> for Service Dial to process my contact information to address this inquiry.
              </span>
            </label>
            {errors.dpdp && (
              <p className="text-[11px] text-rose-600 font-semibold mt-1">
                {errors.dpdp}
              </p>
            )}
          </div>

          {/* Submit Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all duration-200 cursor-pointer ${channelConfig.btnClass} ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : "hover:-translate-y-0.5 active:scale-98"
              }`}
            >
              {isSubmitting ? (
                <span>Connecting...</span>
              ) : (
                <span>{channelConfig.buttonText}</span>
              )}
            </button>
            <p className="text-center text-[11px] text-slate-400 mt-2">
              🔒 Bilateral NDA Protected • 100% Confidential • Zero Spam Guarantee
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
