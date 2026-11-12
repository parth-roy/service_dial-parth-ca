declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

/**
 * Fires custom conversion/engagement events to GA4 and Microsoft Clarity when configured.
 * Fails silently when analytics scripts are disabled or blocked.
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>
): void {
  if (typeof window === "undefined") return;
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params || {});
    }
    if (typeof window.clarity === "function") {
      window.clarity("event", eventName);
    }
  } catch {
    // Fail-open: analytics must never interrupt user conversion actions
  }
}
