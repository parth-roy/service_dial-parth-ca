import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "About Service Dial – Company Profile & Story",
  description:
    "Service Dial was established in 2016 with a mission to simplify business through technology-driven, tailor-made solutions. 100% referenceable clients. Strict NDA. Pan-India and global operations.",
  alternates: { canonical: "https://servicedialtm.com/about" },
};

const milestones = [
  { year: "2016", event: "Service Dial founded with a mission to simplify business operations." },
  { year: "2018", event: "Expanded into CXO and leadership hiring for MNCs across India." },
  { year: "2020", event: "Launched Finance & Audit and Compliance service lines." },
  { year: "2022", event: "Extended operations to US and UK markets with dedicated teams." },
  { year: "2024", event: "100% referenceable client base across all service lines confirmed." },
];

const values = [
  {
    title: "Confidentiality",
    desc: "Every engagement is governed by a strict NDA. Client and candidate information is never disclosed without explicit written consent.",
  },
  {
    title: "Precision",
    desc: "We don't flood inboxes with bulk submissions. Our 7:10 submission-to-selection ratio reflects targeted, quality sourcing.",
  },
  {
    title: "Speed",
    desc: "24–72 hour average sourcing turnaround for active mandates — without compromising candidate quality or compliance standards.",
  },
  {
    title: "Accountability",
    desc: "100% of our clients are referenceable. We stand behind every placement and every deliverable with documented outcomes.",
  },
];

const caseStudies = [
  {
    id: "vp-data-science",
    role: "VP Data Science",
    market: "India",
    company: "MNC – 10,000+ Employees",
    summary:
      "Mandate: Source a VP Data Science with 15+ years of experience in big data technologies (Hadoop, Kafka) for a global consulting MNC with 10,000+ employees. Outcome: Candidate placed within the stipulated timeline, meeting all technical and seniority requirements. All details protected under NDA.",
    service: "Staffing & Recruitment",
    tags: ["Hadoop", "Kafka", "Big Data", "Global Consulting"],
  },
  {
    id: "vp-sap-sales-us",
    role: "Vice President – SAP Sales",
    market: "United States",
    company: "Global Enterprise",
    summary:
      "Mandate: CXO-level SAP Sales VP for a US-headquartered enterprise. Outcome: Delivered with a 7:10 submission-to-selection ratio and a 10-day interview-to-selection cycle. Turnaround: 24–72 hours from mandate receipt to first shortlist.",
    service: "Staffing & Recruitment",
    tags: ["SAP", "7:10 Ratio", "US Market", "CXO Hiring"],
  },
  {
    id: "sales-head-bfsi-uk",
    role: "Sales Head – BFSI",
    market: "United Kingdom",
    company: "MNC IT Company",
    summary:
      "Mandate: Sales Head for the BFSI vertical of a UK-based MNC IT company — a green-field assignment with no existing talent pipeline. Outcome: Placement completed within 6 weeks from a cold start. Confidentiality maintained throughout.",
    service: "Staffing & Recruitment",
    tags: ["BFSI", "UK Market", "6-week delivery", "Green-field"],
  },
  {
    id: "senior-sales-director",
    role: "Senior Sales Director – Product Engineering",
    market: "India",
    company: "Tier 1 & Tier 2 MNCs",
    summary:
      "Mandate: Senior Sales Director with specific diversity hiring requirements and experience mapping Tier 1 and Tier 2 organizations in the product engineering space. Outcome: Passive candidates engaged and shortlisted from target organizations.",
    service: "Staffing & Recruitment",
    tags: ["Product Engineering", "Diversity Hire", "Tier 1 MNCs", "Passive Sourcing"],
  },
];

const practiceDesks = [
  {
    desk: "Statutory Payroll & EPFO Practice",
    scope: "Gross-to-net processing, ₹25,000 EPFO wage ceiling modeling, ESIC ECR generation, and Form 16 / 24Q TDS filings.",
    sla: "Zero-defect monthly cutoff · Penalty indemnity",
  },
  {
    desk: "West Bengal Labour Law & CLRA Desk",
    scope: "Act VI of 1979 Professional Tax (Form III-A), WBLWF Form D bi-annual filings, CLRA Form V licensing, and inspectorate defense.",
    sla: "Barrackpore HQ & Salt Lake Sector V coverage",
  },
  {
    desk: "Virtual CMA Finance & Audit Desk",
    scope: "CARO 2020 fixed asset tagging, MSME Section 43B(h) 45-day payment gatekeeping, AP 3-way matching, and R2R month-close.",
    sla: "Certified CMA & CA governance",
  },
  {
    desk: "IP & Trademark Registry Advisory",
    scope: "Vienna search clearance, Form TM-A filing across 45 Nice classes, and Section 9/11 examination objection defense.",
    sla: "Pan-India CGPDTM Registry filing",
  },
];

