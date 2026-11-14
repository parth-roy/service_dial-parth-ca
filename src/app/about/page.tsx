import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Service Dial – Corporate Heritage & Governance",
  description:
    "Established in 2016, Service Dial Talent Management Pvt Ltd is a premier enterprise managed services provider across Staffing, Payroll, Finance, and Regulatory Compliance in India.",
  alternates: { canonical: "https://servicedialtm.com/about" },
};

export default function AboutPage() {
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
              <span className="text-slate-900 font-medium">About Service Dial</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
              <span className="font-mono text-[#0284c7]">CIN: U74999WB2016PTC216954</span>
              <span className="text-slate-300">•</span>
              <span>Est. 2016</span>
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
                  CORPORATE HERITAGE &amp; GOVERNANCE
                </span>
                <span className="h-px flex-1 bg-slate-200" />
              </div>

              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
                Engineered for zero-defect{" "}
                <span className="bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] bg-clip-text text-transparent">
                  workforce governance.
                </span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
                Founded in 2016, Service Dial Talent Management Private Limited delivers institutional-grade managed services across flexi-staffing, high-scale payroll, financial mid-office operations, and proactive labor law compliance for enterprises across India.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Asymmetric MCA Plaque & Heritage Ledger */}
      <section className="relative py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="relative rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-sm overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7]" />

              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b80f68]">
                    Ministry of Corporate Affairs (MCA) Registered
                  </span>

                  <h2 className="font-outfit text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
                    Service Dial Talent Management Private Limited
                  </h2>

                  <p className="font-sans text-sm text-slate-600 leading-relaxed">
                    Incorporated under the Indian Companies Act, 2013, Service Dial operates under strict corporate governance, continuous ROC statutory compliance, and rigorous annual audits. Our executive leadership combines over 25 years of multi-sector enterprise experience.
                  </p>
                </div>

                <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 space-y-3.5 text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-slate-200/70">
                    <span className="text-slate-500 font-medium">Corporate Identity (CIN):</span>
                    <span className="font-mono font-bold text-slate-900">U74999WB2016PTC216954</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-200/70">
                    <span className="text-slate-500 font-medium">Incorporation Year:</span>
                    <span className="font-bold text-slate-900">2016 (10th Operating Year)</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-200/70">
                    <span className="text-slate-500 font-medium">Statutory Classification:</span>
                    <span className="font-medium text-slate-900">Private Limited Company</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-200/70">
                    <span className="text-slate-500 font-medium">Registered Office:</span>
                    <span className="font-medium text-slate-900 text-right">Barrackpore, Kolkata 700120</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500 font-medium">Data Protection Standard:</span>
                    <span className="font-bold text-[#0284c7]">Section 8(2) DPDP Act Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4-Item Bento Grid Matrix for Values & Principles */}
      <section className="relative py-8 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3.5 sm:gap-4 mb-10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2e0d82] shrink-0" />
            <span className="font-outfit text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.24em] text-slate-900 whitespace-nowrap">
              OPERATIONAL PRINCIPLES
            </span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            {/* 8-col Lead Card */}
            <div className="md:col-span-8">
              <ScrollReveal direction="left" distance={25}>
                <div className="h-full rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-[#b80f68] mb-2 block">
                      Core Institutional Pillar
                    </span>
                    <h3 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900 mb-4">
                      Zero-Defect Statutory Compliance &amp; Audit Defense
                    </h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed mb-6">
                      Statutory adherence is non-negotiable. From the 2026 EPFO ₹25,000 wage ceiling restructuring to West Bengal Act VI Professional Tax schedules and semi-annual WBLWF Form D filings, every calculation is backed by legal indemnity and verifiable audit documentation.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>Zero Penalty Track Record</span>
                    <span className="text-[#0284c7] font-bold">100% Audit Readiness</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* 4-col Metric Card */}
            <div className="md:col-span-4">
              <ScrollReveal direction="right" distance={25}>
                <div className="h-full rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-[#0284c7] mb-2 block">
                      Sourcing SLA
                    </span>
                    <div className="font-outfit text-4xl sm:text-5xl font-black text-slate-900 mb-2">
                      24–72h
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Average turnaround window to deliver pre-screened, verified candidate shortlists for mission-critical client mandates.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 text-xs font-mono text-slate-500">
                    High-Velocity Talent Bench
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* 6-col Ratio Card */}
            <div className="md:col-span-6">
              <ScrollReveal direction="left" distance={25} delay={100}>
                <div className="h-full rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-[#2e0d82] mb-2 block">
                      Precision Conversion
                    </span>
                    <div className="font-outfit text-3xl sm:text-4xl font-black text-slate-900 mb-2">
                      7 : 10 Ratio
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      Seven out of every ten shortlisted candidates successfully advance to final CXO panel interview rounds due to our rigorous 3-stage vetting.
                    </p>
                  </div>
                  {/* Visual Progress Bar in Brand Gradient */}
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] h-2.5 rounded-full" style={{ width: "70%" }} />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* 6-col Bilateral NDA Card */}
            <div className="md:col-span-6">
              <ScrollReveal direction="right" distance={25} delay={100}>
                <div className="h-full rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-[#b80f68] mb-2 block">
                      Confidentiality Guarantee
                    </span>
                    <h4 className="font-outfit text-2xl font-black text-slate-900 mb-2">
                      Bilateral Institutional NDA
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      Every mandate, executive search, compensation benchmarking project, and payroll record is executed under binding mutual non-disclosure and DPDP compliance.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 text-xs font-mono text-slate-500">
                    100% Client Referenceability
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Connected Gradient Spine Timeline (2016–2026) */}
      <section className="relative py-12 sm:py-16 bg-white border-y border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3.5 sm:gap-4 mb-12">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0284c7] shrink-0" />
            <span className="font-outfit text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.24em] text-slate-900 whitespace-nowrap">
              A DECADE OF MEASURED SCALE
            </span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="relative">
            {/* Horizontal Line on Desktop */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7]" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { year: "2016", title: "Incorporation & Launch", desc: "Registered under MCA in West Bengal, launching dedicated staffing operations." },
                { year: "2019", title: "Payroll & Compliance Expansion", desc: "Integrated end-to-end cloud HRMS outsourcing and statutory labor law defense." },
                { year: "2022", title: "Finance & Virtual CMA Division", desc: "Added mid-office accounts payable, fixed asset tagging under CARO 2020, and R2R." },
                { year: "2026", title: "National Coverage & IP Hub", desc: "Expanded across 20 commercial metros, Pan-India trademark advisory, and 2026 labor code transition." },
              ].map((m, idx) => (
                <ScrollReveal key={m.year} direction="up" distance={20} delay={idx * 80}>
                  <div className="relative pt-4 lg:pt-14">
                    <div className="hidden lg:block absolute top-6 left-0 w-4 h-4 rounded-full bg-white border-4 border-[#2e0d82] -translate-y-1/2" />
                    <span className="font-outfit text-2xl sm:text-3xl font-black text-slate-900 block mb-1">
                      {m.year}
                    </span>
                    <h5 className="font-outfit text-base font-bold text-slate-900 mb-2">
                      {m.title}
                    </h5>
                    <p className="font-sans text-xs text-slate-600 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practice Desks Ledger */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3.5 sm:gap-4 mb-10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#b80f68] shrink-0" />
            <span className="font-outfit text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.24em] text-slate-900 whitespace-nowrap">
              PRACTICE LEADERSHIP
            </span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Staffing & Executive Search", tag: "CXO to Flexi Workforce", link: "/services/staffing-and-recruitment" },
              { title: "HRMS & Managed Payroll", tag: "100% Timely Disbursal", link: "/services/hrms-and-payroll" },
              { title: "Finance & Audit Governance", tag: "CARO 2020 / AP / R2R", link: "/services/finance-and-audit" },
              { title: "Statutory Labour Compliance", tag: "EPFO, ESIC, WB PT & LWF", link: "/services/compliance-services" },
            ].map((d, idx) => (
              <ScrollReveal key={d.title} direction="up" distance={20} delay={idx * 70}>
                <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm hover:border-slate-400/80 transition-all flex flex-col justify-between group">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-[#0284c7] block mb-2">
                      {d.tag}
                    </span>
                    <h4 className="font-outfit text-lg font-bold text-slate-900 group-hover:text-[#b80f68] transition-colors leading-snug mb-3">
                      {d.title}
                    </h4>
                  </div>
                  <Link
                    href={d.link}
                    className="text-xs font-bold text-slate-900 group-hover:text-[#b80f68] transition-colors flex items-center gap-1.5 pt-3 border-t border-slate-100"
                  >
                    <span>Explore Practice Desk</span>
                    <span>→</span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Enterprise CTA Dock */}
      <section className="relative py-12 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="relative rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-8 shadow-sm overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7]" />
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#b80f68] block mb-1">
                  Confidential Corporate Mandate
                </span>
                <h3 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                  Ready to elevate your workforce operations?
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-xl mt-2 leading-relaxed">
                  Engage our executive practice leaders under bilateral NDA. Sourcing and statutory audits commence within 24–72 hours.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all"
              >
                Initiate Confidential Mandate →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
