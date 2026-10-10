import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PricingCalculator from "@/components/ip/PricingCalculator";
import dbConnect from "@/lib/mongodb";
import { NiceClass } from "@/models";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Official Trademark Fee Calculator India (2026) | IP India TM-A Slabs",
  description: "Calculate official government trademark filing fees and professional costs in India. Compare Individual/MSME ₹4,500 vs Corporate ₹9,000 fee slabs across all 45 Nice classes.",
  alternates: {
    canonical: "https://servicedialtm.com/ip-services/tools/fee-calculator",
  },
};

export default async function FeeCalculatorPage() {
  await dbConnect();
  const niceClasses = await NiceClass.find({}).sort({ classNumber: 1 }).lean() as any[];

  return (
    <div className="bg-sd-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "IP Services", href: "/ip-services" },
            { label: "Fee Calculator", href: "/ip-services/tools/fee-calculator" },
          ]}
        />

        <div className="mt-4 mb-8">
          <div className="inline-block px-3 py-1 bg-sd-pink/10 text-sd-pink text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            Statutory Transparency Tool
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-sd-text">
            Official Trademark Filing Fee Calculator (India 2026)
          </h1>
          <p className="mt-2 text-sm sm:text-base text-sd-muted max-w-3xl">
            Estimate your exact trademark registration and compliance expenses according to the Trade Marks Rules 2017 statutory schedule.
          </p>
        </div>

        {/* Calculator Widget */}
        <PricingCalculator
          defaultGovtFeeIndividual={4500}
          defaultGovtFeeCorporate={9000}
          defaultProFeeIndividual={1499}
          defaultProFeeCorporate={2999}
          cityName="Pan-India"
          intentTitle="Trademark Registration"
        />

        {/* Legal Slabs & Rules Explanation */}
        <section className="mt-12 bg-white border border-sd-border rounded-2xl p-6 sm:p-10">
          <h2 className="text-2xl font-bold text-sd-text">
            Understanding IP India Government Trademark Fee Slabs
          </h2>
          <p className="mt-2 text-sm text-sd-muted">
            The Controller General of Patents, Designs and Trade Marks (CGPDTM) prescribes a dual fee structure under Schedule I of the Trade Marks Rules, 2017.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-emerald-50/50 border border-emerald-200 rounded-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Category A: Subsidized 50% Rate (₹4,500 / class)
              </span>
              <h3 className="mt-2 text-lg font-bold text-emerald-950">
                Individuals, Startups & Udyam MSMEs
              </h3>
              <ul className="mt-3 text-xs text-emerald-900 space-y-2 list-disc list-inside leading-relaxed">
                <li><strong>Natural Persons & Sole Proprietors:</strong> Direct eligibility based on PAN card of the applicant.</li>
                <li><strong>Udyam-Registered MSMEs:</strong> Micro, Small, and Medium Enterprises holding a valid Udyam Registration Certificate.</li>
                <li><strong>DPIIT-Recognized Startups:</strong> Entities incorporated within 10 years holding active DPIIT startup certificate.</li>
                <li><strong>Statutory Saving:</strong> ₹4,500 government fee waiver per each Nice class filed.</li>
              </ul>
            </div>

            <div className="p-6 bg-sd-bg border border-sd-border rounded-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-sd-muted">
                Category B: Standard Corporate Rate (₹9,000 / class)
              </span>
              <h3 className="mt-2 text-lg font-bold text-sd-text">
                Companies, LLPs & Large Entities
              </h3>
              <ul className="mt-3 text-xs text-sd-muted space-y-2 list-disc list-inside leading-relaxed">
                <li><strong>Private Limited Companies:</strong> Uncertified corporations without active MSME or DPIIT registration.</li>
                <li><strong>Limited Liability Partnerships (LLP):</strong> Standard commercial bodies and multinational corporations.</li>
                <li><strong>Trusts, Societies & Partnerships:</strong> Non-individual applicants filing without small entity certification.</li>
                <li><strong>Official Requirement:</strong> Digital Signature Certificate (Class 3 DSC) required for portal e-filing.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 45 Nice Classes Directory Preview */}
        <section className="mt-12 bg-white border border-sd-border rounded-2xl p-6 sm:p-10 mb-12">
          <h2 className="text-2xl font-bold text-sd-text">
            Nice Classification Reference Guide (Classes 1–45)
          </h2>
          <p className="mt-2 text-sm text-sd-muted">
            Goods fall under Classes 1 to 34, while Services fall under Classes 35 to 45. Multi-class filings require separate statutory fee units for each selected class.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-96 overflow-y-auto p-2 border border-sd-border/70 rounded-xl">
            {niceClasses.map((nc: any) => (
              <div key={nc.classNumber} className="p-3 bg-sd-bg rounded-lg border border-sd-border/60">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs font-mono text-sd-pink">Class {nc.classNumber}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-white border border-sd-border text-sd-muted">{nc.type}</span>
                </div>
                <p className="text-xs text-sd-text mt-1.5 line-clamp-2">{nc.description}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {nc.industryTags?.slice(0, 2).map((tag: string) => (
                    <span key={tag} className="text-[10px] text-sd-muted bg-white px-1 py-0.5 rounded border border-sd-border/40">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
