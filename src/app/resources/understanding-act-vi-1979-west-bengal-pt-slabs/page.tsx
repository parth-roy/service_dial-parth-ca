import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PayrollFeeEstimator from "@/components/calculator/PayrollFeeEstimator";

export const metadata: Metadata = {
  title: "Understanding West Bengal Act VI of 1979: Professional Tax Slabs, Gross Pay Exemptions & February Spike",
  description:
    "Authoritative guide to West Bengal Act VI of 1979 Professional Tax (PT) slabs. Gross wage exemption thresholds, monthly deduction brackets, and why ₹300 is deducted in February under Article 276(2).",
  keywords: [
    "Understanding West Bengal Act VI of 1979: Professional Tax Slabs, Gross Pay Exemptions & February Spike",
    "West Bengal professional tax slabs 2026",
    "West Bengal Act VI of 1979 schedule",
    "WB PT February 300 deduction reason",
    "gross salary PT exemption West Bengal",
    "outsourced payroll processing services Kolkata",
    "statutory compliance management company India",
  ],
  alternates: {
    canonical: "https://servicedialtm.com/resources/understanding-act-vi-1979-west-bengal-pt-slabs",
  },
  openGraph: {
    title: "Understanding West Bengal Act VI of 1979: PT Slabs & February Spike",
    description:
      "Statutory breakdown of West Bengal Professional Tax schedules, calculation matrices, and annual ₹2,500 constitutional caps.",
    url: "https://servicedialtm.com/resources/understanding-act-vi-1979-west-bengal-pt-slabs",
    siteName: "Service Dial",
    type: "article",
  },
};

