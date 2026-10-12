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
  { label: "IP & Trademarks", href: "/ip-services" },
  { label: "Locations", href: "/locations" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
];

function isRouteActive(currentPath: string, linkHref: string): boolean {
  if (linkHref === "/services") {
    return currentPath === "/services";
  }
  if (linkHref === "/ip-services") {
    return currentPath === "/ip-services" || currentPath.startsWith("/ip-services/");
  }
  if (linkHref === "/locations") {
    return currentPath === "/locations" || currentPath.startsWith("/locations/");
  }
  if (linkHref === "/case-studies") {
    return currentPath === "/case-studies" || currentPath.startsWith("/case-studies/");
  }
  if (linkHref === "/about") {
    return currentPath === "/about";
  }
  return currentPath === linkHref || currentPath.startsWith(linkHref + "/");
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sd-border bg-white/95 backdrop-blur-md">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="flex h-16 xl:h-18 items-center justify-between gap-2 lg:gap-4">
          {/* Logo with Single-Line Tagline */}
          <Link href="/" className="shrink-0 transition-opacity hover:opacity-90">
            <Logo size="md" showTagline={true} />
          </Link>

          {/* Desktop Nav - Expanded & Strictly Single-Line */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-2 xl:mx-4 2xl:mx-8 gap-0.5 xl:gap-1 2xl:gap-1.5">
            {navLinks.map((link) => {
              const active = isRouteActive(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative px-2 xl:px-2.5 2xl:px-3 py-1.5 text-[12.5px] xl:text-[13.5px] 2xl:text-sm font-medium transition-all duration-150 whitespace-nowrap rounded-lg ${
                    active
                      ? "text-sd-text font-bold"
                      : "text-sd-muted hover:text-sd-text hover:bg-sd-bg-2"
                  }`}
                >
                  <span className="whitespace-nowrap">{link.label}</span>
                  {active ? (
                    <span className="absolute -bottom-1 left-2 right-2 h-[2px] bg-sd-pink rounded-full transition-all" />
                  ) : (
                    <span className="absolute -bottom-1 left-2 right-2 h-[2px] bg-sd-pink/70 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center rounded-xl px-4 xl:px-5 py-2 xl:py-2.5 text-xs xl:text-sm font-semibold bg-sd-pink text-white hover:bg-sd-pink-dark transition-all duration-200 shadow-xs hover:shadow-md whitespace-nowrap"
            >
              Get in Touch
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-sd-muted hover:text-sd-text rounded-lg hover:bg-sd-bg-2 transition-colors"
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

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="lg:hidden border-t border-sd-border py-4 bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = isRouteActive(pathname, link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                      active
                        ? "bg-sd-pink/10 text-sd-pink font-semibold"
                        : "text-sd-muted hover:text-sd-text hover:bg-sd-bg-2"
                    }`}
                  >
                    <span className="whitespace-nowrap">{link.label}</span>
                    {active && <span className="h-1.5 w-1.5 rounded-full bg-sd-pink" />}
                  </Link>
                );
              })}
              <div className="pt-2 px-2">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center rounded-xl px-4 py-3 text-sm font-semibold bg-sd-pink text-white hover:bg-sd-pink-dark transition-colors shadow-xs"
                >
                  Get in Touch
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
