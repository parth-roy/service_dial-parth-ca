import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PayrollFeeEstimator from "@/components/calculator/PayrollFeeEstimator";

export const metadata: Metadata = {
  title: "Basic Salary vs Allowance Split: Re-architecting Payroll Under the 50% Allowances Cap Rule | Service Dial",
  description:
    "Authoritative guide on Section 2(y) of the Code on Wages. Re-architect salary structures to comply with the 50% allowances cap rule, avoid retro-penalties, and optimize corporate PF and gratuity liabilities.",
  keywords: [
    "Basic Salary vs Allowance Split: Re-architecting Payroll Under the 50% Allowances Cap Rule",
    "50 percent basic salary wage code compliance",
    "Section 2 y Code on Wages definition",
    "allowance cap rule 50 percent India",
    "salary restructuring new labour codes",
    "outsourced payroll processing services Kolkata",
    "statutory compliance management company India",
  ],
  alternates: {
    canonical: "https://servicedialtm.com/resources/basic-salary-allowance-split-50-percent-wage-code",
  },
  openGraph: {
    title: "Basic Salary vs Allowance Split: Re-architecting Payroll Under the 50% Cap Rule",
    description:
      "Statutory compliance guide for CFOs: navigating Section 2(y) of the Code on Wages, allowance exclusion limits, and deemed wage formulas.",
    url: "https://servicedialtm.com/resources/basic-salary-allowance-split-50-percent-wage-code",
    siteName: "Service Dial",
    type: "article",
  },
};

export default function BasicSalaryAllowanceSplitPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Basic Salary vs Allowance Split: Re-architecting Payroll Under the 50% Allowances Cap Rule",
    description:
      "In-depth legal and payroll advisory on Section 2(y) of India's Code on Wages, explaining how the 50% allowance limitation transforms executive compensation packages and social security provisions.",
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
    datePublished: "2026-10-07",
    dateModified: "2026-11-01",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What happens if allowances exceed 50% of the employee's total remuneration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the Proviso to Section 2(y) of the Code on Wages, if the aggregate of specified excluded allowances exceeds 50% of the total monthly compensation, the exact excess amount is automatically deemed to be 'Wages' and must be added back to the basic salary base for calculating PF, ESIC, and Gratuity.",
        },
      },
      {
        "@type": "Question",
        name: "Which allowances are subject to the 50% exclusion calculation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Exclusions under Section 2(y) include House Rent Allowance (HRA), statutory bonuses, conveyance allowance, traveling concessions, special allowance reimbursements, and employer pension/PF contributions. Overtime allowance is also excluded from the wage definition.",
        },
      },
      {
        "@type": "Question",
        name: "How does the 50% rule impact corporate Gratuity provisioning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Because Gratuity under Section 53 of the Code on Social Security is calculated strictly as (15 * Last Drawn Wages * Tenure) / 26, inflating the basic wage base to at least 50% of CTC increases the employer's actuarial gratuity liability by 20% to 35% on corporate balance sheets.",
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
                label: "50% Basic Salary vs Allowance Split",
                href: "/resources/basic-salary-allowance-split-50-percent-wage-code",
              },
            ]}
          />
        </div>
      </div>

      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-4xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold mb-4">
              <span>⚖️ Statutory Legislative Analysis · Section 2(y)</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-sd-text tracking-tight mb-6 leading-tight">
              Basic Salary vs Allowance Split: Re-architecting Payroll Under the 50% Allowances Cap Rule
            </h1>
            <p className="text-sd-muted text-base sm:text-lg leading-relaxed mb-6">
              For decades, Indian corporate payroll architectures minimized employer statutory liabilities by suppressing Basic Pay to 20%–30% of total Cost to Company (CTC) and dispersing the remainder across arbitrary allowances. <strong>Section 2(y) of the Code on Wages (2019)</strong> eliminates this loophole permanently with a mandatory <strong>50% allowances cap</strong>.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-sd-muted border-t border-sd-border pt-4">
              <span>Parent Hub: <Link href="/resources/new-employee-compensation-and-labor-codes-guide-2026-2027" className="font-bold text-sd-pink hover:underline">2026–2027 Labour Codes Guide</Link></span>
              <span>•</span>
              <span>Enforcement Standard: <strong>Section 2(y), Code on Wages (2019)</strong></span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-white border border-sd-border shadow-xs">
              <span className="text-xs uppercase font-bold text-sd-muted block mb-1">Mandatory Floor</span>
              <span className="text-2xl font-black text-sd-pink block">≥ 50% Basic Pay</span>
              <p className="text-xs text-sd-muted mt-2 leading-relaxed">
                Basic Pay plus DA and Retaining Allowance must represent at least half of the total monthly compensation package.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-sd-border shadow-xs">
              <span className="text-xs uppercase font-bold text-sd-muted block mb-1">Allowances Ceiling</span>
              <span className="text-2xl font-black text-sd-text block">≤ 50% Exclusions</span>
              <p className="text-xs text-sd-muted mt-2 leading-relaxed">
                HRA, conveyance, special allowance, and bonuses cannot collectively exceed 50% without triggering deemed wage recalculations.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-sd-border shadow-xs">
              <span className="text-xs uppercase font-bold text-emerald-600 block mb-1">Deemed Wage Trigger</span>
              <span className="text-2xl font-black text-emerald-600 block">100% Excess Add-Back</span>
              <p className="text-xs text-sd-muted mt-2 leading-relaxed">
                Any rupee allocated to allowances in excess of the 50% threshold is reclassified into statutory basic wages for PF and gratuity.
              </p>
            </div>
          </div>

          {/* Real-World Case Study: Legacy vs Re-Architected Pay Structure */}
          <section className="mb-16">
            <div className="border-b border-sd-border pb-4 mb-6">
              <h2 className="text-2xl font-black text-sd-text">
                Comparative Blueprint: ₹60,000 Monthly CTC Package
              </h2>
              <p className="text-xs sm:text-sm text-sd-muted mt-1">
                Visualizing how an executive salary package changes under compliant Section 2(y) re-architecting.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-sd-border bg-white shadow-xs mb-8">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 border-b border-sd-border text-sd-text font-bold">
                  <tr>
                    <th className="p-4">Salary Component</th>
                    <th className="p-4">Legacy Structure (Non-Compliant)</th>
                    <th className="p-4">Compliant Structure (50% Rule)</th>
                    <th className="p-4">Statutory Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sd-border">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-sd-text">Basic Salary</td>
                    <td className="p-4">₹18,000 (30%)</td>
                    <td className="p-4 font-bold text-emerald-700">₹30,000 (50%)</td>
                    <td className="p-4 text-xs text-sd-muted">Must be at least 50% of gross pay</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-sd-text">House Rent Allowance (HRA)</td>
                    <td className="p-4">₹12,000 (20%)</td>
                    <td className="p-4">₹12,000 (20%)</td>
                    <td className="p-4 text-xs text-sd-muted">Permissible exclusion under 2(y)(k)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-sd-text">Conveyance Allowance</td>
                    <td className="p-4">₹6,000 (10%)</td>
                    <td className="p-4">₹4,000 (6.7%)</td>
                    <td className="p-4 text-xs text-sd-muted">Excluded up to actual business travel costs</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-sd-text">Special Allowance</td>
                    <td className="p-4">₹24,000 (40%)</td>
                    <td className="p-4">₹14,000 (23.3%)</td>
                    <td className="p-4 text-xs text-sd-muted">Reduced to prevent exceeding the 50% total exclusion pool</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 bg-slate-50 font-bold">
                    <td className="p-4 text-sd-text">Total Monthly Gross</td>
                    <td className="p-4">₹60,000</td>
                    <td className="p-4">₹60,000</td>
                    <td className="p-4 text-xs text-sd-muted">Total CTC remains identical</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 bg-amber-50/50">
                    <td className="p-4 font-bold text-sd-text">Employee PF Deduction (12%)</td>
                    <td className="p-4">₹1,800 (Capped at legacy ₹15k)</td>
                    <td className="p-4 font-bold text-sd-pink">₹3,000 (Capped at new ₹25k)</td>
                    <td className="p-4 text-xs text-sd-muted">Calculated on ₹25k ceiling or deemed wage</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 bg-rose-50/50">
                    <td className="p-4 font-bold text-sd-text">Net Monthly In-Hand Salary</td>
                    <td className="p-4">₹58,200</td>
                    <td className="p-4 font-bold text-rose-700">₹57,000</td>
                    <td className="p-4 text-xs text-sd-muted">₹1,200 shifted from cash in-hand to PF retirement corpus</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* The Deemed Wages Calculation Formula */}
          <section className="mb-16">
            <div className="border-b border-sd-border pb-4 mb-6">
              <h2 className="text-2xl font-black text-sd-text">
                The Statutory Deemed Wages Formula under Section 2(y)
              </h2>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-sd-border shadow-xs space-y-6">
              <div className="font-mono text-xs sm:text-sm bg-slate-900 text-slate-100 p-5 rounded-xl leading-relaxed">
                Total Remuneration (TR) = Basic + DA + All Excluded Allowances<br /><br />
                Exclusion Pool (EP) = HRA + Conveyance + Special Allowance + Bonus<br /><br />
                Max Permissible Exclusions = 0.50 × TR<br /><br />
                If EP &gt; Max Permissible Exclusions:<br />
                &nbsp;&nbsp;Excess Amount = EP - (0.50 × TR)<br />
                &nbsp;&nbsp;Deemed Wages for PF/Gratuity = Basic + DA + Excess Amount
              </div>
              <p className="text-xs sm:text-sm text-sd-muted leading-relaxed">
                If an organization fails to restructure contracts voluntarily, labour compliance auditors and EPFO enforcement officers apply this formula retroactively during audits, demanding compounding arrears with damages under Section 14B and penal interest under Section 7Q of the EPF Act.
              </p>
            </div>
          </section>

          {/* Sibling Spokes Linking Mesh */}
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
                href="/resources/eps-account-10-cap-calculation-2083"
                className="p-4 rounded-xl bg-white border border-sd-border hover:border-sd-pink transition-all group"
              >
                <span className="text-[11px] font-bold text-sd-pink block mb-1">Pension Analysis →</span>
                <span className="text-xs font-bold text-sd-text group-hover:text-sd-pink">
                  EPS Account 10 Cap Re-capping: Max ₹2,083 Formula
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
                Zero-Defect Salary Restructuring
              </span>
              <h2 className="text-2xl font-black text-sd-text tracking-tight mb-2">
                Simulate Managed Payroll Restructuring
              </h2>
              <p className="text-sd-muted text-xs sm:text-sm leading-relaxed">
                Protect your enterprise from Section 2(y) non-compliance liabilities. Partner with Service Dial for turnkey salary restructuring and ECR reconciliation.
              </p>
            </div>
            <PayrollFeeEstimator />
          </section>

          {/* Quick FAQ */}
          <section className="p-8 rounded-2xl bg-white border border-sd-border shadow-xs">
            <h2 className="text-xl font-bold mb-6 text-sd-text">
              Frequently Asked Questions: 50% Allowance Cap Rule
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-sd-text mb-1">
                  What happens if allowances exceed 50% of the employee's total remuneration?
                </h3>
                <p className="text-xs text-sd-muted leading-relaxed">
                  Under the Proviso to Section 2(y) of the Code on Wages, if the aggregate of specified excluded allowances exceeds 50% of the total monthly compensation, the exact excess amount is automatically deemed to be "Wages" and must be added back to the basic salary base for calculating PF, ESIC, and Gratuity.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-sd-text mb-1">
                  Which allowances are subject to the 50% exclusion calculation?
                </h3>
                <p className="text-xs text-sd-muted leading-relaxed">
                  Exclusions under Section 2(y) include House Rent Allowance (HRA), statutory bonuses, conveyance allowance, traveling concessions, special allowance reimbursements, and employer pension/PF contributions. Overtime allowance is also excluded from the wage definition.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-sd-text mb-1">
                  How does the 50% rule impact corporate Gratuity provisioning?
                </h3>
                <p className="text-xs text-sd-muted leading-relaxed">
                  Because Gratuity under Section 53 of the Code on Social Security is calculated strictly as (15 * Last Drawn Wages * Tenure) / 26, inflating the basic wage base to at least 50% of CTC increases the employer's actuarial gratuity liability by 20% to 35% on corporate balance sheets.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
