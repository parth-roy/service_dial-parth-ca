import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PricingCalculator from "@/components/ip/PricingCalculator";
import WhatsAppCTA from "@/components/ip/WhatsAppCTA";
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

const INTENT_LABELS: Record<string, { title: string; form: string; badge: string; description: string }> = {
  registration: {
    title: "Trademark Registration",
    form: "Form TM-A",
    badge: "New Application Filing",
    description: "Secure proprietary brand name, logo, and slogan protection across 45 Nice classes under the Trade Marks Act, 1999."
  },
  renewal: {
    title: "Trademark Renewal",
    form: "Form TM-R",
    badge: "10-Year Protection Extension",
    description: "Maintain continuous statutory exclusivity and prevent trademark abandonment with timely 10-year renewal filings."
  },
  "objection-sec9": {
    title: "Section 9 Trademark Objection Reply",
    form: "Examination Reply",
    badge: "Absolute Grounds Defense",
    description: "Overcome absolute grounds for refusal (lack of distinctiveness / descriptive mark) with structured legal rebuttals."
  },
  "objection-sec11": {
    title: "Section 11 Trademark Objection Reply",
    form: "Examination Reply",
    badge: "Relative Grounds Defense",
    description: "Resolve conflicting trademark objections and establish distinctive commercial identity against cited conflicting marks."
  },
  opposition: {
    title: "Trademark Opposition & Counter-Statement",
    form: "Form TM-O",
    badge: "Registry Contest Representation",
    description: "Defend against third-party opposition notices or file timely opposition to protect prior commercial rights."
  },
  "show-cause-hearing": {
    title: "Show Cause Hearing Representation",
    form: "TLA Hearing",
    badge: "Virtual Hearing Counsel",
    description: "Expert advocacy and representation before Trade Marks Registry hearing officers during virtual cause list sessions."
  }
};

