import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Staffing & Recruitment Services – IT, CXO, Blue Collar | Service Dial",
  description:
    "Premium staffing and recruitment solutions across India. IT staffing, CXO leadership hiring, general and blue collar staffing. 7:10 submission-to-selection ratio. 24–72 hr turnaround. NDA protected.",
  alternates: { canonical: "https://servicedialtm.com/services/staffing-and-recruitment" },
};

const areas = [
  {
    title: "IT & Premium Staffing",
    desc: "Sourcing for specialized technology roles — from data scientists and ML engineers to SAP consultants and cloud architects — across MNCs and high-growth startups.",
    metrics: ["7:10 submission ratio", "24–72 hr avg. sourcing", "Big Data, AI/ML, SAP expertise"],
  },
  {
    title: "CXO & Leadership Hiring",
    desc: "Confidential C-suite mandates handled with absolute discretion. We map Tier 1 & Tier 2 organizations and engage passive candidates through our proprietary executive network.",
    metrics: ["10-day interview-to-selection", "Green-field to structured mandates", "Global market coverage"],
  },
  {
    title: "General Staffing",
    desc: "High-volume hiring for mid-management and operational roles across functions — sales, operations, finance, and customer success — built around your headcount plan.",
    metrics: ["Pan-India coverage", "BFSI, Manufacturing, IT", "Diversity hiring expertise"],
  },
  {
    title: "Blue Collar Staffing",
    desc: "Verified, compliant workforce sourcing for manufacturing, logistics, and facility management. Background-checked and onboarded at speed.",
    metrics: ["Background verified", "Compliance onboarded", "Volume-ready capacity"],
  },
];

const caseStudies = [
  {
    slug: "vp-data-science-global-mnc",
    role: "VP Data Science",
    market: "India",
    company: "MNC – 10,000+ Employees",
    summary: "Sourced a VP Data Science with 15+ years in big data technologies including Hadoop and Kafka for a global consulting MNC with over 10,000 employees.",
    tags: ["Hadoop", "Kafka", "Global Consulting", "15+ yrs exp."],
  },
  {
    slug: "vp-sap-sales-united-states",
    role: "VP SAP Sales",
    market: "United States",
    company: "Global Enterprise",
    summary: "Delivered a VP SAP Sales placement in the US market with a 7:10 submission-to-selection ratio and a 10-day interview-to-selection cycle.",
    tags: ["SAP", "7:10 Ratio", "US Market", "10-day cycle"],
  },
  {
    slug: "sales-head-bfsi-united-kingdom",
    role: "Sales Head – BFSI",
    market: "United Kingdom",
    company: "MNC IT Company",
    summary: "Executed a green-field assignment for a UK-based MNC IT company in the BFSI vertical, completing the placement within 6 weeks.",
    tags: ["BFSI", "UK Market", "6-week delivery", "Green-field"],
  },
  {
    slug: "diversity-hiring-product-engineering",
    role: "Senior Sales Director – Product Engineering",
    market: "India",
    company: "Tier 1 & Tier 2 MNCs",
    summary: "Mapped and engaged passive candidates across Tier 1 and Tier 2 organizations for a product engineering sales director mandate with diversity requirements.",
    tags: ["Product Engineering", "Diversity Hire", "Tier 1 Orgs", "Passive Sourcing"],
  },
];

export default function StaffingPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-sd-border py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-sd-pink mb-3">
              Staffing & Recruitment
            </p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-sd-text leading-tight">
              The right person.<br />
              <span className="gradient-text">In 24–72 hours.</span>
            </h1>
            <p className="mt-5 text-sd-muted text-base lg:text-lg leading-relaxed">
              From niche technology specialists to C-suite leaders and large-volume blue collar workforces —
              we source, screen, and deliver verified talent with documented speed and a 7:10 submission-to-selection ratio.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="inline-flex justify-center items-center rounded px-6 py-3 text-sm font-semibold bg-sd-pink text-white hover:bg-sd-pink-dark transition-colors">
                Raise a Mandate
              </Link>
              <Link href="/about#case-studies" className="inline-flex justify-center items-center rounded px-6 py-3 text-sm font-semibold border border-sd-border text-sd-muted hover:text-sd-text hover:border-sd-border-2 transition-colors">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-sd-pink mb-8">
            Specialisations
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {areas.map((a) => (
              <div key={a.title} className="rounded-lg border border-sd-border bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-sd-text mb-2">{a.title}</h2>
                <p className="text-sm text-sd-muted leading-relaxed mb-4">{a.desc}</p>
                <ul className="space-y-1">
                  {a.metrics.map((m) => (
                    <li key={m} className="flex items-center gap-2 text-xs text-sd-muted">
                      <span className="h-1 w-1 rounded-full bg-sd-pink shrink-0" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-16 lg:py-24 border-t border-sd-border bg-sd-bg-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-sd-pink mb-3">
            Case Studies
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-sd-text mb-8">Mandates delivered.</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {caseStudies.map((cs) => (
              <div key={cs.role} className="rounded-lg border border-sd-border bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <p className="text-sm font-bold text-sd-text">{cs.role}</p>
                    <p className="text-xs text-sd-muted mt-0.5">{cs.company}</p>
                  </div>
                  <span className="shrink-0 text-xs font-semibold text-sd-pink border border-sd-pink/30 rounded px-2 py-0.5 bg-sd-pink/5">
                    {cs.market}
                  </span>
                </div>
                <p className="text-sm text-sd-muted leading-relaxed mb-4">{cs.summary}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cs.tags.map((t) => (
                    <span key={t} className="text-xs px-1.5 py-0.5 rounded bg-sd-bg-2 text-sd-muted border border-sd-border">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="pt-3 border-t border-sd-border flex justify-end">
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="text-xs font-bold text-sd-pink hover:text-sd-pink-dark transition-colors"
                  >
                    Read Full Case Study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sd-text hover:text-sd-pink border border-sd-border bg-white px-4 py-2 rounded shadow-xs transition-all"
            >
              Explore All Case Studies & Outcomes →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-sd-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-sd-pink/20 bg-gradient-to-r from-sd-pink/5 to-transparent p-8">
            <h2 className="text-2xl sm:text-3xl font-black text-sd-text mb-3">
              Have a mandate? Let's talk.
            </h2>
            <p className="text-sd-muted text-sm mb-6 max-w-lg">
              All engagements are covered by a strict NDA. Share your requirement and receive a sourcing update within 24 hours.
            </p>
            <Link href="/contact" className="inline-flex items-center rounded px-5 py-2.5 text-sm font-semibold bg-sd-pink text-white hover:bg-sd-pink-dark transition-colors">
              Raise a Mandate →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
