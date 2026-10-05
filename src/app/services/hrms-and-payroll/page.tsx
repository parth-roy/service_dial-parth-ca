import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HRMS & Payroll Management Services | Service Dial",
  description:
    "End-to-end HRMS and payroll management services including payroll processing, vendor compliance, labour law adherence, and HRMS technology integration across India.",
  alternates: { canonical: "https://servicedial.in/services/hrms-and-payroll" },
};

const pillars = [
  {
    title: "Payroll Processing & Disbursement",
    desc: "Accurate, on-time payroll runs for permanent and contract workforces — statutory deductions, reimbursements, full-and-final settlements all handled end-to-end.",
  },
  {
    title: "Vendor & Contractor Compliance",
    desc: "Manage third-party workforce compliance — PF, ESI, professional tax, minimum wage adherence — ensuring your vendor contracts stay audit-clean.",
  },
  {
    title: "Labour Law Adherence",
    desc: "Stay ahead of the Wages Code, Industrial Relations Code, Social Security Code, and Occupational Safety Code with proactive compliance management.",
  },
  {
    title: "HRMS Technology Integration",
    desc: "Connect payroll with HRMS platforms — time & attendance, leave management, performance systems — for a single source of employee truth.",
  },
];

export default function HRMSPage() {
  return (
    <>
      <section className="border-b border-sd-border py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-sd-pink mb-3">
              HRMS & Payroll
            </p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-sd-text">
              Accurate payroll.<br />
              <span className="gradient-text">Zero compliance risk.</span>
            </h1>
            <p className="mt-5 text-sd-muted text-base lg:text-lg leading-relaxed">
              We handle the full payroll lifecycle — from statutory deductions to vendor compliance and labour law filings — so your HR team can focus on your people, not paperwork.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center rounded px-6 py-3 text-sm font-semibold bg-sd-pink text-white hover:bg-sd-pink-dark transition-colors">
                Get a Payroll Assessment →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-sd-pink mb-8">
            What's Covered
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <div key={p.title} className="rounded-lg border border-sd-border bg-white p-6 shadow-sm">
                <div className="text-4xl font-black text-sd-border-2 mb-3 select-none">0{i + 1}</div>
                <h2 className="text-base font-bold text-sd-text mb-2">{p.title}</h2>
                <p className="text-sm text-sd-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-sd-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-sd-pink/20 bg-gradient-to-r from-sd-pink/5 to-transparent p-8">
            <h2 className="text-2xl sm:text-3xl font-black text-sd-text mb-3">
              Ready to streamline payroll?
            </h2>
            <p className="text-sd-muted text-sm mb-6 max-w-lg">
              All engagements begin with a confidential assessment. Share your current setup and headcount — we'll map a transition plan.
            </p>
            <Link href="/contact" className="inline-flex items-center rounded px-5 py-2.5 text-sm font-semibold bg-sd-pink text-white hover:bg-sd-pink-dark transition-colors">
              Start an Assessment →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
