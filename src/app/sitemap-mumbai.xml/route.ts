import dbConnect from "@/lib/mongodb";
import { IPPageAsset, Geography, Jurisdiction } from "@/models";

export const revalidate = 43200; // 12 hours ISR

const BASE_URL = "https://servicedialtm.com";

const CORRUPTED_SLUG_RE = /(?:-\d+)+$/;

export async function GET() {
  try {
    await dbConnect();

    // 1. Locate Mumbai Jurisdiction
    const mumbaiOffice = (await Jurisdiction.findOne({ officeName: "Mumbai" }).lean()) as any;

    if (!mumbaiOffice?._id) {
      throw new Error("Mumbai Jurisdiction document not found");
    }

    // 2. Fetch States & Cities under Mumbai Jurisdiction
    const states = (await Geography.find({
      level: "State",
      jurisdictionId: mumbaiOffice._id,
    }).lean()) as any[];

    const cities = (await Geography.find({
      level: { $in: ["District", "Subdistrict", "LocalBody"] },
      jurisdictionId: mumbaiOffice._id,
    }).lean()) as any[];

    const allGeoIds = cities.map((c) => c._id).concat(states.map((s) => s._id));

    // 3. Fetch Published City-Intent and State-Hub Assets (excluding corrupted duplicate slugs)
    const assets = (await IPPageAsset.find({
      routeFamily: { $in: ["City-Intent", "State-Hub"] },
      publicationState: "Published",
      geographyId: { $in: allGeoIds },
    }).lean()) as any[];

    const cleanAssets = assets.filter(
      (a: any) => a.slug && !CORRUPTED_SLUG_RE.test(a.slug)
    );

    const today = new Date().toISOString().split("T")[0];

    // Priority static asset: Mumbai Authority Guide (1 URL)
    const officeGuideEntry = `
  <url>
    <loc>${BASE_URL}/ip-services/jurisdiction/mumbai</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;

    // Asset URLs only (City x 45 Nice Class matrix excluded to prevent crawl budget bloat)
    const urlsXml = cleanAssets
      .map((a: any) => {
        const lastMod = a.updatedAt
          ? new Date(a.updatedAt).toISOString().split("T")[0]
          : today;
        const priority = a.routeFamily === "State-Hub" ? "0.85" : "0.80";

        return `
  <url>
    <loc>${BASE_URL}/${a.slug}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
      })
      .join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${officeGuideEntry}${urlsXml}
</urlset>`;

    return new Response(xml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, s-maxage=43200, stale-while-revalidate=3600",
      },
    });
  } catch (error) {
    console.error("[sitemap-mumbai error]:", error);
    const fallbackXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/ip-services/jurisdiction/mumbai</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;

    return new Response(fallbackXml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    });
  }
}
