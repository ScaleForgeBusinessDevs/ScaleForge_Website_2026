import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/sanity/queries";
import { getAllProjectSlugs } from "@/lib/sanity/projectQueries";

const siteUrl = "https://scaleforgewebdev.vercel.app";

const STATIC_PAGES: MetadataRoute.Sitemap = [
  { url: `${siteUrl}/`,                              priority: 1.0,  changeFrequency: "weekly"  },
  { url: `${siteUrl}/solutions`,                     priority: 0.9,  changeFrequency: "monthly" },
  { url: `${siteUrl}/services`,                      priority: 0.9,  changeFrequency: "monthly" },
  { url: `${siteUrl}/services/ai-development`,       priority: 0.85, changeFrequency: "monthly" },
  { url: `${siteUrl}/services/web-design`,           priority: 0.85, changeFrequency: "monthly" },
  { url: `${siteUrl}/services/web-development`,      priority: 0.85, changeFrequency: "monthly" },
  { url: `${siteUrl}/services/seo`,                  priority: 0.85, changeFrequency: "monthly" },
  { url: `${siteUrl}/services/content-creation`,     priority: 0.85, changeFrequency: "monthly" },
  { url: `${siteUrl}/pricing`,                       priority: 0.8,  changeFrequency: "monthly" },
  { url: `${siteUrl}/projects`,                      priority: 0.8,  changeFrequency: "weekly"  },
  { url: `${siteUrl}/about`,                         priority: 0.7,  changeFrequency: "monthly" },
  { url: `${siteUrl}/blog`,                          priority: 0.75, changeFrequency: "daily"   },
  { url: `${siteUrl}/contact`,                       priority: 0.7,  changeFrequency: "yearly"  },
  { url: `${siteUrl}/privacy`,                       priority: 0.3,  changeFrequency: "yearly"  },
  { url: `${siteUrl}/terms`,                         priority: 0.3,  changeFrequency: "yearly"  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  let postSlugs: { slug: string }[] = [];
  let projectSlugs: { slug: string }[] = [];

  try {
    [postSlugs, projectSlugs] = await Promise.all([
      getAllPostSlugs(),
      getAllProjectSlugs(),
    ]);
  } catch {
    // Sanity unavailable at build time — static pages only
  }

  const blogEntries: MetadataRoute.Sitemap = postSlugs.map(({ slug }) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: now,
    priority: 0.7,
    changeFrequency: "monthly",
  }));

  const projectEntries: MetadataRoute.Sitemap = projectSlugs.map(({ slug }) => ({
    url: `${siteUrl}/projects/${slug}`,
    lastModified: now,
    priority: 0.75,
    changeFrequency: "monthly",
  }));

  return [
    ...STATIC_PAGES.map((page) => ({ ...page, lastModified: now })),
    ...blogEntries,
    ...projectEntries,
  ];
}
