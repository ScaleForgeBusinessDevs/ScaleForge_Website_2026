import projectsData from "@/data/projects.json";
import caseStudiesData from "@/data/caseStudies.json";
import industriesData from "@/data/industries.json";
import locationsData from "@/data/locations.json";
import { getPriorityCombos } from "@/lib/programmaticSeo";

const siteUrl = "https://scalesforge.site";

// Regenerate at most once a day — the sitemap has no per-request state.
export const revalidate = 86400;

// `lastmod` must reflect the last *meaningful content change*, not the time the
// sitemap was served. Emitting `new Date()` for every URL on every request tells
// Google the whole site changed on every crawl, and it starts ignoring lastmod
// entirely. Bump the date here when a page's content actually changes.
const STATIC_PAGES = [
  { url: `${siteUrl}/`, lastmod: "2026-09-01", priority: 1.0, changeFrequency: "weekly", images: [
    "https://scalesforge.site/Assets/favicon_SF.png",
    "https://scalesforge.site/Assets/linkedin-post-1.avif",
    "https://scalesforge.site/Assets/linkedin-post-2.avif",
    "https://scalesforge.site/Assets/linkedin-post-3.avif"
  ] },
  { url: `${siteUrl}/solutions`, lastmod: "2026-08-19", priority: 0.9, changeFrequency: "monthly", images: [] },
  { url: `${siteUrl}/services`, lastmod: "2026-08-19", priority: 0.9, changeFrequency: "monthly", images: [] },
  { url: `${siteUrl}/services/ai-development`, lastmod: "2026-07-19", priority: 0.85, changeFrequency: "monthly", images: [] },
  { url: `${siteUrl}/services/web-design`, lastmod: "2026-08-20", priority: 0.85, changeFrequency: "monthly", images: [] },
  { url: `${siteUrl}/services/web-development`, lastmod: "2026-08-19", priority: 0.85, changeFrequency: "monthly", images: [] },
  { url: `${siteUrl}/services/seo`, lastmod: "2026-08-20", priority: 0.85, changeFrequency: "monthly", images: [] },
  { url: `${siteUrl}/services/content-creation`, lastmod: "2026-08-20", priority: 0.85, changeFrequency: "monthly", images: [] },
  { url: `${siteUrl}/services/supply-chain-management`, lastmod: "2026-08-19", priority: 0.85, changeFrequency: "monthly", images: [] },
  { url: `${siteUrl}/services/motion-analysis`, lastmod: "2026-08-19", priority: 0.85, changeFrequency: "monthly", images: [] },
  { url: `${siteUrl}/services/social-media-branding`, lastmod: "2026-08-19", priority: 0.85, changeFrequency: "monthly", images: [] },
  { url: `${siteUrl}/services/startup-advisory`, lastmod: "2026-08-19", priority: 0.85, changeFrequency: "monthly", images: [] },
  { url: `${siteUrl}/industries`, lastmod: "2026-09-01", priority: 0.9, changeFrequency: "weekly", images: [] },
  { url: `${siteUrl}/locations`, lastmod: "2026-09-01", priority: 0.9, changeFrequency: "weekly", images: [] },
  { url: `${siteUrl}/case-studies`, lastmod: "2026-09-01", priority: 0.85, changeFrequency: "weekly", images: [] },
  { url: `${siteUrl}/audit`, lastmod: "2026-09-01", priority: 0.85, changeFrequency: "monthly", images: [] },
  { url: `${siteUrl}/pricing`, lastmod: "2026-08-20", priority: 0.8, changeFrequency: "monthly", images: [] },
  { url: `${siteUrl}/projects`, lastmod: "2026-08-20", priority: 0.8, changeFrequency: "weekly", images: [] },
  { url: `${siteUrl}/about`, lastmod: "2026-08-20", priority: 0.7, changeFrequency: "monthly", images: [
    "https://scalesforge.site/Assets/Shahood.avif",
    "https://scalesforge.site/Assets/Ruhan_2.avif"
  ] },
  { url: `${siteUrl}/contact`, lastmod: "2026-08-19", priority: 0.7, changeFrequency: "yearly", images: [] },
  { url: `${siteUrl}/privacy`, lastmod: "2026-08-21", priority: 0.3, changeFrequency: "yearly", images: [] },
  { url: `${siteUrl}/terms`, lastmod: "2026-08-19", priority: 0.3, changeFrequency: "yearly", images: [] },
];

const escapeXml = (value) =>
  String(value).replace(/[<>&'"]/g, (c) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    '"': "&quot;",
  })[c]);

export async function GET() {
  const fallbackDate = new Date().toISOString().slice(0, 10);
  const now = fallbackDate;

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

  // 1. Static Pages
  for (const page of STATIC_PAGES) {
    xml += `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod || fallbackDate}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>`;

    if (page.images && page.images.length > 0) {
      for (const img of page.images) {
        xml += `
    <image:image>
      <image:loc>${escapeXml(img)}</image:loc>
    </image:image>`;
      }
    }

    xml += `
  </url>`;
  }

  // 2. Projects
  for (const proj of projectsData) {
    if (!proj.slug?.current) continue;

    const projUrl = `${siteUrl}/projects/${proj.slug.current}`;
    xml += `
  <url>
    <loc>${projUrl}</loc>
    <lastmod>${proj.publishedAt ? String(proj.publishedAt).slice(0, 10) : fallbackDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>`;

    const imgPath = proj.coverImage?.localPath || proj.coverImage?.url;
    if (imgPath) {
      const fullImgUrl = imgPath.startsWith("http") ? imgPath : `${siteUrl}${imgPath}`;
      xml += `
    <image:image>
      <image:loc>${escapeXml(fullImgUrl)}</image:loc>
      <image:title>${escapeXml(proj.title || "")}</image:title>
    </image:image>`;
    }

    xml += `
  </url>`;
  }

  // 3. Case Studies
  for (const cs of caseStudiesData) {
    if (!cs.slug) continue;
    xml += `
  <url>
    <loc>${siteUrl}/case-studies/${cs.slug}</loc>
    <lastmod>${cs.publishedAt ? new Date(cs.publishedAt).toISOString() : now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  }

  // 4. Industry Hubs
  for (const ind of industriesData) {
    if (!ind.slug) continue;
    xml += `
  <url>
    <loc>${siteUrl}/industries/${ind.slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`;
  }

  // 5. Location Hubs
  for (const loc of locationsData) {
    if (!loc.slug) continue;
    xml += `
  <url>
    <loc>${siteUrl}/locations/${loc.slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`;
  }

  // 6. Validated Priority Combos
  const priorityCombos = getPriorityCombos();
  for (const combo of priorityCombos) {
    xml += `
  <url>
    <loc>${siteUrl}/${combo.serviceSlug}/${combo.industrySlug}/${combo.locationSlug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${combo.priority || 0.7}</priority>
  </url>`;
  }

  xml += `
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=18000, stale-while-revalidate=600"
    }
  });
}

