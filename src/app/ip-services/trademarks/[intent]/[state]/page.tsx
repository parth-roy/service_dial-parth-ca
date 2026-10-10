import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import dbConnect from "@/lib/mongodb";
import { Geography, Jurisdiction } from "@/models";

interface StateIntentPageProps {
  params: Promise<{
    intent: string;
    state: string;
  }>;
}

export const dynamicParams = true;
export const revalidate = 86400;

const INTENT_NAMES: Record<string, string> = {
  registration: "Trademark Registration",
  renewal: "Trademark Renewal",
  "objection-sec9": "Section 9 Trademark Objection Reply",
  "objection-sec11": "Section 11 Trademark Objection Reply",
  opposition: "Trademark Opposition Services",
  "show-cause-hearing": "Show Cause Hearing Representation",
};

export async function generateMetadata({ params }: StateIntentPageProps): Promise<Metadata> {
  const { intent, state } = await params;
  const intentTitle = INTENT_NAMES[intent] || "Trademark Services";
  const stateName = state.charAt(0).toUpperCase() + state.slice(1).replace(/-/g, " ");

  const title = `${intentTitle} in ${stateName} | IP India Advisory & Filing`;
  const description = `Statewide ${intentTitle.toLowerCase()} services across all commercial hubs in ${stateName}. Jurisdiction mapping, Nice classification advisory, and transparent statutory fee schedule.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://servicedialtm.com/ip-services/trademarks/${intent}/${state}`,
    },
  };
}

export default async function StateIntentPage({ params }: StateIntentPageProps) {
  const { intent, state } = await params;
  const intentTitle = INTENT_NAMES[intent];

  if (!intentTitle) {
    notFound();
  }

  await dbConnect();

  const stateDoc = await Geography.findOne({ slug: state, level: "State" }).populate("jurisdictionId").lean() as any;
  if (!stateDoc) {
    notFound();
  }

  const cities = await Geography.find({ 
    parentId: stateDoc._id, 
    level: { $in: ["District", "Subdistrict", "LocalBody"] } 
  }).sort({ name: 1 }).lean() as any[];
  const jurisdiction = stateDoc.jurisdictionId || {
    officeName: "Regional Registry",
    officialAddress: "IP India Registry Office",
  };

  return (
    <div className="bg-sd-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "IP Services", href: "/ip-services" },
            { label: intentTitle, href: `/ip-services/trademarks/${intent}/${state}` },
            { label: stateDoc.name, href: `/ip-services/trademarks/${intent}/${state}` },
          ]}
        />

        <header className="mt-4 bg-white border border-sd-border rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="inline-block px-3 py-1 bg-sd-pink/10 text-sd-pink text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
            Statewide Legal Directory
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-sd-text">
            {intentTitle} across <span className="text-sd-pink">{stateDoc.name}</span>
          </h1>
          <p className="mt-4 text-base text-sd-muted max-w-3xl leading-relaxed">
            All trademark filings and statutory proceedings originating from commercial centers in {stateDoc.name} are adjudicated by the <strong>{jurisdiction.officeName} Registry</strong>. Select your city below for localized classification guidance and filing support.
          </p>
        </header>

        {/* Commercial Hubs Directory */}
        <section className="mt-8 bg-white border border-sd-border rounded-2xl p-6 sm:p-10">
          <h2 className="text-xl font-bold text-sd-text mb-6">
            Commercial Centers & Industrial Hubs in {stateDoc.name}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((city: any) => (
              <Link
                key={city.slug}
                href={`/ip-services/trademarks/${intent}/${stateDoc.slug}/${city.slug}`}
                className="p-4 rounded-xl border border-sd-border hover:border-sd-pink hover:bg-sd-bg transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="font-semibold text-sd-text group-hover:text-sd-pink transition-colors text-sm">
                    {city.name}
                  </span>
                  <p className="text-xs text-sd-muted mt-1">
                    LGD Code: {city.lgdCode || "Verified"}
                  </p>
                </div>
                <span className="text-xs font-medium text-sd-pink mt-3 inline-flex items-center gap-1">
                  View {intentTitle} →
                </span>
              </Link>
            ))}
          </div>

          {cities.length === 0 && (
            <p className="text-sm text-sd-muted">
              City directories for {stateDoc.name} are actively being indexed. Contact our centralized desk for immediate assistance.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
