import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PayrollFeeEstimator from "@/components/calculator/PayrollFeeEstimator";

export const metadata: Metadata = {
  title: "Form III-A Annual Returns Guide: West Bengal Professional Tax PTRC vs PTEC Reconciliation | Service Dial",
  description:
    "Comprehensive compliance guide for filing Form III-A Professional Tax annual returns in West Bengal. Reconcile monthly GRIPS challans, understand PTRC vs PTEC distinctions, and avoid late filing penalties.",
  keywords: [
    "Form III-A Annual Returns Guide: West Bengal Professional Tax PTRC vs PTEC Reconciliation",
    "Form III-A annual returns West Bengal PT",
    "PTRC vs PTEC difference West Bengal",
    "GRIPS portal PT return reconciliation",
    "WB professional tax annual return due date April 30",
    "outsourced payroll processing services Kolkata",
    "statutory compliance management company India",
  ],
  alternates: {
    canonical: "https://servicedialtm.com/resources/form-iii-a-annual-returns-west-bengal-pt",
  },
  openGraph: {
    title: "Form III-A Annual Returns: West Bengal Professional Tax PTRC vs PTEC",
    description:
      "Operational handbook for employers in Kolkata and West Bengal on filing Form III-A by April 30th and reconciling GRIPS portal challans.",
    url: "https://servicedialtm.com/resources/form-iii-a-annual-returns-west-bengal-pt",
    siteName: "Service Dial",
    type: "article",
  },
};

export default function FormIiiAAnnualReturnsPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Form III-A Annual Returns Guide: West Bengal Professional Tax PTRC vs PTEC Reconciliation",
    description:
      "A technical walkthrough for corporate finance and HR teams on preparing, auditing, and submitting Form III-A annual returns under the West Bengal Professional Tax Rules, 1979.",
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
    datePublished: "2026-10-12",
    dateModified: "2026-11-01",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the statutory deadline for filing Form III-A in West Bengal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Rule 12 of the West Bengal State Tax on Professions, Trades, Callings and Employments Rules, 1979, the statutory annual return in Form III-A must be filed on or before April 30th immediately succeeding the end of the financial year.",
        },
      },
      {
        "@type": "Question",
        name: "What is the fundamental legal difference between PTRC and PTEC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PTRC (Certificate of Registration) is held by an employer to deduct and remit Professional Tax from employees' salaries. PTEC (Certificate of Enrolment) is held by the business entity itself to pay annual professional tax on its corporate legal existence, irrespective of whether it employs staff.",
        },
      },
      {
        "@type": "Question",
        name: "What documents are required to reconcile Form III-A on the GRIPS portal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Reconciliation requires: (1) 12 monthly GRIPS challans with Government Reference Numbers (GRN), (2) Monthly salary registers showing gross pay and PT deducted, (3) Employee master roster reflecting joiners and leavers, and (4) Bank payment debit advices.",
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
                label: "Form III-A Annual Returns",
                href: "/resources/form-iii-a-annual-returns-west-bengal-pt",
              },
            ]}
          />
        </div>
      </div>

      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-4xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-4">
              <span>📋 Directorate of Commercial Taxes · Form III-A Master Guide</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-sd-text tracking-tight mb-6 leading-tight">
              Form III-A Annual Returns Guide: West Bengal Professional Tax PTRC vs PTEC Reconciliation
            </h1>
            <p className="text-sd-muted text-base sm:text-lg leading-relaxed mb-6">
              Filing the annual return in <strong>Form III-A</strong> under <strong>Rule 12 of the West Bengal Professional Tax Rules, 1979</strong> is a mandatory obligation for every corporate employer registered in the state. This comprehensive operational blueprint details the submission process on the <strong>GRIPS 2.0 portal</strong>, explains the critical distinctions between <strong>PTRC and PTEC</strong>, and provides an end-of-year audit checklist to eliminate penalty exposure.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-sd-muted border-t border-sd-border pt-4">
              <span>Parent Hub: <Link href="/resources/west-bengal-labor-laws-professional-tax-and-welfare-remittances-directory" className="font-bold text-sd-pink hover:underline">West Bengal Master Directory</Link></span>
              <span>•</span>
              <span>Statutory Due Date: <strong>April 30th Annually</strong></span>
            </div>
          </div>

          {/* PTRC vs PTEC Breakdown */}
          <section className="mb-16">
            <div className="border-b border-sd-border pb-4 mb-6">
              <h2 className="text-2xl font-black text-sd-text">
                PTRC vs PTEC: The Dual Registration Architecture
              </h2>
              <p className="text-xs sm:text-sm text-sd-muted mt-1">
                Both certificates are legally mandatory for operating companies in West Bengal.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-sd-border shadow-xs">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">Deductor Certificate</span>
                <h3 className="text-lg font-bold text-sd-text mb-3">PTRC (Certificate of Registration)</h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-sd-muted leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Legal Scope:</strong> Required for employers who employ salaried staff in West Bengal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Payment Cadence:</strong> Monthly challan remittance on or before the 21st of the succeeding month via GRIPS.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Annual Filing:</strong> Subject to mandatory Form III-A annual reconciliation by April 30th.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-sd-border shadow-xs">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-1">Corporate Entity Certificate</span>
                <h3 className="text-lg font-bold text-sd-text mb-3">PTEC (Certificate of Enrolment)</h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-sd-muted leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Legal Scope:</strong> Levied directly on the corporate entity, LLPs, partnerships, and directors.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Payment Cadence:</strong> Remitted annually on or before July 31st of each financial year.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Tax Amount:</strong> Fixed corporate statutory tariff (typically ₹2,500 per annum).</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Form III-A Reconciliation Workflow */}
          <section className="mb-16">
            <div className="border-b border-sd-border pb-4 mb-6">
              <h2 className="text-2xl font-black text-sd-text">
                4-Stage Form III-A GRIPS Reconciliation Protocol
              </h2>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-slate-50 border border-sd-border">
                <span className="text-xs font-bold text-sd-pink uppercase tracking-wider block mb-1">Stage 1</span>
                <h3 className="text-base font-bold text-sd-text mb-2">Compile 12-Month Payroll Gross Ledgers</h3>
                <p className="text-xs sm:text-sm text-sd-muted leading-relaxed">
                  Aggregate monthly payroll data from April to March. Categorize employee counts into respective PT gross wage brackets (&lt;₹10,000, ₹10k–15k, ₹15k–20k, ₹20k–40k, and &gt;₹40,000) for every single calendar month.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-sd-border">
                <span className="text-xs font-bold text-sd-pink uppercase tracking-wider block mb-1">Stage 2</span>
                <h3 className="text-base font-bold text-sd-text mb-2">Cross-Verify GRIPS Bank Challan GRNs</h3>
                <p className="text-xs sm:text-sm text-sd-muted leading-relaxed">
                  Extract all 12 Government Reference Numbers (GRN) from the West Bengal GRIPS portal. Verify that challans were credited under Head of Account <code>0028-00-107-OTHER EXPENDITURE-001-TAXES ON PROFESSIONS</code>.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-sd-border">
                <span className="text-xs font-bold text-sd-pink uppercase tracking-wider block mb-1">Stage 3</span>
                <h3 className="text-base font-bold text-sd-text mb-2">Verify February ₹300 Spike Parity</h3>
                <p className="text-xs sm:text-sm text-sd-muted leading-relaxed">
                  Ensure the February payroll reflected the mandatory ₹300 deduction for staff in the &gt;₹40,000 slab. If under-deducted, calculate the deficit and remit an adjustment challan before generating the final return file.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-sd-border">
                <span className="text-xs font-bold text-sd-pink uppercase tracking-wider block mb-1">Stage 4</span>
                <h3 className="text-base font-bold text-sd-text mb-2">Submit Electronically &amp; Archive Acknowledgment</h3>
                <p className="text-xs sm:text-sm text-sd-muted leading-relaxed">
                  Upload Form III-A through the Directorate of Commercial Taxes portal (wbptax.gov.in). Generate and archive the digitally stamped Form III-A acknowledgment slip for statutory audit defense.
                </p>
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
                <span className="text-[11px] font-bold text-sd-pink block mb-1">Slabs Guide →</span>
                <span className="text-xs font-bold text-sd-text group-hover:text-sd-pink">
                  West Bengal PT Slabs &amp; February Spike
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
                Zero-Defect Returns Filing
              </span>
              <h2 className="text-2xl font-black text-sd-text tracking-tight mb-2">
                Outsource Form III-A &amp; State PT Filing
              </h2>
              <p className="text-sd-muted text-xs sm:text-sm leading-relaxed">
                Service Dial manages monthly GRIPS remittances and turnkey Form III-A reconciliations for hundreds of enterprises across West Bengal.
              </p>
            </div>
            <PayrollFeeEstimator />
          </section>

          {/* Quick FAQ */}
          <section className="p-8 rounded-2xl bg-white border border-sd-border shadow-xs">
            <h2 className="text-xl font-bold mb-6 text-sd-text">
              Frequently Asked Questions: Form III-A Returns
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-sd-text mb-1">
                  What is the statutory deadline for filing Form III-A in West Bengal?
                </h3>
                <p className="text-xs text-sd-muted leading-relaxed">
                  Under Rule 12 of the West Bengal State Tax on Professions, Trades, Callings and Employments Rules, 1979, the statutory annual return in Form III-A must be filed on or before April 30th immediately succeeding the end of the financial year.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-sd-text mb-1">
                  What is the fundamental legal difference between PTRC and PTEC?
                </h3>
                <p className="text-xs text-sd-muted leading-relaxed">
                  PTRC (Certificate of Registration) is held by an employer to deduct and remit Professional Tax from employees' salaries. PTEC (Certificate of Enrolment) is held by the business entity itself to pay annual professional tax on its corporate legal existence, irrespective of whether it employs staff.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-sd-text mb-1">
                  What documents are required to reconcile Form III-A on the GRIPS portal?
                </h3>
                <p className="text-xs text-sd-muted leading-relaxed">
                  Reconciliation requires: (1) 12 monthly GRIPS challans with Government Reference Numbers (GRN), (2) Monthly salary registers showing gross pay and PT deducted, (3) Employee master roster reflecting joiners and leavers, and (4) Bank payment debit advices.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
