import type { MetadataRoute } from "next";

const siteUrl = "https://scaleforgewebdev.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio", "/portal", "/admin", "/api"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
