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
    <footer
      className="relative overflow-hidden text-sd-muted"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #ffffff 8%, #f0f9ff 24%, #e0f2fe 45%, #bae6fd 68%, #7dd3fc 85%, #38bdf8 100%)",
      }}
    >
      {/* Ambient Radial Sky-Cyan Glow at Bottom Center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 left-1/2 -translate-x-1/2 w-[1200px] h-72 rounded-full bg-[#00cfdc]/25 blur-[100px] z-0"
      />

      {/* Main Content Area (4 Columns + Hubs + Legal Row) */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-4">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4 transition-opacity hover:opacity-90">
              <Logo size="md" showTagline={true} />
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm mb-4">
              <strong>Service Dial Talent Management Private Limited</strong> (CIN:{" "}
              <span className="font-mono text-xs text-slate-800">U74999WB2016PTC216954</span>).
              Established 2016 with over 25+ years combined executive leadership tenure. Delivering zero-defect payroll, statutory compliance, and flexi-staffing across India.
            </p>
            <div className="text-xs text-slate-600 space-y-1 mb-4">
              <p>📍 <strong>Registered Office:</strong> 58 (30), S.N. Banerjee Road, Barrackpore, Kolkata, West Bengal 700120</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-slate-700">
              <span className="px-2 py-0.5 border border-slate-200/90 rounded bg-white/80 font-medium">Est. 2016</span>
              <span className="px-2 py-0.5 border border-slate-200/90 rounded bg-white/80 font-medium">DPDP Act Compliant</span>
              <span className="px-2 py-0.5 border border-slate-200/90 rounded bg-white/80 font-medium">Bilateral NDA</span>
              <span className="px-2 py-0.5 border border-slate-200/90 rounded bg-white/80 font-medium">CLRA Licensed</span>
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
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
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
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sd-pink mb-4">
              Enterprise
            </p>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-3 rounded-xl border border-slate-200/90 bg-white/80 text-xs shadow-xs">
              <span className="font-semibold text-slate-900 block mb-1">Confidential SLA Desk</span>
              <p className="text-[11px] text-slate-600">24–72 hour sourcing turnaround under bilateral institutional NDA.</p>
            </div>
          </div>
        </div>

        {/* Lower Spoke */}
        <div className="relative z-10 mt-12 pt-6">
          <div>
            <p className="text-[11px] uppercase tracking-wider font-bold text-slate-800 mb-2.5">
              Key Managed Service Hubs:
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-700">
              <Link href="/locations/west-bengal" className="hover:text-sd-pink transition-colors font-semibold text-slate-900">Kolkata & Barrackpore HQ</Link>
              <Link href="/services/staffing-and-recruitment/bengaluru" className="hover:text-sd-pink transition-colors font-medium">Bengaluru</Link>
              <Link href="/services/staffing-and-recruitment/mumbai" className="hover:text-sd-pink transition-colors font-medium">Mumbai</Link>
              <Link href="/services/staffing-and-recruitment/pune" className="hover:text-sd-pink transition-colors font-medium">Pune</Link>
              <Link href="/services/staffing-and-recruitment/hyderabad" className="hover:text-sd-pink transition-colors font-medium">Hyderabad</Link>
              <Link href="/services/staffing-and-recruitment/delhi" className="hover:text-sd-pink transition-colors font-medium">Delhi NCR</Link>
              <Link href="/services/staffing-and-recruitment/chennai" className="hover:text-sd-pink transition-colors font-medium">Chennai</Link>
              <Link href="/services/staffing-and-recruitment/ahmedabad" className="hover:text-sd-pink transition-colors font-medium">Ahmedabad</Link>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-700 font-medium">
            <p>© {new Date().getFullYear()} Service Dial Talent Management Private Limited. All rights reserved.</p>
            <p>CIN: U74999WB2016PTC216954 · Section 8(2) DPDP Compliant · 100% Audit Readiness</p>
          </div>
        </div>
      </div>

      {/* Dedicated Full-Width Bottom Watermark Stage (Stuck flush to bottom edge, exactly matching MedTech) */}
      <div
        aria-hidden="true"
        className="relative z-0 w-full overflow-hidden leading-none select-none pointer-events-none mt-2 sm:mt-4 flex items-end justify-center"
      >
        <svg
          viewBox="0 0 1680 195"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block select-none translate-y-1 sm:translate-y-2"
          preserveAspectRatio="xMidYMax meet"
        >
          <defs>
            {/* Frosted White Vertical Fill (Solid frosted glass look, zero outline wireframe stroke) */}
            <linearGradient id="medtechFrostFill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.32" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.48" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.65" />
            </linearGradient>
          </defs>

          {/* SERVICE DIAL TM: Solid Frosted White Display Typography Grounded to Bottom Edge */}
          <text
            x="840"
            y="198"
            textAnchor="middle"
            fill="url(#medtechFrostFill)"
            stroke="none"
            fontFamily="'Montserrat', 'Urbanist', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            fontSize="168"
            fontWeight="900"
            fontStyle="italic"
            letterSpacing="0.035em"
            transform="scale(1, 1.4)"
            style={{ transformOrigin: "840px 198px" }}
            className="select-none"
          >
            <tspan>SERVICE</tspan>
            <tspan dx="40">DIAL</tspan>
            <tspan dx="40">TM</tspan>
          </text>
        </svg>
      </div>
    </footer>
  );
}
