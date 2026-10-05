import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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
      <section className="relative overflow-hidden border-b border-sd-border">
        {/* Subtle dot grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(233,30,140,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Statement */}
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-sd-border bg-white px-3 py-1 mb-6 shadow-xs">
                <Image
                  src="/logo.png"
                  alt="Service Dial Emblem"
                  width={18}
                  height={17}
                  className="object-contain"
                />
                <span className="text-xs font-semibold text-sd-text">
                  Service Dial <span className="text-sd-muted font-normal">· Established 2016 · Pan-India</span>
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-sd-text">
                Simplifying
                <br />
                <span className="gradient-text">Business.</span>
              </h1>

              <p className="mt-6 text-sd-muted text-base sm:text-lg leading-relaxed max-w-lg">
                Technology-driven, tailor-made staffing, payroll, finance, and
                compliance solutions — trusted by enterprises across India and
                globally.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center rounded px-6 py-3 text-sm font-semibold bg-sd-pink text-white hover:bg-sd-pink-dark transition-colors"
                >
                  Start a Conversation
                </Link>
                <Link
                  href="/services"
                  className="inline-flex justify-center items-center rounded px-6 py-3 text-sm font-semibold border border-sd-border text-sd-muted hover:text-sd-text hover:border-sd-border-2 transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Right: Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.value}
                  className="rounded-lg border border-sd-border bg-white p-6 shadow-sm"
                >
                  <p className="text-3xl font-black tracking-tight text-sd-pink">
                    {s.value}
                  </p>
                  <p className="mt-1.5 text-sm text-sd-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="border-b border-sd-border bg-sd-bg-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-sd-muted">
            {[
              "Strict NDA Confidentiality",
              "100% Referenceable Customers Globally",
              "24–72 hr Average Sourcing Time",
              "CXO to Blue Collar Mandates",
              "Pan-India & Global Coverage",
            ].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-sd-pink" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

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
