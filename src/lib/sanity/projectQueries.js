import { sanityClient } from "./client";

const projectFields = `
  _id,
  title,
  slug,
  category,
  client,
  projectUrl,
  coverImage{ asset, alt },
  "gallery": gallery[]{ asset, alt, caption },
  excerpt,
  results,
  challenge,
  solution,
  publishedAt,
  featured
`;

const REVALIDATE = { next: { revalidate: 0 } };

export async function getAllProjects() {
  return sanityClient.fetch(
    `*[_type == "project"] | order(featured desc, publishedAt desc) { ${projectFields} }`,
    {},
    REVALIDATE,
  );
}

export async function getProjectsByCategory(category) {
  const filter =
    category && category !== "all" ? `&& category == $category` : "";
  return sanityClient.fetch(
    `*[_type == "project" ${filter}] | order(featured desc, publishedAt desc) { ${projectFields} }`,
    { category: category ?? "" },
    REVALIDATE,
  );
}

export async function getProjectBySlug(slug) {
  const results = await sanityClient.fetch(
    `*[_type == "project" && slug.current == $slug][0..0] {
      ${projectFields},
      body
    }`,
    { slug },
    REVALIDATE,
  );
  return results[0] ?? null;
}

export async function getAllProjectSlugs() {
  const projects = await sanityClient.fetch(
    `*[_type == "project"] { slug }`,
    {},
    REVALIDATE,
  );
  return projects.map((p) => ({ slug: p.slug.current }));
}
