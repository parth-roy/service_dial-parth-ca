import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CITIES_DATA, STATES_DATA } from "@/data/locations";
import { SERVICES_CATALOG } from "@/data/services";
import LocationDirectoryClient from "./LocationDirectoryClient";

export const metadata: Metadata = {
  title: "National Service Coverage & Locations Directory | Service Dial",
  description:
    "Search and explore Service Dial's nationwide B2B service delivery network across 20 primary Indian commercial metros and industrial clusters. Staffing, Payroll, Finance & Compliance.",
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
        <div className="max-w-3xl mt-4 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-sd-pink/30 bg-sd-pink/5 px-3 py-1 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-sd-pink animate-pulse" />
            <span className="text-xs font-semibold text-sd-pink">
              Local Government Directory (LGD) Aligned Architecture · 20 Hubs
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-sd-text">
            Nationwide B2B Service Delivery Network
          </h1>
          <p className="mt-4 text-sd-muted text-base leading-relaxed">
            Service Dial provides enterprise staffing, payroll, finance, and regulatory compliance across India’s primary economic corridors. Our service area architecture delivers localized legal adherence without deceptive physical branch claims.
          </p>
        </div>

        {/* Interactive Search & Filter Client Component */}
        <div className="mb-16">
          <LocationDirectoryClient
            cities={cities}
            states={states}
            services={services}
          />
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
            <h3 className="text-xl font-bold text-sd-text">Need service delivery in a specialized industrial cluster?</h3>
            <p className="text-xs text-sd-muted mt-1">
              From remote IT SEZs to heavy manufacturing belts, our multi-state workforce network operates with guaranteed 24–72 hour SLAs.
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
