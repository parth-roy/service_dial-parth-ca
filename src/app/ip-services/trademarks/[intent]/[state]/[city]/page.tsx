import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PricingCalculator from "@/components/ip/PricingCalculator";
import WhatsAppCTA from "@/components/ip/WhatsAppCTA";
import LocationMapCard from "@/components/ip/LocationMapCard";
import dbConnect from "@/lib/mongodb";
import { IPPageAsset, Geography, Jurisdiction, FeeRule } from "@/models";

interface CityIntentPageProps {
  params: Promise<{
    intent: string;
    state: string;
    city: string;
  }>;
}

export const dynamicParams = true;
export const revalidate = 86400; // 24 hours ISR

const INTENT_LABELS: Record<
  string,
  {
    title: string;
    form: string;
    badge: string;
    description: string;
    heroSubtitle: string;
    primaryAction: string;
  }
> = {
  registration: {
    title: "Trademark Registration",
    form: "Form TM-A",
    badge: "New Application Filing",
    description:
      "Secure proprietary brand name, logo, and slogan exclusivity across 45 Nice classes under the Trade Marks Act, 1999 with 50% government fee subsidies for eligible MSMEs.",
    heroSubtitle:
      "Official statutory protection, phonetic conflict clearance, and same-day application filing before the competent registry.",
    primaryAction: "File New TM Application",
  },
  renewal: {
    title: "Trademark Renewal",
    form: "Form TM-R",
    badge: "10-Year Protection Extension",
    description:
      "Maintain continuous statutory brand ownership and prevent mark abandonment through timely 10-year renewal filings under Section 25 of the Trade Marks Act.",
    heroSubtitle:
      "Fast-track TM-R submissions, restoration for lapsed registrations, and uninterrupted legal protection.",
    primaryAction: "Renew Registered Trademark",
  },
  "objection-sec9": {
    title: "Section 9 Trademark Objection Reply",
    form: "Examination Report Reply",
    badge: "Absolute Grounds Defense",
    description:
      "Overcome absolute grounds of refusal (lack of distinctiveness, descriptive terminology, or laudatory character) with evidence-backed legal rebuttals.",
    heroSubtitle:
      "Strategic legal advocacy demonstrating acquired distinctiveness and commercial secondary meaning.",
    primaryAction: "Draft Section 9 Rebuttal",
  },
  "objection-sec11": {
    title: "Section 11 Trademark Objection Reply",
    form: "Examination Report Reply",
    badge: "Relative Grounds Defense",
    description:
      "Overcome cited conflicting trademarks under Section 11 by establishing commercial distinction, prior honest concurrent adoption, and distinct trade channels.",
    heroSubtitle:
      "Evidence-based rebuttal distinguishing your brand from conflicting cited marks on the register.",
    primaryAction: "Draft Section 11 Rebuttal",
  },
  opposition: {
    title: "Trademark Opposition & Counter-Statement",
    form: "Form TM-O",
    badge: "Registry Contest Representation",
    description:
      "Defend your trademark against third-party opposition notices or file timely opposition within the 4-month Journal publication window to protect prior rights.",
    heroSubtitle:
      "Rigorous legal defense, Form TM-O filing, evidence on affidavit under Rule 45/46, and registry representation.",
    primaryAction: "File TM-O Opposition Defense",
  },
  "show-cause-hearing": {
    title: "Show Cause Hearing Representation",
    form: "TLA Board Hearing",
    badge: "Virtual Hearing Counsel",
    description:
      "Senior legal advocacy and representation before Trade Marks Registry hearing officers during virtual video conference cause list sessions.",
    heroSubtitle:
      "Direct oral arguments, case law citations, and compliance filings before the Registrar of Trade Marks.",
    primaryAction: "Book Hearing Representation",
  },
};

