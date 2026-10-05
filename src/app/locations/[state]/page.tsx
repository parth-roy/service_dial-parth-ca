import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { STATES_DATA, CITIES_DATA } from "@/data/locations";
import { SERVICES_CATALOG } from "@/data/services";

interface StatePageProps {
  params: Promise<{ state: string }>;
}

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateStaticParams() {
  return Object.keys(STATES_DATA).map((state) => ({ state }));
}

export async function generateMetadata({ params }: StatePageProps): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = STATES_DATA[stateSlug];
  if (!state) return { title: "Location Not Found" };

  return {
    title: `B2B Enterprise Services in ${state.name} | Service Dial`,
    description: `Enterprise staffing, payroll, finance, and labour law compliance services across ${state.name}. LGD Code: ${state.lgdStateCode}. 100% statutory adherence.`,
    alternates: { canonical: `https://servicedial.in/locations/${state.slug}` },
  };
}

export default async function StateHubPage({ params }: StatePageProps) {
  const { state: stateSlug } = await params;
  const state = STATES_DATA[stateSlug];
  if (!state) notFound();

  const stateCities = state.cities
    .map((citySlug) => CITIES_DATA[citySlug])
    .filter(Boolean);

  const services = Object.values(SERVICES_CATALOG);

  return (
    <div className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Locations", href: "/locations" },
            { label: state.name, href: `/locations/${state.slug}` },
          ]}
        />

        {/* State Hero */}
        <div className="max-w-3xl mt-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-sd-pink/30 bg-sd-pink/5 px-3 py-1 mb-4">
            <span className="text-xs font-semibold text-sd-pink">
              State Administrative Jurisdiction · LGD Code: {state.lgdStateCode}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-sd-text">
            Enterprise Services & Compliance in {state.name}
          </h1>
          <p className="mt-4 text-sd-muted text-base leading-relaxed">
            Service Dial provides comprehensive corporate back-office excellence and talent sourcing throughout {state.name}. Our dedicated regional compliance engine ensures seamless alignment with state statutes and local industry standards.
          </p>
        </div>

        {/* Regional Labor Nuances Box */}
        <div className="rounded-lg border border-sd-border bg-white p-6 lg:p-8 mb-12 shadow-xs">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-sd-pink/10 text-sd-pink shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-bold text-sd-text mb-1">
                Regional Statutory Framework ({state.name})
              </h2>
              <p className="text-xs text-sd-muted leading-relaxed">
                {state.regionalLabourNuances}
              </p>
            </div>
          </div>
        </div>

        {/* Cities in State */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-sd-text mb-6">
            Commercial Metros in {state.name}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {stateCities.map((city) => (
              <div
                key={city.slug}
                className="rounded-lg border border-sd-border bg-white p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-sd-text">{city.name}</h3>
                    <span className="text-[11px] font-mono text-sd-muted border border-sd-border px-2 py-0.5 rounded bg-sd-bg-2">
                      LGD: {city.lgdCode}
                    </span>
                  </div>
                  <p className="text-xs text-sd-muted leading-relaxed mb-4">
                    {city.overview}
                  </p>

                  <div className="mb-4">
                    <p className="text-[11px] font-bold text-sd-text uppercase tracking-wider mb-2">
                      Key Industrial Zones:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {city.clusters.map((cl) => (
                        <span
                          key={cl.name}
                          className="text-xs bg-sd-bg-2 text-sd-muted-2 px-2.5 py-1 rounded border border-sd-border"
                        >
                          {cl.name} ({cl.type})
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-sd-border mt-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-sd-pink mb-2">
                    Service Portals for {city.name}:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2 text-xs">
                    {services.map((svc) => (
                      <Link
                        key={svc.slug}
                        href={`/services/${svc.slug}/${city.slug}`}
                        className="p-2 rounded border border-sd-border bg-sd-bg-2 hover:bg-white hover:border-sd-pink/40 text-sd-text font-medium transition-all flex items-center justify-between"
                      >
                        <span>{svc.shortName}</span>
                        <span className="text-sd-pink">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cross State Navigation */}
        <div className="pt-8 border-t border-sd-border">
          <p className="text-xs font-bold text-sd-muted uppercase tracking-wider mb-3">
            Other States & Territories:
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            {Object.values(STATES_DATA)
              .filter((s) => s.slug !== state.slug)
              .map((otherState) => (
                <Link
                  key={otherState.slug}
                  href={`/locations/${otherState.slug}`}
                  className="px-3 py-1.5 rounded border border-sd-border bg-white text-sd-muted hover:text-sd-text hover:border-sd-pink/40 transition-colors"
                >
                  {otherState.name}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
