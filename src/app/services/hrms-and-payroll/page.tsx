import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import { getSubServicesByPillar } from "@/data/subservices";

export const metadata: Metadata = {
  title: "HRMS & Payroll Outsourcing – EPFO 2026, WB PT & Cloud Platform",
  description:
    "Enterprise payroll outsourcing and cloud HRMS software. Fully compliant with 2026 EPFO ₹25,000 wage ceiling, West Bengal revised PT slabs, and Factories Act overtime management.",
  keywords: [
    "payroll outsourcing Kolkata",
    "cloud HRMS software India",
    "EPFO 25000 wage ceiling compliance",
    "West Bengal professional tax slabs 2026",
    "factory overtime payroll processing",
    "Form 16 digital generation India",
  ],
  alternates: { canonical: "https://servicedialtm.com/services/hrms-and-payroll" },
};

export default function HRMSPayrollPage() {
  const subservices = getSubServicesByPillar("hrms-and-payroll");

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
              { label: "HRMS & Payroll", href: "/services/hrms-and-payroll" },
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
                  PILLAR 02 · ENTERPRISE WORKFORCE PAYROLL
                </span>
                <span className="inline-flex items-center text-xs font-mono font-semibold text-[#0284c7] bg-[#0284c7]/10 border border-[#0284c7]/20 rounded-full px-3 py-1">
                  EPFO ₹25k &amp; WB PT 2026 Calibrated
                </span>
              </div>

              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
                HRMS &amp; Payroll.{" "}
                <span className="bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] bg-clip-text text-transparent">
                  Zero errors. 100% compliant.
                </span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mb-8">
                Managed payroll outsourcing, biometric cloud HRMS software, and statutory compliance built for 2026 mandates: EPFO ₹25,000 wage ceiling, revised West Bengal PT slabs, and Section 59 factory overtime controls.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all active:scale-95"
                >
                  Get HRMS &amp; Payroll Proposal →
                </Link>
                <Link
                  href="/tools"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-xs sm:text-sm font-bold bg-slate-50 text-slate-800 border border-slate-200 hover:bg-slate-100 transition-all shadow-2xs"
                >
                  Statutory Compliance Calculators ⚙️
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5 Specialized Payroll Practices Bento Grid */}
      <section className="relative py-16 sm:py-20 bg-[#F8F9FA] border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b80f68] block mb-2">
                Payroll Solutions Architecture
              </span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900">
                5 Specialized HRMS &amp; Payroll Practices
              </h2>
              <p className="font-sans text-sm text-slate-600 mt-2 leading-relaxed">
                From corporate gross-to-net salary computation to factory shift overtime and executive expat confidentiality.
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
                  href={`/services/hrms-and-payroll/${sub.slug}`}
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

      {/* Operational Payroll Engine & SLAs */}
      <section className="relative py-16 sm:py-20 bg-white border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal direction="left" distance={25}>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b80f68] block">
                  Payroll Engine
                </span>
                <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900">
                  Built to Eliminate Salary Disputes and Statutory Penalties
                </h2>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  Managing payroll across distributed operations requires multi-tier validation. The revised EPFO ₹25,000 wage ceiling directly affects CTC structuring, EPS wage ceilings, and employer contributions. A calculation error in state professional tax or leave encashment leads to employee friction and audit citations.
                </p>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  Service Dial provides a unified managed payroll ecosystem. We ingest biometric data, automate shift rules, compute tax withholding under old and new regimes, generate digital payslips via employee self-service (ESS), and remit all statutory dues before due dates.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal direction="right" distance={25} delay={100}>
                <div className="rounded-3xl border border-slate-200/90 bg-[#F8F9FA] p-7 sm:p-8 shadow-xs space-y-4">
                  <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    Payroll Operational SLAs:
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="font-outfit text-xl font-black text-slate-900">Day 1 Disbursal</div>
                      <div className="text-xs text-slate-500 mt-0.5">Strict Salary Bank Advice File SLA</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="font-outfit text-xl font-black text-[#b80f68]">100% On-Time</div>
                      <div className="text-xs text-slate-500 mt-0.5">Form 16 &amp; Form 24Q Quarterly Remittance</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="font-outfit text-xl font-black text-[#0284c7]">Zero Leakage</div>
                      <div className="text-xs text-slate-500 mt-0.5">Automated Tax Regime Optimization (Sec 115BAC)</div>
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
                Evaluate Your Payroll Compliance &amp; Retainer Cost
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                Connect with our senior payroll directors to audit your current gross-to-net tax calculations, EPFO wage allocations, and overtime exposure with zero obligation.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all active:scale-95"
                >
                  Schedule HRMS &amp; Payroll Strategy Session →
                </Link>
                <Link
                  href="/tools"
                  className="rounded-xl px-6 py-3.5 text-xs sm:text-sm font-bold bg-slate-50 text-slate-800 border border-slate-200 hover:bg-slate-100 transition-all shadow-2xs"
                >
                  Explore Statutory Tools ⚙️
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
