"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Logo from "@/components/Logo";

// ─── Mega-Menu Data Model ─────────────────────────────────────────────────────

interface SubService {
  title: string;
  desc: string;
  href: string;
}

interface ServiceCategory {
  id: string;
  label: string;
  title: string;
  href: string;
  tagline: string;
  services: SubService[];
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "payroll",
    label: "HRMS & PAYROLL",
    title: "HRMS & Payroll Management",
    href: "/services/hrms-and-payroll",
    tagline: "End-to-end cloud payroll processing, automated salary disbursement, and multi-state tax withholding.",
    services: [
      {
        title: "Payroll Processing & Disbursement",
        desc: "Accurate gross-to-net computation, salary bank advice files, and 100% on-time disbursement guarantee.",
        href: "/services/hrms-and-payroll",
      },
      {
        title: "Vendor & Contractor Payroll",
        desc: "Multi-vendor workforce compliance, wage reconciliation, PF/ESI challans, and statutory contractor audits.",
        href: "/services/hrms-and-payroll",
      },
      {
        title: "TDS 24Q & Digital Form 16",
        desc: "Automated salary tax withholding under Section 192, quarterly e-filings, and digital Form 16 Part A/B.",
        href: "/services/hrms-and-payroll",
      },
      {
        title: "Interactive Fee Estimator",
        desc: "Simulate custom PEPM retainers and model cost savings compared to an in-house payroll department.",
        href: "/tools/payroll-fee-estimator",
      },
    ],
  },
  {
    id: "compliance",
    label: "STATUTORY COMPLIANCE",
    title: "Labour Law & Statutory Desk",
    href: "/services/compliance-services",
    tagline: "Proactive labour law compliance, EPFO/ESIC administration, and factory inspection assurance.",
    services: [
      {
        title: "Statutory Filings & Remittances",
        desc: "Monthly EPFO, ESIC, Professional Tax (Form III-A), and bi-annual Labour Welfare Fund returns.",
        href: "/services/compliance-services",
      },
      {
        title: "Labour Law Inspection Defense",
        desc: "Audit representation, registers maintenance (Forms XVI, XVII, XX), and regulatory show-cause handling.",
        href: "/services/compliance-services",
      },
      {
        title: "2026 EPFO Wage Ceiling Desk",
        desc: "Pre-configured payroll modeling for the ₹25,000 EPFO statutory wage threshold enhancement.",
        href: "/resources/epfo-wage-ceiling-25000",
      },
      {
        title: "West Bengal PT 2026 Revision",
        desc: "Advisory and automated salary slab adjustments for the revised West Bengal Professional Tax schedules.",
        href: "/resources/west-bengal-professional-tax-2026",
      },
    ],
  },
  {
    id: "staffing",
    label: "STAFFING & RECRUITMENT",
    title: "Staffing & Executive Sourcing",
    href: "/services/staffing-and-recruitment",
    tagline: "Pan-India executive search, specialized tech recruitment, and verified contract workforce deployment.",
    services: [
      {
        title: "IT & Specialist Staffing",
        desc: "7:10 submission-to-hire ratio across AI/ML, cloud engineering, data science, and SAP consultants.",
        href: "/services/staffing-and-recruitment",
      },
      {
        title: "CXO Leadership Search",
        desc: "Confidential executive hiring, market talent mapping, and green-field C-suite buildouts under bilateral NDA.",
        href: "/services/staffing-and-recruitment",
      },
      {
        title: "General Flexi-Staffing",
        desc: "Mid-management and operational staffing mapped to your headcount plans across BFSI, IT, and retail.",
        href: "/services/staffing-and-recruitment",
      },
      {
        title: "Blue Collar & CLRA Staffing",
        desc: "Background-checked, compliance-onboarded workforce for warehousing, manufacturing, and facilities.",
        href: "/services/staffing-and-recruitment",
      },
    ],
  },
  {
    id: "finance",
    label: "FINANCE & AUDIT",
    title: "Finance & Accounting Services",
    href: "/services/finance-and-audit",
    tagline: "Expert corporate accounting, accounts payable/receivable automation, and statutory internal audits.",
    services: [
      {
        title: "Accounts Payable (AP)",
        desc: "3-way invoice matching, automated payment runs, vendor reconciliation, and clean ledger hygiene.",
        href: "/services/finance-and-audit",
      },
      {
        title: "Accounts Receivable (AR)",
        desc: "Customer billing, aging analysis, dispute resolution, and DSO optimization accelerating working capital.",
        href: "/services/finance-and-audit",
      },
      {
        title: "Record to Report (R2R)",
        desc: "Period-end financial close, intercompany reconciliation, balance sheet substantiation, and MIS reports.",
        href: "/services/finance-and-audit",
      },
      {
        title: "Internal & Statutory Audit",
        desc: "Control testing, fixed asset verification, and documentation maintenance for inspection readiness.",
        href: "/services/finance-and-audit",
      },
    ],
  },
  {
    id: "ip",
    label: "IP & TRADEMARKS",
    title: "Intellectual Property & Trademarks",
    href: "/ip-services",
    tagline: "Comprehensive IP protection, trademark registration across classes 1–45, and real-time registry tools.",
    services: [
      {
        title: "Trademark Registration & Filing",
        desc: "Complete IP filing before the Indian Trademark Registry with comprehensive class mapping support.",
        href: "/ip-services",
      },
      {
        title: "CGPDTM Status Check Tool",
        desc: "Real-time online trademark tracking, examination status, and hearing cause list lookup.",
        href: "/ip-services/tools/status-check",
      },
      {
        title: "Statutory IP Fee Calculator",
        desc: "Calculate official Indian government trademark fees, attorney retainers, and filing costs.",
        href: "/ip-services/tools/fee-calculator",
      },
      {
        title: "Pan-India Jurisdiction Filing",
        desc: "Direct jurisdictional support across Mumbai, Delhi, Chennai, Kolkata, and Ahmedabad offices.",
        href: "/ip-services",
      },
    ],
  },
];

