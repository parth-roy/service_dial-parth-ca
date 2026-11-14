import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Logistics, Supply Chain & Warehousing Workforce Compliance & Flexi-Staffing",
  description:
    "High-velocity flexi-staffing, statutory labour compliance, and high-attrition payroll for warehouse corridors, 3PL providers, and freight hubs across India.",
  keywords: [
    "warehouse labour compliance Dankuni Howrah",
    "logistics flexi staffing solutions Kolkata",
    "3PL payroll outsourcing India",
    "interstate migrant worker compliance logistics",
    "supply chain workforce staffing Dhulagarh",
  ],
  alternates: {
    canonical: "https://servicedialtm.com/industries/logistics-warehousing",
  },
};

export default function LogisticsWarehousingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does Service Dial manage seasonal flash-sale staffing surges for 3PL warehouses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We operate dedicated rapid-deployment talent pools across major logistics corridors like Dankuni, Dhulagarh, and Taratala. We mobilize up to 500+ verified pickers, packers, and forklift operators within 24–72 hours with instant digital Aadhaar KYC and UAN generation.",
        },
      },
      {
        "@type": "Question",
        name: "What compliance is required under the Inter-State Migrant Workmen (ISMW) Act for warehouse hubs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the ISMW Act 1979, establishments employing 5 or more inter-state migrant workmen must obtain principal employer registration, issue statutory passbooks, pay displacement and journey allowances, and provide prescribed residential amenities and healthcare access.",
        },
      },
      {
        "@type": "Question",
        name: "How is high attrition handled without accumulating statutory compliance errors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our high-velocity payroll engine automates daily punch reconciliation, exit markups on the EPFO unified portal, and digital full-and-final (F&F) payouts within 48 hours, eliminating ghost employees and unpaid wage liabilities.",
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
              { label: "Logistics & Warehousing", href: "/industries/logistics-warehousing" },
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
                  SEC-03 · LOGISTICS, 3PL &amp; WAREHOUSING
                </span>
                <span className="inline-flex items-center text-xs font-mono font-semibold text-[#0284c7] bg-[#0284c7]/10 border border-[#0284c7]/20 rounded-full px-3 py-1">
                  High-Velocity Flexi Staffing
                </span>
              </div>

              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
                Logistics &amp; Supply Chain{" "}
                <span className="bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] bg-clip-text text-transparent">
                  workforce velocity.
                </span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mb-8">
                Managing large-scale flexi-staffing, inter-state migrant workmen compliance, and 24/7 rotational warehouse operations across Eastern India&apos;s primary freight corridors (Dankuni, Dhulagarh, Taratala) and national distribution hubs.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all active:scale-95"
                >
                  Request Hub Staffing Scoping →
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

      {/* 4-Pillar Bento Matrix of Logistics Statutory Architecture */}
      <section className="relative py-14 sm:py-20 bg-[#F8F9FA] border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b80f68] block mb-2">
                Supply Chain Compliance Matrix
              </span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900">
                Operational Framework for High-Turnover Distribution Hubs
              </h2>
              <p className="font-sans text-sm text-slate-600 mt-2 leading-relaxed">
                Seamless handling of seasonal volume spikes, migrant protections, and round-the-clock shift governance.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Inter-State Migrant Workmen (ISMW) Compliance",
                badge: "ISMW Act 1979",
                desc: "Registration of principal employers and contractors deploying migrant labour from neighboring states. Automated tracking of displacement allowance, journey fares, mandatory passbook issuance, and suitable accommodation verifications.",
                accent: "from-[#b80f68] to-[#2e0d82]",
                detail: "Guarantees zero inspectorate stoppage on inter-state transit and transshipment hubs.",
              },
              {
                title: "24/7 Shift Rostering & Rest Hours Governance",
                badge: "Continuous Operations",
                desc: "Legally compliant 3-shift rotational rosters adhering to statutory spread-over limits, mandatory 24-hour weekly rest periods, and night-shift transport arrangements, preventing fatigue-related warehouse accidents.",
                accent: "from-[#2e0d82] to-[#01adf7]",
                detail: "Direct integration with biometric turnover gates and automatic break calculations.",
              },
              {
                title: "Workmen Compensation & ESIC Transit Risk Shield",
                badge: "ECA 1923 & ESIC Act",
                desc: "Comprehensive dual-coverage for warehouse forklift drivers, loaders, and dispatch riders. Fast-track incident logging, medical board interface, and statutory compensation disbursement avoiding civil court litigation.",
                accent: "from-[#01adf7] to-[#2e0d82]",
                detail: "100% active insurance coverage eliminating corporate balance sheet liabilities.",
              },
              {
                title: "High-Attrition Rapid Exit & F&F Settlement",
                badge: "48h Settlement Cycle",
                desc: "Instant UAN exit markups on the EPFO unified portal, biometric leave balance reconciliation, and direct Jan Dhan bank payouts within 48 hours of resignation or contract conclusion, mitigating wage disputes.",
                accent: "from-[#b80f68] via-[#2e0d82] to-[#01adf7]",
                detail: "Complete elimination of ghost worker payroll fraud across distributed yards.",
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
                  Corridor Expertise
                </span>
                <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900">
                  Scaling Warehouse Capacity from 50 to 500+ Staff in 72 Hours
                </h2>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  Logistics and 3PL operations frequently experience monthly workforce attrition rates of 20% to 35%, spiked by sudden e-commerce festival volumes. Managing UAN generation, KYC seeding, exit markups, and statutory full-and-final (F&amp;F) settlements manually causes massive compliance leakage.
                </p>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  Service Dial automates daily attendance ingestion, overtime reconciliation under the local Shops Act or Factories Act, and instant digital payout advice files. We ensure 100% on-time minimum wage disbursements directly into verified bank accounts, eliminating cash handling risks and preventing industrial strikes during critical delivery windows.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal direction="right" distance={25} delay={100}>
                <div className="rounded-3xl border border-slate-200/90 bg-[#F8F9FA] p-7 sm:p-8 shadow-xs space-y-4">
                  <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    Logistics Sourcing &amp; Compliance SLAs:
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="font-outfit text-xl font-black text-slate-900">24–72 Hours</div>
                      <div className="text-xs text-slate-500 mt-0.5">Peak Season Warehouse Staff Mobilization</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="font-outfit text-xl font-black text-[#b80f68]">48 Hours</div>
                      <div className="text-xs text-slate-500 mt-0.5">Automated Full &amp; Final Settlement SLA</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="font-outfit text-xl font-black text-[#0284c7]">Zero Default</div>
                      <div className="text-xs text-slate-500 mt-0.5">Scheduled Minimum Wage Payout Guarantee</div>
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
                Supply Chain FAQs
              </span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900">
                Frequently Asked Logistics &amp; Warehouse Inquiries
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              {
                q: "How does Service Dial manage seasonal flash-sale staffing surges for 3PL warehouses?",
                a: "We operate dedicated rapid-deployment talent pools across major logistics corridors like Dankuni, Dhulagarh, and Taratala. We mobilize up to 500+ verified pickers, packers, and forklift operators within 24–72 hours with instant digital Aadhaar KYC and UAN generation.",
              },
              {
                q: "What compliance is required under the Inter-State Migrant Workmen (ISMW) Act for warehouse hubs?",
                a: "Under the ISMW Act 1979, establishments employing 5 or more inter-state migrant workmen must obtain principal employer registration, issue statutory passbooks, pay displacement and journey allowances, and provide prescribed residential amenities and healthcare access.",
              },
              {
                q: "How is high attrition handled without accumulating statutory compliance errors?",
                a: "Our high-velocity payroll engine automates daily punch reconciliation, exit markups on the EPFO unified portal, and digital full-and-final (F&F) payouts within 48 hours, eliminating ghost employees and unpaid wage liabilities.",
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
                Scale Your Supply Chain Operations Seamlessly
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                Connect with Service Dial to deploy compliant flexi-staffing workforces and automated warehouse payroll across Dankuni, Howrah, Dhulagarh, and national logistics corridors.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all active:scale-95"
                >
                  Consult Logistics Compliance Specialists →
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
