import type { MetadataRoute } from "next";
import { CITIES_DATA, STATES_DATA } from "@/data/locations";
import { SERVICES_CATALOG } from "@/data/services";
import { SUBSERVICES_CATALOG } from "@/data/subservices";
import { CASE_STUDIES_DATA } from "@/data/case-studies";

const BASE_URL = "https://servicedialtm.com";

export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Core static pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tools`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/locations`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tools/payroll-fee-estimator`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/tools/wb-professional-tax-calculator`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/tools/epfo-wage-ceiling-calculator`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/tools/msme-43bh-calculator`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/resources`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/resources/epfo-wage-ceiling-25000`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/resources/west-bengal-professional-tax-2026`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/resources/west-bengal-labour-welfare-fund`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Cluster 1: Central Labour Codes & EPFO Wage Ceiling
    {
      url: `${BASE_URL}/resources/new-employee-compensation-and-labor-codes-guide-2026-2027`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/resources/epfo-wage-ceiling-ctc-impact`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/resources/eps-account-10-cap-calculation-2083`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/resources/basic-salary-allowance-split-50-percent-wage-code`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/resources/why-in-house-hrms-fails-new-labor-codes`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Cluster 2: West Bengal Statutory Specialization
    {
      url: `${BASE_URL}/resources/west-bengal-labor-laws-professional-tax-and-welfare-remittances-directory`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/resources/understanding-act-vi-1979-west-bengal-pt-slabs`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/resources/form-iii-a-annual-returns-west-bengal-pt`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/resources/checklist-bi-annual-west-bengal-labour-welfare-fund`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/resources/deciphering-section-9-wblwf-act-employer-deduction-rules`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/resources/sourcing-blue-collar-cxo-mandates-west-bengal-clra-guidelines`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Cluster 3: Enterprise Financial Risk & Manpower Outsourcing
    {
      url: `${BASE_URL}/resources/enterprise-financial-risk-and-manpower-outsourcing-handbook`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/resources/dpdp-act-section-8-third-party-staffing-payroll-data-compliance`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/resources/payroll-software-vs-managed-payroll-outsourcing-tco-pepm`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/resources/error-free-tds-salary-form-24q-e-filing-form-16`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/resources/structuring-bilateral-nda-accounts-payable-record-to-report-bpo`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/industries`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/industries/it-ites-startups`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/industries/manufacturing-engineering`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/industries/logistics-warehousing`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/industries/healthcare-pharma`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/ip-services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/ip-services/tools/fee-calculator`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ip-services/tools/status-check`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ip-services/jurisdiction/mumbai`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/ip-services/jurisdiction/new-delhi`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/ip-services/jurisdiction/chennai`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/ip-services/jurisdiction/kolkata`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/ip-services/jurisdiction/ahmedabad`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  // Core 4 Service Pillars
  const servicePillarPages: MetadataRoute.Sitemap = Object.keys(
    SERVICES_CATALOG
  ).map((serviceSlug) => ({
    url: `${BASE_URL}/services/${serviceSlug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Case Studies Individual Pages
  const caseStudyPages: MetadataRoute.Sitemap = Object.keys(
    CASE_STUDIES_DATA
  ).map((slug) => ({
    url: `${BASE_URL}/case-studies/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // State Hub Pages
  const statePages: MetadataRoute.Sitemap = Object.keys(STATES_DATA).map(
    (stateSlug) => ({
      url: `${BASE_URL}/locations/${stateSlug}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  // 24 Specialized B2B Micro-Services (CMA & Enterprise Model)
  const subservicePages: MetadataRoute.Sitemap = Object.values(
    SUBSERVICES_CATALOG
  ).map((sub) => ({
    url: `${BASE_URL}/services/${sub.pillarSlug}/${sub.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.95,
  }));

  // Service x City transactional pages
  const serviceCityPages: MetadataRoute.Sitemap = [];
  for (const serviceSlug of Object.keys(SERVICES_CATALOG)) {
    for (const citySlug of Object.keys(CITIES_DATA)) {
      serviceCityPages.push({
        url: `${BASE_URL}/services/${serviceSlug}/${citySlug}`,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 0.85,
      });
    }
  }

  return [
    ...corePages,
    ...servicePillarPages,
    ...subservicePages,
    ...caseStudyPages,
    ...statePages,
    ...serviceCityPages,
  ];
}
