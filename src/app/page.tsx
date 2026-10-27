import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PayrollFeeEstimator from "@/components/calculator/PayrollFeeEstimator";

export const metadata: Metadata = {
  title: "Staffing, Payroll & Compliance Solutions | Service Dial",
  description:
    "Service Dial delivers premium staffing, HRMS & payroll, finance & audit, and compliance services across India. Established 2016. 100% referenceable clients.",
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
    tagline: "Premium. IT. Blue Collar. CXO.",
    description:
      "From CXO-level leadership mandates to large-scale blue collar drives, we source verified talent with a 7:10 submission-to-selection ratio.",
    highlights: ["IT & Tech Staffing", "CXO / Leadership Hiring", "Blue Collar & General Staffing", "Pan-India & Global Mandates"],
  },
  {
    slug: "hrms-and-payroll",
    title: "HRMS & Payroll",
    tagline: "Accurate. Compliant. Automated.",
    description:
      "End-to-end payroll management, vendor compliance, and labour law adherence — so your HR team focuses on people, not paperwork.",
    highlights: ["Payroll Processing", "Vendor Compliance", "Labour Law Adherence", "HRMS Technology Integration"],
  },
  {
    slug: "finance-and-audit",
    title: "Finance & Audit",
    tagline: "Reliable. Transparent. Controlled.",
    description:
      "Accounts payable, receivable, record-to-report (R2R), and audit functions delivered by domain specialists.",
    highlights: ["Accounts Payable (AP)", "Accounts Receivable (AR)", "Record to Report (R2R)", "Internal & External Audit"],
  },
  {
    slug: "compliance-services",
    title: "Compliance Services",
    tagline: "Proactive. Thorough. Risk-Free.",
    description:
      "Deep regulatory compliance integrated across HR, payroll, and finance functions — keeping you ahead of statutory obligations.",
    highlights: ["Statutory Compliance", "Labour Law Filings", "Regulatory Reporting", "Risk Assessment"],
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
      <section className="relative overflow-hidden border-b border-sd-border bg-[#0A101D] min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] flex items-center">
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

        <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Statement */}
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

            {/* Right: Stats grid */}
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
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="border-b border-sd-border bg-[#0A101D] text-white/75">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs">
            {[
              "Strict NDA Confidentiality",
              "100% Referenceable Customers Globally",
              "24–72 hr Average Sourcing Time",
              "CXO to Blue Collar Mandates",
              "Pan-India & Global Coverage",
              "Section 8(2) DPDP Act Compliant",
            ].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-sd-pink" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── 2026 REGULATORY ACTION DESK ── */}
      <section className="py-12 bg-sd-bg-2 border-b border-sd-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sd-pink/30 bg-sd-pink/5 px-3 py-1 mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sd-pink animate-pulse" />
                <span className="text-xs font-semibold text-sd-pink uppercase tracking-wider">
                  Critical 2026 Statutory Amendments
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-sd-text tracking-tight">
                Labour Law & Regulatory Action Desk
              </h2>
            </div>
            <Link
              href="/resources"
              className="text-xs font-bold text-sd-pink hover:text-sd-pink-dark transition-colors flex items-center gap-1 self-start sm:self-end"
            >
              <span>View All Statutory Intelligence</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/resources/epfo-wage-ceiling-25000"
              className="p-6 rounded-2xl bg-white border border-sd-border hover:border-sd-pink/40 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 inline-block mb-3">
                  Central Labour Ministry
                </span>
                <h3 className="text-base font-black text-sd-text mb-2 group-hover:text-sd-pink transition-colors">
                  EPFO Wage Ceiling Hike to ₹25,000
                </h3>
                <p className="text-xs text-sd-muted leading-relaxed mb-4">
                  Full employer CTC impact analysis, mandatory inclusion of previously excluded staff, EPS Account 10 re-capping at ₹2,083, and 50% Wage Code compliance.
                </p>
              </div>
              <span className="text-xs font-bold text-sd-pink flex items-center gap-1">
                Read Employer Breakdown →
              </span>
            </Link>

            <Link
              href="/resources/west-bengal-professional-tax-2026"
              className="p-6 rounded-2xl bg-white border border-sd-border hover:border-sd-pink/40 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 inline-block mb-3">
                  West Bengal State Schedule
                </span>
                <h3 className="text-base font-black text-sd-text mb-2 group-hover:text-sd-pink transition-colors">
                  West Bengal Professional Tax (2026 Slabs)
                </h3>
                <p className="text-xs text-sd-muted leading-relaxed mb-4">
                  Act VI of 1979 schedule restructuring. Gross wages under ₹20,000 exempt, February ₹300 spike, ERC vs EC dual compliance, and Form III-A annual returns.
                </p>
              </div>
              <span className="text-xs font-bold text-sd-pink flex items-center gap-1">
                View Revised Slabs →
              </span>
            </Link>

            <Link
              href="/resources/west-bengal-labour-welfare-fund"
              className="p-6 rounded-2xl bg-white border border-sd-border hover:border-sd-pink/40 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800 inline-block mb-3">
                  Bi-Annual Filings
                </span>
                <h3 className="text-base font-black text-sd-text mb-2 group-hover:text-sd-pink transition-colors">
                  WB Labour Welfare Fund (July 15 & Jan 15)
                </h3>
                <p className="text-xs text-sd-muted leading-relaxed mb-4">
                  Statutory rates (Employee ₹3, Employer ₹30), Form D filing procedures, and Section 9 prohibition against deducting employer shares from employee wages.
                </p>
              </div>
              <span className="text-xs font-bold text-sd-pink flex items-center gap-1">
                Review WBLWF Calendar →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE PAYROLL FEE ESTIMATOR TOOL ── */}
      <section className="py-16 sm:py-20 border-b border-sd-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-sd-pink block mb-2">
              Transparent Pricing Calculator
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-sd-text tracking-tight mb-3">
              Calculate Your Monthly Managed Services Retainer
            </h2>
            <p className="text-sd-muted text-sm sm:text-base leading-relaxed">
              Explore our volume-calibrated per-employee-per-month (PEPM) fee structure across payroll, statutory compliance filings, and labour law audit modules.
            </p>
          </div>
          <PayrollFeeEstimator />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-sd-pink mb-3">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-sd-text">
              Four pillars. One trusted partner.
            </h2>
            <p className="mt-4 text-sd-muted max-w-xl">
              Each service is delivered by domain specialists with deep
              regulatory knowledge and enterprise-grade confidentiality.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="group relative rounded-lg border border-sd-border bg-white p-6 hover:border-sd-pink/40 hover:shadow-sm transition-all"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-sd-pink opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg" />

                <p className="text-xs font-semibold text-sd-pink mb-2">
                  {svc.tagline}
                </p>
                <h3 className="text-lg font-bold text-sd-text mb-2">
                  {svc.title}
                </h3>
                <p className="text-sm text-sd-muted leading-relaxed mb-4">
                  {svc.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {svc.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-xs px-2 py-0.5 rounded border border-sd-border text-sd-muted bg-sd-bg-2"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-xs font-semibold text-sd-pink flex items-center gap-1">
                  Learn more
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="py-20 lg:py-28 border-t border-sd-border bg-sd-bg-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-sd-pink mb-3">
              Proven Track Record
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-sd-text">
              Mandates we've delivered.
            </h2>
            <p className="mt-4 text-sd-muted max-w-xl">
              Real placements, real outcomes — across markets, industries, and
              seniority levels. All client details protected under strict NDA.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {caseStudies.map((cs) => (
              <div
                key={cs.role}
                className="rounded-lg border border-sd-border bg-white p-5 shadow-sm"
              >
                <p className="text-xs text-sd-pink font-semibold uppercase tracking-widest mb-3">
                  {cs.market}
                </p>
                <p className="text-base font-bold text-sd-text leading-tight mb-1">
                  {cs.role}
                </p>
                <p className="text-xs text-sd-muted mb-3">{cs.company}</p>
                <p className="text-sm font-semibold text-sd-text-2 mb-4 border-l-2 border-sd-pink pl-3">
                  {cs.metric}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cs.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-1.5 py-0.5 rounded bg-sd-bg-2 text-sd-muted border border-sd-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 border-t border-sd-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-sd-pink/20 bg-gradient-to-r from-sd-pink/5 to-transparent p-8 lg:p-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-sd-text mb-4">
                Ready to simplify your operations?
              </h2>
              <p className="text-sd-muted mb-8 text-base">
                Whether you need a CXO placed in 72 hours or end-to-end payroll
                compliance across 1,000 employees — let's talk.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center rounded px-6 py-3 text-sm font-semibold bg-sd-pink text-white hover:bg-sd-pink-dark transition-colors"
              >
                Get in Touch →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
