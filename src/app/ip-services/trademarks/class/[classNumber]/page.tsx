import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PricingCalculator from "@/components/ip/PricingCalculator";
import WhatsAppCTA from "@/components/ip/WhatsAppCTA";
import dbConnect from "@/lib/mongodb";
import { NiceClass } from "@/models";

interface ClassPageProps {
  params: Promise<{
    classNumber: string;
  }>;
}

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateStaticParams() {
  return Array.from({ length: 45 }, (_, i) => ({
    classNumber: (i + 1).toString(),
  }));
}

function parseStrictClassNumber(raw: string): number | null {
  if (!/^\d+$/.test(raw)) return null;
  const num = Number(raw);
  return num >= 1 && num <= 45 ? num : null;
}

const CLASS_META_OVERRIDES: Record<number, { title: string; description: string }> = {
  30: {
    title: "Trademark Class 30 India: Food Products, Spices & FMCG List (2026 Fees & Class 32 Clarification)",
    description:
      "Complete statutory Class 30 goods list in India: spices, bakery, flour, coffee, tea, confectionery. Compare Class 30 vs Class 32 for packaged drinking water. MSME fees from ₹4,500.",
  },
  32: {
    title: "Trademark Class 32 India: Packaged Drinking Water, Beverages & Mineral Waters (2026)",
    description:
      "Official Trademark Class 32 guide for packaged drinking water, mineral waters, fruit juices, and aerated beverages in India. Form TM-A e-filing fees from ₹4,500.",
  },
  25: {
    title: "Trademark Class 25 India: Clothing, Footwear & Headgear (2026 Registration Guide)",
    description:
      "Statutory guide to Trademark Class 25 in India for apparel, garments, shoes, and fashion brands. Form TM-A e-filing fees from ₹4,500 for MSME & startups.",
  },
  41: {
    title: "Trademark Class 41 India: Education, Training, Coaching & Entertainment Services",
    description:
      "Register trademarks under Class 41 in India for schools, edtech, coaching institutes, media production, and events. Form TM-A filing fees from ₹4,500.",
  },
  42: {
    title: "Trademark Class 42 India: Software, SaaS, IT, Cloud & Technical Services",
    description:
      "Statutory Trademark Class 42 guide in India for software development, SaaS platforms, cloud computing, and cybersecurity. MSME e-filing from ₹4,500.",
  },
  10: {
    title: "Trademark Class 10 India: Medical Devices, Surgical & Dental Instruments",
    description:
      "Official Trademark Class 10 guide for medical apparatus, diagnostics, surgical instruments, and orthopedic devices in India. Form TM-A fees from ₹4,500.",
  },
  7: {
    title: "Trademark Class 7 India: Machines, Machine Tools, Motors & Industrial Engines",
    description:
      "Trademark Class 7 guide for industrial machinery, motors, pumps, and agricultural machines in India. Form TM-A fees from ₹4,500.",
  },
  26: {
    title: "Trademark Class 26 India: Lace, Ribbons, Embroidery & Haberdashery",
    description:
      "Statutory Trademark Class 26 guide for lace, ribbons, buttons, zippers, and artificial flowers under Nice Classification in India.",
  },
};

export async function generateMetadata({ params }: ClassPageProps): Promise<Metadata> {
  const { classNumber } = await params;
  const num = parseStrictClassNumber(classNumber);
  if (!num) {
    return { title: "Trademark Class Not Found", robots: { index: false, follow: false } };
  }

  const override = CLASS_META_OVERRIDES[num];
  const title = override
    ? override.title
    : `Trademark Class ${num} Registration Guide (India 2026) | Nice Classification`;
  const description = override
    ? override.description
    : `Complete statutory guide to Trademark Class ${num} under the Nice Classification system in India. Goods/services scope, regional industry mapping, Form TM-A e-filing fees from ₹4,500.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://servicedialtm.com/ip-services/trademarks/class/${num}`,
    },
  };
}