// Industry cluster insights generator based on location
function getLocalIndustryProfile(cityName: string, stateName: string) {
  const c = cityName.toLowerCase();
  const s = stateName.toLowerCase();

  if (c.includes("pune") || c.includes("bhosari") || c.includes("pimpri") || c.includes("chakan") || c.includes("hinjewadi")) {
    return {
      clusterType: "Automotive, Engineering & IT/SaaS Hub",
      leadSectors: "Automotive Component Manufacturing, Precision Tooling, IT Services, SaaS Platforms, Renewable Energy",
      recommendedClasses: [
        { classNum: 12, name: "Vehicles & Automotive Parts" },
        { classNum: 42, name: "Software Development, Cloud & SaaS" },
        { classNum: 7, name: "Machinery, Motors & Industrial Tooling" },
        { classNum: 35, name: "B2B Trade, Corporate Operations & E-commerce" }
      ],
      description: `Enterprises in ${cityName} lead India's engineering, automotive assembly, and technology corridors. Trademark protection here requires rigorous multi-class coverage across manufacturing hardware (Classes 7 & 12) and proprietary software architectures (Class 42).`
    };
  } else if (c.includes("mumbai") || c.includes("seepz") || c.includes("navi mumbai") || c.includes("thane")) {
    return {
      clusterType: "Financial Services, Media, Pharma & FMCG Capital",
      leadSectors: "Banking & Fintech, Media & Entertainment, Pharmaceuticals, FMCG Retail, Logistics & Port Trade",
      recommendedClasses: [
        { classNum: 36, name: "Financial, Banking & Wealth Services" },
        { classNum: 41, name: "Entertainment, Media & Production" },
        { classNum: 5, name: "Pharmaceuticals & Biotechnology" },
        { classNum: 35, name: "Retail, Wholesale & Marketing Services" }
      ],
      description: `As the headquarters hub of major financial institutions, creative studios, and global trading houses, businesses in ${cityName} face intense trademark competition and require priority trademark docketing against deceptive phonetic similarity.`
    };
  } else if (c.includes("indore") || c.includes("pithampur") || c.includes("dewas")) {
    return {
      clusterType: "Pharmaceutical, Confectionery & Agro-Processing Hub",
      leadSectors: "Pharmaceutical Formulations, Confectionery & Snack Food, Heavy Engineering, Textile Weaving",
      recommendedClasses: [
        { classNum: 5, name: "Medicines & Pharmaceutical Formulations" },
        { classNum: 30, name: "Processed Foods, Spices & Confectionery" },
        { classNum: 10, name: "Medical Devices & Diagnostic Equipment" },
        { classNum: 35, name: "National Distribution & Retail Networks" }
      ],
      description: `The ${cityName} industrial corridor is central India's primary pharmaceutical manufacturing and FMCG food processing center, demanding strict Vienna classification search to ensure formulations and food brandings are non-conflicting.`
    };
  } else if (c.includes("nagpur") || c.includes("butibori") || c.includes("wardha")) {
    return {
      clusterType: "Central India Logistics, Agro-Commodities & Minerals",
      leadSectors: "Multi-Modal Logistics, Cold Chain Warehousing, Citrus Processing, Defense Manufacturing, Metal Fabrication",
      recommendedClasses: [
        { classNum: 39, name: "Freight Logistics, Transport & Warehousing" },
        { classNum: 29, name: "Processed Fruits, Dairy & Edible Oils" },
        { classNum: 31, name: "Raw Agricultural Produce & Seeds" },
        { classNum: 6, name: "Fabricated Metals & Construction Hardware" }
      ],
      description: `With India's central logistics hub (MIHAN) in Nagpur, brand owners in ${cityName} require robust multi-class registration protecting trade names across supply chain freight, agribusiness brands, and packaging.`
    };
  } else if (c.includes("raipur") || c.includes("bhilai") || c.includes("durg") || c.includes("korba")) {
    return {
      clusterType: "Heavy Metallurgy, Steel, Power & Mining Equipment",
      leadSectors: "Steel Plants, Ferroalloys, Heavy Metallurgy, Power Plant Equipment, Industrial Chemicals",
      recommendedClasses: [
        { classNum: 6, name: "Common Metals, Alloys & Steel Structures" },
        { classNum: 7, name: "Industrial Heavy Machinery & Mining Tools" },
        { classNum: 19, name: "Non-Metallic Building Materials & Refractories" },
        { classNum: 40, name: "Custom Material Treatment & Metal Working" }
      ],
      description: `As the mineral and metallurgical backbone of central India, enterprises in ${cityName} must protect their industrial brand names, logos, and certifications against counterfeit steel rods and machinery replicas.`
    };
  } else if (c.includes("goa") || c.includes("panaji") || c.includes("verna") || c.includes("margao")) {
    return {
      clusterType: "Hospitality, Tourism, Distilleries & Pharmaceuticals",
      leadSectors: "Hotels & Eco-Tourism, Craft Breweries & Distilleries, Marine Exports, Active Pharmaceutical Ingredients",
      recommendedClasses: [
        { classNum: 43, name: "Hospitality, Hotels & Restaurants" },
        { classNum: 33, name: "Alcoholic Beverages & Distilled Spirits" },
        { classNum: 5, name: "Pharmaceuticals & Biotechnology" },
        { classNum: 32, name: "Craft Beverages & Packaged Drinking Water" }
      ],
      description: `The commercial profile of ${cityName} centers on high-reputation hospitality brands, premium spirits, and pharmaceutical formulation facilities at Verna, making brand exclusivity crucial under classes 43 and 33.`
    };
  }

  return {
    clusterType: "Diversified Commercial & MSME Manufacturing Center",
    leadSectors: "Wholesale & Retail Trade, Light Engineering, Packaged Consumer Goods, Professional Services",
    recommendedClasses: [
      { classNum: 35, name: "Trading, Retail & Business Management" },
      { classNum: 42, name: "Technology & Scientific Services" },
      { classNum: 25, name: "Apparel, Garments & Footwear" },
      { classNum: 30, name: "Packaged Food & Confectionery" }
    ],
    description: `Businesses and rising MSMEs in ${cityName}, ${stateName} operate across high-growth domestic supply chains. Comprehensive trademark registration ensures proprietary legal ownership and prevents regional trademark infringement.`
  };
}

// Generate static params for pre-rendering
export async function generateStaticParams() {
  try {
    await dbConnect();
    const assets = await IPPageAsset.find({
      routeFamily: "City-Intent",
      publicationState: "Published"
    }).limit(600).lean();

    return assets.map((a: any) => {
      const parts = a.slug.replace("ip-services/trademarks/", "").split("/");
      return {
        intent: parts[0] || "registration",
        state: parts[1] || "",
        city: parts[2] || ""
      };
    }).filter((p: any) => p.intent && p.state && p.city);
  } catch (err) {
    console.error("[generateStaticParams error]:", err);
    return [];
  }
}

