import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Manufacturing & Heavy Engineering Labour Compliance & Payroll | Service Dial",
  description:
    "Comprehensive Factories Act 1948 compliance, Contract Labour (CLRA) audits, and factory payroll management across Howrah, Dankuni, Barrackpore, and Pan-India.",
  keywords: [
    "manufacturing plant labour compliance",
    "Factories Act compliance consultant Kolkata",
    "CLRA vendor compliance audit Dankuni",
    "blue collar workforce payroll services",
    "industrial safety register management",
  ],
  alternates: {
    canonical: "https://servicedialtm.com/industries/manufacturing-engineering",
  },
};

export default function ManufacturingEngineeringPage() {
  return (
    <>
      <div className="bg-sd-bg-2 border-b border-sd-border py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: "Manufacturing & Engineering", href: "/industries/manufacturing-engineering" },
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
              Manufacturing & Industrial Engineering Labour Compliance
            </h1>
            <p className="text-sd-muted text-base sm:text-lg leading-relaxed">
              Industrial plants operate in the most demanding statutory environment in India. Service Dial shields manufacturing leadership from prosecution and production downtime through proactive Factories Act compliance, CLRA contractor audits, and wage code alignment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Factories Act 1948 Mandates",
                desc: "Factory license renewal (Form 2), annual returns (Form 22), working hour rosters, hazardous process certifications, and welfare inspectorate filings.",
              },
              {
                title: "Contract Labour (CLRA) Audits",
                desc: "Principal Employer registration (Form I), contractor licensing audits (Form IV), wage register inspection, and statutory pass-through reconciliation.",
              },
              {
                title: "Standing Orders & Trade Unions",
                desc: "Drafting, certification, and compliance with the Industrial Employment (Standing Orders) Act, 1946, disciplinary inquiry support, and union conciliation advisory.",
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
              Eliminating Vicarious Liability for Factory Directors & Occupiers
            </h2>
            <div className="space-y-4 text-sm text-sd-muted leading-relaxed">
              <p>
                Under Section 92 of the Factories Act and Section 8A of the Employees&apos; Provident Funds Act, factory Directors and designated Occupiers carry personal, non-delegable criminal liability for safety violations and contractor statutory defaults. A single defaulted EPF challan or overtime calculation discrepancy from a security or loading contractor can halt plant operations.
              </p>
              <p>
                Service Dial establishes an airtight vendor compliance firewall. We audit 100% of sub-contractor wage sheets, biometric punch records, bank payout proofs, and ECR challans before monthly vendor invoices are approved for payment.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="p-8 rounded-2xl bg-sd-dark text-white text-center shadow-xl">
            <h2 className="text-2xl font-black mb-2">Secure Your Factory Operations Today</h2>
            <p className="text-xs sm:text-sm text-white/70 max-w-lg mx-auto mb-6">
              Headquartered in the historic industrial belt of Barrackpore, Service Dial has managed complex factory compliance across Howrah, Dankuni, and Pan-India since 2016.
            </p>
            <Link
              href="/contact"
              className="py-3 px-6 rounded-xl bg-sd-pink text-white font-bold text-xs uppercase tracking-wider hover:bg-sd-pink-dark transition-all inline-block"
            >
              Request Plant Compliance Audit →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
