import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CITIES_DATA, STATES_DATA } from "@/data/locations";
import { SERVICES_CATALOG } from "@/data/services";

export const metadata: Metadata = {
  title: "National Service Coverage & Locations | Service Dial",
  description:
    "Explore Service Dial's nationwide B2B service delivery network across India's top commercial metros and industrial clusters. Staffing, Payroll, Finance & Compliance.",
  alternates: { canonical: "https://servicedial.in/locations" },
};

export default function LocationsDirectoryPage() {
  const cities = Object.values(CITIES_DATA);
  const states = Object.values(STATES_DATA);
  const services = Object.values(SERVICES_CATALOG);

  return (
    <div className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Locations", href: "/locations" },
          ]}
        />

        {/* Header */}
        <div className="max-w-3xl mt-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-sd-pink/30 bg-sd-pink/5 px-3 py-1 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-sd-pink animate-pulse" />
            <span className="text-xs font-semibold text-sd-pink">
              Local Government Directory (LGD) Aligned Architecture
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-sd-text">
            Nationwide B2B Service Delivery Network
          </h1>
          <p className="mt-4 text-sd-muted text-base leading-relaxed">
            Service Dial provides enterprise staffing, payroll, finance, and regulatory compliance across India’s primary economic corridors. Our service area architecture delivers localized legal adherence without deceptive physical branch claims.
          </p>
        </div>

        {/* Top 10 Metros Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6 border-b border-sd-border pb-3">
            <div>
              <h2 className="text-xl font-bold text-sd-text">Tier 1 & Strategic Commercial Metros</h2>
              <p className="text-xs text-sd-muted mt-0.5">High-velocity delivery hubs covering IT parks, BFSI districts, and industrial belts</p>
            </div>
            <span className="text-xs font-semibold text-sd-pink bg-sd-pink/5 border border-sd-pink/20 px-2.5 py-1 rounded">
              10 Pilot Metros Active
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cities.map((city) => (
              <div
                key={city.slug}
                className="rounded-lg border border-sd-border bg-white p-6 shadow-xs hover:border-sd-pink/40 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-sd-text">{city.name}</h3>
                      <Link
                        href={`/locations/${city.stateSlug}`}
                        className="text-xs font-medium text-sd-pink hover:underline"
                      >
                        {city.state}
                      </Link>
                    </div>
                    <span className="text-[10px] font-mono uppercase bg-sd-bg-2 text-sd-muted border border-sd-border px-1.5 py-0.5 rounded">
                      LGD: {city.lgdCode}
                    </span>
                  </div>

                  <p className="text-xs text-sd-muted leading-relaxed mb-4 line-clamp-3">
                    {city.overview}
                  </p>

                  {/* Clusters */}
                  <div className="mb-4">
                    <p className="text-[11px] font-semibold text-sd-text uppercase tracking-wider mb-1.5">
                      Key Commercial Zones:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {city.clusters.slice(0, 2).map((c) => (
                        <span
                          key={c.name}
                          className="text-[11px] bg-sd-bg-2 text-sd-muted-2 px-2 py-0.5 rounded border border-sd-border truncate max-w-full"
                        >
                          {c.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Service links */}
                <div className="pt-4 border-t border-sd-border">
                  <p className="text-[10px] uppercase font-bold text-sd-muted mb-2 tracking-wider">
                    Available Services in {city.name}:
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 text-xs">
                    {services.map((svc) => (
                      <Link
                        key={svc.slug}
                        href={`/services/${svc.slug}/${city.slug}`}
                        className="text-sd-text hover:text-sd-pink transition-colors truncate font-medium hover:underline"
                      >
                        → {svc.shortName}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* State Hubs Section */}
        <div className="mb-16 rounded-lg border border-sd-border bg-sd-bg-2 p-6 lg:p-8">
          <div className="max-w-2xl mb-6">
            <h2 className="text-xl font-bold text-sd-text">State Compliance & Regional Jurisdictions</h2>
            <p className="text-xs text-sd-muted mt-1">
              Statutory labor and corporate compliance vary substantially across Indian states. Select a state to view regional labor nuances, Shops Act protocols, and covered districts.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {states.map((st) => (
              <Link
                key={st.slug}
                href={`/locations/${st.slug}`}
                className="group flex items-center justify-between p-3.5 rounded bg-white border border-sd-border hover:border-sd-pink/40 hover:shadow-xs transition-all"
              >
                <div>
                  <p className="text-sm font-bold text-sd-text group-hover:text-sd-pink transition-colors">
                    {st.name}
                  </p>
                  <p className="text-xs text-sd-muted">
                    Capital: {st.capital} · LGD Code: {st.lgdStateCode}
                  </p>
                </div>
                <span className="text-xs font-semibold text-sd-pink transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-lg border border-sd-pink/20 bg-gradient-to-r from-sd-pink/5 to-transparent p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-sd-text">Need service delivery in a specialized cluster?</h3>
            <p className="text-xs text-sd-muted mt-1">
              From remote IT parks to heavy manufacturing belts, our multi-state workforce network operates with guaranteed 24–72 hour SLAs.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-4 sm:mt-0 inline-flex shrink-0 items-center rounded px-5 py-2.5 text-xs font-semibold bg-sd-pink text-white hover:bg-sd-pink-dark transition-colors"
          >
            Consult Our Operations Team →
          </Link>
        </div>
      </div>
    </div>
  );
}