export async function generateMetadata({ params }: CityIntentPageProps): Promise<Metadata> {
  const { intent, state, city } = await params;
  const intentMeta = INTENT_LABELS[intent] || {
    title: "Trademark Services",
    form: "TM-A",
    description: "Official trademark registration and legal representation."
  };
  const formattedCity = city.charAt(0).toUpperCase() + city.slice(1).replace(/-/g, " ");
  const formattedState = state.charAt(0).toUpperCase() + state.slice(1).replace(/-/g, " ");

  const title = `${intentMeta.title} in ${formattedCity}, ${formattedState} | Mumbai Registry Filing`;
  const description = `Authorized ${intentMeta.title.toLowerCase()} for businesses in ${formattedCity}, ${formattedState}. Official ${intentMeta.form} filing under Mumbai CGPDTM Registry. 50% MSME subsidy available.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://servicedialtm.com/ip-services/trademarks/${intent}/${state}/${city}`,
    },
    openGraph: {
      title,
      description,
      url: `https://servicedialtm.com/ip-services/trademarks/${intent}/${state}/${city}`,
      type: "website",
      siteName: "Service Dial IP",
      locale: "en_IN",
    },
  };
}

export default async function CityIntentPage({ params }: CityIntentPageProps) {
  const { intent, state, city } = await params;
  const intentData = INTENT_LABELS[intent];

  if (!intentData) {
    notFound();
  }

  await dbConnect();

  // 1. Fetch Page Asset
  const pageSlug = `ip-services/trademarks/${intent}/${state}/${city}`;
  const asset = await IPPageAsset.findOne({ slug: pageSlug }).populate("geographyId").lean() as any;

  // Handle Lifecycle states
  if (asset) {
    if (asset.publicationState === "Merged" && asset.mergeTargetSlug) {
      redirect(`/${asset.mergeTargetSlug}`);
    }
    if (asset.publicationState === "Withdrawn") {
      notFound();
    }
  }

  // 2. Resolve Geography & Jurisdiction
  const cityDoc = (await Geography.findOne({ slug: city }).populate("jurisdictionId").lean()) as any;
  const stateDoc = (await Geography.findOne({ slug: state, level: "State" }).populate("jurisdictionId").lean()) as any;

  const cityName = cityDoc?.name || (city.charAt(0).toUpperCase() + city.slice(1).replace(/-/g, " "));
  const stateName = stateDoc?.name || (state.charAt(0).toUpperCase() + state.slice(1).replace(/-/g, " "));
  const locationType = cityDoc?.level || "District";
  const lgdCode = cityDoc?.lgdCode;

  const jurisdiction = (cityDoc?.jurisdictionId || stateDoc?.jurisdictionId) as any || {
    officeName: "Mumbai",
    officialAddress: "Intellectual Property Bhavan, Near Antop Hill Head Post Office, S.M. Road, Antop Hill, Mumbai - 400037",
    statesCovered: ["Maharashtra", "Madhya Pradesh", "Chhattisgarh", "Goa", "Dadra and Nagar Haveli and Daman and Diu"]
  };

  // 3. Fetch Applicable Fee Rules
  const feeRules = (await FeeRule.find({}).lean()) as any[];
  const regFeeIndividual = feeRules.find(
    (f: any) => f.actionSubtype === "TM-A Registration" && f.applicantQualification === "Individual"
  ) || { govtFee: 4500, professionalFee: 1499 };
  const regFeeCorporate = feeRules.find(
    (f: any) => f.actionSubtype === "TM-A Registration" && f.applicantQualification === "Corporate"
  ) || { govtFee: 9000, professionalFee: 2999 };

  // 4. Localized Industry Context
  const industryProfile = getLocalIndustryProfile(cityName, stateName);

  // 5. Construct Comprehensive JSON-LD Structured Data
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${intentData.title} in ${cityName}`,
    "serviceType": intentData.title,
    "description": intentData.description,
    "provider": {
      "@type": "Organization",
      "name": "Service Dial",
      "url": "https://servicedialtm.com",
      "logo": "https://servicedialtm.com/logo.png"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": `${cityName}, ${stateName}, India`
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${intentData.title} Official Fee Structure`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Individual & Udyam MSME E-Filing"
          },
          "price": regFeeIndividual.govtFee,
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Body / Company E-Filing"
          },
          "price": regFeeCorporate.govtFee,
          "priceCurrency": "INR"
        }
      ]
    }
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Which Trade Marks Registry office has territorial jurisdiction over ${cityName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Under Rule 8 and 9 of the Trade Marks Rules 2017, all trademark filings originating from businesses whose principal place of business is in ${cityName}, ${stateName} are legally adjudicated by the ${jurisdiction.officeName} Registry located at ${jurisdiction.officialAddress}.`
        }
      },
      {
        "@type": "Question",
        "name": `Can businesses in ${cityName} attend trademark show cause hearings virtually?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes. The Trade Marks Registry Mumbai conducts virtual video conference hearings via Cisco Webex. Applicants and counsel from ${cityName} do not need to physically travel to Antop Hill, Mumbai; our authorized advocates represent you on the official virtual cause list.`
        }
      },
      {
        "@type": "Question",
        "name": `How can our ${cityName} enterprise qualify for the 50% government fee subsidy?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `To claim the subsidized statutory fee of ₹4,500 instead of ₹9,000 per class, your entity must submit a valid Udyam Registration Certificate (for MSMEs) or a DPIIT Startup Recognition Certificate during Form TM-A e-filing. Sole proprietorships and individuals automatically qualify.`
        }
      },
      {
        "@type": "Question",
        "name": `Can we immediately affix the ™ symbol after submitting our application in ${cityName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes. The moment Form TM-A is submitted to the IP India portal and the official acknowledgment receipt containing your unique Trademark Application Number is generated (same-day turnaround), you have the legal right to affix the ™ symbol to your products and promotional materials.`
        }
      },
      {
        "@type": "Question",
        "name": `What is the risk of receiving a Section 9 or Section 11 objection in the Mumbai Registry?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Objections are common if the mark is descriptive of the goods/services (Section 9) or identical/similar to an existing cited mark (Section 11). We conduct comprehensive pre-filing phonetic searches across the Mumbai Registry database and prepare evidence-backed legal replies within the statutory 30-day window.`
        }
      }
    ]
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://servicedialtm.com" },
      { "@type": "ListItem", "position": 2, "name": "IP Services", "item": "https://servicedialtm.com/ip-services" },
      { "@type": "ListItem", "position": 3, "name": stateName, "item": `https://servicedialtm.com/ip-services/trademarks/${intent}/${state}` },
      { "@type": "ListItem", "position": 4, "name": `${intentData.title} in ${cityName}`, "item": `https://servicedialtm.com/ip-services/trademarks/${intent}/${state}/${city}` }
    ]
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Service Dial IP team, I am looking for ${intentData.title} services for my business in ${cityName}, ${stateName}. Please advise on the Mumbai Registry filing procedure, class mapping, and statutory fees.`
  );
  const whatsappUrl = `https://wa.me/919999999999?text=${whatsappMessage}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <div className="bg-sd-bg min-h-screen text-sd-text">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Breadcrumbs Navigation */}
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "IP Services", href: "/ip-services" },
              { label: stateName, href: `/ip-services/trademarks/${intent}/${state}` },
              { label: `${intentData.title} in ${cityName}`, href: `/ip-services/trademarks/${intent}/${state}/${city}` },
            ]}
          />

          {/* 1. HERO HEADER SECTION */}
          <section className="mt-4 bg-white border border-sd-border rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-sd-pink/10 text-sd-pink text-xs font-semibold rounded-full uppercase tracking-wider">
                {intentData.badge}
              </span>
              <span className="px-3 py-1 bg-sd-bg-2 border border-sd-border text-sd-muted text-xs font-medium rounded-full">
                {intentData.form} Official E-Filing
              </span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-medium rounded-full">
                CGPDTM Territorial Jurisdiction: {jurisdiction.officeName} Registry
              </span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 text-xs font-medium rounded-full">
                Same-Day Filing SLA
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-sd-text">
              {intentData.title} in <span className="text-sd-pink">{cityName}</span>, {stateName}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-sd-muted max-w-3xl leading-relaxed">
              {intentData.description} Enterprises, manufacturing units, and startups in <strong className="text-sd-text font-semibold">{cityName}</strong> receive single-window classification, Vienna code search, and direct legal representation before the <strong className="text-sd-text font-semibold">{jurisdiction.officeName} Trade Marks Registry</strong>.
            </p>

            {/* Hero Quick CTA Group */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="w-full sm:w-auto">
                <WhatsAppCTA
                  cityName={cityName}
                  stateName={stateName}
                  intentTitle={intentData.title}
                  buttonText={`Connect on WhatsApp for ${cityName}`}
                />
              </div>

              <a
                href="#pricing-calculator"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-sd-bg-2 hover:bg-sd-border/40 text-sd-text font-semibold text-sm rounded-xl border border-sd-border transition-colors"
              >
                Calculate Statutory Filing Fees ↓
              </a>

              <a
                href="#jurisdiction-map"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-sd-bg text-sd-text font-medium text-sm rounded-xl border border-sd-border transition-colors"
              >
                View Territorial Map & Directions ↓
              </a>
            </div>
          </section>

          {/* 2. STATUTORY FAST-FACTS SNAPSHOT GRID */}
          <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-sd-border rounded-xl p-5 shadow-xs">
              <span className="text-[11px] font-bold tracking-wider text-sd-pink uppercase">
                Territorial Registry
              </span>
              <h4 className="mt-1 text-lg font-bold text-sd-text">{jurisdiction.officeName} Registry</h4>
              <p className="mt-1 text-xs text-sd-muted">
                Antop Hill, Mumbai. Sovereign jurisdiction over all filings in {cityName}.
              </p>
            </div>

            <div className="bg-white border border-sd-border rounded-xl p-5 shadow-xs">
              <span className="text-[11px] font-bold tracking-wider text-sd-pink uppercase">
                Statutory Govt Fee
              </span>
              <h4 className="mt-1 text-lg font-bold text-sd-text">₹4,500 vs ₹9,000</h4>
              <p className="mt-1 text-xs text-sd-muted">
                50% statutory discount for Sole Proprietors & Udyam-registered MSMEs.
              </p>
            </div>

            <div className="bg-white border border-sd-border rounded-xl p-5 shadow-xs">
              <span className="text-[11px] font-bold tracking-wider text-sd-pink uppercase">
                Filing Turnaround
              </span>
              <h4 className="mt-1 text-lg font-bold text-sd-text">Same-Day TM Number</h4>
              <p className="mt-1 text-xs text-sd-muted">
                Immediate generation of official acknowledgment receipt & legal right to use ™.
              </p>
            </div>

            <div className="bg-white border border-sd-border rounded-xl p-5 shadow-xs">
              <span className="text-[11px] font-bold tracking-wider text-sd-pink uppercase">
                Hearing Protocol
              </span>
              <h4 className="mt-1 text-lg font-bold text-sd-text">Virtual Video Conference</h4>
              <p className="mt-1 text-xs text-sd-muted">
                Official Webex TLA board sessions. Zero travel to Mumbai required.
              </p>
            </div>
          </section>

          {/* 3. DYNAMIC LOCATION & INTERACTIVE MAP CARD */}
          <section id="jurisdiction-map" className="mt-8">
            <LocationMapCard
              cityName={cityName}
              stateName={stateName}
              officeName={jurisdiction.officeName}
              officialAddress={jurisdiction.officialAddress}
              lgdCode={lgdCode}
              locationType={locationType}
            />
          </section>

          {/* 4. STATUTORY JURISDICTION & LEGAL GOVERNANCE SECTION */}
          <section className="mt-12 bg-white border border-sd-border rounded-2xl p-6 sm:p-10 shadow-sm">
            <div className="max-w-3xl">
              <span className="px-3 py-1 bg-sd-bg-2 text-sd-muted text-xs font-semibold rounded-full uppercase tracking-wider">
                Regulatory Compliance Notice
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-sd-text">
                Statutory Trade Marks Jurisdiction for {cityName}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-sd-muted leading-relaxed">
                Under <strong className="text-sd-text font-semibold">Rule 8 and 9 of the Trade Marks Rules, 2017</strong>, jurisdiction is determined exclusively by the applicant’s principal place of business in India. For business entities situated within <strong className="text-sd-text font-semibold">{cityName} ({stateName})</strong>, the competent sovereign authority is the <strong className="text-sd-text font-semibold">{jurisdiction.officeName} Registry Office</strong>.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 border border-sd-border rounded-xl bg-sd-bg">
                <h4 className="font-semibold text-sd-text text-sm">Territorial Boundaries</h4>
                <p className="mt-2 text-xs text-sd-muted leading-relaxed">
                  The {jurisdiction.officeName} Registry administers all statutory proceedings across {jurisdiction.statesCovered.join(", ")}. Any filing originating from {cityName} through another registry office is legally invalid and rejected for lack of territorial jurisdiction.
                </p>
              </div>

              <div className="p-5 border border-sd-border rounded-xl bg-sd-bg">
                <h4 className="font-semibold text-sd-text text-sm">Virtual TLA Cause Lists</h4>
                <p className="mt-2 text-xs text-sd-muted leading-relaxed">
                  In compliance with CGPDTM digital modernization, show cause hearings for {cityName} applicants are scheduled on official virtual boards (Cisco Webex). Our accredited trademark attorneys appear directly before Hearing Officers on your behalf.
                </p>
              </div>

              <div className="p-5 border border-sd-border rounded-xl bg-sd-bg">
                <h4 className="font-semibold text-sd-text text-sm">Physical Registry Access</h4>
                <p className="mt-2 text-xs text-sd-muted leading-relaxed">
                  The physical office at Antop Hill, Mumbai handles original file verification, contentious contested matters, certified copy issuance, and rectification dockets originating from {stateName} commercial entities.
                </p>
              </div>
            </div>
          </section>

          {/* 5. LOCAL INDUSTRIAL CLUSTER & CLASS RECOMMENDATION GUIDE */}
          <section className="mt-12 bg-white border border-sd-border rounded-2xl p-6 sm:p-10 shadow-sm">
            <span className="px-3 py-1 bg-sd-pink/10 text-sd-pink text-xs font-semibold rounded-full uppercase tracking-wider">
              Commercial Ecosystem Intelligence
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-sd-text">
              Trademark Classification Strategy for {cityName} Enterprises
            </h2>
            <p className="mt-2 text-sm sm:text-base text-sd-muted max-w-3xl">
              {industryProfile.description} Choosing the correct Nice class avoids Registry objections under Section 9 and guarantees enforceable infringement protection.
            </p>

            <div className="mt-6 p-4 rounded-xl bg-sd-bg border border-sd-border text-xs text-sd-muted flex items-center justify-between">
              <div>
                <span className="font-semibold text-sd-text block text-sm">Primary Industrial Cluster:</span>
                <span>{industryProfile.clusterType}</span>
              </div>
              <div className="hidden sm:block text-right">
                <span className="font-semibold text-sd-text block text-sm">Key Economic Drivers:</span>
                <span>{industryProfile.leadSectors}</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {industryProfile.recommendedClasses.map((cls) => (
                <div key={cls.classNum} className="p-5 border border-sd-border rounded-xl bg-white hover:border-sd-pink/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-lg bg-sd-pink text-white font-bold text-xs flex items-center justify-center">
                      Cl. {cls.classNum}
                    </span>
                    <span className="text-[10px] font-semibold text-sd-muted uppercase">Recommended</span>
                  </div>
                  <h4 className="mt-3 font-semibold text-sd-text text-sm">{cls.name}</h4>
                  <Link
                    href={`/ip-services/trademarks/class/${cls.classNum}`}
                    className="mt-3 text-xs font-semibold text-sd-pink hover:underline inline-flex items-center gap-1"
                  >
                    View Class {cls.classNum} Specification Guide →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* 6. STATUTORY FEE SCHEDULE & MSME SUBSIDY TABLE */}
          <section className="mt-12 bg-white border border-sd-border rounded-2xl p-6 sm:p-10 shadow-sm">
            <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold rounded-full uppercase tracking-wider">
              Statutory Fee Transparency
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-sd-text">
              Official Government & Professional Fee Matrix ({cityName})
            </h2>
            <p className="mt-2 text-sm sm:text-base text-sd-muted max-w-3xl">
              Under the First Schedule of Trade Marks Rules 2017, the Indian government provides a 50% statutory fee waiver for eligible Micro, Small, and Medium Enterprises.
            </p>

            <div className="mt-6 overflow-x-auto border border-sd-border rounded-xl">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-sd-bg border-b border-sd-border text-sd-text font-semibold">
                  <tr>
                    <th className="p-4">Applicant Category</th>
                    <th className="p-4">Statutory Qualification</th>
                    <th className="p-4">Official Govt Fee (per Class)</th>
                    <th className="p-4">Professional Legal Drafting</th>
                    <th className="p-4 text-right">Total Outlay</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sd-border/60">
                  <tr className="hover:bg-sd-bg/50">
                    <td className="p-4 font-semibold text-sd-text">Sole Proprietorship / Individual</td>
                    <td className="p-4 text-sd-muted">Individual PAN / Aadhaar</td>
                    <td className="p-4 text-emerald-700 font-bold">₹4,500 <span className="text-[10px] font-normal text-sd-muted">(Subsidized)</span></td>
                    <td className="p-4 text-sd-muted">₹{regFeeIndividual.professionalFee}</td>
                    <td className="p-4 text-right font-bold text-sd-text">₹{4500 + regFeeIndividual.professionalFee}</td>
                  </tr>
                  <tr className="hover:bg-sd-bg/50">
                    <td className="p-4 font-semibold text-sd-text">DPIIT Recognized Startup</td>
                    <td className="p-4 text-sd-muted">Startup India Certificate</td>
                    <td className="p-4 text-emerald-700 font-bold">₹4,500 <span className="text-[10px] font-normal text-sd-muted">(Subsidized)</span></td>
                    <td className="p-4 text-sd-muted">₹{regFeeIndividual.professionalFee}</td>
                    <td className="p-4 text-right font-bold text-sd-text">₹{4500 + regFeeIndividual.professionalFee}</td>
                  </tr>
                  <tr className="hover:bg-sd-bg/50">
                    <td className="p-4 font-semibold text-sd-text">Udyam Registered MSME</td>
                    <td className="p-4 text-sd-muted">Micro / Small Enterprise Certificate</td>
                    <td className="p-4 text-emerald-700 font-bold">₹4,500 <span className="text-[10px] font-normal text-sd-muted">(Subsidized)</span></td>
                    <td className="p-4 text-sd-muted">₹{regFeeIndividual.professionalFee}</td>
                    <td className="p-4 text-right font-bold text-sd-text">₹{4500 + regFeeIndividual.professionalFee}</td>
                  </tr>
                  <tr className="hover:bg-sd-bg/50">
                    <td className="p-4 font-semibold text-sd-text">Private Limited / Corporate / LLP</td>
                    <td className="p-4 text-sd-muted">Standard Corporate Entity (Without MSME)</td>
                    <td className="p-4 text-sd-text font-bold">₹9,000 <span className="text-[10px] font-normal text-sd-muted">(Standard)</span></td>
                    <td className="p-4 text-sd-muted">₹{regFeeCorporate.professionalFee}</td>
                    <td className="p-4 text-right font-bold text-sd-text">₹{9000 + regFeeCorporate.professionalFee}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-[11px] text-sd-muted">
              * Statutory government fees are paid directly to the Controller General of Patents, Designs and Trade Marks (CGPDTM) e-filing portal. Professional fees cover comprehensive pre-search, application drafting, power of attorney execution, and acknowledgment tracking.
            </p>
          </section>

          {/* 7. INTERACTIVE PRICING CALCULATOR */}
          <section id="pricing-calculator" className="mt-12">
            <PricingCalculator
              defaultGovtFeeIndividual={regFeeIndividual.govtFee}
              defaultGovtFeeCorporate={regFeeCorporate.govtFee}
              defaultProFeeIndividual={regFeeIndividual.professionalFee}
              defaultProFeeCorporate={regFeeCorporate.professionalFee}
              cityName={cityName}
              stateName={stateName}
              intentTitle={intentData.title}
            />
          </section>

          {/* 8. 6-STAGE FILING & DEFENSE TIMELINE */}
          <section className="mt-12 bg-white border border-sd-border rounded-2xl p-6 sm:p-10 shadow-sm">
            <span className="px-3 py-1 bg-sd-bg-2 text-sd-muted text-xs font-semibold rounded-full uppercase tracking-wider">
              Statutory Process
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-sd-text">
              Trademark Lifecycle for {cityName} Businesses
            </h2>
            <p className="mt-2 text-sm sm:text-base text-sd-muted">
              Structured step-by-step roadmap from initial brand clearance to trademark registration certificate issuance.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-5 border border-sd-border rounded-xl bg-sd-bg">
                <span className="w-7 h-7 rounded-full bg-sd-pink text-white font-bold text-xs flex items-center justify-center">1</span>
                <h4 className="mt-3 font-semibold text-sd-text">1. Search & Vienna Clearance</h4>
                <p className="mt-2 text-xs text-sd-muted leading-relaxed">
                  Deep search across phonetically, visually, and conceptually conflicting marks registered at the {jurisdiction.officeName} Registry to prevent immediate Section 11 citations.
                </p>
              </div>

              <div className="p-5 border border-sd-border rounded-xl bg-sd-bg">
                <span className="w-7 h-7 rounded-full bg-sd-pink text-white font-bold text-xs flex items-center justify-center">2</span>
                <h4 className="mt-3 font-semibold text-sd-text">2. Drafting & User Affidavit</h4>
                <p className="mt-2 text-xs text-sd-muted leading-relaxed">
                  Preparation of Form {intentData.form}, precise goods/services specifications, and user date affidavit substantiating commercial prior use in {cityName}.
                </p>
              </div>

              <div className="p-5 border border-sd-border rounded-xl bg-sd-bg">
                <span className="w-7 h-7 rounded-full bg-sd-pink text-white font-bold text-xs flex items-center justify-center">3</span>
                <h4 className="mt-3 font-semibold text-sd-text">3. Instant E-Filing & ™ Right</h4>
                <p className="mt-2 text-xs text-sd-muted leading-relaxed">
                  Direct submission via digital gateway to the {jurisdiction.officeName} Registry. Instant generation of official TM Application Number and lawful authorization to affix ™.
                </p>
              </div>

              <div className="p-5 border border-sd-border rounded-xl bg-sd-bg">
                <span className="w-7 h-7 rounded-full bg-sd-pink text-white font-bold text-xs flex items-center justify-center">4</span>
                <h4 className="mt-3 font-semibold text-sd-text">4. Examination Report Docketing</h4>
                <p className="mt-2 text-xs text-sd-muted leading-relaxed">
                  Active monitoring of examination reports issued by Antop Hill examiners. Formal drafting and filing of legal rebuttals within the mandatory 30-day statutory window.
                </p>
              </div>

              <div className="p-5 border border-sd-border rounded-xl bg-sd-bg">
                <span className="w-7 h-7 rounded-full bg-sd-pink text-white font-bold text-xs flex items-center justify-center">5</span>
                <h4 className="mt-3 font-semibold text-sd-text">5. Trade Marks Journal Publication</h4>
                <p className="mt-2 text-xs text-sd-muted leading-relaxed">
                  Upon acceptance, the mark is published in the official Trade Marks Journal, initiating the statutory 4-month public opposition period under Section 21.
                </p>
              </div>

              <div className="p-5 border border-sd-border rounded-xl bg-sd-bg">
                <span className="w-7 h-7 rounded-full bg-sd-pink text-white font-bold text-xs flex items-center justify-center">6</span>
                <h4 className="mt-3 font-semibold text-sd-text">6. Registration Certificate (®)</h4>
                <p className="mt-2 text-xs text-sd-muted leading-relaxed">
                  If unopposed, the Registrar issues the official digital Trademark Registration Certificate. Your brand receives exclusive statutory rights for 10 years, renewable indefinitely.
                </p>
              </div>
            </div>
          </section>

          {/* 9. MANDATORY DOCUMENTATION CHECKLIST */}
          <section className="mt-12 bg-white border border-sd-border rounded-2xl p-6 sm:p-10 shadow-sm">
            <span className="px-3 py-1 bg-sd-bg-2 text-sd-muted text-xs font-semibold rounded-full uppercase tracking-wider">
              Document Readiness
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-sd-text">
              Required Documents for Trademark Filing in {cityName}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-sd-muted">
              Prepare the following statutory items for single-day digital filing without administrative requisition delays.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-sd-border rounded-xl flex items-start gap-3 bg-sd-bg/50">
                <span className="text-emerald-600 font-bold text-base">✓</span>
                <div>
                  <h4 className="font-semibold text-sd-text text-sm">Form TM-48 Power of Attorney</h4>
                  <p className="mt-1 text-xs text-sd-muted">
                    Authorizing our registered trademark agent to represent your entity before the {jurisdiction.officeName} Registry. No physical stamp paper required for digital signatures.
                  </p>
                </div>
              </div>

              <div className="p-4 border border-sd-border rounded-xl flex items-start gap-3 bg-sd-bg/50">
                <span className="text-emerald-600 font-bold text-base">✓</span>
                <div>
                  <h4 className="font-semibold text-sd-text text-sm">Principal Place of Business Proof in {cityName}</h4>
                  <p className="mt-1 text-xs text-sd-muted">
                    GST Registration Certificate, Shop & Establishment license, or Certificate of Incorporation establishing local commercial domicile in {stateName}.
                  </p>
                </div>
              </div>

              <div className="p-4 border border-sd-border rounded-xl flex items-start gap-3 bg-sd-bg/50">
                <span className="text-emerald-600 font-bold text-base">✓</span>
                <div>
                  <h4 className="font-semibold text-sd-text text-sm">Udyam Registration Certificate (For 50% Subsidy)</h4>
                  <p className="mt-1 text-xs text-sd-muted">
                    Mandatory for Micro and Small enterprises to claim the ₹4,500 statutory fee benefit. Must match the applicant business name.
                  </p>
                </div>
              </div>

              <div className="p-4 border border-sd-border rounded-xl flex items-start gap-3 bg-sd-bg/50">
                <span className="text-emerald-600 font-bold text-base">✓</span>
                <div>
                  <h4 className="font-semibold text-sd-text text-sm">Brand Representation & User Date Invoices</h4>
                  <p className="mt-1 text-xs text-sd-muted">
                    High-resolution brand logo in JPEG/PNG. If claiming prior commercial use, the earliest tax invoice, domain bill, or social media launch date.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 10. LOCALIZED FREQUENTLY ASKED QUESTIONS */}
          <section className="mt-12 bg-white border border-sd-border rounded-2xl p-6 sm:p-10 shadow-sm">
            <span className="px-3 py-1 bg-sd-pink/10 text-sd-pink text-xs font-semibold rounded-full uppercase tracking-wider">
              Legal Knowledge Base
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-sd-text">
              Frequently Asked Questions in {cityName}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-sd-muted">
              Authoritative answers regarding Trade Marks Registry rules, local fees, hearings, and opposition procedures.
            </p>

            <div className="mt-6 space-y-4">
              <div className="p-5 border border-sd-border rounded-xl bg-sd-bg">
                <h3 className="font-semibold text-sd-text text-sm sm:text-base">
                  Which Trade Marks Registry office has statutory jurisdiction over {cityName}?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-sd-muted leading-relaxed">
                  Applicants with their principal commercial address in {cityName}, {stateName} fall under the statutory jurisdiction of the {jurisdiction.officeName} Registry, located at {jurisdiction.officialAddress}. All physical dockets, formal hearings, and oppositions originate through this office under Rule 8 of Trade Marks Rules 2017.
                </p>
              </div>

              <div className="p-5 border border-sd-border rounded-xl bg-sd-bg">
                <h3 className="font-semibold text-sd-text text-sm sm:text-base">
                  Do {cityName} business owners need to travel physically to Mumbai for hearings?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-sd-muted leading-relaxed">
                  No. The CGPDTM conducts all show cause hearings virtually via Cisco Webex. Our registered trademark attorneys attend these virtual cause list proceedings on your behalf from our legal chambers, presenting oral arguments and documentary exhibits without requiring your presence.
                </p>
              </div>

              <div className="p-5 border border-sd-border rounded-xl bg-sd-bg">
                <h3 className="font-semibold text-sd-text text-sm sm:text-base">
                  How can our {cityName} enterprise claim the ₹4,500 subsidized government fee?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-sd-muted leading-relaxed">
                  To secure the 50% statutory reduction from ₹9,000 to ₹4,500 per mark per class, upload a valid Udyam Registration Certificate (for MSMEs) or DPIIT Recognition Certificate. Sole proprietorships and individual founders automatically qualify for the ₹4,500 fee schedule without MSME certification.
                </p>
              </div>

              <div className="p-5 border border-sd-border rounded-xl bg-sd-bg">
                <h3 className="font-semibold text-sd-text text-sm sm:text-base">
                  Can we use the ™ symbol immediately after e-filing in {cityName}?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-sd-muted leading-relaxed">
                  Yes. The moment your Form TM-A application is submitted through the IP India gateway and the official electronic acknowledgment receipt with your unique Trademark Application Number is generated, you may legally affix the ™ symbol. The registered ® symbol may only be used after the certificate is formally issued.
                </p>
              </div>

              <div className="p-5 border border-sd-border rounded-xl bg-sd-bg">
                <h3 className="font-semibold text-sd-text text-sm sm:text-base">
                  What should we do if another enterprise in Maharashtra uses a similar name?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-sd-muted leading-relaxed">
                  If an existing entity operates with a similar name, we conduct a prior commercial use assessment. Under Indian trademark law, prior continuous commercial adoption takes precedence over subsequent registration. If your business in {cityName} used the mark earlier, we file a User Date Affidavit substantiating prior commercial reputation.
                </p>
              </div>
            </div>
          </section>

          {/* 11. CONVERSION ACTION FOOTER BAR */}
          <section className="mt-12 bg-white border border-sd-border rounded-2xl p-6 sm:p-10 shadow-sm text-center mb-12">
            <span className="px-3 py-1 bg-sd-pink/10 text-sd-pink text-xs font-semibold rounded-full uppercase tracking-wider">
              Single-Window Trademark Counsel
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-sd-text">
              Secure Your Brand Exclusivity in {cityName}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-sd-muted max-w-2xl mx-auto">
              Same-day Form {intentData.form} filing, comprehensive phonetic search, and dedicated representation before the {jurisdiction.officeName} Registry.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <WhatsAppCTA
                cityName={cityName}
                stateName={stateName}
                intentTitle={intentData.title}
                buttonText={`Instant WhatsApp Assistance for ${cityName}`}
              />
              <a
                href="#pricing-calculator"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-sd-bg-2 hover:bg-sd-border/40 text-sd-text font-semibold text-sm rounded-xl border border-sd-border transition-colors"
              >
                Review Fee Calculator
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
