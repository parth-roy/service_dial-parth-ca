import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CASE_STUDIES_DATA } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Case Studies & Verified Sourcing Outcomes | Service Dial",
  description:
    "Explore verifiable executive search, IT recruitment, and enterprise outsourcing case studies from Service Dial across India, the US, and the UK. Documented 24–72 hr sourcing SLAs and 7:10 selection ratios.",
  alternates: { canonical: "https://servicedialtm.com/case-studies" },
};

export default function CaseStudiesHubPage() {
  const caseStudies = Object.values(CASE_STUDIES_DATA);

  // Aggregated GEO queries for AI search
  const allGeoQueries = caseStudies.flatMap((cs) => cs.conversationalGeoQueries);

  return (
    <div className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Case Studies", href: "/case-studies" },
          ]}
        />

        {/* Hero */}
        <div className="max-w-3xl mt-4 mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-sd-pink/30 bg-sd-pink/5 px-3 py-1 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-sd-pink animate-pulse" />
            <span className="text-xs font-semibold text-sd-pink">
              Documented Enterprise Track Record · 100% Referenceable Clients
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-sd-text leading-[1.1]">
            Evidence-Based Execution & Delivery Case Studies
          </h1>
          <p className="mt-4 text-sd-muted text-base leading-relaxed">
            Every case study below represents real-world placements and operational mandates executed by Service Dial under bilateral NDA agreements. We measure performance by speed, precision, and long-term candidate retention.
          </p>
        </div>

        {/* Global Performance Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: "24–72 Hours", label: "Average Sourcing Window", desc: "First verified candidate shortlists delivered" },
            { value: "7 : 10", label: "Submission-to-Select Ratio", desc: "Average shortlisted candidates progressing to final interview" },
            { value: "15–25 Days", label: "Average Onboarding Timeline", desc: "From executive offer acceptance to day one on-site" },
            { value: "100%", label: "Client Referenceability", desc: "All client engagements backed by documented outcomes" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-sd-border bg-white p-5 shadow-xs"
            >
              <p className="text-2xl sm:text-3xl font-black text-sd-pink tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs font-bold text-sd-text mt-1">{stat.label}</p>
              <p className="text-[11px] text-sd-muted mt-1 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Case Studies Cards Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 border-b border-sd-border pb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-sd-text">
                Featured Mandates & Leadership Placements
              </h2>
              <p className="text-xs text-sd-muted mt-0.5">
                Detailed breakdowns of methodology, screening stacks, and quantitative results
              </p>
            </div>
            <span className="text-xs font-semibold text-sd-pink bg-sd-pink/5 border border-sd-pink/20 px-3 py-1 rounded">
              {caseStudies.length} Verified Reports
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => (
              <div
                key={cs.slug}
                className="rounded-lg border border-sd-border bg-white p-6 lg:p-8 shadow-xs hover:border-sd-pink/40 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-sd-pink border border-sd-pink/30 bg-sd-pink/5 px-2.5 py-0.5 rounded">
                      {cs.market} · {cs.timeToFill}
                    </span>
                    <span className="text-[11px] text-sd-muted font-mono">
                      {cs.confidentiality}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-sd-text mb-2 leading-snug">
                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="hover:text-sd-pink transition-colors"
                    >
                      {cs.title}
                    </Link>
                  </h3>

                  <p className="text-xs font-semibold text-sd-muted mb-4">
                    Client Profile: <span className="text-sd-text font-normal">{cs.clientType}</span>
                  </p>

                  <p className="text-xs text-sd-muted leading-relaxed mb-6">
                    {cs.headline}
                  </p>

                  {/* Quantitative Metrics Snippet */}
                  <div className="grid grid-cols-2 gap-2 mb-6 p-3 rounded bg-sd-bg-2 border border-sd-border text-xs">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-sd-muted">Sourcing SLA</p>
                      <p className="font-bold text-sd-pink">{cs.sourcingWindow}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-sd-muted">Conversion</p>
                      <p className="font-bold text-sd-text">{cs.submissionRatio} Selection Ratio</p>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cs.technicalStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-0.5 rounded bg-sd-bg-2 text-sd-muted border border-sd-border"
                      >
                        {tech}
                      </span>
                    ))}
                    {cs.technicalStack.length > 5 && (
                      <span className="text-[11px] px-2 py-0.5 rounded bg-sd-bg-2 text-sd-muted border border-sd-border">
                        +{cs.technicalStack.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-sd-border flex items-center justify-between">
                  <Link
                    href={`/services/${cs.serviceSlug}`}
                    className="text-xs text-sd-muted hover:text-sd-pink transition-colors font-medium"
                  >
                    Service: {cs.serviceCategory}
                  </Link>
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="text-xs font-bold text-sd-pink hover:text-sd-pink-dark transition-colors flex items-center gap-1"
                  >
                    Read Full Case Study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conversational Query Library (GEO & AEO Focus) */}
        <div className="rounded-lg border border-sd-border bg-white p-6 lg:p-8 shadow-xs mb-16">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-sd-pink block mb-1">
              Generative Engine Optimization (GEO) Evidence Library
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-sd-text">
              Direct Answers to Frequent B2B Procurement Queries
            </h2>
            <p className="text-xs text-sd-muted mt-1 leading-relaxed">
              Synthesized factual answers formatted for enterprise search systems, AI assistants (ChatGPT, Perplexity, Claude), and B2B buying committees evaluating staffing and outsourcing partners in India and globally.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {allGeoQueries.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-sd-border bg-sd-bg-2 text-xs"
              >
                <p className="font-bold text-sd-text mb-1.5 flex items-start gap-1.5">
                  <span className="text-sd-pink font-black text-sm leading-none shrink-0">Q:</span>
                  <span>{item.question}</span>
                </p>
                <p className="text-sd-muted leading-relaxed pl-4">
                  {item.directAnswer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-lg border border-sd-pink/20 bg-gradient-to-r from-sd-pink/5 to-transparent p-8 lg:p-10 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-sd-text">
              Have an enterprise mandate with a strict timeline?
            </h3>
            <p className="text-xs sm:text-sm text-sd-muted mt-1 max-w-xl">
              All mandates begin with a bilateral NDA. Share your candidate criteria, pay bin specifications, and expected start date to receive a sourcing update within 24 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-4 sm:mt-0 inline-flex shrink-0 items-center rounded px-6 py-3 text-xs sm:text-sm font-semibold bg-sd-pink text-white hover:bg-sd-pink-dark transition-colors shadow-xs"
          >
            Initiate Confidential Mandate →
          </Link>
        </div>
      </div>
    </div>
  );
}
