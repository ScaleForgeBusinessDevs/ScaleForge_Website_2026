import { sanityClient } from "./client";

export interface SanityProjectResult {
  value: string;
  label: string;
}

export interface SanityProjectImage {
  asset: { _ref: string } | null;
  alt?: string;
  caption?: string;
}

export interface SanityProject {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  client?: string;
  projectUrl?: string;
  coverImage?: SanityProjectImage | null;
  gallery?: SanityProjectImage[];
  excerpt: string;
  results?: SanityProjectResult[];
  challenge?: string;
  solution?: string;
  body?: unknown[];
  publishedAt: string;
  featured?: boolean;
}

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

const REVALIDATE = { next: { revalidate: 3600 } };

export async function getAllProjects(): Promise<SanityProject[]> {
  return sanityClient.fetch(
    `*[_type == "project"] | order(featured desc, publishedAt desc) { ${projectFields} }`,
    {},
    REVALIDATE
  );
}

export async function getProjectsByCategory(category?: string): Promise<SanityProject[]> {
  const filter = category && category !== "all"
    ? `&& category == $category`
    : "";
  return sanityClient.fetch(
    `*[_type == "project" ${filter}] | order(featured desc, publishedAt desc) { ${projectFields} }`,
    { category: category ?? "" },
    REVALIDATE
  );
}

export async function getProjectBySlug(slug: string): Promise<SanityProject | null> {
  const results = await sanityClient.fetch<SanityProject[]>(
    `*[_type == "project" && slug.current == $slug][0..0] {
      ${projectFields},
      body
    }`,
    { slug },
    REVALIDATE
  );
  return results[0] ?? null;
}

export async function getAllProjectSlugs(): Promise<{ slug: string }[]> {
  const projects = await sanityClient.fetch<{ slug: { current: string } }[]>(
    `*[_type == "project"] { slug }`,
    {},
    REVALIDATE
  );
  return projects.map((p) => ({ slug: p.slug.current }));
}