export default function UnderstandingActVi1979WbPtSlabsPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Understanding West Bengal Act VI of 1979: Professional Tax Slabs, Gross Pay Exemptions & February Spike",
    description:
      "A legal and practical guide for payroll administrators on calculating West Bengal Professional Tax deductions under Act VI of 1979, explaining slab brackets, exemption thresholds, and the constitutional February ₹300 adjustment.",
    author: {
      "@type": "Organization",
      name: "Service Dial Talent Management Private Limited",
      url: "https://servicedialtm.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Service Dial",
      logo: {
        "@type": "ImageObject",
        url: "https://servicedialtm.com/logo.png",
      },
    },
    datePublished: "2026-10-11",
    dateModified: "2026-11-01",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the minimum gross salary exempt from Professional Tax in West Bengal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the Schedule to West Bengal Act VI of 1979, employees earning a monthly gross salary of up to ₹10,000 are completely exempt from Professional Tax deductions (Nil PT liability).",
        },
      },
      {
        "@type": "Question",
        name: "Why does the February PT deduction increase to ₹300 for employees earning above ₹40,000?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Article 276(2) of the Indian Constitution, state governments cannot levy more than ₹2,500 in Professional Tax annually. To hit exactly ₹2,500 without fractional monthly deductions, the state mandates ₹200 per month for March through January (11 months × ₹200 = ₹2,200) and ₹300 in February (₹2,200 + ₹300 = ₹2,500).",
        },
      },
      {
        "@type": "Question",
        name: "Is Professional Tax deducted on Basic Pay or Gross Salary in West Bengal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlike Provident Fund which is calculated on Basic + DA, West Bengal Professional Tax is assessed on total monthly Gross Remuneration, including Basic, HRA, bonuses, overtime, and all special allowances before statutory deductions.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-sd-bg-2 border-b border-sd-border py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Regulatory Resources", href: "/resources" },
              {
                label: "West Bengal Master Directory",
                href: "/resources/west-bengal-labor-laws-professional-tax-and-welfare-remittances-directory",
              },
              {
                label: "Act VI of 1979 PT Slabs",
                href: "/resources/understanding-act-vi-1979-west-bengal-pt-slabs",
              },
            ]}
          />
        </div>
      </div>

      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-4xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold mb-4">
              <span>📜 State Statutory Statute · West Bengal Act VI of 1979</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-sd-text tracking-tight mb-6 leading-tight">
              Understanding West Bengal Act VI of 1979: Professional Tax Slabs, Gross Pay Exemptions & February Spike
            </h1>
            <p className="text-sd-muted text-base sm:text-lg leading-relaxed mb-6">
              The <strong>West Bengal State Tax on Professions, Trades, Callings and Employments Act, 1979 (Act VI of 1979)</strong> governs the statutory withholding of Professional Tax from employee salaries. This technical reference clarifies monthly gross salary bands, legal exemption thresholds, and the unique <strong>₹300 February spike</strong> enforced to satisfy constitutional limits.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-sd-muted border-t border-sd-border pt-4">
              <span>Parent Hub: <Link href="/resources/west-bengal-labor-laws-professional-tax-and-welfare-remittances-directory" className="font-bold text-sd-pink hover:underline">West Bengal Master Directory</Link></span>
              <span>•</span>
              <span>Constitutional Cap: <strong>Article 276(2) — ₹2,500/year</strong></span>
            </div>
          </div>

          {/* West Bengal PT Slabs Table */}
          <section className="mb-16">
            <div className="border-b border-sd-border pb-4 mb-6">
              <h2 className="text-2xl font-black text-sd-text">
                Official Monthly Professional Tax Deduction Slabs
              </h2>
              <p className="text-xs sm:text-sm text-sd-muted mt-1">
                Enforced under the Schedule to Act VI of 1979 for salaried employees across West Bengal.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-sd-border bg-white shadow-xs mb-8">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 border-b border-sd-border text-sd-text font-bold">
                  <tr>
                    <th className="p-4">Monthly Gross Salary Slab</th>
                    <th className="p-4">Mar – Jan Monthly Tax</th>
                    <th className="p-4">February Deduction</th>
                    <th className="p-4">Total Annual Outflow</th>
                    <th className="p-4">Statutory Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sd-border">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-sd-text">Up to ₹10,000</td>
                    <td className="p-4 font-bold text-emerald-600">Nil (₹0)</td>
                    <td className="p-4 font-bold text-emerald-600">Nil (₹0)</td>
                    <td className="p-4 font-bold text-emerald-600">₹0</td>
                    <td className="p-4 text-xs text-sd-muted">100% Statutory Exemption</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-sd-text">₹10,001 to ₹15,000</td>
                    <td className="p-4">₹110 / mo</td>
                    <td className="p-4">₹110</td>
                    <td className="p-4 font-bold text-sd-text">₹1,320 / yr</td>
                    <td className="p-4 text-xs text-sd-muted">Standard entry-level bracket</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-sd-text">₹15,001 to ₹20,000</td>
                    <td className="p-4">₹130 / mo</td>
                    <td className="p-4">₹130</td>
                    <td className="p-4 font-bold text-sd-text">₹1,560 / yr</td>
                    <td className="p-4 text-xs text-sd-muted">Mid-junior employee bracket</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-sd-text">₹20,001 to ₹40,000</td>
                    <td className="p-4">₹150 / mo</td>
                    <td className="p-4">₹150</td>
                    <td className="p-4 font-bold text-sd-text">₹1,800 / yr</td>
                    <td className="p-4 text-xs text-sd-muted">Mid-management salary tier</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 bg-amber-50/50">
                    <td className="p-4 font-bold text-sd-text">Above ₹40,000</td>
                    <td className="p-4 font-bold text-sd-pink">₹200 / mo</td>
                    <td className="p-4 font-bold text-rose-700">₹300 (February Spike)</td>
                    <td className="p-4 font-bold text-sd-pink">₹2,500 / yr</td>
                    <td className="p-4 text-xs text-sd-muted">Max statutory cap under Art. 276(2)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Deep Dive on the February ₹300 Spike */}
          <section className="mb-16">
            <div className="border-b border-sd-border pb-4 mb-6">
              <h2 className="text-2xl font-black text-sd-text">
                The Constitutional Mechanics of the February ₹300 Spike
              </h2>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-sd-border shadow-xs space-y-4">
              <p className="text-xs sm:text-sm text-sd-muted leading-relaxed">
                A common source of employee confusion and audit queries in Kolkata HR departments is the sudden ₹100 increase in payroll deductions during February. Under <strong>Article 276(2) of the Constitution of India</strong>, the total amount payable in respect of any one person to the State or any one municipal corporation, district board or local authority by way of taxes on professions, trades, callings and employments shall not exceed <strong>₹2,500 per annum</strong>.
              </p>
              <div className="font-mono text-xs sm:text-sm bg-slate-50 p-4 rounded-xl border border-sd-border text-sd-text">
                March to January (11 Months) × ₹200 = ₹2,200<br />
                February (1 Month) × ₹300 = ₹300<br />
                Total Annual Professional Tax Remittance = ₹2,500.00 Exactly
              </div>
              <p className="text-xs sm:text-sm text-sd-muted leading-relaxed">
                If an employer deducts ₹200 across all 12 months, the company will have remitted only ₹2,400, leaving a ₹100 statutory deficit per employee that triggers an automated discrepancy notice during annual Form III-A reconciliation with the Directorate of Commercial Taxes.
              </p>
            </div>
          </section>

          {/* Sibling Spokes Linking Mesh */}
          <section className="mb-16 p-8 rounded-2xl bg-slate-50 border border-sd-border">
            <h3 className="text-lg font-bold text-sd-text mb-4">
              Explore Related West Bengal Regulatory Guides
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/resources/form-iii-a-annual-returns-west-bengal-pt"
                className="p-4 rounded-xl bg-white border border-sd-border hover:border-sd-pink transition-all group"
              >
                <span className="text-[11px] font-bold text-sd-pink block mb-1">Annual Returns →</span>
                <span className="text-xs font-bold text-sd-text group-hover:text-sd-pink">
                  Form III-A Annual Returns &amp; GRIPS Reconciliation
                </span>
              </Link>
              <Link
                href="/resources/checklist-bi-annual-west-bengal-labour-welfare-fund"
                className="p-4 rounded-xl bg-white border border-sd-border hover:border-sd-pink transition-all group"
              >
                <span className="text-[11px] font-bold text-sd-pink block mb-1">Welfare Fund →</span>
                <span className="text-xs font-bold text-sd-text group-hover:text-sd-pink">
                  Bi-Annual WBLWF Compliance &amp; Form D Dates
                </span>
              </Link>
              <Link
                href="/resources/sourcing-blue-collar-cxo-mandates-west-bengal-clra-guidelines"
                className="p-4 rounded-xl bg-white border border-sd-border hover:border-sd-pink transition-all group"
              >
                <span className="text-[11px] font-bold text-sd-pink block mb-1">CLRA Guidelines →</span>
                <span className="text-xs font-bold text-sd-text group-hover:text-sd-pink">
                  West Bengal CLRA &amp; Flexi-Staffing Compliance
                </span>
              </Link>
            </div>
          </section>

          {/* Interactive Calculator Section */}
          <section className="mb-16">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-sd-pink block mb-1">
                Zero-Penalty State Compliance
              </span>
              <h2 className="text-2xl font-black text-sd-text tracking-tight mb-2">
                Outsource West Bengal Professional Tax Management
              </h2>
              <p className="text-sd-muted text-xs sm:text-sm leading-relaxed">
                Eliminate GRIPS challan errors and annual Form III-A mismatches. Model your managed payroll and state tax retainer with Service Dial.
              </p>
            </div>
            <PayrollFeeEstimator />
          </section>

          {/* Quick FAQ */}
          <section className="p-8 rounded-2xl bg-white border border-sd-border shadow-xs">
            <h2 className="text-xl font-bold mb-6 text-sd-text">
              Frequently Asked Questions: West Bengal PT Slabs
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-sd-text mb-1">
                  What is the minimum gross salary exempt from Professional Tax in West Bengal?
                </h3>
                <p className="text-xs text-sd-muted leading-relaxed">
                  Under the Schedule to West Bengal Act VI of 1979, employees earning a monthly gross salary of up to ₹10,000 are completely exempt from Professional Tax deductions (Nil PT liability).
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-sd-text mb-1">
                  Why does the February PT deduction increase to ₹300 for employees earning above ₹40,000?
                </h3>
                <p className="text-xs text-sd-muted leading-relaxed">
                  Under Article 276(2) of the Indian Constitution, state governments cannot levy more than ₹2,500 in Professional Tax annually. To hit exactly ₹2,500 without fractional monthly deductions, the state mandates ₹200 per month for March through January (11 months × ₹200 = ₹2,200) and ₹300 in February (₹2,200 + ₹300 = ₹2,500).
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-sd-text mb-1">
                  Is Professional Tax deducted on Basic Pay or Gross Salary in West Bengal?
                </h3>
                <p className="text-xs text-sd-muted leading-relaxed">
                  Unlike Provident Fund which is calculated on Basic + DA, West Bengal Professional Tax is assessed on total monthly Gross Remuneration, including Basic, HRA, bonuses, overtime, and all special allowances before statutory deductions.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
