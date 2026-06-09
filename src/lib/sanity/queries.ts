import { sanityClient } from "./client";

export interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  type: "blog" | "case-study";
  topicTags?: { title: string; slug: { current: string } }[];
  featuredImage?: { asset: { _ref: string } | null; alt?: string } | null;
  excerpt: string;
  readTime?: number;
  author?: { name: string; bio?: string; avatar?: { asset: { _ref: string } } };
  publishedDate: string;
  lastUpdatedDate?: string;
  seoTitle?: string;
  seoDescription?: string;
  body?: unknown[];
  featured?: boolean;
}

export interface SanityTopic {
  _id: string;
  title: string;
  slug: { current: string };
}

// Maps old Sanity schema fields to the interface names used across the app:
//   coverImage      → featuredImage
//   description     → excerpt
//   publishedAt     → publishedDate
//   category        → type  (Blogs→blog, Case Studies→case-study)
const postFields = `
  _id,
  title,
  slug,
  "type": select(
    category == "Case Studies" => "case-study",
    "blog"
  ),
  "featuredImage": coverImage{ asset, alt },
  "excerpt": description,
  readTime,
  "publishedDate": publishedAt
`;

const REVALIDATE = { next: { revalidate: 3600 } };

export async function getAllPosts(): Promise<SanityPost[]> {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) { ${postFields} }`,
    {},
    REVALIDATE
  );
}

export async function getFeaturedPost(): Promise<SanityPost | null> {
  // No featured boolean in schema — return the most recent post
  const results = await sanityClient.fetch<SanityPost[]>(
    `*[_type == "post"] | order(publishedAt desc)[0..0] { ${postFields} }`,
    {},
    REVALIDATE
  );
  return results[0] ?? null;
}

export async function getPostsByFilter(type?: string): Promise<SanityPost[]> {
  let categoryFilter = "";
  if (type === "blog") categoryFilter = `&& category == "Blogs"`;
  else if (type === "case-study") categoryFilter = `&& category == "Case Studies"`;

  return sanityClient.fetch(
    `*[_type == "post" ${categoryFilter}] | order(publishedAt desc) { ${postFields} }`,
    {},
    REVALIDATE
  );
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  const results = await sanityClient.fetch<SanityPost[]>(
    `*[_type == "post" && slug.current == $slug][0..0] {
      ${postFields},
      body
    }`,
    { slug },
    REVALIDATE
  );
  return results[0] ?? null;
}

export async function getLatestPosts(limit = 3): Promise<SanityPost[]> {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc)[0..${limit - 1}] { ${postFields} }`,
    {},
    REVALIDATE
  );
}

export async function getAllTopics(): Promise<SanityTopic[]> {
  return sanityClient.fetch(
    `*[_type == "topic"] | order(title asc) { _id, title, slug }`,
    {},
    REVALIDATE
  );
}

export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  const posts = await sanityClient.fetch<{ slug: { current: string } }[]>(
    `*[_type == "post"] { slug }`,
    {},
    REVALIDATE
  );
  return posts.map((p) => ({ slug: p.slug.current }));
}
