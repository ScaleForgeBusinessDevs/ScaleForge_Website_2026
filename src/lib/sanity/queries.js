import { sanityClient } from "./client";

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

const REVALIDATE = { next: { revalidate: 0 } };

export async function getAllPosts() {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) { ${postFields} }`,
    {},
    REVALIDATE,
  );
}

export async function getFeaturedPost() {
  const featured = await sanityClient.fetch(
    `*[_type == "post" && featured == true] | order(publishedAt desc)[0..0] { ${postFields} }`,
    {},
    REVALIDATE,
  );
  if (featured[0]) return featured[0];

  // No post explicitly marked featured — fall back to the most recent post
  const latest = await sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc)[0..0] { ${postFields} }`,
    {},
    REVALIDATE,
  );
  return latest[0] ?? null;
}

export async function getPostsByFilter(type) {
  let categoryFilter = "";
  if (type === "blog") categoryFilter = `&& category == "Blogs"`;
  else if (type === "case-study")
    categoryFilter = `&& category == "Case Studies"`;

  return sanityClient.fetch(
    `*[_type == "post" ${categoryFilter}] | order(publishedAt desc) { ${postFields} }`,
    {},
    REVALIDATE,
  );
}

export async function getPostBySlug(slug) {
  const results = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0..0] {
      ${postFields},
      body
    }`,
    { slug },
    REVALIDATE,
  );
  return results[0] ?? null;
}

export async function getLatestPosts(limit = 3) {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc)[0..${limit - 1}] { ${postFields} }`,
    {},
    REVALIDATE,
  );
}

export async function getAllTopics() {
  return sanityClient.fetch(
    `*[_type == "topic"] | order(title asc) { _id, title, slug }`,
    {},
    REVALIDATE,
  );
}

export async function getAllPostSlugs() {
  const posts = await sanityClient.fetch(
    `*[_type == "post"] { slug }`,
    {},
    REVALIDATE,
  );
  return posts.map((p) => ({ slug: p.slug.current }));
}
