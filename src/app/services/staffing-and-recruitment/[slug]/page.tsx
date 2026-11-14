import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SubServicePageTemplate from "@/components/SubServicePageTemplate";
import CityServicePageTemplate from "@/components/CityServicePageTemplate";
import {
  getSubServiceBySlug,
  getSubServicesByPillar,
} from "@/data/subservices";
import { CITIES_DATA } from "@/data/locations";
import { SERVICES_CATALOG } from "@/data/services";

const PILLAR = "staffing-and-recruitment";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateStaticParams() {
  const subservices = getSubServicesByPillar(PILLAR);
  const cityKeys = Object.keys(CITIES_DATA);
  return [
    ...subservices.map((s) => ({ slug: s.slug })),
    ...cityKeys.map((c) => ({ slug: c })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const subservice = getSubServiceBySlug(slug);

  if (subservice && subservice.pillarSlug === PILLAR) {
    return {
      title: subservice.metaTitle,
      description: subservice.metaDescription,
      alternates: {
        canonical: `https://servicedialtm.com/services/${PILLAR}/${subservice.slug}`,
      },
      openGraph: {
        title: `${subservice.title} | Service Dial`,
        description: subservice.metaDescription,
        url: `https://servicedialtm.com/services/${PILLAR}/${subservice.slug}`,
        siteName: "Service Dial",
        locale: "en_IN",
        type: "website",
      },
    };
  }

  const city = CITIES_DATA[slug];
  const service = SERVICES_CATALOG[PILLAR];
  if (city && service) {
    const title = `${service.name} in ${city.name}`;
    const description = service.metaDescriptionTemplate
      .replace("{city}", city.name)
      .replace("{state}", city.state);

    return {
      title,
      description,
      alternates: {
        canonical: `https://servicedialtm.com/services/${PILLAR}/${city.slug}`,
      },
      openGraph: {
        title,
        description,
        url: `https://servicedialtm.com/services/${PILLAR}/${city.slug}`,
        siteName: "Service Dial",
        locale: "en_IN",
        type: "website",
      },
    };
  }

  return { title: "Service Not Found" };
}

export default async function StaffingSubServicePage({ params }: PageProps) {
  const { slug } = await params;
  const subservice = getSubServiceBySlug(slug);

  if (subservice && subservice.pillarSlug === PILLAR) {
    const allPillar = getSubServicesByPillar(PILLAR);
    const related = allPillar.filter((s) => s.slug !== slug);

    return (
      <SubServicePageTemplate
        subservice={subservice}
        relatedSubServices={related}
      />
    );
  }

  const city = CITIES_DATA[slug];
  const service = SERVICES_CATALOG[PILLAR];
  if (city && service) {
    return <CityServicePageTemplate service={service} city={city} />;
  }

  notFound();
}
