export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Service Dial",
    alternateName: "ServiceDial",
    url: "https://servicedialtm.com",
    logo: "https://servicedialtm.com/logo.png",
    description:
      "Service Dial provides technology-driven, tailor-made staffing & recruitment, HRMS & payroll management, finance & audit, and compliance services across India and globally. Established 2016.",
    foundingDate: "2016",
    email: "info@servicedialtm.com",
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
            url: "https://servicedialtm.com/services/staffing-and-recruitment",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "HRMS & Payroll Management",
            description:
              "End-to-end payroll processing, vendor compliance, labour law adherence, and HRMS technology integration.",
            url: "https://servicedialtm.com/services/hrms-and-payroll",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Finance & Audit",
            description:
              "Accounts payable, accounts receivable, record to report (R2R), and internal & external audit services.",
            url: "https://servicedialtm.com/services/finance-and-audit",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Compliance Services",
            description:
              "Statutory compliance, labour law filings, regulatory reporting, and risk assessment across India.",
            url: "https://servicedialtm.com/services/compliance-services",
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
