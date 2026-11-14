import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import CalculatorQuickLeadForm from "@/components/calculator/CalculatorQuickLeadForm";
import { CITIES_DATA, STATES_DATA } from "@/data/locations";
import { SERVICES_CATALOG } from "@/data/services";

interface CityServicePageProps {
  params: Promise<{
    service: string;
    city: string;
  }>;
}

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateStaticParams() {
  const serviceKeys = Object.keys(SERVICES_CATALOG);
  const cityKeys = Object.keys(CITIES_DATA);

  const params: { service: string; city: string }[] = [];
  for (const service of serviceKeys) {
    for (const city of cityKeys) {
      params.push({ service, city });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: CityServicePageProps): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = SERVICES_CATALOG[serviceSlug];
  const city = CITIES_DATA[citySlug];

  if (!service || !city) return { title: "Service Not Found" };

  const title = `${service.name} in ${city.name}`;
  const description = service.metaDescriptionTemplate
    .replace("{city}", city.name)
    .replace("{state}", city.state);

  return {
    title,
    description,
    alternates: {
      canonical: `https://servicedialtm.com/services/${service.slug}/${city.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://servicedialtm.com/services/${service.slug}/${city.slug}`,
      siteName: "Service Dial",
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function CityServicePage({ params }: CityServicePageProps) {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = SERVICES_CATALOG[serviceSlug];
  const city = CITIES_DATA[citySlug];

  if (!service || !city) notFound();

  const state = STATES_DATA[city.stateSlug];

  // Dynamic service-calibrated compliance nuance
  const serviceComplianceNuance = (() => {
    if (service.slug === "finance-and-audit") {
      return `Operating in ${city.name} (${city.state}) requires strict adherence to State Professional Tax schedules, CARO 2020 Clause 3(i) & 3(ii) physical fixed asset and inventory verifications, GSTR-2B Input Tax Credit reconciliation timelines, and MSME 45-day payment disclosures under Section 43B(h).`;
    }
    if (service.slug === "hrms-and-payroll") {
      return `Payroll administration in ${city.name} requires adherence to the revised EPFO ₹25,000 wage ceiling (Notification S.O. 5109(E)), ${city.state} Professional Tax brackets, Labour Welfare Fund deductions, and timely ECR challan remittances.`;
    }
    if (service.slug === "staffing-and-recruitment") {
      return `Recruitment and executive search in ${city.name} adheres to local industrial hub talent sourcing SLAs, thorough background KYC verifications, and compliance with the ${city.state} Shops and Establishments Act.`;
    }
    return city.localComplianceNuance;
  })();

  // Prepare localized BLUF string
  const blufAnswer = service.blufSummaryTemplate
    .replace("{city}", city.name)
    .replace("{state}", city.state);

  // Other services in the same city (Lateral linking)
  const otherServices = Object.values(SERVICES_CATALOG).filter(
    (s) => s.slug !== service.slug
  );

  // Other cities offering the same service (Geographic spoke linking)
  const otherCities = Object.values(CITIES_DATA).filter(
    (c) => c.slug !== city.slug
  );

  // JSON-LD Service Schema
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in ${city.name}`,
    serviceType: service.name,
    provider: {
      "@type": "Organization",
      name: "Service Dial",
      url: "https://servicedialtm.com",
      logo: "https://servicedialtm.com/logo.png",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      sameAs: city.wikipediaUri,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} Solutions in ${city.name}`,
      itemListElement: service.capabilities.map((cap) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${cap.title} in ${city.name}`,
          description: cap.description,
        },
      })),
    },
    description: blufAnswer,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.localFaqTemplates.map((faq) => ({
      "@type": "Question",
      name: faq.questionTemplate.replace("{city}", city.name),
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answerTemplate
          .replace("{city}", city.name)
          .replace("{localCompliance}", serviceComplianceNuance),
      },
    })),
  };

  return (
    <div className="relative min-h-screen bg-[#F8F9FA] text-slate-900 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Subtle Top Ambient Brand Light Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-[#00cfdc]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[400px] bg-[#b80f68]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Breadcrumbs Bar */}
      <div className="relative pt-8 pb-4 border-b border-slate-200/70 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.name, href: `/services/${service.slug}` },
              { label: `${city.name}`, href: `/services/${service.slug}/${city.slug}` },
            ]}
          />
        </div>
      </div>

      <div className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Section with BLUF */}
          <section className="mb-14 sm:mb-16">
            <ScrollReveal direction="up" distance={25}>
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-2.5 mb-5">
                  <span className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider text-[#b80f68] bg-[#b80f68]/10 border border-[#b80f68]/20 rounded-full px-3 py-1">
                    {city.name}, {city.state}
                  </span>
                  <span className="inline-flex items-center text-xs font-mono font-semibold text-[#0284c7] bg-[#0284c7]/10 border border-[#0284c7]/20 rounded-full px-3 py-1">
                    LGD Code {city.lgdCode}
                  </span>
                </div>

                <h1 className="font-outfit text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1] mb-5">
                  Specialized {service.name}{" "}
                  <span className="bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] bg-clip-text text-transparent">
                    in {city.name}.
                  </span>
                </h1>

                <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mb-6">
                  Empowering enterprises, GCCs, and high-growth businesses in {city.name} with reliable execution, SLA-backed turnaround, and complete regulatory assurance.
                </p>

                {/* GEO / AEO Direct Answer Block (BLUF) */}
                <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs text-xs sm:text-sm leading-relaxed text-slate-800">
                  <p className="font-mono font-bold text-[#b80f68] uppercase tracking-wider text-[11px] mb-1.5">
                    Bottom-Line Up Front (BLUF):
                  </p>
                  <p className="text-slate-600 font-sans">{blufAnswer}</p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all active:scale-95"
                  >
                    Schedule a {service.shortName} Consultation →
                  </Link>
                  <Link
                    href={`/locations/${city.stateSlug}`}
                    className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-xs sm:text-sm font-bold bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 transition-all shadow-2xs"
                  >
                    View {city.state} Regulations
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Local Context & Industrial Clusters */}
          <section className="mb-14 sm:mb-16">
            <ScrollReveal direction="up" distance={25}>
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
                <div className="max-w-3xl mb-8">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b80f68] block mb-2">
                    Regional Ecosystem Context
                  </span>
                  <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                    Operating Across {city.name}’s Key Commercial Hubs
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {city.economicProfile} Service Dial deploys specialized workflows tailored to the dominant industry clusters operating within {city.name}.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {city.clusters.map((cluster) => (
                    <div
                      key={cluster.name}
                      className="p-5 rounded-2xl border border-slate-200 bg-[#F8F9FA]"
                    >
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0284c7] block mb-1">
                        {cluster.type}
                      </span>
                      <p className="font-outfit text-sm font-bold text-slate-900 mb-2">{cluster.name}</p>
                      <ul className="space-y-1.5">
                        {cluster.keyZones.map((zone) => (
                          <li key={zone} className="text-xs font-sans text-slate-600 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#b80f68] shrink-0" />
                            {zone}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="p-5 rounded-2xl border-l-4 border-[#b80f68] bg-[#F8F9FA] text-xs sm:text-sm text-slate-600 font-sans">
                  <p className="font-bold text-slate-900 mb-1 font-outfit">
                    Statutory &amp; Compliance Nuance for {city.name}:
                  </p>
                  <p>{serviceComplianceNuance}</p>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* SLA & Service Delivery Metrics */}
          <section className="mb-14 sm:mb-16">
            <ScrollReveal direction="up" distance={25}>
              <div className="mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b80f68] block mb-2">
                  Service Delivery Matrix
                </span>
                <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                  Documented Execution Standards
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {service.slaMetrics.map((metric, idx) => (
                <ScrollReveal
                  key={metric.label}
                  direction="up"
                  distance={20}
                  delay={idx * 60}
                >
                  <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs flex flex-col justify-between">
                    <div>
                      <p className="font-outfit text-3xl font-black text-[#b80f68] tracking-tight">
                        {metric.value}
                      </p>
                      <p className="font-outfit text-sm font-bold text-slate-900 mt-1">{metric.label}</p>
                    </div>
                    <p className="text-xs font-sans text-slate-500 mt-3 leading-relaxed border-t border-slate-100 pt-2">
                      {metric.detail}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Capabilities Grid */}
          <section className="mb-14 sm:mb-16">
            <ScrollReveal direction="up" distance={25}>
              <div className="mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284c7] block mb-2">
                  Core Capabilities
                </span>
                <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                  How We Deliver {service.name} in {city.name}
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-5">
              {service.capabilities.map((cap, i) => (
                <ScrollReveal
                  key={cap.title}
                  direction={i % 2 === 0 ? "left" : "right"}
                  distance={20}
                  delay={i * 60}
                >
                  <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs flex gap-5">
                    <span className="font-mono text-xl font-black text-slate-300 select-none shrink-0">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-outfit text-base font-bold text-slate-900 mb-2">
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
          </section>

          {/* Localized FAQ Accordion (GEO / AEO) */}
          <section className="mb-14 sm:mb-16">
            <ScrollReveal direction="up" distance={25}>
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
                <div className="max-w-2xl mb-8">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b80f68] block mb-2">
                    Frequently Asked Questions
                  </span>
                  <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                    {service.name} in {city.name}: Common Inquiries
                  </h2>
                </div>

                <div className="space-y-4">
                  {service.localFaqTemplates.map((faq, index) => {
                    const question = faq.questionTemplate.replace("{city}", city.name);
                    const answer = faq.answerTemplate
                      .replace("{city}", city.name)
                      .replace("{localCompliance}", serviceComplianceNuance);

                    return (
                      <div
                        key={index}
                        className="p-5 rounded-2xl border border-slate-200 bg-[#F8F9FA]"
                      >
                        <h3 className="font-outfit text-sm sm:text-base font-bold text-slate-900 mb-2">
                          {question}
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {answer}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Lateral Linking: Other Services in This City */}
          <section className="mb-12 pt-8 border-t border-slate-200">
            <ScrollReveal direction="up" distance={20}>
              <div className="mb-6">
                <h3 className="font-outfit text-lg font-bold text-slate-900">
                  Other Enterprise Services in {city.name}
                </h3>
                <p className="font-sans text-xs text-slate-500 mt-1">
                  Explore integrated back-office support across our four pillars for {city.name} enterprises:
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-3.5">
                {otherServices.map((otherSvc) => (
                  <Link
                    key={otherSvc.slug}
                    href={`/services/${otherSvc.slug}/${city.slug}`}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:border-[#b80f68]/40 hover:shadow-xs transition-all flex items-center justify-between group"
                  >
                    <span className="text-xs font-semibold text-slate-900 group-hover:text-[#b80f68] transition-colors">
                      {otherSvc.name} in {city.name}
                    </span>
                    <span className="text-xs text-[#b80f68] group-hover:translate-x-0.5 transition-transform">→</span>
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </section>

          {/* Geographic Spoke Linking: Other Major Hubs */}
          <section className="mb-14 pt-6 border-t border-slate-200">
            <ScrollReveal direction="up" distance={20}>
              <div className="mb-4">
                <h3 className="font-outfit text-lg font-bold text-slate-900">
                  {service.name} in Other Major Indian Commercial Hubs
                </h3>
                <p className="font-sans text-xs text-slate-500 mt-1">
                  Nationwide deployment across primary technology and manufacturing metros:
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs">
                {otherCities.map((otherCity) => (
                  <Link
                    key={otherCity.slug}
                    href={`/services/${service.slug}/${otherCity.slug}`}
                    className="px-3.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:border-[#b80f68]/40 hover:text-slate-900 text-slate-600 transition-all font-medium text-xs shadow-2xs"
                  >
                    {service.shortName} in {otherCity.name}
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </section>

          {/* Bottom Lead Conversion Box */}
          <section className="relative rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xs overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7]" />
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-[#b80f68]">
                  Direct {city.name} Corporate Desk
                </span>
                <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                  Initiate Your {service.shortName} Mandate in {city.name}
                </h2>
                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every mandate is executed under strict bilateral NDA &amp; DPDP Act protection. Receive verified SLAs and tailored pricing within 24–72 hours.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-1 text-xs">
                  <a
                    href="tel:+918777864949"
                    className="font-bold text-slate-900 hover:text-[#b80f68] underline"
                  >
                    📞 +91 87778 64949
                  </a>
                  <Link
                    href="/tools"
                    className="font-semibold text-[#b80f68] hover:underline"
                  >
                    Statutory Tools →
                  </Link>
                  <Link
                    href="/contact"
                    className="font-semibold text-slate-500 hover:text-slate-900 underline"
                  >
                    Full Mandate Form
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-6">
                <CalculatorQuickLeadForm
                  service={service.name}
                  heading={`Request ${service.shortName} Proposal in ${city.name}`}
                  ctaLabel={`Get ${city.name} Proposal & Callback`}
                  contextSummary={`Commercial City Page Lead — Service: ${service.name} | City: ${city.name}, ${city.state}`}
                  analyticsChannel="city_service_page"
                  variant="light"
                  analyticsMeta={{ city: city.slug, service_slug: service.slug }}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
