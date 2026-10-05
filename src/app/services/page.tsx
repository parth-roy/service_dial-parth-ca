import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Service Dial offers staffing & recruitment, HRMS & payroll, finance & audit, and compliance services across India. Enterprise-grade. NDA protected.",
};

const services = [
  {
    slug: "staffing-and-recruitment",
    title: "Staffing & Recruitment",
    tagline: "Premium · IT · Blue Collar · CXO",
    description:
      "From C-suite mandates to large-scale general staffing, our recruiters source verified candidates with a documented 7:10 submission-to-selection ratio and average sourcing turnaround of 24–72 hours.",
    sub: ["IT & Premium Staffing", "CXO / Leadership Hiring", "General Staffing", "Blue Collar Staffing"],
  },
  {
    slug: "hrms-and-payroll",
    title: "HRMS & Payroll Management",
    tagline: "Accurate · Compliant · Automated",
    description:
      "Comprehensive payroll processing, statutory compliance, vendor management, and HRMS technology integration — all under one NDA-protected engagement.",
    sub: ["Payroll Processing & Disbursement", "Vendor Compliance Management", "Labour Law Adherence", "HRMS Technology Integration"],
  },
  {
    slug: "finance-and-audit",
    title: "Finance & Audit",
    tagline: "Reliable · Transparent · Controlled",
    description:
      "Domain specialists managing your complete finance operations — from accounts payable and receivable through to record-to-report and internal audit functions.",
    sub: ["Accounts Payable (AP)", "Accounts Receivable (AR)", "Record to Report (R2R)", "Internal & External Audit"],
  },
  {
    slug: "compliance-services",
    title: "Compliance Services",
    tagline: "Proactive · Thorough · Risk-Free",
    description:
      "Stay ahead of statutory obligations with proactive compliance management deeply integrated across HR, payroll, and finance functions.",
    sub: ["Statutory Compliance", "Labour Law Filings", "Regulatory Reporting", "Risk & Audit Assessment"],
  },
];

export default function ServicesPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-sd-pink mb-3">
            Services
          </p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-sd-text">
            Enterprise solutions.<br />Zero compromise.
          </h1>
          <p className="mt-5 text-sd-muted text-base leading-relaxed">
            Four core disciplines — each staffed by domain experts, governed by
            strict NDA protocols, and built around your specific operational needs.
          </p>
        </div>

        <div className="space-y-4">
          {services.map((svc, i) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="group flex flex-col lg:flex-row lg:items-start gap-6 rounded-lg border border-sd-border bg-white p-6 lg:p-8 hover:border-sd-pink/40 hover:shadow-sm transition-all"
            >
              <div className="shrink-0 text-4xl font-black text-sd-border-2 group-hover:text-sd-pink/30 transition-colors select-none">
                0{i + 1}
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-sd-pink mb-1">{svc.tagline}</p>
                <h2 className="text-xl font-bold text-sd-text mb-2">{svc.title}</h2>
                <p className="text-sm text-sd-muted leading-relaxed mb-4 max-w-2xl">
                  {svc.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {svc.sub.map((s) => (
                    <li key={s} className="text-xs px-2 py-0.5 rounded border border-sd-border text-sd-muted bg-sd-bg-2">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="shrink-0 self-center text-sm font-semibold text-sd-pink flex items-center gap-1">
                Explore
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
