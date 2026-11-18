import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PricingCalculator from "@/components/ip/PricingCalculator";

export const revalidate = 86400; // 24 hours ISR

export const metadata: Metadata = {
  title: "Trademark Cost in India (2026 Calculator): Official Government Fees & Multi-Class Filing",
  description:
    "Calculate exact Form TM-A trademark registration costs in India. Compare ₹4,500 MSME/Individual fees vs ₹9,000 Corporate fees across single and multi-class applications.",
  alternates: {
    canonical: "https://servicedialtm.com/ip-services/tools/fee-calculator",
  },
  openGraph: {
    title: "Official Trademark Cost & Statutory Fee Calculator (India 2026)",
    description:
      "Instant official trademark fee computation under Trade Marks Rules 2017. MSME, Startup, and Corporate statutory fees.",
    url: "https://servicedialtm.com/ip-services/tools/fee-calculator",
    siteName: "Service Dial",
    locale: "en_IN",
    type: "website",
  },
};

const FAQS = [
  {
    q: "What is the official government fee for trademark registration in India?",
    a: "Under the Trade Marks Rules 2017, the official e-filing fee for Form TM-A is ₹4,500 per class for Individuals, Startups (DPIIT recognized), and Micro & Small Enterprises (holding a valid Udyam Registration Certificate). For all other entities (including Private Limited companies, LLPs, and Partnerships without MSME certification), the statutory e-filing fee is ₹9,000 per class.",
  },
  {
    q: "How does multi-class trademark filing fee calculation work?",
    a: "Multi-class applications under Form TM-A are billed on a strictly linear per-class basis. For example, if an MSME files across 3 classes (e.g., Class 29, Class 30, and Class 32), the official government fee is 3 × ₹4,500 = ₹13,500. For non-MSME corporate applicants, 3 classes would cost 3 × ₹9,000 = ₹27,000.",
  },
  {
    q: "Is physical filing more expensive than online e-filing?",
    a: "Yes. The Indian Trade Marks Registry imposes a 10% statutory surcharge on manual/physical filings. Individual/MSME physical filing costs ₹5,000 per class (versus ₹4,500 online), and corporate physical filing costs ₹10,000 per class (versus ₹9,000 online). Service Dial files 100% of applications electronically via IP India's gateway, securing the discounted rate.",
  },
  {
    q: "Are there statutory fees for responding to a trademark examination objection?",
    a: "There is zero official government fee for filing a written response to an Examination Report objection under Section 9 or Section 11 of the Trade Marks Act 1999. Professional attorney drafting fees apply, but no statutory treasury fee is levied by the Registry. If a Show Cause Hearing is subsequently scheduled, no government fee is charged unless an adjournment (Form TM-M, ₹900) is requested.",
  },
  {
    q: "How can a company qualify for the 50% government fee concession?",
    a: "To claim the ₹4,500 subsidized fee instead of ₹9,000, an enterprise must submit either a valid Udyam Registration Certificate (classified as Micro or Small) or a DPIIT Startup Recognition Certificate at the time of Form TM-A submission. Medium enterprises are not eligible for the 50% concession.",
  },
];

export default function TrademarkFeeCalculatorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="bg-[#FFFFFF] text-slate-900 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "IP Services", href: "/ip-services" },
            { label: "Tools", href: "/ip-services" },
            { label: "Trademark Fee Calculator", href: "/ip-services/tools/fee-calculator" },
          ]}
        />

        {/* Hero Section */}
        <div className="mt-4 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-[#b80f68]/10 text-[#b80f68] text-xs font-bold rounded-full uppercase tracking-wider font-mono">
              Statutory Fee Engine 2026
            </span>
            <span className="px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold rounded-full">
              Trade Marks Rules 2017 Updated
            </span>
            <span className="px-3 py-1 bg-sky-50 text-sky-800 border border-sky-200 text-xs font-semibold rounded-full">
              Form TM-A E-Filing Slabs
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Official Trademark Cost &amp; Statutory Fee Calculator
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-4xl leading-relaxed">
            Calculate statutory government filing fees and professional attorney disbursements under the Trade Marks Act 1999. Includes automatic 50% fee concessions for MSME Udyam and DPIIT-recognized startups across all 45 Nice Classification classes.
          </p>
        </div>

        {/* Embedded Interactive Pricing Calculator */}
        <section className="mt-8">
          <PricingCalculator
            cityName="Pan-India"
            intentTitle="Form TM-A Trademark Filing"
          />
        </section>

        {/* Official Statutory Fee Slabs Comparison Table */}
        <section className="mt-12 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-bold text-[#b80f68] uppercase tracking-wider font-mono">
                First Schedule · Trade Marks Rules 2017
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                Official Trademark Filing Fee Structure in India
              </h2>
            </div>
            <span className="hidden sm:inline-block text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
              Gazette Notification Calibrated
            </span>
          </div>

          <p className="text-sm text-slate-600 mb-6 max-w-3xl">
            Official statutory fees payable to the Controller General of Patents, Designs and Trade Marks (CGPDTM). Physical filings incur an additional 10% administrative surcharge.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <th className="py-3.5 px-4">Applicant Category</th>
                  <th className="py-3.5 px-4">Statutory Eligibility Proof</th>
                  <th className="py-3.5 px-4">E-Filing Fee (Per Class)</th>
                  <th className="py-3.5 px-4">Physical Filing (Per Class)</th>
                  <th className="py-3.5 px-4">Effective Concession</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4 px-4 font-semibold text-slate-900">
                    Individual / Sole Proprietor
                  </td>
                  <td className="py-4 px-4 text-xs text-slate-600">
                    PAN Card &amp; Aadhaar Card
                  </td>
                  <td className="py-4 px-4 font-mono font-bold text-emerald-700">
                    ₹4,500
                  </td>
                  <td className="py-4 px-4 font-mono text-slate-500 line-through">
                    ₹5,000
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-800">
                      50% Subsidized
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4 px-4 font-semibold text-slate-900">
                    Micro &amp; Small Enterprise (MSME)
                  </td>
                  <td className="py-4 px-4 text-xs text-slate-600">
                    Valid Udyam Registration Certificate
                  </td>
                  <td className="py-4 px-4 font-mono font-bold text-emerald-700">
                    ₹4,500
                  </td>
                  <td className="py-4 px-4 font-mono text-slate-500 line-through">
                    ₹5,000
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-800">
                      50% Subsidized
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4 px-4 font-semibold text-slate-900">
                    DPIIT-Recognized Startup
                  </td>
                  <td className="py-4 px-4 text-xs text-slate-600">
                    DPIIT Certificate of Recognition
                  </td>
                  <td className="py-4 px-4 font-mono font-bold text-emerald-700">
                    ₹4,500
                  </td>
                  <td className="py-4 px-4 font-mono text-slate-500 line-through">
                    ₹5,000
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-800">
                      50% Subsidized
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4 px-4 font-semibold text-slate-900">
                    Corporate / Private Limited / LLP / Partnership
                  </td>
                  <td className="py-4 px-4 text-xs text-slate-600">
                    Certificate of Incorporation / Deed (without MSME)
                  </td>
                  <td className="py-4 px-4 font-mono font-bold text-slate-900">
                    ₹9,000
                  </td>
                  <td className="py-4 px-4 font-mono text-slate-500">
                    ₹10,000
                  </td>
                  <td className="py-4 px-4 text-xs text-slate-500">
                    Standard Tariff
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="mt-12 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm mb-12">
          <div className="mb-8">
            <span className="text-xs font-bold text-[#b80f68] uppercase tracking-wider font-mono">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              Trademark Registration Cost &amp; Fee Structure FAQ
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors"
              >
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-4 items-center justify-between">
            <p className="text-xs text-slate-500">
              Need assistance determining your classification before filing?
            </p>
            <Link
              href="/ip-services/class-finder"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b80f68] hover:underline"
            >
              Explore 45 Nice Classification Classes →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
