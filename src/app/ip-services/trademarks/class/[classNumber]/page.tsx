import type { Metadata } from "next";
import { notFound } from "next/navigation";
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

export async function generateMetadata({ params }: ClassPageProps): Promise<Metadata> {
  const { classNumber } = await params;
  const num = parseInt(classNumber, 10);
  if (isNaN(num) || num < 1 || num > 45) {
    return { title: "Trademark Class Not Found" };
  }

  const title = `Trademark Class ${num} Registration Guide (India 2026) | Nice Classification`;
  const description = `Complete statutory guide to Trademark Class ${num} under the Nice Classification system in India. Goods/services scope, regional industry mapping, Form TM-A e-filing fees from ₹4,500.`;

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
  const num = parseInt(classNumber, 10);

  if (isNaN(num) || num < 1 || num > 45) {
    notFound();
  }

  await dbConnect();
  const classDoc = await NiceClass.findOne({ classNumber: num }).lean() as any;

  if (!classDoc) {
    notFound();
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
            { label: "Nice Classes", href: "/ip-services/tools/fee-calculator" },
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
              {classDoc.industryTags.map((tag: string) => (
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