const INDUSTRY_VERTICALS = [
  {
    title: "IT, ITES & Tech Startups",
    desc: "Specialized developer talent sourcing, equity-aligned payroll, and IP asset protection.",
    href: "/industries/it-ites-startups",
    badge: "High Growth",
  },
  {
    title: "Manufacturing & Engineering",
    desc: "Factory Act registers, shift-based payroll, CLRA contractor adherence, and blue-collar staff.",
    href: "/industries/manufacturing-engineering",
    badge: "Industrial",
  },
  {
    title: "Logistics & Warehousing",
    desc: "Distributed fulfillment workforce, peak ramp-ups, and interstate migrant compliance.",
    href: "/industries/logistics-warehousing",
    badge: "Supply Chain",
  },
  {
    title: "Healthcare & Pharmaceuticals",
    desc: "Clinical staffing, credential verification, 24/7 rotational shifts, and hospital compliance.",
    href: "/industries/healthcare-pharma",
    badge: "Regulated",
  },
];

const DIRECT_NAV_LINKS = [
  { label: "Fee Estimator", href: "/tools/payroll-fee-estimator" },
  { label: "2026 Regulations", href: "/resources" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);

  // Desktop Dropdown State
  const [activeDropdown, setActiveDropdown] = useState<"services" | "industries" | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("payroll");

  // Mobile Drawer & Accordion State
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<"services" | "industries" | null>("services");
  const [mobileSearchQuery, setMobileSearchQuery] = useState("");

  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (!mounted) return;
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [mobileOpen, mounted]);

  // Handle keyboard Escape to dismiss dropdowns
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // ── Hover Debounce for Desktop ─────────────────────────────────────────────
  const handleMouseEnter = (menu: "services" | "industries") => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const handleMobileSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobileSearchQuery.trim()) return;
    setMobileOpen(false);
    router.push(`/services?q=${encodeURIComponent(mobileSearchQuery.trim())}`);
  };

  const selectedCategoryData =
    SERVICE_CATEGORIES.find((cat) => cat.id === activeCategory) || SERVICE_CATEGORIES[0];

  const isServicesActive =
    pathname === "/services" ||
    pathname.startsWith("/services/") ||
    pathname.startsWith("/ip-services");

  const isIndustriesActive =
    pathname === "/industries" || pathname.startsWith("/industries/");

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-sd-border bg-white/95 backdrop-blur-md">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="flex h-16 xl:h-18 items-center justify-between gap-2 lg:gap-4">
            
            {/* Logo with Tagline */}
            <Link href="/" className="shrink-0 transition-opacity hover:opacity-90">
              <Logo size="md" showTagline={true} />
            </Link>

            {/* ── Desktop Navigation ────────────────────────────────────────── */}
            <nav className="hidden lg:flex items-center justify-center flex-1 mx-2 xl:mx-4 2xl:mx-8 gap-1 xl:gap-2">
              
              {/* 1. Services Trigger (Not a direct link - Opens Mega Menu) */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveDropdown(activeDropdown === "services" ? null : "services")
                  }
                  className={`group flex items-center gap-1.5 px-3 py-2 text-[13px] xl:text-[14px] font-medium transition-all duration-150 whitespace-nowrap rounded-lg cursor-pointer ${
                    activeDropdown === "services" || isServicesActive
                      ? "text-sd-text font-bold bg-sd-bg-2"
                      : "text-sd-muted hover:text-sd-text hover:bg-sd-bg-2"
                  }`}
                  aria-expanded={activeDropdown === "services"}
                >
                  <span>Services</span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 text-sd-muted group-hover:text-sd-text ${
                      activeDropdown === "services" ? "rotate-180 text-sd-pink" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  {isServicesActive && (
                    <span className="absolute -bottom-1 left-3 right-3 h-[2px] bg-sd-pink rounded-full" />
                  )}
                </button>
              </div>

              {/* 2. Industries Trigger (Not a direct link - Opens Dropdown) */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("industries")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveDropdown(activeDropdown === "industries" ? null : "industries")
                  }
                  className={`group flex items-center gap-1.5 px-3 py-2 text-[13px] xl:text-[14px] font-medium transition-all duration-150 whitespace-nowrap rounded-lg cursor-pointer ${
                    activeDropdown === "industries" || isIndustriesActive
                      ? "text-sd-text font-bold bg-sd-bg-2"
                      : "text-sd-muted hover:text-sd-text hover:bg-sd-bg-2"
                  }`}
                  aria-expanded={activeDropdown === "industries"}
                >
                  <span>Industries</span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 text-sd-muted group-hover:text-sd-text ${
                      activeDropdown === "industries" ? "rotate-180 text-sd-pink" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  {isIndustriesActive && (
                    <span className="absolute -bottom-1 left-3 right-3 h-[2px] bg-sd-pink rounded-full" />
                  )}
                </button>
              </div>

              {/* 3. Directly Clickable Navigation Links */}
              {DIRECT_NAV_LINKS.map((link) => {
                const active =
                  pathname === link.href || pathname.startsWith(link.href + "/");

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`group relative px-3 py-2 text-[13px] xl:text-[14px] font-medium transition-all duration-150 whitespace-nowrap rounded-lg ${
                      active
                        ? "text-sd-text font-bold"
                        : "text-sd-muted hover:text-sd-text hover:bg-sd-bg-2"
                    }`}
                  >
                    <span className="whitespace-nowrap">{link.label}</span>
                    {active ? (
                      <span className="absolute -bottom-1 left-3 right-3 h-[2px] bg-sd-pink rounded-full transition-all" />
                    ) : (
                      <span className="absolute -bottom-1 left-3 right-3 h-[2px] bg-sd-pink/70 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* ── Action Buttons & Mobile Hamburger ─────────────────────────── */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center justify-center rounded-xl px-4 xl:px-5 py-2 xl:py-2.5 text-xs xl:text-sm font-semibold bg-sd-pink text-white hover:bg-sd-pink-dark transition-all duration-200 shadow-xs hover:shadow-md whitespace-nowrap active:scale-98"
              >
                Get in Touch
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 text-sd-muted hover:text-sd-text rounded-lg hover:bg-sd-bg-2 transition-colors cursor-pointer"
                aria-label="Open navigation menu"
              >
                <div className="w-5 space-y-1.5">
                  <span className="block h-0.5 bg-current" />
                  <span className="block h-0.5 bg-current" />
                  <span className="block h-0.5 bg-current" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* ── DESKTOP MEGA-MENU PANEL: SERVICES (Screenshot 1 Inspiration) ────── */}
        {activeDropdown === "services" && (
          <div
            className="hidden lg:block absolute top-full left-0 right-0 w-full bg-white border-b border-sd-border shadow-[0_25px_60px_rgba(15,23,42,0.14)] z-50 animate-in fade-in slide-in-from-top-2 duration-200"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mx-auto max-w-7xl px-6 sm:px-8 py-8 lg:py-10">
              <div className="grid grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Overview & Category Switcher */}
                <div className="col-span-4 pr-6 border-r border-slate-100 flex flex-col justify-between self-stretch">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">
                      Enterprise Solutions
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      Technology-driven managed services delivering institutional payroll, statutory labour compliance, and executive talent solutions.
                    </p>

                    {/* Category Switcher Tabs */}
                    <div className="space-y-1">
                      {SERVICE_CATEGORIES.map((category) => {
                        const isSelected = activeCategory === category.id;
                        return (
                          <button
                            key={category.id}
                            type="button"
                            onMouseEnter={() => setActiveCategory(category.id)}
                            onClick={() => setActiveCategory(category.id)}
                            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-150 flex items-center justify-between cursor-pointer ${
                              isSelected
                                ? "bg-sd-pink/10 text-sd-pink shadow-xs font-extrabold"
                                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                            }`}
                          >
                            <span className="tracking-wide uppercase text-[11.5px]">
                              {category.label}
                            </span>
                            {isSelected && (
                              <span className="h-1.5 w-1.5 rounded-full bg-sd-pink" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Bottom Action Link on Left Column */}
                  <div className="pt-6 border-t border-slate-100 mt-6">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-sd-pink hover:text-sd-pink-dark transition-colors group"
                    >
                      <span>Explore All Services</span>
                      <span className="w-6 h-6 rounded-full border border-sd-pink/40 flex items-center justify-center group-hover:bg-sd-pink group-hover:text-white transition-all">
                        <svg
                          className="w-3 h-3 transition-transform group-hover:translate-x-0.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Right Column: Sub-Services Cards Grid */}
                <div className="col-span-8">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-black text-slate-900">
                        {selectedCategoryData.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {selectedCategoryData.tagline}
                      </p>
                    </div>
                    <Link
                      href={selectedCategoryData.href}
                      className="text-xs font-bold text-sd-pink hover:underline shrink-0 ml-4"
                    >
                      View Pillar Hub →
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {selectedCategoryData.services.map((svc) => (
                      <Link
                        key={svc.title}
                        href={svc.href}
                        className="group flex flex-col justify-between p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-sd-pink/40 hover:shadow-sm transition-all duration-200"
                      >
                        <div>
                          <h5 className="text-xs font-bold text-slate-900 group-hover:text-sd-pink transition-colors">
                            {svc.title}
                          </h5>
                          <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                            {svc.desc}
                          </p>
                        </div>

                        {/* Small Circular Pink Arrow Button (Screenshot 1 Reference) */}
                        <div className="mt-3 flex justify-end">
                          <span className="w-6 h-6 rounded-full border border-sd-pink/40 text-sd-pink flex items-center justify-center group-hover:bg-sd-pink group-hover:text-white group-hover:scale-110 transition-all duration-200">
                            <svg
                              className="w-3 h-3"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                            >
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Sub-Footer Guarantee Callout */}
                  <div className="mt-5 p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>100% On-Time Salary Disbursement SLA Guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>DPDP Act 2023 & Institutional Bilateral NDA Protected</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* ── DESKTOP DROPDOWN PANEL: INDUSTRIES ──────────────────────────────── */}
        {activeDropdown === "industries" && (
          <div
            className="hidden lg:block absolute top-full left-0 right-0 w-full bg-white border-b border-sd-border shadow-[0_25px_60px_rgba(15,23,42,0.14)] z-50 animate-in fade-in slide-in-from-top-2 duration-200"
            onMouseEnter={() => handleMouseEnter("industries")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mx-auto max-w-7xl px-6 sm:px-8 py-8">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">
                    Industry-Tailored Enterprise Managed Services
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Pre-configured compliance frameworks and specialized staffing aligned to industry mandates.
                  </p>
                </div>
                <Link
                  href="/industries"
                  className="text-xs font-bold text-sd-pink hover:underline"
                >
                  Explore All Industry Verticals →
                </Link>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {INDUSTRY_VERTICALS.map((ind) => (
                  <Link
                    key={ind.title}
                    href={ind.href}
                    className="group flex flex-col justify-between p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-sd-pink/40 hover:shadow-sm transition-all duration-200"
                  >
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-sd-pink/10 text-sd-pink mb-2">
                        {ind.badge}
                      </span>
                      <h5 className="text-xs font-bold text-slate-900 group-hover:text-sd-pink transition-colors">
                        {ind.title}
                      </h5>
                      <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                        {ind.desc}
                      </p>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <span className="w-6 h-6 rounded-full border border-sd-pink/40 text-sd-pink flex items-center justify-center group-hover:bg-sd-pink group-hover:text-white group-hover:scale-110 transition-all duration-200">
                        <svg
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ── MOBILE SLIDE-OUT DRAWER PORTALED TO BODY (Screenshot 2 Inspiration) ── */}
      {/* Portaling directly to document.body prevents parent header backdrop-blur from trapping the fixed overlay */}
      {mounted &&
        mobileOpen &&
        createPortal(
          <div className="lg:hidden fixed inset-0 z-[999] flex justify-end">
            {/* Backdrop Blur Overlay */}
            <div
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-out Drawer Panel */}
            <div className="relative w-[85%] max-w-[340px] bg-white h-full min-h-dvh max-h-dvh shadow-2xl z-10 flex flex-col justify-between p-5 overflow-y-auto animate-in slide-in-from-right duration-300">
              <div>
                {/* Drawer Top Row: Logo + Close Button */}
                <div className="flex items-center justify-between pb-4 border-b border-sd-border">
                  <Logo size="sm" showTagline={false} />
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                    aria-label="Close navigation menu"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Navigation Accordion List (Screenshot 2 Match) */}
                <div className="mt-4 space-y-1">
                  
                  {/* 1. Enterprise Solutions Accordion */}
                  <div className="border-b border-slate-100 pb-1">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === "services" ? null : "services")
                      }
                      className="w-full py-3 px-2 flex items-center justify-between text-sm font-bold text-slate-900 hover:text-sd-pink transition-colors cursor-pointer"
                    >
                      <span>Enterprise Solutions</span>
                      <svg
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                          mobileExpanded === "services" ? "rotate-180 text-sd-pink" : ""
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    {mobileExpanded === "services" && (
                      <div className="pl-3 pr-1 pb-3 space-y-1 animate-in fade-in duration-150">
                        {SERVICE_CATEGORIES.map((cat) => (
                          <Link
                            key={cat.id}
                            href={cat.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center justify-between py-2 px-2.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-sd-pink hover:bg-sd-pink/5 transition-colors"
                          >
                            <span>{cat.title}</span>
                            <span className="text-slate-400">→</span>
                          </Link>
                        ))}
                        <div className="pt-1.5">
                          <Link
                            href="/services"
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 px-2.5 rounded-lg text-xs font-black uppercase tracking-wider text-sd-pink bg-sd-pink/5 hover:bg-sd-pink/10 transition-colors"
                          >
                            Explore All Services →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 2. Industries Accordion */}
                  <div className="border-b border-slate-100 pb-1">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === "industries" ? null : "industries")
                      }
                      className="w-full py-3 px-2 flex items-center justify-between text-sm font-bold text-slate-900 hover:text-sd-pink transition-colors cursor-pointer"
                    >
                      <span>Industries</span>
                      <svg
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                          mobileExpanded === "industries" ? "rotate-180 text-sd-pink" : ""
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    {mobileExpanded === "industries" && (
                      <div className="pl-3 pr-1 pb-3 space-y-1 animate-in fade-in duration-150">
                        {INDUSTRY_VERTICALS.map((ind) => (
                          <Link
                            key={ind.title}
                            href={ind.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center justify-between py-2 px-2.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-sd-pink hover:bg-sd-pink/5 transition-colors"
                          >
                            <span>{ind.title}</span>
                            <span className="text-slate-400">→</span>
                          </Link>
                        ))}
                        <div className="pt-1.5">
                          <Link
                            href="/industries"
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 px-2.5 rounded-lg text-xs font-black uppercase tracking-wider text-sd-pink bg-sd-pink/5 hover:bg-sd-pink/10 transition-colors"
                          >
                            View All Industries →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 3. Direct Navigation Links */}
                  {DIRECT_NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between py-3 px-2 text-sm font-bold text-slate-900 hover:text-sd-pink border-b border-slate-100 transition-colors"
                    >
                      <span>{link.label}</span>
                      <span className="text-slate-400">→</span>
                    </Link>
                  ))}
                </div>

                {/* Search Bar Input (Screenshot 2 Match) */}
                <form onSubmit={handleMobileSearchSubmit} className="mt-5">
                  <div className="relative flex items-center">
                    <svg
                      className="absolute left-3 w-4 h-4 text-slate-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    <input
                      type="text"
                      value={mobileSearchQuery}
                      onChange={(e) => setMobileSearchQuery(e.target.value)}
                      placeholder="Search solutions..."
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sd-pink focus:bg-white transition-all"
                    />
                  </div>
                </form>
              </div>

              {/* Mobile Drawer Bottom: Rounded Pill Contact Button (Screenshot 2 Match) */}
              <div className="pt-5 border-t border-sd-border mt-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-3.5 px-6 rounded-full font-bold text-sm text-center text-white bg-sd-pink hover:bg-sd-pink-dark transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Contact</span>
                  <span className="text-base leading-none">⊕</span>
                </Link>
                <p className="text-center text-[10.5px] text-slate-400 mt-2.5">
                  Bilateral NDA • DPDP Act 2023 Compliant
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
