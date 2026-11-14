import type { Metadata } from "next";
import Link from "next/link";
import { CASE_STUDIES_DATA } from "@/data/case-studies";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Case Studies & Verified Sourcing Outcomes",
  description:
    "Explore verifiable executive search, IT recruitment, and enterprise outsourcing case studies from Service Dial across India, the US, and the UK. Documented 24–72 hr sourcing SLAs and 7:10 selection ratios.",
  alternates: { canonical: "https://servicedialtm.com/case-studies" },
};

export default function CaseStudiesHubPage() {
  const caseStudies = Object.values(CASE_STUDIES_DATA);
  const featured = caseStudies[0];
  const remaining = caseStudies.slice(1);

  // Aggregated GEO queries for AI search & procurement evaluation
  const allGeoQueries = caseStudies.flatMap((cs) => cs.conversationalGeoQueries);

  return (
    <div className="relative min-h-screen bg-[#F8F9FA] text-slate-900 overflow-hidden">
      {/* Subtle Top Ambient Brand Light Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-[#00cfdc]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[400px] bg-[#b80f68]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Top Breadcrumb Bar */}
      <div className="relative pt-8 pb-4 border-b border-slate-200/70 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-500">
              <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-slate-900 font-medium">Evidence-Based Case Studies</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
              <span className="font-mono text-[#0284c7]">{caseStudies.length} Verified Mandates</span>
              <span className="text-slate-300">•</span>
              <span>100% Client Referenceable</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#b80f68] shrink-0" />
                <span className="font-outfit text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.24em] text-slate-900">
                  EXECUTIVE TRACK RECORD · BILATERAL NDA GOVERNED
                </span>
                <span className="h-px flex-1 bg-slate-200" />
              </div>

              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
                Evidence-based{" "}
                <span className="bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] bg-clip-text text-transparent">
                  execution dossiers.
                </span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
                Every report below documents real-world leadership placements, plant engineering workforce deployments, and multi-state statutory remediations executed by Service Dial. Performance is measured in quantitative velocity, precision, and zero-defect tenure retention.
              </p>
            </div>
          </ScrollReveal>

          {/* Sourcing Performance Benchmark Dock */}
          <div className="mt-12">
            <ScrollReveal direction="up" distance={25} delay={150}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: "24–72h", label: "Average Sourcing Window", desc: "First verified shortlist dossier delivered under NDA", accent: "text-[#0284c7]" },
                  { value: "7 : 10", label: "Selection-to-Interview", desc: "Shortlisted candidates progressing to CXO panel rounds", accent: "text-slate-900" },
                  { value: "15–25d", label: "Average Onboarding", desc: "From executive offer clearance to day-one on-site presence", accent: "text-[#b80f68]" },
                  { value: "100%", label: "Client Referenceability", desc: "Statutory indemnification & verified outcomes across all cohorts", accent: "text-slate-900" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 shadow-xs hover:border-slate-300 transition-all"
                  >
                    <p className={`font-outfit text-3xl sm:text-4xl font-black tracking-tight ${stat.accent}`}>
                      {stat.value}
                    </p>
                    <p className="text-xs font-bold text-slate-900 mt-2">{stat.label}</p>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Primary Lead Dossier */}
      {featured && (
        <section className="relative py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up" distance={30}>
              <div className="mb-4">
                <span className="text-xs uppercase font-mono tracking-widest text-[#0284c7] font-bold">
                  Master Leadership Dossier · Spotlight Mandate
                </span>
              </div>
              <div className="relative rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-sm overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7]" />

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left: Mandate narrative (7 cols) */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-bold font-mono uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {featured.market} · {featured.timeToFill} Fill Time
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        {featured.confidentiality}
                      </span>
                    </div>

                    <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
                      <Link href={`/case-studies/${featured.slug}`} className="hover:text-[#b80f68] transition-colors">
                        {featured.title}
                      </Link>
                    </h2>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-700">
                      <span className="font-semibold text-slate-900">Client Environment: </span>
                      {featured.clientType}
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {featured.executiveSummary}
                    </p>

                    <div>
                      <span className="text-[11px] font-mono uppercase text-slate-500 block mb-2 font-semibold">
                        Core Competencies &amp; Technical Screening Stack:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {featured.technicalStack.slice(0, 8).map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Quantitative Outcome Plaque (5 cols) */}
                  <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-[#b80f68] mb-3 font-bold">
                        Audited Mandate Metrics
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {featured.quantitativeOutcomes.map((qo, idx) => (
                          <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                            <div className="font-outfit text-xl font-black text-slate-900">{qo.metric}</div>
                            <div className="text-[10px] uppercase font-bold text-[#0284c7] mt-0.5">{qo.label}</div>
                            <div className="text-[10px] text-slate-500 mt-1 line-clamp-2 leading-tight">{qo.context}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                      <Link
                        href={`/services/${featured.serviceSlug}`}
                        className="text-xs text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        Pillar: {featured.serviceCategory}
                      </Link>
                      <Link
                        href={`/case-studies/${featured.slug}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-xs transition-all"
                      >
                        <span>Full Mandate Report</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Remaining Structured Mandate Dossiers */}
      <section className="relative py-8 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs uppercase font-mono tracking-wider text-[#b80f68] font-bold block mb-1">
                Classified Case Directory
              </span>
              <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                Enterprise Sourcing &amp; Compliance Files
              </h2>
            </div>
            <span className="text-xs font-mono text-[#0284c7] bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
              {remaining.length} Additional Audits
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {remaining.map((cs, idx) => (
              <ScrollReveal
                key={cs.slug}
                direction={idx % 2 === 0 ? "left" : "right"}
                distance={25}
                delay={(idx % 2) * 100}
              >
                <div className="h-full rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284c7] bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full">
                        {cs.market} · {cs.timeToFill}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">
                        {cs.confidentiality}
                      </span>
                    </div>

                    <h3 className="font-outfit text-xl font-bold text-slate-900 mb-2 group-hover:text-[#b80f68] transition-colors leading-snug">
                      <Link href={`/case-studies/${cs.slug}`}>
                        {cs.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-slate-500 mb-4 line-clamp-1">
                      <span className="font-semibold text-slate-700">Entity:</span> {cs.clientType}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed mb-5 line-clamp-3">
                      {cs.headline}
                    </p>

                    {/* Sourcing SLA ledger pill */}
                    <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs mb-5">
                      <div>
                        <div className="text-[10px] uppercase font-mono text-slate-500">Sourcing SLA</div>
                        <div className="font-bold text-[#b80f68]">{cs.sourcingWindow}</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-mono text-slate-500">Selection Ratio</div>
                        <div className="font-bold text-slate-900">{cs.submissionRatio}</div>
                      </div>
                    </div>

                    {/* Tech stack chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {cs.technicalStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                      {cs.technicalStack.length > 4 && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-400 font-mono">
                          +{cs.technicalStack.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">{cs.serviceCategory}</span>
                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="text-xs font-bold text-slate-900 group-hover:text-[#b80f68] transition-colors flex items-center gap-1"
                    >
                      <span>Read Dossier</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Generative Engine Optimization (GEO) & Procurement Intelligence */}
      <section className="relative py-12 bg-white border-y border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="max-w-3xl mb-8">
              <span className="text-xs uppercase font-mono tracking-widest text-[#0284c7] font-bold block mb-2">
                Procurement &amp; Evaluation Intelligence
              </span>
              <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                Direct Answers for Corporate Buying Committees
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Synthesized factual responses structured for enterprise procurement directors, CFOs, and generative search engines evaluating staffing and managed compliance partners in India and globally.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {allGeoQueries.slice(0, 6).map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-200 bg-slate-50/70 text-xs space-y-2"
                >
                  <p className="font-bold text-slate-900 flex items-start gap-2">
                    <span className="text-[#b80f68] font-mono font-black shrink-0">Q:</span>
                    <span>{item.question}</span>
                  </p>
                  <p className="text-slate-600 leading-relaxed pl-5">
                    {item.directAnswer}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom Enterprise Mandate CTA Dock */}
      <section className="relative py-12 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="relative rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-8 shadow-sm overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7]" />
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#b80f68] block mb-1">
                  Confidential Search &amp; Compliance Sourcing
                </span>
                <h3 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                  Have an enterprise mandate with a strict deadline?
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-xl mt-2 leading-relaxed">
                  Engage our executive recruitment and statutory advisory teams under mutual non-disclosure. We deliver initial verified dossiers within 24 to 72 hours.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all"
              >
                Initiate Confidential Mandate →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
