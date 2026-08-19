import { Suspense } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ShaderAnimation } from "@/components/ShaderAnimationLazy";
import CTASection from "@/components/CTASection";
import ProjectFilterBar from "@/components/ProjectFilterBar";
import { ProjectCard } from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";
import { LayoutGrid } from "lucide-react";

export const revalidate = 600; // Revalidate every 10 minutes (ISR)

export const metadata = {
  title: "Projects | ScaleForge",
  description:
    "Browse the ScaleForge project portfolio — websites, AI automation systems, SEO campaigns, and branding work built for ambitious businesses.",
  alternates: {
    canonical: "https://scalesforge.site/projects",
    languages: {
      "en": "https://scalesforge.site/projects",
      "x-default": "https://scalesforge.site/projects"
    },
    media: {
      "only screen and (max-width: 640px)": "https://scalesforge.site/projects"
    }
  },
  keywords: ["ScaleForge Case Studies","Web Design Portfolio","AI Development Projects","Client Work","Next.js Site Examples"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    title:
      "Projects | ScaleForge",
    description:
      "Browse the ScaleForge project portfolio — websites, AI automation systems, SEO campaigns, and branding work built for ambitious businesses.",
    url: "https://scalesforge.site/projects",
    siteName: "ScaleForge",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Projects | ScaleForge",
    description:
      "Browse the ScaleForge project portfolio — websites, AI automation systems, SEO campaigns, and branding work built for ambitious businesses.",
    images: ["/og-image.png"],
  },
};

function getImageUrl(project) {
  return project.coverImage?.localPath || project.coverImage?.url || null;
}

