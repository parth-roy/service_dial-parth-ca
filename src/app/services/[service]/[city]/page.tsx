import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
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

  const title = `${service.name} in ${city.name} | Service Dial`;
  const description = service.metaDescriptionTemplate
    .replace("{city}", city.name)
    .replace("{state}", city.state);

  return {
    title,
    description,
    alternates: {
      canonical: `https://servicedial.in/services/${service.slug}/${city.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://servicedial.in/services/${service.slug}/${city.slug}`,
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

  // JSON-LD Service Schema (Section 11 of Blueprint: strictly Service + areaServed, avoiding LocalBusiness spam)
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in ${city.name}`,
    serviceType: service.name,
    provider: {
      "@type": "Organization",
      name: "Service Dial",
      url: "https://servicedial.in",
      logo: "https://servicedial.in/logo.png",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <div className="py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.name, href: `/services/${service.slug}` },
              { label: `${city.name}`, href: `/services/${service.slug}/${city.slug}` },
            ]}
          />

          {/* Hero Section with BLUF */}
          <section className="mt-4 mb-14">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-sd-pink/30 bg-sd-pink/5 px-3 py-1 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-sd-pink animate-pulse" />
                <span className="text-xs font-semibold text-sd-pink">
                  {city.name}, {city.state} · LGD Code {city.lgdCode}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-sd-text leading-[1.1]">
                Specialized {service.name} in {city.name}
              </h1>

              <p className="mt-5 text-sd-muted text-base lg:text-lg leading-relaxed">
                Empowering enterprises, GCCs, and high-growth businesses in {city.name} with reliable execution, SLA-backed turnaround, and complete regulatory assurance.
              </p>

              {/* GEO / AEO Direct Answer Block (BLUF) */}
              <div className="mt-6 p-4 rounded-lg border border-sd-border bg-sd-bg-2 text-xs leading-relaxed text-sd-text">
                <p className="font-semibold text-sd-pink uppercase tracking-wider text-[11px] mb-1">
                  Bottom-Line Up Front (BLUF):
                </p>
                <p className="text-sd-muted">{blufAnswer}</p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center rounded px-6 py-3 text-xs sm:text-sm font-semibold bg-sd-pink text-white hover:bg-sd-pink-dark transition-colors"
                >
                  Schedule a {service.shortName} Consultation
                </Link>
                <Link
                  href={`/locations/${city.stateSlug}`}
                  className="inline-flex justify-center items-center rounded px-5 py-3 text-xs sm:text-sm font-semibold border border-sd-border text-sd-muted hover:text-sd-text hover:border-sd-border-2 transition-colors"
                >
                  View {city.state} Regulations →
                </Link>
              </div>
            </div>
          </section>

          {/* Local Context & Industrial Clusters */}
          <section className="mb-14 rounded-lg border border-sd-border bg-white p-6 lg:p-8 shadow-xs">
            <div className="max-w-3xl mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-sd-pink mb-1">
                Regional Ecosystem Context
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-sd-text">
                Operating Across {city.name}’s Key Commercial Hubs
              </h2>
              <p className="text-xs text-sd-muted mt-2 leading-relaxed">
                {city.economicProfile} Service Dial deploys specialized workflows tailored to the dominant industry clusters operating within {city.name}.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {city.clusters.map((cluster) => (
                <div
                  key={cluster.name}
                  className="p-4 rounded border border-sd-border bg-sd-bg-2"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sd-pink block mb-1">
                    {cluster.type}
                  </span>
                  <p className="text-sm font-bold text-sd-text mb-2">{cluster.name}</p>
                  <ul className="space-y-1">
                    {cluster.keyZones.map((zone) => (
                      <li key={zone} className="text-[11px] text-sd-muted flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-sd-pink shrink-0" />
                        {zone}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="p-4 rounded border-l-4 border-sd-pink bg-sd-bg-2 text-xs text-sd-muted">
              <p className="font-semibold text-sd-text mb-0.5">
                Statutory & Compliance Nuance for {city.name}:
              </p>
              <p>{city.localComplianceNuance}</p>
            </div>
          </section>

          {/* SLA & Service Delivery Metrics */}
          <section className="mb-14">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-sd-pink mb-1">
                Service Delivery Matrix
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-sd-text">
                Documented Execution Standards
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.slaMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border border-sd-border bg-white p-5 shadow-xs"
                >
                  <p className="text-2xl sm:text-3xl font-black text-sd-pink tracking-tight">
                    {metric.value}
                  </p>
                  <p className="text-xs font-bold text-sd-text mt-1">{metric.label}</p>
                  <p className="text-[11px] text-sd-muted mt-2 leading-relaxed">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Capabilities Grid */}
          <section className="mb-14">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-sd-pink mb-1">
                Core Capabilities
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-sd-text">
                How We Deliver {service.name} in {city.name}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {service.capabilities.map((cap, i) => (
                <div
                  key={cap.title}
                  className="rounded-lg border border-sd-border bg-white p-6 shadow-xs flex gap-4"
                >
                  <span className="text-2xl font-black text-sd-border-2 select-none shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-sd-text mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-sd-muted leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Localized FAQ Accordion (GEO / AEO) */}
          <section className="mb-14 rounded-lg border border-sd-border bg-white p-6 lg:p-8 shadow-xs">
            <div className="max-w-2xl mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-sd-pink mb-1">
                Frequently Asked Questions
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-sd-text">
                {service.name} in {city.name}: Common Inquiries
              </h2>
            </div>

            <div className="space-y-4">
              {service.localFaqTemplates.map((faq, index) => {
                const question = faq.questionTemplate.replace("{city}", city.name);
                const answer = faq.answerTemplate
                  .replace("{city}", city.name)
                  .replace("{localCompliance}", city.localComplianceNuance);

                return (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-sd-border bg-sd-bg-2"
                  >
                    <h3 className="text-sm font-bold text-sd-text mb-2">
                      {question}
                    </h3>
                    <p className="text-xs text-sd-muted leading-relaxed">
                      {answer}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Lateral Linking: Other Services in This City */}
          <section className="mb-12 pt-8 border-t border-sd-border">
            <div className="mb-4">
              <h3 className="text-base font-bold text-sd-text">
                Other Enterprise Services in {city.name}
              </h3>
              <p className="text-xs text-sd-muted">
                Explore integrated back-office support across our four pillars for {city.name} enterprises:
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              {otherServices.map((otherSvc) => (
                <Link
                  key={otherSvc.slug}
                  href={`/services/${otherSvc.slug}/${city.slug}`}
                  className="p-3.5 rounded border border-sd-border bg-white hover:border-sd-pink/40 hover:shadow-xs transition-all flex items-center justify-between"
                >
                  <span className="text-xs font-semibold text-sd-text">
                    {otherSvc.name} in {city.name}
                  </span>
                  <span className="text-xs text-sd-pink">→</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Geographic Spoke Linking: Other Major Hubs */}
          <section className="mb-14 pt-6 border-t border-sd-border">
            <div className="mb-4">
              <h3 className="text-base font-bold text-sd-text">
                {service.name} in Other Major Indian Commercial Hubs
              </h3>
              <p className="text-xs text-sd-muted">
                Nationwide deployment across primary technology and manufacturing metros:
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              {otherCities.map((otherCity) => (
                <Link
                  key={otherCity.slug}
                  href={`/services/${service.slug}/${otherCity.slug}`}
                  className="px-3 py-1.5 rounded border border-sd-border bg-sd-bg-2 hover:bg-white hover:border-sd-pink/40 text-sd-muted hover:text-sd-text transition-all font-medium"
                >
                  {service.shortName} in {otherCity.name}
                </Link>
              ))}
            </div>
          </section>

          {/* Bottom Lead Conversion Box */}
          <section className="rounded-lg border border-sd-pink/20 bg-gradient-to-r from-sd-pink/5 to-transparent p-8 lg:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-2xl font-black text-sd-text">
                Initiate Your {service.shortName} Mandate in {city.name}
              </h2>
              <p className="text-xs sm:text-sm text-sd-muted mt-2 leading-relaxed">
                Every mandate is executed under strict NDA protection. Receive verified shortlists and customized SLA delivery models within 24 to 72 hours.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded px-6 py-3 text-xs sm:text-sm font-semibold bg-sd-pink text-white hover:bg-sd-pink-dark transition-colors shadow-xs"
            >
              Start Confidential Discussion →
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
