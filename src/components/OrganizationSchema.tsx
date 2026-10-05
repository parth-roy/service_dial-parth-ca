export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Service Dial",
    alternateName: "ServiceDial",
    url: "https://servicedial.in",
    logo: "https://servicedial.in/logo.png",
    description:
      "Service Dial provides technology-driven, tailor-made staffing & recruitment, HRMS & payroll management, finance & audit, and compliance services across India and globally. Established 2016.",
    foundingDate: "2016",
    email: "info@servicedial.in",
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Business Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Staffing & Recruitment",
            description:
              "IT staffing, CXO leadership hiring, general staffing, and blue collar staffing with 24–72 hour sourcing turnaround.",
            url: "https://servicedial.in/services/staffing-and-recruitment",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "HRMS & Payroll Management",
            description:
              "End-to-end payroll processing, vendor compliance, labour law adherence, and HRMS technology integration.",
            url: "https://servicedial.in/services/hrms-and-payroll",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Finance & Audit",
            description:
              "Accounts payable, accounts receivable, record to report (R2R), and internal & external audit services.",
            url: "https://servicedial.in/services/finance-and-audit",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Compliance Services",
            description:
              "Statutory compliance, labour law filings, regulatory reporting, and risk assessment across India.",
            url: "https://servicedial.in/services/compliance-services",
          },
        },
      ],
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
