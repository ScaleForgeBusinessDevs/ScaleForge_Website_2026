"use client";

import Link from "next/link";
import Reveal from "./Reveal";

interface ProjectCardProps {
  title: string;
  excerpt?: string;
  image?: string | null;
  category?: string;
  client?: string;
  href: string;
  featured?: boolean;
  className?: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  "Web Design": "bg-[#5e6ad2]/15 text-[#a5aef0] border-[#5e6ad2]/30",
  "Web Development": "bg-[#2563eb]/15 text-[#93b4ff] border-[#2563eb]/30",
  "SEO": "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  "AI Automation": "bg-violet-500/15 text-violet-300 border-violet-500/30",
  "Social Media Branding": "bg-pink-500/15 text-pink-300 border-pink-500/30",
  "Content Creation": "bg-amber-500/15 text-amber-300 border-amber-500/30",
};

export function ProjectCard({
  title,
  excerpt,
  image,
  category,
  client,
  href,
  className = "",
}: ProjectCardProps) {
  const categoryStyle = category
    ? (CATEGORY_COLORS[category] ?? "bg-white/[0.07] text-white/50 border-white/10")
    : "";

  return (
    <Reveal className={`group w-full ${className}`}>
      <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#161718]/60 backdrop-blur-md transition-all duration-300 hover:border-[#2563eb]/40 hover:shadow-xl hover:shadow-[#2563eb]/10">

        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[#0f1011]">
              <i className="bi bi-grid-1x2 text-[40px] text-white/10" aria-hidden />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090a]/80 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30" />

          {/* Category badge */}
          {category && (
            <div className="absolute bottom-3 left-3">
              <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-[500] tracking-wide backdrop-blur-sm ${categoryStyle}`}>
                {category}
              </span>
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-[#08090a]/40 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Link
              href={href}
              className="flex items-center gap-2 rounded-full bg-[#2563eb] px-5 py-2.5 text-[13px] font-[500] text-white shadow-lg shadow-[#2563eb]/30 transition-transform hover:scale-[1.03]"
            >
              <i className="bi bi-arrow-up-right text-[13px]" aria-hidden />
              View Project
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 p-5">
          <div className="space-y-1.5">
            <h3 className="text-[16px] font-[550] leading-snug tracking-tight text-white transition-colors group-hover:text-[#93b4ff]">
              <Link href={href}>{title}</Link>
            </h3>
            {client && (
              <p className="text-[11.5px] font-[450] uppercase tracking-[0.08em] text-white/35">{client}</p>
            )}
            {excerpt && (
              <p className="line-clamp-2 text-[13px] leading-relaxed text-white/45">{excerpt}</p>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
