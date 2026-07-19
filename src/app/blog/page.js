import Link from "next/link";
import { Suspense } from "react";
import Reveal from "@/components/Reveal";
import { ShaderAnimation } from "@/components/ShaderAnimationLazy";
import CTASection from "@/components/CTASection";
import BlogFilterBar from "@/components/BlogFilterBar";
import BlogNewsletterCard from "@/components/BlogNewsletterCard";
import { GlassBlogCard } from "@/components/GlassBlogCard";
import { getFeaturedPost, getPostsByFilter } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/client";
import { Search, ArrowRight } from "lucide-react";

export const dynamic = "force-dynamic";

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const isCaseStudy =
    params.type === "case-study" || params.type === "case-studies";
  const title = isCaseStudy
    ? "Case Studies | ScaleForge"
    : "Blog & Insights | ScaleForge";
  const description = isCaseStudy
    ? "Explore our latest case studies and success stories."
    : "Practical guides on Next.js, SEO, AI automation, and web development from ScaleForge.";
  return {
    title,
    description,
    alternates: {
    canonical: "https://scalesforge.site/blog",
    languages: {
      "en": "https://scalesforge.site/blog",
      "x-default": "https://scalesforge.site/blog"
    },
    media: {
      "only screen and (max-width: 640px)": "https://scalesforge.site/blog"
    }
  },
  keywords: ["ScaleForge Blog","SEO Tips","Web Development Insights","AI Automation Workflows","Digital Branding Advice"],
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
      "",
    description:
      "",
    url: "https://scalesforge.site/blog",
    siteName: "ScaleForge",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "",
    description:
      "",
    images: ["/og-image.png"],
  },
  };
}

export default function BlogPage() {

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#08090a]">
        <div className="pointer-events-none absolute inset-0 z-0">
          <ShaderAnimation />
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#08090a]/80" />
        <div className="bg-grid-dark bg-grid-fade pointer-events-none absolute inset-0 z-[2]" />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 pt-32 lg:px-10 lg:pt-28">
          <Reveal className="max-w-2xl">
            <h1 className="mt-6 text-[clamp(1.8rem,7vw,3rem)] font-display font-normal leading-[1.14] text-white">
              The ScaleForge Blog : Actionable Insights
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">
              No fluff. No filler. Practical web design, custom engineering,
              SEO, and AI automation playbooks from a team that actually builds
              and ranks websites for a living.
            </p>
            <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-white/35">
              Vague growth hacks and outdated ranking recommendations cost
              businesses real leads. We document direct lessons from coding fast
              Next.js interfaces, auditing technical sitemap errors, optimizing
              local search visibility, and building AI systems that drive real
              business outcomes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter Bar */}
      <Suspense>
        <BlogFilterBar />
      </Suspense>

      {/* Content */}
      <section className="bg-[#08080a] py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          {/* Featured Article */}
          {featured && !type && (
            <Reveal className="mb-10">
              <FeaturedPostCard post={featured} />
            </Reveal>
          )}

          {/* Empty state */}
          {gridPosts.length === 0 && (
            <div className="py-20 text-center">
              <Search size={36} className="mx-auto text-white/20" aria-hidden />
              <p className="mt-4 text-[15px] text-white/40">
                {posts.length === 0
                  ? "No articles yet — check back soon."
                  : "No articles match the selected filters."}
              </p>
            </div>
          )}

          {/* Article Grid with newsletter interleaved */}
          {gridPosts.length > 0 && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gridPosts.slice(0, NEWSLETTER_INSERT_AFTER).map((post) => (
                <GlassBlogCard
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  title={post.title}
                  excerpt={post.excerpt}
                  image={
                    post.featuredImage?.asset
                      ? urlFor(post.featuredImage).width(600).height(338).url()
                      : null
                  }
                  author={post.author ? { name: post.author.name } : undefined}
                  date={formatDate(post.publishedDate)}
                  readTime={post.readTime ?? 5}
                  tags={[post.type === "case-study" ? "Case Study" : "Blog"]}
                />
              ))}
              {gridPosts.length >= NEWSLETTER_INSERT_AFTER && (
                <BlogNewsletterCard />
              )}
              {gridPosts.slice(NEWSLETTER_INSERT_AFTER).map((post) => (
                <GlassBlogCard
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  title={post.title}
                  excerpt={post.excerpt}
                  image={
                    post.featuredImage?.asset
                      ? urlFor(post.featuredImage).width(600).height(338).url()
                      : null
                  }
                  author={post.author ? { name: post.author.name } : undefined}
                  date={formatDate(post.publishedDate)}
                  readTime={post.readTime ?? 5}
                  tags={[post.type === "case-study" ? "Case Study" : "Blog"]}
                />
              ))}
            </div>
          )}

          {/* Standalone newsletter if not enough posts to trigger inline */}
          {gridPosts.length > 0 &&
            gridPosts.length < NEWSLETTER_INSERT_AFTER && (
              <div className="mt-10 max-w-sm">
                <BlogNewsletterCard />
              </div>
            )}
        </div>
      </section>

      <CTASection
        title="Want Us to Apply This to Your Business?"
        body="Reading about speed benchmarks and schema guidelines is useful. Hiring our engineering team to execute on a custom SEO roadmap is far more profitable."
        primaryCta={{ label: "Book a Free Strategy Call", href: "/contact" }}
        secondaryCta={{ label: "Browse Our Services", href: "/services" }}
      />
    </>
  );
}
