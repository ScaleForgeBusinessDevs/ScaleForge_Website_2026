"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { TwitterXIcon } from "./TwitterXIcon";
import { LinkedinIcon, GithubIcon, YoutubeIcon } from "./BrandIcons";

const COLUMNS = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions" },
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "AI Development", href: "/services/ai-development" },
      { label: "Web Design", href: "/services/web-design" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "SEO", href: "/services/seo" },
      { label: "Content Creation", href: "/services/content-creation" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

const SOCIALS = [
  // TODO: Replace placeholder hrefs with real social URLs once supervisor confirms
  { label: "X", icon: TwitterXIcon, href: "#" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "#" },
  { label: "GitHub", icon: GithubIcon, href: "#" },
  { label: "YouTube", icon: YoutubeIcon, href: "#" },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/studio") || pathname.startsWith("/portal"))
    return null;

  return (
    <footer className="border-t border-white/[0.06] bg-[#08080a] pb-10 pt-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-white/[0.06] pb-14 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-8">
          <div>
            <Link
              href="/"
              aria-label="ScaleForge Home"
              className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-white"
            >
              <img
                src="/Assets/favicon_SF.png"
                alt=""
                className="h-7 w-7 object-contain"
              />
              ScaleForge
            </Link>
            <p className="mt-4 max-w-[280px] text-[13.5px] leading-relaxed text-white/60">
              Bespoke web development, content creation, and custom AI
              automations designed for scale.
            </p>
          </div>

          <div>
            <p className="text-[13px] font-medium text-white/85">
              Stay in the loop
            </p>
            <p className="mt-2 text-[13px] text-white/60">
              Product news and automation tips, monthly.
            </p>
            <div className="mt-4 max-w-sm">
              <input
                type="email"
                disabled
                placeholder="Your email"
                className="w-full rounded-full border border-white/[0.06] bg-white/[0.01] px-4 py-2.5 text-[13px] text-white/20 placeholder:text-white/20 outline-none cursor-not-allowed"
              />

              <p className="mt-2 text-[12px] italic text-white/35">
                Newsletter coming soon — check back later.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 py-14 sm:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[13px] font-medium text-white/85">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13.5px] text-white/60 transition-colors hover:text-white/75"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center">
          <p className="text-[12.5px] text-white/60">
            © {new Date().getFullYear()} ScaleForge, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                aria-disabled={social.href === "#" ? "true" : undefined}
                onClick={
                  social.href === "#" ? (e) => e.preventDefault() : undefined
                }
                className={`flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[14px] transition-colors ${
                  social.href === "#"
                    ? "cursor-not-allowed text-white/20 opacity-50"
                    : "text-white/40 hover:border-[#5e6ad2]/40 hover:text-[#a5aef0]"
                }`}
              >
                <social.icon size={14} aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
