import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Statutory Labour Law, Payroll & Regulatory Resource Hub",
  description:
    "Authoritative Indian statutory compliance resource directory for CFOs and HR Heads. Comprehensive guides on Central Labour Codes, EPFO ₹25k wage ceilings, West Bengal Professional Tax slabs, WBLWF Form D, DPDP Act 2023, and financial BPO governance.",
  alternates: {
    canonical: "https://servicedialtm.com/resources",
  },
  openGraph: {
    title: "Statutory Labour Law, Payroll & Regulatory Resource Hub | Service Dial",
    description:
      "Enterprise compliance intelligence: Central Labour Codes, West Bengal PT & Welfare Fund, DPDP Act data privacy, and managed payroll outsourcing guides.",
    url: "https://servicedialtm.com/resources",
    siteName: "Service Dial",
    type: "website",
  },
};

const pillarHubs = [
  {
    title: "The Complete Employer Guide to India's New Employee Compensation & New Labor Codes (2026–2027)",
    description:
      "Executive master pillar covering the harmonized rollout of the Code on Wages, the Code on Social Security, the EPFO ₹25,000 statutory wage ceiling increase, and mandatory 50% basic wage restructuring across Indian enterprises.",
    href: "/resources/new-employee-compensation-and-labor-codes-guide-2026-2027",
    badge: "🏛️ Central Labour Codes Master Pillar",
    spokesCount: "4 Technical Workstreams",
    spokes: [
      {
        name: "EPFO ₹25,000 Ceiling Monthly CTC Impact Models",
        href: "/resources/epfo-wage-ceiling-ctc-impact",
      },
      {
        name: "EPS Account 10 Cap Re-capping: Max ₹2,083 Formula",
        href: "/resources/eps-account-10-cap-calculation-2083",
      },
      {
        name: "Basic Salary vs Allowance Split: 50% Rule Audit",
        href: "/resources/basic-salary-allowance-split-50-percent-wage-code",
      },
      {
        name: "Why In-House HRMS Fails New Labor Code Updates",
        href: "/resources/why-in-house-hrms-fails-new-labor-codes",
      },
    ],
  },
  {
    title: "The Master Directory of West Bengal Labor Laws, Professional Taxes, and Welfare Remittances (2026–2027)",
    description:
      "The authoritative operational index for business founders, legal counsels, and HR heads operating across Kolkata, Sector V, Rajarhat, and greater West Bengal under Act VI of 1979 and the WBLWF Act.",
    href: "/resources/west-bengal-labor-laws-professional-tax-and-welfare-remittances-directory",
    badge: "🏛️ West Bengal Regulatory Master Pillar",
    spokesCount: "5 State Regulatory Guides",
    spokes: [
      {
        name: "Understanding Act VI of 1979: PT Slabs & February Spike",
        href: "/resources/understanding-act-vi-1979-west-bengal-pt-slabs",
      },
      {
        name: "Form III-A Annual Returns & GRIPS Reconciliation",
        href: "/resources/form-iii-a-annual-returns-west-bengal-pt",
      },
      {
        name: "Bi-Annual WBLWF Compliance & Form D Due Dates",
        href: "/resources/checklist-bi-annual-west-bengal-labour-welfare-fund",
      },
      {
        name: "Deciphering Section 9: Employer Deduction Rules",
        href: "/resources/deciphering-section-9-wblwf-act-employer-deduction-rules",
      },
      {
        name: "West Bengal CLRA Guidelines: Blue-Collar to CXO",
        href: "/resources/sourcing-blue-collar-cxo-mandates-west-bengal-clra-guidelines",
      },
    ],
  },
  {
    title: "Enterprise Financial Risk & Manpower Outsourcing: The Digital Compliance Handbook (2026–2027)",
    description:
      "CFO master blueprint for corporate data privacy under Section 8 of the DPDP Act 2023, Total Cost of Ownership (TCO) financial modeling vs SaaS, quarterly Form 24Q TDS compliance, and mid-office Accounts Payable BPO controls.",
    href: "/resources/enterprise-financial-risk-and-manpower-outsourcing-handbook",
    badge: "💼 Corporate Finance & BPO Master Pillar",
    spokesCount: "4 Financial Risk Workstreams",
    spokes: [
      {
        name: "DPDP Act Section 8 Compliant Payroll & Staffing",
        href: "/resources/dpdp-act-section-8-third-party-staffing-payroll-data-compliance",
      },
      {
        name: "Payroll Software vs Managed Outsourcing: TCO & PEPM",
        href: "/resources/payroll-software-vs-managed-payroll-outsourcing-tco-pepm",
      },
      {
        name: "Quarterly TDS on Salary (Form 24Q) & Form 16 Guide",
        href: "/resources/error-free-tds-salary-form-24q-e-filing-form-16",
      },
      {
        name: "Structuring Bilateral NDAs for AP & R2R BPO Automation",
        href: "/resources/structuring-bilateral-nda-accounts-payable-record-to-report-bpo",
      },
    ],
  },
];

