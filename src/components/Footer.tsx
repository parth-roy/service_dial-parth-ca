import Link from "next/link";
import Logo from "@/components/Logo";

const services = [
  { label: "HRMS & Payroll Outsourcing", href: "/services/hrms-and-payroll" },
  { label: "Statutory Labour Compliance", href: "/services/compliance-services" },
  { label: "Staffing & Recruitment", href: "/services/staffing-and-recruitment" },
  { label: "Finance & Audit", href: "/services/finance-and-audit" },
  { label: "Trademark & IP Services", href: "/ip-services" },
];

const regulatoryResources = [
  { label: "EPFO ₹25,000 Wage Ceiling Guide", href: "/resources/epfo-wage-ceiling-25000" },
  { label: "West Bengal Professional Tax 2026", href: "/resources/west-bengal-professional-tax-2026" },
  { label: "WB Labour Welfare Fund (LWF)", href: "/resources/west-bengal-labour-welfare-fund" },
  { label: "Payroll Fee Estimator Tool", href: "/tools/payroll-fee-estimator" },
  { label: "Industry Compliance Verticals", href: "/industries" },
];

const company = [
  { label: "About Service Dial", href: "/about" },
  { label: "Compliance Case Studies", href: "/case-studies" },
  { label: "Locations Directory", href: "/locations" },
  { label: "Contact & Mandate Desk", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-sd-border bg-sd-bg-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4 transition-opacity hover:opacity-90">
              <Logo size="md" showTagline={true} />
            </Link>
            <p className="text-sd-muted text-sm leading-relaxed max-w-sm mb-4">
              <strong>Service Dial Talent Management Private Limited</strong> (CIN: <span className="font-mono text-xs text-sd-text">U74999WB2016PTC216954</span>).
              Established 2016 with over 25+ years combined executive leadership tenure. Delivering zero-defect payroll, statutory compliance, and flexi-staffing across India.
            </p>
            <div className="text-xs text-sd-muted space-y-1 mb-4">
              <p>📍 <strong>Registered Office:</strong> 58 (30), S.N. Banerjee Road, Barrackpore, Kolkata, West Bengal 700120</p>
              <p>📞 <strong>Corporate Desk:</strong> <a href="tel:+919330490777" className="text-sd-text font-semibold hover:text-sd-pink">+91 93304 90777</a></p>
              <p>✉️ <strong>Direct Inquiries:</strong> <a href="mailto:connect@servicedialtm.com" className="text-sd-text font-semibold hover:text-sd-pink">connect@servicedialtm.com</a></p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-sd-muted">
              <span className="px-2 py-0.5 border border-sd-border rounded bg-white font-medium">Est. 2016</span>
              <span className="px-2 py-0.5 border border-sd-border rounded bg-white font-medium">DPDP Act Compliant</span>
              <span className="px-2 py-0.5 border border-sd-border rounded bg-white font-medium">Bilateral NDA</span>
              <span className="px-2 py-0.5 border border-sd-border rounded bg-white font-medium">CLRA Licensed</span>
            </div>
          </div>

          {/* Managed Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sd-pink mb-4">
              Managed Services
            </p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-sd-muted hover:text-sd-text transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 2026 Regulatory Hub */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sd-pink mb-4">
              2026 Regulatory Desk
            </p>
            <ul className="space-y-2.5">
              {regulatoryResources.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="text-sm text-sd-muted hover:text-sd-text transition-colors"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sd-pink mb-4">
              Enterprise
            </p>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-sd-muted hover:text-sd-text transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-3 rounded-lg border border-sd-border bg-white text-xs">
              <span className="font-semibold text-sd-text block mb-1">Confidential SLA Desk</span>
              <p className="text-[11px] text-sd-muted">24–72 hour sourcing turnaround under bilateral institutional NDA.</p>
            </div>
          </div>
        </div>

        {/* Top Metros Link Spoke */}
        <div className="mt-10 pt-6 border-t border-sd-border">
          <p className="text-[11px] uppercase tracking-wider font-bold text-sd-muted mb-2.5">
            Key Managed Service Hubs:
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-sd-muted">
            <Link href="/locations/west-bengal" className="hover:text-sd-pink transition-colors font-medium">Kolkata & Barrackpore HQ</Link>
            <Link href="/services/staffing-and-recruitment/bengaluru" className="hover:text-sd-pink transition-colors">Bengaluru</Link>
            <Link href="/services/staffing-and-recruitment/mumbai" className="hover:text-sd-pink transition-colors">Mumbai</Link>
            <Link href="/services/staffing-and-recruitment/pune" className="hover:text-sd-pink transition-colors">Pune</Link>
            <Link href="/services/staffing-and-recruitment/hyderabad" className="hover:text-sd-pink transition-colors">Hyderabad</Link>
            <Link href="/services/staffing-and-recruitment/delhi" className="hover:text-sd-pink transition-colors">Delhi NCR</Link>
            <Link href="/services/staffing-and-recruitment/chennai" className="hover:text-sd-pink transition-colors">Chennai</Link>
            <Link href="/services/staffing-and-recruitment/ahmedabad" className="hover:text-sd-pink transition-colors">Ahmedabad</Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-sd-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sd-muted">
          <p>© {new Date().getFullYear()} Service Dial Talent Management Private Limited. All rights reserved.</p>
          <p>CIN: U74999WB2016PTC216954 · Section 8(2) DPDP Compliant · 100% Audit Readiness</p>
        </div>
      </div>
    </footer>
  );
}
