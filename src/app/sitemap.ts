import type { MetadataRoute } from "next";
import { CITIES_DATA, STATES_DATA } from "@/data/locations";
import { SERVICES_CATALOG } from "@/data/services";
import { CASE_STUDIES_DATA } from "@/data/case-studies";

const BASE_URL = "https://servicedial.in";

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

  // State Hub Pages (9 States)
  const statePages: MetadataRoute.Sitemap = Object.keys(STATES_DATA).map(
    (stateSlug) => ({
      url: `${BASE_URL}/locations/${stateSlug}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  // 40 Service x City transactional pages (4 services * 10 cities)
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
    ...caseStudyPages,
    ...statePages,
    ...serviceCityPages,
  ];
}
