import React from "react";

export interface MasterBreadcrumbItem {
  name: string;
  url: string;
}

export interface MasterFaqItem {
  question: string;
  answer: string;
}

export interface MasterServiceData {
  name: string;
  description: string;
  serviceType: string;
  areaServed?: string;
  areaServedUri?: string;
  category?: "AccountingService" | "LegalService" | "EmploymentAgency" | "Service";
}

export interface MasterPermitData {
  name: string;
  validIn: string;
  issuingAuthority: string;
}

export interface EavMasterSchemaProps {
  pageType: "WebPage" | "ItemPage" | "CollectionPage" | "AboutPage" | "ContactPage";
  title: string;
  description: string;
  url: string;
  breadcrumbs?: MasterBreadcrumbItem[];
  faqs?: MasterFaqItem[];
  serviceData?: MasterServiceData;
  permitData?: MasterPermitData;
}

export default function EavMasterSchema({
  pageType,
  title,
  description,
  url,
  breadcrumbs,
  faqs,
  serviceData,
  permitData,
}: EavMasterSchemaProps) {
  const organizationNode = {
    "@type": "Organization",
    "@id": "https://servicedialtm.com/#organization",
    name: "Service Dial Talent Management Private Limited",
    alternateName: ["Service Dial", "Service Dial TM"],
    url: "https://servicedialtm.com",
    logo: {
      "@type": "ImageObject",
      url: "https://servicedialtm.com/logo.png",
      caption: "Service Dial Logo",
    },
    identifier: {
      "@type": "PropertyValue",
      propertyID: "Corporate Identification Number (CIN)",
      value: "U74999WB2016PTC216954",
    },
    foundingDate: "2016-08-01",
    address: {
      "@type": "PostalAddress",
      streetAddress: "58 (30), S.N. Banerjee Road, Barrackpore",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      postalCode: "700120",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-87778-64949",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Bengali"],
    },
    knowsAbout: [
      "Managed HRMS & Payroll Outsourcing",
      "Statutory Labour Law Compliance",
      "Factories Act 1948 Form 1 Sanctions",
      "Multi-State Professional Tax",
      "CARO 2020 Fixed Asset Tagging",
      "Contract Labour CLRA Licensing",
    ],
  };

  const webSiteNode = {
    "@type": "WebSite",
    "@id": "https://servicedialtm.com/#website",
    url: "https://servicedialtm.com",
    name: "Service Dial",
    publisher: {
      "@id": "https://servicedialtm.com/#organization",
    },
  };

  const webPageNode = {
    "@type": pageType,
    "@id": `${url}#webpage`,
    url: url,
    name: title,
    description: description,
    isPartOf: {
      "@id": "https://servicedialtm.com/#website",
    },
    about: {
      "@id": "https://servicedialtm.com/#organization",
    },
    inLanguage: "en-IN",
  };

  const graphNodes: any[] = [organizationNode, webSiteNode, webPageNode];

  // Polymorphic Service Node
  if (serviceData) {
    const serviceType = serviceData.category || "Service";
    const serviceNode: any = {
      "@type": serviceType,
      "@id": `${url}#service`,
      name: serviceData.name,
      description: serviceData.description,
      serviceType: serviceData.serviceType,
      provider: {
        "@id": "https://servicedialtm.com/#organization",
      },
    };

    if (serviceData.areaServed) {
      serviceNode.areaServed = {
        "@type": "City",
        name: serviceData.areaServed,
        sameAs: serviceData.areaServedUri,
      };
    }

    graphNodes.push(serviceNode);
  }

  // Government Permit Node
  if (permitData) {
    graphNodes.push({
      "@type": "GovernmentPermit",
      "@id": `${url}#permit`,
      name: permitData.name,
      validIn: {
        "@type": "AdministrativeArea",
        name: permitData.validIn,
      },
      issuedBy: {
        "@type": "GovernmentOrganization",
        name: permitData.issuingAuthority,
      },
    });
  }

  // Breadcrumbs Node
  if (breadcrumbs && breadcrumbs.length > 0) {
    graphNodes.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: breadcrumbs.map((b, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: b.name,
        item: b.url,
      })),
    });
  }

  // FAQPage Node
  if (faqs && faqs.length > 0) {
    graphNodes.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    });
  }

  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": graphNodes,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
    />
  );
}
