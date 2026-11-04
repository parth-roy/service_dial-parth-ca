import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Enterprise B2B Compliance & Financial Tools",
  description:
    "Interactive financial, payroll, and statutory compliance tools for CFOs, HR Directors, and Financial Controllers. Model EPFO ₹25,000 wage ceiling splits, West Bengal Professional Tax revisions, and managed payroll fees.",
  alternates: {
    canonical: "https://servicedialtm.com/tools",
  },
  openGraph: {
    title: "Enterprise Compliance & Financial Tools | Service Dial",
    description:
      "Interactive compliance calculators and fee estimators for Indian corporations, manufacturing plants, and MSMEs.",
    url: "https://servicedialtm.com/tools",
    siteName: "Service Dial",
    type: "website",
  },
};

interface ToolItem {
  slug: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  href: string;
  features: string[];
  ctaText: string;
  isExternalOrAnchor?: boolean;
}

const TOOLS_CATALOG: ToolItem[] = [
  {
    slug: "payroll-fee-estimator",
    title: "Payroll & Statutory Compliance Fee Estimator",
    badge: "2026 Live Pricing",
    tagline: "Dynamic PEPM (Per Employee Per Month) Cost Modeling",
    description:
      "Calculate your monthly outsourced payroll and statutory compliance investment across 50 to 5,000+ employees. Incorporates multi-state PF/ESIC returns, Professional Tax schedules, and employee self-service portal licensing.",
    href: "/tools/payroll-fee-estimator",
    features: [
      "Instant PEPM pricing breakdown based on headcount tier",
      "Statutory compliance add-on selector (PF, ESIC, PT, LWF)",
      "Zero hidden fees with 100% statutory indemnity coverage",
      "Detailed downloadable PDF/Excel estimation quote",
    ],
    ctaText: "Launch Fee Estimator →",
  },
  {
    slug: "epfo-wage-ceiling-calculator",
    title: "EPFO ₹25,000 Wage Ceiling Split Calculator",
    badge: "Notification S.O. 5109(E)",
    tagline: "Statutory PF, EPS & EDLI Contribution Restructuring",
    description:
      "Model the financial and CTC impact of the enhanced ₹25,000 EPFO statutory wage ceiling. Compute exact employee deductions (12% up to ₹3,000) and employer liabilities (8.33% EPS capped at ₹2,083, 3.67% EPF, EDLI, and admin charges).",
    href: "/tools/epfo-wage-ceiling-calculator",
    features: [
      "Pre vs Post September 2026 pro-rata dual period calculation",
      "Employer outgo variance analysis (+₹1,300/worker/month impact)",
      "CTC restructuring formulas to preserve employee take-home pay",
      "Statutory transition guidelines for SAP, Oracle, and Tally ERPs",
    ],
    ctaText: "Launch EPFO Calculator →",
  },
  {
    slug: "wb-professional-tax-calculator",
    title: "West Bengal Professional Tax Calculator (2026 Revision)",
    badge: "Notification No. 1607-F.T.",
    tagline: "Revised Salaried Slabs Effective 1 October 2026",
    description:
      "Determine accurate monthly Professional Tax deductions under West Bengal's newly restructured tax brackets. Verify exemption thresholds doubled from ₹10,000 to ₹20,000 and the constitutional ₹2,500 annual cap under Article 276(2).",
    href: "/tools/wb-professional-tax-calculator",
    features: [
      "Gross salary to net PT liability instant computation",
      "Comparison matrix: Old vs Revised slabs (Nil, ₹100, ₹140, ₹170, ₹208)",
      "GRIPS IFMS payment head mapping (Head 0028-00-107)",
      "Annual Form III and Form III-A electronic filing checklist",
    ],
    ctaText: "Launch WB PT Calculator →",
  },
  {
    slug: "wb-labour-welfare-fund-guide",
    title: "West Bengal Labour Welfare Fund (WBLWF) Scheduler",
    badge: "Bi-Annual Remittance",
    tagline: "Statutory Deductions & Form D Compliance Matrix",
    description:
      "Track semi-annual Labour Welfare Fund contributions (₹3 Employee + ₹30 Employer = ₹33/worker) across June 30 and December 31 cutoffs. Avoid 18% penal interest under Section 11 of the WB LWF Act.",
    href: "/resources/west-bengal-labour-welfare-fund",
    features: [
      "Bi-annual compliance calendar (15 July & 15 January deadlines)",
      "Eligible employee classification vs managerial exemption limits",
      "Statement Form D preparation and payment verification",
      "Penal provisions audit and recovery protection guidelines",
    ],
    ctaText: "View WBLWF Rates & Due Dates →",
  },
  {
    slug: "caro-fixed-asset-audit-estimator",
    title: "CARO 2020 Fixed Asset & Inventory Audit Planner",
    badge: "Clause 3(i) & 3(ii)",
    tagline: "CMA-Led Physical Asset Verification & FAR Reconciliation",
    description:
      "Evaluate audit readiness for physical fixed asset verification, barcode/RFID tagging, and warehouse stock counting across manufacturing plants and multi-location corporate facilities under Companies (Auditor's Report) Order.",
    href: "/services/finance-and-audit/fixed-asset-verification-and-tagging",
    features: [
      "Fixed Asset Register (FAR) discrepancy identification",
      "Ghost asset write-off and Ind AS 16 componentization roadmap",
      "Physical stock-to-general-ledger variance testing (>10% threshold)",
      "Consortium bank drawing power (DP) audit compliance binder",
    ],
    ctaText: "Explore CARO 2020 Audit →",
  },
  {
    slug: "msme-43bh-payment-deadline-tracker",
    title: "MSME Section 43B(h) 45-Day Payment Gatekeeper",
    badge: "Income Tax Compliance",
    tagline: "Protect Deductions & Prevent Disallowances",
    description:
      "Track payment deadlines for micro and small enterprise vendors to guarantee full tax deductibility. Automatically flags invoices crossing the 15-day (without agreement) or 45-day (with agreement) statutory threshold.",
    href: "/tools/msme-43bh-calculator",
    features: [
      "Udyam registration validation and vendor classification",
      "Compound interest calculation at 3x RBI Bank Rate for delayed dues",
      "Half-yearly Form MSME-1 reporting schedule for ROC",
      "Automated weekly payment run prioritization advice",
    ],
    ctaText: "Launch 43B(h) Gatekeeper →",
  },
];

