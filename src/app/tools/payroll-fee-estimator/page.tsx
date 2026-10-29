import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PayrollFeeEstimator from "@/components/calculator/PayrollFeeEstimator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payroll & Statutory Compliance Fee Estimator (2026) | Service Dial",
  description:
    "Calculate your outsourced payroll, EPFO, ESIC, and West Bengal Professional Tax compliance fees instantly. Transparent B2B pricing with 100% statutory indemnity.",
  keywords: [
    "payroll fee estimator",
    "payroll outsourcing cost India",
    "payroll pricing per employee per month",
    "statutory compliance fees kolkata",
    "PEPM calculator payroll",
    "west bengal payroll outsourcing cost",
  ],
  alternates: {
    canonical: "https://servicedialtm.com/tools/payroll-fee-estimator",
  },
  openGraph: {
    title: "Payroll & Compliance Fee Estimator | Service Dial",
    description:
      "Interactive pricing calculator for enterprise payroll and statutory compliance outsourcing in India. Zero penalty guarantee.",
    url: "https://servicedialtm.com/tools/payroll-fee-estimator",
    siteName: "Service Dial",
    type: "website",
  },
};

export default function PayrollFeeEstimatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Service Dial Payroll & Compliance Fee Estimator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "9500",
      highPrice: "75000",
    },
    provider: {
      "@type": "Organization",
      name: "Service Dial Talent Management Private Limited",
      url: "https://servicedialtm.com",
    },
    description:
      "Interactive B2B calculator estimating monthly managed fees for payroll outsourcing, EPFO/ESIC compliance, and West Bengal Professional Tax management.",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are there any hidden onboarding or setup fees?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. All data migration, past challan verification, and employee master mapping are structured into the initial onboarding agreement with full transparency.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can Service Dial assume our payroll?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our standard parallel-run onboarding cycle spans 10 to 14 business days. We execute one parallel dry run alongside your legacy system to guarantee 100% mathematical parity before formal handover.",
        },
      },
      {
        "@type": "Question",
        name: "Does this fee cover the new 2026 EPFO & WB PT rules?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All regulatory updates—including the EPFO ₹25,000 wage ceiling and West Bengal October 2026 Professional Tax revisions—are pre-configured without supplementary advisory fees.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="bg-sd-bg-2 border-b border-sd-border py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Tools", href: "/tools" },
              { label: "Payroll Fee Estimator", href: "/tools/payroll-fee-estimator" },
            ]}
          />
        </div>
      </div>

      <main className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-sd-pink block mb-2">
              Interactive B2B Pricing Tool
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-sd-text tracking-tight mb-4">
              Managed Payroll & Statutory Compliance Fee Estimator
            </h1>
            <p className="text-sd-muted text-base sm:text-lg leading-relaxed">
              Transparent, volume-calibrated pricing designed for Indian mid-market enterprises and growing companies. Calculate your estimated monthly retainer, per-employee-per-month (PEPM) metrics, and projected internal operational savings.
            </p>
          </div>

          {/* Interactive Calculator Component */}
          <div className="mb-16">
            <PayrollFeeEstimator />
          </div>

          {/* Detailed Editorial & Methodology Content (Guarantees Non-Thin Page) */}
          <div className="grid lg:grid-cols-3 gap-10 border-t border-sd-border pt-12">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-black text-sd-text mb-3">
                  How Service Dial Formulates Managed Services Pricing
                </h2>
                <p className="text-sd-muted text-sm leading-relaxed mb-4">
                  Unlike traditional accounting consultancies that charge arbitrary hourly billables or obscure percentage markups, Service Dial delivers an institutionally backed, <strong>predictable monthly managed services model</strong>. Our pricing is calibrated across three fundamental dimensions:
                </p>
                <ul className="space-y-3 text-sm text-sd-text">
                  <li className="flex items-start gap-2.5">
                    <span className="text-sd-pink font-bold">1.</span>
                    <span>
                      <strong>Employee Headcount Volume (PEPM Curve):</strong> As your organization expands from 25 to 500+ employees, our automated cloud engine scales sub-linearly, delivering aggressive per-employee cost reductions (ranging from ₹350/PEPM for emerging teams down to ₹100–₹140/PEPM for enterprise workforces).
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-sd-pink font-bold">2.</span>
                    <span>
                      <strong>Jurisdictional & Statutory Complexity:</strong> Managing multi-state operations with divergent Professional Tax schedules (e.g. West Bengal&apos;s revised October 2026 slabs vs. Maharashtra or Karnataka) and disparate Labour Welfare Fund calendars requires dedicated compliance officers.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-sd-pink font-bold">3.</span>
                    <span>
                      <strong>Contract Labour (CLRA) Exposure:</strong> For manufacturing, logistics, and retail businesses utilizing off-roll contractors, our vendor compliance auditing module shields the Principal Employer against vicarious liabilities under Section 8A of the EPF Act and Section 21(4) of the CLRA Act.
                    </span>
                  </li>
                </ul>
              </section>

              <section className="bg-sd-bg-2 p-6 rounded-xl border border-sd-border">
                <h3 className="text-lg font-black text-sd-text mb-2">
                  Total Cost of Ownership (TCO): In-House vs. Service Dial Outsourcing
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs mt-3">
                    <thead>
                      <tr className="border-b border-sd-border text-sd-text font-bold">
                        <th className="py-2">Cost Component</th>
                        <th className="py-2">In-House Department (50–150 Staff)</th>
                        <th className="py-2">Service Dial Managed Services</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-sd-border text-sd-muted">
                      <tr>
                        <td className="py-2.5 font-semibold text-sd-text">Personnel Overhead</td>
                        <td className="py-2.5">₹45,000–₹75,000/mo (Payroll Officer + Compliance Executive)</td>
                        <td className="py-2.5 text-emerald-600 font-bold">₹0 (Included in monthly retainer)</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-semibold text-sd-text">HRMS Cloud Software License</td>
                        <td className="py-2.5">₹8,000–₹18,000/mo (Platform subscription)</td>
                        <td className="py-2.5 text-emerald-600 font-bold">₹0 (Integrated proprietary portal)</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-semibold text-sd-text">Statutory Penalty Liability</td>
                        <td className="py-2.5 text-red-600">100% Borne by Employer (Sec 14B / 7Q damages)</td>
                        <td className="py-2.5 text-emerald-600 font-bold">100% Contractual SLA Indemnity</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-semibold text-sd-text">Audit Representation</td>
                        <td className="py-2.5">Additional advocate / auditor fees per hearing</td>
                        <td className="py-2.5 text-emerald-600 font-bold">Included for Labour Inspectorate summons</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>

            {/* Sidebar FAQ & Consultation CTA */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-sd-border bg-white shadow-xs">
                <h3 className="text-base font-bold text-sd-text mb-3">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4 text-xs">
                  <div>
                    <h4 className="font-bold text-sd-text mb-1">
                      Are there any hidden onboarding or setup fees?
                    </h4>
                    <p className="text-sd-muted leading-relaxed">
                      No. All data migration, past challan verification, and employee master mapping are structured into the initial onboarding agreement with full transparency.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sd-text mb-1">
                      How quickly can Service Dial assume our payroll?
                    </h4>
                    <p className="text-sd-muted leading-relaxed">
                      Our standard parallel-run onboarding cycle spans <strong>10 to 14 business days</strong>. We execute one parallel dry run alongside your legacy system to guarantee 100% mathematical parity before formal handover.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sd-text mb-1">
                      Does this fee cover the new 2026 EPFO & WB PT rules?
                    </h4>
                    <p className="text-sd-muted leading-relaxed">
                      Yes. All regulatory updates—including the EPFO ₹25,000 wage ceiling and West Bengal October 2026 Professional Tax revisions—are pre-configured without supplementary advisory fees.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-sd-dark text-white text-center">
                <h3 className="text-lg font-black mb-2">Need an Enterprise RFP?</h3>
                <p className="text-xs text-white/70 mb-4">
                  For establishments with over 250 employees or multi-location manufacturing facilities, speak directly with our Principal Consultant.
                </p>
                <Link
                  href="/contact"
                  className="inline-block w-full py-2.5 px-4 rounded-lg bg-sd-pink text-white font-bold text-xs hover:bg-sd-pink-dark transition-colors"
                >
                  Schedule Executive Briefing →
                </Link>
                <p className="text-[11px] text-white/50 mt-2">
                  Or call directly: <a href="tel:+918777864949" className="text-white underline">+91 87778 64949</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
