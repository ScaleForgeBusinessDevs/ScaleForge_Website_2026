"use client";

import Link from "next/link";

export default function NewsletterForm({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <div className={compact ? "mt-6" : "mt-7"}>
        <input
          type="email"
          disabled
          placeholder="Your email address"
          className={`flex-1 w-full rounded-full border border-white/[0.06] bg-white/[0.01] text-white/20 placeholder:text-white/20 outline-none cursor-not-allowed ${
            compact ? "px-4 py-3 text-[13px]" : "px-5 py-3.5 text-[14px]"
          }`}
        />
        <p className={`text-white/35 italic ${compact ? "mt-3 text-[11.5px]" : "mt-3 text-[12px]"}`}>
          Newsletter coming soon — check back later.
        </p>
      </div>
      {!compact && (
        <p className="mt-3 text-[12px] italic text-white/30">
          We will never sell your email. Read our{" "}
          <Link href="/privacy" className="underline decoration-white/20 hover:text-white/50">
            Privacy Policy
          </Link>
          .
        </p>
      )}
    </>
  );
}