export default async function ProjectsPage({ searchParams }) {
  const params = await searchParams;
  const rawCategory = params.category;
  // Next.js searchParams delivers "+" literally (not decoded to space).
  // Decode it so "Web+Development" matches "Web Development".
  const category = rawCategory
    ? decodeURIComponent(rawCategory.replace(/\+/g, " "))
    : undefined;

  let projects = projectsData;
  if (category && category !== "all") {
    projects = projectsData.filter(
      (p) => p.category?.toLowerCase() === category.toLowerCase()
    );
  }

  // Only split out a featured project on the unfiltered "All Projects" view.
  // When a category filter is active the featured banner is hidden (!category guard),
  // so we must NOT remove the featured project from the grid — or it disappears entirely.
  const featured = !category ? projects.find((p) => p.featured) : null;
  const grid = featured ? projects.filter((p) => p._id !== featured._id) : projects;

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Projects | ScaleForge",
    "description": "Browse the ScaleForge project portfolio — websites, AI automation systems, SEO campaigns, and branding work built for ambitious businesses.",
    "url": "https://scalesforge.site/projects",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projects.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "CreativeWork",
          "name": p.title,
          "description": p.excerpt || p.title,
          "url": p.slug?.current ? `https://scalesforge.site/projects/${p.slug.current}` : "https://scalesforge.site/projects"
        }
      }))
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://scalesforge.site"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://scalesforge.site/projects"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#08090a]">
        <div className="pointer-events-none absolute inset-0 z-0">
          <ShaderAnimation />
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#08090a]/80" />
        <div className="bg-grid-dark bg-grid-fade pointer-events-none absolute inset-0 z-[2]" />
        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center px-6 pb-16 pt-32 text-center lg:px-10 lg:pt-28">
          <Reveal className="mx-auto flex max-w-4xl flex-col items-center">
            <span className="font-accent text-[10px] uppercase tracking-[0.2em] text-white/35">
              Our Work
            </span>
            <h1 className="mt-6 text-[clamp(1.8rem,7vw,3rem)] font-display font-normal leading-[1.14] text-white">
              Projects That Prove What&apos;s Possible
            </h1>
            <h2 className="mx-auto mt-6 text-center text-[15px] leading-[1.8] text-white/50">
              Real websites, real SEO results, real AI systems — built for
              ambitious brands that refuse to settle for average.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Filter */}
      <Suspense>
        <ProjectFilterBar />
      </Suspense>

      {/* Grid */}
      <section className="bg-[#08080a] py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto mb-16 max-w-7xl space-y-4 text-center text-[15px] leading-[1.8] text-white/50">
            <p>
              Real websites, real SEO results, real AI systems, built for
              ambitious brands that refuse to settle for average. At ScaleForge,
              our portfolio represents more than just aesthetic design; it
              showcases engineered growth. We partner with industry-leading
              founders and marketing teams to architect digital experiences that
              seamlessly convert visitors into loyal customers. Our approach
              prioritizes performance, technical excellence, and user-centric
              design principles. Whether we are developing a lightning-fast
              Next.js web application, orchestrating a technical SEO turnaround
              to capture organic market share, or building custom AI automation
              pipelines to streamline backend operations, every project is
              treated as a foundational asset for your business. We don't just
              build websites; we build scalable digital infrastructure. Explore
              our recent case studies and client deployments below to see how we
              meticulously blend data-driven strategy, modern web typography,
              and premium software engineering to deliver measurable,
              compounding ROI across every single engagement.
            </p>
          </Reveal>

          {/* Featured project */}
          {featured && !category && (
            <Reveal className="mb-12">
              <Link
                href={`/projects/${featured.slug.current}`}
                className="group relative block overflow-hidden rounded-3xl border border-white/[0.07] bg-[#101013]"
              >
                {(featured.coverImage?.localPath || featured.coverImage?.url) && (
                  <div className="relative aspect-[21/9] overflow-hidden">
                    <img
                      src={featured.coverImage.localPath || featured.coverImage.url}
                      alt={featured.coverImage.alt ?? featured.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090a] via-[#08090a]/40 to-transparent" />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-white/10 px-3 py-1 font-accent text-[10px] uppercase tracking-[0.12em] text-white/50">
                      {featured.category}
                    </span>
                    {featured.client && (
                      <span className="text-[12px] text-white/35">
                        {featured.client}
                      </span>
                    )}
                    {featured.featured && (
                      <span className="rounded-full border border-[#5e6ad2]/40 bg-[#5e6ad2]/10 px-3 py-1 font-accent text-[10px] uppercase tracking-[0.12em] text-[#a5aef0]">
                        Featured
                      </span>
                    )}
                  </div>
                  <h2 className="mt-3 max-w-2xl text-[clamp(1.4rem,3vw,2rem)] font-medium leading-snug text-white">
                    {featured.title}
                  </h2>
                  {featured.excerpt && (
                    <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-white/60 line-clamp-2">
                      {featured.excerpt}
                    </p>
                  )}
                  {Array.isArray(featured.results) &&
                    featured.results.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-6">
                        {featured.results.slice(0, 3).map((r) => (
                          <div key={r.label}>
                            <p className="text-[22px] font-bold text-white">
                              {r.value}
                            </p>
                            <p className="text-[11px] uppercase tracking-[0.08em] text-white/40">
                              {r.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                </div>
              </Link>
            </Reveal>
          )}

          {/* Empty state */}
          {projects.length === 0 && (
            <div className="py-24 text-center">
              <LayoutGrid
                size={48}
                className="mx-auto text-white/10"
                aria-hidden
              />
              <p className="mt-4 text-[15px] text-white/30">
                {category
                  ? `No ${category} projects yet — check back soon.`
                  : "No projects published yet — check back soon."}
              </p>
            </div>
          )}

          {/* Project grid */}
          {grid.length > 0 && (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {grid.map((project) => (
                <ProjectCard
                  key={project._id}
                  href={`/projects/${project.slug.current}`}
                  title={project.title}
                  excerpt={project.excerpt}
                  image={getImageUrl(project)}
                  category={project.category}
                  client={project.client}
                  featured={project.featured}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Ready to Build Something Like This?"
        body="Let's talk about your goals. ScaleForge delivers websites, SEO systems, and AI automation that drive real, measurable results."
        primaryCta={{ label: "Book a Free Strategy Call", href: "/contact" }}
        secondaryCta={{ label: "View Our Services", href: "/services" }}
      />
    </>
  );
}
