import type { Metadata } from "next";
import Link from "next/link";
import dbConnect from "@/lib/mongodb";
import { Jurisdiction, Geography } from "@/models";
import ScrollReveal from "@/components/ScrollReveal";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Intellectual Property & Trademark Registration Services",
  description:
    "Pan-India trademark registration, renewal, Section 9/11 objection replies, and virtual hearing representation across 5 CGPDTM registries. Official fee advisory from ₹4,500.",
  alternates: {
    canonical: "https://servicedialtm.com/ip-services",
  },
};

export default async function IPServicesHubPage() {
  let jurisdictions: any[] = [];
  let pilotStates: any[] = [];

  try {
    await dbConnect();
    jurisdictions = (await Jurisdiction.find({}).lean()) as any[];
    pilotStates = (await Geography.find({ level: "State" }).lean()) as any[];
  } catch (err) {
    console.warn("[IP Services Hub] DB connection fallback active");
  }

  return (
    <div className="relative min-h-screen bg-[#F8F9FA] text-slate-900 overflow-hidden">
      {/* Subtle Top Ambient Brand Light Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-[#00cfdc]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[400px] bg-[#b80f68]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Top Breadcrumb Bar */}
      <div className="relative pt-8 pb-4 border-b border-slate-200/70 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-500">
              <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-slate-900 font-medium">IP &amp; Trademark Services</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
              <span className="font-mono text-[#0284c7]">CGPDTM All 45 Classes</span>
              <span className="text-slate-300">•</span>
              <span>5 Regional Registries</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#b80f68] shrink-0" />
                <span className="font-outfit text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.24em] text-slate-900">
                  PAN-INDIA INTELLECTUAL PROPERTY ADVISORY
                </span>
                <span className="h-px flex-1 bg-slate-200" />
              </div>

              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
                Comprehensive{" "}
                <span className="bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] bg-clip-text text-transparent">
                  trademark protection
                </span>{" "}
                &amp; legal defense.
              </h1>

              <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-3xl">
                Service Dial delivers end-to-end statutory trademark acquisition across all 45 Nice classes. From pre-filing distinctiveness audits to Section 9/11 examination defense and virtual show-cause hearings before the 5 regional Trade Marks Registry offices.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/ip-services/class-finder"
                  className="px-6 py-3.5 bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all"
                >
                  Nice Class Finder (1–45) →
                </Link>
                <Link
                  href="/ip-services/tools/status-check"
                  className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-xs sm:text-sm rounded-xl border border-slate-200 transition-all"
                >
                  Check Application Status
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3 Core Practice Areas */}
      <section className="relative py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-slate-200 pb-4 mb-10 flex items-center justify-between">
            <div>
              <span className="text-xs uppercase font-mono tracking-wider text-[#b80f68] font-bold block mb-1">
                Statutory Practice Areas
              </span>
              <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                Trademark Practice Areas &amp; Lifecycle
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">Official TM Forms</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal direction="left" distance={25} delay={80}>
              <div className="h-full relative rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm flex flex-col justify-between group overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b80f68] to-[#2e0d82]" />
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[#0284c7] text-xs font-mono font-bold mb-4">
                    Form TM-A
                  </span>
                  <h3 className="font-outfit text-xl font-bold text-slate-900 group-hover:text-[#b80f68] transition-colors mb-2">
                    Trademark Registration
                  </h3>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed">
                    Fast, accurate application filing for brand names, logos, slogans, and word marks across Nice Classes 1 to 45. Official fee ₹4,500 for Individuals/MSMEs, ₹9,000 for Corporates.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/ip-services/trademarks/registration/maharashtra/mumbai"
                    className="text-xs font-bold text-[#b80f68] group-hover:text-slate-900 transition-colors flex items-center gap-1.5"
                  >
                    <span>Explore Registration</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={25} delay={120}>
              <div className="h-full relative rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm flex flex-col justify-between group overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2e0d82] to-[#01adf7]" />
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[#0284c7] text-xs font-mono font-bold mb-4">
                    Form TM-R
                  </span>
                  <h3 className="font-outfit text-xl font-bold text-slate-900 group-hover:text-[#b80f68] transition-colors mb-2">
                    10-Year Trademark Renewal
                  </h3>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed">
                    Statutory renewal filing to protect proprietary brand rights from lapse or cancellation. Timely processing before the 10-year expiration date.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/ip-services/trademarks/renewal/maharashtra/mumbai"
                    className="text-xs font-bold text-[#b80f68] group-hover:text-slate-900 transition-colors flex items-center gap-1.5"
                  >
                    <span>Explore Renewal</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" distance={25} delay={160}>
              <div className="h-full relative rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm flex flex-col justify-between group overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#01adf7] via-[#2e0d82] to-[#b80f68]" />
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[#0284c7] text-xs font-mono font-bold mb-4">
                    Examination Defense
                  </span>
                  <h3 className="font-outfit text-xl font-bold text-slate-900 group-hover:text-[#b80f68] transition-colors mb-2">
                    Section 9 &amp; 11 Objection Replies
                  </h3>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed">
                    Structured legal reply drafting citing IPAB precedents, user affidavits, and statutory distinctiveness grounds to overcome registry examination objections.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/ip-services/trademarks/objection-sec9/maharashtra/mumbai"
                    className="text-xs font-bold text-[#b80f68] group-hover:text-slate-900 transition-colors flex items-center gap-1.5"
                  >
                    <span>Explore Objection Replies</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5 IP India Jurisdictions Directory */}
      <section className="relative py-8 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm">
              <div className="max-w-3xl mb-8">
                <span className="text-xs uppercase font-mono tracking-wider text-[#b80f68] font-bold block mb-1">
                  Jurisdictional Coverage
                </span>
                <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                  Official IP India Trade Marks Registry Offices
                </h2>
                <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  The Indian Trade Marks Registry processes filings based on geographic jurisdiction. Explore official office directories and procedural rules:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {jurisdictions.map((j: any) => {
                  const slug = j.officeName.toLowerCase().replace(/\s+/g, "-");
                  return (
                    <Link
                      key={j._id}
                      href={`/ip-services/jurisdiction/${slug}`}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-slate-100 transition-all group"
                    >
                      <span className="text-[10px] font-mono font-bold text-[#0284c7] uppercase">Registry</span>
                      <h4 className="font-outfit font-bold text-slate-900 text-sm group-hover:text-[#b80f68] transition-colors mt-1">
                        {j.officeName}
                      </h4>
                      <p className="font-sans text-[11px] text-slate-500 mt-1.5 line-clamp-2">
                        {j.statesCovered.slice(0, 3).join(", ")}...
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* State Commercial Hubs Directory */}
      <section className="relative py-8 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm mb-16">
              <div className="max-w-3xl mb-6">
                <span className="text-xs uppercase font-mono tracking-wider text-[#b80f68] font-bold block mb-1">
                  State Legal Portals
                </span>
                <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                  State-by-State Trademark Registration Directory
                </h2>
                <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1">
                  Select your state to initiate localized class mapping, jurisdiction verification, and statutory e-filing.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {pilotStates.map((s: any) => (
                  <Link
                    key={s.slug}
                    href={`/ip-services/trademarks/registration/${s.slug}`}
                    className="p-3 text-center rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-100 transition-all"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Bottom Enterprise CTA */}
          <ScrollReveal direction="up" distance={25}>
            <div className="relative rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-8 shadow-sm overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7]" />
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#b80f68] block mb-1 font-bold">
                  Confidential Intellectual Property Advisory
                </span>
                <h3 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                  Protect Your Brand Assets with Absolute Certainty
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-xl mt-2 leading-relaxed">
                  Our certified trademark attorneys conduct thorough distinctiveness searches and manage end-to-end prosecution across all 45 classes under mutual non-disclosure.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all"
              >
                Consult IP Attorney →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
