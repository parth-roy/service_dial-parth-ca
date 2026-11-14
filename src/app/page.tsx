import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Staffing, Payroll & Compliance Solutions",
  description:
    "Service Dial delivers premium staffing, HRMS & payroll, finance & audit, and compliance services across India. Established 2016. 100% referenceable clients.",
  alternates: { canonical: "https://servicedialtm.com" },
};

const stats = [
  { value: "2016", label: "Established" },
  { value: "100%", label: "Referenceable Clients" },
  { value: "24–72h", label: "Avg. Sourcing Time" },
  { value: "NDA", label: "Confidentiality Guaranteed" },
];

const services = [
  {
    slug: "staffing-and-recruitment",
    title: "Staffing & Recruitment",
    tagline: "TALENT SOURCING & EXECUTIVE SEARCH",
    headline: "Pan-India executive search and verified contract workforce deployed under strict NDA.",
    description:
      "From CXO-level leadership mandates to large-scale blue collar drives, we source verified talent with a 7:10 submission-to-selection ratio.",
    highlights: ["IT & Tech Staffing", "CXO / Leadership Hiring", "Blue Collar & General Staffing", "Pan-India & Global Mandates"],
  },
  {
    slug: "hrms-and-payroll",
    title: "HRMS & Payroll",
    tagline: "PAYROLL CENTRALISED AND AUTOMATED",
    headline: "100% on-time payroll processing, statutory tax deductions, and automated salary disbursement.",
    description:
      "End-to-end payroll management, vendor compliance, and labour law adherence — so your HR team focuses on people, not paperwork.",
    highlights: ["Payroll Processing & Advice", "Vendor & Contractor Audits", "TDS 24Q & Digital Form 16", "2026 EPFO Wage Ceiling Desk"],
  },
  {
    slug: "finance-and-audit",
    title: "Finance & Audit",
    tagline: "SMOOTH AP AND AR ACROSS THE ORGANISATION",
    headline: "Enterprise accounts payable, receivable automation, and statutory internal audits.",
    description:
      "Accounts payable, receivable, record-to-report (R2R), and audit functions delivered by domain specialists.",
    highlights: ["Accounts Payable (AP)", "Accounts Receivable (AR)", "Record to Report (R2R)", "Internal & Fixed Asset Audit"],
  },
  {
    slug: "compliance-services",
    title: "Compliance Services",
    tagline: "STATUTORY LABOUR LAW & FACTORY ASSURANCE",
    headline: "Proactive labour law compliance, EPFO/ESIC administration, and factory inspection assurance.",
    description:
      "Deep regulatory compliance integrated across HR, payroll, and finance functions — keeping you ahead of statutory obligations.",
    highlights: ["Statutory Returns Filings", "Factory & CLRA Licensing", "Inspection Defense Desk", "West Bengal PT 2026 Revision"],
  },
];

const regulatoryCards = [
  {
    href: "/resources/epfo-wage-ceiling-25000",
    badge: "CENTRAL LABOUR MINISTRY",
    title: "EPFO Wage Ceiling Hike to ₹25,000",
    desc: "Full employer CTC impact analysis, mandatory inclusion of previously excluded staff, EPS Account 10 re-capping at ₹2,083, and 50% Wage Code compliance.",
    tags: ["₹25,000 Threshold", "EPS ₹2,083 Re-cap", "50% Wage Code Rule"],
    cta: "Read Employer Breakdown",
  },
  {
    href: "/resources/west-bengal-professional-tax-2026",
    badge: "WEST BENGAL STATE SCHEDULE",
    title: "West Bengal Professional Tax (2026 Slabs)",
    desc: "Act VI of 1979 schedule restructuring. Gross wages under ₹20,000 exempt, February ₹300 spike, ERC vs EC dual compliance, and Form III-A annual returns.",
    tags: ["Act VI of 1979", "₹20,000 Exemption", "Form III-A Return"],
    cta: "View Revised Slabs",
  },
  {
    href: "/resources/west-bengal-labour-welfare-fund",
    badge: "BI-ANNUAL STATUTORY FILINGS",
    title: "WB Labour Welfare Fund (July 15 & Jan 15)",
    desc: "Statutory rates (Employee ₹3, Employer ₹30), Form D filing procedures, and Section 9 prohibition against deducting employer shares from employee wages.",
    tags: ["Section 9 Compliance", "₹3 / ₹30 Remittance", "Form D Filing"],
    cta: "Review WBLWF Calendar",
  },
];

