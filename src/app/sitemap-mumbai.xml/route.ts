import dbConnect from "@/lib/mongodb";
import { IPPageAsset, Geography, Jurisdiction } from "@/models";

export const revalidate = 43200; // 12 hours ISR

const BASE_URL = "https://servicedialtm.com";

export async function GET() {
  try {
    await dbConnect();

    // 1. Locate Mumbai Jurisdiction
    const mumbaiOffice = (await Jurisdiction.findOne({ officeName: "Mumbai" }).lean()) as any;

    if (!mumbaiOffice?._id) {
      throw new Error("Mumbai Jurisdiction document not found");
    }

    // 2. Fetch States for parent slug mapping
    const states = (await Geography.find({
      level: "State",
      jurisdictionId: mumbaiOffice._id,
    }).lean()) as any[];

    const stateMap: Record<string, string> = {};
    states.forEach((s) => {
      stateMap[s._id.toString()] = s.slug;
    });

    // 3. Fetch Cities / Industrial Hubs under Mumbai Jurisdiction
    const cities = (await Geography.find({
      level: { $in: ["District", "Subdistrict", "LocalBody"] },
      jurisdictionId: mumbaiOffice._id,
    }).lean()) as any[];

    const allGeoIds = cities.map((c) => c._id).concat(states.map((s) => s._id));

    // 4. Fetch all Published City-Intent and State-Hub Assets
    const assets = (await IPPageAsset.find({
      routeFamily: { $in: ["City-Intent", "State-Hub"] },
      publicationState: "Published",
      geographyId: { $in: allGeoIds },
    }).lean()) as any[];

    const today = new Date().toISOString().split("T")[0];

    // Priority static asset: Mumbai Authority Guide (1 URL)
    const officeGuideEntry = `
  <url>
    <loc>${BASE_URL}/ip-services/jurisdiction/mumbai</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;

    // Asset URLs: City-Intent (522) + State-Hub (30) = 552 URLs
    const urlsXml = assets
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

    // Programmatic City x Nice Class Combinations (87 Cities x 45 Classes = 3,915 URLs)
    const classCombinationsXml = cities
      .map((city) => {
        const stateSlug = (city.parentId && stateMap[city.parentId.toString()]) || "maharashtra";
        const citySlug = city.slug;

        return Array.from({ length: 45 }, (_, i) => i + 1)
          .map((cNum) => `
  <url>
    <loc>${BASE_URL}/ip-services/trademarks/class/${cNum}/${stateSlug}/${citySlug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>`)
          .join("");
      })
      .join("");

    // Combined XML output: 1 + 552 + 3,915 = 4,468 URLs
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${officeGuideEntry}${urlsXml}${classCombinationsXml}
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
