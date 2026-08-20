import projectsData from "@/data/projects.json";

const siteUrl = "https://scalesforge.site";

const STATIC_PAGES = [
  { url: `${siteUrl}/`, priority: 1.0, changeFrequency: "weekly", images: [
    "https://scalesforge.site/Assets/favicon_SF.png",
    "https://scalesforge.site/Assets/linkedin-post-1.avif",
    "https://scalesforge.site/Assets/linkedin-post-2.avif",
    "https://scalesforge.site/Assets/linkedin-post-3.avif"
  ] },
  { url: `${siteUrl}/solutions`, priority: 0.9, changeFrequency: "monthly", images: [] },
  { url: `${siteUrl}/services`, priority: 0.9, changeFrequency: "monthly", images: [] },
  { url: `${siteUrl}/services/ai-development`, priority: 0.85, changeFrequency: "monthly", images: [] },
  { url: `${siteUrl}/services/web-design`, priority: 0.85, changeFrequency: "monthly", images: [] },
  { url: `${siteUrl}/services/web-development`, priority: 0.85, changeFrequency: "monthly", images: [] },
  { url: `${siteUrl}/services/seo`, priority: 0.85, changeFrequency: "monthly", images: [] },
  { url: `${siteUrl}/services/content-creation`, priority: 0.85, changeFrequency: "monthly", images: [] },
  { url: `${siteUrl}/services/supply-chain-management`, priority: 0.85, changeFrequency: "monthly", images: [] },
  { url: `${siteUrl}/services/motion-analysis`, priority: 0.85, changeFrequency: "monthly", images: [] },
  { url: `${siteUrl}/services/social-media-branding`, priority: 0.85, changeFrequency: "monthly", images: [] },
  { url: `${siteUrl}/services/startup-advisory`, priority: 0.85, changeFrequency: "monthly", images: [] },
  { url: `${siteUrl}/pricing`, priority: 0.8, changeFrequency: "monthly", images: [] },
  { url: `${siteUrl}/projects`, priority: 0.8, changeFrequency: "weekly", images: [] },
  { url: `${siteUrl}/about`, priority: 0.7, changeFrequency: "monthly", images: [
    "https://scalesforge.site/Assets/Shahood.avif",
    "https://scalesforge.site/Assets/Ruhan_2.avif"
  ] },
  { url: `${siteUrl}/contact`, priority: 0.7, changeFrequency: "yearly", images: [] },
  { url: `${siteUrl}/privacy`, priority: 0.3, changeFrequency: "yearly", images: [] },
  { url: `${siteUrl}/terms`, priority: 0.3, changeFrequency: "yearly", images: [] },
];

export async function GET() {
  const now = new Date().toISOString();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

  // 1. Static Pages
  for (const page of STATIC_PAGES) {
    xml += `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>`;
    
    if (page.images && page.images.length > 0) {
      for (const img of page.images) {
        xml += `
    <image:image>
      <image:loc>${img}</image:loc>
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
    <lastmod>${proj.publishedAt ? new Date(proj.publishedAt).toISOString() : now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>`;

    const imgPath = proj.coverImage?.localPath || proj.coverImage?.url;
    if (imgPath) {
      const fullImgUrl = imgPath.startsWith("http") ? imgPath : `${siteUrl}${imgPath}`;
      const safeTitle = proj.title ? proj.title.replace(/[<>&'"]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '\'': '&apos;', '"': '&quot;' }[c])) : "";
      xml += `
    <image:image>
      <image:loc>${fullImgUrl}</image:loc>
      <image:title>${safeTitle}</image:title>
    </image:image>`;
    }

    xml += `
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
