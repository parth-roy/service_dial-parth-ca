import React from "react";
import Link from "next/link";
import WebVitalsReporter from "@/components/ip/WebVitalsReporter";

export default function IPServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <WebVitalsReporter />
      {/* IP Advisory Trust Subheader */}
      <div className="bg-sd-bg-2 border-b border-sd-border/70 py-2.5 px-4 sm:px-6 lg:px-8 text-xs text-sd-muted">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-sd-text">IP India Registry Advisory</span>
            <span className="hidden md:inline text-sd-border-2">•</span>
            <span className="hidden md:inline">Pan-India Filing & Jurisdiction Matching</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/ip-services"
              className="hover:text-sd-pink transition-colors font-medium"
            >
              IP Overview
            </Link>
            <Link
              href="/ip-services/tools/fee-calculator"
              className="hover:text-sd-pink transition-colors font-medium"
            >
              Fee Calculator
            </Link>
            <Link
              href="/ip-services/tools/status-check"
              className="hover:text-sd-pink transition-colors font-medium"
            >
              e-Register Status
            </Link>
            <span className="px-2 py-0.5 rounded bg-white border border-sd-border font-mono text-[11px] text-sd-pink">
              Form TM-A ₹4,500 / ₹9,000
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
