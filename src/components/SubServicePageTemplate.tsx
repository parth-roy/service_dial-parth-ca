import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SubService } from "@/data/subservices";

interface SubServicePageTemplateProps {
  subservice: SubService;
  relatedSubServices: SubService[];
}

export default function SubServicePageTemplate({
  subservice,
  relatedSubServices,
}: SubServicePageTemplateProps) {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: subservice.pillarName, href: `/services/${subservice.pillarSlug}` },
    { label: subservice.shortTitle, href: `/services/${subservice.pillarSlug}/${subservice.slug}` },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": subservice.pillarSlug === "finance-and-audit" ? "AccountingService" : "ProfessionalService",
    name: `${subservice.title} | Service Dial`,
    description: subservice.metaDescription,
    url: `https://servicedialtm.com/services/${subservice.pillarSlug}/${subservice.slug}`,
    provider: {
      "@type": "Organization",
      name: "Service Dial",
      url: "https://servicedialtm.com",
      logo: "https://servicedialtm.com/logo.png",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: subservice.shortTitle,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: subservice.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-slate-50 border-b border-sd-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-white to-slate-50 border-b border-sd-border py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-sd-pink bg-sd-pink/10 border border-sd-pink/20 rounded-full px-3 py-1">
                {subservice.badge}
              </span>
              <span className="inline-flex items-center text-xs font-semibold text-slate-600 bg-slate-100 border border-slate-200 rounded-full px-3 py-1">
                {subservice.pillarName}
              </span>
              <span className="inline-flex items-center text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">
                Pan-India Enterprise Delivery
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-sd-text leading-tight">
              {subservice.title}
            </h1>

            <p className="mt-3 text-base sm:text-lg font-semibold text-slate-700">
              {subservice.tagline}
            </p>

            <div className="mt-6 p-5 bg-white rounded-2xl border-2 border-sd-pink/20 shadow-xs">
              <span className="text-[11px] font-bold text-sd-pink uppercase tracking-widest block mb-1.5">
                Executive BLUF (Bottom Line Up Front)
              </span>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {subservice.blufSummary}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold bg-sd-pink text-white hover:bg-sd-pink-dark transition-all shadow-md active:scale-95"
              >
                Schedule Corporate Consultation →
              </Link>
              <Link
                href="/tools"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold bg-white text-sd-text border border-sd-border hover:bg-slate-50 transition-all shadow-2xs"
              >
                Explore Statutory Calculators ⚙️
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory & CMA Framework */}
      <section className="py-10 bg-white border-b border-sd-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
            Governing Legal Mandates &amp; Statutory Standards:
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {subservice.regulatoryFramework.map((reg, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200/90 rounded-lg px-3 py-1.5"
              >
                <span className="text-sd-pink font-bold">§</span>
                {reg}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-14 lg:py-20 bg-slate-50 border-b border-sd-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-sd-pink uppercase tracking-wider block mb-2">
              Operational Scope
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-sd-text">
              Enterprise Execution Capabilities
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Rigorous, SLA-backed operational procedures tailored to multi-location corporate structures.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {subservice.keyCapabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-sd-border shadow-xs hover:border-sd-pink/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-sd-pink/10 text-sd-pink font-black text-sm flex items-center justify-center mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-sd-text mb-2.5">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables & Audit Dossier */}
      <section className="py-14 lg:py-20 bg-white border-b border-sd-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-sd-pink uppercase tracking-wider block">
                Verification &amp; Output
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-sd-text">
                Tangible Deliverables &amp; Certified Audit Dossiers
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every Service Dial engagement yields permanent, audit-ready working papers formatted for immediate presentation to Statutory Auditors, Tax Authorities, Consortium Banks, and Company Boards.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-bold text-sd-pink hover:text-sd-pink-dark transition-colors"
                >
                  Request Sample Audit Dossier →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 sm:p-7 border border-sd-border">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                Standard Engagement Documentation:
              </h3>
              <ul className="space-y-3">
                {subservice.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">
                      ✓
                    </span>
                    <span className="font-medium leading-relaxed">{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SLA & Performance Metrics */}
      <section className="py-12 bg-slate-900 text-white border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">
              Contractual Accountability
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              Guaranteed SLA Commitments
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {subservice.slaMetrics.map((sla, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 shadow-md"
              >
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  {sla.label}
                </span>
                <strong className="text-xl sm:text-2xl font-black text-rose-400 block mb-2 font-mono">
                  {sla.value}
                </strong>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {sla.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical FAQs */}
      <section className="py-14 lg:py-20 bg-white border-b border-sd-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-sd-pink uppercase tracking-wider block mb-2">
              Advisory Knowledge Base
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-sd-text">
              Frequently Asked Technical Questions
            </h2>
          </div>

          <div className="space-y-4">
            {subservice.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-sd-border bg-slate-50/60 p-5 sm:p-6"
              >
                <h3 className="text-sm sm:text-base font-bold text-sd-text mb-2 flex items-start gap-2">
                  <span className="text-sd-pink font-black shrink-0">Q.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Micro-Services in Pillar */}
      {relatedSubServices.length > 0 && (
        <section className="py-12 bg-slate-50 border-b border-sd-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
              Complementary Services in {subservice.pillarName}:
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedSubServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.pillarSlug}/${rel.slug}`}
                  className="bg-white rounded-xl p-5 border border-sd-border hover:border-sd-pink/40 hover:shadow-xs transition-all group"
                >
                  <span className="text-[10px] font-bold text-sd-pink uppercase tracking-wide block mb-1">
                    {rel.badge}
                  </span>
                  <h3 className="text-sm font-bold text-sd-text group-hover:text-sd-pink transition-colors mb-1.5">
                    {rel.shortTitle} →
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {rel.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Corporate Call to Action */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-sd-pink/20 bg-gradient-to-r from-sd-pink/10 via-rose-50/50 to-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-black uppercase tracking-widest text-sd-pink mb-2 block">
                Direct Corporate Onboarding
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-sd-text">
                Ready to elevate your {subservice.shortTitle.toLowerCase()}?
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Connect directly with practicing CMAs, CAs, and compliance directors for a confidential operational audit and proposal.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-sm font-bold bg-sd-pink text-white hover:bg-sd-pink-dark transition-all shadow-md active:scale-95 text-center"
              >
                Discuss with a Specialist →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
