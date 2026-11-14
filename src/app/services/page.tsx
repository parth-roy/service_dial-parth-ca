import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES_CATALOG } from "@/data/services";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Enterprise Managed Services – Staffing, HRMS & Payroll, Finance & Compliance",
  description:
    "Comprehensive B2B managed services architecture by Service Dial. Executive recruitment, 100% compliant HRMS & payroll outsourcing, virtual CMA & audit governance, and statutory labor law defense across India.",
  alternates: { canonical: "https://servicedialtm.com/services" },
};

export default function ServicesHubPage() {
  const services = Object.values(SERVICES_CATALOG);

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
              <span className="text-slate-900 font-medium">Enterprise Services</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
              <span className="font-mono text-[#0284c7]">4 Core Practice Disciplines</span>
              <span className="text-slate-300">•</span>
              <span>100% Referenceable Clients</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Canvas */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#b80f68] shrink-0" />
                <span className="font-outfit text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.24em] text-slate-900">
                  ENTERPRISE MANAGED SERVICES
                </span>
                <span className="h-px flex-1 bg-slate-200" />
              </div>

              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
                Unified workforce &amp;{" "}
                <span className="bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] bg-clip-text text-transparent">
                  regulatory execution.
                </span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
                Service Dial integrates high-velocity staffing, zero-defect HRMS &amp; payroll outsourcing, financial audit controls, and proactive labor law compliance under a single institutional SLA.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4 Architectural Showcases */}
      <section className="relative py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((svc, idx) => {
            const isEven = idx % 2 === 0;
            const accent = idx === 0 
              ? "from-[#b80f68] to-[#2e0d82]" 
              : idx === 1 
              ? "from-[#2e0d82] to-[#01adf7]" 
              : idx === 2 
              ? "from-[#01adf7] to-[#2e0d82]" 
              : "from-[#b80f68] via-[#2e0d82] to-[#01adf7]";

            return (
              <ScrollReveal
                key={svc.slug}
                direction={isEven ? "left" : "right"}
                distance={35}
                delay={idx * 50}
              >
                <div className="relative rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-sm overflow-hidden group">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accent}`} />

                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left Narrative */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#b80f68] px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200">
                          Discipline 0{idx + 1}
                        </span>
                        <span className="text-xs font-mono text-slate-500">
                          {svc.tagline}
                        </span>
                      </div>

                      <h2 className="font-outfit text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 group-hover:text-[#b80f68] transition-colors leading-tight">
                        <Link href={`/services/${svc.slug}`}>
                          {svc.name}
                        </Link>
                      </h2>

                      <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
                        {svc.metaDescriptionTemplate.replace("{city}, {state}", "India's commercial hubs")}
                      </p>

                      <div className="pt-4">
                        <span className="text-xs font-mono uppercase text-slate-500 block mb-3 font-semibold">
                          Core Practice Capabilities:
                        </span>
                        <div className="grid sm:grid-cols-2 gap-2.5">
                          {svc.capabilities.map((cap, cIdx) => (
                            <div
                              key={cIdx}
                              className="p-3 rounded-xl bg-slate-50/70 border border-slate-200/70"
                            >
                              <div className="font-outfit text-xs font-bold text-slate-900 mb-1">
                                {cap.title}
                              </div>
                              <div className="font-sans text-[11px] text-slate-500 leading-relaxed line-clamp-2">
                                {cap.description}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Outcome & Telemetry Plaque */}
                    <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-[#0284c7] mb-3 font-bold">
                          Key Service Level Commitments
                        </div>
                        <div className="space-y-3">
                          {svc.slaMetrics.map((sla, sIdx) => (
                            <div key={sIdx} className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                              <div className="font-outfit text-lg font-black text-slate-900">{sla.value}</div>
                              <div className="text-[10px] uppercase font-bold text-[#b80f68] mt-0.5">{sla.label}</div>
                              <div className="text-[10px] text-slate-500 mt-0.5">{sla.detail}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                        <Link
                          href={`/services/${svc.slug}`}
                          className="text-xs font-bold text-slate-900 hover:text-[#b80f68] transition-colors"
                        >
                          Explore Service Pillar →
                        </Link>
                        <Link
                          href="/contact"
                          className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition-all"
                        >
                          Mandate Intake
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Unified vs. Fragmented Governance Ledger Matrix */}
      <section className="relative py-16 bg-white border-y border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="max-w-3xl mb-12">
              <span className="text-xs uppercase font-mono tracking-wider text-[#b80f68] block mb-2 font-bold">
                Institutional Risk Comparison
              </span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900">
                Unified Governance vs. Fragmented Multi-Vendor Risk
              </h2>
              <p className="font-sans text-sm text-slate-600 mt-2 leading-relaxed">
                Why Fortune 500 enterprises, heavy manufacturing plants, and high-growth IT corridors consolidate HR, Payroll, Finance, and Compliance under Service Dial.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-sm">
              <table className="w-full text-left text-xs border-collapse bg-white">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/70 text-slate-500 font-mono uppercase tracking-wider">
                    <th className="p-4 sm:p-5 font-semibold">Governance Vector</th>
                    <th className="p-4 sm:p-5 font-bold text-slate-900 bg-slate-100/60">Service Dial Unified SLA</th>
                    <th className="p-4 sm:p-5 font-semibold">Fragmented Vendors</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {[
                    { vector: "Statutory Liability & Indemnity", unified: "100% Contractual Indemnification", fragmented: "Blame-shifting between payroll and staffing vendors" },
                    { vector: "2026 Labor Code Preparedness", unified: "Proactive basic wage & EPFO ceiling modeling", fragmented: "Emergency retroactive calculations & notices" },
                    { vector: "Data Protection (DPDP 2023)", unified: "Section 8(2) audit-ready data isolation", fragmented: "Unencrypted spreadsheets across disparate agencies" },
                    { vector: "Sourcing Speed & SLA", unified: "24–72 hours verified shortlists", fragmented: "30–60 days unvetted CV bombardment" },
                  ].map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 sm:p-5 font-semibold text-slate-900">{row.vector}</td>
                      <td className="p-4 sm:p-5 font-bold text-[#0284c7] bg-slate-50/40">{row.unified}</td>
                      <td className="p-4 sm:p-5 text-slate-500">{row.fragmented}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom Enterprise CTA Dock */}
      <section className="relative py-12 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="relative rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-8 shadow-sm overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7]" />
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#b80f68] block mb-1 font-bold">
                  Confidential Service Scoping
                </span>
                <h3 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                  Ready to deploy a customized managed service framework?
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-xl mt-2 leading-relaxed">
                  Engage our enterprise practice leads for a confidential headcount, payroll, or compliance gap audit under mutual non-disclosure.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all"
              >
                Request Enterprise Scoping →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
