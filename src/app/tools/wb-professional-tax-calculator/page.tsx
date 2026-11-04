import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import WbPtCalculator from "@/components/calculator/WbPtCalculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "West Bengal Professional Tax Calculator (2026 Revision) | Service Dial",
  description:
    "Instant West Bengal Professional Tax calculator under revised slabs (Notification No. 1607-F.T.). Calculate exact monthly PT deductions, February spike, and annual organization liability.",
  keywords: [
    "west bengal professional tax calculator",
    "wb pt slabs 2026 calculator",
    "kolkata professional tax calculation",
    "notification 1607 ft west bengal pt",
    "professional tax grips ifms calculator",
  ],
  alternates: {
    canonical: "https://servicedialtm.com/tools/wb-professional-tax-calculator",
  },
  openGraph: {
    title: "West Bengal Professional Tax Calculator | Service Dial",
    description:
      "Interactive calculation engine for West Bengal salaried Professional Tax under the 2026 notification revisions.",
    url: "https://servicedialtm.com/tools/wb-professional-tax-calculator",
    siteName: "Service Dial",
    type: "website",
  },
};

export default function WbPtCalculatorPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "WB Professional Tax Calculator", href: "/tools/wb-professional-tax-calculator" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "West Bengal Professional Tax Calculator (2026 Revision)",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    provider: {
      "@type": "Organization",
      name: "Service Dial Talent Management Private Limited",
      url: "https://servicedialtm.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-slate-50 border-b border-sd-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      <section className="py-10 lg:py-14 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-sd-pink bg-sd-pink/10 border border-sd-pink/20 rounded-full px-3 py-1 mb-3 inline-block">
              Statutory Payroll Engine
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-sd-text tracking-tight">
              West Bengal Professional Tax Calculator
            </h1>
            <p className="mt-3 text-sm sm:text-base text-sd-muted leading-relaxed">
              Calculate exact monthly salaried Professional Tax deductions under the restructured slabs enacted by the Government of West Bengal under Notification No. 1607-F.T., incorporating the constitutional ₹2,500 annual cap under Article 276(2).
            </p>
          </div>

          <WbPtCalculator />

          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-sd-border">
            <h3 className="text-lg font-bold text-sd-text mb-3">
              Employer Compliance Notes for West Bengal PT:
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-xs text-slate-600 leading-relaxed">
              <div>
                <strong className="text-slate-900 block mb-1">📅 Monthly Due Date:</strong>
                Salaried Professional Tax must be deposited through GRIPS IFMS portal on or before the 21st of the succeeding month to avoid 1% monthly penal interest.
              </div>
              <div>
                <strong className="text-slate-900 block mb-1">📋 Annual Form III-A Return:</strong>
                Every employer registered with an Enrolment Certificate (EC) or Registration Certificate (RC) must file the consolidated annual return in Form III-A by 30th April.
              </div>
              <div>
                <strong className="text-slate-900 block mb-1">⚖️ Constitutional Cap:</strong>
                Article 276(2) of the Constitution limits state professional taxes to ₹2,500 per annum per person. The ₹300 February deduction brings the annual total to exactly ₹2,500.
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/resources/west-bengal-professional-tax-2026"
                className="text-xs font-bold text-sd-pink hover:underline"
              >
                Read Complete West Bengal PT Employer Guide →
              </Link>
              <Link
                href="/services/hrms-and-payroll/statutory-payroll-compliance"
                className="text-xs font-bold text-sd-text hover:text-sd-pink"
              >
                Outsource Statutory Payroll Compliance →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
