import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PayrollFeeEstimator from "@/components/calculator/PayrollFeeEstimator";

export const metadata: Metadata = {
  title: "EPS Account 10 Cap Re-capping: Step-by-Step Guide to Calculating the New Max ₹2,083 Statutory Contribution | Service Dial",
  description:
    "Authoritative mathematical guide for payroll teams on calculating the ₹2,083 EPS Account 10 pension diversion under the revised ₹25,000 wage ceiling. Form 3A, ECR generation, and 8.33% statutory splitting.",
  keywords: [
    "EPS Account 10 Cap Re-capping: Step-by-Step Guide to Calculating the New Max ₹2,083 Statutory Contribution",
    "EPS capping revision 2083",
    "EPS 95 8.33 percent calculation",
    "EPF account 1 vs account 10 allocation",
    "maximum statutory pension contribution India",
    "outsourced payroll processing services Kolkata",
    "statutory compliance management company India",
  ],
  alternates: {
    canonical: "https://servicedialtm.com/resources/eps-account-10-cap-calculation-2083",
  },
  openGraph: {
    title: "EPS Account 10 Cap Re-capping: Step-by-Step Calculation Guide to ₹2,083",
    description:
      "Exact mathematical breakdown of employer pension diversion: how the shift from ₹1,250 to ₹2,083 impacts Account 1 and Account 10 ledgers.",
    url: "https://servicedialtm.com/resources/eps-account-10-cap-calculation-2083",
    siteName: "Service Dial",
    type: "article",
  },
};

