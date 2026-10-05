import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compliance Services – Labour Law, Statutory & Regulatory | Service Dial",
  description:
    "Proactive compliance management covering statutory filings, labour law, regulatory reporting, and risk assessment. Integrated across HR, payroll, and finance functions.",
  alternates: { canonical: "https://servicedial.in/services/compliance-services" },
};

const areas = [
  {
    title: "Statutory Compliance",
    desc: "PF, ESI, PT, Gratuity, Bonus Act, and all applicable statutory requirements managed proactively — zero missed deadlines, zero penalties.",
  },
  {
    title: "Labour Law Filings",
    desc: "Complete filings under the Labour Codes — Wages, Industrial Relations, Social Security, and Occupational Safety — across all applicable states.",
  },
  {
    title: "Regulatory Reporting",
    desc: "Timely and accurate regulatory submissions to government bodies, with documentation maintained for inspection-readiness at all times.",
  },
  {
    title: "Risk & Audit Assessment",
    desc: "Proactive identification of compliance gaps with structured remediation plans — before a statutory notice or audit surfaces the issue.",
  },
];

export default function CompliancePage() {
  return (
    <>
      <section className="border-b border-sd-border py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-sd-pink mb-3">
              Compliance Services
            </p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-sd-text">
              Stay compliant.<br />
              <span className="gradient-text">Stay ahead.</span>
            </h1>
            <p className="mt-5 text-sd-muted text-base lg:text-lg leading-relaxed">
              Proactive compliance management deeply integrated across HR, payroll, and finance — so regulatory obligations are never a surprise and never a penalty.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center rounded px-6 py-3 text-sm font-semibold bg-sd-pink text-white hover:bg-sd-pink-dark transition-colors">
                Get a Compliance Audit →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-4">
            {areas.map((a) => (
              <div key={a.title} className="rounded-lg border border-sd-border bg-white p-6 shadow-sm">
                <h2 className="text-base font-bold text-sd-text mb-2">{a.title}</h2>
                <p className="text-sm text-sd-muted leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-sd-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-sd-pink/20 bg-gradient-to-r from-sd-pink/5 to-transparent p-8">
            <h2 className="text-2xl sm:text-3xl font-black text-sd-text mb-3">
              Ready for a compliance review?
            </h2>
            <p className="text-sd-muted text-sm mb-6 max-w-lg">
              We begin every engagement with a confidential compliance gap assessment. Share your current setup and we'll identify risks within 5 working days.
            </p>
            <Link href="/contact" className="inline-flex items-center rounded px-5 py-2.5 text-sm font-semibold bg-sd-pink text-white hover:bg-sd-pink-dark transition-colors">
              Request an Assessment →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
