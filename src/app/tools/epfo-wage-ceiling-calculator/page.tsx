import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import EpfoCeilingCalculator from "@/components/calculator/EpfoCeilingCalculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EPFO ₹25,000 Wage Ceiling Split Calculator | Service Dial",
  description:
    "Model the CTC and take-home impact of the EPFO statutory wage ceiling hike from ₹15,000 to ₹25,000 (Notification S.O. 5109(E)). Instant EPF, EPS, EDLI, and admin fee variance.",
  keywords: [
    "EPFO wage ceiling calculator 25000",
    "PF wage ceiling hike calculator",
    "EPS capping revision 2083",
    "EPFO notification SO 5109 E calculator",
    "employer PF CTC impact calculator",
  ],
  alternates: {
    canonical: "https://servicedialtm.com/tools/epfo-wage-ceiling-calculator",
  },
  openGraph: {
    title: "EPFO ₹25,000 Wage Ceiling Split Calculator | Service Dial",
    description:
      "Interactive modeling of employer statutory liabilities and employee take-home reduction under the ₹25,000 EPFO wage ceiling hike.",
    url: "https://servicedialtm.com/tools/epfo-wage-ceiling-calculator",
    siteName: "Service Dial",
    type: "website",
  },
};

export default function EpfoCeilingCalculatorPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "EPFO Wage Ceiling Calculator", href: "/tools/epfo-wage-ceiling-calculator" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "EPFO ₹25,000 Wage Ceiling Split Calculator",
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
              Statutory Benefits Engine
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-sd-text tracking-tight">
              EPFO ₹25,000 Wage Ceiling Split Simulator
            </h1>
            <p className="mt-3 text-sm sm:text-base text-sd-muted leading-relaxed">
              Model the financial and corporate CTC variance resulting from the Central Government&apos;s notification hiking the statutory provident fund wage ceiling from ₹15,000 to ₹25,000 per month under S.O. 5109(E).
            </p>
          </div>

          <EpfoCeilingCalculator />

          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-sd-border">
            <h3 className="text-lg font-bold text-sd-text mb-3">
              CFO Statutory Takeaways on the ₹25,000 Ceiling:
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-xs text-slate-600 leading-relaxed">
              <div>
                <strong className="text-slate-900 block mb-1">📈 Corporate Outgo Spike:</strong>
                For every associate earning ₹25,000+ Basic + DA, employer statutory contributions jump from ₹1,950 to ₹3,250—an increase of ₹1,300 per employee per month (₹15,600/year).
              </div>
              <div>
                <strong className="text-slate-900 block mb-1">📉 Employee Net Take-Home:</strong>
                Employees experience an extra mandatory 12% deduction (from ₹1,800 to ₹3,000/mo), reducing net monthly in-hand salary by ₹1,200 unless gross allowances are restructured.
              </div>
              <div>
                <strong className="text-slate-900 block mb-1">🏦 Pension &amp; EDLI Cover:</strong>
                Maximum pensionable salary rises to ₹25,000, capping EPS allocation at ₹2,083/month and boosting EDLI life insurance coverage up to ₹7 Lakhs.
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/resources/epfo-wage-ceiling-25000"
                className="text-xs font-bold text-sd-pink hover:underline"
              >
                Read Comprehensive EPFO Wage Hike Analysis →
              </Link>
              <Link
                href="/services/hrms-and-payroll/managed-payroll-outsourcing"
                className="text-xs font-bold text-sd-text hover:text-sd-pink"
              >
                Outsource Managed Gross-to-Net Payroll →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
