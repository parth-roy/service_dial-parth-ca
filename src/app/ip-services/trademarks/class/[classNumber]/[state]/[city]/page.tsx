import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PricingCalculator from "@/components/ip/PricingCalculator";
import WhatsAppCTA from "@/components/ip/WhatsAppCTA";
import LocationMapCard from "@/components/ip/LocationMapCard";
import dbConnect from "@/lib/mongodb";
import { NiceClass, Geography, Jurisdiction, FeeRule } from "@/models";

interface ClassCityPageProps {
  params: Promise<{
    classNumber: string;
    state: string;
    city: string;
  }>;
}

export const dynamicParams = true;
export const revalidate = 86400; // 24 hours ISR

export async function generateMetadata({ params }: ClassCityPageProps): Promise<Metadata> {
  const { classNumber, state, city } = await params;
  const num = parseInt(classNumber, 10);
  if (isNaN(num) || num < 1 || num > 45) {
    return { title: "Trademark Class Not Found" };
  }

  const formattedCity = city.charAt(0).toUpperCase() + city.slice(1).replace(/-/g, " ");
  const formattedState = state.charAt(0).toUpperCase() + state.slice(1).replace(/-/g, " ");

  const title = `Trademark Class ${num} Registration in ${formattedCity}, ${formattedState} | Nice Classification`;
  const description = `Protect your brand under Trademark Class ${num} in ${formattedCity}, ${formattedState}. Official Form TM-A e-filing before the Mumbai CGPDTM Registry. ₹4,500 MSME statutory subsidy.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://servicedialtm.com/ip-services/trademarks/class/${num}/${state}/${city}`,
    },
    openGraph: {
      title,
      description,
      url: `https://servicedialtm.com/ip-services/trademarks/class/${num}/${state}/${city}`,
      type: "website",
      siteName: "Service Dial IP",
    },
  };
}