export default function ToolsDirectoryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Service Dial Enterprise Compliance & Financial Tools",
    description: metadata.description,
    url: "https://servicedialtm.com/tools",
    provider: {
      "@type": "Organization",
      name: "Service Dial Talent Management",
      url: "https://servicedialtm.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Compliance & Financial Tools", href: "/tools" },
            ]}
          />

          {/* Header */}
          <div className="mt-4 mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sd-pink/30 bg-sd-pink/5 px-3 py-1 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-sd-pink animate-pulse" />
              <span className="text-xs font-semibold text-sd-pink">
                Enterprise Regulatory Suite · Updated for 2026 Notifications
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-sd-text leading-[1.15]">
              Corporate Compliance, Payroll & Financial Tools
            </h1>

            <p className="mt-4 text-base sm:text-lg text-sd-muted leading-relaxed">
              Equip your corporate finance, HR, and legal operations teams with authoritative estimators, statutory rate models, and regulatory split calculators designed for Indian enterprises.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {TOOLS_CATALOG.map((tool) => (
              <div
                key={tool.slug}
                className="flex flex-col justify-between rounded-xl border border-sd-border bg-white p-6 sm:p-7 shadow-xs hover:border-sd-pink/40 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-sd-pink bg-sd-pink/10 px-2.5 py-0.5 rounded-md border border-sd-pink/20">
                      {tool.badge}
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-sd-text group-hover:text-sd-pink transition-colors leading-snug mb-1.5">
                    {tool.title}
                  </h2>

                  <p className="text-xs font-semibold text-slate-500 mb-3">
                    {tool.tagline}
                  </p>

                  <p className="text-xs text-sd-muted leading-relaxed mb-5">
                    {tool.description}
                  </p>

                  <div className="pt-4 border-t border-sd-border/70 mb-6">
                    <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block mb-2">
                      Key Capabilities:
                    </span>
                    <ul className="space-y-1.5 text-xs text-sd-muted">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href={tool.href}
                  className="w-full inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-xs font-bold bg-sd-bg-2 text-sd-text border border-sd-border group-hover:bg-sd-pink group-hover:text-white group-hover:border-sd-pink transition-all text-center"
                >
                  {tool.ctaText}
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom Custom Advisory Banner */}
          <div className="rounded-2xl border border-sd-pink/20 bg-gradient-to-r from-sd-pink/5 via-white to-sd-pink/5 p-8 sm:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-xs">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-sd-pink uppercase tracking-wider block mb-1">
                Need a Custom Statutory or Financial Process Audit?
              </span>
              <h3 className="text-2xl font-black text-sd-text">
                Partner with Service Dial's Virtual CMA & Compliance Division
              </h3>
              <p className="text-xs sm:text-sm text-sd-muted mt-2 leading-relaxed">
                Whether you need multi-plant fixed asset tagging under CARO 2020, end-to-end 3-way accounts payable governance, or seamless transition to the EPFO ₹25k ceiling, our team delivers audit-defensible execution under strict NDA.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-xl px-6 py-3.5 text-xs sm:text-sm font-bold bg-sd-pink text-white hover:bg-sd-pink-dark transition-all shadow-md active:scale-95"
            >
              Request Enterprise Consultation →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
