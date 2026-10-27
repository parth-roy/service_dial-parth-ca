import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Healthcare, Hospitals & Pharma Workforce Compliance & Payroll | Service Dial",
  description:
    "Statutory labour law compliance, doctor retainer taxation, and 24/7 nursing shift payroll for hospitals, diagnostic chains, and pharmaceutical manufacturers across India.",
  keywords: [
    "hospital payroll outsourcing India",
    "healthcare labour law compliance Kolkata",
    "doctor retainer TDS Section 194J",
    "clinical establishment staff compliance",
    "pharma manufacturing labour audit",
  ],
  alternates: {
    canonical: "https://servicedialtm.com/industries/healthcare-pharma",
  },
};

export default function HealthcarePharmaPage() {
  return (
    <>
      <div className="bg-sd-bg-2 border-b border-sd-border py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: "Healthcare & Pharma", href: "/industries/healthcare-pharma" },
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
              Healthcare, Hospitals & Pharma Workforce Compliance
            </h1>
            <p className="text-sd-muted text-base sm:text-lg leading-relaxed">
              Managing complex 24/7 rotational shifts, clinical establishment statutory requirements, bio-medical waste staff welfare, and professional consultant TDS under Section 194J.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "24/7 Nursing & Paramedical Rosters",
                desc: "Statutory scheduling under the Clinical Establishments Act and Shops Act, managing night shift allowances, mandatory weekly rest periods, and overtime.",
              },
              {
                title: "Doctor Retainer TDS (Sec 194J)",
                desc: "Automated distinction between salaried medical officers (Section 192 TDS) and visiting consultant doctors (Section 194J TDS @ 10% or 2%), issuing digital Form 16A.",
              },
              {
                title: "Bio-Hazard Staff Protections",
                desc: "Full statutory compliance regarding safety gear allowances, specialized medical check-ups, and ESIC / Workmen's Compensation protections for sanitation teams.",
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
              Navigating Dual Taxation and Complex Shift Structures
            </h2>
            <div className="space-y-4 text-sm text-sd-muted leading-relaxed">
              <p>
                Healthcare facilities operate under distinct regulatory scrutiny. Mixing employment categories—such as treating full-time medical staff as independent contractors or misclassifying paramedical overtime—routinely triggers severe Income Tax demands and labour department inquiries.
              </p>
              <p>
                Service Dial delivers tailored healthcare payroll modules that segment professional fees, nursing pay, and outsourced support staff into compliant, audited streams with 100% on-time challan payments.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="p-8 rounded-2xl bg-sd-dark text-white text-center shadow-xl">
            <h2 className="text-2xl font-black mb-2">Ensure Compliance Across Your Healthcare Facility</h2>
            <p className="text-xs sm:text-sm text-white/70 max-w-lg mx-auto mb-6">
              Connect with Service Dial to audit your hospital or clinic&apos;s payroll structures, doctor contracts, and statutory registers.
            </p>
            <Link
              href="/contact"
              className="py-3 px-6 rounded-xl bg-sd-pink text-white font-bold text-xs uppercase tracking-wider hover:bg-sd-pink-dark transition-all inline-block"
            >
              Consult Healthcare Payroll Lead →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
