import Image from "next/image";
import Reveal from "@/components/Reveal";
import { LinkedinIcon } from "@/components/BrandIcons";
import { ExternalLink } from "lucide-react";
import { LINKEDIN_POSTS, LINKEDIN_COMPANY_URL } from "@/config/linkedin-posts";

import Link from "next/link";

// ─── Sub-components ────────────────────────────────────────────────────────────

function PostCard({ post }) {
  return (
    <div className="group flex flex-col justify-between gap-6 rounded-2xl border border-white/[0.07] bg-[#101013] p-7 transition-all duration-300 hover:border-white/[0.14] hover:bg-[#131316]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0a66c2]/20 text-[#0a66c2]">
            <LinkedinIcon size={14} aria-hidden />
          </span>
          <span className="font-accent text-[10px] uppercase tracking-[0.14em] text-white/40">
            ScaleForge
          </span>
        </div>
        <span className="text-[12px] text-white/30">{post.publishedAt}</span>
      </div>

      {/* Body */}
      <p className="flex-1 whitespace-pre-line text-[14px] leading-relaxed text-white/65">
        {post.commentary}
      </p>

      {/* Image if available */}
      {post.imageUrl && (
        <div className="relative h-64 overflow-hidden rounded-xl border border-white/[0.05] bg-white/[0.02]">
          <Image
            src={post.imageUrl}
            alt={`ScaleForge LinkedIn post from ${post.publishedAt}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
          />
        </div>
      )}

      {/* Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.05] pt-4">
        <a
          href={post.postUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[12px] font-medium text-white/35 transition-colors duration-200 hover:text-white/60"
        >
          View on LinkedIn
          <ExternalLink size={11} aria-hidden />
        </a>
        {post.relatedService && (
          <Link
            href={post.relatedService.href}
            className="inline-flex items-center rounded-full bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-medium text-white/55 transition-colors duration-200 hover:bg-[#2563eb]/20 hover:text-white"
          >
            {post.relatedService.name} →
          </Link>
        )}
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default async function LinkedInPosts() {
  const posts = LINKEDIN_POSTS;

  return (
    <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0a66c2]/20 text-[#0a66c2]">
              <LinkedinIcon size={13} aria-hidden />
            </span>
            <span className="font-accent text-[10px] uppercase tracking-[0.18em] text-white/40">
              Latest from LinkedIn
            </span>
          </span>
          <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
            See Our Work in the Wild
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/60">
            Real insights, campaign results, and branding breakdowns, pulled
            from our LinkedIn.
          </p>
        </Reveal>

        {posts && posts.length > 0 ? (
          <Reveal
            stagger
            staggerAmount={0.08}
            className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3"
          >
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </Reveal>
        ) : (
          <Reveal className="mt-14 text-center text-white/60">
            No posts configured yet.
          </Reveal>
        )}

        <Reveal className="mt-10 flex justify-center">
          <a
            href={LINKEDIN_COMPANY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-accent text-[11px] uppercase tracking-[0.12em] text-white/60 transition-colors hover:border-white/30 hover:text-white"
          >
            <LinkedinIcon size={13} aria-hidden />
            Follow ScaleForge on LinkedIn
          </a>
        </Reveal>
      </div>
    </section>
  );
}
