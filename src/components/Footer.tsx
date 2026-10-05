import Link from "next/link";
import Logo from "@/components/Logo";

const services = [
  { label: "Staffing & Recruitment", href: "/services/staffing-and-recruitment" },
  { label: "HRMS & Payroll", href: "/services/hrms-and-payroll" },
  { label: "Finance & Audit", href: "/services/finance-and-audit" },
  { label: "Compliance Services", href: "/services/compliance-services" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Case Studies", href: "/about#case-studies" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-sd-border bg-sd-bg-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4 transition-opacity hover:opacity-90">
              <Logo size="md" showTagline={true} />
            </Link>
            <p className="text-sd-muted text-sm leading-relaxed max-w-xs">
              Simplifying Business since 2016. Technology-driven, tailor-made
              solutions for enterprises across India and globally.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-sd-muted">
              <span className="px-2 py-1 border border-sd-border rounded bg-white">Est. 2016</span>
              <span className="px-2 py-1 border border-sd-border rounded bg-white">NDA Protected</span>
              <span className="px-2 py-1 border border-sd-border rounded bg-white">Pan-India</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sd-pink mb-4">
              Services
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

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sd-pink mb-4">
              Company
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
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-sd-pink mb-2">
                Contact
              </p>
              <a
                href="mailto:info@servicedial.in"
                className="text-sm text-sd-muted hover:text-sd-text transition-colors"
              >
                info@servicedial.in
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-sd-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sd-muted">
          <p>© {new Date().getFullYear()} Service Dial. All rights reserved.</p>
          <p>100% Referenceable Clients · Strict NDA · 24–72 hr Sourcing</p>
        </div>
      </div>
    </footer>
  );
}
