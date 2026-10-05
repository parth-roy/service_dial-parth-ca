"use client";

import { useState } from "react";

const services = [
  "Staffing & Recruitment",
  "HRMS & Payroll Management",
  "Finance & Audit",
  "Compliance Services",
  "Multiple Services",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Replace with actual Server Action / API route call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sd-pink mb-3">
              Contact
            </p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-sd-text mb-5">
              Let's talk.
            </h1>
            <p className="text-sd-muted text-base leading-relaxed mb-8">
              Every inquiry is covered by a strict NDA from the moment of first
              contact. Share your requirement and we will respond within 24 hours.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  label: "Email",
                  value: "info@servicedial.in",
                  href: "mailto:info@servicedial.in",
                },
                {
                  label: "Response Time",
                  value: "Within 24 hours",
                  href: undefined,
                },
                {
                  label: "Sourcing Update",
                  value: "24–72 hours for active mandates",
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
                        className="text-sm text-sd-text hover:text-sd-pink transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-sd-text">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-sd-border bg-sd-bg-2 p-5">
              <p className="text-xs font-semibold text-sd-pink mb-2">
                Confidentiality Guarantee
              </p>
              <p className="text-xs text-sd-muted leading-relaxed">
                All inquiries are treated as strictly confidential. Your
                information is never shared with third parties and is protected
                under NDA from the moment of first contact.
              </p>
            </div>
          </div>

          {/* Right form */}
          <div className="rounded-lg border border-sd-border bg-white p-6 lg:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-sd-pink/10 border border-sd-pink/20 mb-4">
                  <svg
                    className="h-5 w-5 text-sd-pink"
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
                <h2 className="text-lg font-bold text-sd-text mb-2">
                  Message received.
                </h2>
                <p className="text-sm text-sd-muted">
                  We will review your requirement and respond within 24 hours.
                  All information is treated with strict confidentiality.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-4">
                  <h2 className="text-lg font-bold text-sd-text mb-1">
                    Send us a message
                  </h2>
                  <p className="text-xs text-sd-muted">
                    All fields are confidential and covered under NDA.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-sd-text-2 mb-1.5">
                      Full Name <span className="text-sd-pink">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Rajesh Kumar"
                      className="w-full rounded border border-sd-border bg-sd-bg-2 px-3 py-2.5 text-sm text-sd-text placeholder-sd-muted-2 focus:border-sd-pink/60 focus:outline-none focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-sd-text-2 mb-1.5">
                      Company <span className="text-sd-pink">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="company"
                      placeholder="Acme Corp"
                      className="w-full rounded border border-sd-border bg-sd-bg-2 px-3 py-2.5 text-sm text-sd-text placeholder-sd-muted-2 focus:border-sd-pink/60 focus:outline-none focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-sd-text-2 mb-1.5">
                      Work Email <span className="text-sd-pink">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      className="w-full rounded border border-sd-border bg-sd-bg-2 px-3 py-2.5 text-sm text-sd-text placeholder-sd-muted-2 focus:border-sd-pink/60 focus:outline-none focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-sd-text-2 mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      className="w-full rounded border border-sd-border bg-sd-bg-2 px-3 py-2.5 text-sm text-sd-text placeholder-sd-muted-2 focus:border-sd-pink/60 focus:outline-none focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-sd-text-2 mb-1.5">
                    Service Required <span className="text-sd-pink">*</span>
                  </label>
                  <select
                    required
                    name="service"
                    defaultValue=""
                    className="w-full rounded border border-sd-border bg-sd-bg-2 px-3 py-2.5 text-sm text-sd-text focus:border-sd-pink/60 focus:outline-none focus:bg-white transition-colors"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-sd-text-2 mb-1.5">
                    Tell us about your requirement{" "}
                    <span className="text-sd-pink">*</span>
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Briefly describe your mandate, headcount, timeline, or any relevant context..."
                    className="w-full rounded border border-sd-border bg-sd-bg-2 px-3 py-2.5 text-sm text-sd-text placeholder-sd-muted-2 focus:border-sd-pink/60 focus:outline-none focus:bg-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded px-6 py-3 text-sm font-semibold bg-sd-pink text-white hover:bg-sd-pink-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                      Sending...
                    </>
                  ) : (
                    "Send Message"
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
