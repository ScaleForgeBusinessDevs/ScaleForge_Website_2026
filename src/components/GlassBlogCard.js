"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { FileText, BookOpen, Clock } from "lucide-react";

export function GlassBlogCard({
  title,
  excerpt,
  image,
  author,
  date,
  readTime,
  tags,
  href,
  className = "",
}) {
  const initials = author?.name
    ? author.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "SF";

  return (
    <Reveal className={`group w-full ${className}`}>
      <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#161718]/60 backdrop-blur-md transition-all duration-300 hover:border-[#2563eb]/40 hover:shadow-xl hover:shadow-[#2563eb]/10">
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[#0f1011]">
              <FileText size={36} className="text-white/10" aria-hidden />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090a]/80 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#08090a]/60 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-white/70 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-[#08090a]/30 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Link
              href={href}
              className="flex items-center gap-2 rounded-full bg-[#2563eb] px-5 py-2.5 text-[13px] font-[500] text-white shadow-lg shadow-[#2563eb]/30 transition-transform hover:scale-[1.03]"
            >
              <BookOpen size={13} aria-hidden />
              Read Article
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 p-5">
          <div className="space-y-2">
            <h2 className="text-[16px] font-[550] leading-snug tracking-tight text-white transition-colors group-hover:text-[#93b4ff]">
              <Link href={href}>{title}</Link>
            </h2>
            {excerpt && (
              <p className="line-clamp-2 text-[13px] leading-relaxed text-white/60">
                {excerpt}
              </p>
            )}
          </div>

          {(author || date || readTime) && (
            <div className="flex items-center justify-between border-t border-white/[0.07] pt-4">
              {author && (
                <div className="flex items-center gap-2">
                  {author.avatar ? (
                    <img
                      src={author.avatar}
                      alt={author.name}
                      className="h-7 w-7 rounded-full border border-white/10 object-cover"
                    />
                  ) : (
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-[#2563eb]/20 text-[10px] font-[600] text-[#93b4ff]">
                      {initials}
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-[12px] font-[500] text-white/75">
                      {author.name}
                    </span>
                    {date && (
                      <span className="text-[11px] text-white/35">{date}</span>
                    )}
                  </div>
                </div>
              )}
              {readTime && (
                <div className="flex items-center gap-1 text-[11px] text-white/35">
                  <Clock size={11} aria-hidden />
                  <span>{readTime} min read</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}
