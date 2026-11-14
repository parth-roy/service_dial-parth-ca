import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SubService } from "@/data/subservices";
import ScrollReveal from "@/components/ScrollReveal";

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
    <div className="relative min-h-screen bg-[#F8F9FA] text-slate-900 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Subtle Top Ambient Brand Light Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-[#00cfdc]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[400px] bg-[#b80f68]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Breadcrumb Bar */}
      <div className="relative pt-8 pb-4 border-b border-slate-200/70 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-2.5 mb-6">
                <span className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider text-[#b80f68] bg-[#b80f68]/10 border border-[#b80f68]/20 rounded-full px-3 py-1">
                  {subservice.badge}
                </span>
                <span className="inline-flex items-center text-xs font-mono font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-3 py-1">
                  {subservice.pillarName}
                </span>
                <span className="inline-flex items-center text-xs font-mono font-semibold text-[#0284c7] bg-[#0284c7]/10 border border-[#0284c7]/20 rounded-full px-3 py-1">
                  Pan-India Delivery
                </span>
              </div>

              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-4">
                {subservice.title}
              </h1>

              <p className="font-sans text-base sm:text-xl font-semibold text-slate-700 mb-8 leading-snug">
                {subservice.tagline}
              </p>

              {/* BLUF Plaque */}
              <div className="relative rounded-2xl border border-slate-200/90 bg-[#F8F9FA] p-6 sm:p-7 shadow-xs overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7]" />
                <span className="text-[11px] font-mono font-bold text-[#b80f68] uppercase tracking-widest block mb-2">
                  Executive BLUF (Bottom Line Up Front)
                </span>
                <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  {subservice.blufSummary}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all active:scale-95"
                >
                  Schedule Corporate Consultation →
                </Link>
                <Link
                  href="/tools"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-xs sm:text-sm font-bold bg-slate-50 text-slate-800 border border-slate-200 hover:bg-slate-100 transition-all shadow-2xs"
                >
                  Explore Statutory Calculators ⚙️
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Regulatory & Statutory Governance Standards */}
      <section className="relative py-8 bg-[#F8F9FA] border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={15}>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 shrink-0">
                Statutory Standards &amp; Acts:
              </span>
              <div className="flex flex-wrap gap-2">
                {subservice.regulatoryFramework.map((reg, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-800 bg-white border border-slate-200/90 rounded-lg px-3 py-1 shadow-xs"
                  >
                    <span className="text-[#b80f68] font-bold">§</span>
                    {reg}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="relative py-16 sm:py-20 bg-white border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b80f68] block mb-2">
                Operational Scope
              </span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900">
                Enterprise Execution Capabilities
              </h2>
              <p className="font-sans text-sm text-slate-600 mt-2 leading-relaxed">
                Rigorous, SLA-backed operational procedures tailored to multi-location corporate structures.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {subservice.keyCapabilities.map((cap, idx) => (
              <ScrollReveal
                key={idx}
                direction={idx % 2 === 0 ? "left" : "right"}
                distance={25}
                delay={idx * 70}
              >
                <div className="h-full bg-[#F8F9FA] rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-900 font-mono font-black text-sm flex items-center justify-center mb-5 shadow-xs">
                      {idx + 1}
                    </div>
                    <h3 className="font-outfit text-xl font-bold text-slate-900 mb-2.5 group-hover:text-[#b80f68] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables & Audit Dossier */}
      <section className="relative py-16 sm:py-20 bg-[#F8F9FA] border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 space-y-4">
              <ScrollReveal direction="left" distance={25}>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284c7] block">
                  Verification &amp; Output
                </span>
                <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900">
                  Tangible Deliverables &amp; Certified Audit Dossiers
                </h2>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  Every Service Dial engagement yields permanent, audit-ready working papers formatted for immediate presentation to Statutory Auditors, Tax Authorities, Consortium Banks, and Company Boards.
                </p>
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-xs sm:text-sm font-bold text-[#b80f68] hover:text-slate-900 transition-colors"
                  >
                    Request Sample Audit Dossier →
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6">
              <ScrollReveal direction="right" distance={25} delay={100}>
                <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm">
                  <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-5">
                    Standard Engagement Documentation:
                  </h3>
                  <ul className="space-y-3.5">
                    {subservice.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                        <span className="w-5 h-5 rounded-full bg-slate-100 text-[#0284c7] font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">
                          ✓
                        </span>
                        <span className="font-medium leading-relaxed">{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Guaranteed SLA Commitments (Refined White Luxury Mode) */}
      <section className="relative py-16 sm:py-20 bg-white border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#b80f68] block mb-1">
                Contractual Accountability
              </span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900">
                Guaranteed SLA Commitments
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {subservice.slaMetrics.map((sla, idx) => (
              <ScrollReveal key={idx} direction="up" distance={25} delay={idx * 80}>
                <div className="h-full bg-[#F8F9FA] rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2">
                      {sla.label}
                    </span>
                    <strong className="font-outfit text-2xl sm:text-3xl font-black text-slate-900 block mb-2">
                      {sla.value}
                    </strong>
                    <p className="font-sans text-xs text-slate-600 leading-relaxed">
                      {sla.detail}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technical FAQs */}
      <section className="relative py-16 sm:py-20 bg-[#F8F9FA] border-b border-slate-200/70">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="text-center mb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284c7] block mb-2">
                Advisory Knowledge Base
              </span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900">
                Frequently Asked Technical Questions
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {subservice.faqs.map((faq, idx) => (
              <ScrollReveal key={idx} direction="up" distance={20} delay={idx * 60}>
                <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs">
                  <h3 className="font-outfit text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                    <span className="text-[#b80f68] font-mono font-black shrink-0">Q.</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                    {faq.answer}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Micro-Services in Pillar */}
      {relatedSubServices.length > 0 && (
        <section className="relative py-14 bg-white border-b border-slate-200/70">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up" distance={20}>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 mb-6">
                Complementary Services in {subservice.pillarName}:
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedSubServices.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.pillarSlug}/${rel.slug}`}
                    className="bg-[#F8F9FA] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-slate-300 hover:bg-white shadow-xs transition-all group"
                  >
                    <span className="text-[10px] font-mono font-bold text-[#b80f68] uppercase tracking-wide block mb-1">
                      {rel.badge}
                    </span>
                    <h3 className="font-outfit text-base font-bold text-slate-900 group-hover:text-[#b80f68] transition-colors mb-1.5">
                      {rel.shortTitle} →
                    </h3>
                    <p className="font-sans text-xs text-slate-500 line-clamp-2">
                      {rel.tagline}
                    </p>
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Corporate Call to Action */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="relative rounded-3xl border border-slate-200/90 bg-[#F8F9FA] p-8 sm:p-12 overflow-hidden shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7]" />
              <div className="max-w-xl">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b80f68] block mb-2">
                  Direct Corporate Onboarding
                </span>
                <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                  Ready to elevate your {subservice.shortTitle.toLowerCase()}?
                </h2>
                <p className="font-sans text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Connect directly with practicing CMAs, CAs, and compliance directors for a confidential operational audit and proposal.
                </p>
              </div>
              <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all active:scale-95 text-center"
                >
                  Discuss with a Specialist →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
