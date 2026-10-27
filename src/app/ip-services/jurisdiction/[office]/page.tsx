import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import dbConnect from "@/lib/mongodb";
import { Jurisdiction } from "@/models";

interface OfficeGuideProps {
  params: Promise<{
    office: string;
  }>;
}

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateStaticParams() {
  return [
    { office: "mumbai" },
    { office: "new-delhi" },
    { office: "chennai" },
    { office: "kolkata" },
    { office: "ahmedabad" },
  ];
}

export async function generateMetadata({ params }: OfficeGuideProps): Promise<Metadata> {
  const { office } = await params;
  const officeName = office.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return {
    title: `${officeName} Trade Marks Registry Office Guide | IP India Jurisdictions`,
    description: `Complete guide to the ${officeName} Trade Marks Registry jurisdiction, official address, territorial coverage, virtual hearing rooms, and cause lists.`,
  };
}

const JURISDICTION_FALLBACKS: Record<string, any> = {
  mumbai: {
    officeName: "Mumbai",
    officialAddress: "Boudhik Sampada Bhavan, S.M. Road, Antop Hill, Mumbai 400037",
    statesCovered: ["Maharashtra", "Goa", "Madhya Pradesh", "Chhattisgarh"],
    hearingJurisdiction: "Territorial Jurisdiction of Western India",
  },
  "new-delhi": {
    officeName: "New Delhi",
    officialAddress: "Boudhik Sampada Bhavan, Plot No. 32, Sector 14, Dwarka, New Delhi 110078",
    statesCovered: ["Delhi (NCT)", "Haryana", "Punjab", "Uttar Pradesh", "Himachal Pradesh", "Uttarakhand", "Jammu & Kashmir", "Ladakh", "Chandigarh"],
    hearingJurisdiction: "Territorial Jurisdiction of Northern India",
  },
  chennai: {
    officeName: "Chennai",
    officialAddress: "Intellectual Property Building, G.S.T. Road, Guindy, Chennai 600032",
    statesCovered: ["Tamil Nadu", "Karnataka", "Kerala", "Andhra Pradesh", "Telangana", "Puducherry"],
    hearingJurisdiction: "Territorial Jurisdiction of Southern India",
  },
  kolkata: {
    officeName: "Kolkata",
    officialAddress: "CP-2, Sector V, Salt Lake, Kolkata 700091",
    statesCovered: ["West Bengal", "Bihar", "Jharkhand", "Odisha", "Assam", "Meghalaya", "Manipur", "Tripura", "Mizoram", "Nagaland", "Arunachal Pradesh", "Sikkim"],
    hearingJurisdiction: "Territorial Jurisdiction of Eastern & North-Eastern India",
  },
  ahmedabad: {
    officeName: "Ahmedabad",
    officialAddress: "Near Chanakyapuri Overbridge, Ghatlodiya, Ahmedabad 380061",
    statesCovered: ["Gujarat", "Rajasthan", "Daman & Diu", "Dadra & Nagar Haveli"],
    hearingJurisdiction: "Territorial Jurisdiction of Western-North Region",
  },
};

export default async function OfficeGuidePage({ params }: OfficeGuideProps) {
  const { office } = await params;
  const normalizedKey = office.toLowerCase();

  let jurisdiction: any = null;
  try {
    await dbConnect();
    const formattedName = office.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    jurisdiction = await Jurisdiction.findOne({
      officeName: { $regex: new RegExp(`^${formattedName}$`, "i") }
    }).lean() as any;
  } catch (err) {
    console.warn(`[Office Guide ${office}] DB fallback active`);
  }

  if (!jurisdiction) {
    jurisdiction = JURISDICTION_FALLBACKS[normalizedKey];
  }

  if (!jurisdiction) {
    notFound();
  }

  return (
    <div className="bg-sd-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "IP Services", href: "/ip-services" },
            { label: `${jurisdiction.officeName} Registry`, href: `/ip-services/jurisdiction/${office}` },
          ]}
        />

        <div className="mt-4 bg-white border border-sd-border rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="inline-block px-3 py-1 bg-sd-pink/10 text-sd-pink text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
            Official Registry Guide
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-sd-text">
            {jurisdiction.officeName} Trade Marks Registry Office
          </h1>
          <p className="mt-4 text-base text-sd-muted max-w-3xl leading-relaxed">
            The {jurisdiction.officeName} office operates under the Controller General of Patents, Designs and Trade Marks (CGPDTM), Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-sd-bg border border-sd-border rounded-xl">
              <h3 className="font-semibold text-sd-text text-sm uppercase tracking-wider text-sd-pink">
                Official Address & Physical Premise
              </h3>
              <p className="mt-3 text-sm text-sd-text leading-relaxed">
                {jurisdiction.officialAddress}
              </p>
            </div>

            <div className="p-6 bg-sd-bg border border-sd-border rounded-xl">
              <h3 className="font-semibold text-sd-text text-sm uppercase tracking-wider text-sd-pink">
                States & Union Territories Covered
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {jurisdiction.statesCovered.map((state: string) => (
                  <span
                    key={state}
                    className="px-2.5 py-1 bg-white border border-sd-border rounded-lg text-xs font-medium text-sd-text"
                  >
                    {state}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 p-6 bg-emerald-50 border border-emerald-200 rounded-xl">
            <h3 className="font-semibold text-emerald-900 text-sm">
              Virtual Hearing Rooms & Cause Lists
            </h3>
            <p className="mt-2 text-xs text-emerald-800 leading-relaxed">
              Show Cause hearings and contested opposition proceedings for applicants under the {jurisdiction.officeName} Registry are conducted online through the IP India Virtual Hearing Room (Cisco Webex / NIC platform). Cause lists are published sequentially by the Senior Examiner of Trade Marks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
