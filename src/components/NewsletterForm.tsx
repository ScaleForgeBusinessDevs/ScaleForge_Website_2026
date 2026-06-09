"use client";

import Link from "next/link";

export default function NewsletterForm({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <form
        className={`flex gap-2.5 ${compact ? "mt-6 flex-col sm:flex-row" : "mt-7 flex-col sm:flex-row"}`}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="Your email address"
          className={`flex-1 rounded-full border border-white/[0.1] bg-white/[0.03] text-white placeholder:text-white/30 outline-none focus:border-white/25 ${
            compact ? "px-4 py-3 text-[13px]" : "px-5 py-3.5 text-[14px]"
          }`}
        />
        <button
          type="submit"
          className={`shrink-0 rounded-full bg-[#2563eb] font-accent uppercase tracking-[0.12em] text-white transition-transform hover:scale-[1.02] ${
            compact ? "px-5 py-3 text-[11px]" : "px-6 py-3.5 text-[11px]"
          }`}
        >
          {compact ? "Subscribe" : "Subscribe for Free"}
        </button>
      </form>
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
