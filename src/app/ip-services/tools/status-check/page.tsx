"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppCTA from "@/components/ip/WhatsAppCTA";

const STATUS_STAGES = [
  {
    status: "Formalities Chk Pass",
    tone: "info",
    meaning: "Basic documentation, user affidavit, and fee payment verified by the registry.",
    action: "Application moves to substantive examination queue.",
  },
  {
    status: "Marked for Exam",
    tone: "info",
    meaning: "Examiner of Trade Marks is actively reviewing classification and conflicting marks.",
    action: "Await Examination Report release.",
  },
  {
    status: "Objected",
    tone: "urgent",
    meaning: "Examiner raised objections under Section 9 (distinctiveness) or Section 11 (similarity).",
    action: "⚠️ Strict 30-day statutory deadline to file written legal rebuttal. Connect with our team immediately.",
  },
  {
    status: "Accepted & Advertised",
    tone: "positive",
    meaning: "Mark accepted by registry and published in the official Trade Marks Journal.",
    action: "Statutory 4-month public opposition window opens.",
  },
  {
    status: "Opposed",
    tone: "urgent",
    meaning: "Third party filed Form TM-O opposing your registration.",
    action: "⚠️ Formal counter-statement (TM-O) must be filed within 2 months.",
  },
  {
    status: "Registered",
    tone: "positive",
    meaning: "Registration Certificate issued with statutory ® trademark protection for 10 years.",
    action: "Valid for 10 years. File Form TM-R before expiration.",
  },
];

