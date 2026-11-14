import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "IT, ITeS & Startup Payroll & Compliance Solutions",
  description:
    "End-to-end payroll outsourcing and statutory compliance for software, fintech, and ITeS enterprises. 24/7 night shift permissions, multi-state PT, and ESOP withholding.",
  keywords: [
    "IT company payroll outsourcing India",
    "ITeS statutory compliance Salt Lake Sector V",
    "startup payroll management Bangalore Kolkata",
    "remote employee professional tax compliance",
    "Shops and establishments 24/7 IT exemption",
  ],
  alternates: {
    canonical: "https://servicedialtm.com/industries/it-ites-startups",
  },
};

export default function ItItesStartupsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does Service Dial manage multi-state Professional Tax for remote tech employees?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We register and file Professional Tax across every employee's respective domicile state (e.g. West Bengal, Karnataka, Maharashtra, Telangana), ensuring automated monthly deduction and return submission under local state schedules.",
        },
      },
      {
        "@type": "Question",
        name: "Can Service Dial secure 24/7 continuous operation and night shift permits for female IT staff?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we handle statutory clearances under State Shops & Commercial Establishments Acts, including mandatory female worker night-shift approvals, security transport verification, and rotational work schedules.",
        },
      },
      {
        "@type": "Question",
        name: "How are ESOP perquisite taxes computed and withheld during employee share vesting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our payroll desk calculates perquisite tax under Section 192 of the Income Tax Act at the time of exercise based on FMV (Fair Market Value), ensuring accurate quarterly Form 24Q reporting and digital Form 16 issuance.",
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
              { label: "IT & Startups", href: "/industries/it-ites-startups" },
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
                  SEC-01 · HIGH-GROWTH TECH &amp; ITES
                </span>
                <span className="inline-flex items-center text-xs font-mono font-semibold text-[#0284c7] bg-[#0284c7]/10 border border-[#0284c7]/20 rounded-full px-3 py-1">
                  Remote &amp; GCC Ready
                </span>
              </div>

              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
                IT, ITeS &amp; Tech Startup{" "}
                <span className="bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] bg-clip-text text-transparent">
                  workforce governance.
                </span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mb-8">
                Designed specifically for fast-growing software engineering teams, SaaS platforms, and Global Capability Centers (GCCs). Managing remote engineers across multiple Indian states, equity perquisite taxation, and 24/7 continuous operations.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all active:scale-95"
                >
                  Request Tech Workforce Scoping →
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

      {/* 4-Pillar Bento Matrix of Statutory Architecture */}
      <section className="relative py-14 sm:py-20 bg-[#F8F9FA] border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b80f68] block mb-2">
                Core Compliance Matrix
              </span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900">
                Statutory Challenges &amp; Technical Solutions
              </h2>
              <p className="font-sans text-sm text-slate-600 mt-2 leading-relaxed">
                How Service Dial automates the friction of distributed engineering teams under Indian labor law.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Multi-State Remote Work Professional Tax",
                badge: "State Tax Compliance",
                desc: "Remote hiring across Tier 1 and Tier 2 cities triggers separate registrations under each state's PT department. We handle multi-state PT deduction matching each engineer's residential state (West Bengal, Karnataka, Maharashtra, Telangana) with unified GRIPS/IFMS payment reconciliation.",
                accent: "from-[#b80f68] to-[#2e0d82]",
              },
              {
                title: "24/7 Operations & Night-Shift Permissions",
                badge: "Shops Act Clearances",
                desc: "Statutory exemptions under State Shops & Establishments Acts for continuous global software deployment, night shifts, and mandatory cab logistics compliance for female engineering staff to ensure zero inspection citations.",
                accent: "from-[#2e0d82] to-[#01adf7]",
              },
              {
                title: "ESOP & Perquisite Tax Withholding",
                badge: "Section 192 Income Tax",
                desc: "Accurate TDS computation on stock options (perquisite tax at exercise) under Section 192 based on certified Fair Market Value (FMV). Guarantees flawless quarterly Form 24Q e-filing and digital Form 16 distribution.",
                accent: "from-[#01adf7] to-[#2e0d82]",
              },
              {
                title: "Bilateral IP & Confidentiality Assignment",
                badge: "Section 8(2) DPDP Standards",
                desc: "Every contract developer, flexi engineer, and payroll record is bound under bilateral intellectual property assignment covenants and DPDP Act 2023 data confidentiality, safeguarding proprietary software repositories.",
                accent: "from-[#b80f68] via-[#2e0d82] to-[#01adf7]",
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
                    <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {card.desc}
                    </p>
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
                  Sectoral Nuances
                </span>
                <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900">
                  Scaling Tech Teams Past 50 Employees Without Compliance Friction
                </h2>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  As tech enterprises grow past 50 staff, compliance complexity spikes exponentially. Multi-state hiring exposes founders to surprise show-cause notices for missing state PT challans, incorrect EPS wage ceiling deductions under the new ₹25,000 threshold, or failure to maintain electronic muster rolls.
                </p>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  Service Dial bridges your developer workflows (biometric APIs, Slack, HRMS) with statutory compliance boards. We guarantee 100% on-time salary disbursals, zero penalty notices, and seamless audits for Tier 1 institutional investors.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal direction="right" distance={25} delay={100}>
                <div className="rounded-3xl border border-slate-200/90 bg-[#F8F9FA] p-7 sm:p-8 shadow-xs space-y-4">
                  <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    Tech Sourcing &amp; Compliance SLAs:
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="font-outfit text-xl font-black text-slate-900">24–48 Hours</div>
                      <div className="text-xs text-slate-500 mt-0.5">Verified IT Shortlist Delivery SLA</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="font-outfit text-xl font-black text-[#b80f68]">100% On-Time</div>
                      <div className="text-xs text-slate-500 mt-0.5">TDS 24Q &amp; Digital Form 16 Issuance</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="font-outfit text-xl font-black text-[#0284c7]">Zero Penalty</div>
                      <div className="text-xs text-slate-500 mt-0.5">Full Statutory Legal Indemnification</div>
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
                Tech Sector FAQs
              </span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900">
                Frequently Asked Compliance Questions
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              {
                q: "How does Service Dial manage multi-state Professional Tax for remote tech employees?",
                a: "We register and file Professional Tax across every employee's respective domicile state (e.g. West Bengal, Karnataka, Maharashtra, Telangana), ensuring automated monthly deduction and return submission under local state schedules.",
              },
              {
                q: "Can Service Dial secure 24/7 continuous operation and night shift permits for female IT staff?",
                a: "Yes, we handle statutory clearances under State Shops & Commercial Establishments Acts, including mandatory female worker night-shift approvals, security transport verification, and rotational work schedules.",
              },
              {
                q: "How are ESOP perquisite taxes computed and withheld during employee share vesting?",
                a: "Our payroll desk calculates perquisite tax under Section 192 of the Income Tax Act at the time of exercise based on FMV (Fair Market Value), ensuring accurate quarterly Form 24Q reporting and digital Form 16 issuance.",
              },
            ].map((faq, idx) => (
              <ScrollReveal key={idx} direction="up" distance={20} delay={idx * 60}>
                <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs">
                  <h3 className="font-outfit text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                    <span className="text-[#b80f68] font-mono font-black shrink-0">Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                    {faq.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Sector CTA Dock */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="relative rounded-3xl border border-slate-200/90 bg-[#F8F9FA] p-8 sm:p-12 overflow-hidden shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7]" />
              <div className="max-w-xl">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b80f68] block mb-2">
                  Tailored Tech Sourcing &amp; Compliance Proposal
                </span>
                <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                  Powering Tech Workforces Across India
                </h2>
                <p className="font-sans text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  From Salt Lake Sector V to Bengaluru and Hyderabad, Service Dial delivers zero-defect payroll and airtight compliance for high-velocity tech teams under mutual NDA.
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all active:scale-95"
                >
                  Get Tech Workforce Proposal →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
