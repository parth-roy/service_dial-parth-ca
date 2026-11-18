"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { submitContactLead, ContactSubmissionState } from "./actions";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  "Staffing & Recruitment (Contract & Flexi)",
  "HRMS & Managed Payroll Outsourcing",
  "Statutory Labour Compliance (EPFO, ESIC, Multi-State PT & Licensing)",
  "Finance & Virtual CMA Audit (CARO 2020 / Fixed Assets)",
  "Intellectual Property & Trademark Advisory",
  "Full-Suite Enterprise Managed Services",
];

const timelineOptions = [
  { value: "urgent_72h", label: "Urgent: 24–72h SLA", sub: "Immediate candidate shortlists or urgent compliance fix" },
  { value: "15_30_days", label: "Standard: 15–30 Days", sub: "Standard procurement cycle or scheduled onboarding" },
  { value: "strategic_planning", label: "Strategic Planning", sub: "Quarterly alignment, ERP migration, or statutory review" },
];

const headcountOptions = [
  { value: "1_10", label: "1 – 10" },
  { value: "10_50", label: "10 – 50" },
  { value: "50_200", label: "50 – 200" },
  { value: "200_1000", label: "200 – 1K" },
  { value: "1000_plus", label: "1,000+" },
];

export default function ContactForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedService, setSelectedService] = useState(services[0]);
  const [operatingCity, setOperatingCity] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<ContactSubmissionState | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [dpdpChecked, setDpdpChecked] = useState(true);
  const [selectedTimeline, setSelectedTimeline] = useState("urgent_72h");
  const [selectedHeadcount, setSelectedHeadcount] = useState("10_50");

  // Tracking UTM attributes
  const [trackingData, setTrackingData] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    referrer: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setTrackingData({
        utm_source: params.get("utm_source") || "",
        utm_medium: params.get("utm_medium") || "",
        utm_campaign: params.get("utm_campaign") || "",
        utm_term: params.get("utm_term") || "",
        utm_content: params.get("utm_content") || "",
        referrer: document.referrer || "",
      });
    }
  }, []);

  function handleContinueToStep2(e: React.FormEvent) {
    e.preventDefault();
    setErrorMessage(null);
    if (!selectedService) {
      setErrorMessage("Please select a primary practice area to continue.");
      return;
    }
    setStep(2);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const formData = new FormData();
    formData.set("name", name);
    formData.set("company", company);
    formData.set("email", email);
    formData.set("phone", phone);
    formData.set("service", selectedService);
    formData.set("timeline", selectedTimeline);
    formData.set("headcount", selectedHeadcount);
    const finalMessage = message.trim() || `Mandate request for ${selectedService} across ${operatingCity || "primary hubs"} (Headcount: ${selectedHeadcount}, Timeline: ${selectedTimeline}).`;
    formData.set("message", finalMessage);
    formData.set("dpdp_consent", dpdpChecked ? "true" : "false");
    formData.set("terms_version", "DPDP-2023-V1.0");
    formData.set("utm_source", trackingData.utm_source);
    formData.set("utm_medium", trackingData.utm_medium);
    formData.set("utm_campaign", trackingData.utm_campaign);
    formData.set("utm_term", trackingData.utm_term);
    formData.set("utm_content", trackingData.utm_content);
    formData.set("referrer", trackingData.referrer);

    const res = await submitContactLead(formData);

    setLoading(false);
    if (res.success) {
      setResult(res);
    } else {
      setErrorMessage(res.error || "Submission failed. Please try again.");
    }
  }

  return (
    <div className="relative min-h-screen bg-[#F8F9FA] text-slate-900 overflow-hidden">
      {/* Subtle Top Ambient Brand Light Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-[#00cfdc]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[400px] bg-[#b80f68]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Hero Header */}
      <div className="relative pt-8 pb-4 border-b border-slate-200/70 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-slate-500">
                <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
                <span>/</span>
                <span className="text-slate-900 font-medium">Confidential Contact Desk</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
                <span className="font-mono text-[#0284c7]">CIN: U74999WB2016PTC216954</span>
                <span className="text-slate-300">•</span>
                <span>Bilateral NDA Governed</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Main Intake Stage */}
      <div className="relative py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Executive Mandate Dossier (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <ScrollReveal direction="left" distance={30}>
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#b80f68] shrink-0" />
                    <span className="font-outfit text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.24em] text-slate-900">
                      EXECUTIVE MANDATE DESK
                    </span>
                    <span className="h-px flex-1 bg-slate-200" />
                  </div>

                  <h1 className="font-outfit text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.08] mb-5">
                    Let&apos;s structure your next{" "}
                    <span className="bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] bg-clip-text text-transparent">
                      enterprise mandate.
                    </span>
                  </h1>

                  <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
                    Every inquiry submitted through this portal is safeguarded by strict institutional non-disclosure standards and statutory DPDP Act compliance from the moment of dispatch. An executive practice leader reviews each submission personally.
                  </p>
                </div>
              </ScrollReveal>

              {/* Service Level Agreement Telemetry Dock */}
              <ScrollReveal direction="left" distance={30} delay={150}>
                <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm space-y-5">
                  <div className="text-xs uppercase font-mono tracking-wider text-[#0284c7] font-bold">
                    Operational Telemetry &amp; SLAs
                  </div>

                  <div className="grid grid-cols-2 gap-3.5">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                      <div className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">24–72h</div>
                      <div className="text-xs text-slate-500 mt-0.5">Average Sourcing SLA</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                      <div className="font-outfit text-2xl sm:text-3xl font-black text-[#b80f68]">&lt;24h</div>
                      <div className="text-xs text-slate-500 mt-0.5">Inquiry Response SLA</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                      <div className="font-outfit text-2xl sm:text-3xl font-black text-[#0284c7]">7 : 10</div>
                      <div className="text-xs text-slate-500 mt-0.5">Interview-to-Offer Ratio</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                      <div className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">100%</div>
                      <div className="text-xs text-slate-500 mt-0.5">Statutory Indemnity</div>
                    </div>
                  </div>

                  {/* Corporate Telemetry Ledger */}
                  <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-slate-500 font-medium">Corporate Entity:</span>
                      <span className="font-semibold text-slate-900 text-right">Service Dial Talent Management Pvt Ltd</span>
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-slate-500 font-medium">Registered Office:</span>
                      <span className="text-slate-800 text-right">Barrackpore, Kolkata 700120</span>
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-slate-500 font-medium">Direct Mandate Desk:</span>
                      <a href="mailto:info@servicedialtm.com" className="text-[#0284c7] font-bold hover:underline font-mono">info@servicedialtm.com</a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Statutory Privacy & NDA Guarantee Plaque */}
              <ScrollReveal direction="left" distance={30} delay={250}>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-xs font-bold text-slate-900">
                    <span className="text-[#0284c7]">🛡️</span>
                    <span>DPDP Act 2023 &amp; Bilateral NDA Security</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 8(2) of the DPDP Act 2023, corporate compensation records, candidate profiles, and enterprise compliance logs are encrypted in transit and at rest. We never share, broker, or market third-party data.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: High-Polish Interactive Intake Form (7 cols) */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="right" distance={30} delay={100}>
                <div className="relative rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-10 shadow-sm overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7]" />

                  {result?.success ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 mb-5">
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>

                      <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900 mb-2">
                        Enterprise Mandate Recorded
                      </h2>
                      <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-8">
                        {result.message || "Your inquiry has been logged under bilateral NDA protection. An executive consultant will establish contact within our statutory SLA window."}
                      </p>

                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-left mb-8 space-y-2.5 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500 font-medium">Mandate Tracking ID:</span>
                          <span className="font-mono font-bold text-[#0284c7]">{result.leadId}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500 font-medium">Priority Level:</span>
                          <span className="font-bold text-[#b80f68]">
                            {result.priorityLevel === "URGENT_SLA_72H" ? "Urgent (24–72h Sourcing SLA)" : "Standard Enterprise Review"}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                          <span>Statutory DPDP Consent:</span>
                          <span className="font-semibold text-emerald-600">Recorded &amp; Timestamped</span>
                        </div>
                      </div>

                      <button
                        onClick={() => setResult(null)}
                        className="px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-all"
                      >
                        ← Submit Another Mandate
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={step === 1 ? handleContinueToStep2 : handleSubmit} className="space-y-5">
                      {/* 2-Step Progressive Header & Progress Bar */}
                      <div>
                        <div className="flex items-center justify-between text-xs mb-2">
                          <span className="font-mono font-bold uppercase tracking-wider text-[#b80f68]">
                            {step === 1 ? "Step 1 of 2: Mandate Scope & Scale" : "Step 2 of 2: Authorized Executive Verification"}
                          </span>
                          <span className="font-mono text-slate-400 font-semibold">
                            {step === 1 ? "50% Completed" : "100% Final Review"}
                          </span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden mb-4">
                          <div
                            className="bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] h-1.5 rounded-full transition-all duration-300"
                            style={{ width: step === 1 ? "50%" : "100%" }}
                          />
                        </div>

                        <h2 className="font-outfit text-2xl font-black text-slate-900">
                          {step === 1 ? "Select Your Corporate Requirements" : "Authorize Mandate Dispatch"}
                        </h2>
                        <p className="text-xs text-slate-600 mt-1">
                          {step === 1
                            ? "Configure your operational service scope, estimated headcount, and delivery turnaround."
                            : "Enter your verified business contact details to establish direct executive consultation under NDA."}
                        </p>
                      </div>

                      {errorMessage && (
                        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600">
                          {errorMessage}
                        </div>
                      )}

                      {/* ── STEP 1: SCOPE, SCALE & TIMELINE ── */}
                      {step === 1 && (
                        <div className="space-y-5">
                          {/* Primary Practice Area Chips */}
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-2">
                              Primary Practice Area / Discipline <span className="text-[#b80f68]">*</span>
                            </label>
                            <div className="grid sm:grid-cols-2 gap-2">
                              {services.map((s) => {
                                const isSelected = selectedService === s;
                                return (
                                  <button
                                    type="button"
                                    key={s}
                                    onClick={() => setSelectedService(s)}
                                    className={`text-left p-3 rounded-xl border text-xs font-medium transition-all ${
                                      isSelected
                                        ? "border-[#b80f68] bg-[#b80f68]/10 text-slate-900 font-bold shadow-xs"
                                        : "border-slate-200 bg-slate-50/60 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                                    }`}
                                  >
                                    <div className="flex items-center gap-2">
                                      <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-[#b80f68]" : "bg-slate-300"}`} />
                                      <span className="truncate">{s}</span>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {/* Headcount / Scale Selector */}
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-2">
                              Workforce Scale / Positions Needed
                            </label>
                            <div className="grid grid-cols-5 gap-2">
                              {headcountOptions.map((h) => {
                                const isSelected = selectedHeadcount === h.value;
                                return (
                                  <button
                                    type="button"
                                    key={h.value}
                                    onClick={() => setSelectedHeadcount(h.value)}
                                    className={`py-2 px-1 text-center rounded-xl border text-xs font-bold transition-all ${
                                      isSelected
                                        ? "border-[#0284c7] bg-[#0284c7]/10 text-[#0284c7] shadow-xs"
                                        : "border-slate-200 bg-slate-50/60 text-slate-600 hover:border-slate-300 hover:bg-slate-100"
                                    }`}
                                  >
                                    {h.label}
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {/* Custom Timeline Selector */}
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-2">
                              Target Deployment Timeline &amp; SLA
                            </label>
                            <div className="grid sm:grid-cols-3 gap-2.5">
                              {timelineOptions.map((t) => {
                                const isSelected = selectedTimeline === t.value;
                                return (
                                  <button
                                    type="button"
                                    key={t.value}
                                    onClick={() => setSelectedTimeline(t.value)}
                                    className={`text-left p-3 rounded-xl border transition-all ${
                                      isSelected
                                        ? "border-[#2e0d82] bg-[#2e0d82]/10 text-slate-900 font-bold shadow-xs"
                                        : "border-slate-200 bg-slate-50/60 text-slate-600 hover:border-slate-300 hover:bg-slate-100"
                                    }`}
                                  >
                                    <div className="text-xs font-bold leading-tight">{t.label}</div>
                                    <div className="text-[10px] text-slate-500 mt-1 line-clamp-2">{t.sub}</div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {/* Primary City / Operating Hub */}
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                              Primary City or Industrial Hub (Optional)
                            </label>
                            <input
                              type="text"
                              value={operatingCity}
                              onChange={(e) => setOperatingCity(e.target.value)}
                              placeholder="e.g. Bengaluru, Pune, Chakan, Mumbai, Manesar, Kolkata..."
                              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-[#0284c7] focus:bg-white focus:ring-1 focus:ring-[#0284c7]/30 focus:outline-none transition-colors"
                            />
                          </div>

                          {/* Continue to Step 2 Button */}
                          <div className="pt-2">
                            <button
                              type="button"
                              onClick={() => {
                                setErrorMessage(null);
                                setStep(2);
                              }}
                              className="w-full rounded-xl py-3.5 px-6 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                            >
                              <span>Continue to Authorized Contact (Step 2) →</span>
                            </button>
                          </div>
                        </div>
                      )}

                      {/* ── STEP 2: AUTHORIZED CONTACT & SUBMIT ── */}
                      {step === 2 && (
                        <div className="space-y-4">
                          {/* Step 1 Parameter Review Pill */}
                          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                            <div className="truncate mr-2">
                              <span className="font-bold text-slate-900">{selectedService}</span>
                              <span className="text-slate-400 mx-1.5">•</span>
                              <span className="text-slate-600">{headcountOptions.find((h) => h.value === selectedHeadcount)?.label} associates</span>
                              {operatingCity && (
                                <>
                                  <span className="text-slate-400 mx-1.5">•</span>
                                  <span className="text-slate-600">{operatingCity}</span>
                                </>
                              )}
                            </div>
                            <button
                              type="button"
                              onClick={() => setStep(1)}
                              className="text-[#0284c7] font-bold text-xs hover:underline shrink-0"
                            >
                              Edit Scope ✏️
                            </button>
                          </div>

                          {/* Contact Essentials */}
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                Full Name <span className="text-[#b80f68]">*</span>
                              </label>
                              <input
                                required
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="e.g. Vikram Mehta"
                                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-[#0284c7] focus:bg-white focus:ring-1 focus:ring-[#0284c7]/30 focus:outline-none transition-colors"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                Company Name <span className="text-[#b80f68]">*</span>
                              </label>
                              <input
                                required
                                type="text"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                placeholder="e.g. Acme Manufacturing Ltd"
                                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-[#0284c7] focus:bg-white focus:ring-1 focus:ring-[#0284c7]/30 focus:outline-none transition-colors"
                              />
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                Corporate Work Email <span className="text-[#b80f68]">*</span>
                              </label>
                              <input
                                required
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="v.mehta@acme.com"
                                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-[#0284c7] focus:bg-white focus:ring-1 focus:ring-[#0284c7]/30 focus:outline-none transition-colors"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                Direct Contact / WhatsApp
                              </label>
                              <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+91 98765 43210"
                                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-[#0284c7] focus:bg-white focus:ring-1 focus:ring-[#0284c7]/30 focus:outline-none transition-colors"
                              />
                            </div>
                          </div>

                          {/* Mandate Description / Notes */}
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                              Mandate Context / Specific Questions (Optional)
                            </label>
                            <textarea
                              rows={2}
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              placeholder="Describe specific roles, required skill stacks, current payroll headcount, multi-location requirements, or statutory challenges..."
                              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-[#0284c7] focus:bg-white focus:ring-1 focus:ring-[#0284c7]/30 focus:outline-none transition-colors resize-none"
                            />
                          </div>

                          {/* DPDP Act 2023 Explicit Consent Checkbox */}
                          <div className="pt-1">
                            <label className="flex items-start gap-3 cursor-pointer select-none">
                              <input
                                type="checkbox"
                                required
                                checked={dpdpChecked}
                                onChange={(e) => setDpdpChecked(e.target.checked)}
                                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#b80f68] focus:ring-[#b80f68] shrink-0 cursor-pointer"
                              />
                              <span className="text-[11px] text-slate-600 leading-relaxed">
                                I consent under <strong className="text-slate-900">Section 8(2) of the DPDP Act, 2023</strong> to Service Dial processing this business contact data solely for providing advisory consultations and proposals under bilateral NDA.
                              </span>
                            </label>
                          </div>

                          {/* Actions: Back & Submit */}
                          <div className="flex items-center gap-3 pt-2">
                            <button
                              type="button"
                              onClick={() => setStep(1)}
                              className="px-5 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-700 transition-all"
                            >
                              ← Back
                            </button>
                            <button
                              type="submit"
                              disabled={loading || !dpdpChecked}
                              className="flex-1 rounded-xl py-3.5 px-6 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                              {loading ? (
                                <>
                                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                  </svg>
                                  <span>Verifying Mandate...</span>
                                </>
                              ) : (
                                <span>Dispatch Confidential Mandate (NDA Governed) →</span>
                              )}
                            </button>
                          </div>
                        </div>
                      )}
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
