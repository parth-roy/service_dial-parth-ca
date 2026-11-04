import type { Metadata } from "next";
import Link from "next/link";
import { getSubServicesByPillar } from "@/data/subservices";

export const metadata: Metadata = {
  title: "Statutory Compliance Services – CLRA, Factories Act, GST 9C & TDS",
  description:
    "Pan-India regulatory and statutory compliance management: Principal Employer CLRA Form V licensing, Factories Act approvals, GST 2B/9/9C audit, TDS/TCS 24Q, POSH IC training, and labor law advisory.",
  alternates: { canonical: "https://servicedialtm.com/services/compliance-services" },
};

export default function CompliancePage() {
  const subservices = getSubServicesByPillar("compliance-services");

  return (
    <>
      <section className="bg-gradient-to-b from-white to-slate-50 border-b border-sd-border py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sd-pink bg-sd-pink/10 border border-sd-pink/20 rounded-full px-3 py-1 mb-4">
              Enterprise Regulatory Shield
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-sd-text">
              Statutory compliance.<br />
              <span className="gradient-text">Zero penalties. 100% audit defense.</span>
            </h1>
            <p className="mt-5 text-sd-muted text-base lg:text-lg leading-relaxed">
              Shielding corporate directors and principal employers from regulatory liabilities: CLRA Form V licensing, Factories Act approvals, GSTR-2B triangulation, Section 194C withholding, POSH compliance, and multi-state labor law advisory.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center rounded-xl px-6 py-3.5 text-sm font-bold bg-sd-pink text-white hover:bg-sd-pink-dark transition-all shadow-md">
                Request Statutory Compliance Audit →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Specialized Compliance Micro-Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sd-pink block mb-2">
              Statutory Risk Disciplines
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-sd-text">
              6 Specialized Regulatory Practices
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Protecting corporate boards, manufacturing units, and multi-state establishments from non-compliance exposures.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subservices.map((sub) => (
              <Link
                key={sub.slug}
                href={`/services/compliance-services/${sub.slug}`}
                className="rounded-2xl border border-sd-border bg-white p-6 shadow-xs hover:border-sd-pink/40 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="inline-block text-[10px] font-black tracking-widest text-sd-pink border border-sd-pink/30 bg-sd-pink/5 rounded-full px-2.5 py-0.5 mb-3">
                    {sub.badge}
                  </span>
                  <h3 className="text-base font-bold text-sd-text group-hover:text-sd-pink transition-colors mb-2">
                    {sub.shortTitle}
                  </h3>
                  <p className="text-xs text-sd-muted leading-relaxed line-clamp-3">
                    {sub.blufSummary}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sd-pink">
                  <span>Explore Practice</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-sd-border bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-sd-pink/20 bg-gradient-to-r from-sd-pink/10 to-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-black text-sd-text mb-2">
                Facing a statutory labor or tax inquiry?
              </h2>
              <p className="text-sd-muted text-sm leading-relaxed">
                Our regulatory directors prepare detailed factual rebuttals, organize mandatory muster registers, and represent your company before government authorities.
              </p>
            </div>
            <Link href="/contact" className="inline-flex items-center rounded-xl px-7 py-3.5 text-sm font-bold bg-sd-pink text-white hover:bg-sd-pink-dark transition-all shadow-md shrink-0">
              Schedule Legal Consultation →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
