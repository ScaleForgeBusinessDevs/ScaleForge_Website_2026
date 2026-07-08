import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { GlassBlogCard } from "./GlassBlogCard";
import { getLatestPosts } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/client";

export default async function Insights() {
  let posts: Awaited<ReturnType<typeof getLatestPosts>> = [];

  try {
    posts = await getLatestPosts(3);
  } catch {
    // Sanity not configured or empty — fall through to empty state
  }

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", { month: "short", year: "numeric" });
  }

  return (
    <section className="border-t border-white/[0.06] bg-[#0c0c0f] py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)] font-display font-normal tracking-normal leading-[1.15] text-white">
              Insights &amp; Updates
            </h2>
            <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-white/45">
              Field notes, guides and ideas from the team building ScaleForge.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-[13.5px] font-medium text-white/55 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white/50"
          >
            View all posts <ArrowRight size={14} className="inline" aria-hidden />
          </Link>
        </Reveal>

        {posts.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {posts.map((post) => (
              <GlassBlogCard
                key={post._id}
                href={`/blog/${post.slug.current}`}
                title={post.title}
                excerpt={post.excerpt}
                image={post.featuredImage?.asset ? urlFor(post.featuredImage).width(600).height(338).url() : null}
                author={post.author ? { name: post.author.name } : undefined}
                date={formatDate(post.publishedDate)}
                readTime={post.readTime ?? 5}
                tags={[post.type === "case-study" ? "Case Study" : "Blog"]}
              />
            ))}
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {/* Placeholder skeletons while no posts exist */}
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-[340px] animate-pulse rounded-2xl border border-white/[0.06] bg-[#161718]/60"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
