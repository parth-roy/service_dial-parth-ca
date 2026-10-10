import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import dbConnect from "@/lib/mongodb";
import { Jurisdiction, Geography } from "@/models";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Intellectual Property & Trademark Registration Services | Service Dial IP",
  description: "Pan-India trademark registration, renewal, Section 9/11 objection replies, and virtual hearing representation across 5 CGPDTM registries. Official fee advisory from ₹4,500.",
  alternates: {
    canonical: "https://servicedialtm.com/ip-services",
  },
};

export default async function IPServicesHubPage() {
  await dbConnect();

  const jurisdictions = await Jurisdiction.find({}).lean() as any[];
  const pilotStates = await Geography.find({ level: "State" }).lean() as any[];

  return (
    <div className="bg-sd-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "IP Services", href: "/ip-services" },
          ]}
        />

        {/* Hero Section */}
        <section className="mt-4 bg-white border border-sd-border rounded-2xl p-6 sm:p-12 shadow-sm">
          <div className="inline-block px-3 py-1 bg-sd-pink/10 text-sd-pink text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
            Pan-India Intellectual Property Advisory
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-sd-text">
            Comprehensive <span className="text-sd-pink">Trademark Protection</span> & Legal Advisory
          </h1>
          <p className="mt-4 text-base sm:text-lg text-sd-muted max-w-3xl leading-relaxed">
            Service Dial delivers end-to-end statutory trademark acquisition across all 45 Nice classes. From pre-filing distinctiveness audits to Section 9/11 examination defense and virtual show-cause hearings before the 5 regional Trade Marks Registry offices.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/ip-services/tools/fee-calculator"
              className="px-6 py-3.5 bg-sd-pink hover:bg-sd-pink/90 text-white font-semibold text-sm rounded-xl shadow transition-colors"
            >
              Interactive Fee Calculator
            </Link>
            <Link
              href="/ip-services/tools/status-check"
              className="px-6 py-3.5 bg-sd-bg-2 hover:bg-sd-border/40 text-sd-text font-semibold text-sm rounded-xl border border-sd-border transition-colors"
            >
              Check Application Status
            </Link>
          </div>
        </section>

        {/* Core Services Grid */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-sd-text mb-6">
            Trademark Practice Areas & Statutory Lifecycle
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-sd-border rounded-xl p-6 flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 text-xs font-semibold">Form TM-A</span>
                <h3 className="mt-3 text-lg font-bold text-sd-text">Trademark Registration</h3>
                <p className="mt-2 text-xs text-sd-muted leading-relaxed">
                  Fast, accurate application filing for brand names, logos, slogans, and word marks across Nice Classes 1 to 45. Official fee ₹4,500 for Individuals/MSMEs, ₹9,000 for Corporates.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-sd-border/60">
                <Link href="/ip-services/trademarks/registration/maharashtra/mumbai" className="text-xs font-semibold text-sd-pink hover:underline">
                  Explore Registration →
                </Link>
              </div>
            </div>

            <div className="bg-white border border-sd-border rounded-xl p-6 flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 text-xs font-semibold">Form TM-R</span>
                <h3 className="mt-3 text-lg font-bold text-sd-text">10-Year Trademark Renewal</h3>
                <p className="mt-2 text-xs text-sd-muted leading-relaxed">
                  Statutory renewal filing to protect proprietary brand rights from lapse or cancellation. Timely processing before the 10-year expiration date.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-sd-border/60">
                <Link href="/ip-services/trademarks/renewal/maharashtra/mumbai" className="text-xs font-semibold text-sd-pink hover:underline">
                  Explore Renewal →
                </Link>
              </div>
            </div>

            <div className="bg-white border border-sd-border rounded-xl p-6 flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-0.5 rounded bg-amber-50 text-amber-700 text-xs font-semibold">Examination Defense</span>
                <h3 className="mt-3 text-lg font-bold text-sd-text">Section 9 & 11 Objection Replies</h3>
                <p className="mt-2 text-xs text-sd-muted leading-relaxed">
                  Structured legal reply drafting citing IPAB precedents, user affidavits, and statutory distinctiveness grounds to overcome registry examination objections.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-sd-border/60">
                <Link href="/ip-services/trademarks/objection-sec9/maharashtra/mumbai" className="text-xs font-semibold text-sd-pink hover:underline">
                  Explore Objection Replies →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5 IP India Jurisdictions Directory */}
        <section className="mt-12 bg-white border border-sd-border rounded-2xl p-6 sm:p-10">
          <h2 className="text-2xl font-bold text-sd-text">
            Official IP India Trade Marks Registry Offices
          </h2>
          <p className="mt-2 text-sm text-sd-muted">
            The Indian Trade Marks Registry processes filings based on geographic jurisdiction. Explore official office directories and procedural rules:
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {jurisdictions.map((j: any) => {
              const slug = j.officeName.toLowerCase().replace(/\s+/g, "-");
              return (
                <Link
                  key={j._id}
                  href={`/ip-services/jurisdiction/${slug}`}
                  className="p-4 rounded-xl border border-sd-border hover:border-sd-pink hover:bg-sd-bg transition-all group"
                >
                  <span className="text-xs font-semibold text-sd-pink uppercase">Registry</span>
                  <h4 className="mt-1 font-bold text-sd-text text-sm group-hover:text-sd-pink transition-colors">
                    {j.officeName}
                  </h4>
                  <p className="mt-2 text-[11px] text-sd-muted line-clamp-2">
                    {j.statesCovered.slice(0, 3).join(", ")}...
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* State Commercial Hubs Directory */}
        <section className="mt-12 bg-white border border-sd-border rounded-2xl p-6 sm:p-10 mb-12">
          <h2 className="text-2xl font-bold text-sd-text mb-4">
            State-by-State Trademark Registration Directory
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {pilotStates.map((s: any) => (
              <Link
                key={s.slug}
                href={`/ip-services/trademarks/registration/${s.slug}`}
                className="p-3 text-center border border-sd-border rounded-xl text-xs font-semibold text-sd-text hover:border-sd-pink hover:text-sd-pink transition-colors"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
