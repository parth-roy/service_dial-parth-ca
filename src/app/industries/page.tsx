import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Industry Compliance & Payroll Solutions | Service Dial",
  description:
    "Tailored HRMS, payroll outsourcing, and statutory labour law compliance across key Indian industry sectors: IT/ITeS, Manufacturing & Heavy Engineering, Logistics & Warehousing, and Healthcare & Pharma.",
  keywords: [
    "industry payroll solutions India",
    "IT company compliance services",
    "manufacturing labour law compliance",
    "logistics flexi staffing India",
    "healthcare payroll outsourcing",
  ],
  alternates: {
    canonical: "https://servicedialtm.com/industries",
  },
};

const industries = [
  {
    slug: "it-ites-startups",
    title: "IT, ITeS & High-Growth Startups",
    description:
      "Shops & Establishments 24/7 operating exemptions, multi-state remote employee Professional Tax management, stock option (ESOP) tax withholding, and IP protection.",
    icon: "💻",
    keyCompliances: ["Shops Act 24/7 Night Shift", "Multi-State PT Reconciliation", "ESOP Taxation", "NDA & IP Assignment"],
  },
  {
    slug: "manufacturing-engineering",
    title: "Manufacturing, Heavy Engineering & Heavy Industry",
    description:
      "Factories Act 1948 licensing, hazardous process safety protocols, Industrial Employment (Standing Orders) Act, and Contract Labour (Regulation & Abolition) compliance.",
    icon: "🏭",
    keyCompliances: ["Factories Act Form 2", "CLRA Form I & IV", "Standing Orders Certification", "Minimum Wages Schedule"],
  },
  {
    slug: "logistics-warehousing",
    title: "Logistics, Supply Chain & Warehousing",
    description:
      "High-velocity flexi-staffing, inter-state transit worker compliance, warehouse hub minimum wage variations, and bi-annual Labour Welfare Fund compliance.",
    icon: "🚚",
    keyCompliances: ["Interstate Migrant Workmen Act", "Shift Rotation Registers", "Accident Compensation (ECA)", "WBLWF Dual Cycles"],
  },
  {
    slug: "healthcare-pharma",
    title: "Healthcare, Hospitals & Pharmaceuticals",
    description:
      "Continuous operations workforce scheduling, clinical establishment labour standards, medical officer honorarium taxation, and bio-medical safety certifications.",
    icon: "🏥",
    keyCompliances: ["24/7 Rotational Nursing Shifts", "Bio-Medical Waste Handler Welfare", "TDS on Doctor Retainers (194J)", "ESIC Hospital Coverage"],
  },
];

export default function IndustriesIndexPage() {
  return (
    <>
      <div className="bg-sd-bg-2 border-b border-sd-border py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
            ]}
          />
        </div>
      </div>

      <main className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-sd-pink block mb-2">
              Sector-Specific Architectures
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-sd-text tracking-tight mb-4">
              Industry Verticals & Statutory Nuances
            </h1>
            <p className="text-sd-muted text-base sm:text-lg leading-relaxed">
              Every industry operates under distinct labour statutes, inspection norms, and workforce structures. Service Dial designs tailored managed service frameworks to ensure 100% compliance without sacrificing operational agility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {industries.map((ind) => (
              <div
                key={ind.slug}
                className="p-8 rounded-2xl border border-sd-border bg-white shadow-xs hover:border-sd-pink/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{ind.icon}</span>
                    <h2 className="text-xl font-black text-sd-text">
                      <Link href={`/industries/${ind.slug}`} className="hover:text-sd-pink transition-colors">
                        {ind.title}
                      </Link>
                    </h2>
                  </div>
                  <p className="text-sm text-sd-muted leading-relaxed mb-6">
                    {ind.description}
                  </p>
                  <div>
                    <span className="text-[11px] font-bold text-sd-text uppercase tracking-wider block mb-2">
                      Key Statutory Modules:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {ind.keyCompliances.map((comp, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded-lg bg-sd-bg-2 border border-sd-border text-sd-text font-medium"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-sd-border flex items-center justify-between">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="text-xs font-bold text-sd-pink hover:text-sd-pink-dark transition-colors flex items-center gap-1.5"
                  >
                    <span>Explore Industry Compliance Blueprint</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Consultation CTA Banner */}
          <div className="p-8 rounded-2xl bg-sd-dark text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                Custom Enterprise Consultation
              </span>
              <h3 className="text-xl sm:text-2xl font-black mb-2">
                Operating in a Specialized or Regulated Sector?
              </h3>
              <p className="text-xs sm:text-sm text-white/70 max-w-xl">
                Our labour law attorneys and senior payroll directors conduct confidential statutory gap audits tailored to your sector&apos;s legal framework.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 py-3 px-6 rounded-xl bg-sd-pink text-white font-bold text-xs uppercase tracking-wider hover:bg-sd-pink-dark transition-all shadow-xs"
            >
              Request Sector Consultation →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
