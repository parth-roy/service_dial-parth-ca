import dbConnect from "@/lib/mongodb";
import { IPPageAsset, Geography, Jurisdiction } from "@/models";

export const revalidate = 86400; // 24 hours ISR

const CORRUPTED_SLUG_RE = /(?:-\d+)+$/;

export async function GET() {
  const BASE_URL = "https://servicedialtm.com";

  try {
    await dbConnect();

    // Exclude Mumbai-jurisdiction City-Intent & State-Hub URLs owned by sitemap-mumbai.xml
    const mumbaiOffice = (await Jurisdiction.findOne({ officeName: "Mumbai" }).lean()) as any;
    let mumbaiGeoIds = new Set<string>();
    if (mumbaiOffice?._id) {
      const mumbaiGeos = (await Geography.find({ jurisdictionId: mumbaiOffice._id }).select("_id").lean()) as any[];
      mumbaiGeoIds = new Set(mumbaiGeos.map((g) => g._id.toString()));
    }

    const assets = (await IPPageAsset.find({
      publicationState: "Published",
    }).lean()) as any[];

    const filteredAssets = assets.filter((a: any) => {
      if (!a.slug || CORRUPTED_SLUG_RE.test(a.slug)) return false;
      const isMumbaiOwned =
        (a.routeFamily === "City-Intent" || a.routeFamily === "State-Hub") &&
        a.geographyId &&
        mumbaiGeoIds.has(a.geographyId.toString());
      return !isMumbaiOwned;
    });

    const urlsXml = filteredAssets.map((a: any) => {
      const lastMod = a.updatedAt
        ? new Date(a.updatedAt).toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0];

      let priority = "0.8";
      if (a.slug === "ip-services") priority = "1.0";
      else if (a.routeFamily === "Tool") priority = "0.9";
      else if (a.routeFamily === "City-Intent") priority = "0.85";

      return `
  <url>
    <loc>${BASE_URL}/${a.slug}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    }).join("");

    const classUrlsXml = Array.from({ length: 45 }, (_, i) => i + 1).map((cNum) => `
  <url>
    <loc>${BASE_URL}/ip-services/trademarks/class/${cNum}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join("");

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}${classUrlsXml}
</urlset>`;

    return new Response(sitemapContent, {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
      },
    });
  } catch (error) {
    console.error("[sitemap-ip error]:", error);
    // Fallback minimal sitemap on DB error
    const fallback = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/ip-services</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

    return new Response(fallback, {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    });
  }
}
