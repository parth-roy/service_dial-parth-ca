import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";
import PayrollFeeEstimator from "@/components/calculator/PayrollFeeEstimator";

export const metadata: Metadata = {
  title: "Outsourced Payroll & Statutory Compliance Services in Kolkata | Service Dial",
  description:
    "End-to-end payroll processing and 100% statutory labour law compliance for enterprises in Kolkata and West Bengal. Zero penalty guarantee. Est. 2016.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PayrollKolkataLandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-sd-text font-sans selection:bg-sd-pink selection:text-white">
      {/* High-Converting Minimal Header (No distraction links) */}
      <header className="border-b border-sd-border bg-white sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <Logo size="md" showTagline={true} />
          </Link>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right">
              <span className="text-[11px] text-sd-muted font-bold block uppercase tracking-wider">
                Direct Corporate Desk
              </span>
              <a
                href="tel:+919330490777"
                className="text-sm font-black text-sd-text hover:text-sd-pink transition-colors"
              >
                +91 93304 90777
              </a>
            </div>
            <a
              href="https://wa.me/919330490777?text=Hi%20Service%20Dial,%20we%20are%20looking%20for%20payroll%20and%20compliance%20services%20in%20Kolkata"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-700 transition-all flex items-center gap-1.5 shadow-xs"
            >
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-linear-to-b from-white to-slate-50 border-b border-sd-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-4">
              <span>✓ Kolkata & West Bengal Specialization · Est. 2016</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-sd-text tracking-tight mb-4 leading-tight">
              Enterprise Payroll Outsourcing & Statutory Compliance in Kolkata
            </h1>
            <p className="text-sd-muted text-base sm:text-lg leading-relaxed">
              Eliminate payroll errors, late filings, and statutory penalties. Service Dial delivers 100% compliant salary disbursement, EPFO ₹25,000 threshold management, and West Bengal Professional Tax administration for mid-market and enterprise teams.
            </p>
          </div>

          {/* Quick Value Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {[
              { label: "Statutory Penalty Indemnity", value: "100% Guaranteed" },
              { label: "Salary Payout Accuracy", value: "Zero-Defect SLA" },
              { label: "Local West Bengal Desk", value: "Barrackpore & Kolkata" },
              { label: "Data Security Standard", value: "DPDP Act Compliant" },
            ].map((stat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-sd-border text-center shadow-xs">
                <span className="text-base sm:text-lg font-black text-sd-pink block">{stat.value}</span>
                <span className="text-[11px] text-sd-muted font-medium">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Embedded Interactive Fee Estimator */}
          <div className="max-w-5xl mx-auto">
            <PayrollFeeEstimator />
          </div>
        </div>
      </section>

      {/* Why Choose Service Dial */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-sd-text mb-3">
              Why Kolkata Enterprises Trust Service Dial
            </h2>
            <p className="text-sd-muted text-sm">
              From Salt Lake Sector V tech startups to Howrah and Dankuni manufacturing units, we handle your end-to-end statutory liabilities.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl bg-white border border-sd-border shadow-xs">
              <div className="h-10 w-10 rounded-xl bg-sd-pink/10 text-sd-pink font-black flex items-center justify-center mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-sd-text mb-2">
                Local Statutory Precision
              </h3>
              <p className="text-xs text-sd-muted leading-relaxed">
                Headquartered in Barrackpore, West Bengal, our compliance officers have direct relationships with local labour departments, ensuring seamless WB PT (Form III-A) and Labour Welfare Fund filings.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-sd-border shadow-xs">
              <div className="h-10 w-10 rounded-xl bg-sd-pink/10 text-sd-pink font-black flex items-center justify-center mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-sd-text mb-2">
                2026 Regulatory Automation
              </h3>
              <p className="text-xs text-sd-muted leading-relaxed">
                Pre-configured for the ₹25,000 EPFO wage ceiling hike and the October 1, 2026 West Bengal Professional Tax schedule revisions. No retroactive compliance headaches.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-sd-border shadow-xs">
              <div className="h-10 w-10 rounded-xl bg-sd-pink/10 text-sd-pink font-black flex items-center justify-center mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-sd-text mb-2">
                Dedicated Account Manager
              </h3>
              <p className="text-xs text-sd-muted leading-relaxed">
                No generic ticketing queues. You receive a dedicated Senior Payroll Specialist with direct phone and WhatsApp availability for instant query resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="border-t border-sd-border py-8 bg-white text-center text-xs text-sd-muted">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-2">
            <strong>Service Dial Talent Management Private Limited</strong> · CIN: U74999WB2016PTC216954
          </p>
          <p className="text-[11px]">
            Registered Office: 58 (30), S.N. Banerjee Road, Barrackpore, Kolkata, West Bengal 700120 · Tel: +91 93304 90777 · Email: connect@servicedialtm.com
          </p>
        </div>
      </footer>
    </div>
  );
}