export default function EpsAccount10CapCalculationPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "EPS Account 10 Cap Re-capping: Step-by-Step Guide to Calculating the New Max ₹2,083 Statutory Contribution",
    description:
      "Comprehensive technical instructions for Indian payroll administrators on calculating the revised ₹2,083 monthly maximum diversion into Employees' Pension Scheme (EPS) Account 10.",
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
    datePublished: "2026-10-06",
    dateModified: "2026-11-01",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How is the ₹2,083 EPS ceiling calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Paragraph 3(2) of the Employees' Pension Scheme, 1995, the employer diverts 8.33% of the employee's monthly pay (capped at the statutory ceiling) into the pension fund. At the ₹25,000 threshold: ₹25,000 × 8.3333% = ₹2,083.33, rounded by EPFO ECR rules to ₹2,083.",
        },
      },
      {
        "@type": "Question",
        name: "What happens to the remaining 3.67% of the employer's 12% PF contribution?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The residual 3.67% is credited to EPF Account 1 (Provident Fund). On a ₹25,000 basic wage, the employer's total 12% contribution is ₹3,000. Deducting the ₹2,083 EPS allocation leaves exactly ₹917 per month for Account 1.",
        },
      },
      {
        "@type": "Question",
        name: "Does an employee over 58 years of age have contributions diverted to EPS Account 10?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Under EPS Scheme provisions, pension membership ceases when an employee attains 58 years of age. For employees aged 58 and above, the entire 12% employer contribution (₹3,000) is deposited into EPF Account 1 with zero diversion to EPS Account 10.",
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
                label: "Labour Codes Master Guide",
                href: "/resources/new-employee-compensation-and-labor-codes-guide-2026-2027",
              },
              {
                label: "EPS Account 10 Cap Calculation",
                href: "/resources/eps-account-10-cap-calculation-2083",
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
              <span>🏛️ Statutory Pension Analysis · Act Paragraph 3</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-sd-text tracking-tight mb-6 leading-tight">
              EPS Account 10 Cap Re-capping: Step-by-Step Guide to Calculating the New Max ₹2,083 Statutory Contribution
            </h1>
            <p className="text-sd-muted text-base sm:text-lg leading-relaxed mb-6">
              A precise technical handbook for Indian payroll accountants and compliance leads detailing the legal mechanics of <strong>Employees' Pension Scheme (EPS) 1995 Account 10</strong> allocations under the revised <strong>₹25,000 monthly wage ceiling</strong>, preventing Electronic Challan cum Return (ECR) rejection errors on the Unified Shram Suvidha and EPFO Unified Member portals.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-sd-muted border-t border-sd-border pt-4">
              <span>Parent Hub: <Link href="/resources/new-employee-compensation-and-labor-codes-guide-2026-2027" className="font-bold text-sd-pink hover:underline">2026–2027 Labour Codes Guide</Link></span>
              <span>•</span>
              <span>Statutory Regulation: <strong>Paragraph 3, EPS-1995</strong></span>
            </div>
          </div>

          {/* Core Mathematical Proof Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-white border border-sd-border shadow-xs">
              <span className="text-xs uppercase font-bold text-sd-muted block mb-1">Legacy Cap (₹15,000)</span>
              <span className="text-2xl font-black text-sd-text block">₹1,250 / mo</span>
              <p className="text-xs text-sd-muted mt-2 leading-relaxed">
                Formula: ₹15,000 × 8.3333% = ₹1,250 statutory cap under notification G.S.R. 609(E).
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-sd-border shadow-xs">
              <span className="text-xs uppercase font-bold text-sd-pink block mb-1">New Cap (₹25,000)</span>
              <span className="text-2xl font-black text-sd-pink block">₹2,083 / mo</span>
              <p className="text-xs text-sd-muted mt-2 leading-relaxed">
                Formula: ₹25,000 × 8.3333% = ₹2,083.33 (rounded to nearest Rupee per ECR schema).
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-sd-border shadow-xs">
              <span className="text-xs uppercase font-bold text-emerald-600 block mb-1">EPF Account 1 Residual</span>
              <span className="text-2xl font-black text-emerald-600 block">₹917 / mo</span>
              <p className="text-xs text-sd-muted mt-2 leading-relaxed">
                Formula: Total Employer 12% (₹3,000) minus EPS Account 10 (₹2,083) = ₹917 (3.67%).
              </p>
            </div>
          </div>

          {/* Step-by-Step Ledger Allocation Algorithm */}
          <section className="mb-16">
            <div className="border-b border-sd-border pb-4 mb-6">
              <h2 className="text-2xl font-black text-sd-text">
                Step-by-Step Monthly ECR Ledger Allocation Protocol
              </h2>
              <p className="text-xs sm:text-sm text-sd-muted mt-1">
                Algorithm implemented in certified payroll software and managed outsourcing desks.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-slate-50 border border-sd-border">
                <span className="text-xs font-bold text-sd-pink uppercase tracking-wider block mb-1">Step 1</span>
                <h3 className="text-base font-bold text-sd-text mb-2">Determine Eligible Pension Wages</h3>
                <p className="text-xs sm:text-sm text-sd-muted leading-relaxed">
                  Evaluate the employee's monthly Basic Pay + Dearness Allowance (DA). Cap the calculation wage at ₹25,000. If the employee earns ₹40,000 basic, the wage subject to statutory EPS capping is capped at ₹25,000 unless a joint option under the Supreme Court ruling for higher pension is in force.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-sd-border">
                <span className="text-xs font-bold text-sd-pink uppercase tracking-wider block mb-1">Step 2</span>
                <h3 className="text-base font-bold text-sd-text mb-2">Verify Age & Scheme Eligibility</h3>
                <p className="text-xs sm:text-sm text-sd-muted leading-relaxed">
                  Cross-verify employee date of birth against Aadhaar KYC. If age is 58 years or greater, divert <strong>0% to EPS Account 10</strong>. The full 12% goes directly to EPF Account 1.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-sd-border">
                <span className="text-xs font-bold text-sd-pink uppercase tracking-wider block mb-1">Step 3</span>
                <h3 className="text-base font-bold text-sd-text mb-2">Split the Employer's 12% Contribution</h3>
                <p className="text-xs sm:text-sm text-sd-muted leading-relaxed">
                  Apply the 8.33% statutory factor to Account 10 (capped at ₹2,083). Deduct this figure from the total employer 12% obligation to establish the exact credit for Account 1.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-sd-border">
                <span className="text-xs font-bold text-sd-pink uppercase tracking-wider block mb-1">Step 4</span>
                <h3 className="text-base font-bold text-sd-text mb-2">Compute EDLI (Account 21) & Admin Charges (Account 2)</h3>
                <p className="text-xs sm:text-sm text-sd-muted leading-relaxed">
                  Employees' Deposit Linked Insurance (EDLI) at 0.50% (₹125) and EPFO Admin Charges at 0.50% (₹125) must be computed on the statutory limit, subject to minimum monthly admin payment thresholds (₹500 minimum for non-functional accounts, ₹75 for functional).
                </p>
              </div>
            </div>
          </section>

          {/* Comparative Allocation Matrix */}
          <section className="mb-16">
            <div className="border-b border-sd-border pb-4 mb-6">
              <h2 className="text-2xl font-black text-sd-text">
                Employer Cost Matrix Across Key Basic Wage Levels
              </h2>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-sd-border bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 border-b border-sd-border text-sd-text font-bold">
                  <tr>
                    <th className="p-4">Monthly Basic Wage</th>
                    <th className="p-4">EPF Employee (12%)</th>
                    <th className="p-4">Employer EPS (8.33%)</th>
                    <th className="p-4">Employer EPF (3.67%)</th>
                    <th className="p-4">EDLI (0.5%)</th>
                    <th className="p-4">Admin (0.5%)</th>
                    <th className="p-4">Total Remittance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sd-border">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-sd-text">₹15,000</td>
                    <td className="p-4">₹1,800</td>
                    <td className="p-4">₹1,250</td>
                    <td className="p-4">₹550</td>
                    <td className="p-4">₹75</td>
                    <td className="p-4">₹75</td>
                    <td className="p-4 font-bold text-sd-text">₹3,750 / mo</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 bg-emerald-50/20">
                    <td className="p-4 font-bold text-sd-text">₹20,000</td>
                    <td className="p-4">₹2,400</td>
                    <td className="p-4">₹1,666</td>
                    <td className="p-4">₹734</td>
                    <td className="p-4">₹100</td>
                    <td className="p-4">₹100</td>
                    <td className="p-4 font-bold text-sd-text">₹5,000 / mo</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 bg-emerald-50/40">
                    <td className="p-4 font-bold text-sd-text">₹25,000 (New Cap)</td>
                    <td className="p-4 font-bold text-sd-pink">₹3,000</td>
                    <td className="p-4 font-bold text-sd-pink">₹2,083</td>
                    <td className="p-4 font-bold text-sd-pink">₹917</td>
                    <td className="p-4">₹125</td>
                    <td className="p-4">₹125</td>
                    <td className="p-4 font-bold text-sd-pink">₹6,250 / mo</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-sd-text">₹40,000 (Above Cap)</td>
                    <td className="p-4">₹3,000 (Capped)</td>
                    <td className="p-4">₹2,083 (Capped)</td>
                    <td className="p-4">₹917 (Capped)</td>
                    <td className="p-4">₹125</td>
                    <td className="p-4">₹125</td>
                    <td className="p-4 font-bold text-sd-text">₹6,250 / mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Internal Linking Mesh */}
          <section className="mb-16 p-8 rounded-2xl bg-slate-50 border border-sd-border">
            <h3 className="text-lg font-bold text-sd-text mb-4">
              Explore Related Central Labour Code & Payroll Spokes
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/resources/epfo-wage-ceiling-ctc-impact"
                className="p-4 rounded-xl bg-white border border-sd-border hover:border-sd-pink transition-all group"
              >
                <span className="text-[11px] font-bold text-sd-pink block mb-1">CTC Impact →</span>
                <span className="text-xs font-bold text-sd-text group-hover:text-sd-pink">
                  How EPFO ₹25,000 Wage Ceiling Changes Monthly CTC
                </span>
              </Link>
              <Link
                href="/resources/basic-salary-allowance-split-50-percent-wage-code"
                className="p-4 rounded-xl bg-white border border-sd-border hover:border-sd-pink transition-all group"
              >
                <span className="text-[11px] font-bold text-sd-pink block mb-1">Allowances Cap →</span>
                <span className="text-xs font-bold text-sd-text group-hover:text-sd-pink">
                  50% Basic Salary vs Allowance Split Rules
                </span>
              </Link>
              <Link
                href="/resources/why-in-house-hrms-fails-new-labor-codes"
                className="p-4 rounded-xl bg-white border border-sd-border hover:border-sd-pink transition-all group"
              >
                <span className="text-[11px] font-bold text-sd-pink block mb-1">SaaS vs Managed →</span>
                <span className="text-xs font-bold text-sd-text group-hover:text-sd-pink">
                  Why In-House HRMS Fails New Labor Code Updates
                </span>
              </Link>
            </div>
          </section>

          {/* Interactive Calculator Section */}
          <section className="mb-16">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-sd-pink block mb-1">
                Managed Outsourcing Efficiency
              </span>
              <h2 className="text-2xl font-black text-sd-text tracking-tight mb-2">
                Outsource Statutory PF & EPS Account Reconciliation
              </h2>
              <p className="text-sd-muted text-xs sm:text-sm leading-relaxed">
                Ensure zero notices from the Central Labour Inspectorate. Model your predictable per-employee-per-month (PEPM) SLA retainer with Service Dial.
              </p>
            </div>
            <PayrollFeeEstimator />
          </section>

          {/* Quick FAQ */}
          <section className="p-8 rounded-2xl bg-white border border-sd-border shadow-xs">
            <h2 className="text-xl font-bold mb-6 text-sd-text">
              Frequently Asked Questions: EPS Account 10 Re-Capping
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-sd-text mb-1">
                  How is the ₹2,083 EPS ceiling calculated?
                </h3>
                <p className="text-xs text-sd-muted leading-relaxed">
                  Under Paragraph 3(2) of the Employees' Pension Scheme, 1995, the employer diverts 8.33% of the employee's monthly pay (capped at the statutory ceiling) into the pension fund. At the ₹25,000 threshold: ₹25,000 × 8.3333% = ₹2,083.33, rounded by EPFO ECR rules to ₹2,083.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-sd-text mb-1">
                  What happens to the remaining 3.67% of the employer's 12% PF contribution?
                </h3>
                <p className="text-xs text-sd-muted leading-relaxed">
                  The residual 3.67% is credited to EPF Account 1 (Provident Fund). On a ₹25,000 basic wage, the employer's total 12% contribution is ₹3,000. Deducting the ₹2,083 EPS allocation leaves exactly ₹917 per month for Account 1.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-sd-text mb-1">
                  Does an employee over 58 years of age have contributions diverted to EPS Account 10?
                </h3>
                <p className="text-xs text-sd-muted leading-relaxed">
                  No. Under EPS Scheme provisions, pension membership ceases when an employee attains 58 years of age. For employees aged 58 and above, the entire 12% employer contribution (₹3,000) is deposited into EPF Account 1 with zero diversion to EPS Account 10.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
