import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import { getSubServicesByPillar } from "@/data/subservices";

export const metadata: Metadata = {
  title: "Statutory Compliance Services – CLRA, Factories Act, GST 9C & TDS",
  description:
    "Pan-India regulatory and statutory compliance management: Principal Employer CLRA Form V licensing, Factories Act approvals, GST 2B/9/9C audit, TDS/TCS 24Q, POSH IC governance, and labor law advisory.",
  keywords: [
    "statutory labour compliance India",
    "CLRA licensing consultant Kolkata",
    "Factories Act 1948 audit Dankuni Howrah",
    "POSH IC external member Kolkata",
    "GSTR 9C reconciliation services",
    "principal employer liability shield",
  ],
  alternates: { canonical: "https://servicedialtm.com/services/compliance-services" },
};

export default function CompliancePage() {
  const subservices = getSubServicesByPillar("compliance-services");

  return (
    <div className="relative min-h-screen bg-[#F8F9FA] text-slate-900 overflow-hidden">
      {/* Subtle Top Ambient Brand Light Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-[#00cfdc]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[400px] bg-[#b80f68]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Breadcrumbs Bar */}
      <div className="relative pt-8 pb-4 border-b border-slate-200/70 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Compliance Services", href: "/services/compliance-services" },
            ]}
          />
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-2.5 mb-6">
                <span className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider text-[#b80f68] bg-[#b80f68]/10 border border-[#b80f68]/20 rounded-full px-3 py-1">
                  PILLAR 04 · REGULATORY COMPLIANCE
                </span>
                <span className="inline-flex items-center text-xs font-mono font-semibold text-[#0284c7] bg-[#0284c7]/10 border border-[#0284c7]/20 rounded-full px-3 py-1">
                  100% Audit Defense &amp; Legal Shield
                </span>
              </div>

              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
                Statutory compliance.{" "}
                <span className="bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] bg-clip-text text-transparent">
                  Zero penalties. 100% defense.
                </span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mb-8">
                Shielding corporate directors and principal employers from personal criminal liabilities. Comprehensive management of CLRA Form V licensing, Factories Act approvals, GSTR-2B triangulation, Section 194C withholding, POSH IC compliance, and multi-state labor law governance.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all active:scale-95"
                >
                  Request Statutory Audit Scoping →
                </Link>
                <Link
                  href="/tools"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-xs sm:text-sm font-bold bg-slate-50 text-slate-800 border border-slate-200 hover:bg-slate-100 transition-all shadow-2xs"
                >
                  Explore Statutory Calculators ⚙️
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6 Specialized Compliance Practices Bento Grid */}
      <section className="relative py-16 sm:py-20 bg-[#F8F9FA] border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b80f68] block mb-2">
                Specialized Practice Disciplines
              </span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900">
                6 Dedicated Statutory Practices
              </h2>
              <p className="font-sans text-sm text-slate-600 mt-2 leading-relaxed">
                Engineered to insulate your balance sheet, corporate board, and facility occupiers across Indian jurisdictions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subservices.map((sub, idx) => (
              <ScrollReveal
                key={sub.slug}
                direction="up"
                distance={25}
                delay={idx * 60}
              >
                <Link
                  href={`/services/compliance-services/${sub.slug}`}
                  className="h-full relative rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs hover:border-[#b80f68]/40 hover:shadow-md transition-all flex flex-col justify-between group overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div>
                    <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-[#0284c7] bg-slate-100 border border-slate-200 rounded-full px-2.5 py-0.5 mb-4">
                      {sub.badge}
                    </span>
                    <h3 className="font-outfit text-lg font-bold text-slate-900 group-hover:text-[#b80f68] transition-colors mb-2.5 leading-snug">
                      {sub.shortTitle}
                    </h3>
                    <p className="font-sans text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                      {sub.blufSummary}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#b80f68]">
                    <span>Explore Practice Architecture</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Statutory Defense & Regulatory Authorities Section */}
      <section className="relative py-16 sm:py-20 bg-white border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal direction="left" distance={25}>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b80f68] block">
                  Regulatory Shield
                </span>
                <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900">
                  Comprehensive Defense Across All Statutory Authorities
                </h2>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  Indian enterprise compliance is fragmented across Central, State, and Municipal departments. A default under one board (e.g. non-deduction of contractor PF under Section 8A) routinely triggers secondary inspection summons from the Directorate of Factories or the Income Tax Department under Section 194C.
                </p>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  Service Dial provides unified statutory controllership. We maintain statutory registers, handle online returns, conduct vendor inspections, and represent your management during official hearings, audits, and surprise site visits.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal direction="right" distance={25} delay={100}>
                <div className="rounded-3xl border border-slate-200/90 bg-[#F8F9FA] p-7 sm:p-8 shadow-xs space-y-4">
                  <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Execution SLAs:
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="font-outfit text-xl font-black text-slate-900">100% Pass-Through</div>
                      <div className="text-xs text-slate-500 mt-0.5">Pre-Invoice Contractor ECR Challan Audit</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="font-outfit text-xl font-black text-[#b80f68]">Day 10 Remittance</div>
                      <div className="text-xs text-slate-500 mt-0.5">EPF, ESIC, PT, TDS Monthly E-Challans</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="font-outfit text-xl font-black text-[#0284c7]">Zero Penalty</div>
                      <div className="text-xs text-slate-500 mt-0.5">Contractual Statutory Legal Indemnity</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Action Section */}
      <section className="relative py-16 sm:py-20 bg-[#F8F9FA]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="relative rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 text-center overflow-hidden shadow-xs">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7]" />
              <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900 mb-3">
                Facing a Statutory Notice or Inspectorate Inquiry?
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                Our regulatory directors prepare detailed factual rebuttals, organize mandatory muster rolls, and represent your enterprise before government authorities with zero delay.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all active:scale-95"
                >
                  Schedule Confidential Legal Consultation →
                </Link>
                <a
                  href="tel:+918777864949"
                  className="rounded-xl px-6 py-3.5 text-xs sm:text-sm font-bold bg-slate-50 text-slate-800 border border-slate-200 hover:bg-slate-100 transition-all shadow-2xs"
                >
                  📞 Call +91 87778 64949
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
