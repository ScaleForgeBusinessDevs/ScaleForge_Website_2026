"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
  { label: "X", icon: "bi-twitter-x", href: "#" },
  { label: "LinkedIn", icon: "bi-linkedin", href: "#" },
  { label: "GitHub", icon: "bi-github", href: "#" },
  { label: "YouTube", icon: "bi-youtube", href: "#" },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/studio") || pathname.startsWith("/portal")) return null;

  return (
    <footer className="border-t border-white/[0.06] bg-[#08080a] pb-10 pt-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-white/[0.06] pb-14 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-8">
          <div>
            <Link href="/" aria-label="ScaleForge Home" className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-white">
              <img src="/Assets/favicon_SF.png" alt="" className="h-7 w-7 object-contain" />
              ScaleForge
            </Link>
            <p className="mt-4 max-w-[280px] text-[13.5px] leading-relaxed text-white/60">
              Visual automation for modern teams — build, run and monitor
              workflows from one workspace.
            </p>
          </div>

          <div>
            <p className="text-[13px] font-medium text-white/85">Stay in the loop</p>
            <p className="mt-2 text-[13px] text-white/60">Product news and automation tips, monthly.</p>
            <form className="mt-4 flex max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-2.5 text-[13px] text-white placeholder:text-white/30 outline-none transition-colors focus:border-white/25"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-[#2563eb] px-5 py-2.5 font-accent text-[11px] uppercase tracking-[0.12em] text-white transition-transform hover:scale-[1.03]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 py-14 sm:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[13px] font-medium text-white/85">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[13.5px] text-white/60 transition-colors hover:text-white/75">
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
                onClick={social.href === "#" ? (e) => e.preventDefault() : undefined}
                className={`flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[14px] transition-colors ${
                  social.href === "#"
                    ? "cursor-not-allowed text-white/20 opacity-50"
                    : "text-white/40 hover:border-[#5e6ad2]/40 hover:text-[#a5aef0]"
                }`}
              >
                <i className={`bi ${social.icon}`} aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
