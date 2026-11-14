import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

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
    title: "India's New Employee Compensation & New Labor Codes Guide (2026–2027)",
    description:
      "Executive master pillar covering the harmonized rollout of the Code on Wages, the Code on Social Security, the EPFO ₹25,000 statutory wage ceiling increase, and mandatory 50% basic wage restructuring across Indian enterprises.",
    href: "/resources/new-employee-compensation-and-labor-codes-guide-2026-2027",
    badge: "Central Labour Codes Master Pillar",
    codeTag: "MoLE S.O. 5109(E)",
    spokesCount: "4 Technical Workstreams",
    accentColor: "from-[#b80f68] to-[#2e0d82]",
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
    title: "Master Directory of West Bengal Labor Laws, Professional Taxes & Welfare Remittances",
    description:
      "The authoritative operational index for business founders, legal counsels, and HR heads operating across Kolkata, Sector V, Rajarhat, and greater West Bengal under Act VI of 1979 and the WBLWF Act.",
    href: "/resources/west-bengal-labor-laws-professional-tax-and-welfare-remittances-directory",
    badge: "West Bengal Regulatory Master Pillar",
    codeTag: "WB Act VI of 1979 & WBLWF",
    spokesCount: "5 State Regulatory Guides",
    accentColor: "from-[#2e0d82] to-[#01adf7]",
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
    title: "Enterprise Financial Risk & Manpower Outsourcing: The Digital Compliance Handbook",
    description:
      "CFO master blueprint for corporate data privacy under Section 8 of the DPDP Act 2023, Total Cost of Ownership (TCO) financial modeling vs SaaS, quarterly Form 24Q TDS compliance, and mid-office Accounts Payable BPO controls.",
    href: "/resources/enterprise-financial-risk-and-manpower-outsourcing-handbook",
    badge: "Corporate Finance & BPO Master Pillar",
    codeTag: "DPDP 2023 & CARO 2020",
    spokesCount: "4 Financial Risk Workstreams",
    accentColor: "from-[#01adf7] via-[#2e0d82] to-[#b80f68]",
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
    <div className="relative min-h-screen bg-[#F8F9FA] text-slate-900 overflow-hidden">
      {/* Subtle Top Ambient Brand Light Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-[#00cfdc]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[400px] bg-[#b80f68]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Top Breadcrumb Bar */}
      <div className="relative pt-8 pb-4 border-b border-slate-200/70 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-500">
              <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-slate-900 font-medium">Regulatory Resource Hub</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
              <span className="font-mono text-[#0284c7]">2026 Statutory Release</span>
              <span className="text-slate-300">•</span>
              <span>13 Technical Guides</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#b80f68] shrink-0" />
                <span className="font-outfit text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.24em] text-slate-900">
                  STATUTORY ADVISORY &amp; TECHNICAL REGULATORY INTELLIGENCE
                </span>
                <span className="h-px flex-1 bg-slate-200" />
              </div>

              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
                Labour law, payroll &amp;{" "}
                <span className="bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] bg-clip-text text-transparent">
                  regulatory intelligence.
                </span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
                Timely, authoritative, and legally verified intelligence on evolving Indian statutory frameworks. Designed to assist Chief Financial Officers, Compliance Directors, General Counsels, and HR leaders in mitigating regulatory risks, preventing show-cause notices, and eliminating financial penalties.
              </p>
            </div>
          </ScrollReveal>

          {/* 2026 Key Statutory Alerts Dock */}
          <div className="mt-12">
            <ScrollReveal direction="up" distance={25} delay={150}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: "EPFO ₹25,000 Wage Ceiling",
                    tag: "MoLE S.O. 5109(E)",
                    desc: "Statutory wage ceiling expansion with EPS contribution capped at ₹2,083.",
                  },
                  {
                    title: "West Bengal PT Slabs",
                    tag: "WB Act VI / Notif 1607-F.T.",
                    desc: "Restructured tax brackets and revised ₹20,000 threshold with February spike.",
                  },
                  {
                    title: "Bi-Annual WBLWF Form D",
                    tag: "Section 9 Compliance",
                    desc: "Mandatory June & December remittances (₹33/worker) with 18% penal avoidance.",
                  },
                  {
                    title: "DPDP Act 2023 Sec 8(2)",
                    tag: "Data Privacy Standard",
                    desc: "Zero third-party disclosure for enterprise payroll, compensation, and staff data.",
                  },
                ].map((alert) => (
                  <div
                    key={alert.title}
                    className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 shadow-xs hover:border-slate-300 transition-all"
                  >
                    <div className="text-[10px] font-mono text-[#0284c7] uppercase font-bold mb-1">{alert.tag}</div>
                    <div className="font-outfit text-sm font-bold text-slate-900 mb-1.5">{alert.title}</div>
                    <div className="text-xs text-slate-600 leading-relaxed">{alert.desc}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3 Master Regulatory Pillars */}
      <section className="relative py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-slate-200 pb-4 mb-10 flex items-center justify-between">
            <div>
              <span className="text-xs uppercase font-mono tracking-wider text-[#b80f68] font-bold block mb-1">
                Core Knowledge Architectures
              </span>
              <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                The 3 Master Regulatory Pillars
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">Enterprise Library</span>
          </div>

          <div className="space-y-8">
            {pillarHubs.map((pillar, idx) => (
              <ScrollReveal
                key={pillar.href}
                direction={idx % 2 === 0 ? "left" : "right"}
                distance={30}
                delay={idx * 80}
              >
                <div className="relative rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-10 shadow-sm overflow-hidden group">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.accentColor}`} />

                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold uppercase px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800">
                        {pillar.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        {pillar.codeTag}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#b80f68] bg-[#b80f68]/10 border border-[#b80f68]/20 px-3 py-1 rounded-full font-bold">
                      {pillar.spokesCount}
                    </span>
                  </div>

                  <h3 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900 mb-3 leading-snug group-hover:text-[#b80f68] transition-colors">
                    <Link href={pillar.href}>
                      {pillar.title}
                    </Link>
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mb-8 max-w-4xl">
                    {pillar.description}
                  </p>

                  <div className="pt-6 border-t border-slate-100">
                    <span className="text-[11px] font-mono uppercase text-slate-500 font-semibold block mb-3">
                      Specialized Workstream Directives in this Cluster:
                    </span>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                      {pillar.spokes.map((spoke) => (
                        <Link
                          key={spoke.href}
                          href={spoke.href}
                          className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 transition-all text-xs font-semibold text-slate-800 flex items-center justify-between gap-2 group/spoke"
                        >
                          <span className="line-clamp-2">{spoke.name}</span>
                          <span className="shrink-0 text-[#0284c7] group-hover/spoke:translate-x-1 transition-transform">→</span>
                        </Link>
                      ))}
                    </div>

                    <Link
                      href={pillar.href}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#b80f68] hover:text-slate-900 transition-colors"
                    >
                      <span>Explore Comprehensive Master Pillar Guide</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Compliance Estimator Dock */}
      <section className="relative py-12 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="relative rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-8 shadow-sm overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7]" />
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#0284c7] font-bold block mb-1">
                  Interactive Compliance Simulator
                </span>
                <h3 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                  Enterprise Statutory Compliance &amp; Tax Calculators
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-xl mt-2 leading-relaxed">
                  Model financial and CTC impact with the EPFO ₹25,000 wage ceiling calculator, revised West Bengal Professional Tax schedules, and MSME 43B(h) payment gatekeeper.
                </p>
              </div>
              <Link
                href="/tools"
                className="inline-flex shrink-0 items-center justify-center rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all"
              >
                Launch Compliance Calculators →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
