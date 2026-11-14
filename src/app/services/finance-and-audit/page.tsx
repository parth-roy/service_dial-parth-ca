import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import { getSubServicesByPillar } from "@/data/subservices";

export const metadata: Metadata = {
  title: "Finance & CMA Audit Services – CARO 2020, AP, AR, R2R & Cost Audit",
  description:
    "Enterprise financial operations and virtual CMA accounts department: Fixed asset tagging (CARO 2020), stock audits, AP 3-way matching, MSME 43B(h), R2R, Section 148 cost audit, and Virtual CFO.",
  keywords: [
    "CMA audit services Kolkata",
    "CARO 2020 fixed asset verification",
    "inventory physical audit Dankuni Howrah",
    "accounts payable 3-way matching India",
    "Section 148 cost audit consultant",
    "Virtual CFO services Kolkata",
  ],
  alternates: { canonical: "https://servicedialtm.com/services/finance-and-audit" },
};

export default function FinancePage() {
  const subservices = getSubServicesByPillar("finance-and-audit");

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
              { label: "Finance & Audit", href: "/services/finance-and-audit" },
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
                  PILLAR 03 · VIRTUAL CMA ACCOUNTS DEPARTMENT
                </span>
                <span className="inline-flex items-center text-xs font-mono font-semibold text-[#0284c7] bg-[#0284c7]/10 border border-[#0284c7]/20 rounded-full px-3 py-1">
                  CARO 2020 &amp; Section 148 Compliant
                </span>
              </div>

              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
                Finance operations.{" "}
                <span className="bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] bg-clip-text text-transparent">
                  Engineered by certified CMAs &amp; CAs.
                </span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mb-8">
                Complete corporate financial controllership—from CARO 2020 fixed asset tagging and inventory stock audits to AP 3-way matching, MSME 43B(h) gatekeeping, Day 3–5 month close, and Section 148 cost auditing.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all active:scale-95"
                >
                  Discuss Your Financial Architecture →
                </Link>
                <Link
                  href="/tools"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-xs sm:text-sm font-bold bg-slate-50 text-slate-800 border border-slate-200 hover:bg-slate-100 transition-all shadow-2xs"
                >
                  CARO 2020 &amp; 43B(h) Calculators ⚙️
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8 Specialized CMA Practices Bento Grid */}
      <section className="relative py-16 sm:py-20 bg-[#F8F9FA] border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b80f68] block mb-2">
                Corporate Finance Taxonomy
              </span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900">
                8 Specialized Corporate Finance Practices
              </h2>
              <p className="font-sans text-sm text-slate-600 mt-2 leading-relaxed">
                Modeled after premier enterprise financial advisory standards to support mid-market corporates, plant heads, and CFOs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subservices.map((sub, idx) => (
              <ScrollReveal
                key={sub.slug}
                direction="up"
                distance={25}
                delay={idx * 50}
              >
                <Link
                  href={`/services/finance-and-audit/${sub.slug}`}
                  className="h-full relative rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs hover:border-[#b80f68]/40 hover:shadow-md transition-all flex flex-col justify-between group overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div>
                    <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-[#0284c7] bg-slate-100 border border-slate-200 rounded-full px-2.5 py-0.5 mb-3">
                      {sub.badge}
                    </span>
                    <h3 className="font-outfit text-base font-bold text-slate-900 group-hover:text-[#b80f68] transition-colors mb-2 leading-snug">
                      {sub.shortTitle}
                    </h3>
                    <p className="font-sans text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                      {sub.blufSummary}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#b80f68]">
                    <span>Explore Practice</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Narrative & Operational Scope */}
      <section className="relative py-16 sm:py-20 bg-white border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal direction="left" distance={25}>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b80f68] block">
                  Controllership Framework
                </span>
                <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900">
                  Institutional Books, Statutory Defense &amp; Clean Audit Opinions
                </h2>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  Enterprise financial reporting faces rising statutory rigor under CARO 2020 Clause 3(i) &amp; 3(ii), Section 143(3)(i) Internal Financial Controls (IFC), and strict 45-day payment enforcement under Section 43B(h) for MSME vendors. Unreconciled accounts payable or missing physical asset tags expose companies to statutory auditor qualifications.
                </p>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  Service Dial functions as your complete or extended CMA accounts department. We deploy on-site barcode and RFID physical asset tagging teams, perform 100% 3-way matching on vendor invoices, enforce MSME payment timelines, and deliver audit-ready financial statements within 3 to 5 business days of month-end.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal direction="right" distance={25} delay={100}>
                <div className="rounded-3xl border border-slate-200/90 bg-[#F8F9FA] p-7 sm:p-8 shadow-xs space-y-4">
                  <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    Finance &amp; CMA SLAs:
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="font-outfit text-xl font-black text-slate-900">Day 3–5 Close</div>
                      <div className="text-xs text-slate-500 mt-0.5">Monthly R2R &amp; MIS Delivery SLA</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="font-outfit text-xl font-black text-[#b80f68]">100% 3-Way Match</div>
                      <div className="text-xs text-slate-500 mt-0.5">PO, GRN &amp; Invoice Automated Verification</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="font-outfit text-xl font-black text-[#0284c7]">Zero Qualification</div>
                      <div className="text-xs text-slate-500 mt-0.5">CARO 2020 Clean Audit Assurance</div>
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
                Need Senior CMA Advisory or Virtual CFO Oversight?
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                Whether preparing for CARO 2020 audit scrutiny, automating your AP 3-way matching, or seeking Virtual CFO oversight, our senior partners build custom engagements tailored to your enterprise.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all active:scale-95"
                >
                  Schedule CMA Consultation Call →
                </Link>
                <Link
                  href="/tools"
                  className="rounded-xl px-6 py-3.5 text-xs sm:text-sm font-bold bg-slate-50 text-slate-800 border border-slate-200 hover:bg-slate-100 transition-all shadow-2xs"
                >
                  View Corporate Tax Calculators
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