export default async function ClassCityPage({ params }: ClassCityPageProps) {
  const { classNumber, state, city } = await params;
  const num = parseInt(classNumber, 10);

  if (isNaN(num) || num < 1 || num > 45) {
    notFound();
  }

  await dbConnect();

  // 1. Fetch Class Data
  const classDoc = (await NiceClass.findOne({ classNumber: num }).lean()) as any;
  if (!classDoc) {
    notFound();
  }

  // 2. Fetch Geography & Jurisdiction Data
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

  // 3. Fee Rules
  const feeRules = (await FeeRule.find({ actionSubtype: "TM-A Registration" }).lean()) as any[];
  const regFeeIndividual = feeRules.find((f: any) => f.applicantQualification === "Individual") || { govtFee: 4500, professionalFee: 1499 };
  const regFeeCorporate = feeRules.find((f: any) => f.applicantQualification === "Corporate") || { govtFee: 9000, professionalFee: 2999 };

  // Paired classes
  const pairedClasses: number[] = [];
  if (num === 25) pairedClasses.push(24, 35, 18);
  else if (num === 9) pairedClasses.push(42, 35, 38);
  else if (num === 5) pairedClasses.push(3, 10, 35);
  else if (num === 35) pairedClasses.push(9, 25, 42);
  else if (num === 42) pairedClasses.push(9, 35, 41);
  else if (num === 30) pairedClasses.push(29, 31, 32);
  else pairedClasses.push(35, num === 1 ? 2 : num - 1);

  // JSON-LD Schemas
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Trademark Class ${num} Registration in ${cityName}`,
    "serviceType": `Trademark Class ${num} Legal Filing`,
    "description": `Comprehensive Nice Classification Class ${num} filing for enterprises in ${cityName}, ${stateName}.`,
    "provider": {
      "@type": "Organization",
      "name": "Service Dial",
      "url": "https://servicedialtm.com",
      "logo": "https://servicedialtm.com/logo.png"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": `${cityName}, ${stateName}, India`
    }
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://servicedialtm.com" },
      { "@type": "ListItem", "position": 2, "name": "IP Services", "item": "https://servicedialtm.com/ip-services" },
      { "@type": "ListItem", "position": 3, "name": `Class ${num}`, "item": `https://servicedialtm.com/ip-services/trademarks/class/${num}` },
      { "@type": "ListItem", "position": 4, "name": `${cityName}`, "item": `https://servicedialtm.com/ip-services/trademarks/class/${num}/${state}/${city}` }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <div className="bg-sd-bg min-h-screen text-sd-text">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "IP Services", href: "/ip-services" },
              { label: `Class ${num}`, href: `/ip-services/trademarks/class/${num}` },
              { label: `${cityName}, ${stateName}`, href: `/ip-services/trademarks/class/${num}/${state}/${city}` },
            ]}
          />

          {/* Hero Header */}
          <section className="mt-4 bg-white border border-sd-border rounded-2xl p-6 sm:p-10 shadow-sm">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-sd-pink text-white text-xs font-bold rounded-full uppercase tracking-wider font-mono">
                Nice Class {num}
              </span>
              <span className="px-3 py-1 bg-sd-bg-2 border border-sd-border text-sd-text text-xs font-semibold rounded-full">
                {classDoc.type} Category
              </span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium rounded-full">
                CGPDTM Jurisdiction: {jurisdiction.officeName} Registry
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-sd-text">
              Trademark <span className="text-sd-pink">Class {num}</span> Registration in {cityName}, {stateName}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-sd-muted max-w-3xl leading-relaxed">
              Official statutory protection under Nice Class {num} ({classDoc.description}) for manufacturing units, service providers, and startups located in <strong className="text-sd-text">{cityName}</strong>. Applications are adjudicated under the sovereign jurisdiction of the <strong className="text-sd-text">{jurisdiction.officeName} Registry</strong>.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <WhatsAppCTA
                cityName={cityName}
                stateName={stateName}
                intentTitle={`Class ${num} Registration`}
                buttonText={`File Class ${num} Trademark for ${cityName}`}
              />
              <a
                href="#pricing-calculator"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-sd-bg-2 hover:bg-sd-border/40 text-sd-text font-semibold text-sm rounded-xl border border-sd-border transition-colors"
              >
                Calculate Class {num} Filing Fees ↓
              </a>
            </div>
          </section>

          {/* Location Map Card */}
          <section className="mt-8">
            <LocationMapCard
              cityName={cityName}
              stateName={stateName}
              officeName={jurisdiction.officeName}
              officialAddress={jurisdiction.officialAddress}
              lgdCode={lgdCode}
              locationType={locationType}
            />
          </section>

          {/* Goods/Services Scope for Class */}
          <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-sd-border rounded-xl p-6">
              <span className="text-xs font-semibold text-sd-pink uppercase tracking-wider">Statutory Scope</span>
              <h3 className="mt-2 text-lg font-bold text-sd-text">Class {num} Goods & Services</h3>
              <p className="mt-2 text-xs text-sd-muted leading-relaxed">
                {classDoc.description}. Correct classification under Class {num} ensures your Form TM-A avoids formality check failures at the {jurisdiction.officeName} Registry.
              </p>
            </div>

            <div className="bg-white border border-sd-border rounded-xl p-6">
              <span className="text-xs font-semibold text-sd-pink uppercase tracking-wider">Local Industry Relevance</span>
              <h3 className="mt-2 text-lg font-bold text-sd-text">{cityName} Commercial Sectors</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {classDoc.industryTags.map((tag: string) => (
                  <span key={tag} className="px-2.5 py-1 bg-sd-bg border border-sd-border rounded-lg text-xs font-medium text-sd-text">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white border border-sd-border rounded-xl p-6">
              <span className="text-xs font-semibold text-sd-pink uppercase tracking-wider">Multi-Class Protection</span>
              <h3 className="mt-2 text-lg font-bold text-sd-text">Recommended Co-Filings</h3>
              <p className="mt-2 text-xs text-sd-muted leading-relaxed">
                Trademarks under Class {num} often face brand overlap. Co-filing in complementary classes prevents competitor hijacking:
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {pairedClasses.map((pc) => (
                  <Link
                    key={pc}
                    href={`/ip-services/trademarks/class/${pc}/${state}/${city}`}
                    className="px-2.5 py-1 bg-sd-pink/10 hover:bg-sd-pink/20 text-sd-pink rounded-lg text-xs font-bold transition-colors"
                  >
                    Class {pc} in {cityName} →
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Calculator */}
          <section id="pricing-calculator" className="mt-12">
            <PricingCalculator
              defaultGovtFeeIndividual={regFeeIndividual.govtFee}
              defaultGovtFeeCorporate={regFeeCorporate.govtFee}
              defaultProFeeIndividual={regFeeIndividual.professionalFee}
              defaultProFeeCorporate={regFeeCorporate.professionalFee}
              cityName={cityName}
              stateName={stateName}
              intentTitle={`Class ${num} Registration`}
            />
          </section>
        </div>
      </div>
    </>
  );
}
