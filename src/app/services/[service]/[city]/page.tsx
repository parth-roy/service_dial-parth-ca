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

  // High-Intent B2B Meta Calibration based on Search Console forensic data
  let title = `${service.name} in ${city.name}, ${city.state}`;
  let description = service.metaDescriptionTemplate
    .replace("{city}", city.name)
    .replace("{state}", city.state);

  if (serviceSlug === "hrms-and-payroll") {
    if (citySlug === "indore") {
      title = `Payroll Software & Managed Payroll Services in Indore | MP PT Compliant`;
      description = `Cloud payroll software and managed payroll outsourcing in Indore. Automated MP Professional Tax, EPF, ESIC challans, and Pithampur industrial compliance.`;
    } else if (citySlug === "surat") {
      title = `Payroll Software & Payroll Management Services in Surat | Gujarat PT Compliant`;
      description = `Automated payroll software and outsourced payroll management in Surat. Zero-error salary processing with Gujarat Professional Tax, textile cluster PF/ESIC, & LWF compliance.`;
    } else if (citySlug === "kolkata") {
      title = `Payroll Software & Outsourced HRMS Services in Kolkata | West Bengal PT Slabs`;
      description = `Leading payroll software and HRMS management company in Kolkata. Automated West Bengal Professional Tax (Form III-A), WBLWF, EPF, and gratuity compliance.`;
    } else if (citySlug === "coimbatore") {
      title = `Payroll Software & Payroll Outsourcing Services in Coimbatore | Tamil Nadu PT`;
      description = `Cloud payroll software and outsourced payroll processing in Coimbatore. Automated Tamil Nadu Professional Tax, EPF, ESIC returns, and engineering cluster payroll.`;
    } else {
      title = `Payroll Software & Managed Payroll Services in ${city.name} | Service Dial`;
      description = `Cloud payroll software and managed payroll outsourcing in ${city.name}, ${city.state}. 100% compliant PF, ESIC, ${city.state} Professional Tax slabs, and automated salary processing.`;
    }
  } else if (serviceSlug === "compliance-services") {
    if (citySlug === "bengaluru") {
      title = `Vendor Compliance Solutions & Labour Law Advisory in Bengaluru | Service Dial`;
      description = `Enterprise vendor compliance solutions in Bangalore. Mitigate third-party contractor risk with automated Karnataka CLRA, S&E Act audits, and ₹5 Crore PII protection.`;
    } else if (citySlug === "ahmedabad") {
      title = `Regulatory Compliance Consultants & Factory Audits in Ahmedabad | Service Dial`;
      description = `Specialized regulatory compliance consultants and factory audit services in Ahmedabad. GMP/GCP documentation, Gujarat Factories Rules 1963, and CLRA statutory filing.`;
    } else if (citySlug === "pune") {
      title = `Compliance Services in Pune: Factory Act & Labour Law Advisory | Service Dial`;
      description = `Top-rated statutory compliance services in Pune (MIDC industrial belt). Maharashtra Shop Act, DISH factory safety compliance, and third-party contractor audit.`;
    } else if (citySlug === "delhi") {
      title = `Statutory Compliance Services & Labour Law Advisory in Delhi NCR | Service Dial`;
      description = `Comprehensive statutory compliance services in Delhi NCR. Delhi Shops & Establishments Act, CLRA vendor compliance audits, and EPF/ESIC advisory.`;
    } else {
      title = `Statutory Compliance & Vendor Compliance Solutions in ${city.name} | Service Dial`;
      description = `Labour law audit and statutory compliance services in ${city.name}, ${city.state}. Maintain inspection-ready digital registers, PF/ESIC returns, and CLRA vendor governance.`;
    }
  } else if (serviceSlug === "staffing-and-recruitment") {
    if (citySlug === "ahmedabad") {
      title = `Regulatory Staffing Services in Ahmedabad | Compliant Manpower Recruitment`;
      description = `Ranked #1 for regulatory staffing services in Ahmedabad. Compliant contract staffing, blue-collar volume deployment, and factory workforce with 100% CLRA adherence.`;
    } else if (citySlug === "mumbai") {
      title = `Regulatory Staffing Services in Mumbai | Compliant Contract Manpower`;
      description = `Premier regulatory staffing services in Mumbai. Zero-liability contract staffing for BFSI, pharma, and logistics with 100% Maharashtra Shop Act, PF, and CLRA compliance.`;
    } else if (citySlug === "delhi") {
      title = `Regulatory Staffing Services in Delhi NCR | Compliant Contract Staffing Agency`;
      description = `Authorized regulatory staffing services in Delhi NCR. End-to-end compliant workforce deployment with Delhi Shops & Establishments Act, EPF, ESIC, and CLRA management.`;
    } else if (citySlug === "pune") {
      title = `Regulatory Staffing Agency in Pune | IT & Manufacturing Recruitment`;
      description = `Specialized regulatory staffing and executive recruitment agency in Pune (Hinjawadi IT Park & Chakan MIDC). 100% compliant contract workforce deployment.`;
    } else {
      title = `Regulatory Staffing Services & Executive Recruitment in ${city.name} | Service Dial`;
      description = `Premier regulatory staffing and recruitment services in ${city.name}, ${city.state}. Deploy compliant contract, IT, and executive workforce with 100% statutory adherence.`;
    }
  } else if (serviceSlug === "finance-and-audit") {
    title = `Finance, Accounting & Internal Audit Outsourcing in ${city.name} | Service Dial`;
    description = `Enterprise finance and accounting outsourcing in ${city.name}, ${city.state}. AP/AR automation, Record to Report, and CARO 2020 audit readiness.`;
  }

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