export default function AboutPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Service Dial Talent Management Private Limited",
    url: "https://servicedialtm.com/about",
    mainEntity: {
      "@type": "Organization",
      name: "Service Dial Talent Management Private Limited",
      identifier: "U74999WB2016PTC216954",
      foundingDate: "2016-08-01",
      url: "https://servicedialtm.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      {/* Header */}
      <section className="border-b border-sd-border py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6">
              <Logo size="lg" showTagline={true} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sd-pink mb-3">
              Company Profile
            </p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-sd-text">
              Built to simplify.<br />
              <span className="gradient-text">Proven to deliver.</span>
            </h1>
            <p className="mt-5 text-sd-muted text-base lg:text-lg leading-relaxed">
              Service Dial Talent Management Private Limited (CIN: <span className="font-mono text-sd-text font-bold">U74999WB2016PTC216954</span>) was incorporated in 2016 with registered headquarters in Barrackpore, West Bengal. While our corporate entity celebrates over 8+ years of institutional growth, our executive leadership brings over <strong>25+ years of combined industry tenure</strong> in statutory labour law compliance, enterprise payroll architectures, and executive workforce solutions.
            </p>
            <div className="mt-4 p-4 rounded-lg bg-sd-bg-2 border border-sd-border text-xs text-sd-muted space-y-1">
              <p>🏛️ <strong>Registered Corporate Office:</strong> 58 (30), S.N. Banerjee Road, Barrackpore, Kolkata, West Bengal 700120</p>
              <p>🛡️ <strong>Statutory Governance:</strong> DPDP Act 2023 Compliant · Ministry of Corporate Affairs Verified · CLRA Compliant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-sd-pink mb-3">
                Our Vision
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-sd-text mb-4">
                Enabling operational excellence through technology.
              </h2>
              <p className="text-sd-muted text-sm leading-relaxed mb-4">
                We believe great businesses are built on the right people, clean processes, and uncompromising compliance. Service Dial exists to give every enterprise — from a 50-person startup to a 10,000+ employee MNC — access to that foundation.
              </p>
              <p className="text-sd-muted text-sm leading-relaxed">
                Our approach is never one-size-fits-all. Every engagement starts with a deep understanding of your operational context, your industry, and your specific goals. What we deliver is always tailor-made — and always backed by a strict NDA.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {values.map((v) => (
                <div key={v.title} className="rounded-lg border border-sd-border bg-white p-5 shadow-sm">
                  <h3 className="text-sm font-bold text-sd-pink mb-2">{v.title}</h3>
                  <p className="text-xs text-sd-muted leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 border-t border-sd-border bg-sd-bg-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-sd-pink mb-8">
            Our Journey
          </p>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-sd-border hidden sm:block" />
            <div className="space-y-6">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-8 items-start">
                  <div className="shrink-0 w-12 text-right">
                    <span className="text-sm font-black text-sd-pink">{m.year}</span>
                  </div>
                  <div className="relative pl-6 hidden sm:block">
                    <div className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-sd-pink ring-4 ring-sd-bg-2" />
                  </div>
                  <p className="text-sm text-sd-muted leading-relaxed flex-1">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-16 lg:py-24 border-t border-sd-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-sd-pink mb-3">
            Case Studies
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-sd-text mb-2">
            Mandates we've delivered.
          </h2>
          <p className="text-sd-muted text-sm mb-8 max-w-xl">
            Real outcomes, real clients — all protected under strict NDA. The specifics below represent documented delivery metrics.
          </p>

          <div className="space-y-4">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="rounded-lg border border-sd-border bg-white p-6 lg:p-8 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <p className="text-lg font-bold text-sd-text">{cs.role}</p>
                    <p className="text-xs text-sd-muted mt-0.5">{cs.company}</p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <span className="text-xs font-semibold text-sd-pink border border-sd-pink/30 bg-sd-pink/5 rounded px-2 py-0.5">
                      {cs.market}
                    </span>
                    <span className="text-xs text-sd-muted border border-sd-border rounded px-2 py-0.5 bg-sd-bg-2">
                      {cs.service}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-sd-muted leading-relaxed mb-4">{cs.summary}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cs.tags.map((t) => (
                    <span key={t} className="text-xs px-1.5 py-0.5 rounded bg-sd-bg-2 text-sd-muted border border-sd-border">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Specialized Practice Desks (E-E-A-T) */}
      <section className="py-16 lg:py-20 border-t border-sd-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-sd-pink mb-2">
              Domain Authority &amp; Governance
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-sd-text">
              Specialized Practice Desks Backed by Statutory Accountability
            </h2>
            <p className="mt-3 text-sm text-sd-muted leading-relaxed">
              Every engagement is handled by domain-aligned operations specialists rather than generic coordinators, under bilateral NDA and DPDP Act 2023 controls.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {practiceDesks.map((item) => (
              <div key={item.desk} className="rounded-xl border border-sd-border bg-sd-bg p-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-sd-text mb-2">{item.desk}</h3>
                  <p className="text-xs text-sd-muted leading-relaxed">{item.scope}</p>
                </div>
                <span className="mt-4 pt-3 border-t border-sd-border text-[11px] font-semibold text-sd-pink">
                  {item.sla}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-sd-border bg-sd-bg-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-sd-text mb-3">
            Want to know more?
          </h2>
          <p className="text-sd-muted text-sm mb-6">
            Every conversation is confidential. We're happy to share more context, client references, and our exact methodology.
          </p>
          <Link href="/contact" className="inline-flex items-center rounded px-6 py-3 text-sm font-semibold bg-sd-pink text-white hover:bg-sd-pink-dark transition-colors">
            Start a Conversation →
          </Link>
        </div>
      </section>
    </>
  );
}