const caseStudies = [
  {
    role: "VP Data Science",
    company: "MNC – 10,000+ Employees",
    market: "India",
    metric: "15+ yrs Big Data expertise",
    tags: ["Hadoop", "Kafka", "Global Consulting"],
  },
  {
    role: "Vice President – SAP Sales",
    company: "Global Enterprise",
    market: "United States",
    metric: "10-day interview-to-selection",
    tags: ["SAP", "7:10 Submission Ratio", "24–72 hr Sourcing"],
  },
  {
    role: "Sales Head – BFSI",
    company: "MNC IT Company",
    market: "United Kingdom",
    metric: "6-week green-field turnaround",
    tags: ["BFSI", "MNC", "UK Market"],
  },
  {
    role: "Senior Sales Director – Product Engineering",
    company: "Tier 1 & Tier 2 MNCs",
    market: "India",
    metric: "Diversity hiring specialist",
    tags: ["Product Engineering", "Diversity", "Tier 1 Orgs"],
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-sd-border bg-[#0A101D] min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] flex flex-col justify-between">
        {/* Background Image & Atmospheric Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.webp"
            alt="Collaborative Finance Analytics Office"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover"
            style={{
              objectPosition: "center top",
              filter: "blur(2px)",
              transform: "scale(1.02)",
            }}
          />
          {/* Translucent 3-Color Diagonal Tint Overlay (Cyan -> Purple -> Pink) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(8, 38, 64, 0.82) 0%, rgba(55, 18, 92, 0.76) 50%, rgba(135, 18, 80, 0.80) 100%)",
            }}
          />

          {/* Tri-Color Radiant Blur Orbs along the diagonal to enrich brand luminescence */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Left Upper Corner: Cyan Radiant Glow */}
            <div
              className="absolute -top-36 -left-36 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] rounded-full opacity-55 blur-[120px]"
              style={{ background: "#00D0C0" }}
            />

            {/* Center Diagonal: Purple Radiant Glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] rounded-full opacity-45 blur-[140px]"
              style={{ background: "#7028F0" }}
            />

            {/* Right Down Corner: Hot Pink Radiant Glow */}
            <div
              className="absolute -bottom-36 -right-36 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] rounded-full opacity-55 blur-[120px]"
              style={{ background: "#E91E8C" }}
            />
          </div>
        </div>

        <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 flex-1 flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Statement */}
            <ScrollReveal direction="left" distance={30}>
              <div>
                {/* Eyebrow: Uppercase Category with Horizontal Rule Line (Image 1 Reference Style) */}
                <div className="flex items-center gap-3.5 sm:gap-4 mb-6">
                  <span className="font-outfit text-xs sm:text-[13px] font-bold uppercase tracking-[0.22em] text-white">
                    SERVICE DIAL <span className="text-white/60 font-medium">/ ESTABLISHED 2016</span>
                  </span>
                  <span className="h-px w-16 sm:w-24 bg-white/40" />
                </div>

                <h1 className="font-outfit text-4xl sm:text-5xl lg:text-[52px] xl:text-[58px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white max-w-2xl">
                  Simplifying staffing,
                  <br />
                  payroll &amp; compliance
                  <br />
                  for your <span className="stroke-text">business.</span>
                </h1>

                <p className="mt-6 text-white/85 text-base sm:text-lg leading-relaxed max-w-lg font-normal">
                  Technology-driven, tailor-made staffing, payroll, finance, and
                  compliance solutions — trusted by enterprises across India and
                  globally.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex justify-center items-center rounded-xl px-6 py-3.5 text-sm font-semibold bg-sd-pink text-white hover:bg-sd-pink-dark transition-all shadow-md hover:shadow-lg"
                  >
                    Start a Conversation
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex justify-center items-center rounded-xl px-6 py-3.5 text-sm font-semibold border border-white/25 bg-white/10 text-white hover:bg-white/20 transition-all backdrop-blur-sm shadow-xs"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Stats grid */}
            <ScrollReveal direction="right" distance={30} delay={100}>
              <div className="grid grid-cols-2 gap-3.5 lg:pt-10">
                {stats.map((s) => (
                  <div
                    key={s.value}
                    className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-5 sm:p-6 shadow-lg hover:border-white/30 hover:bg-white/15 transition-all duration-200"
                  >
                    <p className="text-3xl font-black tracking-tight text-white">
                      {s.value}
                    </p>
                    <p className="mt-1.5 text-sm font-medium text-white/80">{s.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ── TRUST BAR DOCKED AT HERO BOTTOM (Mirror Glass Effect) ── */}
        <div className="relative z-10 w-full border-t border-white/15 bg-white/[0.04] backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
          <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 2xl:px-12 py-3.5 sm:py-4">
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-y-2.5 gap-x-4 sm:gap-x-6 lg:gap-x-3 xl:gap-x-6 2xl:gap-x-8 text-[11px] sm:text-xs xl:text-[13px] font-medium text-white/90">
              {[
                "Strict NDA Confidentiality",
                "100% Referenceable Customers Globally",
                "24–72 hr Average Sourcing Time",
                "CXO to Blue Collar Mandates",
                "Pan-India & Global Coverage",
                "Section 8(2) DPDP Act Compliant",
              ].map((t) => (
                <span key={t} className="flex items-center gap-2 whitespace-nowrap shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-sd-pink shadow-[0_0_8px_rgba(233,30,140,0.9)]" />
                  <span>{t}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2026 REGULATORY ACTION DESK ── */}
      <section className="py-20 lg:py-28 bg-white border-b border-sd-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal direction="up" distance={25}>
            {/* Top Eyebrow with Full Horizontal Rule (Matching What We Do) */}
            <div className="flex items-center gap-3.5 sm:gap-4 mb-10 sm:mb-12">
              <span className="w-2.5 h-2.5 rounded-full bg-sd-pink shrink-0" />
              <span className="font-outfit text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.24em] text-slate-900 whitespace-nowrap">
                CRITICAL 2026 STATUTORY AMENDMENTS
              </span>
              <span className="h-px flex-1 bg-slate-200/90" />
            </div>

            {/* Split Header: Big & Wide SEO Headline on Left + Distinctive Editorial Typography on Right */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-14 sm:mb-16">
              {/* Left: Wide Majestic Headline with Text Art */}
              <div className="lg:col-span-7 pb-8 lg:pb-0 lg:pr-12 lg:border-r border-slate-200/90">
                <h2 className="font-outfit text-3xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-black leading-[1.06] tracking-tight text-slate-900">
                  Labour law &amp;
                  <br />
                  regulatory action desk.
                  <br />
                  Mandates for <span className="stroke-text-dark font-black">2026.</span>
                </h2>
                <div className="mt-8 flex items-center gap-3">
                  <span className="h-0.5 w-16 bg-sd-pink rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Real-Time Statutory Advisory
                  </span>
                </div>
              </div>

              {/* Right: Highly Visible, Attractive Editorial Description */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-4 lg:pl-2">
                <p className="font-outfit text-base sm:text-lg lg:text-[19px] font-bold text-slate-900 leading-snug">
                  Proactive legal intelligence protecting enterprises against inspection notices, retroactive wage liabilities, and statutory penalties.
                </p>
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                  Our regulatory desk tracks legislative gazettes and tribunal notifications across Central and State labour bodies. Access employer CTC simulations, slab restructuring models, and audit compliance directories before deadlines strike.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-5 text-xs font-bold uppercase tracking-wider">
                  <Link
                    href="/resources"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2e0d82] hover:text-[#1e075b] transition-colors group"
                  >
                    <span>Explore All Statutory Intelligence</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 3 Regulatory Action Cards (Polished Cards Style matching What We Do) */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {regulatoryCards.map((card, idx) => (
              <ScrollReveal key={card.title} direction="up" distance={30} delay={idx * 100}>
                <Link
                  href={card.href}
                  className="h-full group flex flex-col justify-between p-7 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white hover:border-[#2e0d82]/35 shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <div>
                    {/* Uppercase Tagline */}
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-sd-pink mb-4 block">
                      {card.badge}
                    </span>

                    {/* Headline: Remains Pink on Hover */}
                    <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 leading-snug mb-3 group-hover:text-sd-pink transition-colors">
                      {card.title}
                    </h3>

                    {/* Detail Paragraph */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {card.desc}
                    </p>
                  </div>

                  <div>
                    {/* Highlights Tiles with Darker Purple (#2e0d82) Outline & Solid White Background */}
                    <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-100 mt-2">
                      {card.tags.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white text-slate-700 border border-[#2e0d82]/20 group-hover:border-[#2e0d82]/50 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2e0d82]" />
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Action Row: Neutral by default, turns Darker Purple on Hover */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-600 group-hover:text-[#2e0d82] group-hover:translate-x-0.5 transition-all inline-flex items-center gap-1.5">
                        <span>{card.cta}</span>
                        <span>→</span>
                      </span>
                      {/* Up-Right Diagonal Arrow (↗), Neutral by default, Darker Purple on Hover, No BG fill */}
                      <span className="w-8 h-8 rounded-full border border-slate-200 text-slate-400 bg-transparent flex items-center justify-center group-hover:border-[#2e0d82] group-hover:text-[#2e0d82] transition-all duration-200">
                        <svg
                          className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 17 17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── SERVICES / WHAT WE DO ── */}
      <section className="py-20 lg:py-28 bg-white border-b border-sd-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal direction="up" distance={25}>
            {/* Top Eyebrow with Full Horizontal Rule (Exact Reference Match) */}
            <div className="flex items-center gap-3.5 sm:gap-4 mb-10 sm:mb-12">
              <span className="w-2.5 h-2.5 rounded-full bg-sd-pink shrink-0" />
              <span className="font-outfit text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.24em] text-slate-900 whitespace-nowrap">
                WHAT WE DO
              </span>
              <span className="h-px flex-1 bg-slate-200/90" />
            </div>

            {/* Split Header: Big & Wide SEO Headline on Left + Distinctive Editorial Typography on Right */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-14 sm:mb-16">
              {/* Left: Wide Majestic Headline with Text Art */}
              <div className="lg:col-span-7 pb-8 lg:pb-0 lg:pr-12 lg:border-r border-slate-200/90">
                <h2 className="font-outfit text-3xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-black leading-[1.06] tracking-tight text-slate-900">
                  Institutional staffing, payroll
                  <br />
                  &amp; statutory compliance.
                  <br />
                  Engineered for <span className="stroke-text-dark font-black">scale.</span>
                </h2>
                <div className="mt-8 flex items-center gap-3">
                  <span className="h-0.5 w-16 bg-sd-pink rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Four Integrated Practice Desks
                  </span>
                </div>
              </div>

              {/* Right: Highly Visible, Attractive Editorial Description */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-4 lg:pl-2">
                <p className="font-outfit text-base sm:text-lg lg:text-[19px] font-bold text-slate-900 leading-snug">
                  One unified partner governing your workforce, salary disbursements, financial books, and statutory inspection defense.
                </p>
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                  Service Dial organizes its enterprise managed services around four specialized practice desks. By eliminating fragmented vendors, organizations achieve guaranteed 100% on-time payroll, zero-defect labour compliance, and verified executive hires under bilateral confidentiality.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-5 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    100% SLA Guarantee
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-sd-pink" />
                    Strict NDA Protected
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 4 Pillars Cards Grid (Polished Cards Style) */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((svc, idx) => (
              <ScrollReveal key={svc.slug} direction={idx % 2 === 0 ? "left" : "right"} distance={30} delay={idx * 80}>
                <Link
                  href={`/services/${svc.slug}`}
                  className="h-full group flex flex-col justify-between p-7 sm:p-9 rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white hover:border-[#2e0d82]/35 shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <div>
                    {/* Uppercase Tagline */}
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-sd-pink mb-4 block">
                      {svc.tagline}
                    </span>

                    {/* Proposition Headline: Remains Pink on Hover */}
                    <h3 className="text-lg sm:text-[20px] font-bold text-slate-900 leading-snug mb-3 group-hover:text-sd-pink transition-colors">
                      {svc.headline}
                    </h3>

                    {/* Detail Paragraph */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {svc.description}
                    </p>
                  </div>

                  <div>
                    {/* Highlights Tiles with Darker Midnight Royal Purple (#2e0d82) Outline & Solid White Background */}
                    <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-100 mt-2">
                      {svc.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white text-slate-700 border border-[#2e0d82]/20 group-hover:border-[#2e0d82]/50 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2e0d82]" />
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Action Row: Neutral by default, turns Darker Purple (#2e0d82) on Hover */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-600 group-hover:text-[#2e0d82] group-hover:translate-x-0.5 transition-all inline-flex items-center gap-1.5">
                        <span>Explore {svc.title}</span>
                        <span>→</span>
                      </span>
                      {/* Up-Right Diagonal Arrow (↗), Neutral by default, Darker Purple on Hover, No BG fill */}
                      <span className="w-8 h-8 rounded-full border border-slate-200 text-slate-400 bg-transparent flex items-center justify-center group-hover:border-[#2e0d82] group-hover:text-[#2e0d82] transition-all duration-200">
                        <svg
                          className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 17 17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="py-20 lg:py-28 border-t border-sd-border bg-[#F8F9FA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-sd-pink mb-3">
                Proven Track Record
              </p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-sd-text">
                Mandates we&apos;ve delivered.
              </h2>
              <p className="mt-4 text-sd-muted max-w-xl">
                Real placements, real outcomes — across markets, industries, and
                seniority levels. All client details protected under strict NDA.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {caseStudies.map((cs, idx) => (
              <ScrollReveal key={cs.role} direction="up" distance={25} delay={idx * 80}>
                <div
                  className="h-full rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <p className="text-xs text-[#0284c7] font-mono font-bold uppercase tracking-wider mb-2">
                      {cs.market}
                    </p>
                    <p className="font-outfit text-base font-bold text-slate-900 leading-tight mb-1">
                      {cs.role}
                    </p>
                    <p className="text-xs text-slate-500 mb-3">{cs.company}</p>
                    <p className="text-sm font-semibold text-slate-800 mb-4 border-l-2 border-[#b80f68] pl-3">
                      {cs.metric}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                    {cs.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="relative rounded-3xl border border-slate-200/90 bg-[#F8F9FA] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7]" />
              <div className="max-w-2xl">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b80f68] block mb-2">
                  Confidential Enterprise Sourcing
                </span>
                <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-4 leading-tight">
                  Ready to simplify your operations?
                </h2>
                <p className="text-slate-600 mb-8 text-base leading-relaxed">
                  Whether you need a CXO placed in 72 hours or end-to-end payroll
                  compliance across 1,000 employees — let&apos;s talk under mutual NDA.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all"
                >
                  Start a Conversation →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
