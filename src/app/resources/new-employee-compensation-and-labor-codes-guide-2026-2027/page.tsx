import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PayrollFeeEstimator from "@/components/calculator/PayrollFeeEstimator";

export const metadata: Metadata = {
  title: "The Complete Employer Guide to India's New Employee Compensation & New Labor Codes (2026–2027)",
  description:
    "Authoritative employer master guide on the 2026–2027 Central Labour Codes, the EPFO wage ceiling hike to ₹25,000, 50% basic wage restructuring, and EPS Account 10 capping at ₹2,083.",
  keywords: [
    "The Complete Employer Guide to India's New Employee Compensation & New Labor Codes (2026–2027)",
    "EPFO wage ceiling hike 25000 CTC impact",
    "new labour codes employer guide 2026",
    "50 percent basic salary wage code compliance",
    "EPS capping revision 2083",
    "outsourced payroll processing services Kolkata",
    "statutory compliance management company India",
  ],
  alternates: {
    canonical: "https://servicedialtm.com/resources/new-employee-compensation-and-labor-codes-guide-2026-2027",
  },
  openGraph: {
    title: "Employer Guide: India's New Employee Compensation & Labour Codes (2026–2027)",
    description:
      "Strategic blueprint for CFOs and HR Heads: EPFO ₹25,000 wage ceiling, 50% allowances cap, and statutory payroll compliance.",
    url: "https://servicedialtm.com/resources/new-employee-compensation-and-labor-codes-guide-2026-2027",
    siteName: "Service Dial",
    type: "article",
  },
};

const spokes = [
  {
    title: "How the EPFO Wage Ceiling Increase to ₹25,000 Changes Your Monthly CTC Layouts",
    desc: "Detailed band-by-band CTC financial models, take-home salary adjustments, and employer contribution shifts from ₹15k to ₹25k.",
    href: "/resources/epfo-wage-ceiling-ctc-impact",
    badge: "CTC Impact Model",
  },
  {
    title: "EPS Account 10 Cap Re-capping: Step-by-Step Guide to Calculating the New Max ₹2,083 Statutory Contribution",
    desc: "Mathematical breakdown of the 8.33% diversion under Paragraph 3 of the EPS Scheme 1995, re-capping statutory pension from ₹1,250 to ₹2,083.",
    href: "/resources/eps-account-10-cap-calculation-2083",
    badge: "Pension Formulas",
  },
  {
    title: "Basic Salary vs Allowance Split: Re-architecting Payroll Under the 50% Allowances Cap Rule",
    desc: "Audit compliance blueprint under Section 2(y) of the Code on Wages: preventing non-compliance penalties on HRA, special allowance, and conveyance splits.",
    href: "/resources/basic-salary-allowance-split-50-percent-wage-code",
    badge: "Wage Code Audit",
  },
  {
    title: "Why In-House HRMS Fails New Labor Code Updates: The Value of Managing Compliance Manually",
    desc: "Why off-the-shelf software fails complex state-level labour inspectorate notices and how a dedicated Managed Services Provider ensures zero-penalty SLAs.",
    href: "/resources/why-in-house-hrms-fails-new-labor-codes",
    badge: "SaaS vs Managed",
  },
];

