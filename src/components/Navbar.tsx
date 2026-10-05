"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Staffing", href: "/services/staffing-and-recruitment" },
  { label: "Payroll & HRMS", href: "/services/hrms-and-payroll" },
  { label: "Finance & Audit", href: "/services/finance-and-audit" },
  { label: "Compliance", href: "/services/compliance-services" },
  { label: "Locations", href: "/locations" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
];

function isRouteActive(currentPath: string, linkHref: string): boolean {
  if (linkHref === "/services") {
    // Only active when strictly on the /services directory page
    return currentPath === "/services";
  }
  if (linkHref === "/locations") {
    // Active on /locations and /locations/[state]
    return currentPath === "/locations" || currentPath.startsWith("/locations/");
  }
  if (linkHref === "/case-studies") {
    // Active on /case-studies and /case-studies/[slug]
    return currentPath === "/case-studies" || currentPath.startsWith("/case-studies/");
  }
  if (linkHref === "/about") {
    return currentPath === "/about";
  }
  // For specific service pillars: active on /services/staffing-and-recruitment and /services/staffing-and-recruitment/[city]
  return currentPath === linkHref || currentPath.startsWith(linkHref + "/");
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sd-border bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="transition-opacity hover:opacity-90">
            <Logo size="md" showTagline={true} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isRouteActive(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative px-3 py-1.5 text-sm font-medium transition-colors ${
                    active
                      ? "text-sd-text font-semibold"
                      : "text-sd-muted hover:text-sd-text"
                  }`}
                >
                  <span>{link.label}</span>
                  {active ? (
                    <span className="absolute -bottom-1 left-2.5 right-2.5 h-[2px] bg-sd-pink rounded-full transition-all" />
                  ) : (
                    <span className="absolute -bottom-1 left-2.5 right-2.5 h-[2px] bg-sd-pink/70 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded px-4 py-2 text-sm font-semibold bg-sd-pink text-white hover:bg-sd-pink-dark transition-colors"
            >
              Get in Touch
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-sd-muted hover:text-sd-text"
              aria-label="Toggle menu"
            >
              <div className="w-5 space-y-1.5">
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    open ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    open ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-sd-border py-3">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = isRouteActive(pathname, link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between px-3 py-2 text-sm font-medium rounded transition-colors ${
                      active
                        ? "bg-sd-pink/10 text-sd-pink font-semibold"
                        : "text-sd-muted hover:text-sd-text hover:bg-sd-bg-2"
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && <span className="h-1.5 w-1.5 rounded-full bg-sd-pink" />}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 mx-3 text-center rounded px-4 py-2 text-sm font-semibold bg-sd-pink text-white hover:bg-sd-pink-dark transition-colors"
              >
                Get in Touch
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
