"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "All-in-One", href: "#all-in-one" },
  { label: "AI Development", href: "#ai-development" },
  { label: "Web Design & Dev", href: "#web-design-dev" },
  { label: "SEO", href: "#seo" },
  { label: "Content Creation", href: "#content" },
  { label: "Social Media", href: "#social-media" },
];

export default function PricingAnchorNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show once the hero section (~400px) has scrolled past
      setVisible(window.scrollY > 350);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 z-40 border-b border-white/[0.06] bg-[#08080a]/90 backdrop-blur-xl transition-all duration-300 ${
        visible
          ? "top-[72px] opacity-100"
          : "-top-20 opacity-0 pointer-events-none"
      }`}
    >
      <nav
        aria-label="Pricing sections"
        className="flex items-center justify-start gap-5 overflow-x-auto overscroll-x-contain px-6 py-3.5 scrollbar-none sm:justify-center sm:gap-8"
      >
        {LINKS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 font-accent text-[11px] uppercase tracking-[0.12em] text-white/50 transition-colors hover:text-[#a5aef0]"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
