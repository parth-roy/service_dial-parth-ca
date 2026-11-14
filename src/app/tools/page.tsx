import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Enterprise B2B Compliance & Financial Tools",
  description:
    "Interactive financial, payroll, and statutory compliance tools for CFOs, HR Directors, and Financial Controllers. Model EPFO ₹25,000 wage ceiling splits, West Bengal Professional Tax revisions, and MSME 43B(h) compliance.",
  alternates: {
    canonical: "https://servicedialtm.com/tools",
  },
  openGraph: {
    title: "Enterprise Compliance & Financial Tools | Service Dial",
    description:
      "Interactive statutory compliance calculators and risk assessment tools for Indian corporations, manufacturing plants, and MSMEs.",
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
  accent: string;
}

const TOOLS_CATALOG: ToolItem[] = [
  {
    slug: "epfo-wage-ceiling-calculator",
    title: "EPFO ₹25,000 Wage Ceiling Split Calculator",
    badge: "Notification S.O. 5109(E)",
    tagline: "Statutory PF, EPS & EDLI Contribution Restructuring",
    description:
      "Model the financial and CTC impact of the enhanced ₹25,000 EPFO statutory wage ceiling. Compute exact employee deductions (12% up to ₹3,000) and employer liabilities (8.33% EPS capped at ₹2,083).",
    href: "/tools/epfo-wage-ceiling-calculator",
    features: [
      "Pre vs Post September 2026 pro-rata dual period calculation",
      "Employer outgo variance analysis (+₹1,300/worker/month impact)",
      "CTC restructuring formulas to preserve employee take-home pay",
      "Statutory transition guidelines for SAP, Oracle, and Tally ERPs",
    ],
    ctaText: "Launch EPFO Calculator →",
    accent: "from-[#2e0d82] to-[#01adf7]",
  },
  {
    slug: "wb-professional-tax-calculator",
    title: "West Bengal Professional Tax Calculator (2026 Revision)",
    badge: "Notification No. 1607-F.T.",
    tagline: "Revised Salaried Slabs Effective 1 October 2026",
    description:
      "Determine accurate monthly Professional Tax deductions under West Bengal's newly restructured tax brackets. Verify exemption thresholds doubled from ₹10,000 to ₹20,000 and the constitutional ₹2,500 annual cap.",
    href: "/tools/wb-professional-tax-calculator",
    features: [
      "Gross salary to net PT liability instant computation",
      "Comparison matrix: Old vs Revised slabs (Nil, ₹100, ₹140, ₹170, ₹208)",
      "GRIPS IFMS payment head mapping (Head 0028-00-107)",
      "Annual Form III and Form III-A electronic filing checklist",
    ],
    ctaText: "Launch WB PT Calculator →",
    accent: "from-[#01adf7] to-[#2e0d82]",
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
    accent: "from-[#b80f68] via-[#2e0d82] to-[#01adf7]",
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
    accent: "from-[#2e0d82] to-[#b80f68]",
  },
  {
    slug: "caro-fixed-asset-audit-estimator",
    title: "CARO 2020 Fixed Asset & Inventory Audit Planner",
    badge: "Clause 3(i) & 3(ii)",
    tagline: "CMA-Led Physical Asset Verification & FAR Reconciliation",
    description:
      "Evaluate audit readiness for physical fixed asset verification, barcode/RFID tagging, and warehouse stock counting across manufacturing plants and multi-location corporate facilities under CARO 2020.",
    href: "/services/finance-and-audit/fixed-asset-verification-and-tagging",
    features: [
      "Fixed Asset Register (FAR) discrepancy identification",
      "Ghost asset write-off and Ind AS 16 componentization roadmap",
      "Physical stock-to-general-ledger variance testing (>10% threshold)",
      "Consortium bank drawing power (DP) audit compliance binder",
    ],
    ctaText: "Explore CARO 2020 Audit →",
    accent: "from-[#01adf7] via-[#2e0d82] to-[#FF6FBF]",
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

  const primaryTool = TOOLS_CATALOG[0];
  const otherTools = TOOLS_CATALOG.slice(1);

  return (
    <div className="relative min-h-screen bg-[#F8F9FA] text-slate-900 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Subtle Top Ambient Brand Light Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-[#00cfdc]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[400px] bg-[#b80f68]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Top Breadcrumb Bar */}
      <div className="relative pt-8 pb-4 border-b border-slate-200/70 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-500">
              <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-slate-900 font-medium">Compliance &amp; Financial Tools</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
              <span className="font-mono text-[#0284c7]">6 Interactive Simulators</span>
              <span className="text-slate-300">•</span>
              <span>Updated for 2026 Notifications</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#b80f68] shrink-0" />
                <span className="font-outfit text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.24em] text-slate-900">
                  ENTERPRISE REGULATORY SUITE · 2026 RELEASES
                </span>
                <span className="h-px flex-1 bg-slate-200" />
              </div>

              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
                Corporate compliance, payroll &amp;{" "}
                <span className="bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] bg-clip-text text-transparent">
                  financial tools.
                </span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
                Equip your corporate finance, HR, and legal operations teams with authoritative estimators, statutory rate models, and regulatory split calculators designed specifically for Indian enterprises and manufacturing plants.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Primary Featured Tool Spotlight */}
      <section className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={30}>
            <div className="relative rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-sm overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7]" />

              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-[#0284c7] border border-slate-200">
                      {primaryTool.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {primaryTool.tagline}
                    </span>
                  </div>

                  <h2 className="font-outfit text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
                    <Link href={primaryTool.href} className="hover:text-[#b80f68] transition-colors">
                      {primaryTool.title}
                    </Link>
                  </h2>

                  <p className="font-sans text-sm text-slate-600 leading-relaxed">
                    {primaryTool.description}
                  </p>

                  <div className="pt-2">
                    <div className="grid sm:grid-cols-2 gap-2 text-xs font-mono text-slate-700">
                      {primaryTool.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                          <span className="text-[#0284c7] font-bold">✓</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8 flex flex-col justify-between space-y-6 text-center">
                  <div>
                    <div className="text-xs font-mono uppercase text-[#b80f68] font-bold mb-2">Instant Online Modeling</div>
                    <div className="font-outfit text-4xl font-black text-slate-900">50 to 5,000+</div>
                    <div className="text-xs text-slate-600 mt-1">Headcount Coverage with 100% Statutory Indemnity</div>
                  </div>

                  <Link
                    href={primaryTool.href}
                    className="w-full inline-flex items-center justify-center rounded-xl py-3.5 px-6 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all"
                  >
                    {primaryTool.ctaText}
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Grid of Remaining Specialized Tools */}
      <section className="relative py-8 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-slate-200 pb-4 mb-8 flex items-center justify-between">
            <div>
              <span className="text-xs uppercase font-mono tracking-wider text-[#b80f68] font-bold block mb-1">
                Specialized Regulatory Calculators
              </span>
              <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                Statutory Modeling Tools
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">{otherTools.length} Additional Simulators</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherTools.map((tool, idx) => (
              <ScrollReveal
                key={tool.slug}
                direction={idx % 2 === 0 ? "left" : "right"}
                distance={25}
                delay={idx * 70}
              >
                <div className="h-full relative rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between group overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tool.accent}`} />

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0284c7] bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full">
                        {tool.badge}
                      </span>
                    </div>

                    <h3 className="font-outfit text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#b80f68] transition-colors leading-snug mb-1">
                      <Link href={tool.href}>
                        {tool.title}
                      </Link>
                    </h3>

                    <p className="text-xs font-mono text-slate-500 mb-3 line-clamp-1">
                      {tool.tagline}
                    </p>

                    <p className="font-sans text-xs text-slate-600 leading-relaxed mb-5 line-clamp-3">
                      {tool.description}
                    </p>

                    <div className="pt-3 border-t border-slate-100 mb-6">
                      <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold block mb-2">
                        Key Capabilities:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {tool.features.slice(0, 3).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-1.5 line-clamp-1">
                            <span className="text-[#0284c7] font-bold shrink-0">✓</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    href={tool.href}
                    className="w-full inline-flex items-center justify-center rounded-xl py-2.5 px-4 text-xs font-bold bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 transition-all text-center"
                  >
                    {tool.ctaText}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual CMA & Financial Audit Consultation Dock */}
      <section className="relative py-12 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="relative rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-8 shadow-sm overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7]" />
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#0284c7] font-bold block mb-1">
                  Virtual CMA &amp; Compliance Audit Division
                </span>
                <h3 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                  Need a Custom Statutory or Fixed Asset Audit?
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-xl mt-2 leading-relaxed">
                  Whether you need CARO 2020 multi-plant fixed asset tagging, Ind AS 16 componentization, or end-to-end 3-way AP automation, our certified team delivers audit-defensible execution under mutual NDA.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all"
              >
                Request Enterprise Consultation →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