export default async function NiceClassPage({ params }: ClassPageProps) {
  const { classNumber } = await params;

  // Redirect malformed suffixed slugs such as /class/35-2 to canonical /class/35
  const suffixedMatch = classNumber.match(/^(\d+)(?:-\d+)+$/);
  if (suffixedMatch) {
    const cleanNum = Number(suffixedMatch[1]);
    if (cleanNum >= 1 && cleanNum <= 45) {
      permanentRedirect(`/ip-services/trademarks/class/${cleanNum}`);
    }
  }

  const num = parseStrictClassNumber(classNumber);
  if (!num) {
    notFound();
  }

  let classDoc: any = null;
  try {
    await dbConnect();
    classDoc = (await NiceClass.findOne({ classNumber: num }).lean()) as any;
  } catch (err) {
    console.warn(`[Class ${num}] DB connection fallback active`);
  }

  if (!classDoc) {
    classDoc = {
      classNumber: num,
      category: num <= 34 ? "Goods" : "Services",
      description: `Nice Classification Class ${num} goods and services in India. Official Form TM-A registration, objection defense under Section 9 & 11, and CGPDTM compliance.`,
      shortDescription: `Statutory Class ${num} scope under Trade Marks Rules 2017.`,
      examples: [`Statutory goods/services falling under International Nice Class ${num}`],
      commonDisputes: [`Section 9 absolute grounds of distinctiveness`, `Section 11 prior existing registered marks`],
      industryTags: ["Manufacturing", "Enterprise Services", "Commercial Trading", "Consumer Goods"],
    };
  }

  const prevClass = num > 1 ? num - 1 : 45;
  const nextClass = num < 45 ? num + 1 : 1;

  // Recommended paired classes logic
  const pairedClasses: number[] = [];
  if (num === 25) pairedClasses.push(24, 35, 18);
  else if (num === 9) pairedClasses.push(42, 35, 38);
  else if (num === 5) pairedClasses.push(3, 10, 35);
  else if (num === 35) pairedClasses.push(9, 25, 42);
  else if (num === 42) pairedClasses.push(9, 35, 41);
  else if (num === 3) pairedClasses.push(5, 21, 35);
  else if (num === 30) pairedClasses.push(29, 31, 32);
  else pairedClasses.push(35, num === 1 ? 2 : num - 1);

  return (
    <div className="bg-sd-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "IP Services", href: "/ip-services" },
            { label: "Nice Classes", href: "/ip-services/class-finder" },
            { label: `Class ${num}`, href: `/ip-services/trademarks/class/${num}` },
          ]}
        />

        {/* Hero Header */}
        <div className="mt-4 bg-white border border-sd-border rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-sd-pink text-white text-xs font-bold rounded-full uppercase tracking-wider font-mono">
                Class {num}
              </span>
              <span className="px-3 py-1 bg-sd-bg-2 border border-sd-border text-sd-text text-xs font-semibold rounded-full">
                {classDoc.type} Category
              </span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium rounded-full">
                Nice Classification (12th Edition)
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <Link
                href={`/ip-services/trademarks/class/${prevClass}`}
                className="px-3 py-1 bg-sd-bg border border-sd-border rounded-lg text-sd-muted hover:text-sd-text"
              >
                ← Class {prevClass}
              </Link>
              <Link
                href={`/ip-services/trademarks/class/${nextClass}`}
                className="px-3 py-1 bg-sd-bg border border-sd-border rounded-lg text-sd-muted hover:text-sd-text"
              >
                Class {nextClass} →
              </Link>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-sd-text">
            Trademark <span className="text-sd-pink">Class {num}</span> Registration in India
          </h1>
          <p className="mt-4 text-base sm:text-lg text-sd-muted max-w-4xl leading-relaxed">
            {classDoc.description}. Securing trademark registration under Class {num} grants exclusive, proprietary commercial rights across India, shielding your enterprise against brand infringement, imitation, and unauthorized commercial exploitation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <div className="w-full sm:w-auto">
              <WhatsAppCTA
                intentTitle={`Class ${num} Registration`}
                buttonText={`File Class ${num} Trademark on WhatsApp`}
              />
            </div>
            <a
              href="#pricing-calculator"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-sd-bg-2 hover:bg-sd-border/40 text-sd-text font-semibold text-sm rounded-xl border border-sd-border transition-colors"
            >
              Calculate Class {num} Filing Fees ↓
            </a>
          </div>
        </div>

        {/* Detailed Industry Applications */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-sd-border rounded-xl p-6">
            <span className="text-xs font-semibold text-sd-pink uppercase tracking-wider">Industries Covered</span>
            <h3 className="mt-2 text-lg font-bold text-sd-text">Target Commercial Sectors</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {(classDoc.industryTags || []).map((tag: string) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-sd-bg border border-sd-border/80 rounded-lg text-xs font-medium text-sd-text"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white border border-sd-border rounded-xl p-6">
            <span className="text-xs font-semibold text-sd-pink uppercase tracking-wider">Multi-Class Strategy</span>
            <h3 className="mt-2 text-lg font-bold text-sd-text">Recommended Co-Filings</h3>
            <p className="mt-2 text-xs text-sd-muted leading-relaxed">
              Trademarks under Class {num} frequently face brand spillover. Co-filing in complementary classes prevents competitor hijacking:
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {pairedClasses.map((pc) => (
                <Link
                  key={pc}
                  href={`/ip-services/trademarks/class/${pc}`}
                  className="px-2.5 py-1 bg-sd-pink/10 hover:bg-sd-pink/20 text-sd-pink rounded-lg text-xs font-bold transition-colors"
                >
                  Class {pc} →
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white border border-sd-border rounded-xl p-6">
            <span className="text-xs font-semibold text-sd-pink uppercase tracking-wider">Statutory Fee Slabs</span>
            <h3 className="mt-2 text-lg font-bold text-sd-text">Form TM-A E-Filing</h3>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-sd-border/60">
                <span className="text-sd-muted">Individual / MSME / Startup:</span>
                <strong className="font-mono text-emerald-700">₹4,500</strong>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-sd-muted">Company / LLP / Corporate:</span>
                <strong className="font-mono text-sd-text">₹9,000</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Embedded Dynamic Calculator for this Class */}
        <section id="pricing-calculator" className="mt-12">
          <PricingCalculator
            cityName="Pan-India"
            intentTitle={`Class ${num} Trademark Registration`}
          />
        </section>

        {/* Specialized High-Intent Section for Class 30 (Food Products & Water Classification) */}
        {num === 30 && (
          <div className="mt-12 space-y-8">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "What goods are covered under Trademark Class 30 in India?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Trademark Class 30 covers staple agricultural and processed food products, including coffee, tea, cocoa, artificial coffee, rice, pasta, noodles, tapioca, sago, flour and cereal preparations, bread, pastries, confectionery, chocolate, ice cream, sorbets, sugar, honey, yeast, baking-powder, salt, seasonings, spices, preserved herbs, vinegar, and sauces.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Is packaged drinking water registered under Class 30 or Class 32?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Packaged drinking water, mineral waters, aerated waters, and non-alcoholic beverages belong strictly to Trademark Class 32. Class 30 only covers tea, coffee, and flavorings added to beverages. If your brand manufactures packaged drinking water, filing under Class 32 is mandatory.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What are the official government fees for Class 30 trademark registration in 2026?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "The official statutory e-filing fee for Form TM-A under Class 30 is ₹4,500 per class for Individuals, Startups, and MSME/Udyam registered entities. For corporate companies without MSME status, the fee is ₹9,000 per class.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Can a food brand register in both Class 29 and Class 30?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. In fact, most FMCG and food brands file a multi-class trademark application covering Class 29 (dairy, edible oils, meat, processed fruits/vegetables) and Class 30 (spices, flour, bakery, confectionery, tea, coffee) to prevent competitors from launching imitation items under the same brand name.",
                      },
                    },
                  ],
                }),
              }}
            />

            {/* Critical Classification Callout Box */}
            <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 bg-amber-200/60 text-amber-900 text-xs font-bold rounded-md font-mono">
                  Statutory Classification Rule
                </span>
                <span className="text-xs font-semibold text-amber-800">
                  Nice Classification 12th Edition Clarification
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-amber-950 mb-3">
                Class 30 vs Class 32: Where Does Packaged Drinking Water Belong?
              </h2>
              <p className="text-sm text-amber-900/90 leading-relaxed max-w-4xl mb-4">
                A common filing error in India is attempting to register <strong>packaged drinking water or mineral water</strong> under Class 30. Under statutory CGPDTM guidelines:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="bg-white p-4 rounded-xl border border-amber-200/80">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <span className="text-emerald-700">✓</span> Class 30 Scope (Food &amp; Flavorings)
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    Covers coffee, tea, cocoa, spices, flour, bakery products, confectionery, and coffee/tea-based beverages. Does <em>not</em> cover bottled water or fruit juices.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-amber-200/80">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <span className="text-sky-700">✓</span> Class 32 Scope (Waters &amp; Beverages)
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    Covers packaged drinking water, natural mineral waters, aerated waters, energy drinks, and fruit juices. Beverage manufacturers must file under{" "}
                    <Link href="/ip-services/trademarks/class/32" className="text-sky-700 font-bold underline">
                      Class 32
                    </Link>.
                  </p>
                </div>
              </div>
            </div>

            {/* Goods Specification Breakdown */}
            <div className="bg-white border border-sd-border rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-sd-text mb-4">
                Detailed Goods Specification for Trademark Class 30 in India
              </h3>
              <p className="text-sm text-sd-muted mb-6 leading-relaxed">
                When filing Form TM-A with the Trade Marks Registry, your application must accurately list the specific goods sold. Class 30 includes:
              </p>
              <div className="grid sm:grid-cols-3 gap-3 text-xs">
                <div className="border border-slate-200 rounded-lg p-3 bg-slate-50/50">
                  <p className="font-bold text-slate-900 mb-1">Bakery &amp; Confectionery</p>
                  <p className="text-slate-600">Bread, cakes, pastries, biscuits, cookies, chocolates, sweets, and edible ices.</p>
                </div>
                <div className="border border-slate-200 rounded-lg p-3 bg-slate-50/50">
                  <p className="font-bold text-slate-900 mb-1">Spices &amp; Seasonings</p>
                  <p className="text-slate-600">Turmeric, chili powder, coriander, garam masala, salt, sauces, and cooking vinegar.</p>
                </div>
                <div className="border border-slate-200 rounded-lg p-3 bg-slate-50/50">
                  <p className="font-bold text-slate-900 mb-1">Grains &amp; Flours</p>
                  <p className="text-slate-600">Atta, maida, rice, besan, oats, cereal preparations, noodles, and pasta.</p>
                </div>
                <div className="border border-slate-200 rounded-lg p-3 bg-slate-50/50">
                  <p className="font-bold text-slate-900 mb-1">Beverage Bases</p>
                  <p className="text-slate-600">Tea leaves, green tea, roast coffee beans, cocoa powder, and chicory mixes.</p>
                </div>
                <div className="border border-slate-200 rounded-lg p-3 bg-slate-50/50">
                  <p className="font-bold text-slate-900 mb-1">Sweeteners &amp; Condiments</p>
                  <p className="text-slate-600">Natural honey, jaggery, organic cane sugar, chutneys, and culinary dressings.</p>
                </div>
                <div className="border border-slate-200 rounded-lg p-3 bg-slate-50/50">
                  <p className="font-bold text-slate-900 mb-1">Ready-to-Eat Snacks</p>
                  <p className="text-slate-600">Namkeen, extruded cereal snacks, popcorn, roasted grain mixtures, and wafers.</p>
                </div>
              </div>
            </div>

            {/* Class 30 FAQs Accordion */}
            <div className="bg-white border border-sd-border rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-sd-text mb-6">
                Frequently Asked Questions About Class 30 Trademark Registration
              </h3>
              <div className="space-y-4">
                <div className="border border-slate-200 rounded-xl p-4">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    What goods are covered under Trademark Class 30 in India?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Trademark Class 30 covers staple foods including spices, coffee, tea, flour, cereal preparations, bread, pastries, confectionery, edible ices, sugar, honey, and condiments.
                  </p>
                </div>
                <div className="border border-slate-200 rounded-xl p-4">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    Is packaged drinking water registered under Class 30 or Class 32?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Packaged drinking water, aerated water, and mineral waters are registered under <strong>Class 32</strong>. Class 30 covers tea, coffee, and flavorings added to beverages.
                  </p>
                </div>
                <div className="border border-slate-200 rounded-xl p-4">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    What are the government fees for registering a Class 30 food trademark in 2026?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The official e-filing fee is <strong>₹4,500</strong> for individuals and registered MSME/Startups holding a valid Udyam certificate, and <strong>₹9,000</strong> for corporate companies.
                  </p>
                </div>
                <div className="border border-slate-200 rounded-xl p-4">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    Can a food company register both Class 29 and Class 30 together?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Yes. Most FMCG enterprises file multi-class applications covering Class 29 (edible oils, dairy, dry fruits) and Class 30 (spices, flour, tea, coffee, bakery) to ensure 360-degree brand protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Nice Classes Grid Navigator */}
        <section className="mt-12 bg-white border border-sd-border rounded-2xl p-6 sm:p-10 mb-12">
          <h2 className="text-2xl font-bold text-sd-text mb-2">
            Explore All 45 Nice Classification Classes
          </h2>
          <p className="text-xs text-sd-muted mb-6">
            Classes 1 to 34 represent Goods, while Classes 35 to 45 represent Services under international WIPO standards.
          </p>

          <div className="grid grid-cols-5 sm:grid-cols-9 lg:grid-cols-15 gap-2">
            {Array.from({ length: 45 }, (_, i) => i + 1).map((cNum) => (
              <Link
                key={cNum}
                href={`/ip-services/trademarks/class/${cNum}`}
                className={`py-2 text-center text-xs font-bold rounded-lg border transition-all ${
                  cNum === num
                    ? "bg-sd-pink text-white border-sd-pink shadow-sm"
                    : "bg-sd-bg hover:bg-sd-border/50 text-sd-text border-sd-border"
                }`}
              >
                {cNum}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
