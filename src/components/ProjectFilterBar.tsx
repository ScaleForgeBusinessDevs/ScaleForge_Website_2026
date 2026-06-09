"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const CATEGORIES = [
  { label: "All Projects", value: "all" },
  { label: "Web Design", value: "Web Design" },
  { label: "Web Development", value: "Web Development" },
  { label: "SEO", value: "SEO" },
  { label: "AI Automation", value: "AI Automation" },
  { label: "Social Media Branding", value: "Social Media Branding" },
  { label: "Content Creation", value: "Content Creation" },
];

export default function ProjectFilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get("category") ?? "all";

  const setFilter = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === "all") params.delete("category");
      else params.set("category", value);
      router.push(`/projects?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  return (
    <div className="border-b border-white/[0.06] bg-[#08080a] pb-6 pt-6">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.value}
              onClick={() => setFilter(c.value)}
              className={`rounded-full border px-4 py-2 font-accent text-[10.5px] uppercase tracking-[0.12em] transition-colors ${
                active === c.value
                  ? "border-[#5e6ad2]/50 bg-[#5e6ad2]/[0.12] text-[#a5aef0]"
                  : "border-white/[0.08] text-white/45 hover:border-white/20 hover:text-white/70"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
