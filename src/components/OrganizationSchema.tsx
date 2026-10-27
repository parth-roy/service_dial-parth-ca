export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Service Dial Talent Management Private Limited",
    legalName: "Service Dial Talent Management Private Limited",
    alternateName: ["Service Dial", "ServiceDial", "Service Dial TM"],
    url: "https://servicedialtm.com",
    logo: "https://servicedialtm.com/logo.png",
    description:
      "Service Dial is an Indian managed services provider specializing in tech-enabled payroll outsourcing, statutory labour law compliance (EPFO, ESIC, West Bengal PT & LWF), contract staffing, and IP/trademark protection. Established 2016 with 25+ years combined executive leadership tenure.",
    foundingDate: "2016-08-01",
    identifier: "U74999WB2016PTC216954",
    taxID: "U74999WB2016PTC216954",
    email: "connect@servicedialtm.com",
    telephone: "+91-9330490777",
    address: {
      "@type": "PostalAddress",
      streetAddress: "58 (30), S.N. Banerjee Road, Barrackpore",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      postalCode: "700120",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9330490777",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Bengali"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-9330490777",
        contactType: "compliance advisory",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Bengali"],
      },
    ],
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "State", name: "West Bengal" },
      { "@type": "State", name: "Maharashtra" },
      { "@type": "State", name: "Delhi" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Managed HR, Payroll, Compliance & IP Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "HRMS & Payroll Management",
            description:
              "End-to-end cloud payroll processing, automated salary disbursement, Form 16 issuance, multi-state Professional Tax management, and statutory deduction administration.",
            url: "https://servicedialtm.com/services/hrms-and-payroll",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Statutory Compliance Services",
            description:
              "Comprehensive labour law compliance, EPFO ₹25,000 wage limit advisory, ESIC, West Bengal Professional Tax 2026 restructuring, Labour Welfare Fund (LWF) bi-annual filings, and Factory Act auditing.",
            url: "https://servicedialtm.com/services/compliance-services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Staffing & Recruitment",
            description:
              "IT recruitment, CXO leadership hiring, general flexi-staffing, and blue-collar workforce management under CLRA licensing with 24–72 hour sourcing SLAs.",
            url: "https://servicedialtm.com/services/staffing-and-recruitment",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Finance & Audit",
            description:
              "Internal statutory audits, accounts payable/receivable automation, record-to-report (R2R), and GST/TDS reconciliation.",
            url: "https://servicedialtm.com/services/finance-and-audit",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Intellectual Property & Trademark Services",
            description:
              "Trademark filing, CGPDTM status check, trademark renewal, copyright registration, and IP fee calculation across all Indian jurisdictions.",
            url: "https://servicedialtm.com/ip-services",
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
