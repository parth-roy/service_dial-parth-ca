import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "IT, ITeS & Startup Payroll & Compliance Solutions | Service Dial",
  description:
    "End-to-end payroll outsourcing and statutory compliance for software, fintech, and ITeS enterprises. 24/7 night shift permissions, multi-state PT, and ESOP withholding.",
  keywords: [
    "IT company payroll outsourcing India",
    "ITeS statutory compliance Salt Lake Sector V",
    "startup payroll management Bangalore Kolkata",
    "remote employee professional tax compliance",
    "Shops and establishments 24/7 IT exemption",
  ],
  alternates: {
    canonical: "https://servicedialtm.com/industries/it-ites-startups",
  },
};

export default function ItItesStartupsPage() {
  return (
    <>
      <div className="bg-sd-bg-2 border-b border-sd-border py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: "IT & Startups", href: "/industries/it-ites-startups" },
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
              IT, ITeS & Tech Startup Payroll & Compliance Solutions
            </h1>
            <p className="text-sd-muted text-base sm:text-lg leading-relaxed">
              Designed specifically for fast-growing engineering teams, SaaS businesses, and global capability centers (GCCs). Managing remote talent across multiple states, complex equity compensation, and continuous shift operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Multi-State Remote Work PT",
                desc: "Automatic tax deduction matching the employee's residential state (West Bengal, Karnataka, Maharashtra, Telangana) regardless of headquarter location.",
              },
              {
                title: "24/7 Operating Exemptions",
                desc: "Statutory compliance under State Shops & Establishments Acts for continuous service delivery, night shift permissions, and cab transport compliance for female staff.",
              },
              {
                title: "ESOP & Perquisite Tax",
                desc: "Accurate TDS computation on stock options (perquisite tax at exercise) under Section 192 of the Income Tax Act.",
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
              Key Compliance Challenges in Modern Tech Companies
            </h2>
            <div className="space-y-4 text-sm text-sd-muted leading-relaxed">
              <p>
                As tech companies scale past 50 employees, compliance friction rapidly escalates. Remote hiring across Tier-1 and Tier-2 Indian cities triggers registrations under multiple State Professional Tax departments. Failure to deduct according to local slabs (such as West Bengal&apos;s revised October 2026 schedule or Karnataka&apos;s annual ₹2,400 cap) results in steep statutory demand notices.
              </p>
              <p>
                Service Dial integrates directly with your existing developer workflows and HRMS stacks (Slack, Google Workspace, biometric APIs), ensuring 100% on-time salary credit, automated digital Form 16 issuance, and comprehensive intellectual property (IP) assignment documentation.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="p-8 rounded-2xl bg-sd-dark text-white text-center shadow-xl">
            <h2 className="text-2xl font-black mb-2">Powering Tech Workforces Across India</h2>
            <p className="text-xs sm:text-sm text-white/70 max-w-lg mx-auto mb-6">
              From Salt Lake Sector V to Bengaluru and Hyderabad, Service Dial delivers zero-defect payroll and airtight compliance for high-velocity tech teams.
            </p>
            <Link
              href="/contact"
              className="py-3 px-6 rounded-xl bg-sd-pink text-white font-bold text-xs uppercase tracking-wider hover:bg-sd-pink-dark transition-all inline-block"
            >
              Get Tech Workforce Proposal →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
