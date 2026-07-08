import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import NewsletterForm from "@/components/NewsletterForm";
import { getPostBySlug, getAllPostSlugs, getPostsByFilter } from "@/lib/sanity/queries";
import type { SanityPost } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/client";
import { GlassBlogCard } from "@/components/GlassBlogCard";
import { ChevronRight, ArrowRight, Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/BrandIcons";
import TwitterXIcon from "@/components/TwitterXIcon";

export const revalidate = 3600; // ISR: revalidate every hour

export async function generateStaticParams() {
  try {
    const slugs = await getAllPostSlugs();
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
    const post = await getPostBySlug(slug);
    if (!post) return { title: "Post Not Found" };
    const imgUrl = post.featuredImage?.asset
      ? urlFor(post.featuredImage).width(1200).height(630).url()
      : undefined;
    let finalTitle = post.seoTitle ?? `${post.title} | ScaleForge Blog`;
    if (finalTitle.length > 70) {
      finalTitle = post.title;
      if (finalTitle.length > 70) {
        finalTitle = finalTitle.substring(0, 67) + "...";
      }
    }

    return {
      title: finalTitle,
      description: post.seoDescription ?? post.excerpt,
      alternates: {
        canonical: `https://scaleforgewebdev.vercel.app/blog/${slug}`,
      },
      openGraph: {
        title: finalTitle,
        description: post.excerpt,
        url: `https://scaleforgewebdev.vercel.app/blog/${slug}`,
        siteName: "ScaleForge",
        images: imgUrl ? [{ url: imgUrl, width: 1200, height: 630 }] : undefined,
        type: "article",
        publishedTime: post.publishedDate,
        modifiedTime: post.lastUpdatedDate ?? post.publishedDate,
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.excerpt,
        images: imgUrl ? [imgUrl] : undefined,
      },
    };
  } catch {
    return {
      title: "ScaleForge Blog",
      alternates: {
        canonical: `https://scaleforgewebdev.vercel.app/blog/${slug}`,
      },
    };
  }
}

// Portable Text custom components
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
      <p className="mb-5 text-[16.5px] leading-[1.7] text-white/60 sm:text-[17.5px]">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-2 border-[#e8633a]/60 pl-6 text-[17px] italic leading-relaxed text-white/55">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-5 ml-1 space-y-2.5 text-[16px] leading-relaxed text-white/55">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-5 ml-4 list-decimal space-y-2.5 text-[16px] leading-relaxed text-white/55">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-2.5">
        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-white/35" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-white/80">{children}</strong>,
    em: ({ children }) => <em className="italic text-white/60">{children}</em>,
    code: ({ children }) => (
      <code className="rounded-md border border-white/10 bg-white/[0.05] px-1.5 py-0.5 font-mono text-[14px] text-[#6fcf8e]">
        {children}
      </code>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
        rel={value?.href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="text-white/75 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      const imgUrl = urlFor(value).width(900).url();
      return (
        <figure className="my-8">
          <img src={imgUrl} alt={value.alt ?? ""} className="w-full rounded-2xl" />
          {value.caption && (
            <figcaption className="mt-2 text-center text-[12.5px] italic text-white/35">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
    code: ({ value }) => (
      <div className="my-6 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#101013]">
        {value.language && (
          <p className="border-b border-white/[0.07] px-5 py-2.5 font-accent text-[10px] uppercase tracking-[0.12em] text-white/35">
            {value.language}
          </p>
        )}
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-white/65">
          <code>{value.code}</code>
        </pre>
      </div>
    ),
  },
};

function getTopicServiceLink(topicSlug?: string): { href: string; label: string } {
  const map: Record<string, { href: string; label: string }> = {
    seo: { href: "/services/seo", label: "compounding SEO retainers" },
    "ai-automation": { href: "/services/ai-development", label: "AI automation pipelines" },
    "web-development": { href: "/services/web-development", label: "fast Next.js websites" },
    "web-design": { href: "/services/web-design", label: "conversion-focused web design" },
    "content-strategy": { href: "/services/content-creation", label: "authority-building content" },
  };
  return map[topicSlug ?? ""] ?? { href: "/services", label: "high-performance digital systems" };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}


export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post: SanityPost | null = null;
  let relatedPosts: SanityPost[] = [];

  try {
    post = await getPostBySlug(slug);
    if (!post) notFound();

    const relatedRaw = await getPostsByFilter(post.type);
    relatedPosts = relatedRaw.filter((p) => p._id !== post!._id).slice(0, 3);
  } catch {
    notFound();
  }

  if (!post) notFound();

  const heroImgUrl = post.featuredImage?.asset
    ? urlFor(post.featuredImage).width(1200).height(630).url()
    : null;
  const primaryTopic = post.topicTags?.[0];
  const serviceLink = getTopicServiceLink(primaryTopic?.slug.current);

  return (
    <>
      {/* Article Hero */}
      <article>
        <section className="relative bg-[#08080a] pb-10 pt-40 lg:pt-48">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
            {/* Breadcrumb */}
            <Reveal>
              <nav className="mb-6 flex items-center gap-2 font-accent text-[10px] uppercase tracking-[0.14em] text-white/35">
                <Link href="/" className="hover:text-white/60">Home</Link>
                <ChevronRight size={10} className="text-white/35" aria-hidden />
                <Link href="/blog" className="hover:text-white/60">Blog</Link>
                {primaryTopic && (
                  <>
                    <ChevronRight size={10} className="text-white/35" aria-hidden />
                    <span className="text-white/50">{primaryTopic.title}</span>
                  </>
                )}
              </nav>

              <div className="flex items-center gap-3">
                {primaryTopic && (
                  <span className="rounded-full border border-white/10 px-3 py-1 font-accent text-[10px] uppercase tracking-[0.12em] text-white/45">
                    {primaryTopic.title}
                  </span>
                )}
                <span className="rounded-full border border-white/[0.07] px-3 py-1 font-accent text-[10px] uppercase tracking-[0.12em] text-white/35">
                  {post.type === "case-study" ? "Case Study" : "Blog"}
                </span>
              </div>

              <h1 className="mt-5 max-w-3xl text-[clamp(1.8rem,4.5vw,3rem)] font-display font-normal leading-[1.14] text-white">
                {post.title}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-[13px] text-white/40">
                {post.author && (
                  <span className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-semibold text-white/60">
                      {post.author.name[0]}
                    </span>
                    {post.author.name}
                  </span>
                )}
                <span>{formatDate(post.publishedDate)}</span>
                {post.lastUpdatedDate && post.lastUpdatedDate !== post.publishedDate && (
                  <span className="text-[#e8633a]/70">Updated {formatDate(post.lastUpdatedDate)}</span>
                )}
                <span>{post.readTime ?? 5} min read</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Hero Image */}
        {heroImgUrl && (
          <div className="bg-[#08080a] py-6">
            <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
              <img
                src={heroImgUrl}
                alt={post.featuredImage?.alt ?? post.title}
                className="w-full rounded-3xl"
              />
            </div>
          </div>
        )}

        {/* Article Body + Sidebar */}
        <section className="bg-[#08080a] py-12 lg:py-16">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_280px]">
              {/* Main Content */}
              <div className="min-w-0">
                <div className="prose-custom max-w-none">
                  {post.body && <PortableText value={post.body as never} components={ptComponents} />}
                </div>

                {/* Mid-article CTA */}
                <div className="my-10 rounded-2xl border border-white/[0.09] bg-[#101013] p-7">
                  <p className="text-[15px] font-medium text-white">Want this implemented properly?</p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-white/45">
                    ScaleForge builds{" "}
                    <Link href={serviceLink.href} className="text-white/70 underline decoration-white/20 underline-offset-4 hover:text-white">
                      {serviceLink.label}
                    </Link>{" "}
                    for ambitious businesses.
                  </p>
                  <Link
                    href="https://cal.com/shahood-saleem-gbzisb/30min"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-accent text-[11px] uppercase tracking-[0.12em] text-[#08080a] transition-transform hover:scale-[1.02]"
                  >
                    Book a Free Strategy Call
                    <ArrowRight size={14} aria-hidden />
                  </Link>
                </div>

                {/* Author Byline */}
                {post.author && (
                  <div className="mt-10 flex items-start gap-5 rounded-2xl border border-white/[0.07] bg-[#101013] p-7">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[18px] font-bold text-white/60">
                      {post.author.name[0]}
                    </div>
                    <div>
                      <p className="text-[14px] font-medium text-white">{post.author.name}</p>
                      <p className="mt-0.5 text-[12px] text-white/40">ScaleForge</p>
                      {post.author.bio && (
                        <p className="mt-2 text-[13px] leading-relaxed text-white/45">{post.author.bio}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Sticky Sidebar (desktop) */}
              <aside className="hidden lg:block">
                <div className="sticky top-32 flex flex-col gap-5">
                  {/* Sticky CTA */}
                  <div className="rounded-2xl border border-white/[0.07] bg-[#101013] p-5">
                    <p className="text-[14px] font-medium text-white">Get this done for you.</p>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/45">
                      Book a free 30-minute strategy call.
                    </p>
                    <Link
                      href="https://cal.com/shahood-saleem-gbzisb/30min"
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 font-accent text-[10.5px] uppercase tracking-[0.12em] text-[#08080a] transition-transform hover:scale-[1.02]"
                    >
                      Book a Call
                      <ArrowRight size={14} aria-hidden />
                    </Link>
                  </div>

                  {/* Share */}
                  <div className="rounded-2xl border border-white/[0.07] bg-[#101013] p-5">
                    <p className="font-accent text-[10px] uppercase tracking-[0.14em] text-white/35">Share</p>
                    <div className="mt-3 flex items-center gap-2.5">
                      <a
                        href={`https://x.com/intent/tweet?url=https://scaleforge.com/blog/${post.slug.current}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share on X"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[13px] text-white/40 transition-colors hover:border-white/25 hover:text-white/70"
                      >
                        <TwitterXIcon className="h-[13px] w-[13px] fill-current" aria-hidden />
                      </a>
                      <a
                        href={`https://linkedin.com/sharing/share-offsite/?url=https://scaleforge.com/blog/${post.slug.current}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share on LinkedIn"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[13px] text-white/40 transition-colors hover:border-white/25 hover:text-white/70"
                      >
                        <LinkedinIcon size={13} aria-hidden />
                      </a>
                      <a
                        href={`mailto:?subject=${encodeURIComponent(post.title)}&body=https://scaleforge.com/blog/${post.slug.current}`}
                        aria-label="Share via Email"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[13px] text-white/40 transition-colors hover:border-white/25 hover:text-white/70"
                      >
                        <Mail size={13} aria-hidden />
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-20 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
            <Reveal className="mb-10">
              <h2 className="mt-4 text-[clamp(1.6rem,3vw,2.2rem)] font-display font-normal leading-[1.12] text-white">
                Continue Reading
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((p) => (
                <GlassBlogCard
                  key={p._id}
                  href={`/blog/${p.slug.current}`}
                  title={p.title}
                  excerpt={p.excerpt}
                  image={p.featuredImage?.asset ? urlFor(p.featuredImage).width(480).height(270).url() : null}
                  author={p.author ? { name: p.author.name } : undefined}
                  date={formatDate(p.publishedDate)}
                  readTime={p.readTime ?? 5}
                  tags={[p.type === "case-study" ? "Case Study" : "Blog"]}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="bg-[#08080a] py-16 lg:py-20">
        <div className="mx-auto max-w-[520px] px-6 lg:px-10">
          <Reveal className="rounded-2xl border border-white/[0.07] bg-[#101013] p-8 text-center">
            <h3 className="text-[18px] font-medium text-white">Get Weekly Insights Delivered to Your Inbox</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-white/45">
              One actionable tip per week. No spam. No filler. Unsubscribe with one click.
            </p>
            <NewsletterForm compact />
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Want Us to Apply This to Your Business?"
        body="You've read the playbook. Hiring us to execute it for you is the fastest way to see results."
        primaryCta={{ label: "Book a Free Strategy Call", href: "/contact" }}
        secondaryCta={{ label: "See Our Services", href: "/services" }}
      />
    </>
  );
}
