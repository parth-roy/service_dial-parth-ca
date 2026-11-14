import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CityServicePageTemplate from "@/components/CityServicePageTemplate";
import { CITIES_DATA } from "@/data/locations";
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

  const title = `${service.name} in ${city.name}, ${city.state}`;
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

  return <CityServicePageTemplate service={service} city={city} />;
}
