import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { getProjectBySlug, getAllProjectSlugs, getProjectsByCategory } from "@/lib/sanity/projectQueries";
import type { SanityProject } from "@/lib/sanity/projectQueries";
import { urlFor } from "@/lib/sanity/client";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectGallery } from "@/components/ProjectGallery";

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const slugs = await getAllProjectSlugs();
    return slugs.map((s) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const project = await getProjectBySlug(slug);
    if (!project) return { title: "Project Not Found" };
    const imgUrl = project.coverImage?.asset
      ? urlFor(project.coverImage).width(1200).height(630).url()
      : undefined;
    return {
      title: `${project.title} | ScaleForge Projects`,
      description: project.excerpt,
      openGraph: {
        title: project.title,
        description: project.excerpt,
        images: imgUrl ? [{ url: imgUrl, width: 1200, height: 630 }] : undefined,
      },
    };
  } catch {
    return { title: "ScaleForge Projects" };
  }
}

const ptComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h2 className="mb-4 mt-10 text-[26px] font-medium leading-snug text-white sm:text-[30px]">{children}</h2>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-10 text-[22px] font-medium leading-snug text-white sm:text-[25px]">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 text-[19px] font-medium leading-snug text-white">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="mb-5 text-[16.5px] leading-[1.7] text-white/60">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-2 border-[#5e6ad2]/60 pl-6 text-[17px] italic leading-relaxed text-white/55">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mb-5 ml-1 space-y-2.5 text-[16px] leading-relaxed text-white/55">{children}</ul>,
    number: ({ children }) => <ol className="mb-5 ml-5 list-decimal space-y-2.5 text-[16px] leading-relaxed text-white/55">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex gap-2.5 before:mt-2.5 before:block before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-white/30">
        {children}
      </li>
    ),
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
    em: ({ children }) => <em className="italic text-white/75">{children}</em>,
    link: ({ value, children }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-[#93b4ff] underline decoration-[#5e6ad2]/40 underline-offset-4 hover:decoration-[#93b4ff]/60">
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          <img
            src={urlFor(value).width(1100).url()}
            alt={value.alt ?? ""}
            className="w-full rounded-2xl"
          />
          {value.caption && (
            <figcaption className="mt-3 text-center text-[13px] text-white/35">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

const CATEGORY_COLORS: Record<string, string> = {
  "Web Design": "border-[#5e6ad2]/40 text-[#a5aef0]",
  "Web Development": "border-[#2563eb]/40 text-[#93b4ff]",
  "SEO": "border-emerald-500/40 text-emerald-300",
  "AI Automation": "border-violet-500/40 text-violet-300",
  "Social Media Branding": "border-pink-500/40 text-pink-300",
  "Content Creation": "border-amber-500/40 text-amber-300",
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let project: SanityProject | null = null;
  let related: SanityProject[] = [];

  try {
    project = await getProjectBySlug(slug);
    if (!project) notFound();

    const relatedRaw = await getProjectsByCategory(project.category);
    related = relatedRaw.filter((p) => p._id !== project!._id).slice(0, 3);
  } catch {
    notFound();
  }

  if (!project) notFound();

  const heroImgUrl = project.coverImage?.asset
    ? urlFor(project.coverImage).width(1440).height(810).url()
    : null;

  const categoryStyle = CATEGORY_COLORS[project.category] ?? "border-white/20 text-white/50";

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#08080a] pb-0 pt-36 lg:pt-44">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center gap-2 font-accent text-[10px] uppercase tracking-[0.14em] text-white/35">
              <Link href="/" className="hover:text-white/60">Home</Link>
              <i className="bi bi-chevron-right text-[8px]" aria-hidden />
              <Link href="/projects" className="hover:text-white/60">Projects</Link>
              <i className="bi bi-chevron-right text-[8px]" aria-hidden />
              <span className="text-white/50">{project.title}</span>
            </nav>

            {/* Category + date */}
            <div className="flex flex-wrap items-center gap-3">
              <span className={`rounded-full border px-3 py-1 font-accent text-[10px] uppercase tracking-[0.12em] ${categoryStyle}`}>
                {project.category}
              </span>
              <span className="text-[12px] text-white/35">{formatDate(project.publishedAt)}</span>
            </div>

            {/* Title */}
            <h1 className="mt-5 max-w-4xl text-[clamp(1.8rem,4.5vw,3rem)] font-display font-normal leading-[1.12] text-white">
              {project.title}
            </h1>

            {/* Client + live link */}
            <div className="mt-5 flex flex-wrap items-center gap-4">
              {project.client && (
                <span className="flex items-center gap-2 text-[13px] text-white/45">
                  <i className="bi bi-building text-[12px]" aria-hidden />
                  {project.client}
                </span>
              )}
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-1.5 text-[12px] font-[500] text-white/65 transition-all hover:border-white/25 hover:text-white"
                >
                  <i className="bi bi-box-arrow-up-right text-[11px]" aria-hidden />
                  View Live Site
                </a>
              )}
            </div>
          </Reveal>
        </div>

        {/* Hero image */}
        {heroImgUrl && (
          <div className="mt-10">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
              <img
                src={heroImgUrl}
                alt={project.coverImage?.alt ?? project.title}
                className="w-full rounded-t-3xl object-cover"
                style={{ maxHeight: "70vh" }}
              />
            </div>
          </div>
        )}
      </section>

      {/* Metrics strip */}
      {Array.isArray(project.results) && project.results.length > 0 && (
        <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-10">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
            <Reveal stagger staggerAmount={0.07} className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
              {project.results.map((r) => (
                <div key={r.label} className="text-center">
                  <p
                    className="text-[clamp(1.8rem,4vw,2.75rem)] font-bold tracking-[-0.02em] text-white"
                    style={{ textShadow: "0 0 40px rgba(255,255,255,0.25)" }}
                  >
                    {r.value}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.1em] text-white/40">{r.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* Challenge + Solution + Body */}
      <section className="bg-[#08080a] py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_300px]">

            {/* Main */}
            <div className="min-w-0">
              {/* Challenge / Solution */}
              {(project.challenge || project.solution) && (
                <Reveal>
                  <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {project.challenge && (
                      <div className="rounded-2xl border border-white/[0.07] bg-[#101013] p-7">
                        <p className="mb-3 font-accent text-[10px] uppercase tracking-[0.15em] text-white/35">The Challenge</p>
                        <p className="text-[15px] leading-relaxed text-white/65">{project.challenge}</p>
                      </div>
                    )}
                    {project.solution && (
                      <div className="rounded-2xl border border-[#5e6ad2]/20 bg-[#5e6ad2]/[0.05] p-7">
                        <p className="mb-3 font-accent text-[10px] uppercase tracking-[0.15em] text-[#a5aef0]/60">Our Solution</p>
                        <p className="text-[15px] leading-relaxed text-white/65">{project.solution}</p>
                      </div>
                    )}
                  </div>
                </Reveal>
              )}

              {/* Body */}
              {project.body && (
                <Reveal>
                  <div className="prose-custom max-w-none">
                    <PortableText value={project.body as never} components={ptComponents} />
                  </div>
                </Reveal>
              )}

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <Reveal className="mt-14">
                  <h2 className="mb-6 text-[18px] font-medium text-white">Project Gallery</h2>
                  <ProjectGallery
                    projectTitle={project.title}
                    images={project.gallery
                      .filter((img) => img.asset)
                      .map((img) => ({
                        src: urlFor(img).width(1600).height(1000).url(),
                        alt: img.alt,
                        caption: img.caption,
                      }))}
                  />
                </Reveal>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <Reveal>
                <div className="rounded-2xl border border-white/[0.07] bg-[#101013] p-6">
                  <p className="mb-4 font-accent text-[10px] uppercase tracking-[0.15em] text-white/35">Project Details</p>
                  <dl className="space-y-3.5">
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.08em] text-white/30">Category</dt>
                      <dd className="mt-0.5 text-[14px] text-white/75">{project.category}</dd>
                    </div>
                    {project.client && (
                      <div>
                        <dt className="text-[11px] uppercase tracking-[0.08em] text-white/30">Client</dt>
                        <dd className="mt-0.5 text-[14px] text-white/75">{project.client}</dd>
                      </div>
                    )}
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.08em] text-white/30">Completed</dt>
                      <dd className="mt-0.5 text-[14px] text-white/75">{formatDate(project.publishedAt)}</dd>
                    </div>
                    {project.projectUrl && (
                      <div>
                        <dt className="text-[11px] uppercase tracking-[0.08em] text-white/30">Live URL</dt>
                        <dd className="mt-0.5">
                          <a
                            href={project.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="truncate text-[13px] text-[#93b4ff] underline decoration-[#5e6ad2]/30 underline-offset-4 hover:decoration-[#93b4ff]/60"
                          >
                            {project.projectUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                          </a>
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>

                {/* CTA */}
                <div className="mt-5 rounded-2xl border border-[#2563eb]/20 bg-[#2563eb]/[0.06] p-6">
                  <p className="text-[14px] font-medium text-white">Want results like these?</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/45">
                    Let&apos;s discuss what ScaleForge can build for your business.
                  </p>
                  <Link
                    href="https://cal.com/shahood-saleem-gbzisb/30min"
                    className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#2563eb] px-5 py-2.5 text-[13px] font-[500] text-white transition-transform hover:scale-[1.02]"
                  >
                    Book a Free Strategy Call
                    <i className="bi bi-arrow-right" aria-hidden />
                  </Link>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="border-t border-white/[0.06] bg-[#08080a] py-16 lg:py-20">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
            <Reveal>
              <h2 className="mb-10 text-[clamp(1.4rem,3vw,1.75rem)] font-display font-normal text-white">
                More {project.category} Projects
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProjectCard
                  key={p._id}
                  href={`/projects/${p.slug.current}`}
                  title={p.title}
                  excerpt={p.excerpt}
                  image={p.coverImage?.asset ? urlFor(p.coverImage).width(600).height(375).url() : null}
                  category={p.category}
                  client={p.client}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Ready to Build Something Like This?"
        body="Let's talk about your goals. ScaleForge delivers websites, SEO systems, and AI automation that drive real, measurable results."
        primaryCta={{ label: "Book a Free Strategy Call", href: "/contact" }}
        secondaryCta={{ label: "See More Projects", href: "/projects" }}
      />
    </>
  );
}
