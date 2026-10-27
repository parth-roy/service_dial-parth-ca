import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Statutory Labour Law & Regulatory Knowledge Base | Service Dial",
  description:
    "Authoritative Indian labour law and payroll regulatory resource library. Guides on EPFO wage ceiling revisions, West Bengal Professional Tax slabs, Labour Welfare Fund schedules, and CLRA compliance.",
  alternates: {
    canonical: "https://servicedialtm.com/resources",
  },
};

const guides = [
  {
    title: "Central EPFO Wage Ceiling Revision: ₹15,000 to ₹25,000",
    description:
      "Deep legislative and mathematical analysis of the enhanced statutory wage ceiling under EPFS 1952. CTC financial models, take-home reduction calculations, and the 50% Wage Code rule.",
    href: "/resources/epfo-wage-ceiling-25000",
    badge: "2026 Central Update",
    updated: "October 2026",
  },
  {
    title: "West Bengal Professional Tax (PT) Slabs & Compliance Architecture",
    description:
      "Official guide to West Bengal Act VI of 1979 schedule changes. Slabs with gross wages < ₹20,000 exempt, February ₹300 spike, ERC vs EC registration, and Form III-A annual returns.",
    href: "/resources/west-bengal-professional-tax-2026",
    badge: "State Statutory Hub",
    updated: "October 2026",
  },
  {
    title: "West Bengal Labour Welfare Fund (WBLWF) Compliance & Form D",
    description:
      "Mandatory biannual deduction schedules (July 15 & Jan 15), statutory rates (Employee ₹3, Employer ₹30), and Form D return filing under the West Bengal Labour Welfare Fund Act, 1974.",
    href: "/resources/west-bengal-labour-welfare-fund",
    badge: "State Statutory Hub",
    updated: "October 2026",
  },
];

export default function ResourcesIndexPage() {
  return (
    <>
      <div className="bg-sd-bg-2 border-b border-sd-border py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Regulatory Resources", href: "/resources" },
            ]}
          />
        </div>
      </div>

      <main className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-sd-pink block mb-2">
              Statutory Advisory & Intelligence
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-sd-text tracking-tight mb-4">
              Labour Law, Payroll & Regulatory Resource Hub
            </h1>
            <p className="text-sd-muted text-base sm:text-lg leading-relaxed">
              Timely, authoritative, and legally verified intelligence on evolving Indian statutory frameworks. Designed to assist CFOs, compliance directors, and HR leaders in mitigating regulatory risks and financial penalties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {guides.map((g) => (
              <div
                key={g.href}
                className="p-6 rounded-2xl border border-sd-border bg-white shadow-xs hover:border-sd-pink/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-sd-pink/10 text-sd-pink">
                      {g.badge}
                    </span>
                    <span className="text-[11px] text-sd-muted font-medium">{g.updated}</span>
                  </div>
                  <h2 className="text-lg font-black text-sd-text mb-2 leading-snug">
                    <Link href={g.href} className="hover:text-sd-pink transition-colors">
                      {g.title}
                    </Link>
                  </h2>
                  <p className="text-xs text-sd-muted leading-relaxed mb-4">
                    {g.description}
                  </p>
                </div>
                <div>
                  <Link
                    href={g.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sd-pink hover:text-sd-pink-dark transition-colors"
                  >
                    <span>Read Authoritative Guide</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Calculator Promo */}
          <div className="p-8 rounded-2xl bg-sd-bg-2 border border-sd-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sd-pink block mb-1">
                Interactive Modeling Tool
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-sd-text mb-2">
                Payroll & Statutory Compliance Fee Estimator
              </h3>
              <p className="text-xs sm:text-sm text-sd-muted max-w-xl">
                Simulate your outsourced payroll retainer based on active employee counts and statutory modules including EPFO, ESIC, and West Bengal Professional Tax.
              </p>
            </div>
            <Link
              href="/tools/payroll-fee-estimator"
              className="shrink-0 py-3 px-6 rounded-xl bg-sd-pink text-white font-bold text-xs uppercase tracking-wider hover:bg-sd-pink-dark transition-all shadow-xs"
            >
              Open Fee Estimator →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
