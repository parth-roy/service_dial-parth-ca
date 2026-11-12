import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PayrollFeeEstimator from "@/components/calculator/PayrollFeeEstimator";

export const metadata: Metadata = {
  title: "Bi-Annual West Bengal Labour Welfare Fund (WBLWF) Compliance Checklist & Form D Filing Dates",
  description:
    "Statutory checklist for West Bengal Labour Welfare Fund (WBLWF) compliance. Mandatory July 15 & January 15 Form D filing dates, ₹3 employee / ₹30 employer contribution rules, and penalty mitigation.",
  keywords: [
    "Bi-Annual West Bengal Labour Welfare Fund (WBLWF) Compliance Checklist & Form D Filing Dates",
    "WB Labour Welfare Fund Form D filing dates",
    "West Bengal labour welfare fund contribution rates",
    "WBLWF July 15 and January 15 deadlines",
    "Form D return filing online West Bengal",
    "outsourced payroll processing services Kolkata",
    "statutory compliance management company India",
  ],
  alternates: {
    canonical: "https://servicedialtm.com/resources/checklist-bi-annual-west-bengal-labour-welfare-fund",
  },
  openGraph: {
    title: "Bi-Annual West Bengal Labour Welfare Fund (WBLWF) Checklist & Form D",
    description:
      "Statutory compliance roadmap for employers in West Bengal: contribution schedules, June/December payroll deductions, and online Form D filing.",
    url: "https://servicedialtm.com/resources/checklist-bi-annual-west-bengal-labour-welfare-fund",
    siteName: "Service Dial",
    type: "article",
  },
};

export default function ChecklistWbLabourWelfareFundPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Bi-Annual West Bengal Labour Welfare Fund (WBLWF) Compliance Checklist & Form D Filing Dates",
    description:
      "A complete employer compliance handbook detailing the bi-annual deduction and filing protocols under the West Bengal Labour Welfare Fund Act, 1974.",
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
    datePublished: "2026-10-13",
    dateModified: "2026-11-01",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the exact statutory deadlines for filing Form D in West Bengal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WBLWF returns in Form D must be submitted bi-annually: on or before July 15th for the half-year ending June 30th, and on or before January 15th for the half-year ending December 31st.",
        },
      },
      {
        "@type": "Question",
        name: "What are the mandatory contribution rates for the West Bengal Labour Welfare Fund?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The employee contribution is ₹3 per half-year (deducted from wages in June and December). The employer contribution is ₹30 per employee per half-year. Total statutory remittance to the Board equals ₹33 per employee every six months.",
        },
      },
      {
        "@type": "Question",
        name: "Does the West Bengal Labour Welfare Fund apply to IT/ITeS companies in Salt Lake Sector V?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All commercial establishments registered under the West Bengal Shops & Establishments Act, 1963 employing five or more persons, including IT and software development firms in Salt Lake and New Town, are covered under the WBLWF Act, 1974.",
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
                label: "WBLWF Compliance Checklist",
                href: "/resources/checklist-bi-annual-west-bengal-labour-welfare-fund",
              },
            ]}
          />
        </div>
      </div>

      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-4xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-4">
              <span>📅 State Statutory Checklist · West Bengal Labour Welfare Board</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-sd-text tracking-tight mb-6 leading-tight">
              Bi-Annual West Bengal Labour Welfare Fund (WBLWF) Compliance Checklist & Form D Filing Dates
            </h1>
            <p className="text-sd-muted text-base sm:text-lg leading-relaxed mb-6">
              The <strong>West Bengal Labour Welfare Fund Act, 1974</strong> mandates semi-annual contributions and statutory return filings in <strong>Form D</strong>. This compliance checklist provides payroll and legal teams with an operational roadmap for meeting the strict <strong>July 15</strong> and <strong>January 15</strong> statutory cutoffs, ensuring zero interest penalties.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-sd-muted border-t border-sd-border pt-4">
              <span>Parent Hub: <Link href="/resources/west-bengal-labor-laws-professional-tax-and-welfare-remittances-directory" className="font-bold text-sd-pink hover:underline">West Bengal Master Directory</Link></span>
              <span>•</span>
              <span>Regulatory Body: <strong>West Bengal Labour Welfare Board</strong></span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-white border border-sd-border shadow-xs">
              <span className="text-xs uppercase font-bold text-sd-muted block mb-1">Employee Deduction</span>
              <span className="text-2xl font-black text-sd-text block">₹3 / Half-Year</span>
              <p className="text-xs text-sd-muted mt-2 leading-relaxed">
                Deducted from June and December payroll salaries for each employee on the register.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-sd-border shadow-xs">
              <span className="text-xs uppercase font-bold text-sd-pink block mb-1">Employer Contribution</span>
              <span className="text-2xl font-black text-sd-pink block">₹30 / Half-Year</span>
              <p className="text-xs text-sd-muted mt-2 leading-relaxed">
                Paid directly by the employer from company accounts; cannot be deducted from staff.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-sd-border shadow-xs">
              <span className="text-xs uppercase font-bold text-emerald-600 block mb-1">Total Bi-Annual Pool</span>
              <span className="text-2xl font-black text-emerald-600 block">₹33 / Employee</span>
              <p className="text-xs text-sd-muted mt-2 leading-relaxed">
                Remitted electronically with Form D to the West Bengal Labour Welfare Board.
              </p>
            </div>
          </div>

          {/* Bi-Annual Compliance Timeline */}
          <section className="mb-16">
            <div className="border-b border-sd-border pb-4 mb-6">
              <h2 className="text-2xl font-black text-sd-text">
                The Bi-Annual Remittance &amp; Filing Calendar
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-sd-border">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">Half-Year 1 (Jan 1 – Jun 30)</span>
                <h3 className="text-lg font-bold text-sd-text mb-3">July 15 Statutory Filing Cutoff</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-sd-muted">
                  <li>• <strong>June Payroll:</strong> Deduct ₹3 from the June salary of all active employees.</li>
                  <li>• <strong>Employer Ledger:</strong> Provision ₹30 per employee from company corporate expenses.</li>
                  <li>• <strong>Challan &amp; Return:</strong> Deposit ₹33 per employee and file Form D on the WB Labour Welfare Board portal on or before <strong>July 15</strong>.</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-sd-border">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-1">Half-Year 2 (Jul 1 – Dec 31)</span>
                <h3 className="text-lg font-bold text-sd-text mb-3">January 15 Statutory Filing Cutoff</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-sd-muted">
                  <li>• <strong>December Payroll:</strong> Deduct ₹3 from the December salary of all active employees.</li>
                  <li>• <strong>Employer Ledger:</strong> Provision ₹30 per employee from corporate expenses.</li>
                  <li>• <strong>Challan &amp; Return:</strong> Deposit ₹33 per employee and file Form D on the portal on or before <strong>January 15</strong>.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Step-by-Step Compliance Checklist */}
          <section className="mb-16">
            <div className="border-b border-sd-border pb-4 mb-6">
              <h2 className="text-2xl font-black text-sd-text">
                Pre-Filing Compliance Checklist for Corporate Employers
              </h2>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-sd-border shadow-xs space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold text-base leading-none">✓</span>
                <div>
                  <h3 className="text-sm font-bold text-sd-text">Muster Roll Reconciliation</h3>
                  <p className="text-xs text-sd-muted mt-1 leading-relaxed">
                    Verify the exact employee headcount on June 30 and December 31 respectively. Include permanent, probationer, and flexi-staff personnel on company rolls.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold text-base leading-none">✓</span>
                <div>
                  <h3 className="text-sm font-bold text-sd-text">Strict Compliance with Section 9</h3>
                  <p className="text-xs text-sd-muted mt-1 leading-relaxed">
                    Ensure that the employer's ₹30 contribution has NOT been deducted from employee wages or offset against CTC allowances. Section 9 strictly bars employee recovery.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold text-base leading-none">✓</span>
                <div>
                  <h3 className="text-sm font-bold text-sd-text">Unpaid Accumulations Transfer</h3>
                  <p className="text-xs text-sd-muted mt-1 leading-relaxed">
                    Under Section 3, all unpaid employee wages, unclaimed bonuses, or gratuities remaining unclaimed for more than three years must also be remitted to the Welfare Fund.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold text-base leading-none">✓</span>
                <div>
                  <h3 className="text-sm font-bold text-sd-text">Electronic Challan Generation &amp; Archival</h3>
                  <p className="text-xs text-sd-muted mt-1 leading-relaxed">
                    Generate the bank remittance receipt and digitally stamped Form D confirmation. Retain digital records for a minimum of 5 years for Labour Inspectorate review.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sibling Spokes Linking Mesh */}
          <section className="mb-16 p-8 rounded-2xl bg-slate-50 border border-sd-border">
            <h3 className="text-lg font-bold text-sd-text mb-4">
              Explore Related West Bengal Regulatory Guides
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/resources/understanding-act-vi-1979-west-bengal-pt-slabs"
                className="p-4 rounded-xl bg-white border border-sd-border hover:border-sd-pink transition-all group"
              >
                <span className="text-[11px] font-bold text-sd-pink block mb-1">PT Slabs →</span>
                <span className="text-xs font-bold text-sd-text group-hover:text-sd-pink">
                  West Bengal PT Slabs &amp; February Spike
                </span>
              </Link>
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
                href="/resources/deciphering-section-9-wblwf-act-employer-deduction-rules"
                className="p-4 rounded-xl bg-white border border-sd-border hover:border-sd-pink transition-all group"
              >
                <span className="text-[11px] font-bold text-sd-pink block mb-1">Employer Bar →</span>
                <span className="text-xs font-bold text-sd-text group-hover:text-sd-pink">
                  Deciphering Section 9: Employer Deduction Rules
                </span>
              </Link>
            </div>
          </section>

          {/* Interactive Calculator Section */}
          <section className="mb-16">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-sd-pink block mb-1">
                Zero-Defect Welfare Filings
              </span>
              <h2 className="text-2xl font-black text-sd-text tracking-tight mb-2">
                Outsource WBLWF &amp; State Statutory Retainers
              </h2>
              <p className="text-sd-muted text-xs sm:text-sm leading-relaxed">
                Never miss a July 15 or January 15 statutory deadline. Service Dial guarantees 100% on-time filings and statutory indemnity for West Bengal enterprises.
              </p>
            </div>
            <PayrollFeeEstimator />
          </section>

          {/* Quick FAQ */}
          <section className="p-8 rounded-2xl bg-white border border-sd-border shadow-xs">
            <h2 className="text-xl font-bold mb-6 text-sd-text">
              Frequently Asked Questions: WBLWF Compliance
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-sd-text mb-1">
                  What are the exact statutory deadlines for filing Form D in West Bengal?
                </h3>
                <p className="text-xs text-sd-muted leading-relaxed">
                  WBLWF returns in Form D must be submitted bi-annually: on or before July 15th for the half-year ending June 30th, and on or before January 15th for the half-year ending December 31st.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-sd-text mb-1">
                  What are the mandatory contribution rates for the West Bengal Labour Welfare Fund?
                </h3>
                <p className="text-xs text-sd-muted leading-relaxed">
                  The employee contribution is ₹3 per half-year (deducted from wages in June and December). The employer contribution is ₹30 per employee per half-year. Total statutory remittance to the Board equals ₹33 per employee every six months.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-sd-text mb-1">
                  Does the West Bengal Labour Welfare Fund apply to IT/ITeS companies in Salt Lake Sector V?
                </h3>
                <p className="text-xs text-sd-muted leading-relaxed">
                  Yes. All commercial establishments registered under the West Bengal Shops &amp; Establishments Act, 1963 employing five or more persons, including IT and software development firms in Salt Lake and New Town, are covered under the WBLWF Act, 1974.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