// Pilot static params generation from MongoDB
export async function generateStaticParams() {
  try {
    await dbConnect();
    const assets = await IPPageAsset.find({
      routeFamily: "City-Intent",
      publicationState: "Published"
    }).limit(160).lean();

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
  const intentMeta = INTENT_LABELS[intent] || { title: "Trademark Services", form: "TM-A" };
  const formattedCity = city.charAt(0).toUpperCase() + city.slice(1).replace(/-/g, " ");
  const formattedState = state.charAt(0).toUpperCase() + state.slice(1).replace(/-/g, " ");

  const title = `${intentMeta.title} in ${formattedCity}, ${formattedState} | Service Dial IP`;
  const description = `Expert ${intentMeta.title.toLowerCase()} services for businesses in ${formattedCity}, ${formattedState}. Official ${intentMeta.form} filing, jurisdiction routing, transparent fees from ₹4,500.`;

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
  const cityDoc = await Geography.findOne({ slug: city, level: "District" }).populate("jurisdictionId").lean() as any;
  const stateDoc = await Geography.findOne({ slug: state, level: "State" }).populate("jurisdictionId").lean() as any;

  const cityName = cityDoc?.name || (city.charAt(0).toUpperCase() + city.slice(1).replace(/-/g, " "));
  const stateName = stateDoc?.name || (state.charAt(0).toUpperCase() + state.slice(1).replace(/-/g, " "));

  const jurisdiction = (cityDoc?.jurisdictionId || stateDoc?.jurisdictionId) as any || {
    officeName: "Head Office Mumbai",
    officialAddress: "Intellectual Property Bhavan, Antop Hill, Mumbai - 400037",
    statesCovered: ["Maharashtra", "Pan-India"]
  };

  // 3. Fetch Applicable Fee Rules
  const feeRules = await FeeRule.find({}).lean() as any[];
  const regFeeIndividual = feeRules.find((f: any) => f.actionSubtype === "TM-A Registration" && f.applicantQualification === "Individual") || { govtFee: 4500, professionalFee: 1499 };
  const regFeeCorporate = feeRules.find((f: any) => f.actionSubtype === "TM-A Registration" && f.applicantQualification === "Corporate") || { govtFee: 9000, professionalFee: 2999 };

  // 4. Construct JSON-LD Schema (schema.org/Service - truthful representation, not fake local law firm)
  const jsonLd = {
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
      "name": "Trademark Registration Official Fee Structure",
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

  const whatsappMessage = encodeURIComponent(
    `Hello Service Dial IP team, I am looking for ${intentData.title} services for my business in ${cityName}, ${stateName}. Please assist me with the official filing procedure and timeline.`
  );
  const whatsappUrl = `https://wa.me/919999999999?text=${whatsappMessage}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-sd-bg min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "IP Services", href: "/ip-services" },
              { label: stateName, href: `/ip-services/trademarks/${intent}/${state}` },
              { label: `${intentData.title} in ${cityName}`, href: `/ip-services/trademarks/${intent}/${state}/${city}` },
            ]}
          />

          {/* Hero Header Section */}
          <section className="mt-4 bg-white border border-sd-border rounded-2xl p-6 sm:p-10 shadow-sm">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-sd-pink/10 text-sd-pink text-xs font-semibold rounded-full uppercase tracking-wider">
                {intentData.badge}
              </span>
              <span className="px-3 py-1 bg-sd-bg-2 border border-sd-border text-sd-muted text-xs font-medium rounded-full">
                {intentData.form} Official E-Filing
              </span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-medium rounded-full">
                CGPDTM Jurisdiction: {jurisdiction.officeName}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-sd-text">
              {intentData.title} in <span className="text-sd-pink">{cityName}</span>, {stateName}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-sd-muted max-w-3xl leading-relaxed">
              {intentData.description} Businesses and entrepreneurs in {cityName} receive single-window filing, statutory trademark classification guidance across Classes 1–45, and direct procedural representation before the {jurisdiction.officeName} Trade Marks Registry.
            </p>

            {/* Conversion CTA Group */}
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
                Calculate Official Filing Fees ↓
              </a>
            </div>
          </section>

          {/* IP India Jurisdiction Mapping Block */}
          <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-sd-border rounded-xl p-6">
              <span className="text-xs font-semibold text-sd-pink uppercase tracking-wider">Territorial Jurisdiction</span>
              <h3 className="mt-2 text-xl font-bold text-sd-text">{jurisdiction.officeName} Registry</h3>
              <p className="mt-2 text-sm text-sd-muted">
                Applications originating from {cityName} ({stateName}) are legally adjudicated by the {jurisdiction.officeName} Trade Marks Office under the territorial provisions of the Trade Marks Rules 2017.
              </p>
              <div className="mt-4 pt-4 border-t border-sd-border/60 text-xs text-sd-muted">
                <span className="font-semibold block text-sd-text mb-1">Official Registry Location:</span>
                {jurisdiction.officialAddress}
              </div>
            </div>

            <div className="bg-white border border-sd-border rounded-xl p-6">
              <span className="text-xs font-semibold text-sd-pink uppercase tracking-wider">Statutory Fee Schedule</span>
              <h3 className="mt-2 text-xl font-bold text-sd-text">₹4,500 vs ₹9,000</h3>
              <p className="mt-2 text-sm text-sd-muted">
                Individual entrepreneurs, DPIIT-recognized startups, and Udyam MSMEs in {cityName} qualify for a 50% government fee subsidy (₹4,500/class). Standard corporate entities file at ₹9,000/class.
              </p>
              <div className="mt-4 pt-4 border-t border-sd-border/60 text-xs text-emerald-700 font-medium">
                ✓ 100% Transparent Fee Segregation
              </div>
            </div>

            <div className="bg-white border border-sd-border rounded-xl p-6">
              <span className="text-xs font-semibold text-sd-pink uppercase tracking-wider">Filing Turnaround</span>
              <h3 className="mt-2 text-xl font-bold text-sd-text">Same-Day Application</h3>
              <p className="mt-2 text-sm text-sd-muted">
                Pre-filing trademark search, Vienna classification verification, and immediate generation of the official IP India TM Application Number and official acknowledgment receipt.
              </p>
              <div className="mt-4 pt-4 border-t border-sd-border/60 text-xs text-sd-muted">
                Official Symbol Right: Apply ™ Immediately
              </div>
            </div>
          </section>

          {/* Interactive Pricing Engine Section */}
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

          {/* Procedure Timeline */}
          <section className="mt-12 bg-white border border-sd-border rounded-2xl p-6 sm:p-10">
            <h2 className="text-2xl font-bold text-sd-text">
              Trademark Filing Lifecycle for {cityName} Enterprises
            </h2>
            <p className="mt-2 text-sm text-sd-muted">
              Structured step-by-step guidance conforming strictly to the Trade Marks Act 1999 and IP India Registry procedural standards.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 border border-sd-border/80 rounded-xl bg-sd-bg">
                <span className="w-7 h-7 rounded-full bg-sd-pink text-white font-bold text-xs flex items-center justify-center">1</span>
                <h4 className="mt-3 font-semibold text-sd-text">Comprehensive TM Search</h4>
                <p className="mt-2 text-xs text-sd-muted leading-relaxed">
                  Deep search across phonetically, visually, and conceptually similar marks registered at the {jurisdiction.officeName} Registry.
                </p>
              </div>

              <div className="p-5 border border-sd-border/80 rounded-xl bg-sd-bg">
                <span className="w-7 h-7 rounded-full bg-sd-pink text-white font-bold text-xs flex items-center justify-center">2</span>
                <h4 className="mt-3 font-semibold text-sd-text">Class & User Affidavit</h4>
                <p className="mt-2 text-xs text-sd-muted leading-relaxed">
                  Drafting of TM-A application, user date claim affidavit, and classification mapping across Nice classes 1 to 45.
                </p>
              </div>

              <div className="p-5 border border-sd-border/80 rounded-xl bg-sd-bg">
                <span className="w-7 h-7 rounded-full bg-sd-pink text-white font-bold text-xs flex items-center justify-center">3</span>
                <h4 className="mt-3 font-semibold text-sd-text">Examination Monitoring</h4>
                <p className="mt-2 text-xs text-sd-muted leading-relaxed">
                  Continuous docketing of Examination Reports to draft timely legal rebuttals against Section 9 and Section 11 objections.
                </p>
              </div>

              <div className="p-5 border border-sd-border/80 rounded-xl bg-sd-bg">
                <span className="w-7 h-7 rounded-full bg-sd-pink text-white font-bold text-xs flex items-center justify-center">4</span>
                <h4 className="mt-3 font-semibold text-sd-text">Registration Certificate</h4>
                <p className="mt-2 text-xs text-sd-muted leading-relaxed">
                  Publication in the official Trade Marks Journal, monitoring 4-month opposition periods, and issuance of the ® certificate.
                </p>
              </div>
            </div>
          </section>

          {/* Localized FAQs */}
          <section className="mt-12 bg-white border border-sd-border rounded-2xl p-6 sm:p-10 mb-12">
            <h2 className="text-2xl font-bold text-sd-text">
              Frequently Asked Questions in {cityName}
            </h2>
            <div className="mt-6 space-y-4">
              <div className="p-4 border border-sd-border rounded-xl bg-sd-bg">
                <h3 className="font-semibold text-sd-text text-sm">
                  Which Trade Marks Registry office has jurisdiction over {cityName}?
                </h3>
                <p className="mt-2 text-xs text-sd-muted leading-relaxed">
                  Applicants having their principal place of business in {cityName}, {stateName} fall under the statutory jurisdiction of the {jurisdiction.officeName} Registry, located at {jurisdiction.officialAddress}. All physical documents or formal hearing appearances (when not virtual) are managed via this registry.
                </p>
              </div>

              <div className="p-4 border border-sd-border rounded-xl bg-sd-bg">
                <h3 className="font-semibold text-sd-text text-sm">
                  How can our {cityName} business claim the ₹4,500 discounted government fee?
                </h3>
                <p className="mt-2 text-xs text-sd-muted leading-relaxed">
                  To claim the 50% statutory discount on Form TM-A, your business must upload a valid Udyam Registration Certificate (for Micro, Small, and Medium Enterprises) or a DPIIT Startup Recognition Certificate during e-filing. Sole proprietors and individual applicants automatically qualify for the ₹4,500 fee.
                </p>
              </div>

              <div className="p-4 border border-sd-border rounded-xl bg-sd-bg">
                <h3 className="font-semibold text-sd-text text-sm">
                  Can we use the ™ symbol immediately after filing in {cityName}?
                </h3>
                <p className="mt-2 text-xs text-sd-muted leading-relaxed">
                  Yes. As soon as your Form TM-A application is submitted to the IP India e-filing portal and the official acknowledgment receipt with your trademark application number is generated, you may legally affix the ™ symbol to your brand and products.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
