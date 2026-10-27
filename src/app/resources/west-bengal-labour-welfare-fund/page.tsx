import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "West Bengal Labour Welfare Fund (WBLWF): Due Dates, Rates & Form D | Service Dial",
  description:
    "Authoritative guide to West Bengal Labour Welfare Fund compliance. Biannual due dates (July 15 & Jan 15), statutory rates (Employee ₹3, Employer ₹30), and Form D return filing.",
  keywords: [
    "west bengal labour welfare fund",
    "WBLWF rates 2026",
    "wblwf due date july 15 january 15",
    "Form D labour welfare fund west bengal",
    "statutory labour welfare contribution kolkata",
    "WBLWF employer share 30",
  ],
  alternates: {
    canonical: "https://servicedialtm.com/resources/west-bengal-labour-welfare-fund",
  },
  openGraph: {
    title: "West Bengal Labour Welfare Fund (WBLWF) Compliance Guide",
    description:
      "Statutory compliance rules for WBLWF. Contribution rates, half-yearly filing due dates, and employer obligations in West Bengal.",
    url: "https://servicedialtm.com/resources/west-bengal-labour-welfare-fund",
    siteName: "Service Dial",
    type: "article",
  },
};

export default function WestBengalLWFGuidePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the statutory contribution rates for West Bengal Labour Welfare Fund?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the West Bengal Labour Welfare Fund Act, 1974, the employee contribution is ₹3.00 per half-year, and the employer contribution is ₹30.00 per half-year, totaling ₹33.00 per employee biannually (₹66.00 annually).",
        },
      },
      {
        "@type": "Question",
        name: "What are the due dates for remitting WBLWF contributions in West Bengal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WBLWF is remitted biannually: for the first cycle (January–June), the due date is July 15; for the second cycle (July–December), the due date is January 15.",
        },
      },
      {
        "@type": "Question",
        name: "Which statutory return form must be submitted for WBLWF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Employers must submit Form D (Statement of Employer and Employee Contributions) to the Welfare Commissioner along with proof of payment / treasury challan.",
        },
      },
      {
        "@type": "Question",
        name: "Can an employer deduct the ₹30 employer contribution from the employee's salary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Strictly prohibited. Under Section 9 of the Act, deducting the employer's contribution from employee wages is an illegal offence punishable by fine and imprisonment. The employer must absorb the ₹30 as an overhead cost.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-sd-bg-2 border-b border-sd-border py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Regulatory Resources", href: "/resources" },
              { label: "West Bengal Labour Welfare Fund", href: "/resources/west-bengal-labour-welfare-fund" },
            ]}
          />
        </div>
      </div>

      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header Metadata */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sd-pink/10 border border-sd-pink/20 text-sd-pink text-xs font-bold mb-4">
              <span>State Statutory Compliance · West Bengal Labour Welfare Board</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-sd-text tracking-tight leading-tight mb-4">
              West Bengal Labour Welfare Fund (WBLWF): Due Dates, Rates & Form D Guide
            </h1>
            <p className="text-sd-muted text-base sm:text-lg leading-relaxed">
              Complete employer handbook for compliance under the <strong>West Bengal Labour Welfare Fund Act, 1974</strong> and Rules, 1976. Reviewing mandatory biannual remittance cycles (July 15 and January 15), deduction formulas, and Form D filing.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-sd-muted border-t border-sd-border pt-4">
              <span>Regulatory Practice: <strong>Service Dial Compliance Desk</strong></span>
              <span>•</span>
              <span>Applicability: <strong>Establishments employing 5+ workers in West Bengal</strong></span>
            </div>
          </div>

          {/* Quick Schedule Callout */}
          <div className="p-6 rounded-2xl bg-sd-dark text-white mb-12 shadow-lg">
            <h2 className="text-lg font-black text-emerald-400 mb-2 flex items-center gap-2">
              <span>📅</span>
              <span>Biannual Statutory Remittance Calendar</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-xl bg-white/10 border border-white/15">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 block mb-1">
                  Cycle 1 (January to June)
                </span>
                <p className="text-sm font-semibold text-white mb-2">
                  Deduction: <strong className="text-emerald-400 font-bold">June Payroll</strong>
                </p>
                <div className="text-xs text-white/80 space-y-1">
                  <p>• Employee Deduction: <strong>₹3.00</strong></p>
                  <p>• Employer Contribution: <strong>₹30.00</strong></p>
                  <p>• Statutory Due Date: <strong className="text-amber-300 font-bold">JULY 15</strong></p>
                  <p>• Return Required: <strong>Form D</strong></p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/10 border border-white/15">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 block mb-1">
                  Cycle 2 (July to December)
                </span>
                <p className="text-sm font-semibold text-white mb-2">
                  Deduction: <strong className="text-emerald-400 font-bold">December Payroll</strong>
                </p>
                <div className="text-xs text-white/80 space-y-1">
                  <p>• Employee Deduction: <strong>₹3.00</strong></p>
                  <p>• Employer Contribution: <strong>₹30.00</strong></p>
                  <p>• Statutory Due Date: <strong className="text-amber-300 font-bold">JANUARY 15</strong></p>
                  <p>• Return Required: <strong>Form D</strong></p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: Legal Scope */}
          <section className="space-y-4 mb-12">
            <h2 className="text-2xl font-black text-sd-text">
              1. Applicability & Legal Obligations
            </h2>
            <p className="text-sd-muted text-sm leading-relaxed">
              The West Bengal Labour Welfare Fund Act applies to all <strong>factories</strong> (as defined in the Factories Act, 1948), <strong>commercial establishments and shops</strong> (under the West Bengal Shops and Establishments Act, 1963), and <strong>IT/ITeS enterprises</strong> employing <strong>5 or more persons</strong>.
            </p>
            <p className="text-sd-muted text-sm leading-relaxed">
              Every employee on the muster roll during the deduction months of June and December (including permanent, temporary, probationers, and contract staff on direct rolls) is covered.
            </p>
            <div className="p-4 rounded-xl border border-red-200 bg-red-50/50 text-xs text-red-950 space-y-1.5">
              <strong className="block text-sm font-black text-red-900">
                Important Compliance Prohibition: Section 9
              </strong>
              <p>
                Under Section 9 of the West Bengal Labour Welfare Fund Act, 1974, an employer is strictly forbidden from recovering or deducting the employer contribution of ₹30.00 from the wages of an employee. Violations constitute a cognizable offence punishable by fine and statutory prosecution.
              </p>
            </div>
          </section>

          {/* Section 2: Form D Filing & GRIPS Remittance */}
          <section className="space-y-4 mb-12">
            <h2 className="text-2xl font-black text-sd-text">
              2. Form D Statement & Payment Processing
            </h2>
            <p className="text-sd-muted text-sm leading-relaxed">
              Remittance is deposited to the West Bengal Labour Welfare Board using designated head-of-account challans or online payment gateways. Following remittance, the establishment must generate and submit <strong>Form D</strong> detailing:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-sd-text list-disc pl-5">
              <li>Name and full address of the establishment, including corporate registration number.</li>
              <li>Total number of employees on rolls as of June 30 or December 31.</li>
              <li>Total employee contribution deducted (@ ₹3 per head).</li>
              <li>Total employer contribution added (@ ₹30 per head).</li>
              <li>Treasury challan number, payment date, and transaction reference.</li>
            </ul>
          </section>

          {/* Section 3: FAQs */}
          <section className="space-y-4 mb-12">
            <h2 className="text-2xl font-black text-sd-text">
              3. Frequently Asked Questions (WBLWF)
            </h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, i) => (
                <div key={i} className="p-5 rounded-xl border border-sd-border bg-sd-bg-2">
                  <h3 className="text-sm font-bold text-sd-text mb-1.5">{faq.name}</h3>
                  <p className="text-xs text-sd-muted leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Direct CTA */}
          <div className="p-8 rounded-2xl bg-linear-to-r from-sd-dark to-[#1d1633] text-white text-center shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-black mb-3">
              Outsource Your West Bengal Labour Compliances
            </h2>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto mb-6">
              Never miss a July 15 or January 15 deadline. Service Dial automates your WBLWF deductions, treasury deposits, and Form D filings with guaranteed zero-defect compliance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="py-3 px-6 rounded-xl bg-sd-pink text-white font-bold text-xs uppercase tracking-wider hover:bg-sd-pink-dark transition-all"
              >
                Consult Our Labour Law Specialists →
              </Link>
              <Link
                href="/resources/west-bengal-professional-tax-2026"
                className="py-3 px-6 rounded-xl bg-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-all border border-white/20"
              >
                View West Bengal PT Slabs
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
