"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap, useGSAP } from "@/lib/gsap";

interface NavChild {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  children?: NavChild[];
}

const LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Web Design", href: "/services/web-design" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "SEO", href: "/services/seo" },
      { label: "Content Creation", href: "/services/content-creation" },
      { label: "AI Development", href: "/services/ai-development" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { y: -24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.1 }
    );
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (pathname.startsWith("/studio")) return null;

  return (
    <header ref={ref} className="fixed inset-x-0 top-4 z-50 px-4 lg:px-6">
      <nav className="relative mx-auto flex max-w-[1440px] items-center justify-between overflow-visible rounded-2xl border border-white/[0.12] bg-white/[0.05] px-6 py-3.5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.55)] backdrop-blur-2xl backdrop-saturate-150 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent"
          aria-hidden
        />

        <Link href="/" className="relative z-10 flex items-center gap-2 text-[15px] font-semibold tracking-tight">
          <img src="/Assets/favicon_SF.png" alt="" className="h-7 w-7 object-contain" />
          ScaleForge
        </Link>

        <ul className="absolute left-1/2 z-10 hidden -translate-x-1/2 items-center gap-7 font-sans text-[13px] font-[450] tracking-[-0.01em] text-white/55 lg:flex">
          {LINKS.map((link) =>
            link.children ? (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link href={link.href} className="flex items-center gap-1.5 transition-colors hover:text-[#a5aef0]">
                  {link.label}
                  <i
                    className={`bi bi-chevron-down text-[8px] transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""
                      }`}
                    aria-hidden
                  />
                </Link>
                <div
                  className={`absolute left-1/2 top-full -translate-x-1/2 pt-4 transition-all duration-200 ${servicesOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"
                    }`}
                >
                  <div className="w-60 overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0c0c0f]/95 p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-4 py-2.5 text-[11px] normal-case tracking-normal text-white/65 transition-colors hover:bg-white/[0.06] hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ) : (
              <li key={link.label}>
                <Link href={link.href} className="transition-colors hover:text-[#a5aef0]">
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="relative z-10 hidden items-center lg:flex">
          <Link
            href="/contact"
            className="rounded-full bg-[#2563eb] px-5 py-2 font-sans text-[12px] font-[550] tracking-[-0.01em] text-white transition-transform hover:scale-[1.03]"
          >
            Book a Call
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="relative z-10 flex h-9 w-9 items-center justify-center text-[18px] text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`} aria-hidden />
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-[1440px] overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0c0c0f]/90 px-6 py-6 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.55)] backdrop-blur-2xl lg:hidden">
          <ul className="flex flex-col gap-4 font-sans text-[15px] font-[450] tracking-[-0.01em] text-white/65">
            {LINKS.map((link) =>
              link.children ? (
                <li key={link.label}>
                  <button
                    className="flex w-full items-center justify-between"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    aria-expanded={mobileServicesOpen}
                  >
                    {link.label}
                    <i
                      className={`bi bi-chevron-down text-[11px] transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      aria-hidden
                    />
                  </button>
                  <div
                    className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: mobileServicesOpen ? "1fr" : "0fr" }}
                  >
                    <div className="flex min-h-0 flex-col gap-3 overflow-hidden pt-4 pl-4 text-[12px] normal-case tracking-normal text-white/50">
                      {link.children.map((child) => (
                        <Link key={child.href} href={child.href} onClick={() => setOpen(false)}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={link.label}>
                  <Link href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              )
            )}
            <li className="pt-2">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-[#2563eb] px-5 py-2 font-sans text-[12px] font-[550] tracking-[-0.01em] text-white"
                onClick={() => setOpen(false)}
              >
                Book a Call
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
