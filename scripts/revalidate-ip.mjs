/**
 * Operational On-Demand Cache Revalidation Script
 * 
 * Usage:
 *   node scripts/revalidate-ip.mjs [path]
 * 
 * Example:
 *   node scripts/revalidate-ip.mjs /ip-services
 *   node scripts/revalidate-ip.mjs /ip-services/tools/fee-calculator
 */

const targetPath = process.argv[2] || "/ip-services";
const secret = process.env.REVALIDATION_SECRET || "service_dial_ip_revalidate_secret_2026";
const host = process.env.SITE_URL || "http://localhost:3000";

async function triggerRevalidate() {
  console.log(`🔄 Triggering on-demand cache revalidation for: ${targetPath}`);

  try {
    const res = await fetch(`${host}/api/revalidate-ip?secret=${encodeURIComponent(secret)}&path=${encodeURIComponent(targetPath)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (res.ok) {
      console.log("✅ Cache revalidated successfully:", data);
    } else {
      console.error("❌ Revalidation failed:", res.status, data);
    }
  } catch (error) {
    console.error("❌ Network error connecting to revalidation endpoint:", error.message);
  }
}

triggerRevalidate();
