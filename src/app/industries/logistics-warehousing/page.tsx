import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Logistics, Supply Chain & Warehousing Workforce Compliance | Service Dial",
  description:
    "Flexi-staffing, statutory labour compliance, and high-velocity payroll for warehouse corridors, 3PL providers, and freight hubs across India.",
  keywords: [
    "warehouse labour compliance Dankuni Howrah",
    "logistics flexi staffing solutions Kolkata",
    "3PL payroll outsourcing India",
    "interstate migrant worker compliance logistics",
    "supply chain workforce staffing",
  ],
  alternates: {
    canonical: "https://servicedialtm.com/industries/logistics-warehousing",
  },
};

export default function LogisticsWarehousingPage() {
  return (
    <>
      <div className="bg-sd-bg-2 border-b border-sd-border py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: "Logistics & Warehousing", href: "/industries/logistics-warehousing" },
            ]}
          />
        </div>
      </div>

      <main className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-sd-pink block mb-2">
              Industry Vertical Focus
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-sd-text tracking-tight mb-4">
              Logistics, Supply Chain & Warehousing Workforce Compliance
            </h1>
            <p className="text-sd-muted text-base sm:text-lg leading-relaxed">
              Managing large-scale flexi-staffing, interstate migrant labour, and 24/7 rotational warehouse operations across Eastern India&apos;s primary freight corridors (Dankuni, Dhulagarh, Taratala) and national hubs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Rapid Sourcing SLAs (24–72h)",
                desc: "Immediate mobilization of pickers, packers, loaders, forklift operators, and dispatch executives during festive peak seasons and e-commerce flash sales.",
              },
              {
                title: "Interstate Migrant Worker Compliance",
                desc: "Full statutory compliance under the Inter-State Migrant Workmen Act, 1979, including displacement allowances, journey allowances, and local housing records.",
              },
              {
                title: "Workmen Compensation & ESIC",
                desc: "Zero-gap coverage under the Employees' State Insurance Act and Employees' Compensation Act, 1923, mitigating claims from warehouse accidents or transit mishaps.",
              },
            ].map((card, i) => (
              <div key={i} className="p-5 rounded-xl border border-sd-border bg-white shadow-xs">
                <h2 className="text-sm font-bold text-sd-text mb-2">{card.title}</h2>
                <p className="text-xs text-sd-muted leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <section className="space-y-6 border-t border-sd-border pt-10 mb-12">
            <h2 className="text-2xl font-black text-sd-text">
              High-Velocity Payroll for High-Attrition Environments
            </h2>
            <div className="space-y-4 text-sm text-sd-muted leading-relaxed">
              <p>
                Logistics and 3PL operations frequently experience monthly workforce attrition rates of 15% to 30%. Managing UAN generation, KYC seeding, exit markups, and statutory full-and-final (F&F) settlements manually causes massive compliance leakage.
              </p>
              <p>
                Service Dial automates daily attendance ingestion, overtime reconciliation under the local Shops Act or Factories Act, and instant digital payout advice files. We ensure 100% on-time minimum wage disbursements directly into verified Jan Dhan or bank accounts.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="p-8 rounded-2xl bg-sd-dark text-white text-center shadow-xl">
            <h2 className="text-2xl font-black mb-2">Scale Your Supply Chain Operations Seamlessly</h2>
            <p className="text-xs sm:text-sm text-white/70 max-w-lg mx-auto mb-6">
              Connect with Service Dial to deploy compliant contract workforces and automated warehouse payroll across Dankuni, Howrah, and national distribution centers.
            </p>
            <Link
              href="/contact"
              className="py-3 px-6 rounded-xl bg-sd-pink text-white font-bold text-xs uppercase tracking-wider hover:bg-sd-pink-dark transition-all inline-block"
            >
              Consult Logistics Specialists →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
