import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SubServicePageTemplate from "@/components/SubServicePageTemplate";
import {
  getSubServiceBySlug,
  getSubServicesByPillar,
} from "@/data/subservices";

const PILLAR = "compliance-services";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateStaticParams() {
  const subservices = getSubServicesByPillar(PILLAR);
  return subservices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const subservice = getSubServiceBySlug(slug);

  if (!subservice || subservice.pillarSlug !== PILLAR) {
    return { title: "Service Not Found" };
  }

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

export default async function ComplianceSubServicePage({ params }: PageProps) {
  const { slug } = await params;
  const subservice = getSubServiceBySlug(slug);

  if (!subservice || subservice.pillarSlug !== PILLAR) {
    notFound();
  }

  const allPillar = getSubServicesByPillar(PILLAR);
  const related = allPillar.filter((s) => s.slug !== slug);

  return (
    <SubServicePageTemplate
      subservice={subservice}
      relatedSubServices={related}
    />
  );
}
