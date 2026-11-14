import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Healthcare, Hospitals & Pharma Workforce Compliance & Medical Payroll",
  description:
    "Statutory labour law compliance, visiting doctor retainer TDS Section 194J, and 24/7 nursing shift payroll for hospitals, diagnostic chains, and pharmaceutical manufacturers across India.",
  keywords: [
    "hospital payroll outsourcing India",
    "healthcare labour law compliance Kolkata",
    "doctor retainer TDS Section 194J",
    "clinical establishment staff compliance West Bengal",
    "pharma manufacturing labour audit Salt Lake",
  ],
  alternates: {
    canonical: "https://servicedialtm.com/industries/healthcare-pharma",
  },
};

export default function HealthcarePharmaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does Service Dial manage dual taxation for visiting consultant doctors versus resident medical staff?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We automate separate taxation streams: resident medical officers and permanent clinical staff are processed under Section 192 (salaries) with Form 16 issuance, while visiting consultants and specialists are processed under Section 194J (fees for professional services) with quarterly Form 26Q e-filing and digital Form 16A generation.",
        },
      },
      {
        "@type": "Question",
        name: "What statutory compliances apply to bio-medical waste handlers and hospital sanitation staff?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Establishments must comply with the Bio-Medical Waste Management Rules 2016, providing documented periodic health check-ups, mandatory hepatitis B and tetanus immunizations, personal protective equipment (PPE) allowances, and uninterrupted ESIC registration.",
        },
      },
      {
        "@type": "Question",
        name: "How are 24/7 rotational nursing shifts governed under state labor laws?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nursing and emergency paramedical staff are scheduled under strict 3-shift rotational rosters ensuring compliance with maximum weekly hours (48 hours), mandatory 24-hour continuous rest between shifts, and special night-shift safety clearances for female healthcare personnel.",
        },
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-[#F8F9FA] text-slate-900 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Subtle Top Ambient Brand Light Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-[#00cfdc]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[400px] bg-[#b80f68]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Breadcrumbs Bar */}
      <div className="relative pt-8 pb-4 border-b border-slate-200/70 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: "Healthcare & Pharma", href: "/industries/healthcare-pharma" },
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
                  SEC-04 · HEALTHCARE, HOSPITALS &amp; PHARMA
                </span>
                <span className="inline-flex items-center text-xs font-mono font-semibold text-[#0284c7] bg-[#0284c7]/10 border border-[#0284c7]/20 rounded-full px-3 py-1">
                  Clinical &amp; Section 194J Audited
                </span>
              </div>

              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
                Healthcare &amp; Life Sciences{" "}
                <span className="bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] bg-clip-text text-transparent">
                  institutional compliance.
                </span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mb-8">
                Hospitals, diagnostic chains, and pharmaceutical labs navigate distinct regulatory challenges. Service Dial delivers specialized clinical establishment workforce compliance, dual doctor-retainer taxation (Sec 192 / Sec 194J), and 24/7 nursing shift payroll across India.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all active:scale-95"
                >
                  Request Healthcare Compliance Audit →
                </Link>
                <Link
                  href="/tools"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-xs sm:text-sm font-bold bg-slate-50 text-slate-800 border border-slate-200 hover:bg-slate-100 transition-all shadow-2xs"
                >
                  Explore Statutory Tools ⚙️
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4-Pillar Bento Matrix of Healthcare Statutory Architecture */}
      <section className="relative py-14 sm:py-20 bg-[#F8F9FA] border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b80f68] block mb-2">
                Clinical Compliance Matrix
              </span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900">
                Rigorous Governance for Hospital &amp; Diagnostic Workforces
              </h2>
              <p className="font-sans text-sm text-slate-600 mt-2 leading-relaxed">
                Mitigating medical establishment liabilities under labour laws, tax statutes, and bio-safety protocols.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Doctor Retainer TDS Bifurcation (Sec 194J / 192)",
                badge: "Income Tax Architecture",
                desc: "Automated segregation between full-time medical officers (processed under Section 192 with standard deductions and Form 16) and visiting consultant specialists (processed under Section 194J at 10% TDS with quarterly Form 16A generation).",
                accent: "from-[#b80f68] to-[#2e0d82]",
                detail: "Eliminates IT Department scrutiny and non-deduction demand notices under Section 201.",
              },
              {
                title: "24/7 Nursing & Paramedical Rosters",
                badge: "Rotational Shift Compliance",
                desc: "Statutory scheduling under the Clinical Establishments Act and State Shops Acts. Automated tracking of night-shift allowances, statutory 24-hour weekly rest intervals, and overtime reconciliations without risking staff fatigue.",
                accent: "from-[#2e0d82] to-[#01adf7]",
                detail: "Enforces mandatory safe transportation protocols for female medical staff on night duty.",
              },
              {
                title: "Bio-Medical Waste Handlers Welfare & ESIC",
                badge: "Bio-Safety Protocol 2016",
                desc: "Full statutory compliance for sanitation and bio-hazard handling staff: mandatory annual medical check-ups, Hepatitis B & Tetanus immunization registers, PPE allowances, and comprehensive ESIC dispensary mapping.",
                accent: "from-[#01adf7] to-[#2e0d82]",
                detail: "Zero lapse in health hazard compensation claims under the Employees' Compensation Act.",
              },
              {
                title: "Pharmacy & Diagnostic Lab Quality Accreditation Audits",
                badge: "NABH / NABL Alignment",
                desc: "Maintenance of statutory registers for pharmacists under the Pharmacy Act 1948 and qualified lab technicians under NABL guidelines, ensuring zero discrepancy during state drug inspectorate evaluations.",
                accent: "from-[#b80f68] via-[#2e0d82] to-[#01adf7]",
                detail: "Complete documentation of registered pharmacist attendance logs and valid licensure.",
              },
            ].map((card, idx) => (
              <ScrollReveal
                key={card.title}
                direction={idx % 2 === 0 ? "left" : "right"}
                distance={25}
                delay={idx * 70}
              >
                <div className="h-full relative rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm flex flex-col justify-between group overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.accent}`} />
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0284c7] bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full mb-3 inline-block">
                      {card.badge}
                    </span>
                    <h3 className="font-outfit text-xl font-bold text-slate-900 group-hover:text-[#b80f68] transition-colors mb-3 leading-snug">
                      {card.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {card.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                    {card.detail}
                  </div>
                </div>
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
                  Clinical Audit Rigor
                </span>
                <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900">
                  Navigating Dual Taxation and Continuous Care Shifts
                </h2>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  Healthcare institutions operate under intense multi-agency oversight. Blending employment categories—such as treating visiting super-specialist surgeons as regular salaried employees or miscalculating intensive care nursing overtime—triggers significant tax penalties, re-characterization demands, and labor tribunal inquiries.
                </p>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  Service Dial provides tailored healthcare payroll architecture that segregates professional honorariums, nursing payroll, and outsourced housekeeping into auditable, compliant streams. With full indemnity and on-time statutory remittances, your administrative leadership can focus squarely on patient care.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal direction="right" distance={25} delay={100}>
                <div className="rounded-3xl border border-slate-200/90 bg-[#F8F9FA] p-7 sm:p-8 shadow-xs space-y-4">
                  <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    Healthcare SLAs &amp; Governance Metrics:
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="font-outfit text-xl font-black text-slate-900">100% On-Time</div>
                      <div className="text-xs text-slate-500 mt-0.5">Section 194J &amp; Form 16A TDS Delivery</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="font-outfit text-xl font-black text-[#b80f68]">Zero Penalty</div>
                      <div className="text-xs text-slate-500 mt-0.5">Clinical Establishment Labour Audit Record</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="font-outfit text-xl font-black text-[#0284c7]">100% Verified</div>
                      <div className="text-xs text-slate-500 mt-0.5">Pharmacist &amp; Lab Tech Licensure Records</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Technical FAQs Section */}
      <section className="relative py-16 sm:py-20 bg-[#F8F9FA] border-b border-slate-200/70">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="text-center mb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284c7] block mb-2">
                Healthcare FAQs
              </span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900">
                Frequently Asked Healthcare Compliance Questions
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              {
                q: "How does Service Dial manage dual taxation for visiting consultant doctors versus resident medical staff?",
                a: "We automate separate taxation streams: resident medical officers and permanent clinical staff are processed under Section 192 (salaries) with Form 16 issuance, while visiting consultants and specialists are processed under Section 194J (fees for professional services) with quarterly Form 26Q e-filing and digital Form 16A generation.",
              },
              {
                q: "What statutory compliances apply to bio-medical waste handlers and hospital sanitation staff?",
                a: "Establishments must comply with the Bio-Medical Waste Management Rules 2016, providing documented periodic health check-ups, mandatory hepatitis B and tetanus immunizations, personal protective equipment (PPE) allowances, and uninterrupted ESIC registration.",
              },
              {
                q: "How are 24/7 rotational nursing shifts governed under state labor laws?",
                a: "Nursing and emergency paramedical staff are scheduled under strict 3-shift rotational rosters ensuring compliance with maximum weekly hours (48 hours), mandatory 24-hour continuous rest between shifts, and special night-shift safety clearances for female healthcare personnel.",
              },
            ].map((faq, idx) => (
              <ScrollReveal key={faq.q} direction="up" distance={15} delay={idx * 60}>
                <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs">
                  <h3 className="font-outfit text-base font-bold text-slate-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion Action Section */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="relative rounded-3xl border border-slate-200/90 bg-gradient-to-br from-[#b80f68]/5 via-[#2e0d82]/5 to-[#01adf7]/5 p-8 sm:p-12 text-center overflow-hidden shadow-xs">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7]" />
              <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900 mb-3">
                Ensure Flawless Compliance Across Your Healthcare Facility
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                Connect with Service Dial to audit your hospital or clinic&apos;s payroll structures, doctor retainer contracts, and statutory clinical registers with zero operational disruption.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all active:scale-95"
                >
                  Consult Healthcare Compliance Lead →
                </Link>
                <Link
                  href="/industries"
                  className="rounded-xl px-6 py-3.5 text-xs sm:text-sm font-bold bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 transition-all shadow-2xs"
                >
                  Explore Other Industry Sectors
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