export default function ResourcesIndexPage() {
  return (
    <>
      <div className="bg-sd-bg-2 border-b border-sd-border py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Regulatory Resources", href: "/resources" },
            ]}
          />
        </div>
      </div>

      <main className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-4xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-sd-pink block mb-2">
              Statutory Advisory &amp; Technical Regulatory Intelligence
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-sd-text tracking-tight mb-4 leading-tight">
              Labour Law, Payroll &amp; Regulatory Resource Hub
            </h1>
            <p className="text-sd-muted text-base sm:text-lg leading-relaxed">
              Timely, authoritative, and legally verified intelligence on evolving Indian statutory frameworks. Designed to assist Chief Financial Officers, Compliance Directors, General Counsels, and HR leaders in mitigating regulatory risks, preventing show-cause notices, and eliminating financial penalties.
            </p>
          </div>

          {/* Master Pillar Hubs */}
          <section className="mb-16">
            <div className="border-b border-sd-border pb-4 mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-sd-pink block mb-1">
                Core Knowledge Architectures
              </span>
              <h2 className="text-2xl font-black text-sd-text">
                The 3 Master Regulatory Pillars
              </h2>
            </div>

            <div className="space-y-8">
              {pillarHubs.map((pillar) => (
                <div
                  key={pillar.href}
                  className="p-8 rounded-3xl border border-sd-border bg-white shadow-xs hover:border-sd-pink/40 hover:shadow-md transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-sd-text">
                      {pillar.badge}
                    </span>
                    <span className="text-xs font-semibold text-sd-pink">
                      {pillar.spokesCount}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-sd-text mb-3 leading-snug">
                    <Link href={pillar.href} className="hover:text-sd-pink transition-colors">
                      {pillar.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-sd-muted leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="border-t border-sd-border pt-5">
                    <span className="text-[11px] uppercase font-bold text-sd-muted block mb-3">
                      Specialized Spoke Directives in this Cluster:
                    </span>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
                      {pillar.spokes.map((spoke) => (
                        <Link
                          key={spoke.href}
                          href={spoke.href}
                          className="p-3 rounded-xl bg-slate-50 hover:bg-sd-pink/5 border border-sd-border hover:border-sd-pink/30 transition-all text-xs font-semibold text-sd-text hover:text-sd-pink flex items-center justify-between gap-2 group"
                        >
                          <span className="line-clamp-2">{spoke.name}</span>
                          <span className="shrink-0 text-sd-pink group-hover:translate-x-0.5 transition-transform">→</span>
                        </Link>
                      ))}
                    </div>

                    <Link
                      href={pillar.href}
                      className="inline-flex items-center gap-2 text-xs font-bold text-sd-pink hover:text-sd-pink-dark transition-colors"
                    >
                      <span>Explore Master Pillar Guide</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Interactive Calculator Section */}
          <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sd-pink block mb-1">
                Interactive Compliance Tool
              </span>
              <h3 className="text-xl sm:text-2xl font-black mb-2">
                Payroll &amp; Statutory Compliance Fee Estimator
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                Simulate your outsourced payroll retainer based on active employee counts and statutory modules including EPFO, ESIC, and West Bengal Professional Tax.
              </p>
            </div>
            <Link
              href="/tools/payroll-fee-estimator"
              className="shrink-0 py-3.5 px-6 rounded-xl bg-sd-pink text-white font-bold text-xs uppercase tracking-wider hover:bg-sd-pink-dark transition-all shadow-md"
            >
              Open Fee Estimator →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
