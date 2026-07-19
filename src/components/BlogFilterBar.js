"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const TYPES = [
  { label: "All Articles", value: "all" },
  { label: "Blogs", value: "blog" },
  { label: "Case Studies", value: "case-study" },
];

export default function BlogFilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeType = searchParams.get("type") ?? "all";

  const setFilter = useCallback(
    (value) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === "all") {
        params.delete("type");
      } else {
        params.set("type", value);
      }
      params.delete("topic");
      router.push(`/blog?${params.toString()}`, { scroll: false });
    },
    [router, searchParams],
  );

  return (
    <div className="border-b border-white/[0.06] bg-[#08080a] pb-6 pt-6">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex flex-wrap items-center gap-2">
          {TYPES.map((t) => (
            <button
              key={t.value}
              onClick={() => setFilter(t.value)}
              className={`rounded-full border px-4 py-2 font-accent text-[10.5px] uppercase tracking-[0.12em] transition-colors ${
                activeType === t.value
                  ? "border-[#5e6ad2]/50 bg-[#5e6ad2]/[0.12] text-[#a5aef0]"
                  : "border-white/[0.08] text-white/60 hover:border-white/20 hover:text-white/70"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
