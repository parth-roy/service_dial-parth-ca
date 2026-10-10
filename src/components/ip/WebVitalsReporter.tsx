"use client";

import { useEffect } from "react";

export default function WebVitalsReporter() {
  useEffect(() => {
    if (typeof window === "undefined" || !("PerformanceObserver" in window)) {
      return;
    }

    try {
      // 1. Observe Largest Contentful Paint (LCP) - Target <= 2500ms
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          const lcpValue = Math.round(lastEntry.startTime);
          if (process.env.NODE_ENV === "development") {
            console.log(`[RUM Web Vitals] LCP: ${lcpValue}ms`, lcpValue <= 2500 ? "✅ Good" : "⚠️ Needs Improvement");
          }
        }
      });
      lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });

      // 2. Observe Cumulative Layout Shift (CLS) - Target <= 0.1
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries() as any[]) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        if (process.env.NODE_ENV === "development") {
          console.log(`[RUM Web Vitals] CLS: ${clsValue.toFixed(3)}`, clsValue <= 0.1 ? "✅ Good" : "⚠️ Needs Improvement");
        }
      });
      clsObserver.observe({ type: "layout-shift", buffered: true });

      // 3. Observe Interaction to Next Paint (INP) / First Input Delay (FID)
      const inpObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries() as any[]) {
          const duration = Math.round(entry.duration || entry.processingEnd - entry.startTime);
          if (process.env.NODE_ENV === "development") {
            console.log(`[RUM Web Vitals] Interaction Delay: ${duration}ms`, duration <= 200 ? "✅ Good" : "⚠️ Needs Improvement");
          }
        }
      });
      inpObserver.observe({ type: "first-input", buffered: true });

      return () => {
        lcpObserver.disconnect();
        clsObserver.disconnect();
        inpObserver.disconnect();
      };
    } catch (err) {
      // Graceful non-blocking fallback
    }
  }, []);

  return null;
}
