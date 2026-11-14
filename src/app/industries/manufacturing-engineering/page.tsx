import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Manufacturing & Heavy Engineering Labour Compliance & Factory Payroll",
  description:
    "Comprehensive Factories Act 1948 compliance, Contract Labour (CLRA) vendor audits, and factory floor payroll across Howrah, Dankuni, Barrackpore, and Pan-India.",
  keywords: [
    "manufacturing plant labour compliance",
    "Factories Act compliance consultant Kolkata",
    "CLRA vendor compliance audit Dankuni",
    "blue collar workforce payroll services Howrah",
    "industrial safety register management West Bengal",
  ],
  alternates: {
    canonical: "https://servicedialtm.com/industries/manufacturing-engineering",
  },
};

export default function ManufacturingEngineeringPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does Service Dial protect factory Occupiers and Directors from criminal liability?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Section 92 of the Factories Act 1948, plant Occupiers carry personal, non-delegable liability for safety infractions and contractor defaults. Service Dial institutes a 100% pre-payment vendor audit checking contractor EPF/ESIC ECR challans, wage registers, and biometric muster rolls before vendor invoices can be approved.",
        },
      },
      {
        "@type": "Question",
        name: "What statutory registers are mandatory for industrial manufacturing units?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Manufacturing units must maintain Form 2 (Factory License), Form 22 (Annual Return), Form H (Overtime Register), Form T (Attendance Muster Roll), Form Q (Maternity Benefits), and certified Standing Orders under the Industrial Employment Act 1946.",
        },
      },
      {
        "@type": "Question",
        name: "How does Service Dial handle overtime (OT) calculations under the Factories Act?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Section 59 requires overtime to be paid at twice the ordinary rate of wages for work exceeding 9 hours in any day or 48 hours in any week. Our automated payroll engine synchronizes biometric gate punches with wage masters to calculate double-rate OT accurately while enforcing statutory quarterly overtime caps.",
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
              { label: "Manufacturing & Engineering", href: "/industries/manufacturing-engineering" },
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
                  SEC-02 · MANUFACTURING &amp; HEAVY ENGINEERING
                </span>
                <span className="inline-flex items-center text-xs font-mono font-semibold text-[#0284c7] bg-[#0284c7]/10 border border-[#0284c7]/20 rounded-full px-3 py-1">
                  Factories Act 1948 &amp; CLRA Audited
                </span>
              </div>

              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
                Manufacturing &amp; Engineering{" "}
                <span className="bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] bg-clip-text text-transparent">
                  plant workforce governance.
                </span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mb-8">
                Industrial plants operate in India&apos;s most stringent statutory environment. Service Dial insulates factory leadership from personal criminal liability, prevents production stoppages, and delivers zero-defect payroll across Howrah, Dankuni, Barrackpore, and national manufacturing belts.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all active:scale-95"
                >
                  Request Plant Compliance Audit →
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

      {/* Asymmetric 4-Pillar Bento Matrix of Industrial Statutory Architecture */}
      <section className="relative py-14 sm:py-20 bg-[#F8F9FA] border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b80f68] block mb-2">
                Plant Statutory Architecture
              </span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900">
                Institutional Defense Against Factory Inspection Citations
              </h2>
              <p className="font-sans text-sm text-slate-600 mt-2 leading-relaxed">
                Comprehensive alignment with Factory Inspectorates, Welfare Commissionerates, and State Labour Directorates.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Factories Act 1948 Comprehensive Mandates",
                badge: "Section 6 & 7 Licensing",
                desc: "Annual factory license renewal (Form 2), consolidated annual return submissions (Form 22), hazardous process risk assessments under Section 41B, safety committee charters (Section 41G), and welfare officer appointments.",
                accent: "from-[#b80f68] to-[#2e0d82]",
                detail: "Includes statutory testing of pressure vessels, lifting machinery, and ventilation compliance registers.",
              },
              {
                title: "CLRA 100% Contractor Pass-Through Firewall",
                badge: "Contract Labour Act 1970",
                desc: "Principal Employer registration (Form I) and contractor licensing audits (Form IV). We verify contractor ECR challans, individual UAN seeding, and proof of bank wage remittances before any contractor invoice is released.",
                accent: "from-[#2e0d82] to-[#01adf7]",
                detail: "Protects plant management against joint-and-several liability for unpaid contractor statutory dues.",
              },
              {
                title: "Standing Orders & Industrial Relations",
                badge: "Standing Orders Act 1946",
                desc: "Drafting, model standing order customization, and formal certification with the Certifying Officer. Advisory on misconduct, domestic inquiries, charge-sheet issuance, suspension protocols, and trade union conciliations.",
                accent: "from-[#01adf7] to-[#2e0d82]",
                detail: "Standardized dispute mediation preventing illegal strikes, lockouts, or unnotified gate blockades.",
              },
              {
                title: "Engineering Minimum Wages & Overtime Governance",
                badge: "Double-Rate OT Compliance",
                desc: "Automated tracking of semi-annual Variable Dearness Allowance (VDA) revisions across unskilled, semi-skilled, skilled, and highly skilled cadres. Continuous audit of Form H overtime registers at mandatory 2x rates under Section 59.",
                accent: "from-[#b80f68] via-[#2e0d82] to-[#01adf7]",
                detail: "Strict adherence to statutory 50-hour quarterly overtime ceilings avoiding inspectorate summons.",
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
                  Occupier Liability Mitigation
                </span>
                <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900">
                  Shielding Factory Directors from Criminal Section 92 Liability
                </h2>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  Under Section 92 of the Factories Act and Section 8A of the Employees&apos; Provident Funds &amp; Miscellaneous Provisions Act, factory Directors and designated Occupiers bear personal, non-delegable criminal liability for safety infractions and sub-contractor defaults. A single unremitted EPF challan or an undocumented machine-guarding accident by a third-party vendor exposes leadership to non-bailable warrants.
                </p>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  Service Dial establishes an airtight vendor compliance firewall. We audit 100% of sub-contractor wage registers, biometric punch logs, ECR challans, and bank remittance certificates before any contractor invoice is released. Our Barrackpore operations desk brings decades of on-ground experience dealing directly with Directorate of Factories inspectors.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal direction="right" distance={25} delay={100}>
                <div className="rounded-3xl border border-slate-200/90 bg-[#F8F9FA] p-7 sm:p-8 shadow-xs space-y-4">
                  <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    Manufacturing Plant SLAs &amp; Metrics:
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="font-outfit text-xl font-black text-slate-900">100% Pass-Through</div>
                      <div className="text-xs text-slate-500 mt-0.5">Contractor EPF/ESIC ECR Audit Pre-Invoice</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="font-outfit text-xl font-black text-[#b80f68]">Zero Citation</div>
                      <div className="text-xs text-slate-500 mt-0.5">Factory Inspectorate Inspection Record</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="font-outfit text-xl font-black text-[#0284c7]">24–48 Hours</div>
                      <div className="text-xs text-slate-500 mt-0.5">Emergency Blue-Collar Flexi Mobilization SLA</div>
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
                Plant Compliance FAQs
              </span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900">
                Frequently Asked Industrial Compliance Questions
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              {
                q: "How does Service Dial protect factory Occupiers and Directors from criminal liability?",
                a: "Under Section 92 of the Factories Act 1948, plant Occupiers carry personal, non-delegable liability for safety infractions and contractor defaults. Service Dial institutes a 100% pre-payment vendor audit checking contractor EPF/ESIC ECR challans, wage registers, and biometric muster rolls before vendor invoices can be approved.",
              },
              {
                q: "What statutory registers are mandatory for industrial manufacturing units?",
                a: "Manufacturing units must maintain Form 2 (Factory License), Form 22 (Annual Return), Form H (Overtime Register), Form T (Attendance Muster Roll), Form Q (Maternity Benefits), and certified Standing Orders under the Industrial Employment Act 1946.",
              },
              {
                q: "How does Service Dial handle overtime (OT) calculations under the Factories Act?",
                a: "Section 59 requires overtime to be paid at twice the ordinary rate of wages for work exceeding 9 hours in any day or 48 hours in any week. Our automated payroll engine synchronizes biometric gate punches with wage masters to calculate double-rate OT accurately while enforcing statutory quarterly overtime caps.",
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
                Secure Your Manufacturing Operations Against Statutory Risk
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                Headquartered in the historic industrial belt of Barrackpore, Service Dial has managed complex factory compliance and blue-collar staffing across Howrah, Dankuni, and Pan-India manufacturing corridors since 2016.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all active:scale-95"
                >
                  Schedule On-Site Plant Inspection →
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
