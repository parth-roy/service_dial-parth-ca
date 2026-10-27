"use client";

import { useState, useEffect } from "react";
import { submitContactLead, ContactSubmissionState } from "./actions";

const services = [
  "Staffing & Recruitment",
  "HRMS & Payroll Management",
  "Statutory Labour Compliance (EPFO, ESIC, WB PT & LWF)",
  "Finance & Audit",
  "Intellectual Property & Trademark Advisory",
  "Full Managed Services Suite",
];

const timelineOptions = [
  { value: "urgent_72h", label: "Urgent: Need Shortlists/Remediation in 24–72 Hours" },
  { value: "15_30_days", label: "Standard: Within 15–30 Days" },
  { value: "strategic_planning", label: "Strategic Planning: Next Quarter" },
];

const headcountOptions = [
  { value: "1_10", label: "1 – 10 Positions / Employees" },
  { value: "10_50", label: "10 – 50 Positions / Employees" },
  { value: "50_200", label: "50 – 200 Positions / Employees" },
  { value: "200_1000", label: "200 – 1,000 Employees (Mid-Market)" },
  { value: "1000_plus", label: "1,000+ Employees (Enterprise Scale)" },
];

export default function ContactForm() {
  const [result, setResult] = useState<ContactSubmissionState | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [dpdpChecked, setDpdpChecked] = useState(true);

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
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
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sd-pink/30 bg-sd-pink/5 px-3 py-1 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-sd-pink animate-pulse" />
              <span className="text-xs font-semibold text-sd-pink">
                Confidential Enterprise Sourcing · Bilateral NDA Protected
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-sd-text mb-5">
              Let's talk business.
            </h1>
            <p className="text-sd-muted text-base leading-relaxed mb-8">
              Every inquiry is governed by institutional non-disclosure standards and statutory DPDP Act compliance from the moment of contact. Share your mandate details and an executive consultant will respond within 24 hours.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  label: "Executive Direct Helpline",
                  value: "+91 93304 90777",
                  href: "tel:+919330490777",
                },
                {
                  label: "Confidential Enterprise Email",
                  value: "connect@servicedialtm.com",
                  href: "mailto:connect@servicedialtm.com",
                },
                {
                  label: "Inquiry Response SLA",
                  value: "Guaranteed response within 24 hours",
                  href: undefined,
                },
                {
                  label: "Active Mandate Turnaround",
                  value: "24–72 hours average sourcing SLA",
                  href: undefined,
                },
                {
                  label: "Registered Corporate Entity",
                  value: "Service Dial Talent Management Pvt Ltd (CIN: U74999WB2016PTC216954)",
                  href: undefined,
                },
                {
                  label: "Corporate Headquarters",
                  value: "58 (30), S.N. Banerjee Road, Barrackpore, Kolkata 700120",
                  href: undefined,
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-sd-pink mt-2 shrink-0" />
                  <div>
                    <p className="text-xs text-sd-muted font-medium">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-semibold text-sd-text hover:text-sd-pink transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-sd-text">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-sd-border bg-sd-bg-2 p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-sd-text">
                <span className="text-emerald-500">🔒</span>
                <span>DPDP Act 2023 & Bilateral NDA Guarantee</span>
              </div>
              <p className="text-xs text-sd-muted leading-relaxed">
                Service Dial strictly processes enterprise submissions under the Digital Personal Data Protection (DPDP) Act, 2023. We maintain zero-third-party disclosure policies for compensation records, audit findings, and client workforce configurations.
              </p>
            </div>
          </div>

          {/* Right form */}
          <div className="rounded-lg border border-sd-border bg-white p-6 lg:p-8 shadow-sm">
            {result?.success ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                  <svg
                    className="h-6 w-6 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-sd-text mb-2">
                  Mandate Received Securely
                </h2>
                <p className="text-xs text-sd-muted mb-4 max-w-md mx-auto">
                  {result.message}
                </p>

                <div className="p-4 rounded-lg bg-sd-bg-2 border border-sd-border max-w-xs mx-auto text-left mb-6 text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sd-muted">Tracking ID:</span>
                    <span className="font-mono font-bold text-sd-text">{result.leadId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sd-muted">SLA Priority:</span>
                    <span className="font-bold text-sd-pink">
                      {result.priorityLevel === "URGENT_SLA_72H"
                        ? "Urgent (24–72h SLA)"
                        : "Standard Enterprise"}
                    </span>
                  </div>
                  <div className="flex justify-between text-[11px] text-emerald-600">
                    <span>DPDP Consent:</span>
                    <span className="font-semibold">Recorded & Verified</span>
                  </div>
                </div>

                <button
                  onClick={() => setResult(null)}
                  className="px-5 py-2 text-xs font-semibold text-sd-muted hover:text-sd-text border border-sd-border rounded hover:bg-sd-bg-2 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-2">
                  <h2 className="text-xl font-bold text-sd-text">
                    Raise an Enterprise Mandate
                  </h2>
                  <p className="text-xs text-sd-muted mt-0.5">
                    Share your requirements to initiate an executive consultation and compliance review.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded bg-red-50 border border-red-200 text-xs text-red-600">
                    {errorMessage}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-sd-text mb-1">
                      Full Name <span className="text-sd-pink">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="e.g. Vikram Mehta"
                      className="w-full rounded border border-sd-border bg-sd-bg-2 px-3 py-2 text-xs text-sd-text placeholder-sd-muted-2 focus:border-sd-pink/60 focus:outline-none focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-sd-text mb-1">
                      Company Name <span className="text-sd-pink">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="company"
                      placeholder="e.g. Acme Technologies"
                      className="w-full rounded border border-sd-border bg-sd-bg-2 px-3 py-2 text-xs text-sd-text placeholder-sd-muted-2 focus:border-sd-pink/60 focus:outline-none focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-sd-text mb-1">
                      Business Email <span className="text-sd-pink">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="vikram@acme.com"
                      className="w-full rounded border border-sd-border bg-sd-bg-2 px-3 py-2 text-xs text-sd-text placeholder-sd-muted-2 focus:border-sd-pink/60 focus:outline-none focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-sd-text mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      className="w-full rounded border border-sd-border bg-sd-bg-2 px-3 py-2 text-xs text-sd-text placeholder-sd-muted-2 focus:border-sd-pink/60 focus:outline-none focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-sd-text mb-1">
                    Primary Service Pillar <span className="text-sd-pink">*</span>
                  </label>
                  <select
                    required
                    name="service"
                    defaultValue=""
                    className="w-full rounded border border-sd-border bg-sd-bg-2 px-3 py-2 text-xs text-sd-text focus:border-sd-pink/60 focus:outline-none focus:bg-white transition-colors"
                  >
                    <option value="" disabled>
                      Select an enterprise service
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-sd-text mb-1">
                      Target Timeline SLA
                    </label>
                    <select
                      name="timeline"
                      defaultValue="urgent_72h"
                      className="w-full rounded border border-sd-border bg-sd-bg-2 px-3 py-2 text-xs text-sd-text focus:border-sd-pink/60 focus:outline-none focus:bg-white transition-colors"
                    >
                      {timelineOptions.map((t) => (
                        <option key={t.value} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-sd-text mb-1">
                      Headcount / Scale
                    </label>
                    <select
                      name="headcount"
                      defaultValue="10_50"
                      className="w-full rounded border border-sd-border bg-sd-bg-2 px-3 py-2 text-xs text-sd-text focus:border-sd-pink/60 focus:outline-none focus:bg-white transition-colors"
                    >
                      {headcountOptions.map((h) => (
                        <option key={h.value} value={h.value}>
                          {h.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-sd-text mb-1">
                    Mandate Details & Context <span className="text-sd-pink">*</span>
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={3}
                    placeholder="Describe specific roles, tech stacks, locations, employee count for payroll, or current compliance challenges..."
                    className="w-full rounded border border-sd-border bg-sd-bg-2 px-3 py-2 text-xs text-sd-text placeholder-sd-muted-2 focus:border-sd-pink/60 focus:outline-none focus:bg-white transition-colors resize-none"
                  />
                </div>

                {/* DPDP Act 2023 Explicit Consent Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      required
                      checked={dpdpChecked}
                      onChange={(e) => setDpdpChecked(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded border-sd-border text-sd-pink focus:ring-sd-pink shrink-0 cursor-pointer"
                    />
                    <span className="text-[11px] text-sd-muted leading-tight">
                      I consent under <strong className="text-sd-text">Section 8(2) of the Digital Personal Data Protection (DPDP) Act, 2023</strong> to Service Dial collecting and processing this enterprise business contact data solely for providing advisory consultations, fee estimates, and managed staffing/payroll services. I understand consent can be withdrawn at any time.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading || !dpdpChecked}
                  className="w-full rounded px-6 py-3 text-xs font-semibold bg-sd-pink text-white hover:bg-sd-pink-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-xs"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Verifying & Submitting...
                    </>
                  ) : (
                    "Submit Mandate Under Bilateral NDA →"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
