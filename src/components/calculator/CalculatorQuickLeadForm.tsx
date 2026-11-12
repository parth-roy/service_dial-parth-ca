"use client";

import React, { useState } from "react";
import { trackEvent } from "@/lib/analytics";

interface CalculatorQuickLeadFormProps {
  /** Target service name stored on the captured lead record. */
  service: string;
  /** Heading displayed above the 2-field capture inputs. */
  heading: string;
  /** Button CTA label shown to the prospect. */
  ctaLabel: string;
  /** Pre-computed calculator breakdown included in the lead payload. */
  contextSummary: string;
  /** Analytics channel label for event attribution. */
  analyticsChannel: string;
  /** Optional visual surface variant matching light or dark result cards. */
  variant?: "dark" | "light";
  /** Optional analytics payload properties. */
  analyticsMeta?: Record<string, string | number | boolean | undefined>;
}

/**
 * Reusable 2-field instant callback and report capture form for compliance calculators
 * and commercial city pages. Dispatches leads to `/api/lead-capture` and tracks conversion events.
 */
export default function CalculatorQuickLeadForm({
  service,
  heading,
  ctaLabel,
  contextSummary,
  analyticsChannel,
  variant = "dark",
  analyticsMeta,
}: CalculatorQuickLeadFormProps) {
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message?: string;
    leadId?: string;
  }>({ type: "idle" });

  const isDark = variant === "dark";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = contact.trim();
    if (!trimmed) {
      setStatus({ type: "error", message: "Enter your phone number or work email." });
      return;
    }

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    const digits = trimmed.replace(/\D/g, "");
    if (!isEmail && digits.length < 10) {
      setStatus({ type: "error", message: "Enter a valid 10-digit phone or work email." });
      return;
    }

    setSubmitting(true);
    setStatus({ type: "idle" });

    try {
      const res = await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: company.trim() || "Enterprise Inquiry",
          company: company.trim(),
          phone: isEmail ? "" : trimmed,
          email: isEmail ? trimmed : "",
          channel: "Direct Form",
          service,
          message: contextSummary,
          sourceUrl: typeof window !== "undefined" ? window.location.href : "https://servicedialtm.com",
          dpdpConsent: true,
        }),
      });
      const data = await res.json();
      trackEvent("lead_submitted", {
        channel: analyticsChannel,
        service,
        ...analyticsMeta,
      });
      setStatus({
        type: "success",
        leadId: data?.leadId || "CONFIRMED",
        message: "Request received. Our compliance advisor will reach out within 24 hours.",
      });
      setContact("");
    } catch {
      setStatus({
        type: "error",
        message: "Submission failed. Please call +91 87778 64949 or use WhatsApp.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (status.type === "success") {
    return (
      <div
        className={`p-3.5 rounded-xl text-xs border ${
          isDark
            ? "bg-emerald-500/15 border-emerald-400/30 text-emerald-200"
            : "bg-emerald-50 border-emerald-200 text-emerald-900"
        }`}
      >
        <p className="font-bold">✓ Request Received ({status.leadId})</p>
        <p className="mt-1 opacity-90">{status.message}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-2.5 rounded-xl p-3.5 border ${
        isDark ? "bg-white/5 border-white/15" : "bg-white border-sd-border"
      }`}
    >
      <p
        className={`text-[11px] font-bold uppercase tracking-wider ${
          isDark ? "text-slate-200" : "text-sd-text"
        }`}
      >
        {heading}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company / Name (optional)"
          aria-label="Company or Name"
          className={`w-full px-3 py-2 text-xs rounded-lg border focus:outline-none focus:border-sd-pink ${
            isDark
              ? "bg-slate-900/70 border-white/15 text-white placeholder:text-slate-400"
              : "bg-sd-bg border-sd-border text-sd-text"
          }`}
        />
        <input
          type="text"
          required
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Phone or Work Email *"
          aria-label="Phone number or work email"
          className={`w-full px-3 py-2 text-xs rounded-lg border focus:outline-none focus:border-sd-pink ${
            isDark
              ? "bg-slate-900/70 border-white/15 text-white placeholder:text-slate-400"
              : "bg-sd-bg border-sd-border text-sd-text"
          }`}
        />
      </div>
      {status.type === "error" && (
        <p className={`text-[11px] font-semibold ${isDark ? "text-rose-300" : "text-rose-600"}`}>
          {status.message}
        </p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="w-full py-2.5 px-4 rounded-lg bg-sd-pink hover:bg-sd-pink-dark text-white text-xs font-bold transition-colors cursor-pointer disabled:opacity-60 shadow-md"
      >
        {submitting ? "Sending Request..." : `${ctaLabel} →`}
      </button>
    </form>
  );
}
