import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "West Bengal Professional Tax Slabs (2026 Revision): Employer Guide | Service Dial",
  description:
    "Complete employer guide to the West Bengal Professional Tax Act revisions. Revised salary slabs (gross < ₹20,000 exempt), February ₹300 spike, ERC vs EC registration, Form III-A return due dates.",
  keywords: [
    "west bengal professional tax slabs 2026",
    "wb professional tax exemption 20000",
    "west bengal pt slabs revised",
    "ERC vs EC registration west bengal",
    "Form III-A annual return professional tax",
    "professional tax calculation kolkata",
    "wb pt act 1979 schedule",
  ],
  alternates: {
    canonical: "https://servicedialtm.com/resources/west-bengal-professional-tax-2026",
  },
  openGraph: {
    title: "West Bengal Professional Tax 2026 Slabs: Complete Employer Guide",
    description:
      "Statutory advisory on the West Bengal Professional Tax slab changes. Updated exemption limit, calculation rules, GRIPS payment, and annual return filing.",
    url: "https://servicedialtm.com/resources/west-bengal-professional-tax-2026",
    siteName: "Service Dial",
    type: "article",
  },
};

export default function WestBengalPTGuidePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the new Professional Tax exemption limit in West Bengal for 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the revised schedule effective October 1, 2026, employees with a monthly gross salary of up to ₹20,000 are completely exempt from Professional Tax (Nil deduction).",
        },
      },
      {
        "@type": "Question",
        name: "Why is ₹300 deducted in February instead of ₹200 for salaries above ₹40,000?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Article 276(2) of the Constitution of India caps total state professional tax at ₹2,500 per annum. To reach exactly ₹2,500, employers deduct ₹200 for 11 months (₹2,200) and ₹300 in the final assessment month of February.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between an ERC (PTRC) and an EC (PTEC) in West Bengal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An Employer Registration Certificate (ERC / PTRC) under Section 5(1) is required by an establishment to deduct and deposit PT on employees' salaries. An Enrollment Certificate (EC / PTEC) under Section 5(2) is required by the commercial entity or directors themselves to pay their own annual corporate PT.",
        },
      },
      {
        "@type": "Question",
        name: "What is the monthly due date for remitting West Bengal Professional Tax?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Professional Tax deducted from employees' salaries must be remitted via the GRIPS online portal on or before the 21st day of the succeeding English calendar month. Delays incur mandatory simple interest of 1% per month under Section 9(2).",
        },
      },
      {
        "@type": "Question",
        name: "Does West Bengal Professional Tax apply to remote employees living in Kolkata?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Professional Tax liability attaches to the physical place of employment. If an employee resides and works within West Bengal, the employer must obtain a West Bengal ERC and deduct PT according to West Bengal slabs, regardless of where the company's head office is located.",
        },
      },
    ],
  };

  return (
    <>
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
              { label: "West Bengal Professional Tax 2026", href: "/resources/west-bengal-professional-tax-2026" },
            ]}
          />
        </div>
      </div>

      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header Metadata */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sd-pink/10 border border-sd-pink/20 text-sd-pink text-xs font-bold mb-4">
              <span>State Statutory Compliance · Directorate of Commercial Taxes, West Bengal</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-sd-text tracking-tight leading-tight mb-4">
              West Bengal Professional Tax (PT) Slabs & Compliance Architecture
            </h1>
            <p className="text-sd-muted text-base sm:text-lg leading-relaxed">
              Authoritative guide to <strong>The West Bengal State Tax on Professions, Trades, Callings and Employments Act, 1979 (West Bengal Act VI of 1979)</strong>. Reviewing revised salary slabs, dual certificate compliance (ERC vs. EC), GRIPS remittance, and Form III-A annual returns.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-sd-muted border-t border-sd-border pt-4">
              <span>Authored by: <strong>Service Dial Labour Law & Payroll Practice Group</strong></span>
              <span>•</span>
              <span>Corporate Desk: <strong>Barrackpore & Kolkata HQ</strong></span>
              <span>•</span>
              <span>Regulatory Version: <strong>October 2026 Schedule</strong></span>
            </div>
          </div>

          {/* Slabs Callout Card */}
          <div className="p-6 rounded-2xl bg-sd-dark text-white mb-12 shadow-lg">
            <h2 className="text-lg font-black text-emerald-400 mb-2 flex items-center gap-2">
              <span>📋</span>
              <span>Official Revised West Bengal PT Slabs (October 1, 2026)</span>
            </h2>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/20 text-emerald-300 font-bold">
                    <th className="py-2.5">Monthly Gross Salary Slab</th>
                    <th className="py-2.5">Monthly Deduction</th>
                    <th className="py-2.5">Annual Deduction Total</th>
                    <th className="py-2.5">Statutory Rules</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-white/90">
                  <tr>
                    <td className="py-3 font-bold text-white">Up to ₹20,000.00</td>
                    <td className="py-3 font-black text-emerald-400">NIL (Exempt)</td>
                    <td className="py-3 font-semibold">₹0.00</td>
                    <td className="py-3 text-white/70">Relief threshold expanded to ₹20,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-white">₹20,001.00 to ₹30,000.00</td>
                    <td className="py-3 font-bold text-white">₹130.00 / month</td>
                    <td className="py-3 font-semibold">₹1,560.00</td>
                    <td className="py-3 text-white/70">Flat ₹130 across all 12 calendar months</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-white">₹30,001.00 to ₹40,000.00</td>
                    <td className="py-3 font-bold text-white">₹150.00 / month</td>
                    <td className="py-3 font-semibold">₹1,800.00</td>
                    <td className="py-3 text-white/70">Flat ₹150 across all 12 calendar months</td>
                  </tr>
                  <tr className="bg-white/5">
                    <td className="py-3 font-bold text-white">Above ₹40,000.00</td>
                    <td className="py-3 font-bold text-amber-300">
                      ₹200 / mo (Apr–Jan, Mar)<br />
                      ₹300 in February
                    </td>
                    <td className="py-3 font-black text-emerald-400">₹2,500.00</td>
                    <td className="py-3 text-white/70">Capped at Art. 276(2) Constitutional Max</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 1: Pre vs Post Revision */}
          <section className="space-y-4 mb-12">
            <h2 className="text-2xl font-black text-sd-text">
              1. Comparative Analysis: Pre-Revision vs. Revised Slabs
            </h2>
            <p className="text-sd-muted text-sm leading-relaxed">
              Prior to this revision, the exemption threshold in West Bengal stood at ₹10,000 (with ₹110 deducted on ₹10,001–₹15,000, and ₹130 on ₹15,001–₹20,000). The October 1, 2026 restructuring raises the complete exemption ceiling to <strong>₹20,000 per month</strong>, creating significant take-home savings for lower-wage industrial and support staff:
            </p>
            <div className="overflow-x-auto rounded-xl border border-sd-border mt-3">
              <table className="w-full text-left text-xs">
                <thead className="bg-sd-bg-2 text-sd-text font-bold border-b border-sd-border">
                  <tr>
                    <th className="p-3">Gross Salary Range</th>
                    <th className="p-3">Pre-Revision Monthly PT</th>
                    <th className="p-3 bg-emerald-50 text-emerald-950">Revised Monthly PT</th>
                    <th className="p-3">Annual Employee Net Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sd-border text-sd-muted">
                  <tr>
                    <td className="p-3 font-semibold text-sd-text">₹10,001 – ₹15,000</td>
                    <td className="p-3">₹110.00</td>
                    <td className="p-3 bg-emerald-50/50 font-bold text-emerald-600">₹0.00 (NIL)</td>
                    <td className="p-3 text-emerald-700 font-bold">₹1,320.00 / year</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-sd-text">₹15,001 – ₹20,000</td>
                    <td className="p-3">₹130.00</td>
                    <td className="p-3 bg-emerald-50/50 font-bold text-emerald-600">₹0.00 (NIL)</td>
                    <td className="p-3 text-emerald-700 font-bold">₹1,560.00 / year</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-sd-text">₹25,001 – ₹30,000</td>
                    <td className="p-3">₹150.00</td>
                    <td className="p-3 bg-emerald-50/50 font-bold text-sd-text">₹130.00</td>
                    <td className="p-3 text-emerald-700 font-bold">₹240.00 / year</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-sd-text">Above ₹40,000</td>
                    <td className="p-3">₹200 (Feb ₹300)</td>
                    <td className="p-3 bg-emerald-50/50 font-bold text-sd-text">₹200 (Feb ₹300)</td>
                    <td className="p-3 text-sd-muted">₹0.00 (Maintains ₹2,500 max)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-sd-muted italic">
              *Definition of Gross Salary:* Includes basic wage, dearness allowance, HRA, incentive pay, production bonuses, overtime, and cash allowances earned during the month. Excludes employer contributions to PF, ESI, and gratuity.
            </p>
          </section>

          {/* Section 2: Dual Certificate Model */}
          <section className="space-y-4 mb-12">
            <h2 className="text-2xl font-black text-sd-text">
              2. Dual Certificate Compliance: ERC (PTRC) vs. EC (PTEC)
            </h2>
            <p className="text-sd-muted text-sm leading-relaxed">
              Under <strong>Section 5</strong> of the West Bengal Act, every corporate entity operating in West Bengal must navigate two distinct registration requirements:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="p-5 rounded-xl border border-sd-border bg-white shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-sd-pink mb-1">
                  1. Employer Registration Certificate (ERC / PTRC)
                </div>
                <h3 className="text-base font-black text-sd-text mb-2">Section 5(1) · Form I</h3>
                <p className="text-xs text-sd-muted leading-relaxed mb-3">
                  Required by any enterprise employing salaried persons earning above the exemption threshold. The employer functions as a withholding agent for the state government, deducting tax from monthly pay and depositing it via GRIPS.
                </p>
                <div className="text-[11px] font-semibold text-sd-text bg-sd-bg-2 p-2 rounded">
                  • Deposit Due Date: 21st of next month<br />
                  • Annual Return: Form III / Form III-A (April 30)
                </div>
              </div>

              <div className="p-5 rounded-xl border border-sd-border bg-white shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-sd-pink mb-1">
                  2. Enrollment Certificate (EC / PTEC)
                </div>
                <h3 className="text-base font-black text-sd-text mb-2">Section 5(2) · Form II</h3>
                <p className="text-xs text-sd-muted leading-relaxed mb-3">
                  Required by the corporate body itself (Private Limited, Public Company, LLP, Partnership Firm, or Director). This represents the entity&apos;s own tax on engaging in commerce within West Bengal.
                </p>
                <div className="text-[11px] font-semibold text-sd-text bg-sd-bg-2 p-2 rounded">
                  • Annual Payment: ₹2,500 flat fee<br />
                  • Due Date: Annually on or before July 31
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Penalties and Assessment */}
          <section className="space-y-4 mb-12">
            <h2 className="text-2xl font-black text-sd-text">
              3. Statutory Penalties, Interest & Assessment Powers
            </h2>
            <p className="text-sd-muted text-sm leading-relaxed">
              Non-compliance under West Bengal Act VI of 1979 triggers stringent statutory financial penalties and potential criminal liability:
            </p>
            <div className="overflow-x-auto rounded-xl border border-sd-border">
              <table className="w-full text-left text-xs">
                <thead className="bg-sd-bg-2 text-sd-text font-bold border-b border-sd-border">
                  <tr>
                    <th className="p-3">Statutory Section</th>
                    <th className="p-3">Violation Type</th>
                    <th className="p-3">Prescribed Penalty / Legal Consequences</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sd-border text-sd-muted">
                  <tr>
                    <td className="p-3 font-semibold text-sd-text">Section 5(4) & 5(5)</td>
                    <td className="p-3">Failure to apply for ERC or EC within 90 days</td>
                    <td className="p-3 text-red-600 font-bold">₹5 per day of continued default</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-sd-text">Section 9(2)</td>
                    <td className="p-3">Late monthly deposit beyond the 21st</td>
                    <td className="p-3 text-red-600 font-bold">Mandatory Simple Interest @ 1.0% per month (12% p.a.)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-sd-text">Section 6(3) & Rule 12</td>
                    <td className="p-3">Late Annual Return (Form III-A)</td>
                    <td className="p-3 text-red-600 font-bold">₹200 for 1st month + ₹100 per subsequent month</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-sd-text">Section 7</td>
                    <td className="p-3">Concealment of employees or incorrect salary reporting</td>
                    <td className="p-3 text-red-600 font-bold">Best-judgment assessment + up to 50% penalty (Sec 10)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-sd-text">Section 17</td>
                    <td className="p-3">Willful default or fraudulent false returns</td>
                    <td className="p-3 text-red-700 font-black">Cognizable offence: Simple imprisonment up to 6 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: FAQs */}
          <section className="space-y-4 mb-12">
            <h2 className="text-2xl font-black text-sd-text">
              4. Frequently Asked Questions by West Bengal Employers
            </h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, i) => (
                <div key={i} className="p-5 rounded-xl border border-sd-border bg-sd-bg-2">
                  <h3 className="text-sm font-bold text-sd-text mb-1.5">{faq.name}</h3>
                  <p className="text-xs text-sd-muted leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Direct CTA */}
          <div className="p-8 rounded-2xl bg-linear-to-r from-sd-dark to-[#1d1633] text-white text-center shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-black mb-3">
              Ensure 100% West Bengal Professional Tax Compliance
            </h2>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto mb-6">
              From our registered corporate headquarters in Barrackpore and Kolkata, Service Dial manages end-to-end PT deduction, GRIPS challan reconciliation, and Form III-A annual filings with zero defect guarantees.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="py-3 px-6 rounded-xl bg-sd-pink text-white font-bold text-xs uppercase tracking-wider hover:bg-sd-pink-dark transition-all"
              >
                Schedule West Bengal Compliance Audit →
              </Link>
              <Link
                href="/resources/west-bengal-labour-welfare-fund"
                className="py-3 px-6 rounded-xl bg-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-all border border-white/20"
              >
                View WB Labour Welfare Fund Rules
              </Link>
            </div>
            <p className="text-[11px] text-white/50 mt-4">
              Headquarters: 58 (30), S.N. Banerjee Road, Barrackpore, Kolkata 700120 · Phone: <a href="tel:+919330490777" className="text-white underline">+91 93304 90777</a>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
