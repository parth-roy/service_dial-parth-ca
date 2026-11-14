import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Industry Compliance & Payroll Solutions",
  description:
    "Tailored HRMS, payroll outsourcing, and statutory labour law compliance across key Indian industry sectors: IT/ITeS, Manufacturing & Heavy Engineering, Logistics & Warehousing, and Healthcare & Pharma.",
  keywords: [
    "industry payroll solutions India",
    "IT company compliance services",
    "manufacturing labour law compliance",
    "logistics flexi staffing India",
    "healthcare payroll outsourcing",
  ],
  alternates: {
    canonical: "https://servicedialtm.com/industries",
  },
};

const industries = [
  {
    slug: "it-ites-startups",
    code: "SEC-01",
    title: "IT, ITeS & High-Growth Startups",
    description:
      "Shops & Establishments 24/7 operating exemptions, multi-state remote employee Professional Tax management, stock option (ESOP) tax withholding, and bilateral IP protection.",
    accentGradient: "from-[#b80f68] to-[#2e0d82]",
    keyCompliances: [
      "Shops Act 24/7 Night Shift Clearances",
      "Multi-State PT Reconciliation & Returns",
      "ESOP Perquisite Tax Withholding",
      "NDA & Intellectual Property Assignment",
    ],
    operationalSla: "24–48h IT Staffing SLA",
  },
  {
    slug: "manufacturing-engineering",
    code: "SEC-02",
    title: "Manufacturing, Heavy Engineering & Industrial Belts",
    description:
      "Factories Act 1948 licensing, hazardous process safety protocols, Industrial Employment (Standing Orders) Act, and Contract Labour (Regulation & Abolition) compliance.",
    accentGradient: "from-[#2e0d82] to-[#01adf7]",
    keyCompliances: [
      "Factories Act Form 2 Licensing",
      "CLRA Form I Registration & Form IV License",
      "Certified Standing Orders Governance",
      "Scheduled Minimum Wages & Overtime Audit",
    ],
    operationalSla: "Plant-Floor Flexi Deployment",
  },
  {
    slug: "logistics-warehousing",
    code: "SEC-03",
    title: "Logistics, Supply Chain & Fulfillment Centers",
    description:
      "High-velocity flexi-staffing, inter-state transit worker compliance, warehouse hub minimum wage variations, and bi-annual Labour Welfare Fund compliance.",
    accentGradient: "from-[#01adf7] to-[#2e0d82]",
    keyCompliances: [
      "Interstate Migrant Workmen Act Filing",
      "Rotational Shift Rosters & ESI Coverage",
      "Employee Compensation Act (ECA) Protection",
      "Dual-Cycle WBLWF Remittance Automation",
    ],
    operationalSla: "48–72h Hub Staffing Velocity",
  },
  {
    slug: "healthcare-pharma",
    code: "SEC-04",
    title: "Healthcare, Hospital Networks & Pharmaceuticals",
    description:
      "Continuous operations workforce scheduling, clinical establishment labour standards, medical officer honorarium taxation, and bio-medical safety certifications.",
    accentGradient: "from-[#2e0d82] via-[#b80f68] to-[#01adf7]",
    keyCompliances: [
      "24/7 Rotational Clinical Staffing Shifts",
      "Bio-Medical Handler Welfare Registers",
      "Section 194J TDS on Medical Retainers",
      "Continuous ESIC Dispensary Mapping",
    ],
    operationalSla: "Zero-Defect Payroll Audit",
  },
];

export default function IndustriesIndexPage() {
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
              <span className="text-slate-900 font-medium">Industry Verticals</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
              <span className="font-mono text-[#0284c7]">4 Core Industrial Verticals</span>
              <span className="text-slate-300">•</span>
              <span>100% Tailored Compliance</span>
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
                  SECTOR-SPECIFIC ARCHITECTURES · 100% AUDIT READINESS
                </span>
                <span className="h-px flex-1 bg-slate-200" />
              </div>

              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
                Industry verticals &amp;{" "}
                <span className="bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] bg-clip-text text-transparent">
                  statutory nuances.
                </span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
                Every industry operates under distinct statutory mandates, labor inspectorate scrutiny, and shift models. Service Dial engineers sector-calibrated workforce and compliance frameworks to eliminate show-cause exposures without compromising operating velocity.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4 Industry Blueprint Cards */}
      <section className="relative py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((ind, idx) => (
              <ScrollReveal
                key={ind.slug}
                direction={idx % 2 === 0 ? "left" : "right"}
                distance={30}
                delay={idx * 80}
              >
                <div className="h-full relative rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm flex flex-col justify-between group overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${ind.accentGradient}`} />

                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#b80f68] px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200">
                        {ind.code}
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        {ind.operationalSla}
                      </span>
                    </div>

                    <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900 mb-3 group-hover:text-[#b80f68] transition-colors leading-snug">
                      <Link href={`/industries/${ind.slug}`}>
                        {ind.title}
                      </Link>
                    </h2>

                    <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {ind.description}
                    </p>

                    <div className="pt-5 border-t border-slate-100 mb-8">
                      <span className="text-[11px] font-mono uppercase text-slate-500 font-semibold block mb-2.5">
                        Sector-Specific Statutory Modules:
                      </span>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {ind.keyCompliances.map((comp, cIdx) => (
                          <div
                            key={cIdx}
                            className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-700 font-mono flex items-start gap-2"
                          >
                            <span className="text-[#0284c7] font-bold">✓</span>
                            <span className="line-clamp-2">{comp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/industries/${ind.slug}`}
                      className="text-xs font-bold text-[#b80f68] group-hover:text-slate-900 transition-colors flex items-center gap-1.5"
                    >
                      <span>Explore Sector Blueprint</span>
                      <span>→</span>
                    </Link>
                    <Link
                      href="/contact"
                      className="text-xs text-slate-500 hover:text-slate-900 transition-colors font-mono"
                    >
                      Audit Readiness Desk
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Sector Consultation Dock */}
      <section className="relative py-12 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="relative rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-8 shadow-sm overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7]" />
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#0284c7] font-bold block mb-1">
                  Custom Industry Advisory Desk
                </span>
                <h3 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                  Operating in a Specialized or Regulated Sector?
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-xl mt-2 leading-relaxed">
                  Our labor law counsels and practice leaders execute confidential statutory gap analyses and customized workforce models under mutual non-disclosure.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all"
              >
                Request Sector Consultation →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
