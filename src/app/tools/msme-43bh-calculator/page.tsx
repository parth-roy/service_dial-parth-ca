import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import MsmeCalculator from "@/components/calculator/MsmeCalculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MSME Section 43B(h) Payment Gatekeeper & Penalty Calculator",
  description:
    "Calculate MSME Section 43B(h) 15/45-day statutory payment due dates, corporate tax disallowance exposure, and Section 16 penal interest (19.5% compounded monthly).",
  keywords: [
    "MSME 43B h calculator",
    "section 43b h payment due date calculator",
    "MSMED Act 15 45 day payment rules",
    "tax disallowance MSME calculation",
    "MSME overdue interest calculator",
  ],
  alternates: {
    canonical: "https://servicedialtm.com/tools/msme-43bh-calculator",
  },
  openGraph: {
    title: "MSME 43B(h) Payment Gatekeeper & Disallowance Calculator | Service Dial",
    description:
      "Interactive gatekeeper tool for Income Tax Act Section 43B(h) compliance, tracking mandatory 15-day and 45-day payment timelines for Micro and Small suppliers.",
    url: "https://servicedialtm.com/tools/msme-43bh-calculator",
    siteName: "Service Dial",
    type: "website",
  },
};

export default function MsmeCalculatorPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "MSME 43B(h) Gatekeeper", href: "/tools/msme-43bh-calculator" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "MSME Section 43B(h) Payment Gatekeeper Calculator",
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
              Direct Tax Protection Tool
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-sd-text tracking-tight">
              MSME Section 43B(h) Payment Gatekeeper
            </h1>
            <p className="mt-3 text-sm sm:text-base text-sd-muted leading-relaxed">
              Verify statutory invoice payment deadlines under Section 43B(h) of the Income Tax Act and Section 15 of the MSMED Act 2006. Prevent full disallowance of purchases from your corporate taxable income.
            </p>
          </div>

          <MsmeCalculator />

          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-sd-border">
            <h3 className="text-lg font-bold text-sd-text mb-3">
              Essential Rules for Section 43B(h) Audit Compliance:
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-xs text-slate-600 leading-relaxed">
              <div>
                <strong className="text-slate-900 block mb-1">⏱️ Statutory Timeline Limits:</strong>
                Payment must be made within 15 days if there is no written contract. If there is a written agreement, payment can be extended up to a maximum of 45 days. Any contract term exceeding 45 days is void under Section 15.
              </div>
              <div>
                <strong className="text-slate-900 block mb-1">🏪 Trader Exemption:</strong>
                Traders registered under Udyam (Retail and Wholesale under NIC codes 45, 46, 47) are eligible only for priority sector lending and are officially exempt from Section 43B(h) disallowances.
              </div>
              <div>
                <strong className="text-slate-900 block mb-1">🚫 Non-Deductible Interest:</strong>
                Delayed payment interest under Section 16 of the MSMED Act (3x RBI Bank Rate compounded monthly) is strictly disallowed as a business expense under Section 23 of the Act.
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/services/finance-and-audit/accounts-payable-outsourcing"
                className="text-xs font-bold text-sd-pink hover:underline"
              >
                Outsource Accounts Payable with Automated 43B(h) Gatekeeping →
              </Link>
              <Link
                href="/services/finance-and-audit/fixed-asset-verification-and-tagging"
                className="text-xs font-bold text-sd-text hover:text-sd-pink"
              >
                Explore CARO 2020 Fixed Asset Audit →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
