import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PayrollFeeEstimator from "@/components/calculator/PayrollFeeEstimator";

export const metadata: Metadata = {
  title: "The Master Directory of West Bengal Labor Laws, Professional Taxes, and Welfare Remittances (2026–2027)",
  description:
    "Authoritative employer directory for West Bengal labour compliance. Act VI of 1979 Professional Tax slabs, Form III-A annual returns, WBLWF biannual Form D filings, and CLRA staffing regulations.",
  keywords: [
    "The Master Directory of West Bengal Labor Laws, Professional Taxes, and Welfare Remittances (2026–2027)",
    "West Bengal professional tax slabs 2026",
    "Form III-A annual returns West Bengal PT",
    "WB Labour Welfare Fund Form D filing dates",
    "CLRA licensed flexi-staffing companies Kolkata",
    "outsourced payroll processing services Kolkata",
    "statutory compliance management company India",
  ],
  alternates: {
    canonical: "https://servicedialtm.com/resources/west-bengal-labor-laws-professional-tax-and-welfare-remittances-directory",
  },
  openGraph: {
    title: "Master Directory: West Bengal Labor Laws, PT & Welfare Remittances",
    description:
      "Enterprise compliance directory for Kolkata and West Bengal employers: PT slabs, GRIPS portal reconciliation, LWF Form D schedules, and CLRA staffing rules.",
    url: "https://servicedialtm.com/resources/west-bengal-labor-laws-professional-tax-and-welfare-remittances-directory",
    siteName: "Service Dial",
    type: "article",
  },
};

const spokes = [
  {
    title: "Understanding West Bengal Act VI of 1979: Professional Tax Slabs, Gross Pay Exemptions & February Spike",
    desc: "Complete schedule breakdown: ₹20,000 gross pay threshold exemptions, monthly tax brackets, and the unique ₹300 February deduction adjustment.",
    href: "/resources/understanding-act-vi-1979-west-bengal-pt-slabs",
    badge: "Act VI of 1979 Slabs",
  },
  {
    title: "Form III-A Annual Returns Guide: West Bengal Professional Tax PTRC vs PTEC Reconciliation",
    desc: "Step-by-step instructions for filing Form III-A by April 30th on the GRIPS portal, distinguishing between Certificate of Enrolment (PTEC) and Registration (PTRC).",
    href: "/resources/form-iii-a-annual-returns-west-bengal-pt",
    badge: "Form III-A & GRIPS",
  },
  {
    title: "Bi-Annual West Bengal Labour Welfare Fund (WBLWF) Compliance Checklist & Form D Filing Dates",
    desc: "Mandatory July 15 and January 15 statutory deadlines, ₹3 employee / ₹30 employer contribution rules, and Form D online remittance protocol.",
    href: "/resources/checklist-bi-annual-west-bengal-labour-welfare-fund",
    badge: "WBLWF Checklist",
  },
  {
    title: "Deciphering Section 9 of the West Bengal Labour Welfare Fund Act: Legal Employer Deduction Rules",
    desc: "Strict statutory prohibitions against recovering employer contributions from employee wages, audit liabilities, and Section 14 penalty clauses.",
    href: "/resources/deciphering-section-9-wblwf-act-employer-deduction-rules",
    badge: "Section 9 Legal Bar",
  },
  {
    title: "Contract Labour Regulation & Abolition (CLRA) in West Bengal: Sourcing Blue-Collar to CXO Mandates",
    desc: "How enterprises in Sector V Salt Lake, Rajarhat, and industrial corridors manage Form XII contractor licenses and eliminate Principal Employer liabilities.",
    href: "/resources/sourcing-blue-collar-cxo-mandates-west-bengal-clra-guidelines",
    badge: "CLRA & Staffing",
  },
];

export default function WestBengalMasterDirectoryPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "The Master Directory of West Bengal Labor Laws, Professional Taxes, and Welfare Remittances (2026–2027)",
    description:
      "Enterprise directory on West Bengal statutory labor compliance: Act VI of 1979 PT slabs, GRIPS portal Form III-A e-filing, bi-annual Labour Welfare Fund Form D remittances, and CLRA vendor audit protocols.",
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
    datePublished: "2026-10-10",
    dateModified: "2026-11-01",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the core state-specific statutory registrations required for an office in West Bengal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Any establishment employing staff in West Bengal must hold: (1) Professional Tax Registration Certificate (PTRC) for employer wage deductions, (2) Professional Tax Enrolment Certificate (PTEC) for the corporate entity, (3) Registration under the West Bengal Shops & Establishments Act, 1963, and (4) Account setup under the West Bengal Labour Welfare Fund Act, 1974.",
        },
      },
      {
        "@type": "Question",
        name: "Why does West Bengal Professional Tax deduction increase to ₹300 in February?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Article 276(2) of the Constitution of India caps maximum annual Professional Tax at ₹2,500. Under the highest West Bengal PT slab (gross pay exceeding ₹40,000), ₹200 is deducted monthly for 11 months (₹2,200), and ₹300 is deducted in February to reach the exact ₹2,500 annual statutory ceiling.",
        },
      },
      {
        "@type": "Question",
        name: "When are West Bengal Labour Welfare Fund (WBLWF) returns due each year?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Contributions and Form D returns must be remitted bi-annually: on or before July 15th for the six-month period ending June 30th, and on or before January 15th for the six-month period ending December 31st.",
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
            ]}
          />
        </div>
      </div>

      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-4xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold mb-4">
              <span>🏛️ State Regulatory Authority · West Bengal Master Pillar</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-sd-text tracking-tight mb-6 leading-tight">
              The Master Directory of West Bengal Labor Laws, Professional Taxes, and Welfare Remittances (2026–2027)
            </h1>
            <p className="text-sd-muted text-base sm:text-lg leading-relaxed mb-6">
              The authoritative operational index for business founders, legal counsels, and human resources heads operating across Kolkata, Sector V, Rajarhat, and greater West Bengal. This directory consolidates <strong>West Bengal Act VI of 1979 (Professional Tax)</strong>, the <strong>West Bengal Labour Welfare Fund Act (1974)</strong>, and <strong>CLRA flexi-staffing statutory mandates</strong> into an actionable compliance roadmap.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-sd-muted border-t border-sd-border pt-4">
              <span>Jurisdiction: <strong>Government of West Bengal</strong></span>
              <span>•</span>
              <span>Portals: <strong>GRIPS 2.0 &amp; WB Labour Online Portal</strong></span>
              <span>•</span>
              <span>Headquarters: <strong>Kolkata, WB</strong></span>
            </div>
          </div>

          {/* Quick Pillar Takeaways */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-slate-50 border border-sd-border">
              <span className="text-2xl font-black text-sd-pink block mb-1">₹2,500 Cap</span>
              <h3 className="text-sm font-bold text-sd-text mb-2">Annual Professional Tax Max</h3>
              <p className="text-xs text-sd-muted leading-relaxed">
                Regulated under West Bengal Act VI of 1979 schedule. Monthly brackets of ₹110, ₹130, ₹150, and ₹200 with an annual February ₹300 spike.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-sd-border">
              <span className="text-2xl font-black text-sd-pink block mb-1">Bi-Annual</span>
              <h3 className="text-sm font-bold text-sd-text mb-2">WBLWF Form D Remittances</h3>
              <p className="text-xs text-sd-muted leading-relaxed">
                Mandatory semi-annual remittances (July 15 and January 15) for every employee on the muster roll, subject to strict Section 9 employer absorption.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-sd-border">
              <span className="text-2xl font-black text-sd-pink block mb-1">Form XII / XVI</span>
              <h3 className="text-sm font-bold text-sd-text mb-2">CLRA Vendor Licensing</h3>
              <p className="text-xs text-sd-muted leading-relaxed">
                Principal employers must mandate valid contractor licenses and audit monthly statutory ECR receipts to eliminate Section 21(4) joint liability.
              </p>
            </div>
          </div>

          {/* Core Spoke Directory */}
          <section className="mb-16">
            <div className="border-b border-sd-border pb-4 mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-sd-pink block mb-1">
                Deep-Dive State Regulatory Spokes
              </span>
              <h2 className="text-2xl font-black text-sd-text">
                Explore the 5 Specialized West Bengal Compliance Guides
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {spokes.map((spoke) => (
                <Link
                  key={spoke.href}
                  href={spoke.href}
                  className="p-6 rounded-2xl border border-sd-border bg-white hover:border-sd-pink/40 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-sd-pink/10 text-sd-pink inline-block mb-3">
                      {spoke.badge}
                    </span>
                    <h3 className="text-base font-bold text-sd-text mb-2 group-hover:text-sd-pink transition-colors">
                      {spoke.title}
                    </h3>
                    <p className="text-xs text-sd-muted leading-relaxed mb-4">
                      {spoke.desc}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-sd-pink flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Read Technical Directive</span>
                    <span>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Statutory Overview */}
          <section className="prose max-w-none text-sd-text space-y-8 mb-16">
            <div className="p-8 rounded-2xl bg-white border border-sd-border shadow-xs">
              <h2 className="text-xl font-bold mb-4 text-sd-text">
                1. Navigating West Bengal's Dual Institutional Hierarchy
              </h2>
              <p className="text-sm text-sd-muted leading-relaxed mb-4">
                Unlike single-window states, compliance in West Bengal requires coordinating with two separate government wings: the <strong>Directorate of Commercial Taxes (Finance Department)</strong> for Professional Tax collection via GRIPS 2.0, and the <strong>Labour Commissionerate (Labour Department)</strong> for Shops &amp; Establishments, CLRA, and Labour Welfare Fund operations.
              </p>
              <p className="text-sm text-sd-muted leading-relaxed">
                Failure to maintain synchronicity between employee headcounts declared on Form III-A (PT) and Form D (WBLWF) is the number one cause of automated statutory inquiry notices issued by state audit officers.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-sd-border shadow-xs">
              <h2 className="text-xl font-bold mb-4 text-sd-text">
                2. Enterprise West Bengal Statutory Calendar
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-50 border-b border-sd-border font-bold">
                    <tr>
                      <th className="p-3">Statutory Act</th>
                      <th className="p-3">Return / Remittance</th>
                      <th className="p-3">Statutory Deadline</th>
                      <th className="p-3">Submission Channel</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sd-border">
                    <tr>
                      <td className="p-3 font-semibold">WB PT Act VI of 1979</td>
                      <td className="p-3">Monthly PTRC Challan</td>
                      <td className="p-3">21st of following month</td>
                      <td className="p-3">GRIPS Portal (wbptax.gov.in)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">WB PT Act VI of 1979</td>
                      <td className="p-3">Form III-A Annual Return</td>
                      <td className="p-3">April 30th annually</td>
                      <td className="p-3">Directorate of Commercial Taxes</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">WB Labour Welfare Fund</td>
                      <td className="p-3">Form D (Jan–Jun Period)</td>
                      <td className="p-3">July 15th</td>
                      <td className="p-3">WB Labour Welfare Board Portal</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">WB Labour Welfare Fund</td>
                      <td className="p-3">Form D (Jul–Dec Period)</td>
                      <td className="p-3">January 15th</td>
                      <td className="p-3">WB Labour Welfare Board Portal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Interactive Calculator Section */}
          <section className="mb-16">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-sd-pink block mb-1">
                Kolkata &amp; WB Operations
              </span>
              <h2 className="text-2xl font-black text-sd-text tracking-tight mb-2">
                Estimate Managed West Bengal Statutory Retainers
              </h2>
              <p className="text-sd-muted text-xs sm:text-sm leading-relaxed">
                Service Dial is headquartered in Kolkata and provides end-to-end statutory representation, challan generation, and audit support across West Bengal.
              </p>
            </div>
            <PayrollFeeEstimator />
          </section>

          {/* Quick FAQ */}
          <section className="p-8 rounded-2xl bg-slate-50 border border-sd-border">
            <h2 className="text-xl font-bold mb-6 text-sd-text">
              Frequently Asked Questions: West Bengal Regulatory Compliance
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-sd-text mb-1">
                  What are the core state-specific statutory registrations required for an office in West Bengal?
                </h3>
                <p className="text-xs text-sd-muted leading-relaxed">
                  Any establishment employing staff in West Bengal must hold: (1) Professional Tax Registration Certificate (PTRC) for employer wage deductions, (2) Professional Tax Enrolment Certificate (PTEC) for the corporate entity, (3) Registration under the West Bengal Shops &amp; Establishments Act, 1963, and (4) Account setup under the West Bengal Labour Welfare Fund Act, 1974.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-sd-text mb-1">
                  Why does West Bengal Professional Tax deduction increase to ₹300 in February?
                </h3>
                <p className="text-xs text-sd-muted leading-relaxed">
                  Article 276(2) of the Constitution of India caps maximum annual Professional Tax at ₹2,500. Under the highest West Bengal PT slab (gross pay exceeding ₹40,000), ₹200 is deducted monthly for 11 months (₹2,200), and ₹300 is deducted in February to reach the exact ₹2,500 annual statutory ceiling.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-sd-text mb-1">
                  When are West Bengal Labour Welfare Fund (WBLWF) returns due each year?
                </h3>
                <p className="text-xs text-sd-muted leading-relaxed">
                  Contributions and Form D returns must be remitted bi-annually: on or before July 15th for the six-month period ending June 30th, and on or before January 15th for the six-month period ending December 31st.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
