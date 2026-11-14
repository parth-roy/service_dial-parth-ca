import type { Metadata } from "next";
import Link from "next/link";
import { CITIES_DATA, STATES_DATA } from "@/data/locations";
import { SERVICES_CATALOG } from "@/data/services";
import LocationDirectoryClient from "./LocationDirectoryClient";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "National Service Coverage & Locations Directory",
  description:
    "Search and explore Service Dial's nationwide B2B service delivery network across 20 primary Indian commercial metros and industrial clusters. Staffing, Payroll, Finance & Compliance.",
  alternates: { canonical: "https://servicedialtm.com/locations" },
};

export default function LocationsDirectoryPage() {
  const cities = Object.values(CITIES_DATA);
  const states = Object.values(STATES_DATA);
  const services = Object.values(SERVICES_CATALOG);

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
              <span className="text-slate-900 font-medium">Locations &amp; Service Coverage</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
              <span className="font-mono text-[#0284c7]">LGD Aligned Architecture</span>
              <span className="text-slate-300">•</span>
              <span>20 Commercial Metros</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#b80f68] shrink-0" />
                <span className="font-outfit text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.24em] text-slate-900">
                  LOCAL GOVERNMENT DIRECTORY (LGD) ALIGNED NETWORK
                </span>
                <span className="h-px flex-1 bg-slate-200" />
              </div>

              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
                Nationwide B2B service{" "}
                <span className="bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] bg-clip-text text-transparent">
                  delivery network.
                </span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
                Service Dial delivers managed staffing, corporate payroll outsourcing, and multi-state compliance across India&apos;s primary economic corridors. Our service area architecture delivers verified legal adherence without deceptive physical branch claims.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive Search & Filter Client Component */}
      <section className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20} delay={100}>
            <LocationDirectoryClient
              cities={cities}
              states={states}
              services={services}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* State Hubs Section */}
      <section className="relative py-8 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm mb-16">
              <div className="max-w-3xl mb-8">
                <span className="text-xs uppercase font-mono tracking-wider text-[#b80f68] font-bold block mb-1">
                  Regional Jurisdictions
                </span>
                <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                  State Labor Codes &amp; Statutory Jurisdictions
                </h2>
                <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Statutory labor, Professional Tax slabs, and Shops Act protocols vary substantially across Indian states. Select a state to explore regional labor nuances and covered industrial districts.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {states.map((st) => (
                  <Link
                    key={st.slug}
                    href={`/locations/${st.slug}`}
                    className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-slate-100 transition-all"
                  >
                    <div>
                      <p className="font-outfit text-base font-bold text-slate-900 group-hover:text-[#b80f68] transition-colors">
                        {st.name}
                      </p>
                      <p className="text-xs font-mono text-slate-500 mt-0.5">
                        Capital: {st.capital} · LGD: {st.lgdStateCode}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#0284c7] group-hover:text-slate-900 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Bottom Custom Enterprise Hub CTA */}
          <ScrollReveal direction="up" distance={25}>
            <div className="relative rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-8 shadow-sm overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7]" />
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#b80f68] block mb-1 font-bold">
                  Multi-State Enterprise Deployment
                </span>
                <h3 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                  Need service delivery in a specialized industrial cluster?
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-xl mt-2 leading-relaxed">
                  From specialized IT corridors to heavy manufacturing belts, our multi-state workforce and compliance network operates with guaranteed 24–72 hour SLAs.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all"
              >
                Consult Operations Team →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