export default function StatusCheckPage() {
  const [appNumber, setAppNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const officialEstatusUrl = "https://tmrsearch.ipindia.gov.in/estatus/";

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!appNumber || appNumber.length < 5) {
      setError("Please enter a valid 5 to 8 digit application number.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch(`/api/ip-tools/status-check?applicationNumber=${encodeURIComponent(appNumber)}`);
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Lookup failed.");
      } else {
        setResult(data.data);
      }
    } catch (err: any) {
      setError("Network error connecting to registry gateway.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-sd-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "IP Services", href: "/ip-services" },
            { label: "Status Router", href: "/ip-services/tools/status-check" },
          ]}
        />

        <div className="mt-4 mb-8">
          <div className="inline-block px-3 py-1 bg-sd-pink/10 text-sd-pink text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            Application Docketing & Status Router
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-sd-text">
            Track Trademark Application Status & Registry Proceedings
          </h1>
          <p className="mt-2 text-sm sm:text-base text-sd-muted max-w-3xl">
            Check official IP India e-Register records, understand examination findings, and access immediate legal defense for Section 9/11 objections.
          </p>
        </div>

        {/* Search & Fallback Card */}
        <div className="bg-white border border-sd-border rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold text-sd-text">
              Enter Your TM Application Number
            </h2>
            <p className="mt-1 text-xs text-sd-muted">
              Refer to the top-right corner of your Form TM-A official acknowledgment receipt. (Try sample numbers: 5849201, 4912033, or 6021944).
            </p>

            <form onSubmit={handleLookup} className="mt-6 flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="e.g. 5849201"
                value={appNumber}
                onChange={(e) => {
                  setAppNumber(e.target.value.replace(/\D/g, ""));
                  setError(null);
                }}
                maxLength={8}
                className="flex-1 px-4 py-3 bg-sd-bg border border-sd-border rounded-xl text-sm font-mono text-sd-text focus:outline-none focus:ring-2 focus:ring-sd-pink"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-sd-pink hover:bg-sd-pink/90 disabled:opacity-60 text-white font-semibold text-sm rounded-xl transition-colors cursor-pointer"
              >
                {loading ? "Checking Status..." : "Check Status"}
              </button>
              <a
                href={officialEstatusUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-sd-bg-2 hover:bg-sd-border/40 text-sd-text font-medium text-sm rounded-xl border border-sd-border transition-colors text-center inline-flex items-center justify-center gap-1.5"
              >
                <span>Govt Portal</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </form>

            {error && (
              <p className="mt-3 text-xs text-red-600 font-medium">{error}</p>
            )}

            {/* Live Result Findings Card */}
            {result && (
              <div className="mt-6 p-6 rounded-xl border border-sd-border bg-sd-bg animate-fadeIn">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-sd-border">
                  <div>
                    <span className="text-xs text-sd-muted block">Application #{result.applicationNumber}</span>
                    <h3 className="text-lg font-bold text-sd-text">{result.markName || "TRADEMARK APPLICANT"}</h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    result.status === "Objected" || result.status === "Opposed"
                      ? "bg-red-100 text-red-800"
                      : result.status === "Registered"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-blue-100 text-blue-800"
                  }`}>
                    {result.status}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-sd-muted block">Class</span>
                    <strong className="text-sd-text font-mono">Class {result.tmClass || "35"}</strong>
                  </div>
                  <div>
                    <span className="text-sd-muted block">Jurisdiction</span>
                    <strong className="text-sd-text">{result.jurisdiction || "Head Office Mumbai"}</strong>
                  </div>
                  <div>
                    <span className="text-sd-muted block">Objection Grounds</span>
                    <strong className="text-sd-text">{result.objectionSection || "None"}</strong>
                  </div>
                  <div>
                    <span className="text-sd-muted block">Statutory Deadline</span>
                    <strong className="text-sd-text text-red-600">
                      {result.nextActionDeadline ? new Date(result.nextActionDeadline).toLocaleDateString("en-IN") : "Standard Queue"}
                    </strong>
                  </div>
                </div>

                {(result.status === "Objected" || result.status === "Opposed") && (
                  <div className="mt-4 pt-4 border-t border-sd-border flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs text-red-700 font-medium">
                      ⚠️ Examination report requires a legal rebuttal within the 30-day statutory window.
                    </span>
                    <WhatsAppCTA
                      intentTitle={`${result.status} Rebuttal - Mark ${result.markName}`}
                      buttonText="Draft Legal Reply with Counsel"
                      className="w-full sm:w-auto text-xs py-2 px-4"
                    />
                  </div>
                )}
              </div>
            )}

            <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
              <strong>Official Registry Access:</strong> IP India’s public e-Register requires manual verification to prevent automated abuse. Clicking above directs you safely to the official government portal (`tmrsearch.ipindia.gov.in/estatus`).
            </div>
          </div>
        </div>

        {/* Action Card for Objected / Opposed Status */}
        <div className="mt-8 bg-gradient-to-r from-red-500/10 via-amber-500/10 to-transparent border border-red-200 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="px-2.5 py-1 rounded bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider">
                Statutory Action Required
              </span>
              <h3 className="text-xl font-bold text-sd-text mt-2">
                Is your Trademark Status showing “Objected” or “Opposed”?
              </h3>
              <p className="text-sm text-sd-muted mt-1.5 max-w-2xl leading-relaxed">
                Failure to file a structured legal reply to an Examination Report within <strong>30 days</strong> results in formal trademark abandonment under Rule 33. Connect with our senior IP counsel to draft and file your formal rebuttal.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <WhatsAppCTA
                intentTitle="Objection Defense"
                buttonText="Consult Legal Counsel on WhatsApp"
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>

        {/* Registry Stages Explainer Grid */}
        <section className="mt-12 bg-white border border-sd-border rounded-2xl p-6 sm:p-10 mb-12">
          <h2 className="text-2xl font-bold text-sd-text">
            Official Trademark Application Status Stages & Meanings
          </h2>
          <p className="mt-2 text-sm text-sd-muted">
            Track your filing through every milestone of the Controller General of Patents, Designs and Trade Marks (CGPDTM) workflow:
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STATUS_STAGES.map((s) => (
              <div
                key={s.status}
                className={`p-5 rounded-xl border flex flex-col justify-between ${
                  s.tone === "urgent"
                    ? "bg-red-50/40 border-red-200"
                    : s.tone === "positive"
                    ? "bg-emerald-50/40 border-emerald-200"
                    : "bg-sd-bg border-sd-border"
                }`}
              >
                <div>
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-bold ${
                      s.tone === "urgent"
                        ? "bg-red-100 text-red-800"
                        : s.tone === "positive"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-sd-border text-sd-text"
                    }`}
                  >
                    {s.status}
                  </span>
                  <p className="text-xs text-sd-text mt-2.5 font-medium leading-relaxed">
                    {s.meaning}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-sd-border/60 text-[11px] text-sd-muted">
                  {s.action}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