export default function LabourCodesMasterGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "The Complete Employer Guide to India's New Employee Compensation & New Labor Codes (2026–2027)",
    description:
      "Strategic master guide for CFOs and HR Heads on navigating the 2026–2027 Central Labour Codes, the EPFO wage ceiling hike from ₹15,000 to ₹25,000, and 50% Basic Wage structuring.",
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
    datePublished: "2026-10-01",
    dateModified: "2026-11-01",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "When does the enhanced EPFO wage ceiling from ₹15,000 to ₹25,000 take effect?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Ministry of Labour & Employment's revised framework applies to all establishments registered under the Employees' Provident Funds and Miscellaneous Provisions Act, 1952, establishing ₹25,000 per month as the new statutory threshold for mandatory coverage.",
        },
      },
      {
        "@type": "Question",
        name: "What is the 50% wage definition under the new Code on Wages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Section 2(y) of the Code on Wages, all excluded allowances (such as HRA, conveyance, and special allowances) cannot exceed 50% of the total remuneration. Any allowance amount in excess of 50% is automatically deemed as 'Wages' and added back to the basic salary for PF and gratuity computations.",
        },
      },
      {
        "@type": "Question",
        name: "How does the EPS pension cap shift from ₹1,250 to ₹2,083 per month?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Paragraph 3 of the Employees' Pension Scheme, 1995, 8.33% of the statutory wage limit is diverted from the employer's 12% PF share into EPS Account 10. At ₹15,000 the maximum was ₹1,250 (15,000 × 8.33%). At ₹25,000 the new maximum is ₹2,083 (25,000 × 8.33%).",
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
                label: "2026–2027 Labour Codes Master Guide",
                href: "/resources/new-employee-compensation-and-labor-codes-guide-2026-2027",
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
              <span>🏛️ Central Labour Ministry · Master Regulatory Pillar</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-sd-text tracking-tight mb-6 leading-tight">
              The Complete Employer Guide to India's New Employee Compensation & New Labor Codes (2026–2027)
            </h1>
            <p className="text-sd-muted text-base sm:text-lg leading-relaxed mb-6">
              A comprehensive executive directive for Chief Financial Officers, HR Directors, and General Counsels navigating the harmonized rollout of the <strong>Code on Wages</strong>, the <strong>Code on Social Security</strong>, the <strong>EPFO ₹25,000 statutory wage ceiling increase</strong>, and mandatory 50% basic wage restructuring across Indian enterprises.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-sd-muted border-t border-sd-border pt-4">
              <span>Published: <strong>October 2026</strong></span>
              <span>•</span>
              <span>Statutory Compliance SLA: <strong>Zero Penalties</strong></span>
              <span>•</span>
              <span>Prepared by: <strong>Service Dial Regulatory Research Desk</strong></span>
            </div>
          </div>

          {/* Quick Pillar Takeaways */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-slate-50 border border-sd-border">
              <span className="text-2xl font-black text-sd-pink block mb-1">₹25,000</span>
              <h3 className="text-sm font-bold text-sd-text mb-2">New Statutory EPFO Ceiling</h3>
              <p className="text-xs text-sd-muted leading-relaxed">
                Mandatory PF coverage extended to all employees earning up to ₹25,000 basic salary, eliminating the prior ₹15,000 threshold.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-sd-border">
              <span className="text-2xl font-black text-sd-pink block mb-1">50% Minimum</span>
              <h3 className="text-sm font-bold text-sd-text mb-2">Section 2(y) Wage Code Rule</h3>
              <p className="text-xs text-sd-muted leading-relaxed">
                Allowances (HRA, conveyance, special allowances) capped at 50% of total compensation. Any surplus is added back into Basic Pay.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-sd-border">
              <span className="text-2xl font-black text-sd-pink block mb-1">₹2,083 / mo</span>
              <h3 className="text-sm font-bold text-sd-text mb-2">EPS Account 10 Diversion</h3>
              <p className="text-xs text-sd-muted leading-relaxed">
                Employer pension allocation increases from ₹1,250 to ₹2,083 per month, significantly altering long-term corporate pension funding.
              </p>
            </div>
          </div>

          {/* Core Spoke Directory (Hub and Spoke Mesh) */}
          <section className="mb-16">
            <div className="border-b border-sd-border pb-4 mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-sd-pink block mb-1">
                Deep-Dive Technical Spokes
              </span>
              <h2 className="text-2xl font-black text-sd-text">
                Explore the 4 Specialized Compliance Workstreams
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
                    <span>Read Technical Analysis</span>
                    <span>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Comprehensive Master Analysis Content */}
          <section className="prose max-w-none text-sd-text space-y-8 mb-16">
            <div className="p-8 rounded-2xl bg-white border border-sd-border shadow-xs">
              <h2 className="text-xl font-bold mb-4 text-sd-text">
                1. Structural Convergence: Why the 2026–2027 Reforms Differ from Past Circulars
              </h2>
              <p className="text-sm text-sd-muted leading-relaxed mb-4">
                Historically, Indian statutory revisions occurred in isolation. An EPFO ceiling change was distinct from state Professional Tax schedules, and ESIC thresholds were adjusted independently of the Minimum Wages Act. The 2026–2027 transition represents the first time that the <strong>Code on Wages (2019)</strong> and the <strong>Code on Social Security (2020)</strong> have forced a unified mathematical realignment of salary structures nationwide.
              </p>
              <p className="text-sm text-sd-muted leading-relaxed">
                By standardizing the definition of "Wages" across all central acts, corporate employers can no longer split salary into 10–12 discretionary allowance components to artificially suppress PF contributions and gratuity liabilities.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-sd-border shadow-xs">
              <h2 className="text-xl font-bold mb-4 text-sd-text">
                2. Enterprise Employer Action Plan (Pre-Audit Handover Checklist)
              </h2>
              <ul className="space-y-3 text-xs text-sd-muted">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold text-base leading-none">✓</span>
                  <span><strong>Employee Master Audit:</strong> Identify all staff earning between ₹15,001 and ₹25,000 gross monthly pay who were previously coded as Excluded Employees and migrate them into mandatory PF contribution rosters.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold text-base leading-none">✓</span>
                  <span><strong>Allowance Ratio Restructuring:</strong> Ensure that the sum of HRA, conveyance, and special allowances does not exceed 50% of total compensation to prevent Section 2(y) retro-penalties.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold text-base leading-none">✓</span>
                  <span><strong>Bilateral Employment Contract Amendment:</strong> Issue revised annexures to employment letters explicitly establishing whether the enhanced 12% employer contribution is absorbed by the enterprise or re-calibrated within existing Cost to Company (CTC) packages.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold text-base leading-none">✓</span>
                  <span><strong>Third-Party Contractor Compliance:</strong> Demand statutory ECR verification from security, facility, and staffing vendors to ensure contract personnel are covered under the ₹25,000 threshold.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Embedded Interactive Fee Estimator & Lead Capture */}
          <section className="mb-16">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-sd-pink block mb-1">
                Instant Impact Modeling
              </span>
              <h2 className="text-2xl font-black text-sd-text tracking-tight mb-2">
                Simulate Your Managed Compliance & Payroll Retainer
              </h2>
              <p className="text-sd-muted text-xs sm:text-sm leading-relaxed">
                Model your exact per-employee-per-month (PEPM) outsourcing costs versus retaining an expensive in-house payroll department under the new 2026 statutory rules.
              </p>
            </div>
            <PayrollFeeEstimator />
          </section>

          {/* FAQ Section */}
          <section className="p-8 rounded-2xl bg-slate-50 border border-sd-border">
            <h2 className="text-xl font-bold mb-6 text-sd-text">
              Frequently Asked Questions: 2026–2027 Labour Codes & EPFO Ceiling
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-sd-text mb-1">
                  Can an employee earning ₹22,000 voluntarily opt out of EPFO?
                </h3>
                <p className="text-xs text-sd-muted leading-relaxed">
                  No. Under Paragraph 2(f) of the EPF Scheme, 1952, when the statutory wage limit is set to ₹25,000, any employee earning up to ₹25,000 basic wages is mandatorily covered by statutory law. Neither the employer nor the employee possesses legal discretion to opt out.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-sd-text mb-1">
                  How does the 50% wage limit affect Gratuity liability?
                </h3>
                <p className="text-xs text-sd-muted leading-relaxed">
                  Because gratuity under the Payment of Gratuity Act is calculated strictly on last drawn Basic Pay plus Dearness Allowance (DA), restructuring compensation so that Basic Pay equals at least 50% of gross salary will increase future gratuity provisioning by 15% to 30% across corporate balance sheets.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-sd-text mb-1">
                  Why should an enterprise partner with a managed services firm instead of relying solely on HR software?
                </h3>
                <p className="text-xs text-sd-muted leading-relaxed">
                  Software merely automates mathematical formulas; it does not represent your enterprise during Labour Inspectorate hearings, cannot defend against show-cause notices, and does not conduct vendor audit reconciliations. Service Dial provides end-to-end legal and operational indemnity.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
