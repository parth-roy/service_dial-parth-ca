import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Finance & Audit Services – AP, AR, R2R | Service Dial",
  description:
    "Expert finance and audit services including accounts payable, accounts receivable, record to report (R2R), and internal audit. Delivered by domain specialists across India.",
  alternates: { canonical: "https://servicedialtm.com/services/finance-and-audit" },
};

const functions_ = [
  {
    code: "AP",
    title: "Accounts Payable",
    desc: "Invoice processing, payment runs, vendor reconciliation, and three-way matching — keeping your payable cycle clean, timely, and audit-ready.",
  },
  {
    code: "AR",
    title: "Accounts Receivable",
    desc: "Customer invoicing, collections, dispute management, and DSO optimization — accelerating cash flow without damaging client relationships.",
  },
  {
    code: "R2R",
    title: "Record to Report",
    desc: "Period-end close, journal entries, intercompany reconciliation, and management reporting — delivering accurate financials on time, every month.",
  },
  {
    code: "AUD",
    title: "Audit Services",
    desc: "Internal and external audit preparation, control testing, process documentation, and regulatory filing support — ensuring your books withstand scrutiny.",
  },
];

export default function FinancePage() {
  return (
    <>
      <section className="border-b border-sd-border py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-sd-pink mb-3">
              Finance & Audit
            </p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-sd-text">
              Finance operations.<br />
              <span className="gradient-text">Handled by specialists.</span>
            </h1>
            <p className="mt-5 text-sd-muted text-base lg:text-lg leading-relaxed">
              Domain experts managing your end-to-end finance function — AP, AR, R2R, and audit — with the rigor of an in-house team and the flexibility of an outsourced partner.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center rounded px-6 py-3 text-sm font-semibold bg-sd-pink text-white hover:bg-sd-pink-dark transition-colors">
                Discuss Your Requirements →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-4">
            {functions_.map((fn) => (
              <div key={fn.code} className="rounded-lg border border-sd-border bg-white p-6 shadow-sm">
                <div className="inline-block text-xs font-black tracking-widest text-sd-pink border border-sd-pink/30 bg-sd-pink/5 rounded px-2 py-0.5 mb-4">
                  {fn.code}
                </div>
                <h2 className="text-lg font-bold text-sd-text mb-2">{fn.title}</h2>
                <p className="text-sm text-sd-muted leading-relaxed">{fn.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-sd-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-sd-pink/20 bg-gradient-to-r from-sd-pink/5 to-transparent p-8">
            <h2 className="text-2xl sm:text-3xl font-black text-sd-text mb-3">
              Need finance specialists?
            </h2>
            <p className="text-sd-muted text-sm mb-6 max-w-lg">
              Whether you need a full managed service or project-based support for close cycles and audits, we build an engagement around your exact requirements.
            </p>
            <Link href="/contact" className="inline-flex items-center rounded px-5 py-2.5 text-sm font-semibold bg-sd-pink text-white hover:bg-sd-pink-dark transition-colors">
              Talk to a Specialist →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
