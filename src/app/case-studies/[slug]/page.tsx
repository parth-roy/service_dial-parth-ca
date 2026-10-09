import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CASE_STUDIES_DATA } from "@/data/case-studies";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(CASE_STUDIES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES_DATA[slug];
  if (!cs) return { title: "Case Study Not Found" };

  return {
    title: `${cs.role} Case Study | Service Dial`,
    description: `${cs.headline} Placed in ${cs.timeToFill} with a ${cs.sourcingWindow} sourcing window and ${cs.submissionRatio} selection ratio.`,
    alternates: { canonical: `https://servicedialtm.com/case-studies/${cs.slug}` },
    openGraph: {
      title: `${cs.title} | Service Dial`,
      description: cs.headline,
      url: `https://servicedialtm.com/case-studies/${cs.slug}`,
      siteName: "Service Dial",
      type: "article",
    },
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const cs = CASE_STUDIES_DATA[slug];
  if (!cs) notFound();

  // Related case studies
  const otherCaseStudies = Object.values(CASE_STUDIES_DATA).filter(
    (item) => item.slug !== cs.slug
  );

  // Schema.org Article / CaseStudy JSON-LD
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.title,
    description: cs.headline,
    articleBody: cs.executiveSummary,
    author: {
      "@type": "Organization",
      name: "Service Dial",
      url: "https://servicedialtm.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Service Dial",
      logo: "https://servicedialtm.com/logo.png",
    },
    about: {
      "@type": "Thing",
      name: cs.role,
      description: `Executive placement for ${cs.clientType} in ${cs.market}`,
    },
    keywords: cs.schemaKeywords.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Case Studies", href: "/case-studies" },
              { label: cs.role, href: `/case-studies/${cs.slug}` },
            ]}
          />

          {/* Hero Header */}
          <div className="max-w-4xl mt-4 mb-12">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-sd-pink border border-sd-pink/30 bg-sd-pink/5 px-3 py-1 rounded">
                {cs.market} · {cs.serviceCategory}
              </span>
              <span className="text-xs text-sd-muted font-mono border border-sd-border bg-sd-bg-2 px-2.5 py-1 rounded">
                Status: {cs.confidentiality}
              </span>
              <span className="text-xs font-bold text-sd-text border border-sd-border bg-white px-2.5 py-1 rounded">
                Turnaround: {cs.timeToFill}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-sd-text leading-[1.15] mb-5">
              {cs.title}
            </h1>

            <p className="text-sd-muted text-base lg:text-lg leading-relaxed">
              {cs.headline}
            </p>
          </div>

          {/* Quantitative Outcomes Dashboard */}
          <section className="mb-14">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cs.quantitativeOutcomes.map((outcome) => (
                <div
                  key={outcome.label}
                  className="rounded-lg border border-sd-border bg-white p-5 shadow-xs"
                >
                  <p className="text-3xl font-black text-sd-pink tracking-tight">
                    {outcome.metric}
                  </p>
                  <p className="text-xs font-bold text-sd-text mt-1">{outcome.label}</p>
                  <p className="text-[11px] text-sd-muted mt-2 leading-relaxed">
                    {outcome.context}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Two-Column Deep Dive */}
          <div className="grid lg:grid-cols-3 gap-10 mb-14">
            {/* Left 2 Cols: Main narrative */}
            <div className="lg:col-span-2 space-y-10">
              {/* Executive Summary */}
              <div className="rounded-lg border border-sd-border bg-white p-6 lg:p-8 shadow-xs">
                <h2 className="text-lg font-bold text-sd-text mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sd-pink" />
                  Executive Summary
                </h2>
                <p className="text-xs sm:text-sm text-sd-muted leading-relaxed">
                  {cs.executiveSummary}
                </p>
              </div>

              {/* The Challenge */}
              <div className="rounded-lg border border-sd-border bg-white p-6 lg:p-8 shadow-xs">
                <h2 className="text-lg font-bold text-sd-text mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sd-pink" />
                  The Mandate Challenge
                </h2>
                <p className="text-xs sm:text-sm text-sd-muted leading-relaxed">
                  {cs.challenge}
                </p>
              </div>

              {/* Strategy Adopted */}
              <div className="rounded-lg border border-sd-border bg-white p-6 lg:p-8 shadow-xs">
                <h2 className="text-lg font-bold text-sd-text mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sd-pink" />
                  Sourcing & Headhunting Methodology
                </h2>
                <div className="space-y-3">
                  {cs.strategyAdopted.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-sd-muted">
                      <span className="text-xs font-mono font-bold text-sd-pink bg-sd-pink/10 rounded px-2 py-0.5 shrink-0 mt-0.5">
                        0{idx + 1}
                      </span>
                      <p className="leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Execution Timeline */}
              <div className="rounded-lg border border-sd-border bg-white p-6 lg:p-8 shadow-xs">
                <h2 className="text-lg font-bold text-sd-text mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sd-pink" />
                  Milestone-Driven Execution Timeline
                </h2>
                <div className="space-y-4">
                  {cs.executionTimeline.map((milestone, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded bg-sd-bg-2 border border-sd-border text-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                    >
                      <div>
                        <p className="font-bold text-sd-text">{milestone.step}</p>
                        <p className="text-sd-muted mt-0.5">{milestone.description}</p>
                      </div>
                      <span className="shrink-0 font-mono font-bold text-sd-pink bg-white px-2.5 py-1 rounded border border-sd-border text-[11px] self-start sm:self-center">
                        {milestone.timeframe}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conversational GEO Block */}
              <div className="rounded-lg border border-sd-border bg-white p-6 lg:p-8 shadow-xs">
                <h2 className="text-lg font-bold text-sd-text mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sd-pink" />
                  AI & Procurement Query Consensus
                </h2>
                <div className="space-y-3">
                  {cs.conversationalGeoQueries.map((faq, idx) => (
                    <div key={idx} className="p-3.5 rounded bg-sd-bg-2 border border-sd-border text-xs">
                      <p className="font-bold text-sd-text mb-1">{faq.question}</p>
                      <p className="text-sd-muted leading-relaxed">{faq.directAnswer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar metadata & stack */}
            <div className="space-y-6">
              {/* Quick Spec Card */}
              <div className="rounded-lg border border-sd-border bg-white p-6 shadow-xs text-xs space-y-4">
                <h3 className="font-bold text-sm text-sd-text border-b border-sd-border pb-2">
                  Mandate Specification
                </h3>
                <div>
                  <p className="text-sd-muted text-[11px] uppercase font-bold">Role Title</p>
                  <p className="font-bold text-sd-text mt-0.5">{cs.role}</p>
                </div>
                <div>
                  <p className="text-sd-muted text-[11px] uppercase font-bold">Client Scale</p>
                  <p className="font-medium text-sd-text mt-0.5">{cs.clientType}</p>
                </div>
                <div>
                  <p className="text-sd-muted text-[11px] uppercase font-bold">Target Market</p>
                  <p className="font-medium text-sd-text mt-0.5">{cs.market}</p>
                </div>
                <div>
                  <p className="text-sd-muted text-[11px] uppercase font-bold">Sourcing SLA</p>
                  <p className="font-bold text-sd-pink mt-0.5">{cs.sourcingWindow}</p>
                </div>
                <div>
                  <p className="text-sd-muted text-[11px] uppercase font-bold">Selection Ratio</p>
                  <p className="font-bold text-sd-text mt-0.5">{cs.submissionRatio}</p>
                </div>
                <div>
                  <p className="text-sd-muted text-[11px] uppercase font-bold">Offer-to-Join</p>
                  <p className="font-bold text-sd-text mt-0.5">{cs.offerToJoinRatio}</p>
                </div>
                <div className="pt-2 border-t border-sd-border">
                  <Link
                    href={`/services/${cs.serviceSlug}`}
                    className="text-xs font-semibold text-sd-pink hover:underline"
                  >
                    Explore {cs.serviceCategory} →
                  </Link>
                </div>
              </div>

              {/* Technical Screening Stack */}
              <div className="rounded-lg border border-sd-border bg-white p-6 shadow-xs">
                <h3 className="font-bold text-sm text-sd-text mb-3">
                  Technical Screening Stack
                </h3>
                <p className="text-[11px] text-sd-muted mb-3 leading-relaxed">
                  Competencies, enterprise architectures, and tools evaluated during candidate assessment:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cs.technicalStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded bg-sd-bg-2 text-sd-text border border-sd-border font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* NDA Protection Note */}
              <div className="rounded-lg border border-sd-border bg-sd-bg-2 p-5 text-xs text-sd-muted leading-relaxed">
                <p className="font-bold text-sd-text mb-1">Confidentiality Guarantee</p>
                <p>
                  Client brand identities and candidate identities are anonymized in compliance with our bilateral NDA agreements. Verifiable references and sanitized dossiers are available during confidential procurement review.
                </p>
              </div>
            </div>
          </div>

          {/* Related Case Studies Cross-Links */}
          <section className="mb-14 pt-8 border-t border-sd-border">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-sd-text">
                Explore Other Verified Case Studies
              </h3>
              <p className="text-xs text-sd-muted mt-0.5">
                Review leadership mandates delivered across global markets and specialized tech domains:
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {otherCaseStudies.map((other) => (
                <Link
                  key={other.slug}
                  href={`/case-studies/${other.slug}`}
                  className="p-5 rounded-lg border border-sd-border bg-white hover:border-sd-pink/40 hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sd-pink block mb-1">
                      {other.market} · {other.timeToFill}
                    </span>
                    <h4 className="text-sm font-bold text-sd-text mb-2 line-clamp-2">
                      {other.title}
                    </h4>
                    <p className="text-xs text-sd-muted line-clamp-2">
                      {other.headline}
                    </p>
                  </div>
                  <span className="mt-4 text-xs font-bold text-sd-pink">
                    Read Report →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="rounded-lg border border-sd-pink/20 bg-gradient-to-r from-sd-pink/5 to-transparent p-8 lg:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-2xl font-black text-sd-text">
                Ready to replicate these outcomes for your mandate?
              </h2>
              <p className="text-xs sm:text-sm text-sd-muted mt-1 leading-relaxed">
                Connect with our senior executive search and outsourcing consultants under full NDA protection.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded px-6 py-3 text-xs sm:text-sm font-semibold bg-sd-pink text-white hover:bg-sd-pink-dark transition-colors shadow-xs"
            >
              Raise a Confidential Mandate →
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
